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
Team: R.K. (manager) and myself (designer, researcher, developer)
Timeline of Two Years</small>

---
<br><br>

<h3>Summary</h3>

<div class="overview">

For this project, the goal was to create a centralised knowledge hub to help train teachers and students at Takapuna Grammar School on how to use specialised machines and software in the Te Wāhi maker space.

The hub was developed through a series of:
- surveys to students and staff
- initials sites that developed with continued student and staff feedback
- development rounds, including the creation of a CDN to allow for the secure delivery of software binaries to students and staff

While the hub continues to grow with more guides and tutorials added, further iterations will be necessary as we strive to onboard the next set of students looking to enhance their learning and making.

</div>

<br><br>

<h3>Background + The Problem </h3>

Takapuna Grammar School launched their maker space (nee Innovation Space) for students and staff in 2020. With a wide range of different tools and machinery, there is a high learning curve for anyone new to the space with students ranging from years 9 - 13 (12 - 18 year olds) and teachers. Without some form of training, accessibility of this space is limited.

<br><br>

<figure>
<img src="/media/twa-entrance.webp" alt="Entrance of the Te Wāhi maker space, showing a monochrome sign on a brick wall."/>
<figcaption>Entrance of the Te Wāhi maker space</figcaption>
</figure>

<br><br>

---

<h3>The Solution </h3>

Design, develop and deploy a centralised knowledge hub that exists both online in the form of a website and offline in the form of posters. The hub will contain different guides for using the tools and machines, as well as steps to follow for certain goals.

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

Some initial assumptions leading up to undertaking this research was the following:

- Many students don’t read emails
- Many students don’t read daily notices/newsletter
- Many students struggle to find where digital material for their classes are located
- Many students feel that having a single organised hub/location for digital materials would help them with their learning and organisation
- Many students feel discouraged from going through notifications due to the sheer amount of alerts that teachers would post and put out on a daily basis, making it difficult to filter through the noise

<br/>

Using a simple survey, responses were gathered from a pool of 100 different students using [Tally](https://tally.so) to gather some data regarding the above assumptions. The findings were:

- The vast majority of students surveyed do not read their students emails (85%), with the most popular reason being that they felt there was so much being sent that it was hard to keep on top of
- Nearly half of all students surveyed do not ready the daily notices and school newsletters (47%)
- Close to a third of all students surveyed said that they struggle to find what they need for their classes on Google Classroom (28%)
- A large majority of students surveyed expressed that it would be useful to have one set place to find digital materials for their respective classes, with a few noting that Google Classroom already did this to a certain extent but sometimes was hard to look through

<br><br>

---

<br><br>

<h3>First design and feedback round</h3>

<figure>
<img src="/media/twa-site-01.webp" alt="A screenshot of the very first Te Wāhi Auaha homepage, with a few links to some of the most common tools that we use in the maker space. It is a pretty plain and simple webpage."/>
<figcaption>First ever webpage with a few short guides on the most common tools, made entirely in simple HTML and CSS</figcaption>
</figure>

<br><br>

To start with, a very basic homepage was created to act as the central hub to all matters related to the maker space. To accompany this site were a series of A3 posters for display in the space. Each poster contained a short description of the core tools and machines used in the space, with a QR code that directed students to a video tutorial demonstrating how to use said tool/machine.

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

Response to the initial site design was mostly positive. Through further student voice and also some comments from staff, most respondents rated the site highly but also noted that the site could host some further guides and tutorials in greater depth:

- "... a clean design ... could use more information on how to use more of the software in the space"
- "... would be great to be able to search for stuff"
- "... the links to the guides aren't that clear ... could be a button?"

<br><br>

To address this, the site was redesigned to include clear buttons on the homepage for the most common flows, which were the tool guides, project guides, a newly launched online exhibition space, and a form for submitting files for 3D printed or laser cutting/engraving. The tool and project guides were written up in greater detail and hosted on [Gitbook](https://gitbook.com), with full search capability and on-the-fly media compression to help students with limited or slow internet connections.

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

Google Forms was originally used for submitting jobs, but this was dropped in favour of Airtable. Students were submitting requests from their personal Gmail accounts and not their school addresses. This meant that many students were awaiting confirmation regarding their prints in their school inboxes, without having realised that they made the request through a personal account.

<br><br>

<figure>
<img src="/media/twa-guides-01.webp" alt="A screenshot of the Te Wāhi Learn hub, hosted on Gitbook."/>
<figcaption>The first Te Wāhi Learn hub, hosted via Gitbook and with guides to all the tools and machines used in the space</figcaption>
</figure>

<br><br>

The hub on Gitbook functioned well but had a few key issues. Namely, students who did not know what specific thing they were looking for but wished to make something via 3D printing, laser cutting or engraving did not have a clear starting point on the site. There was a list of tools but it isn't immediately clear which ones are relevant to what job or purpose.

Another issue with using Gitbook was that, being a third-party service, we were subject to their terms and tracking cookies. A cookie consent banner would popup for new users, causing confusion with some students who would then try to Refuse Cookies and be redirected to an external Gitbook page. To protect the privacy of students and staff we decided that creating our own hub from scratch, one that we controlled without the dependency of a third-party, was the best way forward.

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

Our second hub, now running a custom fork of [Nextra](https://github.com/shuding/nextra) and deployed via [Vercel](https://vercel.com), includes clear sections for students wanting to 3D print, laser cut or engrave something. The homepage was also updated to have a clearer link to the hub, as well as more information displayed on each section of the site. [Next.js](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/) were used to develop this third iteration of the homepage to improve responsiveness, speed and reduce developement time. A CDN was also established under "tewahi.me" to help with the safe and secure delivery of large software binaries for students, as well as host versions of tools that no longer officially exist elsewhere on the internet (such as the macOS version of Meshmixer).

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

Upon the third iteration of the Te Wāhi homepage, a small follow-up Tally survey was conducted recording the responses of 25 students and their experience with the hub. The key findings were:

- All students recorded appreciated having a centralised knowledge hub online
- Most students felt the hub was easy to use. Two students noted that occasionally videos would fail to load on the hub, which will need further investigation
- Most students felt that the visual design and layout of the hub is clear and accessible. One student felt that more colour could be used to signal important parts of the hub, which we will plan on implementing in the next iteration

The learning hub continues to receive new tutorials and guides. All material on the site, unless otherwise noted, is licensed under MIT and [full source code is available to view here](https://github.com/et0and/learn.tewahi.com).