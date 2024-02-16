<script setup>
defineProps({
  deviceXY: {
    type: Array,
    required: true,
  }
});

const fakes = ['⚙️', '🗜️', '⚖️', '🛠️', '🔗', '🔧', '🪛', '🔬', '⚗️'];
function pickFakeImg() {
  const rIndex = Math.floor(Math.random() * fakes.length)
  return fakes[rIndex]
}
</script>

<template>
  <div class="layout"
    :style="{
      '--dx': deviceXY[0],
      '--dy': deviceXY[1],
    }"
  >
    <div class="store">
      <div class="store-heading">
        <h1 class="fw-light italic">Store.biz</h1>
        <p class="c-mutest">Search trillions of items...</p>
      </div>
      <div class="category-readout">
        <p class="fw-bold">Machinery & Tools</p>
        <p class="c-mutest fs-sm italic">Merchandise satisfying Unicode Object specifications</p>
      </div>
      <div class="store-main">
        <div class="sidebar">
          <div class="sidebar-content">
            <div class="categories">
              <h2 class="fs-md"> Departments </h2>
              <ul class="fs-sm">
                <li>Appliances</li>
                <li>Clothing</li>
                <li>Electronics</li>
                <li>Kitchen</li>
                <li class="c-muted underline">Machinery & Tools</li>
                <li>Office</li>
                <li>Outdoors</li>
              </ul>
            </div>
            <div class="cart">
              <h2 class="fs-md"> Cart </h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="items">
          <ul>
            <li
              v-for="i in 15"
              :key="'item' + i"
              class="item" 
              :data-fakeimg="pickFakeImg()"
            >
              <p>
                <span class="fs-md fw-bold">Item Name </span>
                <span class="c-muted fs-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur impedit saepe ipsa molestiae corrupti officia magni...</span>
              </p>
              <p class="fs-md" style="color: hsl(var(--hs-accent-alt) 51%);">
                &#9733;&#9733;&#9733;&#9733;{{ Math.random() > 0.5 ? '\u2605' : '\u2606' }}
              </p>
              <p class="fs-md fw-bold"> $0.01 </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  --dy-max: calc(100vh - var(--dh-header) - var(--dh-footer));
  --dx: 100vw;
  --dy: var(--dy-max);
  --pad-x: calc((100vw - var(--dx)) / 2);
  --pad-y: calc((var(--dy-max) - var(--dy)) / 2);
  display: grid;
  grid-template-columns: var(--pad-x) 1fr var(--pad-x);
  grid-template-rows: var(--pad-y) 1fr var(--pad-y);
  max-height: var(--dy-max);

  transition: all 500ms ease-in;
} .layout > * { grid-column: 2; grid-row: 2; }
.c-muted { color: var(--clr-muted) }
.c-mutest { color: var(--clr-mutest) }
.c-white { color: var(--clr-white) }
.fs-sm { font-size: 1rem }
.fs-md { font-size: 1.5rem }

.store {
  --clr-primary: hsl(214 100% 56%);
  --clr-alt: hsl(var(--hs-accent-alt) 51%);
  --clr-muted: hsl(214 50% 56%);
  --clr-mutest: #606060;
  --clr-white: #fefefe;
  --clr-black: #141414;
  container: cnt-storelayout / inline-size;
  max-height: var(--dy);
  overflow: hidden auto;
  transition: max-height 500ms ease-in;

  background-color: var(--clr-white);
  color: var(--clr-black);
  display: grid;
  grid-template-rows: auto auto 1fr;
}
.store-heading {
  background-color: hsl(215 75% 70%);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  align-items: center;
  padding: 1rem;
}
.store-heading > h1 {
  color: var(--clr-white);
  font-family: var(--ff-mono);
  font-size: clamp(3rem, 15cqw + 0.125rem, 4rem);
  text-shadow: 2px 2px 1px var(--clr-alt);
  text-transform: uppercase;
}
.store-heading > p {
  user-select: none;
  flex: 1 1 max-content;
  background-color: var(--clr-white);
  border: 1px solid var(--clr-mutest);
  border-radius: 100vw;
  font-size: 1rem;
  font-style: italic;
  padding: 0.5rem 1rem;
  position: relative;
}
.store-heading > p::after {
  content: "➡";
  color: var(--clr-white);
  background-color: var(--clr-alt);
  border-top-right-radius: 100vw;
  border-bottom-right-radius: 100vw;
  font-size: 2rem;
  line-height: 1;
  padding: 0.25rem 0 0 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 3rem;
}
.category-readout {
  background-image: linear-gradient(180deg, hsl(215 75% 70%), hsl(215 55% 85%), transparent);
  padding-inline: 1rem;
  padding-block: 2rem 1rem;
}
.store-main {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
}
.sidebar {
  flex: 1 1 25rem;
  border-block: 1px solid var(--clr-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
.sidebar-content {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(1rem);
}
.sidebar-content h2 {
  padding: 1rem;
}
.sidebar-content ul {
  display: none;
  list-style: none;
  padding-inline: 1rem;
  padding-block-end: 1rem;
}
.items {
  flex: 999 1 0;
  min-inline-size: 70%;
  padding-inline: 1rem;
}
.items > ul {
  color: var(--clr-primary);
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  list-style: none;
  padding-inline-start: 0;
}
.item {
  display: grid;
  align-items: end;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  padding: 1rem;
  position: relative;
  line-height: 1;
}
.item > :first-child {
  grid-column: span 2;
}
.item > :last-child {
  justify-self: end;
}
.item::before {
  content: attr(data-fakeimg);
  font-size: 6rem;
  filter: grayscale(0.5);
  grid-column: span 2;
  margin-inline: auto;
}
@container cnt-storelayout (min-width: 40rem) {
  .store-subheading {
    text-align: start;
  }
  .category-readout > :last-child {
    padding-inline-start: 1.6rem;
  }
  .sidebar-content {
    justify-content: start;
  }
  .sidebar-content ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 2rem;
  }
}
@container cnt-storelayout (min-width: 80rem) {
  .sidebar {
    border-block: none;
    border-inline-end: 1px solid var(--clr-muted);
    max-width: max-content;
    padding-inline: 1rem;
  }
  .sidebar-content {
    flex-direction: column;
  }
  .sidebar-content ul {
    display: block;
    padding-inline-start: 1.6rem;
  }
}
</style>
