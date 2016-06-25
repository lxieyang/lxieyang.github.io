---
layout: post
title: Bootstrap Grid System
base_url: /resources/blog/bstutorial/
---


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
