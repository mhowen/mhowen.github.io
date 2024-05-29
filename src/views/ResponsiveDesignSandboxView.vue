<script setup lang="ts">
import { computed, ref } from 'vue';
import IconRotateDevice from "@/components/icons/IconRotateDevice.vue";

const devices = [
  {
    name: "Full-Size",
    x: "min(100% - 2 * var(--padding-inline), 82rem)",
    y: "75rem",
    'no-rotate': true,
  },
  { name: "Small Smartphone",     x: "320px", y: "568px" },
  { name: "Mid-Range Smartphone", x: "360px", y: "640px" },
  { name: "Flagship Smartphone",  x: "393px", y: "852px", restrict: true },
  { name: "Small Tablet",         x: "744px", y: "1133px", restrict: true },
  { name: "Large Tablet",         x: "834px", y: "1194px", restrict: true },
];

const device = ref(devices[0]);

const dimension_variables = computed(() => ({
  '--dimension-x': device.value.x,
  '--dimension-y': device.value.y,
}));

function set_device(index = 0) {
  const target = devices[index];
  device.value = {
    ...target,
    x: target.x,
    y: target.y,
  };
}
function rotate_device() {
  const [new_x, new_y] = [device.value.y, device.value.x];
  device.value.x = new_x;
  device.value.y = new_y;
}
</script>

<template>
  <main class="fw-grid">
    <section>
      <h1 class="fs-3">Demo: Responsive Design Sandbox</h1>

      <RouterLink to="/projects" class="backlink">
        Back to Projects & Demos
      </RouterLink>

      <p id="low-vw-warning">
        Hi there! This demo requires a minimum screen width greater than 672
        pixels. Try switching your display to landscape mode or loading this
        page on a device with a larger screen for the complete experience.
      </p>

      <p class="mb-l">
        Welcome! This is an interactive demonstration of responsive design
        principles built around a mocked-up restaurant website. To jump right
        in, use the labeled controls to adjust the demo page's available screen
        space and watch the design adapt in real-time. To read more about
        responsive design or about how this demo works under the hood, expand
        the sections below.
      </p>

      <p class="mb-xl">
        You can check out the
        <a href="https://github.com/mhowen/lbp_demo">
          source code for the demo</a>, or the
        <a href="https://github.com/mhowen/lbp_demo">
          code for this page</a>. You can also
        <a href="https://www.mharryowen.com/lbp_demo/">
          see the demo page on its own</a>. Everything is my own work except for
        the digital images—my sincere thanks to Alex Hussein, Murtada Mustafa,
        Razana Adra, and Valeria Botneva for their beautiful royalty-free
        original photography.
      </p>

      <details class="mb-l">
        <summary>What is Responsive Design?</summary>
        <div class="details__content">
          <p class="mb-l">
            Responsive Web Design (RWD) is—put very simply—a design methodology whereby content is made aware of and
            reactive to the size of the screen on which it's being rendered. The core idea is to produce Web content
            whose
            usability and aesthetics are consistent on every screen size that might reasonably be used to render that
            content. Naturally, this is so important to the modern device ecosystem that RWD is effectively mandatory
            for
            many projects.
          </p>
          <p class="mb-l">
            This status is a relatively recent development. Back when pocket-sized devices first started coming with Web
            browsers, developers were often faced with a difficult choice. Either:
          </p>
          <ol class="mb-l">
            <li>Develop a second version of the content for narrow screens, which brings parity of user experience at
              the
              cost of almost doubling development time, or</li>
            <li>Wash your hands of the whole business and do nothing on the assumption that anyone desperate enough to
              view your content on a phone screen will tolerate a miserable user experience.</li>
          </ol>
          <p class="mb-l">
            That first option was, for obvious reasons, largely the domain of commercial juggernauts like Meta née
            Facebook—if you were around my age in the late 2000's, I'll bet you remember m.facebook.com. The second
            option
            became intolerable practically overnight when smartphones hit their renaissance. By then, everybody had a
            stake in a robust and permanent solution.
          </p>
          <p>
            At least for now, that solution is an extremely broad set of tools and strategies that together comprise
            modern RWD. Getting a page to look its best for 80% of users is now easier than ever, but pushing that
            figure
            over 99% still requires extraordinary knowledge of the Web specification, the different browsers and their
            limitatations, and much more—this is why it's still worth hiring a professional designer for all but the
            most
            trivial presentations.
          </p>
        </div>
      </details>

      <details class="mb-xxl">
        <summary>How does this demo work?</summary>
        <div class="details__content">
          <p class="mb-l">
            The simulated rendering environment is actually quite straightforward—the demo page is simply loaded into a
            frame whose dimensions are controlled by the user. Adjusting the dimensions of the frame forces the demo
            page
            to adapt, and some simple transition styling allows us to see the process as it happens in real-time. If
            you're curious about the details, check out the
            <a href="https://github.com/mhowen/lbp_demo">source code for this page</a>.
          </p>
          <p class="mb-l">
            As for the responsive design implementation itself, the approach for this project can be quickly summarized
            as such:
          </p>
          <ul class="mb-l">
            <li>All scaling is based on a single absolute root length, which here is sixteen pixels</li>
            <li>The intended range of element sizes is split into discrete steps</li>
            <li>Each step's value is computed as a function of available screen width</li>
            <li>Every element gets assigned a step based on its intended presentation</li>
            <li>Spacing between elements is a given proportion of their step size</li>
          </ul>
          <p class="mb-l">
            With good forward planning and a little patience, this all produces a page of elements whose sizes are in
            perfect mathematical harmony with one another and which dynamically size themselves in relation to the
            screen onto which they're rendered.
          </p>
          <p class="mb-l">
            The penultimate step is to make adjustments for edge-case scenarios that aren't intrinsically covered by the
            scaling system. For example, a user may view the page on a screen that's much wider than it is tall, e.g., a
            smartphone in its landscape orientation. Try setting the demo frame to a smartphone size and rotating
            it—notice how the navigation header and order summary both shorten along the vertical axis. This is achieved
            by setting their heights relative to available screen height instead of width, and you can imagine how this
            page would become practically unreadable without this change.
          </p>
          <p>
            Finally, comprehensive testing reveals any scaling issues that call for manual adjustment, and we're left
            with a page that looks and feels great on an entry-level smartphone display and only gets better as
            available screen real estate increases.
          </p>
        </div>
      </details>

      <div class="controls">
        <button class="btn" v-for="(d, index) in devices" :key="d.name" :class="{
            selected: d.name == device.name,
            'require-md': d.restrict == true
          }" @click="() => set_device(index)"> {{ d.name }} </button>

        <button class="btn btn-rotate" :disabled="device['no-rotate']" @click="rotate_device">
          <IconRotateDevice /> Rotate
        </button>
      </div>
    </section>

    <section class="frame-wrapper full-width" :style="dimension_variables">
      <div class="track-guide"></div>
      <div class="track-guide"></div>

      <iframe id="demo-frame" title="Demo Frame" src="https://www.mharryowen.com/lbp_demo" width="288" height="162" />

      <div class="track-guide"></div>
      <div class="track-guide"></div>
    </section>
  </main>
