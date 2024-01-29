<script setup>
const env = useRuntimeConfig();
const sb_url = env.public.supabase_url;
const sb_anon_key = env.public.supabase_anon_key;
const parser_url = sb_url + '/functions/v1/contact-form';

const fields = useFormData();

// service fieldset is populated by this Array
const svc_options = [
  "Custom Websites",
  "Web Hosting",
  "Modernization",
  "Data Management",
  "UI/UX Design",
  "Consultation",
];

// since it's tricky to v-model boolean from fieldset, watch for changes here
const form_pref = ref('email');
watch(form_pref, (newPref) => {
  fields.value.prefer_phone = newPref === 'phone' ? true : false;
})

const res_waiting = ref(false);
const res_status = ref(0);
const res_error = ref('');

// allow submission if required fields are filled
const submit_allowed = computed(() => {
  return fields.value.name.length > 0
    && fields.value.email.length > 0
    && fields.value.message.length > 0
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
    name: fields.value.name,
    email: fields.value.email,
    tel:  fields.value.phone,
    pref: fields.value.prefer_phone,
    category:  fields.value.intent + '/' + fields.value.category,
    message:  fields.value.message,
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
      <p class="no-worries fs-0">
        Not to worry&#151;I'll never give out your info or send you unsolicited communications.
      </p>

      <div class="form-select">
        <button
          class="btn"
          style="border-right: 0.125rem solid #808080"
          :class="{ selected: fields.intent === 'INFO' }"
          @click="fields.intent = 'INFO'"
        >Get Information</button>
        <button
          class="btn"
          style="border-left: none;"
          :class="{ selected: fields.intent === 'QUOTE' }"
          @click="fields.intent = 'QUOTE'"
        >Request a Quote</button>
      </div>

      <form class="form" @submit.prevent="submitForm">
        <InputLine
          label="Your Name"
          placeholder="What should I call you?"
          v-model="fields.name"
          class="input-inline"
          required
          :disabled="!control_allowed" />
        <InputLine
          input-type="email"
          label="Your Email"
          placeholder="you@site.com"
          v-model.trim="fields.email"
          class="input-inline"
          required
          :disabled="!control_allowed" />
        <InputLine
          input-type="tel"
          label="Daytime Phone (optional)"
          placeholder="e.g., (123) 555-5555"
          v-model="fields.phone"
          class="input-inline"
          :disabled="!control_allowed" />
        <InlineFieldset
          :options="['email', 'phone']"
          :disabled="!control_allowed"
          legend="Contact Preference"
          class="input-inline"
          v-model="form_pref" />
        <DynamicFieldset
          :options="svc_options"
          :disabled="!control_allowed"
          :legend="fields.intent === 'info'
            ? 'Which of these categories are you interested in?'
            : 'For which service can I get you a quote?'
          "
          default_option="Not sure&#151;I'll tell you more below!"
          v-model="fields.category" />
        <DynamicTextarea v-model="fields.message">
          Tell me more about
          <span
            class="c-accent fw-bold"
            v-if="fields.intent === 'QUOTE'">the vision you want to achieve.</span>
          <span class="c-accent fw-bold" v-else>what I can clear up for you.
          </span>
          Don't hesitate to include any links or resources you'd like for me to look at!

          <p v-if="fields.intent === 'QUOTE'" class="mt-4">
            At your discretion, feel free to also include your budget and/or timeframe if
            you have them in mind.
          </p>
        </DynamicTextarea>

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
  margin-block: 2rem;
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
  margin-block: 2rem;
  max-width: var(--form-max-inline);
}
.form-select {
  background-color: var(--c-secondary);
  display: flex;
}
.form-select > .btn {
  border: 0.125rem solid var(--c-white);
  border-bottom: 1px solid #808080;
  border-radius: 0;
  color: #808080;
  font-weight: 200;
}
.form-select > .btn.selected {
  color: var(--c-accent);
  flex: 1 0 auto;
  font-weight: 400;
}
.form {
  border: 0.125rem solid var(--c-white);
  border-top: none;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--step-0);
  gap: 2rem 1rem;
  padding: 1rem;
}
.input-inline {
  display: flex;
  flex-direction: column-reverse;
  flex: 1 0 min(20rem, 100%);
  gap: 0.5rem;
}
.label { color: var(--c-accent) }
.form > .btn {
  flex-grow: 1;
  font-weight: 700;
  padding-block: 0.5em;
}
</style>

