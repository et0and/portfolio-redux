---
title: Sophia
layout: project
dateStart: 2021-12-09
dateEnd: 2022-02-08
media:
  - type: image
    filename: sophia1.png
    size: md
    alt: A health and well being portal
---

<h3>A new kind of health and well being portal </h3>

<small>Roles: User Research, UX/UI Design, Development
Tools: Figma, Optimal Workshop, Usability Hub, Miro
Client: CareerFoundry UX Project
Team: Solo (designer, researcher)
Timeline of One Year</small>

---
<br><br>

<h3>Project overview</h3>

To keep on top of our forever changing and ever-busy lives, many young professionals now look to various health apps to track their well being. As well as looking at their physical health, mental and emotional wellness is becoming an increasing point of concern for many individuals who struggle to balance work with life.

Through this CareerFoundry project, I set out to discover problems that these users were facing, what their needs were, and understand goals they had in improving their overall well being through the development of an accessible and responsive health portal. Sophia was designed as a tool and platform that would grow and change with the user, allowing users to record, learn and meditate all in one convenient location.

<br><br>

<figure>
<img src="/media/previewsophia.png" alt="An example screen of the Sophia app running on iOS."/>
</figure>

<br><br>

<h3>Exploring the problem</h3>

Before anything, I needed to better understand users’ potential problems and frustrations. From this, I would be able to start thinking about a clearly defined Problem Statement that would define the design and scope of Sophia.

<h4>Possible Problems </h4>

- Users feel unmotivated and uninspired to track well being and mood
- Access to quality educational resources is hard to find and verify
- Health, particularly mental health, can be very personal so putting it into writing on a platform can bring anxiety and worry around privacy + security
- Journalling takes time, and could be seen as a chore to complete rather than something reflective and meditative
- A lack of free time in the day to work on yourself through an app/portal

<h4>Possible Solutions </h4>

- A way of incentivising tracking well being and mood, either through gamification methods within the app or a financial angle (such as receiving a discount for health insurance should the user reach a certain stage)
- Integrating a catalog of vetted education resources backed by industry bodies, as well as guest appearances/authoring from members of the medical community
- Design app and portal to be secure from the start, with all user data encrypted (AES-256, Curve25519 or similar) and nothing shared without their explicit permission, and an option to export data off of the app freely
- Integrate journal function to be something that can be embedded or used like a widget, so that a small popup prompt is all it takes for a user to write something down. Could also allow users to record journals using voice-to-text to help with uptake.
- Have different timeframes so that users can journal for as little as 5 minutes a day, and can choose to write more if they wish. To help them get started, journals could begin with some kind of prompt

<br><br>

<h3>Design Process - Double Diamond</h3>

Throughout this project, I followed the Double Diamond design approach to structure the design process and create a solution that would be useful for users in the development of Sophia. 

1. Competitive Analysis
2. User Interviews
3. User Personas, Flows, and Journey Maps
4. Information Architecture
5. Prototyping, User Testing, Refine
6. Visual Design
7. Refined Mockup and Prototype
8. Reflections

<br><br>

<h3>Competitive Analysis</h3>

<figure>
<img src="/media/mindfulness.png" alt="A competitive analysis of different products on the market."/>
</figure>

<figure>
<img src="/media/headspace.png" alt="Headspace SWOT profile."/>
<figcaption>Headspace SWOT profile</figcaption>
</figure>

The core message of Headspace is to improve the happiness and health of the of the world through meditation. By making it easy to access mental health tools and materials, their goal is to get users through tough times and find joy in every day.

<figure>
<img src="/media/calm.png" alt="Calm SWOT profile."/>
<figcaption>Calm SWOT profile</figcaption>
</figure>

Calm presents itself as the number one rated meditation and sleep health app. Unlike a typical meditation app, it positions itself as a one stop shop for mental health resources, tools, and what it calls “masterclasses” taught by experts and celebrities to help users with overcoming stress, fear, sleep, among other things.

<figure>
<img src="/media/mentemia.png" alt="Mentemia SWOT profile."/>
<figcaption>Mentemia SWOT profile</figcaption>
</figure>

The core message of Mentemia is a tool for public good, one that helps users achieve less stress and anxiety, better sleep, more happiness and energy. Its core product is available to individual users for free, while its business offerring is paid and acts as a workplace wellbeing platform.

<figure>
<img src="/media/insighttimer.png" alt="Insight Timer SWOT profile."/>
<figcaption>Insight Timer SWOT profile</figcaption>
</figure>

Insight Timer positions itself as a sustainable product that puts users first. By giving users access to a vast catalog of free content, their mission is to help spread meditation and mindfulness to as many people across the world as possible. 

<br><br>

<h3>User Interviews</h3>

<h4>Participants</h4>

Albert (26) - full-time university student
Sally (23) - part-time barista, full-time university student
Rick (23) - full-time QA engineer and software developer

<figure>
<img src="/media/affinity.png" alt="A combined affinity map from user interview responses."/>
<figcaption>A combined affinity map from user interview responses</figcaption>
</figure>

Some key insights:

<h4>Importance of free time and structured time</h4>
- Different ways of spending time a key concern for all participants
- Lack of time balance or being time poor negatively affects participant well being

<h4>An online-first approach</h4>
- Seek immediate answers online, often looking at the first few top Google results
- Used as a segue into other methods such as asking Facebook groups, personal communities or healthcare professionals

<h4>Quality user experience over everything</h4>
- Dislike across all participants for poor end user experiences in general, especially UI
- Different preferences depending on specific user needs, whether this be for sleep or nutrition
- Prefer quality of material and experience over quantity

<h4>Exercise for physical and mental benefits</h4>
- Users appreciate exercise for bringing physical and mental balance
- Holistic approach to exercise that extends to total health and well being

<br><br>

<h3>User Personas</h3>

With a greater understanding of users’ frustrations, goals, and needs, user personas could be created to help refine who Sophia is for. Three personas and corresponding user journeys and flows were created based on the data collected. 

As I move further along in the design process, these personas can help serve as touch points to refer back to, ensuring that development is kept to meet the needs of the users and only necessary features are included.

<figure>
<img src="/media/alan.png" alt="Alan user persona"/>
</figure>

<figure>
<img src="/media/waiching.png" alt="Waiching user persona"/>
</figure>

<figure>
<img src="/media/jill.png" alt="Jill user persona"/>
</figure>

<br><br>

<h3>User Journeys</h3>

<figure>
<img src="/media/flowwaiching.png" alt="Waiching user journey"/>
</figure>

<figure>
<img src="/media/flowjill.png" alt="Jill user journey"/>
</figure>

<br><br>

<h3>User Flows</h3>

After discovering the main features of Sophia, I created user flows to understand the steps my personas would follow to reach their goals.

<figure>
<img src="/media/flow1.png" alt="User flow for accessing saved materials on Sophia."/>
<figcaption>Saving materials on Sophia</figcaption>
</figure>

<figure>
<img src="/media/flow2.png" alt="User flow for listening to guided meditations on Sophia."/>
<figcaption>Listening to a guided meditation on Sophia</figcaption>
</figure>

<br><br>

<h3>Information Architecture</h3>

The overall information architecture and structure of Sophia was defined through a closed card sort, facilitated through Optimal Workshop. 

The sort consisted of 19 cards in total for participants to group into 7 categories. A total of 5 people completed the exercise, with all participants based in New Zealand from my target audience.

