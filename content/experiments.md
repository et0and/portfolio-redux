---
layout: page
title: Experiments
eleventyNavigation:
  key: Experiments
  order: 2
---

<div class="searchlieu">
  <div class="form-group">
      <form id="searchForm">
        <input class="form-input" id="searchInput" name="experimentPosts" placeholder="Search for experiments" type="text">
      </form>
    <ul id="resultsList"></ul>
  </div>
</div>

   <script>
      const experimentPosts = [
           {
        title: "An Idea for a Performance",
        description: "A tool for generating ideas.",
        url: "https://tom.so/experiment/an-idea-for-a-performance"
           },
           {
            title: "Hyperjam",
            description: "An interactive art festival hosted by Merveilles."
            url: "https://tom.so/experiment/hyperjam"
           },
           {
            title: "Markono",
            description: "A program for generating performance instructions."
            url: "https://tom.so/experiment/markono"
           },
           {
            title: "Performa",
            description: "A performance art archive."
            url: "https://tom.so/experiment/performa"
           },
           {
            title: "The Museum Without Walls",
            description: "A Macintosh Hypercard project",
            url: "https://tom.so/experiment/museum-without-walls"
           },
           {
            title: "The Language of Art",
            description: "An art history resource.",
            url: "https://tom.so/experiment/the-language-of-art"
           },
           {
            title: "Whitecubes",
            description: "An interactive art map",
            url: "https://tom.so/experiment/whitecubes"
           },
           {
            title: "Chess",
            description: "Some notes on the game of chess (ongoing)",
            url: "https://tom.so/experiment/chess"
           },
           {
            title: "Church Yard",
            description: "A research archive on Søren Kierkegaard.",
            url: "https://tom.so/experiment/church-yard"
           },
           {
            title: "Derridata",
            description: "A research archive dedicated to the work of Jacques Derrida.",
            url: "https://tom.so/experiment/church-yard"
           },
           {
            title: "Imaginary Museum",
            description: "A growing archive of reference material.",
            url: "https://tom.so/experiment/imaginary-museum"
           },
           {
            title: "Philemon",
            description: "A Jungian research archive.",
            url: "https://tom.so/experiment/philemon"
           },
           {
            title: "Poetics of Space",
            description: "A research archive on spaces.",
            url: "https://tom.so/experiment/poetics-of-space"
           },
           {
            title: "Tea",
            description: "A research page dedicated to different types of tea (work in progress)",
            url: "https://tom.so/experiment/tea"
           },
           {
            title: "Some Quiet Tips",
            description: "A mental health resource.",
            url: "https://tom.so/experiment/some-quiet-tips"
           },
           {
            title: "TXTRNZ",
            description: "A text-only version of the RNZ new site.",
            url: "https://tom.so/experiment/txtrnz"
           },
           {
            title: "WWW",
            description: "A collection of sites on the World Wide Web.",
            url: "https://tom.so/experiment/www"
           }

       ];

       const fuse = new Fuse(experimentPosts, {
           keys: ['title', 'description', 'url'],
           threshold: 0.3,
           location: 0,
           distance: 100,
           caseSensitive: false
       });

       document.getElementById('searchForm').addEventListener('submit', function(event) {
           event.preventDefault();
           const query = document.getElementById('searchInput').value;
           const results = fuse.search(query);
           const resultsList = document.getElementById('resultsList');
           resultsList.innerHTML = '';
           for (const result of results) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = result.item.url;
            link.innerHTML = `<strong>${result.item.title}</strong><br>${result.item.description}<br><br>`;
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
            }
       });
   </script>

Small creative experiments that I have worked on outside of my design work

---

<h3>Art</h3>

[An Idea for a Performance](/experiment/an-idea-for-a-performance "An idea generator")
↳ A tool for generating ideas

[Hyperjam](/experiment/hyperjam "Hyperjam art festival")
↳ An interactive art festival hosted by Merveilles

[Markono](/experiment/markono "Markov chain performance program")
↳ A program for generating performance instructions

[Performa](/experiment/performa "Performance art channel on are.na")
↳ A performance art archive

[The Museum Without Walls](/experiment/museum-without-walls "A game built using Hypercard")
↳ A Macintosh Hypercard project

[The Language of Art](/experiment/the-language-of-art "An art history Padlet")
↳ An art history resource

[Whitecubes](/experiment/whitecubes "Map for finding local art galleries")
↳ An interactive art map

---

<h3>Research</h3>

[Chess](/experiment/chess "Notes on chess")
↳ Some notes on the game of chess (ongoing)

[Church Yard](/experiment/church-yard "Are.na channel on Søren Kierkegaard")
↳ A research archive on Søren Kierkegaard

[Derridata](/experiment/derridata "Are.na channel on Jacques Derrida")
↳ A research archive dedicated to the work of Jacques Derrida

[Imaginary Museum](/experiment/imaginary-museum "Are.na channel of visually inspiring images")
↳ A growing archive of reference material

[Philemon](/experiment/philemon "Are.na channel on C.G. Jung")
↳ A Jungian research archive

[Poetics of Space](/experiment/poetics-of-space "Are.na channel on interiors and architecture")
↳ A research archive on spaces

[Tea](/experiment/tea "Notes on tea")
↳ A research page dedicated to different types of tea (work in progress)

---

<h3>Web</h3>

[Some Quiet Tips](/experiment/some-quiet-tips "Mental health chat app")
↳ A mental health resource

[TXTRNZ](/experiment/txtrnz "Lite version of RNZ")
↳ A text-only version of the RNZ news site

[WWW](/experiment/www "Are.na channel of weird, inspiring websites")
↳ A collection of sites on the World Wide Web











