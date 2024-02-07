<script setup>
defineProps({
  layout: {
    type: String,
    default: 'home',
  }
})
</script>

<template>
  <div class="demolayout" :class="layout">
    <Transition name="layoutfade" mode="out-in">
      <div class="blog" v-if="layout === 'blog'">
        <h1 class="blog-heading">Blog</h1>
        <div class="blog-info">
          <h3>About</h3>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
          </ul>
        </div>
        <div class="blog-body">
          <h2>Eye-Catching Title!</h2>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
            enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
            amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
            ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
            cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
            laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
            ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div class="blog-comments">
          <h3>Discuss</h3>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
          </ul>
        </div>
        <div class="blog-footer">
          <p>Blog Footer</p>
        </div>
      </div>

      <div class="store" v-else-if="layout === 'store'">
        <h1 class="store-heading">Store</h1>
        <div class="store-main">
          <div class="sidebar">
            <h3>Shopping Cart</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div class="items">
            <ul>
              <li v-for="i in 15" :key="'item' + i" class="item">
                <p>Item Image</p>
                <p>Item Desc.</p>
                <p> ***** </p>
                <p> $0.01 </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="home" v-else>
        <h1 class="home-heading fw-black uppercase">Company</h1>
        <p class="home-tagline">
          <span class="fw-bold uppercase">Lorem</span>
          <span class="fw-thin italic"> made </span>
          <span class="fw-bold uppercase">Ipsum</span>
        </p>
        <div class="home-buttons">
          <button class="fw-bold uppercase">Try Now</button>
          <button class="uppercase">Learn More</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.layoutfade-enter-active,
.layoutfade-leave-active {
  transition: opacity 500ms ease;
}
.layoutfade-enter-from,
.layoutfade-leave-to {
  opacity: 0;
}
.demolayout {
  container: cnt-demolayout / inline-size;
  background-color: #404040;
  min-height: 100%;
  max-height: 1000px;
  padding-inline: 1rem;
}
.demolayout.home {
  display: grid;
  place-content: center;
  text-align: center;
}
.demolayout.blog {
  display: flex;
  flex-direction: column;
}
.demolayout h1:not(.home-heading) {
  font-size: clamp(3rem, 15cqw + 0.125rem, 4.5rem);
  padding-block: 1rem;
}
.demolayout h2 { font-size: clamp(1.75rem, 10cqw + 0.125rem, 4rem) }
.demolayout h3 { font-size: clamp(1.5rem, 8cqw + 0.125rem, 3rem) }
.home-heading { font-size: clamp(3rem, 18cqw + 0.125rem, 10rem) }
.home-tagline { font-size: clamp(1.5rem, 10cqw, 4rem) }
.home-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-top: 3rem;
  padding-inline: 1rem;
}
.home-buttons > button {
  flex: 1 0 min(18rem, 100%);
  font-size: clamp(1rem, 4cqw, 1.5rem);
  padding-block: 1rem;
}
.home-buttons > button:last-of-type {
  background: none;
  color: #fefefe;
}
.store {
  font-size: clamp(1rem, 4cqw + 0.125rem, 1.5rem);
  padding-bottom: 1rem;
}
.store-main {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.sidebar {
  border: 0.125rem solid #141414;
  flex: 1 1 25rem;
}
.items {
  flex: 999 1 0;
  min-inline-size: 70%;
}
.items > ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  list-style: none;
  padding-inline-start: 0;
}
.item {
  aspect-ratio: 1;
  border: 0.125rem solid #141414;
  padding: 1rem;
}
.blog {
  flex: 1;
  font-size: clamp(1rem, 4cqw + 0.125rem, 1.5rem);
  display: grid;
  grid-template-areas: "head" "bar1" "body" "bar2" "foot";
  grid-template-rows: auto auto 1fr auto auto;
}
.blog-heading {
  grid-area: head;
}
.blog-info,
.blog-body,
.blog-comments,
.blog-footer {
  padding: 1rem;
}
.blog-info {
  grid-area: bar1;
  border: 0.125rem solid #141414;
  border-bottom: none;
}
.blog-body {
  grid-area: body;
  border-top: 0.125rem solid #141414;
}
.blog-body > p { max-width: 60ch }
.blog-comments {
  grid-area: bar2;
  border: 0.125rem solid #141414;
  border-bottom: none;
}
.blog-footer {
  grid-area: foot;
  border-top: 0.125rem solid #141414;
}
@container cnt-demolayout (min-width: 40rem) {
  .blog {
    grid-template-areas: "head head" "bar1 body" "bar2 bar2" "foot foot";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
  }
}
@container cnt-demolayout (min-width: 80rem) {
  .blog {
    grid-template-areas:
      "head head head"
      "bar1 body bar2"
      "foot foot foot";
    grid-template-columns: 1fr auto 1fr;
  }
}
</style>

