<script setup lang="ts">
import portrait_intro from "../assets/img/resume_0.png";
import BadgeLink from "../components/BadgeLink.vue";
import IconGithub from "../components/icons/IconGithub.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconMail from "../components/icons/IconEmail.vue";
import IconNpm from "../components/icons/IconNpm.vue";
import IconUpwork from "@/components/icons/IconUpwork.vue";
import IconWeb from "../components/icons/IconWeb.vue";
</script>

<template>
  <main class="fw-grid">
    <h1>
      <div class="mb-xs uppercase">Harry Owen</div>
      <div class="fs-2">My Résumé</div>
    </h1>
    <section class="intro border-bottom-soft full-width mb-step-2 pi-view">
      <p class="intro__text backdrop-bg fs-0-50">
        Analytical, detail-oriented, and multidisciplinary designer and
        developer with over ten years of scholastic and professional experience
        in software development, Web design, and data science. Available for
        competitively priced contract work for suitable clients.
      </p>
      <img class="intro__img" :src="portrait_intro"
        alt="Portrait of the author rising from the section divider at bottom"
      />
    </section>
    <section class="border-bottom-soft full-width mb-step-3 pi-view">
      <h2>Where to Find Me</h2>
      <div class="contacts mb-step-2">
        <BadgeLink
          href="https://www.mharryowen.com"
          label="mharryowen.com"><IconWeb /></BadgeLink>
        <BadgeLink
          href="mailto:mho@mharryowen.com"
          label="mho@mharryowen.com"><IconMail /></BadgeLink>
        <BadgeLink
          href="https://www.openstreetmap.org/relation/206637"
          label="Alexandria, VA"><IconLocation /></BadgeLink>
        <BadgeLink
          href="https://github.com/mhowen"
          label="/mhowen"><IconGithub /></BadgeLink>
        <BadgeLink class="circled"
          href="https://www.upwork.com/freelancers/~017901b0355f7b7d99"
          label="/mhowen"><IconUpwork /></BadgeLink>
        <BadgeLink class="circled"
          href="https://www.npmjs.com/~mhowen"
          label="/mhowen"><IconNpm /></BadgeLink>
      </div>
    </section>
    <section class="border-bottom-soft full-width pi-view mb-step-3">
      <h2>Summary of Skills</h2>
      <h3 class="mb-m">Software Development</h3>
      <div class="grid grid-3col mb-xxl">
        <div class="card">
          <h4>Full-Stack Web Development</h4>
          <ul>
            <li>All major client- and server-side JavaScript frameworks</li>
            <li>Accessibility and Internationalization</li>
            <li>Memory Management and Optimization</li>
            <li>Responsive Design and Browser Compatibility</li>
            <li>Native and cross-platform application development</li>
            <li>Authentication and Data Security</li>
          </ul>
        </div>
        <div class="card">
          <h4>Programming Languages</h4>
          <ul>
            <li>C-family imperative languages</li>
            <li>ML- and Lisp-family functional languages</li>
            <li>SQL and PL/SQL</li>
            <li>Major dynamic scripting languages incl. Python, Lua</li>
            <li>Sh, Bash, and similar command languages</li>
          </ul>
        </div>
        <div class="card">
          <h4>DevOps & Testing</h4>
          <ul>
            <li>Continuous Delivery and Integration</li>
            <li>Unit, Integration, and E2E Testing</li>
            <li>Version Control</li>
            <li>Deployment and Hosting</li>
          </ul>
        </div>
      </div>
      <h3 class="mb-m">Design</h3>
      <div class="grid grid-3col mb-xxl">
        <div class="card">
          <h4>Graphics & Visual Assets</h4>
          <ul>
            <li>Animation</li>
            <li>Image Manipulation</li>
            <li>Raster Graphics</li>
            <li>Vector Graphics</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div class="card">
          <h4>Standards & Theory</h4>
          <ul>
            <li>Behavior-Driven Development</li>
            <li>End-to-End Testing</li>
            <li>ECM & WCM Standards</li>
            <li>Data Visualization</li>
            <li>Interface Design</li>
          </ul>
        </div>
        <div class="card">
          <h4>Libraries & Software</h4>
          <ul>
            <li>Figma</li>
            <li>GIMP</li>
            <li>Inkscape</li>
            <li>Cypress</li>
            <li>Premiere & After Effects</li>
          </ul>
        </div>
      </div>
      <h3 class="mb-m">Theoretical Informatics</h3>
      <div class="grid grid-3col mb-xxl">
        <div class="card">
          <h4>Data Science</h4>
          <ul>
            <li>Entity-Relationship modeling and analysis</li>
            <li>Normalization and Optimization</li>
            <li>XML, XSL, & XSLT</li>
            <li>Distributed Systems Design</li>
            <li>Visualization & Dashboard Design</li>
            <li>Councurrency Design & Load Balancing</li>
          </ul>
        </div>
        <div class="card">
          <h4>Algorithms & Analysis</h4>
          <ul>
            <li>Algorithm Design</li>
            <li>Complexity and Run-Time Analysis</li>
            <li>Set Theory & Discrete Structures</li>
            <li>Machine Learning & Large Language Models</li>
            <li>Multidimensional Data Analysis</li>
          </ul>
        </div>
        <div class="card">
          <h4>Database Engines</h4>
          <ul>
            <li>All major open-source SQL-based engines</li>
            <li>MS Access, Oracle, Elasticsearch</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="border-bottom-soft full-width pi-view mb-step-3">
      <h2>Professional History</h2>
      <div class="grid grid-2col mb-xxl">
        <div class="card">
          <h3>Freelance Web Designer</h3>
          <p>Self-Employed, Full-Time</p>
          <p>Alexandria, VA</p>
          <p>October 2023–Present</p>
          <ul>
            <li>
              Design services spanning project life cycle from wireframing to
              end-to-end testing
            </li>
            <li>
              Full-stack development services for all modern frameworks and
              rendering patterns
            </li>
            <li>
              Auxilliary services including graphics design, animation, and
              consultation
            </li>
          </ul>
        </div>
        <div class="card">
          <h3>Database Administrator</h3>
          <p>govmates LLC, Contractor</p>
          <p>Reston, VA</p>
          <p>September 2022–April 2023</p>
          <ul>
            <li>
              Designed and operationalized data management strategies to fully
              leverage relational database technology
            </li>
            <li>
              Programmed bespoke data scraping software in Python to reduce data
              entry overhead
            </li>
            <li>
              Undertook enterprise-scale data governance projects to enforce
              referential integrity
            </li>
          </ul>
        </div>
        <div class="card">
          <h3>Site Collection Administrator</h3>
          <p>DELTA Resources, Inc., Full-Time</p>
          <p>Washington, D.C.</p>
          <p>May 2020–December 2021</p>
          <ul>
            <li>
              Solely administered SharePoint Site Collection and Access databases
              for several hundred users
            </li>
            <li>
              Remediated systemic issues of structured user data collection by
              redesigning obsolete InfoPath forms
            </li>
            <li>
              Principal representative of data team in liasons with government and
              military personnel
            </li>
          </ul>
        </div>
        <div class="card">
          <h3>UI/UX Developer</h3>
          <p>Decisive Analytics Corp., Full-Time Intern</p>
          <p>Arlington, VA</p>
          <p>June 2019–August 2019</p>
          <ul>
            <li>
              Developed responsive and standards-compliant single-page
              applications for enterprise data visualization
            </li>
            <li>
              Designed robust and reusable UI components in Angular leveraging the
              D3.js library
            </li>
            <li>
              Mentored in user experience design and in practical concerns of
              modern UI design and implementation
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="mb-xxl">
      <h2>Higher Education</h2>
      <div class="grid grid-schools">
        <div class="card">
          <h3>Franklin University</h3>
          <p>A.S. Computer Science</p>
          <p>Graduated May 2024</p>
          <ul>
            <li>President's List</li>
            <ul>
              <li>Summer 2023</li>
              <li>Fall 2023</li>
              <li>Spring 2024</li>
            </ul>
            <li>Graduated Summa Cum Laude, GPA 4.00</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  position: relative;
}
.intro__text {
  --backdrop-border-radius: 3em;
  --backdrop-inset: -1.25em 0.5em 0 0.5em;
  position: relative;
  max-width: 30em;
  z-index: 1;
}
.intro__img {
  align-self: flex-end;
  width: min(100%, 30em);
}
.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-m);
}
.contacts > * {
  flex-grow: 1;
  flex-basis: min(100%, 16em);
}
.grid {
  display: grid;
  gap: var(--gap-l);
}
.grid-2col {
  grid-template-columns: repeat(auto-fit, minmax(min(28rem, 100%), 1fr));
}
.grid-3col {
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
}
.card {
  border: 0.125rem solid var(--clr-text-soft);
  border-radius: var(--gap-l);

  padding: var(--gap-l);
}
.card > h3 {
  margin-bottom: var(--gap-xs);
}
.card > h4 {
  margin-bottom: var(--gap-m);
}
.card > ul > li:nth-of-type(2n) {
  color: var(--clr-text-soft);
}
.card > p {
  font-family: Oswald, Inter;
  font-size: var(--step-1);
  font-weight: 300;
}
.card > p:last-of-type {
  margin-bottom: var(--gap-s);
  padding-bottom: var(--gap-s);
  border-bottom: 0.125rem dotted var(--clr-text-soft);
}

@media (min-width: 45rem) {
  .intro {
    display: initial;
    padding-bottom: var(--step-4);
  }
  .intro__text {
    text-shadow: 2px 2px 1px var(--clr-background);
  }
  .intro__img {
    position: absolute;
    bottom: 0;
    right: var(--padding-inline-view);
  }
  .contacts {
    font-size: calc(var(--step-0) * var(--halfstep));
  }
  .grid-schools {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

