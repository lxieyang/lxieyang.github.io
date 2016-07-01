---
layout: post
title: Bootstrap Tutorial
base_url: /resources/blog/bstutorial/
---

***This post will be updated on a weekly basis.***

***Last update: July 1 2016.***


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

**Note**: For `<button>` elements, you must wrap each button in a `.btn-group` class

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
## [Bootstrap Bages]({{ page.base_url }}/bage/index.html)

Badges are **numerical** indicators of how many items are associated with a link:

Use the `.badge` class within `<span>` elements to create badges:

```html
<a href="#">News <span class="badge">5</span></a><br>
<a href="#">Comments <span class="badge">10</span></a><br>
<a href="#">Updates <span class="badge">2</span></a>
```

Bages on buttons:

```html
<button type="button" class="btn btn-primary">Primary <span class="badge">7</span></button>
```
















## &nbsp;
## &nbsp;
## [Bootstrap Labels]({{ page.base_url }}/label/index.html)

Labels are used to provide additional information about something:

```html
<h1>Example <span class="label label-default">New</span></h1>
```

Use the .label class,  followed by one of the six **contextual** classes `.label-default`, `.label-primary`, `.label-success`, `.label-info`, `.label-warning` or `.label-danger`, within a `<span>` element to create a label:

```html
<span class="label label-default">Default Label</span>
<span class="label label-primary">Primary Label</span>
<span class="label label-success">Success Label</span>
<span class="label label-info">Info Label</span>
<span class="label label-warning">Warning Label</span>
<span class="label label-danger">Danger Label</span>
```



















## &nbsp;
## &nbsp;
## [Bootstrap Progress Bars]({{ page.base_url }}/pb/index.html)

To create a default progress bar, add a `.progress` class to a `<div>` element:

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style="width:70%">
    <span class="sr-only">70% Complete</span>
  </div>
</div>
```

### Progress Bar With Label

Remove the `.sr-only` class from the progress bar to show a visible percentage

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style="width:70%">
    70%
  </div>
</div>
```

### Colored Progress Bars

The contextual classes that can be used with progress bars are:

- `.progress-bar-success`
- `.progress-bar-info`
- `.progress-bar-warning`
- `.progress-bar-danger`

### Striped Progress Bars

Add class `.progress-bar-striped` to add stripes to the progress bars

### Animated Progress Bar

Add class `.active` to animate the progress bar

### Stacked Progress Bars

Create a stacked progress bar by placing multiple bars into the same `<div class="progress">`

```html
<div class="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" style="width:40%">
    Free Space
  </div>
  <div class="progress-bar progress-bar-warning" role="progressbar" style="width:10%">
    Warning
  </div>
  <div class="progress-bar progress-bar-danger" role="progressbar" style="width:20%">
    Danger
  </div>
</div>
```





















## &nbsp;
## &nbsp;
## [Bootstrap Pagination]({{ page.base_url }}/pagination/index.html)

If you have a web site with lots of pages, you may wish to add some sort of pagination to each page.

To create a basic pagination, add the `.pagination` class to an `<ul>` element

```html
<ul class="pagination">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
</ul>
```

### Active State

Add class `.active` to `<li>` let the user know which page he/she is on

```html
<li class="active"><a href="#">2</a></li>
```

### Disabled State

Add class `.disabled` if a link for some reason is disabled

```html
<ul class="pagination">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li class="disabled"><a href="#">4</a></li>
  <li><a href="#">5</a></li>
</ul>
```


### Sizing

Add class `.pagination-lg` for larger blocks or `.pagination-sm` for smaller blocks


### Breadcrumbs


The `.breadcrumb` class indicates the current page's location within a **navigational hierarchy**:

```html
<ul class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Private</a></li>
  <li><a href="#">Pictures</a></li>
  <li class="active">Vacation</li>
</ul>
```

















## &nbsp;
## &nbsp;
## [Bootstrap Pager]({{ page.base_url }}/pager/index.html)

Pager is also a form of pagination (as described in the previous chapter).

Pager provides previous and next buttons (links).

To create previous/next buttons, add the `.pager` class to an `<ul>` element


```html
<ul class="pager">
  <li><a href="#">Previous</a></li>
  <li><a href="#">Next</a></li>
</ul>
```

### Align Buttons

Use the `.previous` and `.next` classes to align each button to the sides of the page:

