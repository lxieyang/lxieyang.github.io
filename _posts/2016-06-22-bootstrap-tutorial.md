---
layout: post
title: Bootstrap Tutorial
base_url: /resources/blog/bstutorial/
---

***This post will be updated on a weekly basis.***

***Last update: Jun 25 2016.***


## &nbsp;
## &nbsp;


## Source

### Bootstrap CDN

#### MaxCDN:

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

```

#### One advantage of using the Bootstrap CDN:

Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.

## Create first web page with Bootstrap

  1. Add the HTML5 doctype

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
        </head>
    </html>
    ```

  2. Bootstrap 3 is mobile-first

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ```

      The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

      The `initial-scale=1` part sets the initial zoom level when the page is first loaded by the browser.

  3. Containers

      There are two container classes to choose from:

      1. The `.container` class provides a responsive fixed width container

      2. The `.container-fluid` class provides a full width container, spanning the entire width of the viewport

      ***Note***: Containers are not nestable (you cannot put a container inside another container).












## &nbsp;
## &nbsp;



## Bootstrap Grid System

Bootstrap's grid system allows up to 12 columns across the page.

If you do not want to use all 12 column individually, you can group the columns together to create wider columns:

```
span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1
span 4	 span 4	 span 4
span 4	span 8
span 6	span 6
span 12
```

Bootstrap's grid system is **responsive**, and the columns will re-arrange depending on the screen size: On a ***big*** screen it might look better with the content organized in three columns, but on a ***small*** screen it would be better if the content items were stacked on top of each other.

### Grid classes

The Bootstrap grid system has four classes:

1. `xs` (for phones)
2. `sm` (for tablets)
3. `md` (for desktops)
4. `lg` (for larger desktops)

The classes above can be combined to create more dynamic and flexible layouts.

**Tip**: Each class scales up, so if you wish to set the same widths for `xs` and `sm`, you only need to specify `xs`.


### Basic Structure of a Bootstrap Grid

To create the layout you want, create a container (`<div class="container">`). Next, create a row (`<div class="row">`). Then, add the desired number of columns (tags with appropriate `.col-*-*` classes). Note that numbers in `.col-*-*` should always add up to 12 for each row.

```html
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
  ...
  </div>
</div>
```

#### [Three Equal Columns]({{ page.base_url }}/gridSystem/equal.html)

The following example shows how to get a three equal-width columns starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
```

#### [Two Unequal Columns]({{ page.base_url }}/gridSystem/unequal.html)
The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
</div>
```

To read more about the bootstrap grid system, please refer to my dedicated post:

#### [Bootstrap Grid System]({% post_url 2016-06-25-bootstrap-grid-system %})

## &nbsp;
## &nbsp;


## Bootstrap Text/Typography

### Bootstrap's Default Settings

Bootstrap's global default font-size is **14px**, with a line-height of **1.428**.


This is applied to the `<body>` and all paragraphs.

In addition, all `<p>` elements have a bottom margin that equals half their computed line-height (10px by default).

#### [`<h1> - <h6>`]({{ page.base_url }}/Text_Typography/heading.html)

```html
<h1>h1 Bootstrap heading (36px)</h1>
<h2>h2 Bootstrap heading (30px)</h2>
<h3>h3 Bootstrap heading (24px)</h3>
<h4>h4 Bootstrap heading (18px)</h4>
<h5>h5 Bootstrap heading (14px)</h5>
<h6>h6 Bootstrap heading (12px)</h6>
```

#### [`<small>`]({{ page.base_url }}/Text_Typography/small.html)

In Bootstrap the HTML `<small>` element is used to create a lighter, secondary text in any heading:

```html
<h1>h1 heading <small>secondary text</small></h1>
<h2>h2 heading <small>secondary text</small></h2>
<h3>h3 heading <small>secondary text</small></h3>
<h4>h4 heading <small>secondary text</small></h4>
<h5>h5 heading <small>secondary text</small></h5>
<h6>h6 heading <small>secondary text</small></h6>
```

#### [`<mark>`]({{ page.base_url }}/Text_Typography/mark.html)

```html
<p>Use the mark element to <mark>highlight</mark> text.</p>
```

**Note that it is indeed possible to change the way `<mark>` looks on your webpage. To do so, simply put the relevant code in you customized `css` file overriding the original `css` style provided by `Bootstrap` itself. For example:**

```css
.mark, mark {
    background-color: red;
}
```

#### [`<abbr>`]({{ page.base_url }}/Text_Typography/abbr.html)

Bootstrap will style the HTML `<abbr>` element in the following way:

```html
<p>A <abbr title="Unidentified Flying Object">UFO</abbr> was reported to take Barack Obama back to Mars in 2017.</p>
```

#### [`<blockquote>`]({{ page.base_url }}/Text_Typography/blockquote.html)

```html
<blockquote>
  <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
  <footer>From WWF's website</footer>
