<template>
  <div class="resume-card">
    <div class="resume-card__content">
      <hgroup class="resume-card__hgroup">
        <h3 class="font-bold"> {{ title }} </h3>
        <p v-if="subtitle" class="font-italic fs-h4"> {{ subtitle }} </p>
      </hgroup>
  
      <div class="resume-card__byline">
        <slot name="byline" />
      </div>
  
      <div class="resume-card__main">
        <h4 v-if="contentLabel"> {{ contentLabel }} </h4>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: '',
  },
  contentLabel: {
    type: String,
    default: '',
  }
});

</script>

<style scoped>
.resume-card {
  --bordercolor: hsl(var(--hs-secondary) 50%);
  border-bottom: 0.25rem solid var(--bordercolor);
  border-right: 0.25rem solid var(--bordercolor);
  border-radius: 0.5rem;
  box-shadow: var(--bs);
  margin-bottom: 0.75rem;
}
.resume-card__content {
  background: linear-gradient(135deg, var(--c-secondary), hsl(var(--hs-secondary) 65%));
  padding: 0.5rem;
}
.resume-card__hgroup {
  margin-bottom: 1rem;
}
/* .resume-card__hgroup > h3 {
  font-size: var(--fs-h3);
}
.resume-card__hgroup > p {
  font-size: var(--fs-h4);
  font-style: italic;
} */

@media (min-width: 600px) {
  .resume-card {
    position: relative;
    margin: 0;
  }
  .resume-card__content {
    border-radius: 0.25rem;
    padding: 0.5rem;
    position: relative;
    inset: 0;
    min-height: 100%;
    transition: border-radius 100ms ease;
    transition: inset 100ms ease;
  }
  .resume-card__hgroup {
    display: flex;
    justify-content: space-between;
  }
}
</style>
