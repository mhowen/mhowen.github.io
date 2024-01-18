<script setup>
const env = useRuntimeConfig();
const [sb_url, sb_key] = [env.public.supabase_url, env.public.supabase_anon_key];

const form_name = ref('Testboi');
const form_mail = ref('test@boi.net');
const form_tel  = ref('');
const form_svc  = ref('');
const form_msg  = ref('Temporary comment string!');

async function submitForm() {
  const rawInputs = {
    name: form_name.value,
    mail: form_mail.value,
    tel:  form_tel.value,
    type: 'contact',
    interest:  form_svc.value,
    message:  form_msg.value,
  }

  // TODO: this for real
  const validatedFormData = { ...rawInputs };

  try {
    const response = await fetch(`${sb_url}/functions/v1/parse-form`, {
      method: 'POST',
      body: JSON.stringify(validatedFormData),
      headers: {
        "Authorization": `Bearer ${sb_key}`,
      }
    });

    if (response.status !== 200 && response.status !== 201) {
      console.log('got a bad response:', response)
      // TODO: write helper function to handle bad responses
      return;
    }

    // TODO: reactive frontend element to indicate success/failure state
    console.log('posted with 200!')
  } catch (error) {
    console.error('found this:', error)
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
        <div class="form-input inline">
          <label for="name" class="label">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="What should I call you?"
            class="input text-center"
            v-model="form_name"
            required
             />
        </div>
        <div class="form-input inline">
          <label for="email" class="label">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@site.com"
            class="input text-center"
            v-model="form_mail"
            required/>
        </div>
        <div class="form-input inline">
          <label for="phone" class="label">Daytime Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (123) 555-5555"
            class="input text-center"
            v-model="form_tel" />
        </div>
        
        <div class="form-input inline">
          <label for="service_select" class="label">Service of Interest</label>
          <select
            id="service_select"
            name="service"
            class="input text-center"
            v-model="form_svc">
            <option disabled value="">--Choose an Option--</option>
            <option value="test option 1">Option 1</option>
            <option value="test option 2">Option 2</option>
            <option value="test option 3">Option 3</option>
            <option value="">Not sure -- details below!</option>
          </select>
        </div>
        <div class="form-input">
          <label for="details" class="label-long">
            In as many words as you like, tell me more about
            <span class="c-accent fw-bold">what I can do for you.</span>
            Feel free to include any links or resources you'd like for me to look at!
          </label>
          <textarea
            id="details"
            name="details"
            class="input"
            rows="6"
            placeholder="Your remit here..."
            v-model="form_msg"
            required></textarea>
        </div>
        <input
          type="submit"
          class="btn btn-accent"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.testman {
  position: absolute;
  left: 60%;
  top: 10%;
}
.page-contact {
  --form-max-inline: 50rem;
  --leftover: calc((100vw - var(--dw-content-wide)) / 2);
  display: grid;
  align-items: start;
  grid-template-rows: auto 1fr;
  padding-inline: max(calc(var(--leftover) + 1rem), 1rem);
  /* inline padding >=1rem plus however much is needed to align flush with header */
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
.form-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}
.form-input.inline {
  flex-direction: column-reverse;
  flex: 1 0 20rem;
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
.form > .btn { flex-grow: 1 }
</style>
