(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var a=n(6),l=n.n(a),r=n(0),o=n.n(r),u=n(147),i=n(148),c=function(e){var t=e.allMarkdownRemark;return null===t?null:o.a.createElement("div",null,t.edges.map(function(e){var t=e.node;return o.a.createElement("div",{key:t.id},o.a.createElement(u.a,{to:t.fields.slug},o.a.createElement("h3",null,t.frontmatter.title)),o.a.createElement("div",{style:{color:"#bbb",fontSize:"0.8rem"}},t.frontmatter.date),o.a.createElement("p",null,t.excerpt))}))},m=function(e){var t=e.allMarkdownRemark;return o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}},o.a.createElement("div",null,o.a.createElement("h1",null,"Blogs")),o.a.createElement("div",{style:{fontStyle:"italic"}},null===t?o.a.createElement("h5",null,"Diligently writing..."):o.a.createElement("h5",null,t.totalCount," Post",t.totalCount>1?"s":null)))},d=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return o.a.createElement(i.a,{pathName:"Blogs"},o.a.createElement(m,{allMarkdownRemark:e}),o.a.createElement("br",null),o.a.createElement(c,{allMarkdownRemark:e}))},t}(r.Component);t.default=d;var s="4071499216"}}]);
//# sourceMappingURL=component---src-pages-blogs-index-js-91bf8e299f332d7fdc89.js.map