</blockquote>
```

To show the quote on the right, use the `.blockquote-reverse` class:

```html
<blockquote class="blockquote-reverse">
  <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
  <footer>From WWF's website</footer>
</blockquote>
```

#### [`<dl>`]({{ page.base_url }}/Text_Typography/dl.html)

```html
<dl>
    <dt>UFO</dt>
    <dd>- unidentified flying object</dd>
    <dt>WHO</dt>
    <dd>- world health organization</dd>
</dl>
```

#### [`<code>`]({{ page.base_url }}/Text_Typography/code.html)

```html
<p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
```

**Note that we can change the style of the code snippets however we want using customized `css` files. For example:**

```css
code {
    color: darkblue;
    background-color: yellow;
    border-radius: 10px;
    font-size: 1.5em;
}
```

#### [`<kbd>`]({{ page.base_url }}/Text_Typography/kbd.html)

```html
<p>Use <kbd>ctrl + z</kbd> to undo the last operation.</p><br><br>
```

Note that it's also possible to change the style of the kbd using customized `css` files. For example:

```css
kbd {
    border: solid 2px black;
    border-radius: 5px;
    background-color: lightgrey;
    color: black;
    font-weight: bold;
    font-size: 1.3em;
}
```

#### [Contextual Colors and Backgrounds]({{ page.base_url }}/Text_Typography/contextual_colors.html)

Bootstrap also has some contextual classes that can be used to provide "meaning through colors".

The classes for text colors are: `.text-muted`, `.text-primary`, `.text-success`, `.text-info`, `.text-warning`, and `.text-danger`:

```html
<p class="text-muted">This text is muted.</p>
<p class="text-primary">This text is important.</p>
<p class="text-success">This text indicates success.</p>
<p class="text-info">This text represents some information.</p>
<p class="text-warning">This text represents a warning.</p>
<p class="text-danger">This text represents danger.</p>
```

```html
<p class="bg-primary">This text is important.</p>
<p class="bg-success">This text indicates success.</p>
<p class="bg-info">This text represents some information.</p>
<p class="bg-warning">This text represents a warning.</p>
<p class="bg-danger">This text represents danger.</p>
```















## &nbsp;
## &nbsp;


## Bootstrap Tables

### [Basic Tables]({{ page.base_url }}/tables/basic.html)

A basic Bootstrap table has a light padding and only horizontal dividers.

The `.table` class adds basic styling to a table:

```html
<table class="table">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

### [Striped Rows]({{ page.base_url }}/tables/stripRows.html)

The `.table-striped` class adds **zebra-stripes** to a table:

```html
<table class="table table-striped">
```

### [Bordered Table]({{ page.base_url }}/tables/bordered.html)

The `.table-bordered` class adds borders on all sides of the table and cells:

```html
<table class="table table-striped table-bordered">
```

### [Hover Rows]({{ page.base_url }}/tables/hover.html)

The `.table-hover` class enables a hover state on table rows. **Note that don't use along with `.table-striped`**

```html
<table class="table table-hover table-bordered">
```

### [Contextual Classes]({{ page.base_url }}/tables/contextual.html)

Contextual classes can be used to color table rows (`<tr>`) or table cells (`<td>`):

```html
<tr class="success">
  <td>John</td>
  <td>Doe</td>
  <td>john@example.com</td>
</tr>
<tr class="danger">
  <td>Mary</td>
  <td>Moe</td>
  <td>mary@example.com</td>
</tr>
<tr class="info">
  <td>July</td>
  <td>Dooley</td>
  <td>july@example.com</td>
</tr>
```

### [Responsive Table]({{ page.base_url }}/tables/responsive.html)
The `.table-responsive` class creates a responsive table. The table will then **scroll horizontally** on small devices (under ***768px***). When viewing on anything larger than ***768px*** wide, there is no difference:

```html
<table class="table table-responsive">
```

















## &nbsp;
## &nbsp;



## Bootstrap Images

### [Shapes]({{ page.base_url }}/images/shapes.html)

#### Rounded Corners: with class `.img-rounded`

#### Circle: with class `.img-circle`

#### Thumbnail: with class `.img-thumbnail`


### [Responsive Images]({{ page.base_url }}/images/responsive.html)

