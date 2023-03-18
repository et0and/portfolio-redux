---
title: Te Wāhi Auaha - a knowledge hub
layout: project
dateStart: 2021-12-09
dateEnd: 2022-02-08
media:
  - type: image
    filename: twacover.webp
    size: md
    alt: Some sample screens of the Te Wāhi Learn online hub
---

<small>Roles: User Research, UX/UI Design, Development
Tools: Figma, Premiere Pro, Next JS
Client: Takapuna Grammar School
Team: Robin Kydd (TiC) and myself (designer, researcher, developer)
Timeline of Two Years</small>

---
<br><br>

<div class="overview">
<h3>Summary</h3>

Our project aimed to create a centralized knowledge hub that trains teachers and students at Takapuna Grammar School on how to use specialised machines and software in the Te Wāhi maker space. We developed the hub through surveys, ongoing feedback from students and staff, and multiple rounds of development. We also created a CDN to ensure secure software delivery. The hub is growing, and future iterations will onboard new students looking to enhance their learning and making.

</div>

<br><br>

---

<h3>Background + The Problem </h3>

Takapuna Grammar School launched their Innovation Space in 2020, offering a wide range of tools and machinery for students and staff to use. However, without proper training, this space can be inaccessible for anyone new to it, including students ranging from years 9-13 and teachers. This poses a significant learning curve and limits accessibility to the space.

<br><br>

<figure>
<img src="/media/twa-entrance.webp" alt="Entrance of the Te Wāhi maker space, showing a monochrome sign on a brick wall."/>
<figcaption>Entrance of the Te Wāhi maker space</figcaption>
</figure>

<br><br>

---

<h3>The Solution </h3>

We designed, developed, and deployed a centralized knowledge hub that exists both online and offline. The hub includes guides for using the tools and machines, as well as steps to follow for achieving specific goals. Students and staff can access the hub through a website and posters placed throughout the Innovation Space.

<br><br>

---

<br><br>

<h3>Design Process - the 5 Ws Method </h3>

*What is the product?* - A centralised knowledge hub

*Who is it for?* - Students and staff of Takapuna Grammar School

*Why does it need to be created?* - To help students and staff onboard and train themselves to use the tools and machines in Te Wāhi Auaha

*What does it need to do?* - Instruct students and staff on how to use specific tools/machines, as well as guide them on common goals they want to achieve (e.g. “I want to 3D print something...”)

*Where and When will it be used?* - At Takapuna Grammar School, to be used anytime inside or outside of curriculum


<br><br>

<div class="insight">

"Students and Staff would have <u>agency</u> over learning about how to use a certain tool or machine in the maker space, so they can be free in realising their <u>individual</u> projects with <u>confidence</u>"

</div>

<br><br>

<h3>Definitions </h3>

*Agency* - giving users control over their creative experience

*Confidence* - in their ability to achieve or solve a problem

*Individual* - what is specific to the student/staff member, which may not fall into a particular curriculum area


<br><br>

---

<br><br>

<h3>User Research</h3>
<h4>Primary Research Method - utilising student voice</h4>

Before conducting user research, we made several assumptions based on our observations of students' behavior, including that many students don't read emails or daily notices, struggle to find digital materials for their classes, and feel discouraged by the sheer amount of notifications from teachers. 

