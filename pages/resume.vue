<script setup>
</script>

<template>
  <div class="page-resume">
    <section class="section section-intro">
      <h1 class="intro-heading fs-6">Harry Owen</h1>

      <div class="intro-graphic">
        <div class="intro-graphic__text">
          <p>Full-Stack Development</p>
          <p>UI/UX Design</p>
          <p>Data Services</p>
        </div>
  
        <img
          class="intro-graphic__img"
          src="/resume_0.png">
      </div>

      <p class="intro-summary fs-1">Analytical, detail-oriented, and multidisciplinary developer and designer with over ten years of scholastic and professional experience in software development, web design, and data science. Intrinsically motivated computer scientist with continuously broadening expertise in major frameworks, design patterns, and analysis techniques inherent to modern practices. Available for competitively priced contract work for suitable clients.</p>


      <div class="intro-links">
        <h2 class="section-heading">Where To Find Me</h2>

        <div class="links-wrapper">
          <WithIcon class="inline-card link" icon="mdi:web">
            <NuxtLink to="/" target="_blank">mharryowen.com</NuxtLink>
          </WithIcon>
  
          <WithIcon class="inline-card link" icon="teenyicons:npm-solid">
            <NuxtLink to="https://www.npmjs.com/~mhowen" target="_blank">/~mhowen</NuxtLink>
          </WithIcon>
  
          <WithIcon class="inline-card link" icon="mdi:github">
            <NuxtLink to="https://github.com/mhowen" target="_blank">/mhowen</NuxtLink>
          </WithIcon>
          
          <WithIcon class="inline-card link" icon="mdi:linkedin">
            <NuxtLink to="https://www.linkedin.com/in/mharryowen" target="_blank">/mharryowen</NuxtLink>
          </WithIcon>
  
          <WithIcon class="inline-card link" icon="ic:twotone-location-on">
            <NuxtLink to="https://www.google.com/maps/place/Landmark,+Alexandria,+VA/" target="_blank">
              Alexandria, VA</NuxtLink>
          </WithIcon>
  
          <WithIcon class="inline-card link" icon="ic:outline-alternate-email">
            <NuxtLink to="mailto:m.harry.owen@gmail.com">m.harry.owen@gmail.com</NuxtLink>
          </WithIcon>
        </div>
      </div>
    </section>

    <section class="section section-jobs">
      <h2 class="section-heading">Professional History</h2>

      <div class="resumecards jobs-wrapper">
        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">Database Admin</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:company"><p>govmates LLC</p></WithIcon>
            <WithIcon icon="mdi:map-marker-outline"><p>Reston, VA</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>Sep 2022–Apr 2023</p></WithIcon>
          </div>
          <ul class="resumecard-list inline-cards">
            <li>Designed and operationalized automation strategies for user data validation</li>
            <li>Designed and implemented bespoke web scraping software that eliminated need for manual data entry</li>
            <li>Undertook enterprise-scale data governance projects to eliminate anomalies</li>
          </ul>
        </div>

        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">SharePoint Admin</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:company"><p>DELTA Resources, Inc.</p></WithIcon>
            <WithIcon icon="mdi:map-marker-outline"><p>Washington, D.C.</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>May 2020–Dec 2021</p></WithIcon>
          </div>
          <ul class="resumecard-list inline-cards">
            <li>Sole administrator of SharePoint Site Collection and Access Databases for several hundred users</li>
            <li>Remediated systemic issues in collection of structured user data by redesigning InfoPath forms</li>
            <li>Principal representative of data team during liasons with government and military personnel</li>
          </ul>
        </div>

        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">UI/UX Intern</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:company"><p>Decisive Analytics Corporation</p></WithIcon>
            <WithIcon icon="mdi:map-marker-outline"><p>Arlington, VA</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>Jun 2019–Aug 2019</p></WithIcon>
          </div>
          <ul class="resumecard-list inline-cards">
            <li>Developed responsive single-page applications for granular data visualization at enterprise scale</li>
            <li>Designed robust and reusable UI components leveraging Angular and the D3.js library</li>
            <li>Mentored in user experience design and practical concerns of UI implementation</li>
          </ul>
        </div>

        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">Desktop Agent</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:company"><p>Tippie College of Business</p></WithIcon>
            <WithIcon icon="mdi:map-marker-outline"><p>Iowa City, IA</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>Jun 2018–Dec 2019</p></WithIcon>
          </div>
          <ul class="resumecard-list inline-cards">
            <li>Managed inventory database and performed regular audits and maintenance of hardware</li>
            <li>Provided administrative support for permissions management, imaging, and data security</li>
            <li>Assisted college faculty in the prevention and resolution of technical concerns</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section-edu">
      <h2 class="section-heading">Education</h2>

      <div class="resumecards edu-wrapper">
        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">Franklin University</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:map-marker-outline"><p>Columbus, OH</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>A.S. Expected May 2024</p></WithIcon>
            <WithIcon icon="bi:mortarboard"><p>Computer Science, GPA 4.00</p></WithIcon>
          </div>
          <div class="edu-listgroup">
            <h4 class="resumecard-subheading">HONORS</h4>
            <ul class="resumecard-list inline-cards">
              <li>President's List—Summer 2023</li>
              <li>President's List—Fall 2023</li>
            </ul>
            <h4 class="resumecard-subheading">COURSE HIGHLIGHTS</h4>
            <ul class="resumecard-list inline-cards">
              <li>Database Management Systems</li>
              <li>Networking and Network Design</li>
              <li>Programming Language Architecture</li>
            </ul>
          </div>
        </div>

        <div class="resumecard">
          <h3 class="inline-card resumecard-heading">University of Iowa</h3>
          <div class="resumecard-data inline-cards">
            <WithIcon icon="mdi:map-marker-outline"><p>Iowa City, IA</p></WithIcon>
            <WithIcon icon="mdi:calendar-clock"><p>Part-Time, 2014–2019</p></WithIcon>
            <WithIcon icon="bi:mortarboard"><p>Computer Science (transferred)</p></WithIcon>
          </div>
          <div class="edu-listgroup">
            <h4 class="resumecard-subheading">HONORS</h4>
            <ul class="resumecard-list inline-cards">
              <li>University Honors Scholarship</li>
              <li>Old Gold Scholarship</li>
            </ul>
            <h4 class="resumecard-subheading">COURSE HIGHLIGHTS</h4>
            <ul class="resumecard-list inline-cards">
              <li>Computer Architecture</li>
              <li>Discrete Structures and Set Theory</li>
              <li>Linear Algebra</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-skills">
      <h2 class="section-heading">Skills and Proficiencies</h2>
     
      <h3 class="skill-heading">The Short Version</h3>

      <div class="subskills-wrapper">
        <div class="summary">
          <h4 class="skill-subheading inline-card">Software Development</h4>
          <ul class="summary-list">
            <li class="summary-experience">
              <p class="summary-experience__figure">10+ Years</p>
              <p>Professional Experience</p>
            </li>
            <li>Focus on Full-Stack Web Development</li>
            <li>Past work in public and private sectors</li>
            <li>Highly skilled with major web frameworks</li>
          </ul>
        </div>
        <div class="summary">
          <h4 class="skill-subheading inline-card">UI/UX Design</h4>
          <ul class="summary-list">
            <li class="summary-experience">
              <p class="summary-experience__figure">5+ Years</p>
              <p>Professional Experience</p>
            </li>
            <li>Expansive, interdisciplinary skillset</li>
            <li>Skilled with digital art and animation</li>
            <li>Professionally mentored in modern standards</li>
          </ul>
        </div>
        <div class="summary">
          <h4 class="skill-subheading inline-card">Data Science</h4>
          <ul class="summary-list">
            <li class="summary-experience">
              <p class="summary-experience__figure">3+ Years</p>
              <p>Professional Experience</p>
            </li>
            <li>Highly skilled with SQL and query-writing</li>
            <li>Trained in business intelligence practices</li>
            <li>Experienced with SQL and NoSQL databases</li>
          </ul>
        </div>
      </div>

      <h3 class="skill-heading">Software Development</h3>
      <div class="subskills-wrapper">

        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Theory</h4>
          <ul class="subskill-list flexgrid">
            <li>Algorithm Design</li>
            <li>Cryptography</li>
            <li>State Management</li>
            <li>Threading & Synchronization</li>
            <li>Dynamic Programming</li>
            <li>Machine Learning & LLMs</li>
            <li>Major CPU Architectures</li>
            <li>Combinatorics</li>
            <li>Discrete Structures</li>
            <li>Linear Algebra</li>
            <li>Set Theory</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Modern Standards</h4>
          <ul class="subskill-list flexgrid">
            <li>Accessibility</li>
            <li>API Design & Consumption</li>
            <li>CMS Scripting</li>
            <li>Cross-Platform Development</li>
            <li>Internationalization</li>
            <li>Performance & Optimization</li>
            <li>Responsive Design</li>
            <li>SEO</li>
            <li>Server Programming</li>
            <li>User Authentication</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">DevOps and Tooling</h4>
          <ul class="subskill-list flexgrid">
            <li>Build Automation</li>
            <li>Type Safety</li>
            <li>Database Connectivity</li>
            <li>Deployment</li>
            <li>Major Runtime Environments</li>
            <li>Rendering Patterns</li>
            <li>Unit Testing</li>
            <li>Version Control</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Web Frameworks</h4>
          <ul class="subskill-list autogrid">
            <li>Angular</li>
            <li>ASP.NET</li>
            <li>Django</li>
            <li>Express</li>
            <li>Rails</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Vue</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Languages</h4>
          <ul class="subskill-list autogrid">
            <li>C</li>
            <li>C#</li>
            <li>C++</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Haskell</li>
            <li>HTML</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>Kotlin</li>
            <li>TypeScript</li>
            <li>TSX</li>
            <li>SQL</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Rust</li>
            <li>Zig</li>
          </ul>
        </div>
      </div>

      <h3 class="skill-heading">UI/UX Design</h3>
      <div class="subskills-wrapper">
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Standards and Theory</h4>
          <ul class="subskill-list flexgrid">
            <li>Animation</li>
            <li>Behavior-Driven Development</li>
            <li>End-to-End Testing</li>
            <li>Major ECM & WCM Standards</li>
            <li>Data Visualization</li>
            <li>Interface Design</li>
            <li>Image Manipulation</li>
            <li>Vector Graphics</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Libraries and Software</h4>
          <ul class="subskill-list flexgrid">
            <li>Figma</li>
            <li>Inkscape</li>
            <li>Tailwind</li>
            <li>D3.js</li>
            <li>Cypress</li>
            <li>GIMP</li>
            <li>Kibana</li>
            <li>Anime.js</li>
            <li>Bootstrap</li>
            <li>Greensock</li>
            <li>Kdenlive</li>
            <li>Adobe Premiere</li>
            <li>Adobe After Effects</li>
          </ul>
        </div>
      </div>

      <h3 class="skill-heading">Data Science</h3>
      <div class="subskills-wrapper">
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Database Design</h4>
          <ul class="subskill-list flexgrid">
            <li>Business Rules</li>
            <li>Web Middleware</li>
            <li>Entity-Relationship Modeling</li>
            <li>UDA Architecture</li>
            <li>Normalization</li>
            <li>XML, XSL, & XSLT</li>
            <li>PL/SQL</li>
            <li>Distributed Systems</li>
            <li>Load Balancing</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Data Analysis</h4>
          <ul class="subskill-list flexgrid">
            <li>Dashboards & Portals</li>
            <li>Visualization Design</li>
            <li>Data Marts & Warehouses</li>
            <li>Multidimensional Analysis</li>
            <li>Roll-Up & Drill-Down</li>
            <li>Star & Snowflake Schemas</li>
            <li>SQL Analytic Functions</li>
            <li>OLAP, ROLAP, & MOLAP</li>
          </ul>
        </div>
        <div class="subskill">
          <h4 class="skill-subheading inline-card subskill-heading">Databases</h4>
          <ul class="subskill-list flexgrid">
            <li>PostgreSQL</li>
            <li>Oracle</li>
            <li>MS Access</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Elasticsearch</li>
            <li>Vercel Postgres</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-resume {
  --card-bg: color-mix(in srgb, var(--c-secondary), transparent 20%);
  --card-br: 1rem;
  --card-gradient-tracks: transparent 5%, var(--c-secondary) 20%, var(--c-accent), var(--c-secondary 80%), transparent 95%;
}
.inline-card,
.inline-cards > * {
  background-color: var(--card-bg);
  border-radius: var(--card-br);
  padding: 0.5rem 1rem;
}
.section {
  margin-top: clamp(2em, 10vh - 2em, 6em);
  margin-inline: auto;
  padding-inline: 1em;
  max-width: 1440px;
}
.section-heading { margin-bottom: 4rem }
.section-intro {
  margin-top: 2rem;
  max-width: 1600px;
}
.intro-heading { text-shadow: 0.25rem 0 var(--c-accent) }
.intro-graphic {
  border-bottom: 0.125rem solid var(--c-accent);
  container: cnt-intro-graphic / inline-size;
  position: relative;
}
.intro-graphic__text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: calc(5cqw + 0.125rem);
  font-weight: 200;
  min-height: 50%;
  position: absolute;
  text-transform: uppercase;
  z-index: -1;
}
.intro-graphic__text > * {
  --bg-color: color-mix(in srgb, var(--c-secondary), transparent 25%);
  background-image: linear-gradient(90deg, var(--bg-color), transparent);
  
  border-radius: 0.125em;
  padding-inline: 0.25em;
}
.intro-graphic__img {
  margin-left: auto;
  padding-top: 8cqw;
}
.intro-summary {
  margin-block: 2rem 4rem;
  max-width: 60ch;
}
.links-wrapper {
  --links-gap: 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: var(--links-gap);
}
.links-wrapper > .link {
  flex: 1 0 calc(50% - var(--links-gap));
  min-width: max-content;
}
.resumecards {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(min(32rem, 100%), 1fr));
}
.resumecard {
  border-radius: 1em;
  container: cnt-resumecard / inline-size;
  display: grid;
  position: relative;
}
.resumecard::before {
  background-image: linear-gradient(
    to top left,
    transparent 5%,
    var(--c-secondary) 20%,
    var(--c-accent),
    var(--c-secondary) 80%,
    transparent 95%
  );
  content: '';
  filter: blur(1.5rem);
  inset: 2rem;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
}

