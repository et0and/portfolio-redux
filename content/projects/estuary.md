---
title: Estuary - bridging generations through local histories (WIP)
layout: project
dateStart: 2022-06-02
media:
  - type: image
    filename: estuary.webp
    size: md
    alt: Some sample screens of Estuary
---

<small>Roles: User Research, UX/UI Design, Development
Tools: Figma, VS Code, Tally
Client: Takapuna Grammar School (Kāhui Ako)
Team: Myself (designer, researcher, developer)
Ongoing project</small>

---

This case study page is still being developed. Check back again later.

<div class="overview">
<h3>Summary</h3>

Estuary is an new web app that empowers students to preserve and share their family's local histories. By uploading audio recordings of elder family members, students can create a decentralized, accessible archive of oral narratives. With QR codes linking to these priceless stories, Estuary fosters intergenerational connections and enriches the school histories curriculum, while celebrating the unique heritage of local communities.

</div>

<br><br>
---
<br><br>

<h3>Introduction</h3>

Takapuna Grammar School has been exploring ways to use technology to assist schools in the local community in adapting to upcoming changes to the school histories curriculum. The focus has been on incorporating local histories and oral narratives from older generations related to students. To address this need, the Estuary project was initiated as a simple web app, allowing students to upload and share their family's local histories.

<br><br>
---
<br><br>

<h3>Objective</h3>

The primary objective of the Estuary project was to create an accessible platform for students to collect and share oral histories from their families, making them a part of the decentralised web using [IPFS](https://ipfs.io). In choosing a decentralised method of storage and delivery, it would address any possibility of [link rot](https://en.wikipedia.org/wiki/Link_rot) which many existing digital archives face. All users need is the permanent content identifier (CID) of any uploaded file, and they can retrieve this from any other IPFS gateway.

By generating QR codes for the uploaded content, these histories could be shared and made accessible to others within the community. We wanted to quickly build a working prototype ahead of the local schools Kāhui Ako conference, so that it may be presented and tested there with students and staff from the local area.

<br><br>
---
<br><br>

<h3>Research & Development</h3>

The research for the Estuary project was conducted through in-person consultations with teachers at Takapuna Grammar School and neighboring schools, including Belmont Intermediate and Vauxhall Primary. Insights and feedback from these conversations informed the development of the web app.

The research findings highlighted the need for a user-friendly platform that was easy to navigate for students and their families. The predominant user demographic would consist of young children, some from primary to intermediate age, using Estuary as part of their school work, so it would need to be accessible with them in mind. 

Additionally, it was important to ensure that the only students and staff from the Kāhui Ako schools could sign up and use the site. If there was no authentication in place, it is highly likely for bad actors to try and abuse the service. This would also allow for some gathering of metadata to see the total registered user count of Estuary, with finer analytics of the service handled with something like [Matomo](https://matomo.org).

<br><br>
---
<br><br>

<h3>Implementation</h3>

Based on the research findings, a minimum viable product (MVP) of the Estuary web app was developed. The MVP allowed students to:

- Upload audio recordings of their family members recounting their local histories
- Store the uploaded content on IPFS, ensuring a decentralized and secure storage system
- Generate QR codes for each uploaded history, enabling easy sharing and discovery

[Infura](https://infura.io) was chosen to provide the IPFS storage and delivery infrastructure due to its low cost and stability, while [Vercel] was chosen for deploying the app itself and handling environment variables.  

<br><br>
---
<br><br>

<h3>Testing & Iteration</h3>

The Estuary web app is currently in the testing phase, with students using the platform to identify any pain points or areas for improvement. The testing process involves:

- Students uploading audio recordings of their family members' local histories
- Teachers and students using the QR codes to access and listen to the uploaded content
- Gathering feedback from students, teachers, and families using qualitative and quantitative methods on the usability and functionality of the platform
- Based on the feedback gathered, making necessary improvements and iterations to Estuary, enhancing the user experience and better serving the needs of the local community.

<br><br>
---
<br><br>

<h3>Conclusion</h3>

The Estuary project aims to empower students to preserve and share their local histories through a simple and user-friendly web app. By engaging with the community and iterating based on user feedback, the project team seeks to create a valuable resource that will not only enrich the school histories curriculum but also strengthen the bond between generations and communities.





