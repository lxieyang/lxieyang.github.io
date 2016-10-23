---
layout: works
weight: 4
title: 2015 COMAP - Mathematical Contest in Modeling [Meritorious Winner]
image_path: /resources/images/works/mcm/preview_mcm.png
image2_path: /resources/images/works/mcm/preview_mcm_2.png
paper: /resources/files/works/mcm_2015.pdf
tex: /resources/files/works/mcm_2015.tex
certificate: /resources/files/works/mcm_2015_certificate.pdf
---

<br><br>
<img class="single-img" src="{{ page.image_path }}" alt="img1"><br>


We constructed 3 mathematical models to guide the search and rescue operation for planes feared to have crashed in the ocean.

Model I deals with the descending process of the airplane. By analyzing the freebody diagram, we obtained a system of differential equations which characterizes the motion of the airplane during descending. By specifying the initial conditions, we could solve the system by MATLAB, and obtain the flying trajectory and possible crashing position.

Model II studies the sinking process of the wreckage and the black boxes. We consider three different scenarios where the angle between the ocean current and the crashing direction varies. Thus, we obtain three sets of free-body diagrams and systems of differential equations. By applying the results of model I as the initial conditions, the systems could be solved respectively. Therefore, the positions of the main wreckage and black boxes are acquired.

<br><img class="single-img" src="{{ page.image2_path }}" alt="img2"><br>

Model III provides an algorithm which guides the search operation. To cope with different situations encountered in the operation, we have 5 different plans at our disposal. Each plan is designed to search for survivors, floating wreckage, or main wreckage underwater respectively. During the beginning of the operation, the algorithm lays much emphasis on searching and rescuing survivors. As time goes by, the algorithm shifts its focus onto the recovery of bodies, wreckage, and black boxes.

To verify the effectiveness of our plan, we compare our plan with a reference plan by simulation in a computer program. As was expected, our plan surpasses the reference one in the times of successes. Therefore, the models we construct are valid and promising.

[2015 MCM Paper (pdf)]({{ page.paper }})

[2015 MCM Paper (tex)]({{ page.tex }})

[2015 MCM Meritorious Winner Certificate]({{ page.certificate }})


<br><br>