Images comes in all sizes. So do screens. Responsive images automatically adjust to fit the size of the screen.

Create responsive images by adding an `.img-responsive` class to the `<img>` tag. The image will then scale nicely to the parent element.

The `.img-responsive` class applies `display: block`; and `max-width: 100%`; and `height: auto`; to the image:


### [Image Gallery]({{ page.base_url }}/images/gallery.html)

You can also use Bootstrap's grid system in conjunction with the `.thumbnail` class to create an image gallery:

```html
<div class="row">
  <div class="col-md-4">
    <a href="pulpitrock.jpg" class="thumbnail">
      <p>Pulpit Rock: A famous tourist attraction in Forsand, Ryfylke, Norway.</p>
      <img src="pulpitrock.jpg" alt="Pulpit Rock" style="width:150px;height:150px">
    </a>
  </div>
  <div class="col-md-4">
    <a href="moustiers-sainte-marie.jpg" class="thumbnail">
      <p>Moustiers-Sainte-Marie: Considered as one of the "most beautiful villages of France".</p>
      <img src="moustiers-sainte-marie.jpg" alt="Moustiers Sainte Marie" style="width:150px;height:150px">
    </a>
  </div>
  <div class="col-md-4">
    <a href="cinqueterre.jpg" class="thumbnail">
      <p>The Cinque Terre: A rugged portion of coast in the Liguria region of Italy.</p>
      <img src="cinqueterre.jpg" alt="Cinque Terre" style="width:150px;height:150px">
    </a>
  </div>
</div>
```

### [Responsive Embeds]({{ page.base_url }}/images/responsiveEmbeds.html)

Also let videos or slideshows scale properly on any device.

Classes can be applied directly to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements.

The following example creates a responsive video by adding an `.embed-responsive-item` class to an `<iframe>` tag (the video will then scale nicely to the parent element). The containing `<div>` defines the aspect ratio of the video:

```html
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```









## &nbsp;
## &nbsp;



## Bootstrap Jumbotron and Page Header

### [Jumbotron]({{ page.base_url }}/jumbotron/basic.html)

A **jumbotron** indicates a big box for calling extra attention to some special content or information.

A **jumbotron** is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.

**Tip**: Inside a **jumbotron** ***you can put nearly any valid HTML, including other Bootstrap elements/classes***.

Use a <div> element with class `.jumbotron` to create a **jumbotron**:

```html
<div class="container">
  <div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
    responsive, mobile-first projects on the web.</p>
  </div>
  <p>This is some text.</p>
  <p>This is another text.</p>
</div>
```

### [Page Header]({{ page.base_url }}/jumbotron/header.html)

A page header is like a section divider.

The `.page-header` class adds:
- a horizontal line under the heading
- some extra space around the element

```html
<div class="page-header">
  <h1>Example Page Header</h1>
</div>
```

**Note: You'll have to add your own `<h1> ... </h1>` tags in the page header to make it look like a page header. In other words, the `page-header` class has no effect on the font-size/family/weight/etc.**















## &nbsp;
## &nbsp;


## Bootstrap Wells

### [Wells]({{ page.base_url }}/well/basic.html)

The `.well` class adds a rounded border around an element with a gray background color and some padding:

```html
<div class="well">Basic Well</div>
```

### [Well Sizes]({{ page.base_url }}/well/size.html)

Change the size of the well by adding the `.well-sm` class for small wells or `.well-lg` class for large wells:

By default, wells are medium in size.

```html
<div class="well well-sm">Small Well</div>
<div class="well well-lg">Large Well</div>
```












## &nbsp;
## &nbsp;
## [Bootstrap Templates and Themes]({% post_url 2016-06-24-bootstrap-templates %})

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Theme The Band</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- CSS -->
  <link rel="stylesheet" href="../syntax.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>

