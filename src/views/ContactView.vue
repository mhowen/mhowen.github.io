<script setup lang="ts">
// import { computed, ref } from "vue";
import { ref } from "vue";

const form_name = ref("");
const form_email = ref("");
const form_body = ref("");

// Use this for now to temporarily force disable
const is_incomplete = ref(true);
// const is_incomplete = computed(() => (
//   form_name.value.length == 0 ||
//   form_email.value.length == 0 ||
//   form_body.value.length == 0
// ));

function validate_form() {
  if (is_incomplete.value) return;

  const data = {
    name: form_name.value,
    email: form_email.value,
    body: form_body.value,
  };

  // TODO: Actual validation
  if (!data.email.includes("@") || !data.email.includes(".")) return;

  // TODO NEXT: hook up to backend
}
</script>

<template>
  <main class="fw-grid">
    <h1 class="uppercase">Contact</h1>
    <section class="mb-step-3">
      <p class="mb-l">
        Just have a question? No problem!
        <a href="mailto:mho@mharryowen.com">Shoot me an email</a>
        and I'll get back to you as soon as I can.
      </p>
      <p class="mb-l">
        I offer a full complement of Web design and development services to
        individual and small-business clients for any or every stage of the
        development life cycle. If you’re mostly covered but could use some help
        on a particular aspect of the process,
        <a href="https://www.upwork.com/freelancers/~017901b0355f7b7d99">
          check me out on Upwork
        </a>
        where I sell narrowly scoped services à la carte.
      </p>
      <p>
        Think I could help you with something more ambitious? Fill out the form
        below and I’ll get in touch. Whether or not we sign a contract, I’d love
        to hear about your vision!
      </p>
    </section>
    <form class="ff-oswald fw-300 mb-step-4 inactive">
      <div class="input input-line mb-xl">
        <label for="contact-name">Your Name</label>
        <input id="contact-name"
          v-model="form_name"
          type="text"
          placeholder="Your name here" />
      </div>
      <div class="input input-line mb-xxl">
        <label for="contact-email">Your Email</label>
        <input id="contact-email"
          v-model="form_email"
          type="email"
          placeholder="Your email here" />
      </div>
      <div class="input mb-xxl">
        <label for="contact-body" class="mb-xs">What can I help you with?</label>
        <textarea id="contact-body" class="ff-main" v-model="form_body"
          rows="8"
          placeholder="Details here"
        ></textarea>
      </div>
      <button class="btn btn-submit uppercase"
        :disabled="is_incomplete"
        @click.prevent="validate_form"
      >{{ is_incomplete ? "Fill All Fields" : "Send it" }}</button>
    </form>
  </main>
</template>

<style scoped>
p,
form {
  max-width: 35em;

  font-size: calc(var(--step-0) * var(--halfstep));
}
form.inactive {
  position: relative;
}
form.inactive::after {
  background-color: var(--clr-background-75);
  backdrop-filter: blur(0.25rem);

  content: "COMING 31 MAY 2024";
  font-size: var(--step-2);
  position: absolute;
  inset: 0;
  padding-block: 40%;
  text-align: center;
}
.input > label {
  line-height: 0.9;

  font-family: Oswald, Inter;
  font-size: calc(var(--step-1) * var(--halfstep));
}
.input > input,
.input > textarea {
  background-color: var(--clr-background);
  border: 0.125rem solid var(--clr-text-soft);
  color: var(--clr-text);
}
.input {
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
}
.input-line {
  flex-direction: column-reverse;
}
.input-line > input {
  border-width: 0 0 0.125rem 0;
  font-size: var(--step-1);
  font-weight: 300;
}
.btn-submit {
  min-width: 100%;
  
  outline: 0.125em solid var(--clr-text);
  border: 0.125em solid var(--clr-background);
  font-size: calc(var(--step-1) * var(--halfstep));
}
.btn-submit[disabled] {
  color: var(--clr-background);
  outline-color: var(--clr-background-mute);
}
</style>

