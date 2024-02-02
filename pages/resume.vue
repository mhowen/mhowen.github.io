<script setup>
</script>

<template>
  <div class="page-resume">
    <section class="section section-wide">
      <h1 class="intro-heading fs-6">Harry Owen</h1>

      <div class="intro-graphic">
        <div class="intro-graphic__text">
          <p>Full-Stack Development</p>
          <p>UI/UX Design</p>
          <p>Data Services</p>
        </div>
  
        <img
          class="intro-graphic__img"
          src="~/assets/img/resume_0.png">
      </div>

      <p class="intro-summary fs-1">
        Analytical, detail-oriented, and multidisciplinary developer and designer
        with over ten years of scholastic and professional experience in software
        development, web design, and data science. Intrinsically motivated computer
        scientist with continuously broadening expertise in major frameworks, design
        patterns, and analysis techniques inherent to modern practices. Available
        for competitively priced contract work for suitable clients.
      </p>

      <div class="contacts">
        <h2 class="resume-heading fs-3 mb-2">Where To Find Me</h2>

        <ul class="contacts-list list-none">
          <li class="contact inline-svg hoverable">
            <Icon name="mdi:web" height="2rem" width="2rem" />
            <NuxtLink to="/" target="_blank">mharryowen.com</NuxtLink>
          </li>
          <li class="contact inline-svg hoverable">
            <Icon name="teenyicons:npm-solid" height="2rem" width="2rem" />
            <NuxtLink to="https://www.npmjs.com/~mhowen" target="_blank">/~mhowen</NuxtLink>
          </li>
          <li class="contact inline-svg hoverable">
            <Icon name="mdi:github" height="2rem" width="2rem" />
            <NuxtLink to="https://github.com/mhowen" target="_blank">/mhowen</NuxtLink>
          </li>
          <li class="contact inline-svg hoverable">
            <Icon name="mdi:linkedin" height="2rem" width="2rem" />
            <NuxtLink to="https://www.linkedin.com/in/mharryowen"
              target="_blank">/mharryowen</NuxtLink>
          </li>
          <li class="contact inline-svg hoverable">
            <Icon name="ic:twotone-location-on" height="2rem" width="2rem" />
            <NuxtLink to="https://google.com/maps/place/Landmark,+Alexandria,+VA"
              target="_blank">Alexandria, VA</NuxtLink>
          </li>
          <li class="contact inline-svg hoverable">
            <Icon name="ic:outline-alternate-email" height="2rem" width="2rem" />
            <NuxtLink to="mailto:mho@mharryowen.com" target="_blank">mho@mharryowen.com</NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="resume-heading">Professional History</h2>

      <div class="resumegrid">
        <div class="resume-card resume-container">
          <h3 class="rc-heading">Database Admin</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:company" height="2rem" width="2rem" />
              <p>govmates LLC</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Reston, VA</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>Sep 2022&#150;Apr 2023</p>
            </li>
          </ul>
          <ul class="summary-list"> 
            <li>Designed and operationalized automation strategies for user data validation</li>
            <li>Designed and implemented bespoke web scraping software that eliminated need for manual data entry</li>
            <li>Undertook enterprise-scale data governance projects to eliminate anomalies</li>
          </ul>
        </div>

        <div class="resume-card resume-container">
          <h3 class="rc-heading">SharePoint Admin</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:company" height="2rem" width="2rem" />
              <p>DELTA Resources, Inc.</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Washington, D.C.</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>May 2020&#150;Dec 2021</p>
            </li>
          </ul>
          <ul class="summary-list"> 
            <li>Sole administrator of SharePoint Site Collection and Access Databases for several hundred users</li>
            <li>Remediated systemic issues in collection of structured user data by redesigning InfoPath forms</li>
            <li>Principal representative of data team during liasons with government and military personnel</li>
          </ul>
        </div>

        <div class="resume-card resume-container">
          <h3 class="rc-heading">UI/UX Intern</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:company" height="2rem" width="2rem" />
              <p>Decisive Analytics Corp.</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Arlington, VA</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>Jun 2019&#150;Aug 2019</p>
            </li>
          </ul>
          <ul class="summary-list"> 
            <li>Developed responsive single-page applications for granular data visualization at enterprise scale</li>
            <li>Designed robust and reusable UI components leveraging Angular and the D3.js library</li>
            <li>Mentored in user experience design and practical concerns of UI implementation</li>
          </ul>
        </div>

        <div class="resume-card resume-container">
          <h3 class="rc-heading">Desktop IT Agent</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:company" height="2rem" width="2rem" />
              <p>Tippie College of Business</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Iowa City, IA</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>Jun 2018&#150;Dec 2019</p>
            </li>
          </ul>
          <ul class="summary-list"> 
            <li>Managed inventory database and performed audits and maintenance of hardware</li>
            <li>Provided administrative support for permissions management, imaging, and data security</li>
            <li>Assisted college faculty in the prevention and resolution of technical issues</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="resume-heading">Higher Education</h2>

      <div class="resumegrid">
        <div class="resume-card resume-container">
          <h3 class="rc-heading">Franklin University</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Columbus, OH</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>A.S. Expected May 2024</p>
            </li>
            <li class="inline-svg">
              <Icon name="bi:mortarboard" height="2rem" width="2rem" />
              <p>Computer Science, GPA 4.00</p>
            </li>
          </ul>

          <div class="school-list">
            <h4 class="rc-heading">Honors</h4>
            <ul>
              <li>President's List&#151;Summer 2023</li>
              <li>President's List&#151;Fall 2023</li>
            </ul>
          </div>
          <div class="school-list">
            <h4 class="rc-heading">Course Highlights</h4>
            <ul>
              <li>Database Management Systems</li>
              <li>Computer Network Design</li>
              <li>Programming Language Architecture</li>
            </ul>
          </div>
        </div>

        <div class="resume-card resume-container">
          <h3 class="rc-heading">University of Iowa</h3>
          <ul class="rc-datalist list-none">
            <li class="inline-svg">
              <Icon name="mdi:map-marker-outline" height="2rem" width="2rem" />
              <p>Iowa City, IA</p>
            </li>
            <li class="inline-svg">
              <Icon name="mdi:calendar-clock" height="2rem" width="2rem" />
              <p>Part-Time, 2014&#150;2019</p>
            </li>
            <li class="inline-svg">
              <Icon name="bi:mortarboard" height="2rem" width="2rem" />
              <p>Computer Science <span class="font-italic">(Transferred)</span></p>
            </li>
          </ul>
          <div class="school-list">
            <h4 class="rc-heading">Honors</h4>
            <ul>
              <li>National Scholars Award</li>
              <li>Old Gold Scholarship</li>
            </ul>
          </div>
          <div class="school-list">
            <h4 class="rc-heading">Course Highlights</h4>
            <ul>
              <li>Database Management Systems</li>
              <li>Computer Network Design</li>
              <li>Programming Language Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 id="skills" class="resume-heading">Skills and Proficiencies</h2>

      <div class="summaries">
        <div class="resume-card summary-intro">
          <h3 class="c-accent fw-light">The Short Version</h3>
          <p class="font-italic">
            Use these high-level overviews to guide your browsing. Click or tap on
            a card to jump to its corresponding section below.
          </p>
        </div>

        <NuxtLink to="/resume/#skills-software" class="anchor-overlay">
          <div class="resume-card summary hover-radgrad">
            <div class="summary-data">
              <h4 class="fw-light">Software Dev</h4>
              <p class="font-italic fs-3 grad-textclip">10+ Years</p>
              <p class="summary-label">Professional Experience</p>
            </div>
            <ul class="summary-highlights list-none">
              <li>Focus on Full-Stack Web Development</li>
              <li>Past work in public and private sectors</li>
              <li>Highly skilled with major web frameworks</li>
            </ul>
          </div>
        </NuxtLink>

        <NuxtLink to="/resume/#skills-design" class="anchor-overlay">
          <div class="resume-card summary hover-radgrad">
            <div class="summary-data">
              <h4 class="fw-light">UI/UX Design</h4>
              <p class="font-italic fs-3 grad-textclip">5+ Years</p>
              <p class="summary-label">Professional Experience</p>
            </div>
            <ul class="summary-highlights list-none">
              <li>Broad conceptual & practical skillset</li>
              <li>Professionally mentored in modern UX</li>
              <li>Experienced with digital art & animation</li>
            </ul>
          </div>
        </NuxtLink>

        <NuxtLink to="/resume/#skills-data" class="anchor-overlay">
          <div class="resume-card summary hover-radgrad">
            <div class="summary-data">
              <h4 class="fw-light">Data Science</h4>
              <p class="font-italic fs-3 grad-textclip">3+ Years</p>
              <p class="summary-label">Professional Experience</p>
            </div>
            <ul class="summary-highlights list-none">
              <li>Experienced with SQL and NoSQL DBMS</li>
              <li>Past work as both Analyst and Admin</li>
              <li>Highly skilled at query construction</li>
            </ul>
          </div>
        </NuxtLink>

        <NuxtLink to="/resume/#skills" class="anchor-overlay">
          <div class="resume-card summary hover-radgrad">
            <div class="summary-data">
              <h4 class="fw-light">Other Skills</h4>
              <p class="font-italic fs-3 grad-textclip">28+ Years</p>
              <p class="summary-label">Lived Experience</p>
            </div>
            <ul class="summary-highlights list-none">
              <li>Nationally recognized public speaker</li>
              <li>Fluent in English and Standard German</li>
              <li>Expert in UNIX & Linux Architectures</li>
            </ul>
          </div>
        </NuxtLink>
      </div>

      <div class="category">
        <h3 id="skills-software" class="category-heading">Software Development</h3>
        <div class="subcategory">
          <h4 class="subcategory-heading">Theory</h4>
          <ul class="skill-list">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">Modern Standards</h4>
          <ul class="skill-list">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">DevOps & Tooling</h4>
          <ul class="skill-list">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">Web Frameworks</h4>
          <ul class="skill-list tiled auto-fit">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">Languages</h4>
          <ul class="skill-list tiled auto-fit">
            <li>C</li>
            <li>C#</li>
            <li>C++</li>
            <li>CSS / SCSS</li>
            <li>Haskell</li>
            <li>HTML</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>Kotlin</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>TSX</li>
            <li>TypeScript</li>
            <li>Zig</li>
          </ul>
        </div>
      </div>

      <div class="category">
        <h3 id="skills-design" class="category-heading">UI/UX Design</h3>
        <div class="subcategory">
          <h4 class="subcategory-heading">Standards & Theory</h4>
          <ul class="skill-list">
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

        <div class="subcategory">
          <h4 class="subcategory-heading">Libraries & Software</h4>
          <ul class="skill-list tiled auto-fit">
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

      <div class="category">
        <h3 id="skills-data" class="category-heading">Data Science</h3>
        <div class="subcategory">
          <h4 class="subcategory-heading">Database Design</h4>
          <ul class="skill-list">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">Data Analysis</h4>
          <ul class="skill-list">
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
        <div class="subcategory">
          <h4 class="subcategory-heading">Databases</h4>
          <ul class="skill-list tiled auto-fit">
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
  --card-bg: hsl(var(--hs-card) 8% / .8);
  --card-border: 1px solid hsl(var(--hs-card) 26%);
  padding-bottom: 8rem;

  
}
.resume-heading,
.rc-heading {
  font-weight: 200;
}
.contacts-list > li,
.resume-card {
  background-color: var(--card-bg);
  border: var(--card-border);
}

