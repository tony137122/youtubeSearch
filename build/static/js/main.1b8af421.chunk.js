(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),u=(n(88),n(45)),s=n(55),l=n(11),i=n(57),p=n(22),E=n(12),h={searcText:"React JS Conf",totalCount:0,result:[],loading:!1,error:!1};var f=Object(l.c)({YoutubeSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.a.YOUTUBE_SEARCH:return Object(p.a)({},e,{loading:!0,searcText:t.payload.searcText});case E.a.YOUTUBE_SUCCESS_RESULT:return Object(p.a)({},e,{loading:!1,error:!1,result:t.result,totalCount:t.totalCount,prevPageToken:t.prevPageToken,nextPageToken:t.nextPageToken});case E.a.YOUTUBE_ERROR_RESULT:return Object(p.a)({},e,{loading:!1,error:!1,result:[]});default:return e}}}),S=n(8),U=n.n(S),b=n(13),O=n(47),T=n(42),m=U.a.mark(y),d=U.a.mark(R),v="https://www.googleapis.com/youtube/v3/search?maxResults=".concat(10,"&type=video&key=").concat(T.a,"&part=snippet"),g=function(){var e=Object(O.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"&q=").concat(encodeURIComponent(t)).concat(n)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function y(e){var t,n,a,r;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.searcText,a=t.pageToken,c.prev=2,c.next=5,Object(b.b)(g,n,a?"&pageToken=".concat(a):"");case 5:if(!(r=c.sent).items){c.next=11;break}return c.next=9,Object(b.c)(E.a.youtubeSearchSuccess(r.items,r.pageInfo.totalResults,r.nextPageToken,r.prevPageToken));case 9:c.next=13;break;case 11:return c.next=13,Object(b.c)(E.a.youtubeSearchSuccess());case 13:c.next=20;break;case 15:return c.prev=15,c.t0=c.catch(2),console.log(c.t0),c.next=20,Object(b.c)(E.a.youtubeSearchSuccess());case 20:case"end":return c.stop()}}),m,null,[[2,15]])}function R(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.d)(E.a.YOUTUBE_SEARCH,y)]);case 2:case"end":return e.stop()}}),d)}var k=U.a.mark(x);function x(e){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([R()]);case 2:case"end":return e.stop()}}),k)}var j,w=Object(i.a)(),C=[w],_=Object(l.e)(f,(j=C,l.a.apply(void 0,Object(s.a)(j))));w.run(x);var B=n(53),Y=n(15),P=n(48),L=n(49),A=n(56),H=n(50),I=n(58),z=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(A.a)(this,Object(H.a)(t).call(this,e))).state={hasError:!1},n}return Object(I.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("p",null,"Loading failed! Please reload."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),J=n(112),q=[{path:"",component:Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,330))})),exact:!0}];function D(){return r.a.createElement(z,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(J.a,null)},r.a.createElement(B.a,null,r.a.createElement(Y.c,null,q.map((function(e,t){return r.a.createElement(Y.a,{key:t,path:e.path,exact:e.exact},r.a.createElement(e.component,null))}))))))}n(107),n(108);var F=function(){return r.a.createElement(u.a,{store:_},r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,t,n){"use strict";var a={YOUTUBE_SEARCH:"YOUTUBE_SEARCH",YOUTUBE_SUCCESS_RESULT:"YOUTUBE_SUCCESS_RESULT",YOUTUBE_ERROR_RESULT:"YOUTUBE_ERROR_RESULT",youtubeSearch:function(e){return{type:a.YOUTUBE_SEARCH,payload:{searcText:e}}},onPageChange:function(e,t){return{type:a.YOUTUBE_SEARCH,payload:{searcText:e,pageToken:t}}},youtubeSearchSuccess:function(e,t,n,r){return{type:a.YOUTUBE_SUCCESS_RESULT,result:e,totalCount:t,nextPageToken:n,prevPageToken:r}},youtubeSearchError:function(){return{type:a.YOUTUBE_ERROR_RESULT}}};t.a=a},42:function(e,t,n){"use strict";t.a="AIzaSyDkho4IpIg5-fk2RqyypMHzP4A0wwdeVOk"},83:function(e,t,n){e.exports=n(109)},88:function(e,t,n){}},[[83,1,3]]]);
//# sourceMappingURL=main.1b8af421.chunk.js.map