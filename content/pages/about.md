---
layout: page
title: About
eleventyNavigation:
  key: About
  order: 3
---

<script type="text/paperscript" canvas="canvas">

        var length = 200;
var stroke = 60;

if(view.bounds.width < 800) {
length=100
stroke = 14;
}
var hoursPath = new Path();
hoursPath.strokeColor = 'blue';
hoursPath.strokeWidth = 0;
hoursPath.add(new Point(view.center));
hoursPath.add(new Point(view.center - [0, length]));

var minutesPath = new Path();
minutesPath.strokeColor = 'green';
minutesPath.strokeWidth = 0;
minutesPath.add(new Point(view.center));
minutesPath.add(new Point(view.center - [0, length]));

var secondsPath = new Path();
secondsPath.strokeColor = 'red';
secondsPath.strokeWidth = 0;
secondsPath.add(new Point(view.center));
secondsPath.add(new Point(view.center - [0, length]));

var monthPath = new Path();
monthPath.strokeColor = 'grey';
monthPath.strokeWidth = 0;
monthPath.add(new Point(view.center));
monthPath.add(new Point(view.center - [0, length]));

var d = new Date();
var full = d.getTime();
var seconds = d.getSeconds() + 1;
var minutes = d.getMinutes() + 1;
var hours = d.getHours() + 1;
var month = d.getMonth() + 1;

var rotateDiv = 360 / 60; 

var rotateSec = seconds * rotateDiv;
secondsPath.rotate(rotateSec, view.center);

var rotateMin = minutes * rotateDiv;
minutesPath.rotate(rotateMin, view.center);

var rotateDivHours = 360 / 12; 

var rotateHour = hours * rotateDivHours;
hoursPath.rotate(rotateHour, view.center);

var rotateDivMonth = 360 / 12; 

var rotateMonth = month * rotateDivMonth;
monthPath.rotate(rotateMonth, view.center);


	var outerCircle = new Path.Circle ({
	center: view.center,
	radius: length,
	strokeColor: 'black',
	strokeWidth: stroke
		
})
	
function onFrame (event) {
secondsPath.rotate(.1, view.center);
minutesPath.rotate(0.001666666667, view.center);
hoursPath.rotate(0.00002777777778, view.center);	

outerCircle.segments[0].point = 	secondsPath.segments[1].point;
outerCircle.segments[1].point = 	minutesPath.segments[1].point;
outerCircle.segments[2].point = 	hoursPath.segments[1].point;
outerCircle.segments[3].point = 	monthPath.segments[1].point;


}
	
	</script>

>_He aha te mea nui o te ao?_
>What is the most important thing in the world?
>_He tāngata, he tāngata, he tāngata_
>It is the people, it is the people, it is the people
-- Māori proverb

<br><br>

Hi, I'm Tom,
I am a designer interested in making products that are accessible, beautiful and fun.

Presently I am a high school teacher teaching art and design in Tāmaki Makaurau, so in a very real way people have always deeply informed my work. Anything I make or work on is [guided by these set of values](/values "a list of values I work by")

Previously I studied at the [Elam School of Fine Arts](https://elamartists.ac.nz/), where I also briefly taught the first and second year studio programme. 

Find me on [are.na](https://are.na/tom-y "Are.na"), [LinkedIn](https://linkedin.com/in/tom-hackshaw "LinkedIn"), [Twitter](https://twitter.com/tomhackshaw "Twitter"), [Merveilles](https://merveilles.town/@tomupom "Merveilles, a Mastodon instance")

or say hi: [tom@tomhackshaw.com](mailto:tom@tomhackshaw.com "my email address") ([PGP](/media/pubkey.txt "my pgp public encryption key")) / [~falsef-nostyp](web+urbitgraph://group/~falsef-nostyp/tom-s-room-3993 "link to my urbit")

<br><br>

**Education** 
Grad Dip Teaching Secondary, The University of Auckland, 2019
BFA Hons, The University of Auckland, 2014-2017 

**Awards** 
Google Certified Educator Level 1, 2021
Elam First in Course Award 2014-2016
First Class Honours, The University of Auckland 2017

<br><br>

<small>This website has been designed to minimise the energy consumption and CO2 emissions that result from navigating the Internet. [To learn more about this click here](https://www.websitecarbon.com/website/tom-so/ "Website Carbon Calculator for tom.so"). Technical information about this site can be found [on this dedicated page](/siteinfo "some information on how this site has been built").</small>
