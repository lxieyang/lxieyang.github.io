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
## Bootstrap Alerts

Alerts are created with the .alert class, followed by one of the four contextual classes `.alert-success`, `.alert-info`, `.alert-warning` or `.alert-danger`:

```html
<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>

<div class="alert alert-info">
  <strong>Info!</strong> Indicates a neutral informative change or action.
</div>

<div class="alert alert-warning">
  <strong>Warning!</strong> Indicates a warning that might need attention.
</div>

<div class="alert alert-danger">
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>
```

### Closing Alerts

To close the alert message, add `class="close"` and `data-dismiss="alert"` to a **link** or a **button** element:

```html
<div class="alert alert-success">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
```

**Note that**: `&times;` (×) is an HTML entity that is the preferred icon for close buttons, rather than the letter `"x"`.


### Animated Alerts

The `.fade` and `.in` classes adds a fading effect when closing the alert message:

```html
<div class="alert alert-success fade in">
```


















## &nbsp;
## &nbsp;
## [Bootstrap Buttons]({{ page.base_url }}/buttons/index.html)

### Button Styles

The following example shows the code for the different button styles:

```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>
```

The button classes can be used on an `<a>`, `<button>`, or `<input>` element:

```html
<a href="#" class="btn btn-info" role="button">Link Button</a>
<button type="button" class="btn btn-info">Button</button>
<input type="button" class="btn btn-info" value="Input Button">
<input type="submit" class="btn btn-info" value="Submit Button">
```

### Button Sizes

```html
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary btn-md">Medium</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">XSmall</button>
```

### Block Level Buttons

Add class `.btn-block` to create a block level button:

```html
<button type="button" class="btn btn-primary btn-block">Button 1</button>
```

### Active/Disabled Buttons

The class `.active` makes a button appear pressed, and the class `.disabled` makes a button unclickable:

```html
<button type="button" class="btn btn-primary active">Active Primary</button>
<button type="button" class="btn btn-primary disabled">Disabled Primary</button>
```
















## &nbsp;
## &nbsp;
## [Bootstrap Button Groups]({{ page.base_url }}/buttons/group.html)

### (Horizontal) Button Groups

Bootstrap allows you to group a series of buttons together (on a single line) in a button group. Use a `<div>` element with class `.btn-group` to create a button group:

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```

Instead of applying button sizes to every button in a group, use class `.btn-group-*` to size all buttons in the group:

```html
<div class="btn-group btn-group-lg">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```

### Vertical Button Groups

Use the class `.btn-group-vertical` (instead of `.btn-group`) to create a vertical button group.

### Justified Button Groups

To span the entire width of the screen, use the `.btn-group-justified` class:

#### Example with `<a>`

```html
<div class="btn-group btn-group-justified">
  <a href="#" class="btn btn-primary">Apple</a>
  <a href="#" class="btn btn-primary">Samsung</a>
  <a href="#" class="btn btn-primary">Sony</a>
</div>
```

#### Example with `<button>`

**Note**: For <button> elements, you must wrap each button in a `.btn-group` class

```html
<div class="btn-group btn-group-justified">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Samsung</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Sony</button>
  </div>
</div>
```


### Nesting Button Groups & Dropdown Menus

Nest button groups to create dropdown menus:

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Sony <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">Tablet</a></li>
      <li><a href="#">Smartphone</a></li>
    </ul>
  </div>
</div>
```


### Split Button Dropdowns

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Sony</button>
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Tablet</a></li>
    <li><a href="#">Smartphone</a></li>
  </ul>
</div>
```
















## &nbsp;
## &nbsp;
## [Bootstrap Glyphicons]({{ page.base_url }}/glyphicon/index.html)

Glyphicons can be used in text, buttons, toolbars, navigation, forms, etc.


### Glyphicon Syntax

```html
<span class="glyphicon glyphicon-name"></span>
```










## &nbsp;
## &nbsp;
## [Bootstrap Templates and Themes]({% post_url 2016-06-24-bootstrap-templates %})
