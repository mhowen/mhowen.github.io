<script setup>
const env = useRuntimeConfig();
const sb_url = env.public.supabase_url;
const sb_anon_key = env.public.supabase_anon_key;
const parser_url = sb_url + '/functions/v1/contact-form';

// service fieldset is populated by this Array
const svc_options = [
  "Web Design",
  "Hosting",
  "CMS Design",
  "Data Management",
  "UI/UX Design",
  "Consultation",
];

const form_name = ref('');
const form_mail = ref('');
const form_tel  = ref('');
const form_pref = ref('email');
const form_svc  = ref('uncategorized');
const form_msg  = ref('');

const res_waiting = ref(false);
const res_status = ref(0);
const res_error = ref('');

// allow submission if required fields are filled
const submit_allowed = computed(() => {
  return form_name.value?.length > 0
    && form_mail.value?.length > 0
    && form_msg.value?.length > 0
    && res_status.value !== 201 // no submits after a successful attempt
})

// disable inputs if awaiting response or submission was successful
const control_allowed = computed(() => {
  return res_waiting.value === false && res_status.value !== 201
})

async function submitForm() {
  if (res_waiting.value === true || !submit_allowed.value) return;

  res_status.value = 0;
  res_error.value = '';

  const rawInputs = {
    name: form_name.value,
    email: form_mail.value,
    tel:  form_tel.value,
    pref: form_pref.value,
    category:  form_svc.value,
    message:  form_msg.value,
  } // real-deal sanitizing and validation take place in server code
  const { data } = validateContactForm(rawInputs)

  try {
    res_waiting.value = true;

    const response = await fetch(parser_url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Authorization": `Bearer ${sb_anon_key}`, }
    });
    res_status.value = response.status;

    // this should only happen if someone deliberately subverts client validation
    if (response.status === 400) {
      const err = await response.json();
      const fields = Object.entries(err).map(e => e[0]);
      let msg = "The following field(s) couldn't be validated: ";
      fields.forEach(f => msg += f + ' ');
      throw Error(msg);
    }
    // TODO: handling for unlikely yet sincere errors of, e.g., email formatting
    else if (response.status !== 201) throw Error('Unexpected server issue -- try again in just a minute.')
  } catch(error) {
    res_error.value = error;
  } finally {
    res_waiting.value = false;
  }
}
</script>

<template>
  <div class="page-contact">    
    <h1>Get in Touch</h1>

    <div class="contact">
      <p class="contact-msg">
        I'm so glad to hear you're interested in learning more! Just fill out and submit this form,
        and I'll get back to you inside 24–48 hours. I look forward to hearing from you!
      </p>

      <form class="form" @submit.prevent="submitForm">
        <p class="no-worries">
          Not to worry&#151;I'll never give out your info or send you unsolicited communications.
        </p>

        <InputLine
          label="Your Name"
          placeholder="What should I call you?"
          v-model="form_name"
          class="input-inline"
          required
          :disabled="!control_allowed"
        />
        <InputLine
          input-type="email"
          label="Your Email"
          placeholder="you@site.com"
          v-model.trim="form_mail"
          class="input-inline"
          required
          :disabled="!control_allowed"
        />
        <InputLine
          input-type="tel"
          label="Daytime Phone (optional)"
          placeholder="e.g., (123) 555-5555"
          v-model="form_tel"
          class="input-inline"
          :disabled="!control_allowed"
        />
        <InlineFieldset
          :options="['email', 'phone']"
          :disabled="!control_allowed"
          legend="Contact Preference"
          class="input-inline"
          v-model="form_pref"
        />
        <DynamicFieldset
          :options="svc_options"
          :disabled="!control_allowed"
          legend="Which of these can I help you with?"
          default_option="Not sure&#151;I'll tell you more below!"
          v-model="form_svc"
        />
        <div class="form-textarea" :class="{ disabled: !control_allowed }">
          <label for="details" class="label-long">
            Tell me more about
            <span class="c-accent fw-bold">the vision you want to achieve.</span>
            Feel free to include any links or resources you'd like for me to look at!
          </label>
          <textarea
            id="details"
            name="details"
            maxlength="5200"
            class="input"
            rows="6"
            placeholder="Your remit here..."
            v-model.trim="form_msg"
            required
            :disabled="!control_allowed"
          >
          </textarea>
        </div>

        <p v-if="res_waiting" class="msg msg-waiting">Awaiting response from server...</p>
        <p v-else-if="res_status === 201" class="msg">
          <span class="msg-success">Success!</span>
          Thanks again for your interest&#151;I've got your info and will be in touch soon.
        </p>
        <p v-if="res_error" class="msg msg-error"> {{ res_error }} </p>

        <input
          v-if="res_status !== 201"
          type="submit"
          class="btn btn-accent"
          :value="submit_allowed ? 'Send It!' : 'Please fill in required fields'"
          :disabled="!submit_allowed"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.msg {
  min-width: 100%;
  padding-block: 0.5em;
  text-align: center;
}
.msg-waiting,
.msg-success { color: var(--c-accent) }
.msg-error { color: #ff4444 }
.no-worries {
  color: #808080;
  font-style: italic;
  min-width: 100%;
  text-align: center;
}
.page-contact {
  --form-max-inline: 50rem;
  --leftover: calc((100vw - var(--dw-content-wide)) / 2);
  display: grid;
  align-items: start;
  grid-template-rows: auto 1fr;
  padding-inline: max(calc(var(--leftover) + 1rem), 1rem);
}
.contact {
  display: grid;
  font-size: var(--step-1);
  gap: 2rem;
  margin-block: 2rem;
  max-width: var(--form-max-inline);
}
.form {
  display: flex;
  flex-wrap: wrap;
  font-size: var(--step-0);
  gap: 2rem 1rem;
}
.form-textarea {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}
.form-textarea.disabled {
  filter: grayscale();
  opacity: 0.25;
}
.input-inline {
  display: flex;
  flex-direction: column-reverse;
  flex: 1 0 min(20rem, 100%);
  gap: 0.5rem;
}
.label { color: var(--c-accent) }
.label-long { text-align: start }
.input {
  appearance: none;
  background-color: var(--c-secondary);
  color: var(--c-text);
  padding: 0.5rem 1rem;
}
.input::placeholder { font-style: italic }
.form > .btn {
  flex-grow: 1;
  font-weight: 700;
  padding-block: 0.5em;
}
</style>
