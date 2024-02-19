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
            <span class="c-white">Store.biz</span>
            <span class="fw-thin">/Blog</span>
          </h1>
        </div>
        <div class="blog-main">
          <h2 class="fs-lg mb-2">ANALYSIS: Rope Crisis Lengthens</h2>
          <span class="author italic pt-2 relative">By Alfred E. Newman</span>
          <p class="article mt-2">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
            enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
            amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
            ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia.<br>Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
            cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
            laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
            ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div class="blog-related sidebar">
          <div>
            <h3 class="subheading">Related Content</h3>
            <ul class="py-2 underline">
              <li>WATCH: Harrowing Scene Outside Ropeworks</li>
              <li>ADVICE: Buying Alternative Cordage</li>
              <li>MARKET WATCH: Elevator Futures Rise</li>
            </ul>
          </div>
          <div>
            <h3 class="subheading">More by Author</h3>
            <ul class="py-2 underline">
              <li>ANALYSIS: Well Crisis Deepens</li>
              <li>OPINION: What, Me Worry?</li>
              <li>LIST: Top 10 Notional Blog Posts</li>
            </ul>
          </div>
        </div>
        <div class="blog-ads sidebar">
          <h3 class="subheading text-center">Our Partners</h3>
          <div class="sponsor">
            <span>📈</span>
            <p>GrowthCorp</p>
          </div>
          <div class="sponsor">
            <span>📊</span>
            <p>Amalgamated Bars</p>
          </div>
          <div class="sponsor">
            <span>💹</span>
            <p>Growth, Inc.</p>
          </div>
        </div>
        <div class="blog-comments">
          <h3 class="subheading fs-md">Comments</h3>
          <div class="comment">
            <div class="flex align-center">
              <span class="comment-pic">👤</span>
              <span class="comment-user">UserName</span>
            </div>
            <p class="comment-body">Lorem ipsum dolor sit amet consectetur
              adipisicing elit.</p>
          </div>
          <div class="comment">
            <div class="flex align-center">
              <span class="comment-pic">👤</span>
              <span class="comment-user">UserName</span>
            </div>
            <p class="comment-body">Libero ipsam nostrum necessitatibus numquam
              rem blanditiis est?</p>
          </div>
          <div class="comment">
            <div class="flex align-center">
              <span class="comment-pic">👤</span>
              <span class="comment-user">UserName</span>
            </div>
            <p class="comment-body">Obcaecati error, possimus incidunt, dicta magni
              vel suscipit aperiam aut.</p>
          </div>
          <div class="comment">
            <div class="flex align-center">
              <span class="comment-pic">👤</span>
              <span class="comment-user">UserName</span>
            </div>
            <p class="comment-body">Culpa proident adipisicing id nulla nisi
            laboris ex in Lorem sunt duis officia eiusmod.</p>
          </div>
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
.clr-muted { color: var(--clr-muted) }
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
  user-select: none;
}
.blog > div:not(.blog-heading) {
  border-top: 0.125rem solid var(--clr-mutest);
  padding-block: 1.5rem;
}
.sidebar {
  container: cnt-sidebar / inline-size;
  padding-inline: 1rem;
}
.subheading {
  color: var(--clr-muted);
  text-transform: uppercase;
  font-size: clamp(1.5rem, 12cqw - 0.25rem, 2.5rem);
}
.blog-heading {
  background-color: var(--clr-muted);
  grid-area: heading;
  padding: 0.75rem 1rem;
}
.title {
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(3rem, 15cqw + 0.125rem, 4rem);
}
.title > span:first-of-type {
  text-shadow: 2px 2px 1px var(--clr-black);
}
.title > span:last-of-type {
  padding-inline-start: 2rem;
}
.blog-main {
  grid-area: main;
  padding-inline: max(1rem, calc((100% - 80ch) / 2));
}
.author::before {
  content: '👨';
  font-style: normal;
  font-size: 2rem;
  border: 2px solid var(--clr-muted);
  border-radius: 100vw;
  filter: grayscale(0.75);
  padding: 0.5rem 0.75rem;
  margin-inline-end: 0.5rem;
}
.blog-main > p.article {
  font-size: min(6cqw, 1.5rem);
  padding-block: 0.5rem;
  text-indent: 2em each-line;
}
.blog-related {
  grid-area: related;
  display: grid;
  gap: 2rem;
  justify-content: center;
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
  margin-inline: auto;
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
  display: grid;
}
.comment {
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  margin-block: 1rem;
}
.comment-pic {
  border: 2px solid var(--clr-muted);
  border-radius: 100vw;
  font-size: var(--step-1);
  min-height: 2rem;
  min-width: 3rem;
  text-align: center;
}
.comment-user {
  color: var(--clr-mutest);
  font-size: 1rem;
  font-style: italic;
}
@container cnt-bloglayout (min-width: 60rem) {
  .blog {
    grid-template:
      "heading heading" auto
      "main main" auto
      "related ads" 1fr
      "comments comments" auto / 3fr 2fr;
  }
  .blog-related {
    border-right: 0.125rem solid var(--clr-mutest);
  }
  .blog-comments {
    grid-template-columns: 1fr 1fr;
  }
  .blog-comments > .subheading { grid-column: span 2 }
  .comment {
    flex-direction: row;
    align-items: center;
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

