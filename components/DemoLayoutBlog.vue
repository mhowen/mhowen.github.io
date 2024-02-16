<script setup>
defineProps({
  deviceXY: {
    type: Array,
    required: true,
  }
});
</script>

<template>
  <div class="layout"
    :style="{
      '--dx': deviceXY[0],
      '--dy': deviceXY[1],
    }"
  >
    <div class="grid-container">
      <div class="blog">
        <div class="blog-heading">
          <h1 class="title c-white">
            <span class="italic uppercase">Store.Biz</span> /Blog
          </h1>
        </div>
        <div class="blog-main">
          <h2 class="fs-lg">ANALYSIS: Rope Crisis Lengthens</h2>
          <p class="italic pt-2">By Alfred E. Newman</p>
          <p class="article">
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
        <div class="blog-related sidebar">
          <h3 class="subheading">Related Content</h3>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
          </ul>
          <h3 class="subheading">More by Author</h3>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
          </ul>
        </div>
        <div class="blog-ads sidebar">
          <h3 class="subheading">Our Partners</h3>
          <div class="sponsor">
            <span>📈</span>
            <p>GrowthCorp</p>
          </div>
          <div class="sponsor">
            <span>📠</span>
            <p>Faccs & Co.</p>
          </div>
          <div class="sponsor">
            <span>🧫</span>
            <p>Literally Skub</p>
          </div>
        </div>
        <div class="blog-comments">
          <h3 class="subheading fs-md">Comments</h3>
          <p>Blog Footer</p>
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

  transition: all 500ms ease-in;
} .layout > * { grid-column: 2; grid-row: 2; }
.fs-md { font-size: var(--fs-md) }
.fs-lg { font-size: var(--fs-lg) }
.fs-title { font-size: calc(var(--fs-lg) + 2rem) }
.grid-container {
  container: cnt-bloglayout / inline-size;
  display: grid;
  max-height: var(--dy);
  overflow: hidden auto;
  transition: max-height 500ms ease-in;
}
.blog {
  --clr-primary: hsl(214 100% 56%);
  --clr-alt: hsl(var(--hs-accent-alt) 51%);
  --clr-muted: hsl(214 50% 56%);
  --clr-mutest: #606060;
  --clr-white: #fefefe;
  --clr-black: #141414;
  --fs-md: clamp(2rem, 8cqw + 0.125rem, 3rem);
  --fs-lg: clamp(2rem, 10cqw - 0.125rem, 3.5rem);

  background-color: var(--clr-white);
  color: var(--clr-black);
  display: grid;
  grid-template-areas: "heading" "main" "related" "ads" "comments";
}
.blog > div:not(.blog-heading) {
  border-top: 0.125rem solid var(--clr-mutest);
  padding-block: 1.5rem;
}
.sidebar {
  container: cnt-sidebar / inline-size;
  padding-inline: 1rem;
}
.sidebar > .subheading {
  font-size: clamp(1.5rem, 12cqw - 0.25rem, 2.5rem);
}
.blog-heading {
  background-color: hsl(215 75% 70%);
  grid-area: heading;
  padding: 0.75rem 1rem;
}
.title {
  font-size: clamp(3rem, 15cqw + 0.125rem, 4rem);
  font-weight: 200;
}
.title > span {
  font-family: var(--ff-mono);
  text-shadow: 2px 2px 1px var(--clr-alt);
}
.blog-main {
  grid-area: main;
  padding-inline: max(1rem, calc((100% - 80ch) / 2));
}
.blog-main > p.article {
  font-size: min(6cqw, 1.5rem);
  padding-block: 0.5rem;
}
.blog-related {
  grid-area: related;
}
.blog-related > .subheading:last-of-type {
  margin-top: 2rem;
}
.blog-ads {
  grid-area: ads;
}
.sponsor {
  background-image: linear-gradient(0deg, var(--clr-muted), transparent 50%);
  line-height: 1;
  margin-top: 1rem;
  padding-block: 1rem;
  text-align: center;
  user-select: none;
  width: min(100cqw, 20rem);
}
.sponsor > p {
  color: var(--clr-white);
  font-size: calc(var(--fs-md) - 0.5rem);
  font-weight: 700;
  padding-top: 0.5rem;
  text-shadow: 2px 2px 2px var(--clr-mutest);
}
.sponsor > span {
  filter: grayscale(0.5);
  font-size: 5rem;
  z-index: -1;
}
.blog-comments {
  grid-area: comments;
  padding-inline: 1rem;
}

@container cnt-bloglayout (min-width: 60rem) {
  .blog {
    grid-template:
      "heading heading" auto
      "main main" 1fr
      "related ads" 1fr
      "comments comments" auto / 1fr 1fr;
  }
  .blog-related {
    border-right: 0.125rem solid var(--clr-mutest);
  }
}
@container cnt-bloglayout (min-width: 80rem) {
  .blog {
    grid-template:
      "heading heading heading" auto
      "related main ads" 1fr
      "comments comments comments" auto
      / 1fr minmax(auto, 80ch) 1fr;
  }
  .blog-main {
    border-inline: 0.125rem solid var(--clr-mutest);
  }
  .blog-related { border-right: none }
}
</style>

