<template>
  <footer class="app-footer">
    &#169; 2024 M. H. Owen
    <a href="mailto:mho@mharryowen.com" class="footer-link">mho@mharryowen.com</a>
  </footer>
</template>

<style scoped>
  .app-footer {
    position: absolute;
    bottom: 0;
    height: var(--dh-footer);
    min-width: 100%;
    padding-inline: 1rem;
    border-top: 0.125rem solid var(--c-accent);
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