.resumecard-heading {
  align-self: flex-end;
  color: var(--c-accent);
  font-weight: 200;
  margin-bottom: 1rem;
  position: relative;
  text-transform: uppercase;
}
.resumecard-data {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1em;
}
.resumecard-data > * {
  flex-basis: calc(50% - 1em);
  flex-grow: 1;
  min-width: max-content;
}
.resumecard-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-style: italic;
  list-style: none;
  padding-inline-start: 0;
}
.resumecard-list > li {
  border-left: 0.25rem solid var(--c-accent);
  border-radius: 0;
  border-top-right-radius: var(--card-br);
  border-bottom-right-radius: var(--card-br);
  flex-grow: 1;
}
.resumecard-list > li:first-of-type { border-bottom-right-radius: 0 }
.resumecard-list > li:last-of-type { border-top-right-radius: 0 }
.resumecard-list > li:nth-of-type(2):not(:last-of-type) { border-radius: 0 }
.edu-listgroup {
  display: grid;
  gap: 1em;
}
@container cnt-resumecard (width > 30rem) {
  .edu-listgroup {
    column-gap: 0;
    grid-template-columns: min-content auto;
  }
  .edu-listgroup > .resumecard-subheading {
    --g-color: color-mix(in srgb, var(--c-accent), transparent 90%);
    background-color: var(--card-bg);
    border-bottom-left-radius: 0.5em;
    border-top-left-radius: 0.5em;
    display: grid;
    font-size: 4cqw;
    line-height: 1.4;
    padding: 0.5em;
    place-content: center;
    text-align: center;
  }
}
.section-skills {
  max-width: 1800px;
  margin-bottom: clamp(2em, 10vh - 2em, 6em);
}
.subskills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}
.summary {
  flex-grow: 1;
  max-width: 36rem;
}
.skill-heading {
  margin-bottom: 2rem;
  text-transform: uppercase;
}
.skill-subheading {
  /* background-color: var(--card-bg); */
  /* padding: 0.25em 0.5em; */
  border-radius: 0;
  text-align: center;
}
.summary-list {
  list-style: none;
  padding-inline-start: 0;
}
.summary-list > li {
  background-color: var(--card-bg);
  border-left: 0.25rem solid var(--c-accent);
  padding: 0.5rem 1rem;
  margin-top: 0.5em;
}
.summary-list > .summary-experience {
  align-items: center;
  border-left: none;
  display: flex;
  flex-direction: column;
  font-style: italic;
  padding-block: 1em;
}
.summary-experience__figure {
  background-clip: text;
  background-image: var(--gradient-2);
  background-size: 400%;
  color: transparent;
  font-size: var(--step-3);
  font-weight: 900;
  line-height: 1;
  padding-inline: 0.25em;
  animation: gradient-slide 2s infinite alternate;
}
@keyframes gradient-slide {
  0% { background-position: left }
  100% { background-position: right }
}
.subskill {
  display: flex;
  flex-direction: column;
  flex: 1 0 max(30%, 20rem);
  max-width: 36rem;
}
.subskill > .skill-subheading {
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  color: var(--c-accent);
  max-width: max-content;
}
.subskill-list {
  background-color: var(--card-bg);
  flex: 1;
  padding: 1rem;
}
.subskill-list > * {
  background-color: color-mix(in srgb, var(--c-secondary), #E3E3F0cc 10%);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
}
.subskill-list.autogrid > * {
  display: flex;
  align-items: center;
  justify-content: center;
}
.subskill-list.autogrid {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
}
.subskill-list.flexgrid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.subskill-list.flexgrid > * {
  flex: 1 0 calc(50% - 0.5em);
  min-width: max-content;
  display: flex;
  align-items: center;
}
@media(min-width: 900px) {
  .intro-graphic__text { min-height: 70% }
}
@media (min-width: 1440px) {
  .intro-graphic__text { min-height: 100% }
  .intro-graphic__img { padding-top: 0 }
  .links-wrapper > .link { flex-basis: 30% }
}

</style>