.section {
  padding-block: clamp(2rem, 6vh, 5rem);
  position: relative;

  --inline-free: calc(100vw - var(--dw-content-wide));

  display: grid;
  grid-template-columns:
    minmax(1rem, calc(1rem + var(--inline-free) / 2))
    min(100% - 2rem, var(--dw-content))
    minmax(0, 1fr)
    minmax(1rem, calc(var(--inline-free) / 2))
}
.section > * {
  grid-column: 2;
}
.section-wide > * {
  grid-column: 2 / 4;
}

.section:not(:last-of-type)::after,
.category:not(:last-of-type)::after {
  content: '';
  border-bottom: 1px solid #80808060;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.category:not(:last-of-type)::after {
  width: 80%;
}
.section > .resume-heading { margin-bottom: 2rem }

.section:nth-of-type(2)::before,
.section:nth-of-type(3)::before {
  content: '';
  inset: 2rem 0;
  position: absolute;
  z-index: -1;
  background: linear-gradient(90deg, transparent, var(--c-accent), transparent);
  background-size: 200%;
  background-position-x: 100%;
  filter: blur(1rem);
  opacity: 0.1;
  animation: section-grad 45s infinite alternate;
}
.section:nth-of-type(3)::before {
  background-position-x: 0%;
  animation-direction: alternate-reverse;
}
@keyframes section-grad {
0% { background-position: 100% }
100% { background-position: 0% }
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
  padding-inline: 0.25em;
}
.intro-graphic__img {
  margin-left: auto;
  padding-top: 8cqw;
}
.intro-summary {
  margin-block: 2rem;
  max-width: 60ch;
  font-weight: 200;
}
.contacts {
  --li-basis: 20rem;
  max-width: calc(5rem + (3 * var(--li-basis)));
}
.contacts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--li-basis), 100%), 1fr));
  gap: 0.5rem;
}
.contact {
  border-radius: 0.5rem;
  max-width: 30rem;
}
.resumegrid {
  display: grid;
  gap: 2rem;
}
.resume-container {
  container: cnt-resume / inline-size;
  padding: 1rem;
}
.resume-container > .rc-heading {
  color: var(--c-accent);
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.rc-datalist {
  display: grid;
  padding-block: 1rem;
}
.rc-datalist > * {
  padding-block: 0.5rem;
}
.rc-datalist > :nth-child(2) {
  border-bottom: 1px solid hsl(var(--hs-card) 26%);
  border-top: 1px solid hsl(var(--hs-card) 26%);
}
.school-list {
  display: grid;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
}

@container cnt-resume (min-width: 35rem) {
  .rc-datalist {
    grid-template-areas: "li0 li2" "li1 li2";
    text-align: center;
  }
  .rc-datalist > :nth-child(2) {
    border-bottom: none;
  }
  .rc-datalist > :last-child {
    border-inline-start: 1px solid hsl(var(--hs-card) 26%);
    grid-area: li2;
  }
  .school-list {
    gap: 2rem;
    grid-template-columns: 1fr 60cqw;
  }
  .school-list__heading {
    align-self: center;
  }
}
@media (min-width: 45rem) {
  .resumegrid { grid-template-columns: 1fr 1fr }
}

.summaries {
  display: grid;
  grid-template-columns: minmax(auto, 28rem);
  gap: 2rem;
  place-content: center;
}
.summary-intro {
  display: grid;
  gap: 2rem;
  padding: 1rem min(15%, 20rem);
  place-content: center;
  text-align: center;
}
@media (min-width: 40rem) {
  .summaries { grid-template-columns: 1fr 1fr }
  .summary-intro { grid-column: span 2 }
}
@media (min-width: 60rem) {
  .summaries { grid-template-columns: 1fr 1fr 1fr }
}
.summary {
  padding: 1rem;
  user-select: none;
}
.summary:hover { cursor: pointer }
.summary-data > * {
  margin-block: 1rem;
  text-align: center;
}
.summary-figure,
.summary-label { font-style: italic }
.summary-highlights > li {
  border-inline-start: 0.25rem solid var(--c-accent);
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
}

.category {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  position: relative;
  padding-bottom: 4rem;
}
.category-heading {
  flex-basis: 100%;
  font-weight: 200;
  padding-top: 4rem;
}
.subcategory {
  background-color: var(--card-bg);
  border: var(--card-border);
  flex: 1 0 min(25rem, 100%);
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 1em;
}
.subcategory-heading {
  color: var(--c-accent);
  font-size: clamp(1.5rem, var(--step-2), 2.25rem);
  font-weight: 200;
  text-transform: uppercase;
}
.skill-list {
  align-content: start;
  display: grid;
  gap: 0.5rem;
  list-style: none;
  padding-top: 1rem;
  padding-inline-start: 0.5rem;
}
.skill-list.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
.skill-list:not(.tiled) > li {
  border-inline-start: 0.125rem solid var(--c-text);
  padding-inline-start: 0.5rem;
}
.skill-list:not(.tiled) > li:nth-child(even) {
  border-color: #808080;
  color: #808080;
}
.skill-list.tiled {
  align-content: normal;
  padding-inline-start: 0;
}
.skill-list.tiled > li {
  border: 1px solid hsl(var(--hs-card) 26%);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(min-width: 900px) {
  .intro-graphic__text { min-height: 70% }
}
@media (min-width: 90rem) {
  .intro-graphic__text { min-height: 100% }
  .intro-graphic__img { padding-top: 0 }
}

</style>