```html
<ul class="pager">
  <li class="previous"><a href="#">Previous</a></li>
  <li class="next"><a href="#">Next</a></li>
</ul>
```

















## &nbsp;
## &nbsp;
## [Bootstrap List Groups]({{ page.base_url }}/lg/index.html)

The most basic list group is an unordered list with list items.

To create a basic list group, use an `<ul>` element with class `.list-group`, and `<li>` elements with class `.list-group-item`.

```html
<ul class="list-group">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
```

### List Group With Badges

You can also add badges to a list group. The badges will automatically be positioned on the right

To create a badge, create a `<span>` element with class `.badge` inside the list item

```html
<ul class="list-group">
  <li class="list-group-item"><span class="badge">12</span> New</li>
  <li class="list-group-item"><span class="badge">5</span> Deleted</li>
  <li class="list-group-item"><span class="badge">3</span> Warnings</li>
</ul>
```

### List Group With Linked Items

The items in a list group can also be hyperlinks. This will add a grey background color on hover.

To create a list group with linked items, use `<div>` instead of `<ul>` and `<a>` instead of `<li>`

```html
<div class="list-group">
  <a href="#" class="list-group-item">First item</a>
  <a href="#" class="list-group-item">Second item</a>
  <a href="#" class="list-group-item">Third item</a>
</div>
```

### Contextual Classes

Contextual classes can be used to color list items

The classes for coloring list-items are: `.list-group-item-success`, `list-group-item-info`, `list-group-item-warning`, and `.list-group-item-danger`:

```html
<ul class="list-group">
  <li class="list-group-item list-group-item-success">First item</li>
  <li class="list-group-item list-group-item-info">Second item</li>
  <li class="list-group-item list-group-item-warning">Third item</li>
  <li class="list-group-item list-group-item-danger">Fourth item</li>
</ul>
```


### Custom Content

You can add nearly any HTML inside a list group item.

Bootstrap provides the classes `.list-group-item-heading` and `.list-group-item-text` which can be used as follows:

```html
<div class="list-group">
  <a href="#" class="list-group-item active">
    <h4 class="list-group-item-heading">First List Group Item Heading</h4>
    <p class="list-group-item-text">List Group Item Text</p>
  </a>
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">Second List Group Item Heading</h4>
    <p class="list-group-item-text">List Group Item Text</p>
  </a>
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">Third List Group Item Heading</h4>
    <p class="list-group-item-text">List Group Item Text</p>
  </a>
</div>
```




















## &nbsp;
## &nbsp;
## [Bootstrap Panels]({{ page.base_url }}/panel/index.html)

A panel in bootstrap is a bordered box with some padding around its content

Panels are created with the `.panel` class, and content inside the panel has a `.panel-body` class:

```html
<div class="panel panel-default">
  <div class="panel-body">A Basic Panel</div>
</div>
```

### Panel Heading

The `.panel-heading` class adds a heading to the panel

```html
<div class="panel panel-default">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
</div>
```

### Panel Footer

The `.panel-footer` class adds a footer to the panel

```html
<div class="panel panel-default">
  <div class="panel-body">Panel Content</div>
  <div class="panel-footer">Panel Footer</div>
</div>
```

### Panel Group

To group many panels together, wrap a `<div>` with class `.panel-group` around them.

The `.panel-group` class clears the bottom-margin of each panel

```html
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-body">Panel Content</div>
  </div>
  <div class="panel panel-default">
    <div class="panel-body">Panel Content</div>
  </div>
</div>
```


### Panels with Contextual Classes

To color the panel, use contextual classes (`.panel-default`, `.panel-primary`, `.panel-success`, `.panel-info`, `.panel-warning`, or `.panel-danger`):



















## &nbsp;
## &nbsp;
## [Bootstrap Dropdowns]({{ page.base_url }}/dropdown/index.html)

A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list

```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>
```

The `.dropdown` class indicates a dropdown menu.

To open the dropdown menu, use a button or a link with a class of `.dropdown-toggle` and the `data-toggle="dropdown"` attribute.

The `.caret` class creates a caret arrow icon, which indicates that the button is a dropdown.

Add the `.dropdown-menu` class to a `<ul>` element to actually build the dropdown menu.


### Dropdown Divider

The `.divider` class is used to separate links inside the dropdown menu with a thin horizontal border

```html
<li class="divider"></li>
```

### Dropdown Header

The `.dropdown-header` class is used to add headers inside the dropdown menu

