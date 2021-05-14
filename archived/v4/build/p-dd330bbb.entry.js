import{r as t,c as a,h as s,g as i}from"./p-ed5fd7e6.js";const o=class{constructor(s){t(this,s),this.clearToast=a(this,"clearToast",7),this.toggleHeaderSearch=a(this,"toggleHeaderSearch",7),this.hadIconOnce=!1}handleCodeClick(t){const a=this.el.querySelector(".toast-bar__section:first-child"),s=document.createElement("textarea");s.value=`<ion-icon name="${t}"></ion-icon>`,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),this.showCopiedConfirm&&(window.clearTimeout(this.showCopiedConfirm),this.showCopiedConfirm=0),a.classList.add("copied"),this.showCopiedConfirm=window.setTimeout(()=>{a.classList.remove("copied"),this.showCopiedConfirm=0},1500)}componentDidLoad(){this.el.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),this.el.addEventListener("touchend",this.handleTouchEnd.bind(this),!1)}handleTouchStart(t){t.target.classList.contains("toast-bar--inner")&&(t.preventDefault(),this.touchStartY=t.changedTouches[0].screenY)}handleTouchEnd(t){t.target.classList.contains("toast-bar--inner")&&(t.preventDefault(),this.touchEndY=t.changedTouches[0].screenY,this.touchEndY>this.touchStartY&&this.clearToast.emit())}render(){let t,a,i,o=null;return this.selectedIcon&&(this.hadIconOnce||(this.hadIconOnce=!0),i=this.selectedIcon.name,a=this.selectedIcon.icons[0].startsWith("logo-")?"logo":this.selectedIconType,"logo"===a&&(i="logo-"+i),t=8*`<ion-icon name="${i}"></ion-icon>`.length+32,o=this.selectedIcon.icons.map(t=>{let a;switch(t.substr(0,t.indexOf("-"))){case"ios":a="iOS STYLE";break;case"md":a="MATERIAL STYLE";break;case"logo":a="LOGO"}return s("div",{class:"toast-bar__section"},s("div",{class:"toast-bar__section-header"},s("h6",null,a)),s("div",{class:"btn-group"},s("div",{class:"btn btn--gray btn--small btn--icon"},s("i",{class:"ion ion-"+t})),s("a",{class:"btn btn--gray btn--small",download:`/ionicons/svg/${t}.svg`,href:`/ionicons/svg/${t}.svg`},s("i",{class:"ion ion-md-download"}),"SVG")))})),s("div",{class:`toast-bar ${this.selectedIcon?"isVisible":""} ${!this.selectedIcon&&this.hadIconOnce?"isHidden":""} ${this.hadIconOnce?"":"preload"}`,onClick:t=>t.stopPropagation()},s("div",{class:"container"},s("div",{class:"toast-bar--inner"},this.selectedIcon&&s("h4",null,this.selectedIcon.name),this.selectedIcon&&s("div",{class:"toast-bar__details"},s("div",{class:"toast-bar__section",style:{maxWidth:t+"px"}},s("div",{class:"toast-bar__section-header"},s("div",null,s("h6",null,"Web component code"),s("span",{class:"confirmation"},s("i",{class:"ion ion-md-checkmark"}),"Copied")),s("stencil-route-link",{url:`/ionicons/v4/usage#${a}-${this.selectedIcon.name}`,onClick:()=>this.toggleHeaderSearch.emit("hide")},"Usage",s("i",{class:"ion ion-ios-arrow-forward"}))),s("code",null,s("span",{class:"hover-highlight",onClick:()=>this.handleCodeClick(i)},"<",s("span",{class:"yellow"},"ion-icon")," ",s("span",{class:"orange"},"name"),"=",s("span",{class:"green"},`"${i}"`),">","</",s("span",{class:"yellow"},"ion-icon"),">"))),o))))}get el(){return i(this)}};o.style='toast-bar .toast-bar{position:fixed;padding:12px 0;left:0;bottom:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}toast-bar .toast-bar.isVisible{-webkit-animation-name:slideIn;animation-name:slideIn;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:1}@-webkit-keyframes slideIn{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0%);transform:translateY(0%)}}@keyframes slideIn{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0%);transform:translateY(0%)}}toast-bar .toast-bar.isHidden{-webkit-animation-name:slideOut;animation-name:slideOut;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0%);transform:translateY(0%)}99%{opacity:1}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0%);transform:translateY(0%)}99%{opacity:1}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}toast-bar .toast-bar.preload{opacity:0}toast-bar .toast-bar--inner{background-color:var(--color-shark);height:80px;border-radius:15px;padding:0 20px 0 30px;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0px 16px 32px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 16px 32px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(0, 0, 0, 0.08)}toast-bar .toast-bar--inner h4{color:#fff;margin:0;white-space:nowrap;margin-right:30px}toast-bar .toast-bar__details{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}toast-bar .toast-bar__section-header,toast-bar .toast-bar__section-header>div{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}toast-bar .toast-bar__section-header{height:10px;margin-bottom:7px}toast-bar .toast-bar__section-header h6{display:inline-block}toast-bar .toast-bar__section-header a{-webkit-transition:border 0.3s;transition:border 0.3s;color:var(--color-melrose);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;border-bottom:1px solid transparent}toast-bar .toast-bar__section-header a:hover{border-bottom-color:var(--color-melrose-dark)}toast-bar .toast-bar__section-header i{margin-left:3px}toast-bar .toast-bar__section:not(:first-child){margin-left:20px}toast-bar .toast-bar__section:first-child{position:relative;max-width:none}toast-bar .toast-bar__details code{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:14px;line-height:14px;height:32px;padding:0 12px;cursor:text;overflow:hidden}@supports (display: grid){toast-bar .toast-bar__section:not(:first-child){-ms-flex:0;flex:0}toast-bar .toast-bar__section:first-child{-ms-flex:1;flex:1}toast-bar .toast-bar__details code{overflow-x:auto}}toast-bar .toast-bar__details code>span{position:absolute;white-space:nowrap}toast-bar .toast-bar__section .confirmation{font-size:11px;font-family:"Eina";font-weight:600;color:#aec6ff;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px);margin-left:12px}toast-bar .toast-bar__section .confirmation .ion{color:#aec6ff;font-size:14px;margin-right:4px}toast-bar .toast-bar__section.copied .confirmation{-webkit-animation-name:slideInOut;animation-name:slideInOut;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:0.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:0.9;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}@keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:0.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:0.9;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}toast-bar .toast-bar__details code:hover .hover-highlight{background-color:#5882b2}@media screen and (max-width: 768px){toast-bar .toast-bar__section:not(:first-child){display:none}}@media screen and (max-width: 540px){toast-bar .toast-bar--inner{padding:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;height:auto}toast-bar .toast-bar--inner h4{margin:0 0 16px}toast-bar .toast-bar__section{max-width:100% !important}toast-bar .toast-bar__details{-ms-flex:0 0 auto;flex:0 0 auto;width:100%}}';export{o as toast_bar}