<style>
  body {
      font: 400 15px/1.8 Lato, sans-serif;
      color: #777;
  }
  h3, h4 {
      margin: 10px 0 30px 0;
      letter-spacing: 10px;
      font-size: 20px;
      color: #111;
  }

  .container {
      padding: 80px 120px;
  }
  .person {
      border: 10px solid transparent;
      margin-bottom: 25px;
      width: 80%;
      height: 80%;
      opacity: 0.7;
  }
  .person:hover {
      border-color: #f1f1f1;
  }
  .carousel-inner img {
      -webkit-filter: grayscale(90%);
      filter: grayscale(90%); /* make all photos black and white */
      width: 100%; /* Set width to 100% */
      margin: auto;
  }
  .carousel-caption h3 {
      color: #fff !important;
  }
  @media (max-width: 600px) {
    .carousel-caption {
      display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */
    }
  }
  .bg-1 {
      background: #2d2d30;
      color: #bdbdbd;
  }
  .bg-1 h3 {color: #fff;}
  .bg-1 p {font-style: italic;}
  .list-group-item:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
  }
  .list-group-item:last-child {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
  }
  .thumbnail {
      padding: 0 0 15px 0;
      border: none;
      border-radius: 0;
  }
  .thumbnail p {
      margin-top: 15px;
      color: #555;
  }
  .btn {
      padding: 10px 20px;
      background-color: #333;
      color: #f1f1f1;
      border-radius: 0;
      transition: .2s;
  }
  .btn:hover, .btn:focus {
      border: 1px solid #333;
      background-color: #fff;
      color: #000;
  }
  .modal-header, h4, .close {
      background-color: #333;
      color: #fff !important;
      text-align: center;
      font-size: 30px;
  }
  .modal-header, .modal-body {
      padding: 40px 50px;
  }

  .nav-tabs li a {
    color: #777;
  }

  #googleMap {
    width: 100%; /* Span the entire width of the screen */
    height: 400px; /* Set the height to 400 pixels */
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%); /* Change the color of the map to black and white */
  }

  /* Add a dark background color with a little bit see-through */
.navbar {
    margin-bottom: 0;
    background-color: #2d2d30;
    border: 0;
    font-size: 11px !important;
    letter-spacing: 4px;
    opacity:0.9;
}

/* Add a gray color to all navbar links */
.navbar li a, .navbar .navbar-brand {
    color: #d5d5d5 !important;
}

/* On hover, the links will turn white */
.navbar-nav li a:hover {
    color: #fff !important;
}

/* The active link */
.navbar-nav li.active a {
    color: #fff !important;
    background-color:#29292c !important;
}

/* Remove border color from the collapsible button */
.navbar-default .navbar-toggle {
    border-color: transparent;
}

/* Dropdown */
.open .dropdown-toggle {    /* Bootstrap will add an '.open' class to the dropdown class element */
    color: #fff ;
    background-color: #555 !important;
}

/* Dropdown links */
.dropdown-menu li a {
    color: #000 !important;
}

/* On hover, the dropdown links will turn red */
.dropdown-menu li a:hover {
    background-color: red !important;
}

footer {
  background-color: #2d2d30;
  color: #f5f5f5;
  padding:32px;
}

footer a {
  color: #f5f5f5;
}

footer a:hover {
  color: #777;
  text-decoration: none;
}
</style>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" style="width:50%" href="#">
        Logo
      </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#myPage">HOME</a></li>
        <li><a href="#band">BAND</a></li>
        <li><a href="#tour">TOUR</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">MORE
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Extras</a></li>
            <li><a href="#">Media</a></li>
          </ul>
        </li>
        <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
      </ul>
    </div>
  </div>
</nav>



<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="banner1.jpg" alt="New York">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>The atmosphere in New York is lorem ipsum.</p>
      </div>
    </div>

    <div class="item">
      <img src="banner2.jpg" alt="Chicago">
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago - A night we won't forget.</p>
      </div>
    </div>

    <div class="item">
      <img src="banner3.jpg" alt="Los Angeles">
      <div class="carousel-caption">
        <h3>LA</h3>
        <p>Even though the traffic was a mess, we had the best time.</p>
      </div>
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



<!-- Container (The Band Section) -->
<div id="band" class="container text-center">
  <h3>THE EAGLES</h3>
  <p><em>We love music!</em></p>
  <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <br />
  <div class="row">
    <div class="col-sm-3">
      <p class="text-center"><strong>Don Henley</strong></p><br />
      <a href="#demo" data-toggle="collapse">
        <img src="dh.jpg" class="img-circle person" alt="The Eagles" />
      </a>
      <div id="demo" class="collapse">
        <p>Vocals</p>
        <p>Drums</p>
        <p>Percussion</p>
        <p>Guitars</p>
        <p>(1971-1980, 1994-2016)</p>
      </div>
    </div>
    <div class="col-sm-3">
      <p class="text-center"><strong>Glenn Frey</strong></p><br />
      <a href="#demo2" data-toggle="collapse">
        <img src="gf.jpg" class="img-circle person" alt="Random Name">
      </a>
      <div id="demo2" class="collapse">
        <p>Vocals</p>
        <p>Guitars</p>
        <p>Harmonica</p>
        <p>Keyborads</p>
        <p>(1971-1980, 1994-2016)</p>
      </div>
    </div>
    <div class="col-sm-3">
      <p class="text-center"><strong>Joe Walsh</strong></p><br />
      <a href="#demo3" data-toggle="collapse">
        <img src="jw.jpg" class="img-circle person" alt="Random Name">
      </a>
      <div id="demo3" class="collapse">
        <p>Vocals</p>
        <p>Guitars</p>
        <p>Keyborads</p>
        <p>(1975-1980, 1994-2016)</p>
      </div>
    </div>
    <div class="col-sm-3">
      <p class="text-center"><strong>Timothy B. Schmit</strong></p><br />
      <a href="#demo4" data-toggle="collapse">
        <img src="tbs.jpg" class="img-circle person" alt="Random Name">
      </a>
      <div id="demo4" class="collapse">
        <p>Vocals</p>
        <p>Acoustic Guitars</p>
        <p>Bass</p>
        <p>(1977-1980, 1994-2016)</p>
      </div>
    </div>
  </div>
