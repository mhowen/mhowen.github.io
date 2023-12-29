<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'M. Harry Owen',
});

const router = useRouter();
router.options.scrollBehavior = (to) => {
  if (to.hash) return {
    el: to.hash,
    top: 90,
    behavior: 'smooth',
  }
  return { top: 0 }
}
</script>

<style>
  .page-enter-active,
  .page-leave-active,
  .layout-enter-active,
  .layout-leave-active {
    transition: all 400ms;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    filter: grayscale(1);
  }
</style>
