<script setup lang="ts">
import design_initial from "../assets/img/initial_planning.png";
import design_wireframe from "../assets/img/wireframe_design.png";
import design_intermediate from "../assets/img/intermediate_design.png";
import design_final from "../assets/img/final_design_720.png";
import signature from "../assets/img/sig.svg";
</script>

<template>
  <main class="fw-grid">
    <section class="section">
      <h1>Welcome!</h1>

      <div class="mb-xxl">
        <RouterLink to="/projects" class="backlink">
          Back to Projects & Demos
        </RouterLink>
      </div>
      <h2>Summary: What to Expect</h2>
      <p>
        This is a short introduction to my Web design process and what you can expect from each project milestone.
      </p>
      <p>
        A bespoke Web project is a complex undertaking no matter its scale, so my approach adapts industry-standard
        practices to maximally leverage the advantages of solo design work with small clients while mitigating its
        drawbacks. From a high-level perspective, you can expect our project to cover the following five milestones:
      </p>
      <ol>
        <li>Initial interview, requirements-gathering, and sketching</li>
        <li>Early Wireframe design with placeholder content</li>
        <li>Intermediate design with your branding, assets, and copy</li>
        <li>Prototype design with comprehensive styling</li>
        <li>Revisions and delivery of final design and code</li>
      </ol>
      <p>
        Find more details on each of these steps below. Each has a representative mock-up to aid in setting your
        expectations.
      </p>
      <h3>What I Can Do for You</h3>
      <p>
        My professional experience with UI/UX design stretches back nearly a decade, and I've worked in Web Development
        and visual design for even longer. I've designed and programmed everything from Black Friday landing pages to
        complex data aggregation applications and can confidently help you through the design process regardless of how
        much experience you have or how much progress you've already made.
      </p>
      <p>
        Here are some specific deliverables that may be pertinent to your project:
      </p>
      <ul>
        <li>Bespoke, from-scratch Web design</li>
        <li>Wireframing and interface design/prototyping</li>
        <li>Image manipulation and graphic design</li>
        <li>Audits of typographical hierarchies and color psychology</li>
        <li>Audits of compliance with visual accessibility standards</li>
        <li>Simple scripting, routing, and user interactivity</li>
        <li>Advice on free or low-cost hosting</li>
      </ul>
      <p>
        All of the above, as well as similar or auxiliary tasks, are included as part of my services at no additional
        cost to you. In short, my goal is to translate your vision into a document that runs in a browser.
      </p>
    </section>
    <section class="section">
      <h2>Initial Interview</h2>
      <p>
        Once we agree to terms, I'll schedule a virtual meeting with your team to discuss your project and your vision
        for it. I'll ask various questions about your product and your expectations. Meanwhile, I'll be sharing my
        screen as I produce a rough digital sketch to get us on the same page.
      </p>
      <p>
        All told, you can expect this meeting to take about an hour for a relatively small-scale project.
      </p>
      <h3>Topics to Consider</h3>
      <p>
        Some topics you'll want to think about ahead of time include:
      </p>
      <ul>
        <li>How many pages do you need? What sort of content should each of them host?</li>
        <li>What kind and how broad of an audience are you targeting?</li>
        <li>Do you have digital assets like images or videos to include? Can I help you with making transparencies or
          Web-ready image files?</li>
        <li>Would you like help with color and typography, or do you have those in mind already?</li>
        <li>Is your content finished and ready to publish, or might it change over the course of the project?</li>
        <li>Are there any other Web projects from which you take inspiration or whose style you'd like to emulate?</li>
        <li>Do you have any other questions I can answer?</li>
      </ul>
      <img class="visual-aid" :src="design_initial"
        alt="Screenshot of a rough digital sketch of a 3-column Web layout" />
    </section>
    <section class="section">
      <h2>Early Wireframe</h2>
      <p>
        Our initial interview will leave us with an idea of how the project is to be laid out in the browser. The layout
        and overall content structure will become increasingly unwieldy to modify as the project goes on, so the purpose
        of this stage is essentially to convert our digital sketch to a blank digital scaffold.
      </p>
      <p>
        Your Wireframe design will use a monochrome color palette and represent most visual content as simple geometric
        shapes. The reason for this extreme simplicity is to isolate the project's layout from the rest of its visual
        styling—at this point, the former is much easier to reason about than the latter.
      </p>
      <p>
        This process is usually quite straightforward and uncontroversial, but
        occasionally clarifies points from our initial interview or inspires
        adjustments to the overall layout. For relatively small projects, you
        can expect a Wireframe turnaround within 24–48 working hours of the interview's completion.
      </p>
      <img class="visual-aid" :src="design_wireframe"
        alt="Screenshot of a wireframe design for a 3-column Web layout" />
    </section>
    <section class="section">
      <h2>Intermediate Design</h2>
      <p>
        After you sign off on the Wireframe, I'll produce an intermediate design that adds real-world content and
        another layer of visual detail. Its purpose is to help us ascertain how the design-in-progress responds to the
        addition of your genuine content and branding.
      </p>
      <p>
        With the benefit of added context, minor changes are often called for. A few of the most common such changes
        include:
      </p>
      <ul>
        <li>Adjustments to color palette</li>
        <li>Different fonts or other typographical considerations</li>
        <li>Addition or removal of visual emphasis</li>
      </ul>
      <p>
        Unless you have a particularly intricate or unique vision for your
        project, you can expect to get your intermediate design within 48–72
        working hours of signing off on your Wireframe. Afterwards, we'll go back and forth with any revisions you'd
        like. Turnaround for revisions at this stage should be on the order of a couple of hours to a business day at
        most.
      </p>
      <img class="visual-aid" :src="design_intermediate"
        alt="Screenshot of an in-progress 3-column Web layout in design software" />
    </section>
    <section class="section">
      <h2>Prototype Design</h2>

      <p>
        The final major design stage is the development of a prototype design that implements 100% of your content and
        its visual and stylistic detailing.
      </p>
      <p>
        Interface design software often struggles to consistently represent this level of detail, so I'll produce the
        final design in actual browser code, i.e., HTML and CSS. This will give me significantly more granular control
        over the appearance and placement of every last pixel. Naturally, I always write and organize this code in such
        a manner as to be easily understandable and extensible by other professionals. If your project doesn't include
        any complex user interaction, you can even host this code on the Web as-is.
      </p>
      <img class="visual-aid" :src="design_final"
        alt="A complete 3-column Web layout with a partially transparent overlay of its hypertext markup" />
    </section>
    <section class="section">
      <h2>Final Revisions and Delivery</h2>
      <p>
        When I finish drafting the prototype design, you'll have another opportunity to request as many revisions as are
        necessary. Since this will be the first time you see the project in full detail, there will generally be a
        handful of adjustments needed in order to comprehensively align the design with your vision for it.
      </p>
      <p>
        One of the main benefits of producing the final design stage in code instead of design software is that code is
        much quicker to adjust, so even relatively complex revisions will tend to enjoy extremely rapid turnaround.
      </p>
      <p>
        Occasionally, clients ask for advice on how to modify parts of the code themselves if they later change their
        minds—this has never been problematic. I can even deliver a secondary version of the Web document with toggles
        or sliders for you to adjust parameters on-the-fly if a given detail is especially fungible within your vision.
      </p>
      <h3>Included in Final Delivery</h3>
      <p>
        Unless we agree upon an alternative arrangement, your final delivery will include the following:
      </p>
      <ul>
        <li>High-Definition images of each design</li>
        <li>All source HTML and CSS</li>
        <li>A browser-ready build of the source code with all external visual assets</li>
        <li>High-Definition screenshot(s) of built source code running in-browser</li>
      </ul>
      <p>
        At your request, I can also include the following for no extra charge:
      </p>
      <ul>
        <li>Data files for interface design software</li>
        <li>A screenshot of the digital sketch from our initial interview</li>
        <li>Tables of typography scaling and element spacing values</li>
        <li>Component files for React, Vue, Angular, Svelte, or Astro</li>
      </ul>
    </section>
    <section class="section">
      <h2>Final Remarks</h2>
      <p>
        To close out, let me sincerely thank you for taking the time to read
        this introductory document. If you have any questions or would like
        anything clarified, please don't hesitate to
        <RouterLink to="/contact">
          get in touch</RouterLink>!
        I'm always delighted
        to talk about grand new visions for the Web even if we don't end up signing a contract together.
      </p>
      <p>
        I wish you and your team the greatest success with your project and look forward to hearing from you soon.
      </p>
      <p>
        Best,
      </p>
      <img class="sig mb-xs" :src="signature"
        alt="A characterful freehand signature" />
      <p>
        M. Harrison "Harry" Owen
      </p>
    </section>
  </main>
</template>

<style scoped>
.visual-aid {
  border: 0.25em solid var(--clr-white-soft);
  border-radius: 0.25em;
  margin-top: var(--gap-m);
  padding: var(--gap-m);
}

.section > p,
.section > ul,
.section > ol,
.section > h3 {
  margin-bottom: var(--gap-m);
}

.section p,
.section li {
  max-width: 70ch;
}

.section > h3 {
  margin-top: var(--gap-l);
}

.section > :last-child {
  margin-bottom: var(--step-2);
}

.sig {
  min-height: 4em;
}
</style>

