import{r as i,h as t,g as o}from"./p-ec2fff5d.js";const s=class{constructor(t){i(this,t),this.selectedIcon="",this.selectedIconType="outline",this.isHeaderSearchVisible=!1,this.query=""}escListener(i){"Escape"===i.code&&this.selectedIcon.length&&(this.selectedIcon="")}handleBodyClicked(){this.selectedIcon.length&&(this.selectedIcon="")}handleClearToast(){this.selectedIcon=""}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}checkScroll(){const i=this.el.querySelectorAll(".icon-list__header-bar");for(let t=0;t<i.length;t++){const o=i[t];o.getBoundingClientRect().top<67?o.classList.add("sticky"):o.classList.remove("sticky")}}filterIcons(){const i=this.query.trim().toLowerCase(),t={icon:[],logo:[]};return this.data.icons.forEach(o=>{if(""===i||o.tags.some(t=>t.indexOf(i)>-1))switch(o.name.substr(0,o.name.indexOf("-"))){case"logo":t.logo.push({name:o.name});break;default:return void t.icon.push({name:o.name})}}),t}handleIconMouseEnter(i){i.target.classList.remove("mouseOff"),i.target.classList.add("mouseOver")}handleIconMouseLeave(i){i.target.classList.remove("mouseOver"),i.target.classList.add("mouseOff")}handleIconClick(i,t){i.stopPropagation(),this.selectedIcon=t}handleToggleClick(i,t){i.stopPropagation(),this.selectedIconType=t}render(){const i=this.filterIcons(),o=this.data.icons.find(i=>i.name===this.selectedIcon);let s;switch(this.selectedIconType){case"outline":s="-outline";break;case"sharp":s="-sharp";break;default:s=""}return i.icon.length||i.logo.length||!this.isHeaderSearchVisible||(document.documentElement.scrollTop=0),t("div",{class:"icon-list"},t("div",{class:"icon-list__search container--small"},t("icon-search",{query:this.query,size:"large",autoFocus:"autofocus"})),i.icon.length?t("div",{class:"icon-list__wrapper"},t("div",{class:"icon-list__header-bar"},t("div",{class:"container--small"},t("h4",null,"App icons"),t("ul",{class:"toggle"},t("li",{class:"toggle__item "+("outline"===this.selectedIconType?"active":""),onClick:i=>this.handleToggleClick(i,"outline")},"Outline"),t("li",{class:"toggle__item "+("filled"===this.selectedIconType?"active":""),onClick:i=>this.handleToggleClick(i,"filled")},"Filled"),t("li",{class:"toggle__item "+("sharp"===this.selectedIconType?"active":""),onClick:i=>this.handleToggleClick(i,"sharp")},"Sharp")))),t("div",{class:"container--small"},t("div",{class:"icon-results"},i.icon.map(i=>t("span",{class:"icon-results__cell "+(this.selectedIcon===i.name?"active":""),onClick:t=>this.handleIconClick(t,i.name),onMouseEnter:i=>this.handleIconMouseEnter(i),onMouseLeave:i=>this.handleIconMouseLeave(i)},t("svg",null,t("use",{xlinkHref:"#"+(i.name+s)}))))))):"",i.logo.length?t("div",{class:"icon-list__wrapper"},t("div",{class:"icon-list__header-bar"},t("div",{class:"container--small"},t("h4",null,"Logos"))),t("div",{class:"container--small"},t("div",{class:"icon-results"},i.logo.map(i=>t("span",{class:"icon-results__cell "+(this.selectedIcon===i.name?"active":""),onClick:t=>this.handleIconClick(t,i.name),onMouseEnter:i=>this.handleIconMouseEnter(i),onMouseLeave:i=>this.handleIconMouseLeave(i)},t("svg",null,t("use",{xlinkHref:"#"+i.name}))))))):"",i.icon.length||i.logo.length?"":t("div",{class:"icon-results--empty container--small"},t("h2",null,'No results for "',this.query,'"'),t("p",null,"Not finding an icon that you want? ",t("a",{href:"https://github.com/ionic-team/ionicons/issues"},"File an issue")," and suggest a new icon.")),t("toast-bar",{selectedIcon:o,selectedIconType:this.selectedIconType,typeSuffix:s,version:this.data.version}))}get el(){return o(this)}};s.style="icon-list .icon-list{margin-bottom:100px}icon-list .icon-list__search+.icon-list__wrapper{padding-top:90px}icon-list .icon-list__header-bar{-webkit-transition:-webkit-box-shadow 0.6s;transition:-webkit-box-shadow 0.6s;transition:box-shadow 0.6s;transition:box-shadow 0.6s, -webkit-box-shadow 0.6s;margin-bottom:14px;height:52px;background-color:#fff;-webkit-box-shadow:0;box-shadow:0;z-index:99}icon-list .icon-list__header-bar.sticky{position:-webkit-sticky;position:sticky;top:58px;-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.06);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.06)}icon-list .icon-list__header-bar .container--small{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}icon-list .icon-list__header-bar h4{margin-top:21px;margin-bottom:0}icon-list .icon-results{display:grid;grid-template-columns:repeat(auto-fill, minmax(70px, 1fr));grid-auto-rows:minmax(70px, auto);grid-gap:0.5em;padding-bottom:60px;margin-left:-20px;margin-right:-20px}icon-list .icon-results__cell,icon-list .icon-results .ion{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}icon-list .icon-results__cell{-webkit-transition:background-color 0.4s;transition:background-color 0.4s;cursor:pointer;border-radius:8px;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(236, 240, 246, 0.4)}icon-list .icon-results__cell svg{width:32px;height:32px;color:#373737}icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:shadowIn;animation-name:shadowIn;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes shadowIn{from{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}}@keyframes shadowIn{from{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}}icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{-webkit-animation-name:shadowOut;animation-name:shadowOut;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}icon-list .icon-results__cell.active{-webkit-animation-duration:0.3s;animation-duration:0.3s}@-webkit-keyframes shadowOut{from{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}to{-webkit-box-shadow:0;box-shadow:0}}@keyframes shadowOut{from{-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}to{-webkit-box-shadow:0;box-shadow:0}}icon-list .icon-results__cell.active{background-color:var(--color-catskill-white);cursor:default}icon-list .icon-results--empty{text-align:center;padding-top:70px}icon-list .icon-results--empty h2{margin-top:0}icon-list .toggle{list-style-type:none;display:-ms-flexbox;display:flex;margin-right:-4px;position:relative;bottom:-3px;margin-top:18px}icon-list .toggle__item{-webkit-transition:opacity 0.3s, padding-bottom 0.1s;transition:opacity 0.3s, padding-bottom 0.1s;opacity:0.5;text-decoration:none;font-size:13px;font-weight:600;color:var(--color-dodger-blue);border-bottom:2px solid transparent}icon-list .toggle__item:not(.active){cursor:pointer}icon-list .toggle__item:hover,icon-list .toggle__item.active{opacity:1}icon-list .toggle__item.active{border-bottom:2px solid var(--color-dodger-blue);padding-bottom:2px}icon-list .toggle__item+.toggle__item{margin-left:20px}icon-list .icon-list__header-bar.sticky .toggle__item{padding-bottom:11px}@media screen and (max-width: 768px){icon-list .icon-results{margin-left:0;margin-right:0}icon-list .icon-list__search+.icon-list__wrapper{padding-top:40px}}@media screen and (max-width: 560px){icon-list .icon-results__cell:not(.active).mouseOver,icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell.active{-webkit-animation-name:none;animation-name:none;-webkit-box-shadow:0;box-shadow:0}}";export{s as icon_list}