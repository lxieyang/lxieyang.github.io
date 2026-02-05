"use strict";(self.webpackChunkmichael_personal_website=self.webpackChunkmichael_personal_website||[]).push([[445],{4646:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(4578),a=n(1351),l=n.n(a),o=n(9734),i=n.n(o),s=n(7294),c=n(2788),m=n(267),p=n(1252),d=n(7462),g=n(7326),f=n(5697),u=n.n(f),h=n(627),b=n(3663),E=["toggleEvents","defaultOpen"],y={defaultOpen:u().bool,toggler:u().string.isRequired,toggleEvents:u().arrayOf(u().string)},v={toggleEvents:b.mP},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).togglers=null,n.removeEventListeners=null,n.toggle=n.toggle.bind((0,g.Z)(n)),n.state={isOpen:t.defaultOpen||!1},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.togglers=(0,b.kQ)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=(0,b.y_)(this.togglers,this.toggle,this.props.toggleEvents))},n.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},n.toggle=function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.preventDefault()},n.render=function(){return s.createElement(h.Z,(0,d.Z)({isOpen:this.state.isOpen},(0,b.CE)(this.props,E)))},t}(s.Component);k.propTypes=y,k.defaultProps=v;var w=k,x=n(4553),P=n.n(x),Z=n(2326);n(3936),n(5139),n(4364),n(95),n(2852);const I=c.ZP.div``,N=c.ZP.div`
  margin-bottom: 15px;
`,_=c.ZP.h4`
  opacity: 0.7;
`,$=(c.ZP.h3`
  /* opacity: 0.7; */
`,c.ZP.img`
  /* max-width: 95%; */
  /* max-height: 90%; */
  /* max-height: 95%; */
  opacity: 0.8;
`),C=c.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  opacity: 0.8;

  .tag-inner {
    margin-top: 0.125rem;
    padding: 0.05rem 0.25rem;
    border-radius: 0.3rem;
    background-color: #333;
    color: #fff;
  }
`;let S=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={currentYear:(new Date).getFullYear()},t}return(0,r.Z)(t,e),t.prototype.render=function(){let e=[{prompt:"Conferences & Pre-prints",data:P()("publications[*type=conference]",{data:Z.E}).value.filter((e=>!1!==e.showInResearchPage))},{prompt:"Workshop Papers & Posters",data:P()("publications[*type=workshop]",{data:Z.E}).value.filter((e=>!1!==e.showInResearchPage))}];return s.createElement(s.Fragment,null,s.createElement("a",{href:"#publications"}," "),s.createElement("h1",null,"Publications"),s.createElement(I,null,e.map(((e,t)=>s.createElement(N,{key:t},s.createElement(_,null,e.prompt),l()(i()(e.data,["year","month"])).map(((t,n)=>s.createElement(m.Z,{key:n,style:{marginBottom:"25px"}},s.createElement("a",{className:"anchor",name:t.codename}),s.createElement(p.Z,{xs:"5",md:"4",lg:"3",className:"d-md-block d-lg-block"},s.createElement($,{src:t.previewImgLink,alt:t.codename,className:"img-fluid pub-image-preview"}),t.conferenceTag&&s.createElement(C,{className:"conference-tag d-inline-block d-sm-flex"},s.createElement("div",{className:"tag-inner"},t.conferenceTag))),s.createElement(p.Z,{xs:"12",md:"8",lg:"9"},s.createElement("a",{className:"paper-title pub-element",href:`${Z.S}/${t.codename}/${t.codename}.pdf`},t.title),s.createElement("div",{className:"authors pub-element"},t.authors.map(((e,n)=>s.createElement(s.Fragment,{key:n},s.createElement("span",{key:n,className:e.bold?"author-important":null},e.name),n===t.authors.length-1?". ":", ")))),t.conferenceFullName&&s.createElement("div",{className:"publication-location pub-element"},s.createElement("span",{className:"conference"},t.conferenceFullName),","," ",s.createElement("span",{className:"conference-year"},t.year),"."),t.award&&s.createElement("div",{className:"awards pub-element"},t.award.honorableMention&&s.createElement("span",{className:"honorable"},"🏅 Best Paper Honorable Mention Award"),t.award.bestPaper&&s.createElement("span",{className:"best-paper"},"🏆 Best Paper Award")),s.createElement("div",{className:"data pub-element"},s.createElement("span",null,"[",s.createElement("a",{href:`#${t.codename}`,id:`${t.codename}-abstract`,style:{display:"flex",alignItems:"center"}},"Abstract"),"]"),void 0!==t.ieeexplore&&s.createElement("span",null,"[",s.createElement("a",{href:t.ieeexplore,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"IEEE Digital Library"),"]"),void 0!==t.acmdl&&s.createElement("span",null,!1===t.acmdl_available?s.createElement(s.Fragment,null,s.createElement("em",null,"ACM DL available soon!")):s.createElement(s.Fragment,null,"[",s.createElement("a",{href:t.acmdl,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"ACM DL"),"]")),void 0!==t.pnasdl&&s.createElement("span",null,!1===t.pnasdl_available?s.createElement(s.Fragment,null,s.createElement("em",null,"Available soon!")):s.createElement(s.Fragment,null,"[",s.createElement("a",{href:t.pnasdl,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"PNAS"),"]")),void 0!==t.arxiv&&s.createElement("span",null,"[",s.createElement("a",{href:t.arxiv,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"arxiv"),"]"),!1!==t.shouldShowLocalPaperLink?"poster"===t.type?s.createElement(s.Fragment,null,s.createElement("span",null,"[",s.createElement("a",{href:`${Z.S}/${t.codename}/${t.codename}-paper.pdf`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Extended Abstract"),"]"),s.createElement("span",null,"[",s.createElement("a",{href:`${Z.S}/${t.codename}/${t.codename}-poster.pdf`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Poster"),"]")):s.createElement("span",null,"[",s.createElement("a",{href:`${Z.S}/${t.codename}/${t.codename}.pdf`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Paper PDF"),"]"):null,void 0!==t.conferenceTalkVideo&&s.createElement("span",null,"[",s.createElement("a",{href:t.conferenceTalkVideo,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Talk Video"),"]"),void 0!==t.cmuSCSMedia&&s.createElement("span",null,"[",s.createElement("a",{href:t.cmuSCSMedia,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"CMU SCS News"),"]"),void 0!==t.msrblog&&s.createElement("span",null,"[",s.createElement("a",{href:t.msrblog,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"},title:t.msrblogTitle},"Microsoft Research Blog"),"]"),void 0!==t.codebaseLink&&s.createElement("span",null,"[",s.createElement("a",{href:t.codebaseLink,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Code"),"]"),void 0!==t.blogPost&&s.createElement("span",null,"[",s.createElement("a",{href:t.blogPost,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Blog Post"),"]"),void 0!==t.website&&s.createElement("span",null,"[",s.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"}},"Project Website"),"]")),s.createElement(w,{defaultOpen:!1,toggler:`#${t.codename}-abstract`,className:"paper-abstract publication-collapse"},t.abstract)),e.data.length-1!==n&&s.createElement(p.Z,{xs:"12",className:"d-sm-none"},s.createElement("div",{style:{height:20,borderBottom:"1px solid #eee"}}))))))))))},t}(s.Component);var O=S},909:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(4578),a=n(7294),l=n(2788),o=(n(3805),n(4553),n(2326),n(7561)),i=n.p+"static/research-statement-bg-34723248d95bc123dcc2d23909d1df17.png",s=(n.p,n(3936),n(5139),n(4364),n(95),n(2852),n(4646));const c=l.ZP.div`
  position: relative;
  overflow: hidden;
  padding: 10px 3px;
  margin-bottom: 15px;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.03;
    background-image: url(${i});
    background-blend-mode: lighten;
  }
