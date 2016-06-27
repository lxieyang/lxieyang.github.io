---
layout: page
title: Home
navigation_weight: 1
---

## &nbsp;

<!--
<div class="head-text lift-text">
    <h1 class="tagline">
      I'm
      <span id="typed"></span>
      <span class="typed-cursor"> </span>
    </h1>
    <h4 class="sub-tagline">web developer / geek</h4>
</div>

<script>
    $("#typed").typed({
        strings: ["a web developer.", "a web designer.", "Michael."],
        typeSpeed: 30,
        callback: function(){
            lift();
        }
    });
    function lift(){
        $(".head-text").addClass("lift-text");
    }
</script>
-->



<div class="text-editor-wrap">
	<div class="title-bar">
    <span class="title"><span class="glyphicon glyphicon-home"></span> Michael — bash — 80x<span class="terminal-height">10</span>
    </span>
  </div>
	<div class="text-body">
		$ <span id="typed"></span>
    <span class="typed-cursor"></span>
	</div>
</div>




Hi, I'm Xieyang Liu! You can call me **Michael**.

I'm a senior undergraduate student at the [University of Michigan](https://www.umich.edu/) in the [Computer Science and Engineering](http://eecs.umich.edu/cse/) department. I'm currently a research assistant at the University of Michigan [Croma Lab](http://web.eecs.umich.edu/~wlasecki/croma.html) under the supervision of [Prof Walter S. Lasecki](https://web.eecs.umich.edu/~wlasecki/). My research interests are computer vision, machine learning, and web-development. Please click [Short Bio](./bio) to know more about my academic and social life.

I began my **programming journey** with `C` and `C++`, so I'm pretty familiar with those two languages. I'm also good at using `MATLAB` to do **batch processing** and **image manipulation**, which is very common in **machine learning** and **computer vision**. I'm currently using `Java` and `Python` to write several course projects as well as other small applications.

Right now, I'm focusing on using `HTML5`, `JavaScript`, `CSS`, `jQuery`, `Bootstrap`, etc., to perform web-development. The direct result is this [Homepage](/) I've been developing and maintaining. I recently re-wrote the entire site using [Jekyll](https://jekyllrb.com/), which is a simple, awesome, blog-aware, static site generator.  

<p class="message" id="showDay"></p>

```javascript
var themePack = {
  black :   "theme-base-07",
  red   :   "theme-base-08",
  green :   "theme-base-0b",
  cyan  :   "theme-base-0c",
  blue  :   "theme-base-0d"
}

function changeThemeAccordingToDay () {
  var bodyHandle = $("body");
  bodyHandle.removeAttr("class");

  switch (new Date().getDay()) {
    case 0:   /* --- Sunday ---  */
        bodyHandle.addClass(themePack.red);
      break;
    case 1:   /* --- Monday ---  */
        bodyHandle.addClass(themePack.green);
      break;
    case 3:   /* --- Wednesday ---  */
        bodyHandle.addClass(themePack.cyan);
      break;
    case 5:   /* --- Friday ---  */
        bodyHandle.addClass(themePack.blue);
      break;
    case 2:   /* --- Tuesday ---  */
    case 4:   /* --- Thursday ---  */
    case 6:   /* --- Saturday ---  */
    default:
        bodyHandle.addClass(themePack.black);
      break;
  }
}
```

<script>
function showDay() {
  var para = document.getElementById("showDay");
  var message = "Hi there! Today is <strong>";
  switch (new Date().getDay()) {
    case 0:   
        message += "Sunday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Red</a> theme!";
      break;
    case 1:   
        message += "Monday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Green</a> theme!";
      break;
    case 3:
        message += "Wednesday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Cyan</a> theme!";
      break;
    case 5:
        message += "Friday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Blue</a> theme!";
      break;
    case 2:
        message += "Tuesday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Black</a> theme!";
      break;
    case 4:
        message += "Thursday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Black</a> theme!";
      break;
    case 6:
        message += "Saturday</strong>! According to the following code snippet, you'll be served with a <a href='' style='pointer-events: none;'>Black</a> theme!";
      break;
  }
  para.innerHTML = message;
}

$(document).ready(function() {
  showDay();
});

</script>


I learned `LaTeX` during my freshmen year while writing project papers. During my time serving as a teaching assistant for a multivariate calculus course, I dedicated much of my time mastering `Beamer`, which is one of the `LaTeX` packages that deals specifically with presentations. To take a look at those presentations I created, please hit the [Selected Works](./works.html) button in the navigation bar.

Please hit the [Skill Set](./skills.html) button in the navigation bar to view my current yet developing skill set...


<script>
$(function(){

	$("#typed").typed({
		strings: ["I'm Xieyang Liu.", "I'm a web developer.", "I'm a geek."],
		typeSpeed: 20,
    callback: function(){
      shift();
    }
	});

});

function shift(){
    $(".head-wrap").addClass("shift-text");
    terminalHeight();
}

function terminalHeight(){
    var termHeight = $(".terminal-height");
    var value = termHeight.text();
    value = parseInt(value);
    setTimeout(function(){
        if (value > 10){
            value = value-1;
            this.txtValue = value.toString();
            termHeight.text(this.txtValue);
            self.terminalHeight();
        }
        else{
            clearTimeout();
        }
    }, 10);
}
</script>
