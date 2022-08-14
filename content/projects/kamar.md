---
title: KAMAR login flow explorations
layout: project
dateStart: 2022-01-09
dateEnd: 2022-02-08
media:
  - type: image
    filename: hero-kamar.png
    size: md
    alt: Some sample screens of a reimagined KAMAR sign in
---

<h3>A fun approach to minimise a pain point for teachers</h3>

NOTE: THIS CASE STUDY IS STILL ACTIVELY BEING WRITTEN UP AS OF 07/06/2022

<small>Roles: UX/UI Design, User Research, Product Analysis
Tools: Figma
Team: Myself (designer, researcher)
Timeline of One Month</small>

---
<br><br>

<h3>Background + The Problem </h3>

Schools across Aotearoa rely on KAMAR, a school management system used by teachers and administrators for virtually every aspect of running a school. Attendance, grades, reports, medical data, parent data, and so on are all on KAMAR, and is one of the most widely used and critical tools for schools that have it deployed.

In an effort to keep data secure, KAMAR maintains a strict timeout and logoff policy. After a minute of inactivity, KAMAR logs the user off and forces them to manually sign in with username and password after every timeout. The process is slow and buggy, with the client app occasionally not registering and signalling the timeout to the user, causing them to potentially lose progress on what they were working on.

<br><br>

<h3>The Solution </h3>

Design a user flow that has teachers and administrators sign in normally at the start of every day. In the event of a timeout, they can sign back in quickly using a personalised pin code (already set as their user).

<br><br>

<h3>Process outline - the Double Diamond framework</h3>

Following the double diamond framework, user research could be diverged and the scope of the problem space clarified. After diverging, I converged and identified the specific "How Might We" and benefit sought:

<br>

---

> "Teachers and administrators would quickly and effortlessly access their school management system, so they can dedicate more energy in the classroom and reduce cognitive load."

---

<br>

<figure>
<img src="/media/DD.png" alt="Diagram of a Double Diamond strategy outline in approaching the problem with KAMAR sign in flow."/>
<figcaption>Double-diamond design process</figcaption>
</figure>

<br><br>

<h3>Definitions </h3>

*Effortlessly* - without giving it much thought 

*Energy* - accounting for both the mental and physical energy and overall wellbeing of the teacher

*Cognitive load* - mental strain on the teacher, especially in instances where they are having to actively use their working memory for tasks

<br><br>

<h3>User Research</h3>
<h4>Utilising teacher voice</h4>

Some initial assumptions leading up to undertaking this research was the following:

- Many teachers struggle with logging into KAMAR
- Many teachers find KAMAR to be buggy
- Many teachers become frustrated when being locked out without notice, potentially losing progress or work they were doing
- Teachers generally feel discouraged from using KAMAR, both on mobile and desktop

<br/>

Using a simple [Tally](https://tally.so) survey which was sent out through the national visual art teachers mailing list (VisArtNet), 50 responses were gathered from teachers across Aotearoa to gather some data regarding the above assumptions. The findings were:

- All but three teachers noted that they struggle with logging into KAMAR
- All teachers found KAMAR to be buggy and have performance issues
- All teachers had experienced being locked out of KAMAR without notice
- Nearly half of all teachers (23) noted feeling discouraged from using KAMAR, citing reasons such as "slowness" and "often unpredictable behaviour" from the system

<h4>User interviews</h4>

User interviews were conducted with 22 current, full-time secondary school teachers from across Aotearoa New Zealand. Interviews were conducted remotely via email and video calling (Google Meet and Zoom).

**Assumption**: Teachers find constantly having to login a pain, slowing the flow and rhythm of their classes

<br>

**Findings**: Teachers struggle with having to constantly login, and will often put off doing their roll until the end of the class to avoid disruption

> *"When it takes a good 10 - 20 seconds to open KAMAR, login, wait for my timetable to load, and then attempt to click through the attendance ... I often don't bother and do it towards the end or after the class is over."*

90% of all participants said they would feel better about having a faster, more simplified login flow for KAMAR.

<br><br>

<h3>Empathy Mapping</h3>
<h4>Visualising attitudes and behaviours of a classroom teacher</h4>

<figure>
<img src="/media/empathymap.png" alt="An empathy map with responses from different teachers."/>
<figcaption>Combined empathy map of teacher responses and feedback gathered from interviews</figcaption>
</figure>

<br>

By combining some of the key responses (verbal and non-verbal), an empathy map could be formed to help remove further bias and uncover potential teacher needs and pain points related to KAMAR. Overall, the map helped to illustrate that:

- teachers interviewed are all dissatisfied with the current login flow 
- going through the current flow feels like a chore for many
- it is a point of anxiety for many

<br><br>

<h3>Comparitive Analysis</h3>
<h4>Comparison of different sign in methods</h4>

<figure>
<img src="/media/analysis.png" alt="A table listing different methods of login and their pros and cons."/>
<figcaption>Different methods compared and ranked</figcaption>
</figure>

A simple star rating system was utilised to measure different common sign in methods based on their overall usability, design, and security, as well as a list of some positive and negative points about each. While not an exhaustive list nor one that is fully objective, the goal was to compare some of the common methods used and attempt to strike a balance between the ease of use of a passcode and the security of a magic link or SSO flow.

Any multi step process, particularly one that involves the user either using another device or logging into another service was ruled out due to the impracticality for teachers in a classroom. With passwords already in use with KAMAR, this left passcodes and SSO remaining as the other sign in methods. 

<br><br>

<h3>Journey Mapping</h3>
<h4>User Journey</h4>

Taking all the insights from research and the resulting empathy map, a thorough user journey was created that highlighted the UX before, during and after logging into KAMAR.

<figure>
<img src="/media/journey.png" alt="A user journey that maps the steps and actions a teacher might take when trying to login to KAMAR."/>
<figcaption>User Journey for KAMAR login</figcaption>
</figure>

<h3></h3>
<h4>Wireframes and Prototypes</h4>


