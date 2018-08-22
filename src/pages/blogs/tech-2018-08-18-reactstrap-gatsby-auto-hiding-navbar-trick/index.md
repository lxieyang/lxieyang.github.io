---
title: "Reactstrap/Gatsby Auto-hiding Navbar Trick"
date: "2018-08-18"
published: true
under: 'blogs'
category: "tech"
subcategory: ["React", "Gatsby.js", "Reactstrap"]
---

### Disclaimer

First things first, I do not claim to be an [React](https://reactjs.org)/[Gatsby](https://www.gatsbyjs.org) expert. The following content is just something I figured out by trial-and-error and would like to document / share with other [React](https://reactjs.org)/[Gatsby](https://www.gatsbyjs.org) hackers.


### Problem Description

See the nice auto-hiding Navbar on this site? That took me a while to implement. Not that it's a difficult task, but it's was rediculously hard to make it perform correctly (or shall I say, elegantly) across browsers/platforms. Basically, I want it to **auto-hide when you are scrolling down, and auto-reveal when you are scrolling up**. Every bit of srenn real estate matters, especially in a mobile-first world.


First let's get some context out of the way: I'm using [Bootstrap](https://getbootstrap.com/) with [React](https://reactjs.org), so [Reactstrap](https://reactstrap.github.io/) is the default way to go. You could either have a *fixed* navbar or a *non-fixed* one, but not an *auto-hiding/auto-revealing* one. If you ever have found yourself typing something like "reactstrap auto hiding navbar" into [Google](https://www.google.com/search?q=reactstrap+auto+hiding+navbar), you're probably in a similar situation. Fortunately, there are many hacks that sort of works available as open-source. However, since you are using [React](https://reactjs.org), you probably don't want to mix any [jQuery](https://jquery.com/) stuff into your code (my take is you really shouldn't), so packages written with [jQuery](https://jquery.com/) like [Bootstrap Auto-Hiding Navbar](https://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/) are out of consideration. And unfortunately, that rules out almost all of them. 

### The Solution

I tested out a couple of solutions. One of them works *almost* perfectly for me, which is available at [How TO - Hide Menu on Scroll - W3Schools.com](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp). If you try it out in Chrome or Firefox, it works like a charm, which concluded my first attempt to build this fancy navbar. 

However, if you happen to be using Safari on a Mac, problems starts to reveal. And it sucks a lot: when you scroll to the very bottom, the navbar will "magically" reveal itself; when you scroll back to the very top, the navbar will "magically" disappear. Something like the following:

<img alt="scroll-down" style="max-width: 400px" src="./scrolling-down-hit-bottom-safari.gif" /> <img alt="scroll-down" style="max-width: 400px" src="./scrolling-up-hit-top-safari.gif" />

And this undersirable effect also applys to mobile browsing using Safari.

### The Ultimate Solution

The cause of this effect is that Safari allows "over-scroll" and will display a bouncy effect once you do so. I'm guessing it's a UX sugar? Anyway, in this case, it's super annoying.

To resolve this, you have to carefully come up with edge fixes for Safari. Here's what I end up putting in my `./header.js`:

```javascript
import React, { Component } from 'react';
import './header.css';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
... ... // Other imports


const ListLink = (props) => (
  // ListLink implementation omitted
);

class Header extends Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggleNavbar.bind(this);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
          ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }

  render () {
    return (
      <div>
        <Navbar id="navbar" {/* other attributes omitted*/}> 
          ... ... // Navbar implemetation omitted
        </Navbar>
      </div>
    );
  }
}

export default Header;

```

and `./header.css`:

```css
# navbar {
  transition: top 0.5s
}
```

which is based on the W3Schools.com solution mentioned above.

To check the source code in full context: [header.js and header.css](https://github.com/lxieyang/lxieyang.github.io/tree/gatsby-dev/src/components/header).

Now, everything looks perfect, everywhere. I'm not going to put a gif here when you can simply scroll the page yourself to test it out.

🤪 

Happy hacking. Michael out.
