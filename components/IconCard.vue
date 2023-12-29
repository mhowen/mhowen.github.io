<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String
  }
})
</script>

<template>
  <div class="card icon-card">
    <Icon
      :name="icon"
      height="none"
      class="icon-card__icon"/>
  </div>
</template>

<style scoped>
.icon-card {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
}
.icon-card__icon {
  height: 100%;
  transform: scale(0.9);
  transition: transform 250ms ease-out;
  width: 100%;
}
.icon-card:hover > .icon-card__icon {
  transform: scale(1.0);
}
</style>