```html
<li class="dropdown-header">Dropdown header 1</li>
```

### Disable an Item

To disable an item in the dropdown menu, use the `.disabled` class:

```html
<li class="disabled"><a href="#">CSS</a></li>
```

### Dropdown Position

To right-align the dropdown, add the `.dropdown-menu-right` class to the element with `.dropdown-menu`:

```html
<ul class="dropdown-menu dropdown-menu-right">
```

### Dropup

If you want the dropdown menu to expand upwards instead of downwards, change the `<div>` element with `class="dropdown"` to `"dropup"`

```html
<div class="dropup">
```
















## &nbsp;
## &nbsp;
## [Bootstrap Collapse]({{ page.base_url }}/collapse/index.html)

### Basic Collapsible

Collapsibles are useful when you want to hide and show large amount of content:

```html
<button data-toggle="collapse" data-target="#demo">Collapsible</button>

<div id="demo" class="collapse">
  HAHA
</div>
```

The `.collapse` class indicates a collapsible element (a `<div>` in our example); this is the content that will be shown or hidden with a click of a button.

To control (show/hide) the collapsible content, add the `data-toggle="collapse"` attribute to an `<a>` or a `<button>` element. Then add the `data-target="#id"` attribute to connect the button with the collapsible content (`<div id="demo">`).

**Note**: For `<a>` elements, you can use the `href` attribute instead of the `data-target` attribute:

```html
<a href="#demo" data-toggle="collapse">Collapsible</a>

<div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>
```

By default, the collapsible content is hidden. However, you can add the `.in` class to show the content by default:

```html
<div id="demo" class="collapse in">
Lorem ipsum dolor text....
</div>
```

### Collapsible Panel

```html
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1">Collapsible panel</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse">
      <div class="panel-body">Panel Body</div>
      <div class="panel-footer">Panel Footer</div>
    </div>
  </div>
</div>
```

### Collapsible List Group

```html
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse">
      <ul class="list-group">
        <li class="list-group-item">One</li>
        <li class="list-group-item">Two</li>
        <li class="list-group-item">Three</li>
      </ul>
      <div class="panel-footer">Footer</div>
    </div>
  </div>
</div>
```

### Accordion

The following example shows a simple accordion by extending the panel component.

**Note**: Use the `data-parent` attribute to make sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.

```html
<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
        Collapsible Group 1</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        Collapsible Group 2</a>
      </h4>
    </div>
    <div id="collapse2" class="panel-collapse collapse">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        Collapsible Group 3</a>
      </h4>
    </div>
    <div id="collapse3" class="panel-collapse collapse">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
</div>
```



















## &nbsp;
## &nbsp;
## [Bootstrap Tabs and Pills]({{ page.base_url }}/tabs_and_pills/index.html)

### Menus

In HTML, a menu is often defined in an unordered list `<ul>` (and styled afterwards), like this:

```html
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```

If you want to create a horizontal menu of the list above, add the `.list-inline` class to `<ul>`

### Tabs

Tabs are created with `<ul class="nav nav-tabs">`

Tip: Also mark the current page with `<li class="active">`

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```

#### Tabs With Dropdown Menu

The following example adds a dropdown menu to "Menu 1":

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="#">Submenu 1-1</a></li>
      <li><a href="#">Submenu 1-2</a></li>
      <li><a href="#">Submenu 1-3</a></li>
    </ul>
  </li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```

### Pills

Pills are created with `<ul class="nav nav-pills">`. Also mark the current page with `<li class="active">`:

```html
<ul class="nav nav-pills">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```

#### Vertical Pills

Pills can also be displayed vertically. Just add the `.nav-stacked` class:

```html
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```
#### Pills With Dropdown Menu

```html
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="#">Home</a></li>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="#">Submenu 1-1</a></li>
      <li><a href="#">Submenu 1-2</a></li>
      <li><a href="#">Submenu 1-3</a></li>
    </ul>
  </li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
```

### Centered Tabs and Pills

To center/justify the tabs and pills, use the `.nav-justified` class.

***Note that on screens that are smaller than 768px, the list items are stacked (content will remain centered)***:

### Toggleable / Dynamic Tabs

To make the tabs toggleable, add the `data-toggle="tab"` attribute to each link. Then add a `.tab-pane` class with a unique ID for every tab and wrap them inside a `<div>` element with class `.tab-content`.

If you want the tabs to fade in and out when clicking on them, add the `.fade` class to `.tab-pane`.

