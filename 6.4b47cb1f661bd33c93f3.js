(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"94IY":function(n,t){},Uyrl:function(n,t,u){"use strict";u.r(t);var l=u("CcnG"),a=u("F31f"),o=u("67Y/"),c=u("VnD/"),r=u("15JJ"),e=(u("94IY"),function(){function n(n,t){var u=this;this.svc=n,this.route=t,this.route.queryParams.subscribe(function(n){u.matchId=n.matchId,console.log(u.matchId)}),console.log(this.matchId),this.GameDetail$=t.queryParams.pipe(Object(o.a)(function(n){return n.matchId}),Object(c.a)(function(n){return!!n}),Object(r.a)(function(t){return n.getGameDetail(u.matchId)})),console.log(this.matchId)}return n.prototype.ngOnInit=function(){},n}()),i=function(){return function(){}}(),s=u("pMnS"),b=u("ZYCi"),h=l.ob({encapsulation:0,styles:[[""]],data:{}});function p(n){return l.Gb(0,[(n()(),l.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Eb(-1,null,[" game-dashboard works!\n"]))],null,null)}function d(n){return l.Gb(0,[(n()(),l.qb(0,0,null,null,1,"app-game-dashboard",[],null,null,null,p,h)),l.pb(1,114688,null,0,e,[a.a,b.a],null,null)],function(n,t){n(t,1,0)},null)}var f=l.mb("app-game-dashboard",e,d,{},{},[]),m=u("Ip0R");u.d(t,"GameDashboardModuleNgFactory",function(){return I});var I=l.nb(i,[],function(n){return l.wb([l.xb(512,l.j,l.cb,[[8,[s.a,f]],[3,l.j],l.y]),l.xb(4608,m.l,m.k,[l.v,[2,m.s]]),l.xb(1073742336,m.c,m.c,[]),l.xb(1073742336,b.l,b.l,[[2,b.r],[2,b.k]]),l.xb(1073742336,i,i,[]),l.xb(1024,b.i,function(){return[[{path:"",component:e}]]},[])])})}}]);