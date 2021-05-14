System.register(["./p-36e0e743.system.js"],(function(o){"use strict";var t,e,i;return{setters:[function(o){t=o.r;e=o.h;i=o.g}],execute:function(){var n="icon-list .icon-list{margin-bottom:100px}icon-list .icon-list__search+.icon-list__wrapper{padding-top:90px}icon-list .icon-list__header-bar{-webkit-transition:-webkit-box-shadow 0.6s;transition:-webkit-box-shadow 0.6s;transition:box-shadow 0.6s;transition:box-shadow 0.6s, -webkit-box-shadow 0.6s;margin-bottom:14px;height:52px;background-color:#fff;-webkit-box-shadow:0;box-shadow:0;z-index:99}icon-list .icon-list__header-bar.sticky{position:-webkit-sticky;position:sticky;top:58px;-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.06);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.06)}icon-list .icon-list__header-bar .container--small{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}icon-list .icon-list__header-bar h4{margin-top:21px;margin-bottom:0}icon-list .icon-results{display:grid;grid-template-columns:repeat(auto-fill, minmax(70px, 1fr));grid-auto-rows:minmax(70px, auto);grid-gap:0.5em;padding-bottom:60px;margin-left:-20px;margin-right:-20px}icon-list .icon-results__cell,icon-list .icon-results .ion{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}icon-list .icon-results__cell{-webkit-transition:background-color 0.4s;transition:background-color 0.4s;cursor:pointer;border-radius:8px;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(236, 240, 246, 0.4)}icon-list .icon-results__cell .ion{width:42px;height:42px;font-size:32px;color:#373737}icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:shadowIn;animation-name:shadowIn;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes shadowIn{from{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}}@keyframes shadowIn{from{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}}icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{-webkit-animation-name:shadowOut;animation-name:shadowOut;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}icon-list .icon-results__cell.active{-webkit-animation-duration:0.3s;animation-duration:0.3s}@-webkit-keyframes shadowOut{from{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}to{-webkit-box-shadow:0;box-shadow:0}}@keyframes shadowOut{from{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}to{-webkit-box-shadow:0;box-shadow:0}}icon-list .icon-results__cell.active{background-color:var(--color-catskill-white);cursor:default}icon-list .icon-results--empty{text-align:center;padding-top:70px}icon-list .icon-results--empty h2{margin-top:0}icon-list .toggle{list-style-type:none;display:-ms-flexbox;display:flex;margin-right:-4px;position:relative;bottom:-3px;margin-top:18px}icon-list .toggle__item{-webkit-transition:opacity 0.3s, padding-bottom 0.1s;transition:opacity 0.3s, padding-bottom 0.1s;opacity:0.5;text-decoration:none;font-size:13px;font-weight:600;color:var(--color-dodger-blue);border-bottom:2px solid transparent}icon-list .toggle__item:not(.active){cursor:pointer}icon-list .toggle__item:hover,icon-list .toggle__item.active{opacity:1}icon-list .toggle__item.active{border-bottom:2px solid var(--color-dodger-blue);padding-bottom:2px}icon-list .toggle__item+.toggle__item{margin-left:20px}icon-list .icon-list__header-bar.sticky .toggle__item{padding-bottom:11px}@media screen and (max-width: 768px){icon-list .icon-results{margin-left:0;margin-right:0}icon-list .icon-list__search+.icon-list__wrapper{padding-top:40px}}@media screen and (max-width: 560px){icon-list .icon-results__cell:not(.active).mouseOver,icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{-webkit-animation-name:none;animation-name:none;-webkit-box-shadow:0;box-shadow:0}}";var s=o("icon_list",function(){function o(o){t(this,o);this.selectedIcon="";this.selectedIconType="md";this.isHeaderSearchVisible=false;this.query=""}o.prototype.escListener=function(o){if(o.code==="Escape"&&this.selectedIcon.length)this.selectedIcon=""};o.prototype.handleBodyClicked=function(){if(this.selectedIcon.length)this.selectedIcon=""};o.prototype.handleClearToast=function(){this.selectedIcon=""};o.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))};o.prototype.checkScroll=function(){var o=this.el.querySelectorAll(".icon-list__header-bar");for(var t=0;t<o.length;t++){var e=o[t];if(e.getBoundingClientRect().top<67){e.classList.add("sticky")}else{e.classList.remove("sticky")}}};o.prototype.filterIcons=function(){var o=this.query.trim().toLowerCase();var t={icon:[],logo:[]};this.data.icons.forEach((function(e){if(o===""||e.tags.some((function(t){return t.indexOf(o)>-1}))){e.icons.forEach((function(o){var i=o.substr(0,o.indexOf("-"));switch(i){case"ios":t["icon"].push({name:e.name});break;case"logo":t["logo"].push({name:e.name,icon:o});break;default:return}}))}}));return t};o.prototype.handleIconMouseEnter=function(o){o.target.classList.remove("mouseOff");o.target.classList.add("mouseOver")};o.prototype.handleIconMouseLeave=function(o){o.target.classList.remove("mouseOver");o.target.classList.add("mouseOff")};o.prototype.handleIconClick=function(o,t){o.stopPropagation();this.selectedIcon=t};o.prototype.handleToggleClick=function(o){o.stopPropagation();this.selectedIconType=this.selectedIconType==="md"?"ios":"md"};o.prototype.render=function(){var o=this;var t=this.filterIcons();var i=this.data.icons.find((function(t){return t.name===o.selectedIcon}));if(!t.icon.length&&!t.logo.length&&this.isHeaderSearchVisible)document.documentElement.scrollTop=0;return e("div",{class:"icon-list"},e("div",{class:"icon-list__search container--small"},e("icon-search",{query:this.query,size:"large",automaticfocus:"autofocus"})),t.icon.length?e("div",{class:"icon-list__wrapper"},e("div",{class:"icon-list__header-bar"},e("div",{class:"container--small"},e("h4",null,"App icons"),e("ul",{class:"toggle"},e("li",{class:"toggle__item "+(this.selectedIconType==="md"?"active":""),onClick:function(t){return o.handleToggleClick(t)}},"Material style"),e("li",{class:"toggle__item "+(this.selectedIconType==="ios"?"active":""),onClick:function(t){return o.handleToggleClick(t)}},"iOS style")))),e("div",{class:"container--small"},e("div",{class:"icon-results"},t.icon.map((function(t){return e("span",{class:"icon-results__cell "+(o.selectedIcon===t.name?"active":""),onClick:function(e){return o.handleIconClick(e,t.name)},onMouseEnter:function(t){return o.handleIconMouseEnter(t)},onMouseLeave:function(t){return o.handleIconMouseLeave(t)}},e("i",{class:"ion ion-"+o.selectedIconType+"-"+t.name}))}))))):"",t.logo.length?e("div",{class:"icon-list__wrapper"},e("div",{class:"icon-list__header-bar"},e("div",{class:"container--small"},e("h4",null,"Logos"))),e("div",{class:"container--small"},e("div",{class:"icon-results"},t.logo.map((function(t){return e("span",{class:"icon-results__cell "+(o.selectedIcon===t.name?"active":""),onClick:function(e){return o.handleIconClick(e,t.name)},onMouseEnter:function(t){return o.handleIconMouseEnter(t)},onMouseLeave:function(t){return o.handleIconMouseLeave(t)}},e("i",{class:"ion ion-"+t.icon}))}))))):"",!t.icon.length&&!t.logo.length?e("div",{class:"icon-results--empty container--small"},e("h2",null,'No results for "',this.query,'"'),e("p",null,"Not finding an icon that you want? ",e("a",{href:"https://github.com/ionic-team/ionicons/issues"},"File an issue")," and suggest a new icon.")):"",e("toast-bar",{selectedIcon:i,selectedIconType:this.selectedIconType}))};Object.defineProperty(o.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return o}());s.style=n}}}));