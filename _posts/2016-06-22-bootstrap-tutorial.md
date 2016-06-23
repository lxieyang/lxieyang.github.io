---
layout: post
title: Bootstrap Tutorial
base_url: /resources/blog/bstutorial/
---

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

```
span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1
span 4	 span 4	 span 4
span 4	span 8
span 6	span 6
span 12
```

Bootstrap's grid system is responsive, and the columns will re-arrange automatically depending on the screen size.

### Grid classes

The Bootstrap grid system has four classes:

1. xs (for phones)
2. sm (for tablets)
3. md (for desktops)
4. lg (for larger desktops)

The classes above can be combined to create more dynamic and flexible layouts.

### Basic Structure of a Bootstrap Grid

```html
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

```

#### Three Equal Columns:

The following example shows how to get a three equal-width columns starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
```

#### Two Unequal Columns:
The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
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