```html
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
  <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
  <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <h3>HOME</h3>
    <p>Some content.</p>
  </div>
  <div id="menu1" class="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" class="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>
```

### Toggleable / Dynamic Pills

The same code applies to pills; only change the data-toggle attribute to `data-toggle="pill"`:

```html
<ul class="nav nav-pills">
  <li class="active"><a data-toggle="pill" href="#home">Home</a></li>
  <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
  <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <h3>HOME</h3>
    <p>Some content.</p>
  </div>
  <div id="menu1" class="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" class="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>
```



















## &nbsp;
## &nbsp;
## [Bootstrap Navigation Bar]({{ page.base_url }}/navbar/index.html)

A navigation bar is a navigation header that is placed at the top of the page.

A standard navigation bar is created with `<nav class="navbar navbar-default">`.

The following example shows how to add a navigation bar to the top of the page:

```html
<body>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
...
```


### Inverted Navigation Bar

If you don't like the style of the default navigation bar, Bootstrap provides an alternative, black navbar:

Just change the `.navbar-default` class into `.navbar-inverse`:

### Fixed Navigation Bar


The navigation bar can also be fixed at the top or at the bottom of the page.

A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.

[The `.navbar-fixed-top` class makes the navigation bar fixed at the top]({{ page.base_url }}/navbar/fixedup.html):

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
```

[The `.navbar-fixed-bottom` class makes the navigation bar stay at the bottom]({{ page.base_url }}/navbar/fixeddown.html)

```html
<nav class="navbar navbar-inverse navbar-fixed-bottom">
```

### Navigation Bar With Dropdown

Navigation bars can also hold dropdown menus.

The following example adds a dropdown menu for the "Page 1" button:

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

### Right-Aligned Navigation Bar

The `.navbar-right` class is used to right-align navigation bar buttons.

In the following example we insert a "Sign Up" button and a "Login" button to the right in the navigation bar. We also add a glyphicon on each of the two new buttons:

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
```

### Collapsing The Navigation Bar

The navigation bar takes up too much space on a small screen.

We should hide the navigation bar; and only show it when it is needed.

In the following example the navigation bar is replaced by a button in the top right corner. Only when the button is clicked, the navigation bar will be displayed:

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
```



















## &nbsp;
## &nbsp;
## [Bootstrap Forms]({{ page.base_url }}/forms/index.html)

Form controls automatically receive some global styling with Bootstrap:

All textual `<input>`, `<textarea>`, and `<select>` elements with class `.form-control` have a width of 100%.

### Form Layouts

Bootstrap provides three types of form layouts:

- Vertical form (this is default)
- Horizontal form
- Inline form

Standard rules for all three form layouts:

- Always use `<form role="form">` (helps improve accessibility for people using screen readers)
- Wrap labels and form controls in `<div class="form-group">` (needed for optimum spacing)
- Add class `.form-control` to all textual `<input>`, `<textarea>`, and `<select>` elements

### Bootstrap Vertical Form (default)

```html
<form role="form">
 <div class="form-group">
   <label for="email">Email address:</label>
   <input type="email" class="form-control" id="email">
 </div>
 <div class="form-group">
   <label for="pwd">Password:</label>
   <input type="password" class="form-control" id="pwd">
 </div>
 <div class="checkbox">
   <label><input type="checkbox"> Remember me</label>
 </div>
 <button type="submit" class="btn btn-default">Submit</button>
</form>
```

### Bootstrap Inline Form

In an inline form, all of the elements are inline, left-aligned, and the labels are alongside.

Note: This only applies to forms within viewports that are at least 768px wide!

Add class `.form-inline` to the `<form>` element

```html
<form class="form-inline" role="form">
```

### Bootstrap Horizontal Form

Additional rules for a horizontal form:

- Add class `.form-horizontal` to the `<form>` element
- Add class `.control-label` to all `<label>` elements

Use Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout.

The following example creates a horizontal form with two input fields, one checkbox, and one submit button:

```html
<form class="form-horizontal" role="form">
 <div class="form-group">
   <label class="control-label col-sm-2" for="email">Email:</label>
   <div class="col-sm-10">
     <input type="email" class="form-control" id="email" placeholder="Enter email">
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="pwd">Password:</label>
   <div class="col-sm-10">
     <input type="password" class="form-control" id="pwd" placeholder="Enter password">
   </div>
 </div>
 <div class="form-group">
   <div class="col-sm-offset-2 col-sm-10">
     <div class="checkbox">
       <label><input type="checkbox"> Remember me</label>
     </div>
   </div>
 </div>
 <div class="form-group">
   <div class="col-sm-offset-2 col-sm-10">
     <button type="submit" class="btn btn-default">Submit</button>
   </div>
 </div>