`;l.ZP.div``,l.ZP.div`
  margin-bottom: 15px;
`,l.ZP.h4`
  opacity: 0.7;
`,l.ZP.h3`
  /* opacity: 0.7; */
`,l.ZP.img`
  /* max-width: 95%; */
  /* max-height: 90%; */
  /* max-height: 95%; */
  opacity: 0.8;
`,l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  opacity: 0.8;
`;let m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={currentYear:(new Date).getFullYear()},t}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(o.Z,{pathName:"Research"},a.createElement("a",{href:"#research"}),a.createElement("h1",null,"Research"),a.createElement(c,null,a.createElement("p",null,a.createElement("strong",null,"Overview:")," I research programming support largely from a sensemaking perspective. My current work is in studying sensemaking activities in programming practices, and how sensemaking results could be effectively shared among programmers. I aim to design tools to better support programming activities, both for professional programmers and end-user programmers."),a.createElement("p",null,a.createElement("strong",null,"Background:")," Programmers spend a significant proportion of their time searching for and making sense of complex information in order to accomplish their goals, whether choosing between different APIs, adapting code snippets found on the Internet to meet their needs, or trying to learn unfamiliar code to fix an error or add a new feature. When performing tasks like these, programmers continually are making hypotheses, proposing questions, and discovering answers. However, after each sensemaking episode in which a programmer gains knowledge for themselves, their work is essentially lost, with no one else benefiting. Although there are many tools to help programmers find the answers, there are very few tools to help programmers make use of the knowledge gained performing the task, or share that knowledge with others. We aim to help the initial programmer collect, navigate, and organize knowledge to meet their goals, while capturing this knowledge and making it useful for later programmers with similar needs.")),a.createElement(s.Z,null))},t}(a.Component);var p=m},3805:function(e){e.exports=a,e.exports.isMobile=a,e.exports.default=a;const t=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/CrOS/,r=/android|ipad|playbook|silk/i;function a(e){e||(e={});let a=e.ua;if(a||"undefined"==typeof navigator||(a=navigator.userAgent),a&&a.headers&&"string"==typeof a.headers["user-agent"]&&(a=a.headers["user-agent"]),"string"!=typeof a)return!1;let l=t.test(a)&&!n.test(a)||!!e.tablet&&r.test(a);return!l&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==a.indexOf("Macintosh")&&-1!==a.indexOf("Safari")&&(l=!0),l}},5139:function(e,t,n){n.p},3936:function(e,t,n){n.p},2852:function(e,t,n){n.p},95:function(e,t,n){n.p},4364:function(e,t,n){n.p}}]);
//# sourceMappingURL=component---src-pages-research-index-jsx-35e857c1ab9559a62e78.js.map