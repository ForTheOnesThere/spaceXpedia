(this.webpackJsonpspacexpedia=this.webpackJsonpspacexpedia||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=(a(18),a(12)),o=a(1),l=a.n(o),u=a(6),m=a(2),h=a(3),d=a(5),f=a(4),p=(a(8),a(11)),v=a.n(p),b=(a(20),a(21),function(){return c.a.createElement("div",{className:"scroll-master"},c.a.createElement("div",{className:"scroll-container"},c.a.createElement("div",{className:"chevron"}),c.a.createElement("div",{className:"chevron"}),c.a.createElement("div",{className:"chevron"})))}),g=(a(9),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).updateTminusString=function(e){var t=e,a=Date.now()/1e3,c=t-Math.floor(a),i=c/86400,r=Math.floor(i),s=c%86400/3600,o=Math.floor(s),l=c%86400%3600/60,u=Math.floor(l),m=c-86400*r-3600*o-60*u,h="T- ".concat(("00"+r).substr(-3),":").concat(("0"+o).substr(-2),":").concat(("0"+u).substr(-2),":").concat(("0"+m).substr(-2));n.setState({tMinusTime:h})},n.fetchLaunchData=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/launches/next");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),n.state={nameOfNextLaunch:"Loading...",nextLaunchTimeUnix:"Loading...",tMinusTime:"Loading...",dateString:"Loading..."},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"countdown",className:"scroll-child"},c.a.createElement("div",{className:"countdown-container"},c.a.createElement("div",{className:"display-container"},c.a.createElement("div",{className:"launch-name c-element"},this.state.nameOfNextLaunch),c.a.createElement("div",{className:"t-minus c-element"},c.a.createElement("span",{className:"border"},this.state.tMinusTime)),c.a.createElement("div",{className:"launch-date c-element"},"The launch is: ",this.state.dateString)),c.a.createElement("div",null,c.a.createElement(v.a,{selector:"#launch-info"},c.a.createElement(b,null)))))}},{key:"componentDidMount",value:function(){var e=this;console.log("Countdown component mounted successfully!"),this.fetchLaunchData().then((function(t){var a=new Date(1e3*t.launch_date_unix);e.setState({nameOfNextLaunch:t.mission_name,nextLaunchTimeUnix:t.launch_date_unix,dateString:a.toString()})})).catch((function(e){return console.log(e)})),setInterval((function(){return e.updateTminusString(e.state.nextLaunchTimeUnix)}),100)}}]),a}(n.Component)),E=(a(22),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).fetchLaunchData=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/launches/next");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),n.state={patchUrl:"",launchInformation:"Loading...",flightNumber:"Loading...",launchSite:"Loading...",landingZone:"Loading...",missionName:"Loading...",redditLink:"Loading...",boosterFlightNumber:"Loading..."},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"launch-info",className:"scroll-child"},c.a.createElement("div",{className:"launch-info-container"},c.a.createElement("div",{className:"info-display-container"},c.a.createElement("div",{className:"info-top"},c.a.createElement("div",null,c.a.createElement("img",{src:this.state.patchUrl,alt:"Mission Patch"})),c.a.createElement("div",{className:"launch-facts"},c.a.createElement("p",null,"Mission: ",this.state.missionName,c.a.createElement("br",null),c.a.createElement("br",null),"This is launch number ",this.state.flightNumber," for SpaceX",c.a.createElement("br",null),c.a.createElement("br",null),"Launch Site: ",this.state.launchSite,c.a.createElement("br",null),c.a.createElement("br",null),"Landing Zone: ",this.state.landingZone,c.a.createElement("br",null),c.a.createElement("br",null),"The first stage core has flown ",this.state.boosterFlightNumber-1," times before. This will be flight number ",this.state.boosterFlightNumber,".",c.a.createElement("br",null),c.a.createElement("br",null),"Be a part of the launch campaign with us on ",c.a.createElement("a",{href:this.state.redditLink},"Reddit"),"!"))),c.a.createElement("div",{className:"info-bottom"},c.a.createElement("p",{className:"scrollable"},this.state.launchInformation)))))}},{key:"componentDidMount",value:function(){var e=this;console.log("Launch Information component mounted successfully!"),this.fetchLaunchData().then((function(t){var a,n=t.rocket.first_stage.cores[0].landing_vehicle;a="JRTI"===n?"Just Read The Instructions":"OCISLY"===n?"Of Course I Still Love You":n,e.setState({patchUrl:t.links.mission_patch,launchInformation:t.details,flightNumber:t.flight_number,launchSite:t.launch_site.site_name_long,landingZone:a,missionName:t.mission_name,redditLink:t.links.reddit_campaign,boosterFlightNumber:t.rocket.first_stage.cores[0].flight})})).catch((function(e){return console.log(e)}))}}]),a}(n.Component)),k=(a(23),a(24),function(e){return c.a.createElement("div",{className:"search-container"},c.a.createElement("input",{className:"search-input",type:"text",onChange:e.search,placeholder:"Search..."}))}),w=function(e){var t=e.onMissionSearchClick,a=e.onUpcomingSearchClick,n=e.currentView,i=e.search;return c.a.createElement("section",{id:"nav-bar",className:"scroll-child"},c.a.createElement("div",{className:"nav-bar-container"},c.a.createElement("div",{className:"search-bar"},c.a.createElement(k,{search:i})),c.a.createElement("button",{id:"missions",className:"missions"===n?"active mission-button":"notActive mission-button",onClick:t},"Missions"),c.a.createElement("button",{id:"upcoming",className:"upcoming"===n?"active upcoming-button":"notActive upcoming-button",onClick:a},"Upcoming")))},N=(a(25),function(e){var t=e.photoLink,a=e.missionName,n=e.id,i=e.resourceClick;return c.a.createElement("div",{key:n,id:n,onClick:function(){return i(n)},className:"mission-card grow tc dib br4 pa3 ma2 bw2 shadow-5"},c.a.createElement("div",{className:"card-title-container"},c.a.createElement("img",{className:"card-image",src:t,alt:"missionName"}),c.a.createElement("p",{className:"mission-title"},a)))}),S=function(e){var t=function(){switch(e.state.viewMode){case"missions":return e.state.filteredDatabase.map((function(t,a){return c.a.createElement(N,{id:t.id,key:t.id,resourceClick:e.resourceClick,missionName:t.name,photoLink:t.patchUrl})}));default:return"Coming Soon!"}}();return c.a.createElement("div",null,t)},C=(a(26),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"view"},c.a.createElement("div",{className:"view-window-container bottom-scroll"},c.a.createElement("div",{className:"view-display"},this.props.children)))}}]),a}(n.Component)),L=(a(27),function(e){console.log(e);var t=e.state.database[e.state.resourceRequested],a=new Date(1e3*t.date).toGMTString();return c.a.createElement("section",{id:"detail-screen"},c.a.createElement("div",{className:"detail-window-container"},c.a.createElement("div",{className:"patch-and-back"},c.a.createElement("div",{className:"mission-image"},c.a.createElement("img",{src:t.patchUrl,onClick:e.back,alt:"Mission Patch"}))),c.a.createElement("div",{className:"mission-title",style:{border:"0px solid transparent",fontSize:"25px"}},t.name,c.a.createElement("br",null),c.a.createElement("div",{className:"subtitle"},"(Click patch to return)")),c.a.createElement("p",{style:{padding:"3vh 3vw",margin:"0px 0px"}},"Launched: ",t.launchSite,", ",a,c.a.createElement("br",null),"Launch Information: ",t.details," ",c.a.createElement("br",null),"Link: ",c.a.createElement("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},"Video link")," ",c.a.createElement("br",null),"Orbit: ",t.orbit,c.a.createElement("br",null))))}),x=(a(28),function(e){return!1===e.allData.isInfoView?c.a.createElement(C,null,c.a.createElement(S,{state:e.allData,resourceClick:e.resourceClick})):c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null,c.a.createElement(L,{state:e.allData,back:e.back})))}),y=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).buildDatabase=Object(u.a)(l.a.mark((function e(){var t,a,c,i,r,s,o,u,m,h,d,f,p,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.fetchLaunchData();case 3:for(t=e.sent,a=t.map((function(e){return e.mission_name})),c=t.map((function(e){return e.launch_site.site_name_long})),i=t.map((function(e){return e.links.mission_patch_small})),r=t.map((function(e){return e.launch_date_unix})),s=t.map((function(e){return e.details})),o=t.map((function(e){return e.links.video_link})),u=t.map((function(e){return e.rocket.second_stage.payloads[0].payload_id})),m=t.map((function(e){return e.rocket.second_stage.payloads[0].orbit})),h=t.map((function(e){return e.rocket.second_stage.payloads[0].payload_mass_kg})),d=t.map((function(e){return e.launch_success})),f=[],p=0;p<a.length;p++)null===(v={id:p,name:a[p],date:r[p],patchUrl:i[p],launchSite:c[p],details:s[p],videoUrl:o[p],primary_payload:u[p],orbit:m[p],payload_mass:h[p],success:d[p]}).details&&(v.details="None Available"),f.push(v);n.setState({database:f,filteredDatabase:f}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("Looks like somethings wrong...",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),n.fetchLaunchData=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/launches/past");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),n.onMissionSearchClick=function(e){n.setState({viewMode:"missions",isInfoView:!1})},n.onCoresSearchClick=function(e){n.setState({viewMode:"cores",isInfoView:!1})},n.onPayloadsSearchClick=function(e){n.setState({viewMode:"payloads",isInfoView:!1})},n.onUpcomingSearchClick=function(e){n.setState({viewMode:"upcoming",isInfoView:!1})},n.resourceClick=function(e){n.setState({resourceRequested:e,isInfoView:!0})},n.goBack=function(){n.setState({isInfoView:!1})},n.searchFunction=function(e){switch(n.state.viewMode){case"missions":var t,a,c=[],i=Object(s.a)(n.state.database);try{for(i.s();!(a=i.n()).done;)(t=a.value).name.toLowerCase().includes(e.target.value.toLowerCase())&&c.push(t)}catch(r){i.e(r)}finally{i.f()}n.setState({filteredDatabase:c});break;default:return null}},n.state={viewMode:"missions",database:[],isInfoView:!1,resourceRequested:"",filteredDatabase:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){console.log("App successfully mounted!"),this.buildDatabase()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App scroll-parent"},c.a.createElement(g,null),c.a.createElement(E,null),c.a.createElement(x,{allData:this.state,back:this.goBack,resourceClick:this.resourceClick}),c.a.createElement(w,{onMissionSearchClick:this.onMissionSearchClick,onCoresSearchClick:this.onCoresSearchClick,onPayloadsSearchClick:this.onPayloadsSearchClick,onUpcomingSearchClick:this.onUpcomingSearchClick,currentView:this.state.viewMode,search:this.searchFunction}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.65b8d85e.chunk.js.map