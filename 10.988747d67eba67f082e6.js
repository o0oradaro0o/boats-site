(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Sykc:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=t("F31f"),i=function(){function l(l){this.SimplePlayersList=l.getTopPlayers()}return l.prototype.ngOnInit=function(){},l}(),r=function(){function l(l,n){var t=this;this.route=n,this.route.params.subscribe(function(n){t.playerId=n.id,l.getRecentMatches(t.playerId).subscribe(function(l){t.recentGames=l}),t.ItemRecordList$=l.getPlayerItemData(t.playerId),t.BoatRecordList$=l.getPlayerBoatData(t.playerId)})}return l.prototype.ngOnInit=function(){},l}(),a=function(){return function(){}}(),o=t("pMnS"),s=t("i4+A"),c=t("1Nwh"),b=t("m46K"),m=t("OkvK"),d=t("Ip0R"),p=t("tmp7"),g=function(){function l(l,n){this.router=l,this.breakpointObserver=n}return l.prototype.ngOnChanges=function(l){var n=this;if(l.SimplePlayersList){this.filteredPlayersList||(this.filteredPlayersList=[]),this.SimplePlayersList&&this.SimplePlayersList.Content.forEach(function(l){n.filteredPlayersList.push(l)});var t=this.filteredPlayersList.slice();this.sortedData=t,this.sortedData=t.sort(function(l,n){return h(new Date(l.games),new Date(n.games),!1)})}},l.prototype.ngOnInit=function(){var l=this;this.isSmallScreen=this.breakpointObserver.isMatched("(max-width: 599px)"),this.breakpointObserver.observe(["(min-width: 500px)"]).subscribe(function(n){l.isSmallScreen=l.breakpointObserver.isMatched("(max-width: 599px)")})},l.prototype.sortData=function(l){var n=this.filteredPlayersList.slice();this.sortedData=l.active&&""!==l.direction?n.sort(function(n,t){var e="asc"===l.direction;switch(l.active){case"name":return h(n.playerName,t.playerName,e);case"games":return h(n.games,t.games,e);case"winper":return h(n.compGames>0?n.compWins/n.compGames:-1,t.compGames>0?t.compWins/t.compGames:-1,e);case"KD":return h(n.kills/n.deaths,t.kills/t.deaths,e);case"lastHits":return h(n.lastHits/n.games,t.lastHits/t.games,e);case"RecentGame":return h(new Date(n.lastGame),new Date(t.lastGame),e);default:return h(n.games,t.games,e)}}):n},l.prototype.getKDPercent=function(l){return l>3?"100%":100*l/3+"%"},l.prototype.handleClick=function(l){this.router.navigate(["/players",l])},l}();function h(l,n,t){return(l<n?-1:1)*(t?1:-1)}var f=t("ZYCi"),_=t("vGXY"),v=e.pb({encapsulation:0,styles:[[".kd-segment[_ngcontent-%COMP%]{background-color:#000;height:4px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.25rem}"]],data:{}});function I(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,2,"th",[["mat-sort-header","winper"],["title","Only counts games with >5 players"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,1)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(1,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Competitive Win % "]))],function(l,n){l(n,1,0,"winper")},function(l,n){l(n,0,0,e.Bb(n,1)._getAriaSortAttribute(),e.Bb(n,1)._isDisabled())})}function y(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,2,"th",[["mat-sort-header","KD"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,1)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(1,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["KDR"]))],function(l,n){l(n,1,0,"KD")},function(l,n){l(n,0,0,e.Bb(n,1)._getAriaSortAttribute(),e.Bb(n,1)._isDisabled())})}function G(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,2,"th",[["mat-sort-header","lastHits"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,1)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,1)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(1,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Average Last Hits "]))],function(l,n){l(n,1,0,"lastHits")},function(l,n){l(n,0,0,e.Bb(n,1)._getAriaSortAttribute(),e.Bb(n,1)._isDisabled())})}function C(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.compGames?(n.parent.context.$implicit.compWins/n.parent.context.$implicit.compGames*100).toFixed(2)+"%":"N/A")})}function S(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Gb(1,null,[" "," "])),(l()(),e.rb(2,0,null,null,2,"div",[["class","kd-segment"]],null,null,null,null,null)),e.qb(3,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(4,{width:0})],function(l,n){var t=l(n,4,0,n.component.getKDPercent(n.parent.context.$implicit.kills/n.parent.context.$implicit.deaths));l(n,3,0,t)},function(l,n){l(n,1,0,(n.parent.context.$implicit.kills/n.parent.context.$implicit.deaths).toFixed(2))})}function x(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,(n.parent.context.$implicit.lastHits/n.parent.context.$implicit.games).toFixed(2))})}function D(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,14,"tr",[["class","innerRow"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleClick(l.context.$implicit.playerID)&&e),e},null,null)),(l()(),e.rb(1,0,null,null,13,null,null,null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(3,null,["",""])),(l()(),e.rb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(5,null,["",""])),(l()(),e.ib(16777216,null,null,1,null,C)),e.qb(7,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,S)),e.qb(9,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,x)),e.qb(11,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(12,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Gb(13,null,[" "," "])),e.Eb(14,1)],function(l,n){var t=n.component;l(n,7,0,!t.isSmallScreen),l(n,9,0,!t.isSmallScreen),l(n,11,0,!t.isSmallScreen)},function(l,n){l(n,3,0,n.context.$implicit.playerName),l(n,5,0,n.context.$implicit.games);var t=e.Hb(n,13,0,l(n,14,0,e.Bb(n.parent,0),n.context.$implicit.lastGame));l(n,13,0,t)})}function B(l){return e.Ib(0,[e.Cb(0,p.a,[]),(l()(),e.rb(1,0,null,null,21,"table",[["class","table table-striped table-hover table-responsive-lg small"],["matSort",""]],null,[[null,"matSortChange"]],function(l,n,t){var e=!0;return"matSortChange"===n&&(e=!1!==l.component.sortData(t)&&e),e},null,null)),e.qb(2,737280,null,0,m.b,[],null,{sortChange:"matSortChange"}),(l()(),e.rb(3,0,null,null,16,"thead",[["class","bg-gray-100 text-gray-500"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,2,"th",[["mat-sort-header","name"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,6)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,6)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,6)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,6)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(6,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["Name"])),(l()(),e.rb(8,0,null,null,2,"th",[["mat-sort-header","games"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,9)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,9)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,9)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,9)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(9,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["Games Played"])),(l()(),e.ib(16777216,null,null,1,null,I)),e.qb(12,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,y)),e.qb(14,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,G)),e.qb(16,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(17,0,null,null,2,"th",[["mat-sort-header","RecentGame"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,18)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,18)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,18)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,18)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(18,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["Most Recent Game"])),(l()(),e.rb(20,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,D)),e.qb(22,278528,null,0,d.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,2,0),l(n,6,0,"name"),l(n,9,0,"games"),l(n,12,0,!t.isSmallScreen),l(n,14,0,!t.isSmallScreen),l(n,16,0,!t.isSmallScreen),l(n,18,0,"RecentGame"),l(n,22,0,t.sortedData)},function(l,n){l(n,5,0,e.Bb(n,6)._getAriaSortAttribute(),e.Bb(n,6)._isDisabled()),l(n,8,0,e.Bb(n,9)._getAriaSortAttribute(),e.Bb(n,9)._isDisabled()),l(n,17,0,e.Bb(n,18)._getAriaSortAttribute(),e.Bb(n,18)._isDisabled())})}var k=e.pb({encapsulation:0,styles:[[""]],data:{}});function O(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-page-banner",[["text","Player Stats"]],null,null,null,s.b,s.a)),e.qb(1,49152,null,0,c.a,[],{text:[0,"text"]},null),(l()(),e.rb(2,0,null,null,4,"div",[["class","bg-gray-vertical-emboss py-5"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,2,"players-list",[],null,null,null,B,v)),e.qb(5,638976,null,0,g,[f.k,_.a],{SimplePlayersList:[0,"SimplePlayersList"]},null),e.Cb(131072,d.b,[e.h])],function(l,n){var t=n.component;l(n,1,0,"Player Stats"),l(n,5,0,e.Hb(n,5,0,e.Bb(n,6).transform(t.SimplePlayersList)))},null)}function R(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-players",[],null,null,null,O,k)),e.qb(1,114688,null,0,i,[u.a],null,null)],function(l,n){l(n,1,0)},null)}var H=e.nb("app-players",i,R,{},{},[]),w=function(){function l(){}return l.prototype.ngOnChanges=function(l){var n=this;if(l.ItemRecordList){this.CondencedItemRecords||(this.CondencedItemRecords=[]),this.ItemRecordList&&(this.TotalSample=0,this.ItemRecordList.Content.forEach(function(l){if(l.item&&l.compGames>0&&!l.item.includes("Barrel")){n.TotalSample=n.TotalSample+l.compGames,0===n.CondencedItemRecords.length&&n.CondencedItemRecords.push(l);var t=!1;n.CondencedItemRecords.forEach(function(n){n.item===l.item&&(n.games=n.games+l.games,n.compGames=n.compGames+l.compGames,n.compWins=n.compWins+l.compWins,n.wins=n.wins+l.wins,t=!0)}),t||n.CondencedItemRecords.push(l)}}));var t=this.CondencedItemRecords.slice();this.sortedData=t,this.sortedData=t.sort(function(l,n){return P(new Date(l.compGames),new Date(n.compGames),!1)})}},l.prototype.ngOnInit=function(){},l.prototype.sortData=function(l){var n=this.CondencedItemRecords.slice();this.sortedData=l.active&&""!==l.direction?n.sort(function(n,t){var e="asc"===l.direction;switch(l.active){case"name":return P(n.item,t.item,e);case"games":return P(n.compGames,t.compGames,e);case"winper":return P(n.compGames>0?n.compWins/n.compGames:-1,t.compGames>0?t.compWins/t.compGames:-1,e);default:return P(n.compGames,t.compGames,e)}}):n},l.prototype.getPercent=function(l){return l>3?"100%":100*l/3+"%"},l}();function P(l,n,t){return(l<n?-1:1)*(t?1:-1)}var $=e.pb({encapsulation:0,styles:[[".boat-icons[_ngcontent-%COMP%]{height:40px}.segment[_ngcontent-%COMP%]{background-color:#000;height:4px}.innerRow[_ngcontent-%COMP%]:hover{cursor:default}"]],data:{}});function A(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,13,"tr",[["class","innerRow"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,12,null,null,null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,0,"img",[["class","boat-icons"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.rb(4,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Gb(5,null,[" "," "])),(l()(),e.rb(6,0,null,null,2,"div",[["class","segment"]],null,null,null,null,null)),e.qb(7,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(8,{width:0}),(l()(),e.rb(9,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Gb(10,null,[" "," "])),(l()(),e.rb(11,0,null,null,2,"div",[["class","segment"]],null,null,null,null,null)),e.qb(12,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(13,{width:0})],function(l,n){var t=n.component,e=l(n,8,0,t.getPercent(n.context.$implicit.compGames/t.TotalSample*10));l(n,7,0,e);var u=l(n,13,0,t.getPercent(n.context.$implicit.compWins/n.context.$implicit.compGames));l(n,12,0,u)},function(l,n){var t=n.component,u=e.tb(1,"","/assets/boat-icons/"+n.context.$implicit.item.split(" ").join("_").replace("'","")+".png","");l(n,3,0,u,e.tb(1,"",n.context.$implicit.item,"")),l(n,5,0,n.context.$implicit.compGames?(n.context.$implicit.compGames/t.TotalSample*100).toFixed(2)+"%":"N/A"),l(n,10,0,n.context.$implicit.compGames?(n.context.$implicit.compWins/n.context.$implicit.compGames*100).toFixed(2)+"%":"N/A")})}function M(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,15,"table",[["class","table table-striped table-hover small"],["matSort",""]],null,[[null,"matSortChange"]],function(l,n,t){var e=!0;return"matSortChange"===n&&(e=!1!==l.component.sortData(t)&&e),e},null,null)),e.qb(1,737280,null,0,m.b,[],null,{sortChange:"matSortChange"}),(l()(),e.rb(2,0,null,null,10,"thead",[["class","bg-gray-100 text-gray-500"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,2,"th",[["mat-sort-header","name"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,5)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(5,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["Name"])),(l()(),e.rb(7,0,null,null,2,"th",[["mat-sort-header","games"],["title","Only counts games with >5 players"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,8)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(8,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Use Rate "])),(l()(),e.rb(10,0,null,null,2,"th",[["mat-sort-header","winper"],["title","Only counts games with >5 players"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,11)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(11,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Competitive Win Rate "])),(l()(),e.rb(13,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,A)),e.qb(15,278528,null,0,d.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0),l(n,5,0,"name"),l(n,8,0,"games"),l(n,11,0,"winper"),l(n,15,0,t.sortedData)},function(l,n){l(n,4,0,e.Bb(n,5)._getAriaSortAttribute(),e.Bb(n,5)._isDisabled()),l(n,7,0,e.Bb(n,8)._getAriaSortAttribute(),e.Bb(n,8)._isDisabled()),l(n,10,0,e.Bb(n,11)._getAriaSortAttribute(),e.Bb(n,11)._isDisabled())})}var q=function(){function l(){}return l.prototype.ngOnChanges=function(l){var n=this;if(l.ItemRecordList){this.CondencedItemRecords||(this.CondencedItemRecords=[]),this.ItemRecordList&&(this.TotalSample=0,this.ItemRecordList.Content.forEach(function(l){l.item&&l.compGames>0&&!l.item.includes("lorne")&&!l.item.includes("caulk")&&!l.item.includes("combo")&&(n.TotalSample=n.TotalSample+l.compGames,n.CondencedItemRecords.push(l))}));var t=this.CondencedItemRecords.slice();this.sortedData=t,this.sortedData=t.sort(function(l,n){return L(new Date(l.compGames),new Date(n.compGames),!1)})}},l.prototype.ngOnInit=function(){},l.prototype.sortData=function(l){var n=this.CondencedItemRecords.slice();this.sortedData=l.active&&""!==l.direction?n.sort(function(n,t){var e="asc"===l.direction;switch(l.active){case"name":return L(n.item,t.item,e);case"games":return L(n.compGames,t.compGames,e);case"winper":return L(n.compGames>0?n.compWins/n.compGames:-1,t.compGames>0?t.compWins/t.compGames:-1,e);default:return L(n.compGames,t.compGames,e)}}):n},l.prototype.getPercent=function(l){return l>3?"100%":100*l/3+"%"},l}();function L(l,n,t){return(l<n?-1:1)*(t?1:-1)}var E=e.pb({encapsulation:0,styles:[[".item-icons[_ngcontent-%COMP%]{height:40px}.segment[_ngcontent-%COMP%]{background-color:#000;height:4px}.innerRow[_ngcontent-%COMP%]:hover{cursor:default}"]],data:{}});function N(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,13,"tr",[["class","innerRow"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,12,null,null,null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,0,"img",[["class","item-icons"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.rb(4,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Gb(5,null,[" "," "])),(l()(),e.rb(6,0,null,null,2,"div",[["class","segment"]],null,null,null,null,null)),e.qb(7,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(8,{width:0}),(l()(),e.rb(9,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Gb(10,null,[" "," "])),(l()(),e.rb(11,0,null,null,2,"div",[["class","segment"]],null,null,null,null,null)),e.qb(12,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(13,{width:0})],function(l,n){var t=n.component,e=l(n,8,0,t.getPercent(n.context.$implicit.compGames/t.TotalSample*18));l(n,7,0,e);var u=l(n,13,0,t.getPercent(n.context.$implicit.compWins/n.context.$implicit.compGames));l(n,12,0,u)},function(l,n){var t=n.component,u=e.tb(1,"","/assets/items/"+n.context.$implicit.item.replace("item_","")+".png","");l(n,3,0,u,e.tb(1,"",n.context.$implicit.item,"")),l(n,5,0,n.context.$implicit.compGames?(n.context.$implicit.compGames/t.TotalSample*100).toFixed(2)+"%":"N/A"),l(n,10,0,n.context.$implicit.compGames?(n.context.$implicit.compWins/n.context.$implicit.compGames*100).toFixed(2)+"%":"N/A")})}function F(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,15,"table",[["class","table table-striped table-hover small"],["matSort",""]],null,[[null,"matSortChange"]],function(l,n,t){var e=!0;return"matSortChange"===n&&(e=!1!==l.component.sortData(t)&&e),e},null,null)),e.qb(1,737280,null,0,m.b,[],null,{sortChange:"matSortChange"}),(l()(),e.rb(2,0,null,null,10,"thead",[["class","bg-gray-100 text-gray-500"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,2,"th",[["mat-sort-header","name"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,5)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,5)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(5,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,["Name"])),(l()(),e.rb(7,0,null,null,2,"th",[["mat-sort-header","games"],["title","Only counts games with >5 players"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,8)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,8)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(8,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Use Rate "])),(l()(),e.rb(10,0,null,null,2,"th",[["mat-sort-header","winper"],["title","Only counts games with >5 players"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"longpress"],[null,"mouseleave"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,11)._handleClick()&&u),"mouseenter"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!0)&&u),"longpress"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!0)&&u),"mouseleave"===n&&(u=!1!==e.Bb(l,11)._setIndicatorHintVisible(!1)&&u),u},b.b,b.a)),e.qb(11,245760,null,0,m.c,[m.d,e.h,[2,m.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Gb(-1,0,[" Competitive Win Rate "])),(l()(),e.rb(13,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,N)),e.qb(15,278528,null,0,d.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0),l(n,5,0,"name"),l(n,8,0,"games"),l(n,11,0,"winper"),l(n,15,0,t.sortedData)},function(l,n){l(n,4,0,e.Bb(n,5)._getAriaSortAttribute(),e.Bb(n,5)._isDisabled()),l(n,7,0,e.Bb(n,8)._getAriaSortAttribute(),e.Bb(n,8)._isDisabled()),l(n,10,0,e.Bb(n,11)._getAriaSortAttribute(),e.Bb(n,11)._isDisabled())})}var T=function(){function l(){}return l.prototype.transform=function(l){var n=Math.floor(l/3600),t=Math.floor((l-3600*n)/60),e=l-3600*n-60*t,u=""+n,i=""+t,r=""+e;return n<10&&(u="0"+n),t<10&&(i="0"+t),e<10&&(r="0"+e),n>0?u+":"+i+":"+r:i+":"+r},l}(),V=function(){function l(l){this.router=l}return l.prototype.ngOnInit=function(){},l.prototype.handleClick=function(l){this.router.navigate(["/games",l])},l.prototype.getDurationPercent=function(l){return(l<3600?l/36:100)+"%"},l}(),z=e.pb({encapsulation:0,styles:[[".boat-icons[_ngcontent-%COMP%]{height:40px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.25rem;vertical-align:middle}.winner-color[_ngcontent-%COMP%]{color:green}.loser-color[_ngcontent-%COMP%]{color:red}.duration-segment[_ngcontent-%COMP%]{background-color:#000;height:4px}"]],data:{}});function W(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,28,"tr",[["class","innerRow"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleClick(l.context.$implicit.matchID)&&e),e},null,null)),(l()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,0,"img",[["class","boat-icons"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.rb(3,0,null,null,8,"td",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,4,"div",[],null,null,null,null,null)),e.qb(5,278528,null,0,d.i,[e.t,e.u,e.k,e.F],{ngClass:[0,"ngClass"]},null),e.Db(6,{"winner-color":0,"loser-color":1}),(l()(),e.rb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Gb(8,null,["",""])),(l()(),e.rb(9,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.Gb(10,null,["",""])),e.Eb(11,1),(l()(),e.rb(12,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.rb(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Gb(15,null,["",""])),(l()(),e.rb(16,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.rb(17,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e.Gb(18,null,[" "," "," "," "])),(l()(),e.rb(19,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(20,null,["",""])),(l()(),e.rb(21,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Gb(22,null,["","/",""])),(l()(),e.rb(23,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e.Gb(24,null,[" "," "])),e.Eb(25,1),(l()(),e.rb(26,0,null,null,2,"div",[["class","duration-segment"]],null,null,null,null,null)),e.qb(27,278528,null,0,d.n,[e.u,e.k,e.F],{ngStyle:[0,"ngStyle"]},null),e.Db(28,{width:0})],function(l,n){var t=n.component,e=l(n,6,0,n.context.$implicit.tm===n.context.$implicit.wn,n.context.$implicit.tm!==n.context.$implicit.wn);l(n,5,0,e);var u=l(n,28,0,t.getDurationPercent(n.context.$implicit.gameDuration));l(n,27,0,u)},function(l,n){var t=e.tb(1,"","/assets/boat-icons/"+n.context.$implicit.shp.split(" ").join("_").replace("'","")+".png","");l(n,2,0,t,e.tb(1,"",n.context.$implicit.shp,"")),l(n,8,0,n.context.$implicit.tm===n.context.$implicit.wn?"Won Game":"Lost Game");var u=e.Hb(n,10,0,l(n,11,0,e.Bb(n.parent.parent,0),n.context.$implicit.dateProcessed));l(n,10,0,u),l(n,15,0,n.context.$implicit.coOp?"Co-Op":"Normal"),l(n,18,0,n.context.$implicit.battle?"Battle":"",n.context.$implicit.battle&&n.context.$implicit.trading?"-":"",n.context.$implicit.trading?"Trading":""),l(n,20,0,n.context.$implicit.numPlayers),l(n,22,0,n.context.$implicit.kls,n.context.$implicit.dth);var i=e.Hb(n,24,0,l(n,25,0,e.Bb(n.parent.parent,1),n.context.$implicit.gameDuration));l(n,24,0,i)})}function U(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,W)),e.qb(2,278528,null,0,d.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){l(n,2,0,n.component.recentGames.Content)},null)}function Q(l){return e.Ib(0,[e.Cb(0,p.a,[]),e.Cb(0,T,[]),(l()(),e.rb(2,0,null,null,18,"table",[["class","table table-striped table-hover small"],["matSort",""]],null,null,null,null,null)),e.qb(3,737280,null,0,m.b,[],null,null),(l()(),e.rb(4,0,null,null,13,"thead",[["class","bg-gray-100 text-gray-500"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Ship"])),(l()(),e.rb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Result"])),(l()(),e.rb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Game Mode"])),(l()(),e.rb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Players"])),(l()(),e.rb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["K/D"])),(l()(),e.rb(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Duration"])),(l()(),e.rb(18,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,U)),e.qb(20,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0),l(n,20,0,t.recentGames)},null)}var j=e.pb({encapsulation:0,styles:[[".heightContainer[_ngcontent-%COMP%]{height:500px;overflow-y:scroll}#banner[_ngcontent-%COMP%]{background-image:url(/assets/stats/banner.png);box-shadow:inset 0 0 50px 50px rgba(0,0,0,.5)}"]],data:{}});function K(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-page-banner",[["text","Player Details"]],null,null,null,s.b,s.a)),e.qb(1,49152,null,0,c.a,[],{text:[0,"text"]},null),(l()(),e.rb(2,0,null,null,21,"div",[["class","bg-gray-vertical-emboss py-5"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,20,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,6,"div",[["class","col-12 col-md-6"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Boat Use"])),(l()(),e.rb(8,0,null,null,3,"div",[["class","heightContainer"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,2,"player-boats-list",[],null,null,null,M,$)),e.qb(10,638976,null,0,w,[],{ItemRecordList:[0,"ItemRecordList"]},null),e.Cb(131072,d.b,[e.h]),(l()(),e.rb(12,0,null,null,6,"div",[["class","col-12 col-md-6"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Item Use"])),(l()(),e.rb(15,0,null,null,3,"div",[["class","heightContainer"]],null,null,null,null,null)),(l()(),e.rb(16,0,null,null,2,"player-items-list",[],null,null,null,F,E)),e.qb(17,638976,null,0,q,[],{ItemRecordList:[0,"ItemRecordList"]},null),e.Cb(131072,d.b,[e.h]),(l()(),e.rb(19,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.rb(20,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Recent Games"])),(l()(),e.rb(22,0,null,null,1,"app-player-recent-games-list",[],null,null,null,Q,z)),e.qb(23,114688,null,0,V,[f.k],{recentGames:[0,"recentGames"]},null)],function(l,n){var t=n.component;l(n,1,0,"Player Details"),l(n,10,0,e.Hb(n,10,0,e.Bb(n,11).transform(t.BoatRecordList$))),l(n,17,0,e.Hb(n,17,0,e.Bb(n,18).transform(t.ItemRecordList$))),l(n,23,0,t.recentGames)},null)}function Y(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-player",[],null,null,null,K,j)),e.qb(1,114688,null,0,r,[u.a,f.a],null,null)],function(l,n){l(n,1,0)},null)}var Z=e.nb("app-player",r,Y,{},{},[]),J=t("gIcY"),X=t("M2Lx"),ll=t("Fzqc"),nl=t("Wf4p"),tl=t("ZYjt"),el=t("4c35"),ul=t("dWZg"),il=t("lLAP"),rl=t("La40"),al=t("y4qS"),ol=t("BHnd"),sl=t("LC5p"),cl=t("0/Q6"),bl=t("de3e"),ml=t("iTUp"),dl=t("PCNd");t.d(n,"PlayersModuleNgFactory",function(){return pl});var pl=e.ob(a,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[o.a,H,Z]],[3,e.j],e.y]),e.zb(4608,d.m,d.l,[e.v,[2,d.v]]),e.zb(4608,J.b,J.b,[]),e.zb(4608,J.g,J.g,[]),e.zb(4608,X.a,X.a,[]),e.zb(5120,m.d,m.a,[[3,m.d]]),e.zb(1073742336,d.c,d.c,[]),e.zb(1073742336,f.m,f.m,[[2,f.s],[2,f.k]]),e.zb(1073742336,J.f,J.f,[]),e.zb(1073742336,J.e,J.e,[]),e.zb(1073742336,ll.a,ll.a,[]),e.zb(1073742336,nl.d,nl.d,[[2,nl.c],[2,tl.g]]),e.zb(1073742336,el.c,el.c,[]),e.zb(1073742336,ul.b,ul.b,[]),e.zb(1073742336,nl.g,nl.g,[]),e.zb(1073742336,X.b,X.b,[]),e.zb(1073742336,il.a,il.a,[]),e.zb(1073742336,rl.a,rl.a,[]),e.zb(1073742336,al.o,al.o,[]),e.zb(1073742336,ol.a,ol.a,[]),e.zb(1073742336,nl.e,nl.e,[]),e.zb(1073742336,nl.f,nl.f,[]),e.zb(1073742336,sl.a,sl.a,[]),e.zb(1073742336,cl.a,cl.a,[]),e.zb(1073742336,m.e,m.e,[]),e.zb(1073742336,bl.a,bl.a,[]),e.zb(1073742336,ml.a,ml.a,[]),e.zb(1073742336,dl.a,dl.a,[]),e.zb(1073742336,a,a,[]),e.zb(1024,f.i,function(){return[[{path:"",component:i},{path:":id",component:r}]]},[])])})}}]);