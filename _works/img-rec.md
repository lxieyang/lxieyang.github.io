---
layout: works
weight: 1
title: Locating Human-object Pairs to Aid Image Recognition [Amazon MTurk-based]
image2_path: /resources/images/works/img-rec/step1_1.gif
image3_path: /resources/images/works/img-rec/step1_2.gif
image_path: /resources/images/works/img-rec/preview_amazon_project_1.png
demo_polygon: /resources/files/works/drawing_bounding_boxes_1.html
demo_box: /resources/files/works/drawing_bounding_boxes_2.html
demo_recent: /resources/files/works/drawing_bounding_boxes_3.html
devfolder: https://github.com/lxieyang/simple-amt
---

<br><br>
<img class="single-img" src="{{ page.image_path }}" alt="img1"><br>

Imagine, one day, you could ask Siri: "Hey Siri, show me the photos in which I was riding that amazing horse!" or "Do you remember the selfie I took when I was kissing my cute little puppy Max?"

Needless to say, virtual assistants today don't actually understand photos. All they could do is to pull out the metadata associated with that photo, for example, GPS location, time taken, surrounding temperature, etc. Therefore, they could only answer queries like "Show me the pictures I took in downtown Manhattan (at midnight)."


<br>
<div>
<img class="double-img" src="{{ page.image2_path }}" alt="img2">
<img class="double-img" src="{{ page.image3_path }}" alt="img3">
</div>
<br>

What we want to do is to help computers actually understand the content of the image. Computers trained by us would be able to locate human beings and objects in the image, and figure out what action the human being is performing to the object. And the interactive questions in the beginning of this section, would indeed, be possible.

In order to do this, we could like to ask Internet workers to circle out the locations of human beings and objects in a batch of images. My role is to **develop such an interface to help the workers do their jobs way faster and more accurate**.

[Interface demo (Drawing Polygons Version)]({{ page.demo_polygon }})

[Interface demo (Drawing Tight Boxes Version)]({{ page.demo_box }})

[Interface demo (Most Recent Version)]({{ page.demo_recent }})

[Complete development folder (Simple-amt based)]({{ page.devfolder }})
