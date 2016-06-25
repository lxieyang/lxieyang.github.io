---
layout: post
title: Bootstrap Tutorial
base_url: /resources/blog/bstutorial/
---

***This post will be updated on a weekly basis.***

***Last update: Jun 25 2016.***

<br>

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

### Grid System Rules

Some Bootstrap grid system rules:

- Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding
- Use **rows** to create horizontal groups of columns
- Content should be placed within **columns**, and only columns may be ***immediate*** children of rows
- Predefined classes like `.row` and `.col-sm-4` are available for quickly making grid layouts
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on `.rows`
- Grid columns are created by specifying the number of 12 available columns you wish to span. For example, three equal columns would use three `.col-sm-4`

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

### [Bootstrap Grid Example: Stacked-to-horizontal]({{ page.base_url }}/gridSystem/stackToHorizontal.html)

We will create a basic grid system that starts out stacked on mobiles/tablets (small devices), before becoming horizontal on desktops (medium/large devices).

The following example shows a simple "stacked-to-horizontal" two-column layout, meaning it will result in a 50%/50% split on all screens, except for extra small screens, which it will automatically stack (100%):


```html
<div class="container">
  <h1>Hello World!</h1>
  <div class="row">
    <div class="col-sm-6" style="background-color:yellow;">
      <p>Lorem ipsum...</p>
    </div>
    <div class="col-sm-6" style="background-color:pink;">
      <p>Sed ut perspiciatis...</p>
    </div>
  </div>
</div>
```

Tip: You can turn any fixed-width layout into a full-width layout by changing the .container class to `.container-fluid`.


### [Bootstrap Grid Example: Small Devices]({{ page.base_url }}/gridSystem/small.html)

Small devices are defined as having a screen width from 768 pixels to 991 pixels.

For small devices we will use the `.col-sm-*` classes.

The following example will result in a 25%/75% split on small (and medium and large) devices. On extra small devices, it will ***automatically stack*** (100%):

```html
<div class="col-sm-3">....</div>
<div class="col-sm-9">....</div>
```

### [Bootstrap Grid Example: Medium Devices]({{ page.base_url }}/gridSystem/medium.html)

Medium devices are defined as having a screen width from 992 pixels to 1199 pixels.

For medium devices we will use the `.col-md-*` classes.

Now we will add the column widths for medium devices:

```html
<div class="col-sm-3 col-md-6">....</div>
<div class="col-sm-9 col-md-6">....</div>
```

**Now Bootstrap is going to say "at the small size, look at classes with -sm- in them and use those. At the medium size, look at classes with -md- in them and use those".**

**The above example will result in a 25%/75% split on small devices and a 50%/50% split on medium (and large) devices. On extra small devices, it will automatically stack (100%)**

Using Only Medium: In the example below, we only specify the `.col-md-6` class (without `.col-sm-*`). This means that medium and large devices will split 50%/50% - because the class scales up. However, for small devices, it will stack vertically (100% width):

```html
<div class="col-md-6">....</div>
<div class="col-md-6">....</div>
```

### [Bootstrap Grid Example: Large Devices]({{ page.base_url }}/gridSystem/large.html)

Large devices are defined as having a screen width from 1200 pixels and above.

For large devices we will use the `.col-lg-*` classes.

So now we will add the column widths for large devices:

```html
<div class="col-sm-3 col-md-6 col-lg-4">....</div>
<div class="col-sm-9 col-md-6 col-lg-8">....</div>
```

**Now Bootstrap is going to say "at the small size, look at classes with `-sm-` in them and use those. At the medium size, look at classes with `-md-` in them and use those. At the large size, look at classes with the word `-lg-` in them and use those".**

**The above example will result in a 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large devices.**

Using Only Large: In the example below, we only specify the `.col-lg-6` class (without `.col-md-*` and/or `.col-sm-*`). This means that large devices will split 50%/50%. However, for medium AND small devices, it will stack vertically (100% width):

```html
<div class="col-lg-6">....</div>
<div class="col-lg-6">....</div>
```

### More Examples

#### [Two Columns With Two Nested Columns]({{ page.base_url }}/gridSystem/nested.html)

The following example shows how to get two columns starting at tablets and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):

```html
<div class="row">
  <div class="col-sm-8">
    .col-sm-8
    <div class="row">
      <div class="col-sm-6">.col-sm-6</div>
      <div class="col-sm-6">.col-sm-6</div>
    </div>
  </div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
```

#### [Mixed: Mobile, Tablet And Desktop]({{ page.base_url }}/gridSystem/mixed.html)

```html
<div class="row">
  <div class="col-xs-7 col-sm-6 col-lg-8">.col-xs-7 .col-sm-6 .col-lg-8</div>
  <div class="col-xs-5 col-sm-6 col-lg-4">.col-xs-5 .col-sm-6 .col-lg-4</div>
</div>

<div class="row">
  <div class="col-xs-6 col-sm-8 col-lg-10">.col-xs-6 .col-sm-8 .col-lg-10</div>
  <div class="col-xs-6 col-sm-4 col-lg-2">.col-xs-6 .col-sm-4 .col-lg-2</div>
</div>
```

#### [Clear Floats]({{ page.base_url }}/gridSystem/clearFloat.html)
Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content:

```html
<div class="row">
  <div class="col-xs-6 col-sm-3">
    Column 1
    <br>
    Resize the browser window to see the effect.
  </div>
  <div class="col-xs-6 col-sm-3">Column 2</div>
  <!-- Add clearfix for only the required viewport -->
  <div class="clearfix visible-xs"></div>
  <div class="col-xs-6 col-sm-3">Column 3</div>
  <div class="col-xs-6 col-sm-3">Column 4</div>
</div>
```

#### [Offsetting Columns]({{ page.base_url }}/gridSystem/offset.html)

Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by `*` columns:

```html
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">
  .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
</div>
```

#### [Push And Pull - Change Column Ordering]({{ page.base_url }}/gridSystem/pushpull.html)

Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes:

```html
<div class="row">
  <div class="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>
  <div class="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>
</div>
```






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
