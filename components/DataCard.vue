<script setup>
defineProps({
  title: {
    type: String,
  },
  btnLabel: {
    type: String,
    default: 'Get a Free Quote',
  },
  price: {
    type: String,
  },
})
</script>

<template>
  <div class="datacard card">
    <h5 v-if="title" class="datacard-title"> {{ title }} </h5>
    <div v-else> <slot name="title" /> </div>
  
    <p class="datacard-body">
      <slot />
    </p>

    <div class="datacard-ctrl">
      <p v-if="price">
        From <span class="datacard-ctrl__price"> ${{ price }} </span>
      </p>
      <button class="btn btn-accent hover-fill"> {{ btnLabel }} </button>
    </div>
  </div>
</template>

<style scoped>
.datacard {
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  width: min(27rem, 100%);
}
.datacard-title {
  color: var(--c-accent);
  font-size: 2rem;
  font-weight: 200;
  text-transform: uppercase;
}
.datacard-body {
  padding-block: 2rem 3rem;
  text-wrap: pretty;
}
.datacard-ctrl {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}
</style>
