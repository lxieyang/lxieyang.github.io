(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m});var a=n(0),r=n.n(a),l=n(88),o=n(191);var c=function(e){var t=e.allMarkdownRemark;return null===t?null:r.a.createElement("div",null,t.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(l.Link,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title)),r.a.createElement("div",{style:{color:"#bbb",fontSize:"0.8rem"}},t.frontmatter.date),r.a.createElement("p",null,t.excerpt))}))},u=function(e){var t=e.allMarkdownRemark;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement("h1",null,"Blogs")),r.a.createElement("div",{style:{fontStyle:"italic"}},null===t?r.a.createElement("h5",null,"Diligently writing..."):r.a.createElement("h5",null,t.totalCount," Post",t.totalCount>1?"s":null)))},i=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(o.a,{pathName:"Blogs"},r.a.createElement(u,{allMarkdownRemark:e}),r.a.createElement("br",null),r.a.createElement(c,{allMarkdownRemark:e}))},a}(a.Component);t.default=i;var m="3883216174"}}]);
//# sourceMappingURL=component---src-pages-blogs-index-jsx-0c6aad01d1b4f080445f.js.map