"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[847],{48708:function(M,u,n){n.r(u),n.d(u,{default:function(){return y}});var v=n(26068),a=n.n(v),g=n(48305),h=n.n(g),f=n(79560),j=n(64585),x=n(76118),C=n(92148),t=n(93236),e={title:"title___DWnwq",main:"main___phBYa",summoneritem:"summoneritem___M0iCg","summoneritem-active":"summoneritem-active___g_2Zj",summoner_left:"summoner_left___PpZRp",summoner_right:"summoner_right___RtH5K",summoner_desc:"summoner_desc___B2gKi"},s=n(62086),S={xs:12,md:8,lg:6},p=function(){var l=(0,j.useModel)("summoners"),r=l.summoners,N=l.loading,Z=(0,t.useState)(),d=h()(Z,2),m=d[0],c=d[1];(0,t.useEffect)(function(){r.length&&c(r[0])},[r]);var z=function(i){c(i)};return(0,s.jsx)(f._z,{ghost:!0,loading:N,children:(0,s.jsxs)("div",{className:e.main,children:[(0,s.jsx)(x.Z,{className:e.summoner_left,children:r.map(function(o,i){return(0,t.createElement)(C.Z,a()(a()({},S),{},{key:i,className:o.summoner_id===(m==null?void 0:m.summoner_id)?e["summoneritem-active"]:e.summoneritem}),(0,s.jsx)("img",{src:"https://game.gtimg.cn/images/yxzj/img201606/summoner/".concat(o.summoner_id,".jpg"),alt:o.summoner_name,onClick:function(){return z(o)}}),(0,s.jsx)("p",{children:o.summoner_name}))})}),(0,s.jsxs)("div",{className:e.summoner_right,children:[(0,s.jsx)("img",{src:"https://game.gtimg.cn/images/yxzj/img201606/summoner/".concat(m==null?void 0:m.summoner_id,"-big.jpg")}),(0,s.jsx)("h4",{children:m==null?void 0:m.summoner_name}),(0,s.jsx)("p",{children:m==null?void 0:m.summoner_rank}),(0,s.jsx)("div",{className:e.summoner_desc,children:m==null?void 0:m.summoner_description})]})]})})},y=p}}]);