</form>
```
















## &nbsp;
## &nbsp;
## [Bootstrap Form Input]({{ page.base_url }}/inputs/index.html)

### Supported Form Controls

Bootstrap supports the following form controls:

- input
- textarea
- checkbox
- radio
- select

### Bootstrap Input

Bootstrap supports all the HTML5 input types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.

***Note: Inputs will NOT be fully styled if their type is not properly declared!***

```html
<div class="form-group">
 <label for="usr">Name:</label>
 <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
 <label for="pwd">Password:</label>
 <input type="password" class="form-control" id="pwd">
</div>
```

### Bootstrap Textarea

```html
<div class="form-group">
 <label for="comment">Comment:</label>
 <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
```

### Bootstrap Checkboxes

Checkboxes are used if you want the user to select any number of options from a list of preset options.

The following example contains three checkboxes. The last option is disabled:

```html
<div class="checkbox">
 <label><input type="checkbox" value="">Option 1</label>
</div>
<div class="checkbox">
 <label><input type="checkbox" value="">Option 2</label>
</div>
<div class="checkbox disabled">
 <label><input type="checkbox" value="" disabled>Option 3</label>
</div>
```

Use the `.checkbox-inline` class if you want the checkboxes to appear on the same line:

```html
<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label>
<label class="checkbox-inline"><input type="checkbox" value="">Option 2</label>
<label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>
```

### Bootstrap Radio Buttons

Radio buttons are used if you want to limit the user to just one selection from a list of preset options.

The following example contains three radio buttons. The last option is disabled:

```html
<div class="radio">
 <label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
 <label><input type="radio" name="optradio">Option 2</label>
</div>
<div class="radio disabled">
 <label><input type="radio" name="optradio" disabled>Option 3</label>
</div>
```

Use the `.radio-inline` class if you want the radio buttons to appear on the same line:

### Bootstrap Select List

Select lists are used if you want to allow the user to pick from multiple options.

The following example contains a dropdown list (select list):

```html
<div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
```

### Static Control

If you need to insert **plain text** next to a form label within a horizontal form, use the `.form-control-static` class on a `<p>` element:

```html
<form class="form-horizontal" role="form">
 <div class="form-group">
   <label class="control-label col-sm-2" for="email">Email:</label>
   <div class="col-sm-10">
     <p class="form-control-static">someone@example.com</p>
   </div>
 </div>
</form>
```

### Bootstrap Form Control States


- **INPUT FOCUS** - The outline of the input is removed and a box-shadow is applied on focus
- **DISABLED INPUTS** - Add a `disabled` attribute to disable an input field
- **DISABLED FIELDSETS** - Add a `disabled` attribute to a fieldset to disable all controls within
- **READONLY INPUTS** - Add a `readonly` attribute to an input to prevent user input
- **VALIDATION STATES** - Bootstrap includes validation styles for error, warning, and success messages. To use, add `.has-warning`, `.has-error`, or `.has-success` to the parent element
- **ICONS** - You can add feedback icons with the `.has-feedback` class and an icon
- **HIDDEN LABELS** - Add a `.sr-only` class on non-visible labels

### Input Sizing in Forms
Set the heights of input elements using classes like `.input-lg` and `.input-sm`.

Set the widths of elements using grid column classes like `.col-lg-*` and `.col-sm-*`.


```html
 <input class="form-control input-lg" id="inputlg" type="text">
 ```

 You can quickly size labels and form controls within a Horizontal form by adding `.form-group-*` to the `<div class="form-group">` element:

 ```html
 <div class="form-group form-group-lg">
  <label class="col-sm-2 control-label" for="lg">form-group-lg</label>
  <div class="col-sm-10">
    <input class="form-control" type="text" id="lg">
  </div>
</div>
```

### Help Text

Use the `.help-block` class to add a block level help text in forms:

```html
<spam class="help-block">This is a help block...</span>
```





















































## &nbsp;
## &nbsp;
## [Bootstrap Templates and Themes]({% post_url 2016-06-24-bootstrap-templates %})