We conducted a simple survey of 100 students using [Tally](https://tally.so) to gather data on these assumptions. Our findings showed that the vast majority of students surveyed don't read their student emails, nearly half don't read daily notices or school newsletters, and close to a third struggle to find what they need on Google Classroom. However, most students expressed that having a single, organised hub for digital materials would help with their learning, even though some noted that Google Classroom already served this purpose to some extent but was difficult to navigate.

<br><br>

---

<br><br>

<h3>First design and feedback round</h3>

<figure>
<img src="/media/twa-site-01.webp" alt="A screenshot of the very first Te Wāhi Auaha homepage, with a few links to some of the most common tools that we use in the maker space. It is a pretty plain and simple webpage."/>
<figcaption>First ever webpage with a few short guides on the most common tools, made entirely in simple HTML and CSS</figcaption>
</figure>

<br><br>

We started by creating a basic homepage as the central hub for all things related to the maker space. We also designed a series of A3 posters for display in the space, each with a short description of the core tools and machines, and a QR code directing students to video tutorials demonstrating how to use them. The initial site design received mostly positive feedback, but we received suggestions for improvement from students and staff. They wanted more information on how to use software in the space, a search function, and clearer links to the guides.

<br><br>

<figure>
<img src="/media/twa-posters-01.webp" alt="A screenshot of some posters for display in the maker space. Each poster contains some images and a short description of the respective tool or machine, with a QR code that redirected students to a more detailed video tutorial."/>
<figcaption>A selection of some posters</figcaption>
</figure>

<figure>
<img src="/media/posters-in-space.webp" alt="Some of the aforementioned posters hanging on the walls of the maker space."/>
<figcaption>Posters hanging in the maker space</figcaption>
</figure>

<br><br>

To address these concerns, we redesigned the site with clear buttons for the most common flows, including tool guides, project guides, an online exhibition space, and a form for submitting files for 3D printing or laser cutting/engraving. We hosted the guides on Gitbook, which allowed for greater detail and full search functionality. To accommodate students with slow internet connections, we also added on-the-fly media compression. We switched from Google Forms to Airtable for submitting jobs because many students were using personal Gmail accounts instead of their school email addresses, which caused confusion.

<figure>
<img src="/media/twa-site-02.webp" alt="A screenshot of the second generation website, with coloured buttons on the homepage linked to some of the common tasks students undertook."/>
<figcaption>The redesigned website, with coloured buttons for navigation and an additional option for viewing online exhibitions and submitting files for printing, cutting or engraving</figcaption>
</figure>

<br><br>

<figure>
<img src="/media/twa-form-01.webp" alt="A screenshot of an Airtable form to submit jobs for 3D printing, laser cutting or engraving."/>
<figcaption>Form for submitting jobs to be 3D printed, laser cut or engraved that was managed using Airtable</figcaption>
</figure>

<br><br>

<figure>
<img src="/media/twa-guides-01.webp" alt="A screenshot of the Te Wāhi Learn hub, hosted on Gitbook."/>
<figcaption>The first Te Wāhi Learn hub, hosted via Gitbook and with guides to all the tools and machines used in the space</figcaption>
</figure>

<br><br>

While the Gitbook hub was functional, it had some key issues. It wasn't clear to students which tools were relevant for their projects, and a cookie consent banner caused confusion. To address these issues and improve privacy, we decided to create our own hub from scratch.

<br><br>

---

<br><br>

<figure>
<img src="/media/twa-guides-02.webp" alt="A screenshot of the Te Wāhi Learn hub, now running on Vercel."/>
<figcaption>The second iteration of the hub saw a migration from Gitbook to our own infrastructure, using a custom fork of Nextra with Next.js and deployment on Vercel</figcaption>
</figure>

<br><br>

<figure>
<img src="/media/twa-guides-02-dark.webp" alt="A screenshot of the Te Wāhi Learn hub, now with dark mode!."/>
<figcaption>Also with added dark mode to help with reading in dim environments</figcaption>
</figure>

<br><br>

Our second hub, now running a custom fork of [Nextra](https://github.com/shuding/nextra) and deployed via [Vercel](https://vercel.com), includes clear sections for students wanting to 3D print, laser cut or engrave something. The homepage was also updated to have a clearer link to the hub, as well as more information displayed on each section of the site. [Next.js](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/) were used to develop this third iteration of the homepage to improve responsiveness, speed and reduce development time. A CDN was also established under "tewahi.me" to help with the safe and secure delivery of large software binaries for students, as well as host versions of tools that no longer officially exist elsewhere on the internet (such as the macOS version of Meshmixer).

<br><br>

---

<br><br>

<figure>
<img src="/media/twa-site-03.webp" alt="A screenshot of the Te Wāhi homepage, now in its third iteration"/>
<figcaption>The most recent Te Wāhi homepage redesign</figcaption>
</figure>

<br><br>

---

<br><br>

<h3>Learnings, reflections and next steps</h3>

Upon the third iteration of the Te Wāhi homepage, a small follow-up survey was conducted recording the responses of 25 students and their experience with the hub. The key findings were:

- All students recorded appreciated having a centralised knowledge hub online
- Most students felt the hub was easy to use. Two students noted that occasionally videos would fail to load on the hub, which will need further investigation
- Most students felt that the visual design and layout of the hub is clear and accessible. One student felt that more colour could be used to signal important parts of the hub, which we will plan on implementing in the next iteration

The learning hub continues to receive new tutorials and guides. All material on the site, unless otherwise noted, is licensed under MIT and [full source code is available to view here](https://github.com/et0and/learn.tewahi.com).