</template>

<style scoped>
.controls,
.frame-wrapper {
  display: none;
}
.require-md {
  display: none;
}
p,
details {
  visibility: hidden;
  max-width: 40em;
}
#low-vw-warning {
  background-color: var(--clr-background);
  border: 0.125em solid var(--clr-text-soft);
  position: fixed;
  padding: var(--gap-xl);
  top: 50%;
  transform: translateY(-50%);
  visibility: visible;
  width: calc(100% - 2 * var(--padding-inline));
}

@media (min-width: 42rem) {
  p,
  details {
    visibility: visible;
  }
  summary {
    font-size: calc(var(--step-0) * var(--halfstep));
    font-style: italic;
    margin-bottom: var(--gap-xs);
  }
  .details__content {
    border-inline-start: 0.125em solid var(--clr-text-soft);
    padding-inline-start: var(--gap-m);
  }
  .details__content > ol,
  .details__content > ul {
    padding-inline-start: var(--gap-xl);
  }
  #low-vw-warning {
    display: none;
  }
  .controls {
    display: flex;
  }
  .btn {
    background-color: var(--clr-background);
    color: var(--clr-text);
    flex: 1 0 max-content;
  }
  .backlink::before {
    content: "◀  ";
  }
  .btn-rotate {
    margin-left: var(--gap-m);
  }
  .btn-rotate > svg {
    vertical-align: middle;
  }
  .btn.selected {
    background-color: var(--clr-text);
    color: var(--clr-background);
  }
  .frame-wrapper {
    --dimension-x: min(100rem, 100% - 2 * var(--padding-inline));
    --dimension-y: 56.25rem;

    display: grid;
    grid-template-columns: 1fr var(--dimension-x) 1fr;
    grid-template-rows: var(--gap-xl) var(--dimension-y) 1fr;
    min-height: 75rem;

    transition: 1000ms ease-in;
  }
  #demo-frame {
    grid-column: 2;
    grid-row: 2;
    min-width: 100%;
    min-height: 100%;

    border: 0.125rem solid var(--clr-text-soft);
  }
  .frame-wrapper > .track-guide:first-of-type {
    grid-column: 2;
    grid-row: 1;
    border-inline: 0.125rem dotted var(--clr-text-soft);
  }
  .frame-wrapper > .track-guide:nth-of-type(2) {
    grid-column: 1;
    grid-row: 2;
    border-block: 0.125rem dotted var(--clr-text-soft);
  }
  .frame-wrapper > .track-guide:nth-of-type(3) {
    grid-column: 3;
    grid-row: 2;
    border-block: 0.125rem dotted var(--clr-text-soft);
  }
  .frame-wrapper > .track-guide:last-of-type {
    grid-column: 2;
    grid-row: 3;
    border-inline: 0.125rem dotted var(--clr-text-soft);
  }
}
@media (min-width: 80rem) {
  .require-md {
    display: initial;
  }
}
</style>