</div>


<!-- Container (TOUR Section) -->
<div id="tour" class="bg-1">
  <div class="container">
    <h3 class="text-center">TOUR DATES</h3>
    <p class="text-center">Lorem ipsum we'll play you some music.<br> Remember to book your tickets!</p>

    <ul class="list-group">
      <li class="list-group-item">September <span class="label label-danger">Sold Out!</span></li>
      <li class="list-group-item">October <span class="label label-danger">Sold Out!</span></li>
      <li class="list-group-item">November <span class="badge">3</span></li>
    </ul>

    <div class="row text-center">
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="paris.jpg" alt="Paris">
          <p><strong>Paris</strong></p>
          <p>Fri. 27 November 2015</p>
          <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="newyork.jpg" alt="New York">
          <p><strong>New York</strong></p>
          <p>Sat. 28 November 2015</p>
          <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src="sanfran.jpg" alt="San Francisco">
          <p><strong>San Francisco</strong></p>
          <p>Sun. 29 November 2015</p>
          <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal Content -->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4><span class="glyphicon glyphicon-lock"></span> Tickets</h4>
        </div>
        <div class="modal-body">
          <form role="form">
            <div class="form-group">
              <label for="psw"><span class="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</label>
              <input type="number" class="form-control" id="psw" placeholder="How many?">
            </div>
            <div class="form-group">
              <label for="usrname"><span class="glyphicon glyphicon-user"></span> Send To</label>
              <input type="text" class="form-control" id="usrname" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-block">Pay
              <span class="glyphicon glyphicon-ok"></span>
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
            <span class="glyphicon glyphicon-remove"></span> Cancel
          </button>
          <p>Need <a href="#">help?</a></p>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- Container (Contact Section) -->
<div id="contact" class="container">
  <h3 class="text-center">Contact</h3>
  <p class="text-center"><em>We love our fans!</em></p>
  <div class="row test">
    <div class="col-md-4">
      <p>Fan? Drop a note.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span>Chicago, US</p>
      <p><span class="glyphicon glyphicon-phone"></span>Phone: +1-734-834-6828</p>
      <p><span class="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
      <div class="row">
        <div class="col-md-12 form-group">
          <button class="btn pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <h3 class="text-center">From the Blog</h3>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Don</a></li>
    <li><a data-toggle="tab" href="#menu1">Glenn</a></li>
    <li><a data-toggle="tab" href="#menu2">Joe</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h2>Don Felder, Vocal</h2>
      <p>Man, we've been on the road for some time now. Looking forward to lorem ipsum.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h2>Glenn Frey, Instrument</h2>
      <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more pleased?</p>
    </div>
    <div id="menu2" class="tab-pane fade">
    <h2>Joe Walsh, Guitarist</h2>
    <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
  </div>
  </div>
</div>


<div id="googleMap"></div>
<!-- Add Google Maps -->
<script  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOmD2I-usY4lNIViDT7tDYBR2817L9k-4&callback=initialize" type="text/javascript"></script>

<script>
var myCenter = new google.maps.LatLng(26.0112, -80.1495);

function initialize() {
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>


<footer class="text-center">
  <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a><br /><br />
  <p>
    Bootstrap Theme Made By <a href="http://lxieyang.github.io" data-toggle="tooltip" title="Visit lxieyang.github.io">lxieyang.github.io</a>
  </p>
</footer>

<script>
  $(document).ready(function() {
    // init tooltip
    $('[data-toggle="tooltip"]').tooltip();
  });
</script>


<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (400) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})
</script>

</body>
</html>

```
