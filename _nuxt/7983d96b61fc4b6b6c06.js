(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){"use strict";(function(t){e.a={name:"CalendarSection",computed:{baseUrl:function(){return t.env.baseUrl}}}}).call(this,n(72))},352:function(t,e,n){"use strict";var o=n(0),r=n.n(o),c={name:"VigotechVideoPlayer",props:{video:{type:[Object],required:!0},preferExternal:{type:Boolean,default:!1},showTitles:{type:Boolean,default:!1}},methods:{getVideoOptions:function(video){return{sources:[{type:"video/mp4",src:video.src}],poster:video.thumbnail}},pubDate:function(t){return r()(t).format("dddd, D MMMM YYYY")}}},l=n(16),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["youtube"==t.video.player?n("div",[t.preferExternal?n("a",{attrs:{href:"//www.youtube.com/watch?v="+t.video.id,target:"_blank"}},[n("img",{attrs:{src:t.video.thumbnails.medium.url}}),t._v(" "),n("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]),t._v(" "),n("h2",[t._v(t._s(t.video.title))])]):n("div",[n("div",{staticClass:"embed-responsive  embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:"//www.youtube-nocookie.com/embed/"+t.video.id,frameborder:"0",allowfullscreen:""}})]),t._v(" "),t.showTitles?n("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?n("h2",[t._v(t._s(t.video.title))]):t._e()])]):t._e(),t._v(" "),"native"==t.video.player?n("div",{staticClass:"video-player-container"},[n("no-ssr",[n("div",{directives:[{name:"video-player",rawName:"v-video-player:videoPlayer",value:t.getVideoOptions(t.video),expression:"getVideoOptions(video)",arg:"videoPlayer"}],staticClass:"video-player-box embed-responsive  embed-responsive-16by9",attrs:{playsinline:!0}}),t._v(" "),t.showTitles?n("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?n("h2",[t._v(t._s(t.video.title))]):t._e()])],1):t._e(),t._v(" "),"teltek"==t.video.player?n("div",{staticClass:"embed-responsive  embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://replay.teltek.es/videoplayer/"+t.video.id+"?autostart=false",frameborder:"0"}}),t._v(" "),t.showTitles?n("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?n("h2",[t._v(t._s(t.video.title))]):t._e()]):t._e()])},[],!1,null,null,null);e.a=component.exports},355:function(t,e,n){"use strict";var o=n(349);n.n(o).a},356:function(t,e,n){"use strict";var o=n(350);n.n(o).a},359:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c={name:"VigotechNextEvent",props:{nextEvent:{type:Object,default:function(){return{url:"",title:"",date:null}}}},computed:{fullTitle:function(){return"".concat(this.nextEvent.title,"\n").concat(r()(this.nextEvent.date).format("dddd, D MMMM YYYY HH:mm"))}}},l=(n(355),n(16)),v=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vigotech-next-event"},[this.nextEvent.title?e("a",{attrs:{href:this.nextEvent.url,title:this.fullTitle,date:this.nextEvent.date}},[e("i",{staticClass:"fa fa-calendar"})]):this._e()])},[],!1,null,"10c73c2c",null).exports,d={web:"globe"},h={name:"VigotechMember",components:{VigotechNextEventTip:v},filters:{toFontAwesome:function(t){return t?(void 0!==d[t]&&(t=d[t]),"fa fa-".concat(t)):""}},props:{member:{type:Object,required:!0},showNextEvent:{type:Boolean,default:!0,required:!1}}},m=(n(356),{name:"VigotechMemberList",components:{VigotechMember:Object(l.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vigotech-member"},[n("div",{staticClass:"logo-wrapper"},[n("div",{staticClass:"logo-content"},[n("img",{staticClass:"square-bg",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\n"}}),t._v(" "),n("img",{staticClass:"logo",attrs:{src:t.member.logo,alt:t.member.name}}),t._v(" "),t.showNextEvent&&t.member.nextEvent&&t.member.nextEvent.date>(new Date).getTime()?n("VigotechNextEventTip",{staticClass:"next-event",attrs:{"next-event":t.member.nextEvent}}):t._e()],1)]),t._v(" "),n("h4",{staticClass:"name"},[t._v("\n    "+t._s(t.member.name)+"\n  ")]),t._v(" "),n("div",{staticClass:"links"},t._l(t.member.links,function(link,e){return n("a",{key:e,staticClass:"link",attrs:{href:link,target:"_blank"}},[n("i",{class:t._f("toFontAwesome")(e)})])}),0)])},[],!1,null,"2ff0d8c4",null).exports},props:{members:{type:[Array,Object],required:!0}}}),_={name:"VigotechMembersSection",components:{VigotechMemberList:Object(l.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vigotech-member-list row"},this._l(this.members,function(t,n){return e("div",{key:n,staticClass:"col-xs-6 col-sm-4 col-md-3"},[e("vigotech-member",{staticClass:"box",attrs:{member:t,"next-event":t.nextEvent,"show-next-event":""}})],1)}),0)},[],!1,null,null,null).exports},props:{vigotechStructure:{type:[Object],required:!0}},data:function(){return{}},methods:{}},f=Object(l.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"wrap container-fluid",attrs:{id:"grupos"}},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n      Os grupos\n    ")])]),this._v(" "),e("vigotech-member-list",{attrs:{members:this.vigotechStructure.members||{}}})],1)},[],!1,null,null,null).exports,C={props:{nextEvents:{type:[Array],required:!1,default:function(){return[]}}},methods:{eventDate:function(t){return r()(t).format("dddd, D MMMM YYYY HH:mm")}}},x={name:"CoverSection",components:{VigotechNextEvent:Object(l.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vigotech-next-event"},[n("h4",[n("i",{staticClass:"fa fa-calendar"}),t._v(" "),1==t.nextEvents.length?n("span",[t._v("Vindeiro evento")]):n("span",[t._v("Vindeiros eventos")])]),t._v(" "),t._l(t.nextEvents,function(e,o){return n("div",{key:o,staticClass:"wrapper"},[n("div",{staticClass:"logo-wrapper"},[n("a",{attrs:{href:e.nextEvent.url}},[n("img",{staticClass:"member-logo",attrs:{src:e.logo,alt:e.name}})])]),t._v(" "),n("div",{staticClass:"next-event-content"},[n("a",{attrs:{href:e.nextEvent.url}},[n("h6",[t._v(t._s(e.name))]),t._v(" "),n("h5",[t._v(t._s(e.nextEvent.title))]),t._v(" "),n("strong",[t._v(t._s(t.eventDate(e.nextEvent.date)))]),t._v(" "),n("span",{staticClass:"btn"},[t._v("\n          Máis info\n        ")])])])])})],2)},[],!1,null,null,null).exports},props:{nextEvents:{type:[Array],required:!1,default:function(){return[]}}}},w=Object(l.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"cover"}},[n("div",{staticClass:"wrap container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 content-wrapper"},[n("div",{staticClass:"content box"},[n("img",{staticClass:"logo",attrs:{src:"logo_white.jpg",alt:"Vigo Tech Alliance"}}),t._v(" "),n("h1",[t._v("\n            Vigo Tech Alliance\n          ")]),t._v(" "),n("h2",[t._v("\n            Os grupos de tecnoloxía de Vigo facemos piña para promover a tecnoloxía na cidade\n          ")]),t._v(" "),t.nextEvents.length>0?n("VigotechNextEvent",{attrs:{"next-events":t.nextEvents}}):t._e(),t._v(" "),n("div",{staticClass:"down-wrapper"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#grupos",expression:"'#grupos'"}],staticClass:"down",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-chevron-down"})])])],1)])])])])},[],!1,null,null,null).exports,y=n(351).a,A=Object(l.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"calendar"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Calendario\n          ")])]),this._v(" "),this._m(0),this._v(" "),this._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item",staticStyle:{border:"0"},attrs:{src:"gcalendar/gcal.html",frameborder:"0",scrolling:"no"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"view-more"},[e("a",{staticClass:"btn btn-white",attrs:{href:"https://calendar.google.com/calendar/ical/orestes.io_fj8ev1vakdnl8l8o6jeljhof1s%40group.calendar.google.com/public/basic.ics"}},[this._v("\n            Preme aquí para acceder no formato iCal\n          ")])])}],!1,null,null,null).exports,E={name:"ConversationSection",computed:{cookieStatus:function(){return this.$store.state.cookieStatus}}},k=Object(l.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"conversation"}},[n("div",{staticClass:"wrap container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 content-wrapper"},[n("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[n("div",[t._v("\n            Únete a conversa\n          ")])]),t._v(" "),n("div",{staticClass:"social"},t._l(t.$store.state.config.social,function(t,e){return n("a",{key:e,attrs:{href:t.link,title:t.title}},[n("i",{class:t.icon+" fa-2x"})])}),0),t._v(" "),n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 col"},[n("a",{staticClass:"twitter-timeline",attrs:{"data-theme":"light","data-height":"400","data-width":"400","data-border-color":"#e84a5f","data-chrome":"nofooter",href:"https://twitter.com/VigoTechAllianc?ref_src=twsrc%5Etfw"}},[t._v("\n              Tweets by VigoTech Alliance\n            ")]),t._v(" "),t.cookieStatus?n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}):t._e()])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-12 col-sm-6 col"},[e("div",{staticClass:"section-content section-content-center"},[e("p",[this._v("Aberto a todo o mundo, é o punto de encontro virtual de todos os grupos e un bo sitio para facer un pouco de networking:")]),this._v(" "),e("p",[e("a",{attrs:{href:"https://vigotechalliance.slack.com"}},[e("img",{attrs:{src:"slack.png",alt:"Slack"}})])]),this._v(" "),e("p",[e("a",{staticClass:"btn",attrs:{href:"https://slackin-vigotech.herokuapp.com/"}},[this._v("\n                  Consegue unha invitación no teu correo clickando aquí\n                ")])])])])}],!1,null,null,null).exports,V={name:"VideosSection",components:{VigotechVideoPlayer:n(352).a},props:{vigotechStructure:{type:[Object],required:!0}},data:function(){return{}},computed:{recentVideos:function(){return this.$store.getters.recentVideos}}},S=Object(l.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"videos"}},[n("div",{staticClass:"wrap container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 content-wrapper"},[n("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[n("div",[t._v("\n            Charlas en video\n          ")])]),t._v(" "),n("div",{staticClass:"section-content section-content-center"},[n("p",[t._v("A maioría de charlas está gravadas e dispoñibles para o seu visionado.")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.recentVideos,function(video,t){return n("div",{key:t,staticClass:"col-xs-12 col-sm-6 video"},[n("VigotechVideoPlayer",{attrs:{video:video,"show-titles":!0}})],1)}),0),t._v(" "),n("a",{staticClass:"btn btn-white",attrs:{href:"videos"}},[t._v("\n            Ver máis\n          ")])])])])])])},[],!1,null,null,null).exports,O={name:"VigotechDocsSection"},$=Object(l.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"docs"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Documentos\n          ")])]),this._v(" "),this._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-content section-content-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/manifiesto.md"}},[this._v("\n                Manifiesto\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/codigodeconducta.md"}},[this._v("\n                Código de conducta\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/condicionsentrada.md"}},[this._v("\n                Cóndicions de entrada\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/conducta_slack.md"}},[this._v("\n                Código de conducta en Slack\n              ")])])])])}],!1,null,null,null).exports,j={name:"VigotechFriend",props:{friend:{type:Object,required:!0}}},T={name:"FriendsSection",components:{Friend:Object(l.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vigotech-friend"},[n("div",{staticClass:"logo-wrapper"},[n("div",{staticClass:"logo-content"},[n("img",{staticClass:"square-bg",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\n"}}),t._v(" "),n("a",{attrs:{href:t.friend.link}},[n("img",{staticClass:"logo",attrs:{src:t.friend.logo,alt:t.friend.name}})])])]),t._v(" "),n("h4",{staticClass:"name"},[n("a",{attrs:{href:t.friend.link}},[t._v("\n      "+t._s(t.friend.name)+"\n    ")])])])},[],!1,null,null,null).exports},props:{friends:{type:Object,required:!0}}},D={components:{VigotechDocsSection:$,VideosSection:S,ConversationSection:k,CoverSection:w,VigotechMembersSection:f,CalendarSection:A,FriendsSection:Object(l.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"friends"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Os nosos amigos\n          ")])])])]),this._v(" "),e("div",{staticClass:"row center-xs"},this._l(this.friends,function(t,n){return e("div",{key:n,staticClass:"col-xs-4 col-sm-3 col-md-2 col-lg-1"},[e("Friend",{attrs:{friend:t}})],1)}),0)])])},[],!1,null,null,null).exports},data:function(){return{docs:[],nextEventsStatic:[]}},computed:{vigotechStructure:function(){return this.$store.state.vigotechStructure},nextEventGroup:function(){return this.$store.getters.nextEventGroup},nextEvents:function(){return this.$store.getters.nextEvents},vigotechFriends:function(){return this.$store.state.friends}},mounted:function(){$nuxt.$route.hash&&this.scrollToHash()},methods:{scrollToHash:function(){var t=this,e=$nuxt.$route.hash;this.$nextTick(function(){t.$scrollTo(e,500)})}}},M=Object(l.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CoverSection",{staticClass:"page-section",attrs:{"next-events":t.nextEvents}}),t._v(" "),n("VigotechMembersSection",{staticClass:"page-section",attrs:{"vigotech-structure":t.vigotechStructure}}),t._v(" "),n("CalendarSection",{staticClass:"page-section red-bg"}),t._v(" "),n("VigotechDocsSection",{staticClass:"page-section"}),t._v(" "),n("VideosSection",{staticClass:"page-section red-bg",attrs:{"vigotech-structure":t.vigotechStructure}}),t._v(" "),n("ConversationSection",{staticClass:"page-section"}),t._v(" "),Object.keys(t.vigotechFriends).length>0?n("FriendsSection",{staticClass:"page-section red-bg",attrs:{friends:t.vigotechFriends}}):t._e()],1)},[],!1,null,null,null);e.default=M.exports}}]);