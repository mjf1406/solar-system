<!-- @format -->

# Diffaroo

This is the site I put up for my students to use for differentiated content during Module 2.

## To-do List

-   Landing page
    -   [ ] footer
-   Versions of the site
    -   **teacher.diffaroo.com**
        -   Lets the teacher browse the content and have access to all URLs for each piece of content. Let's say we have diffaroo.com/solar-system/mercury. This page allows the reader to set the level, turn images on or off, and set the reading time. The teacher would get access to all the different links that lock those things in. For example, we could have diffaroo.com/solar-system/mercury/i for articles with images and diffaroo.com/solar-system/mercury/ni for without images. Then, within these paths, we have the levels, e.g. /beginning or /growing. Also, within the levels, there will be the time, e.g. /beginning/3 or /beginning/5 for 3 and 5 minutes respectively.
        -   So, when the teacher is ready to share the links, they will go through a form to generate the URLs, but all the URLs will be made available in a list if the teacher already knows what to do with one-click copy to copy all the relevant URLs.
        -   Explains how the site works: all the URL stuff above, the methodology for content creation, the methodology for how the times were computed.
    -   **content.diffaroo.com**
        -   This is where all the content lives. This is the student-facing site. It's all they should ever see. It is made to be navigable by students.
    -   **www.diffaroo.oom**
        -   this is just the landing page
-   Build Process
    -   I want to have an LLM generate all levels based on the 8th grade passage. I would create, manually, the 8th grade level for each topic at each reading time, then have an LLM, at build time, generate the other levels using a very specific system prompt. This will have to be tested A LOT.
    -   Where do we get the WPM reading speed? The below data is from 2017 and 2019.
        -   https://docs.google.com/spreadsheets/d/1MnzzTZXwTzUXb__kqGJS1Ylq1P_RbM0MGBpPOLxMAAc/edit?usp=sharing
        -   We should take the low end and then subtract 20% or something because the scores were recorded in spring, which is the end of the year in America.

## Change Log

### 2025/04/15

-   UI: homepage - added hero
-   UI: homepage - added features
-   UI: homepage - added FAQ
-   BE: did a lot of work on automating the build process.

### 2025/04/14

-   UX: added the following v0.1 theme: space, light, dark, reading
-   UX: added nightlight toggle
-   UI: added levels as tabs, but is this the right decisions? Should each level be its own page?
-   UI: set up a basic landing page with a hero section
