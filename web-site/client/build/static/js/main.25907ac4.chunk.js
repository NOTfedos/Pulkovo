(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/Apple.4f91b446.png"},24:function(e,t,a){e.exports=a.p+"static/media/Icon.7a0e9986.svg"},25:function(e,t,a){e.exports={addictions:"Addictions_addictions__84CUi"}},26:function(e,t,a){e.exports={addictionNav:"AddictionNav_addictionNav__2k0x4"}},28:function(e,t,a){e.exports=a.p+"static/media/Upload.67336228.svg"},29:function(e,t,a){e.exports={pageWrapper:"PageWrapper_pageWrapper__3ABLp"}},32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},38:function(e,t,a){},5:function(e,t,a){e.exports={pulHeader:"Header_pulHeader__3ZGjM",pulIcon:"Header_pulIcon__6Iemz",pulText:"Header_pulText__r_vaO",appleIcon:"Header_appleIcon__1jVMM"}},6:function(e,t,a){e.exports={navItem:"AddictionNavItem_navItem__OwGjN",navItemActive:"AddictionNavItem_navItemActive__27h8a",navItemInactive:"AddictionNavItem_navItemInactive__2zNnD",navItemLoaded:"AddictionNavItem_navItemLoaded__21Y8B",navItemText:"AddictionNavItem_navItemText__1DcxP"}},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),o=a.n(i),l=(a(37),a(38),a(39),a(5)),r=a.n(l),d=a(24),u=a.n(d),m=a(11),s=a.n(m),p=function(){return c.a.createElement("header",{className:"d-flex fixed-top align-items-center "+r.a.pulHeader},c.a.createElement("div",{className:r.a.pulIcon},c.a.createElement("img",{src:u.a,alt:"icon"})),c.a.createElement("span",{className:r.a.pulText},"\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f ",c.a.createElement("img",{src:s.a,alt:"apple",className:r.a.appleIcon}),c.a.createElement("img",{src:s.a,alt:"apple",className:r.a.appleIcon}),"(18+)"))},_=a(25),v=a.n(_),I=a(26),f=a.n(I),E=a(2),N=a(14),A=a.n(N),O=function(e){return{type:"SET_CURRENT_ADDICTION_NUMBER",payload:e}},b=function(e){return{type:"SET_RESULTS_LOADING",payload:e}},g=function(e){return{type:"ADD_LOADED_ADDICTION",payload:e}},D=a(6),T=a.n(D),h=function(e){var t=Object(E.c)((function(e){return e.addiction})),a=t.addictionNum===e.addictionNum,n=t.loadedAddictions.filter((function(t){return t.num===e.addictionNum}))[0],i=Object(E.b)();return c.a.createElement("div",{className:"".concat(a?T.a.navItemActive:T.a.navItemInactive," ").concat(n?T.a.navItemLoaded:""," ").concat(T.a.navItem),onClick:function(){return i(O(e.addictionNum))}},c.a.createElement("span",{className:T.a.navItemText},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 ",e.addictionNum))},x=a(7),j=a.n(x),L=function(){var e=Object(E.c)((function(e){return e.addiction})),t="result"===e.addictionNum,a=e.resultsAvailable,n=Object(E.b)();return c.a.createElement("div",{className:"".concat(t?j.a.navItemActive:j.a.navItemInactive," ").concat(a?"":j.a.navItemUnavailable," ").concat(j.a.navItem),onClick:a?function(){return n(O("result"))}:null},c.a.createElement("span",{className:j.a.navItemText},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"))},w=function(){return c.a.createElement("div",{className:"d-flex ".concat(f.a.addictionNav," align-items-end")},[1,2,3,4,5].map((function(e){return c.a.createElement(h,{addictionNum:e,key:e})})),c.a.createElement(L,null))},y=a(8),S=a.n(y),U=a(28),R=a.n(U),B=function(){var e=Object(E.c)((function(e){return e.addiction})),t=e.addictionNum,a=e.resultsLoading,n=e.loadedAddictions.filter((function(e){return e.num===t}))[0],i=Object(E.b)();return c.a.createElement("div",{className:S.a.addictionBlock},"result"!==t?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"file",name:"application".concat(t),id:t,onChange:function(e){return i(function(e,t){return function(a,n){var c=n().addiction,i=c.loadedAddictions.filter((function(t){return t.num===e}))[0],o=new FormData;o.append("application".concat(e),t),A.a.post("http://localhost:3001/api/upload",o).then((function(t){if(t.data){var n={num:e,fileUrl:t.data.fileUrl};a(i?function(e){return{type:"SET_LOADED_ADDICTION",payload:e}}(n):g(n)),4!==c.loadedAddictions.length&&6!==c.loadedAddictions.length||(a(b(!1)),A.a.get("http://localhost:3001/api/download").then((function(e){return a({type:"SET_RESULTS_AVAILABLE",payload:!0}&&a(g({num:"result",fileUrl:e.data.fileUrl})))})).then((function(){return a(b(!1))})))}}))}}(t,e.target.files[0]))},className:S.a.fileInput}),c.a.createElement("label",{htmlFor:t,className:"".concat(S.a.inputLabel)},c.a.createElement("img",{src:R.a,alt:"upload",height:"20px"})," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b")):c.a.createElement(c.a.Fragment,null),n&&!a?c.a.createElement("iframe",{src:n.fileUrl,width:"100%",height:"100%",scrolling:"auto",className:S.a.addIframe}):c.a.createElement("img",{src:"https://media.tenor.co/videos/2c0704c2acccabedf4d82093214ea315/mp4",alt:""}))},k=function(){return c.a.createElement("div",{className:"d-flex flex-column flex-grow-1 ".concat(v.a.addictions)},c.a.createElement(w,null),c.a.createElement(B,null))},C=a(29),H=a.n(C),W=function(e){var t=e.children;return c.a.createElement("div",{className:"".concat(H.a.pageWrapper," d-flex flex-column")},t)},M=function(){return c.a.createElement(W,null,c.a.createElement(p,null),c.a.createElement(k,null))};var V=function(){return c.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(4),F=a(30),G=a(31),z=a(3),J={addictionNum:1,loadedAddictions:[],resultsAvailable:!1,resultsLoading:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ADDICTION_NUMBER":return Object(z.a)(Object(z.a)({},e),{},{addictionNum:t.payload});case"ADD_LOADED_ADDICTION":return Object(z.a)(Object(z.a)({},e),{},{loadedAddictions:[].concat(Object(G.a)(e.loadedAddictions),[t.payload])});case"SET_LOADED_ADDICTION":return Object(z.a)(Object(z.a)({},e),{},{loadedAddictions:e.loadedAddictions.map((function(e){return e.num===t.payload.num?t.payload:e}))});case"SET_RESULTS_AVAILABLE":return Object(z.a)(Object(z.a)({},e),{},{resultsAvailable:t.payload});case"SET_RESULTS_LOADING":return Object(z.a)(Object(z.a)({},e),{},{resultsLoading:t.payload});default:return e}},Q=Object(X.c)({addiction:P}),Y=Object(X.e)(Q,Object(X.d)(Object(X.a)(F.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));o.a.render(c.a.createElement(E.a,{store:Y},c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={navItem:"ResultNavItem_navItem__jwNj_",navItemActive:"ResultNavItem_navItemActive__3xvu1",navItemInactive:"ResultNavItem_navItemInactive__3j8eB",navItemText:"ResultNavItem_navItemText__3HlfX",navItemUnavailable:"ResultNavItem_navItemUnavailable__2tz_P"}},8:function(e,t,a){e.exports={addictionBlock:"AddictionBlock_addictionBlock__onD2Q",fileInput:"AddictionBlock_fileInput__192t_",inputLabel:"AddictionBlock_inputLabel__33dtA",addIframe:"AddictionBlock_addIframe__wTwJj"}}},[[32,1,2]]]);
//# sourceMappingURL=main.25907ac4.chunk.js.map