(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const $h=[{pack:1,label:"L-bracket, 2 base holes + 1 leg hole",id:"E-2",spec:{body:{type:"prism",W:45,segs:[{x0:0,x1:8,h:45},{x0:8,x1:65,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:10,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:35,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:22.5,z:20,d:5,x0:0,x1:8,group:2}],id:"E-2",seed:2,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:36110.531025,csg_volume_mm3:36110.531026,csg_rel_diff:128e-13,mass_g:{al6061:97.498,steel:283.468}},{pack:2,label:"Plate, 4-hole pattern",id:"E-3",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:120,h:12}],corner:null,fillets:[]},features:[{kind:"zhole",x:50,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:50,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1}],id:"E-3",seed:3,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:56242.831974,csg_volume_mm3:56242.831975,csg_rel_diff:182e-13,mass_g:{al6061:151.856,steel:441.506}},{pack:3,label:"Plate, rounded corners + centre hole",id:"E-60",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:85,h:8}],corner:{kind:"round",size:5},fillets:[]},features:[{kind:"zhole",x:15,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:15,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:42.5,y:20,d:15,top:8,depth:8,thru:!0,cb:null,group:2}],id:"E-60",seed:60,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:23101.327714,csg_volume_mm3:23101.327716,csg_rel_diff:109e-12,mass_g:{al6061:62.374,steel:181.345}},{pack:4,label:"Flange, bolt circle",id:"E-4",spec:{body:{type:"flange",R:45,t:6,chamfer:0,hubR:0,hubH:0,boreD:30},features:[{kind:"bolts",n:6,bc:70,d:10,top:6,cb:null,startDeg:0,group:1}],id:"E-4",seed:4,difficulty:"easy",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:31101.767271,csg_volume_mm3:31101.767247,csg_rel_diff:756e-12,mass_g:{al6061:83.975,steel:244.149}},{pack:5,label:"L-bracket, 4 holes",id:"E-5",spec:{body:{type:"prism",W:75,segs:[{x0:0,x1:10,h:85},{x0:10,x1:80,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:25,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:50,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:15,z:40,d:8,x0:0,x1:10,group:2},{kind:"xhole",y:60,z:40,d:8,x0:0,x1:10,group:2}],id:"E-5",seed:5,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:103940.442632,csg_volume_mm3:103940.442633,csg_rel_diff:132e-13,mass_g:{al6061:280.639,steel:815.932}},{pack:6,label:"Plate with counterbores",id:"M-1",spec:{body:{type:"prism",W:46,segs:[{x0:0,x1:74,h:16}],corner:{kind:"chamfer",size:8},fillets:[]},features:[{kind:"zhole",x:17,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:17,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:42,y:13,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:42,y:33,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:32,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3},{kind:"zhole",x:42,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3}],id:"M-1",seed:1,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:43896.000723,csg_volume_mm3:43896.00073,csg_rel_diff:147e-12,mass_g:{al6061:118.519,steel:344.584}},{pack:7,label:"Plate with slot and pocket",id:"M-11",spec:{body:{type:"prism",W:42,segs:[{x0:0,x1:94,h:14}],corner:{kind:"chamfer",size:6},fillets:[]},features:[{kind:"pocket",x0:40,x1:76,y0:17,y1:38,r:3,top:14,depth:4,group:1},{kind:"zhole",x:29,y:12,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"zhole",x:29,y:30,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"slot",x:14,y:22,w:10,len:17,dir:"y",top:14,depth:14,thru:!0,group:3}],id:"M-11",seed:11,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:46024.619841,csg_volume_mm3:46024.619844,csg_rel_diff:719e-13,mass_g:{al6061:124.266,steel:361.293}},{pack:8,label:"L-bracket with inside fillet",id:"M-21",spec:{body:{type:"prism",W:68,segs:[{x0:0,x1:12,h:68},{x0:12,x1:92,h:12}],corner:null,fillets:[{xb:12,z:12,r:3,dir:1}]},features:[{kind:"zhole",x:30,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:30,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"xhole",y:34,z:51,d:4,x0:0,x1:12,group:2}],id:"M-21",seed:21,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:118335.796719,csg_volume_mm3:118335.796721,csg_rel_diff:193e-13,mass_g:{al6061:319.507,steel:928.936}},{pack:9,label:"L-bracket with counterbores",id:"M-2",spec:{body:{type:"prism",W:34,segs:[{x0:0,x1:9,h:40},{x0:9,x1:70,h:9}],corner:null,fillets:[]},features:[{kind:"zhole",x:17,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:17,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"xhole",y:9,z:27,d:8,x0:0,x1:9,group:2},{kind:"xhole",y:25,z:27,d:8,x0:0,x1:9,group:2}],id:"M-2",seed:2,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:28916.586452,csg_volume_mm3:28916.586454,csg_rel_diff:52e-12,mass_g:{al6061:78.075,steel:226.995}},{pack:10,label:"Two-step block with side hole",id:"M-3",spec:{body:{type:"prism",W:64,segs:[{x0:0,x1:66,h:40},{x0:66,x1:94,h:12}],corner:null,fillets:[{xb:66,z:12,r:4,dir:1}],shape:"step2"},features:[{kind:"zhole",x:82,y:17,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:82,y:47,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:19,y:20,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"zhole",x:19,y:44,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"yhole",x:45,z:20,d:4,group:3}],id:"M-3",seed:3,difficulty:"medium",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:178525.788711,csg_volume_mm3:178525.788721,csg_rel_diff:551e-13,mass_g:{al6061:482.02,steel:1401.427}},{pack:11,label:"Tee block",id:"M-12",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:39,h:16},{x0:39,x1:85,h:31},{x0:85,x1:140,h:19}],corner:null,fillets:[],shape:"tee"},features:[{kind:"zhole",x:25,y:7,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:25,y:25,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:103,y:7,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2},{kind:"zhole",x:103,y:25,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2}],id:"M-12",seed:12,difficulty:"medium",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:96701.084269,csg_volume_mm3:96701.084271,csg_rel_diff:183e-13,mass_g:{al6061:261.093,steel:759.104}},{pack:12,label:"Flange with hub",id:"M-8",spec:{body:{type:"flange",R:60,t:11,chamfer:0,hubR:18,hubH:12,boreD:23},features:[{kind:"bolts",n:6,bc:66,d:12,top:11,cb:null,startDeg:0,group:1}],id:"M-8",seed:8,difficulty:"medium",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:119601.21772,csg_volume_mm3:119601.21763,csg_rel_diff:756e-12,mass_g:{al6061:322.923,steel:938.87}},{pack:13,label:"Channel block",id:"M-30",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:46,h:41},{x0:46,x1:74,h:15},{x0:74,x1:106,h:50}],corner:null,fillets:[],shape:"u"},features:[{kind:"zhole",x:87,y:9,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:87,y:23,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:33,y:9,d:9,top:41,depth:41,thru:!0,cb:null,group:2},{kind:"zhole",x:33,y:23,d:9,top:41,depth:41,thru:!0,cb:null,group:2}],id:"M-30",seed:30,difficulty:"medium",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:117547.996207,csg_volume_mm3:117547.996213,csg_rel_diff:479e-13,mass_g:{al6061:317.38,steel:922.752}},{pack:14,label:"Plate: chamfers, slot, pocket, blind holes",id:"H-2",spec:{body:{type:"prism",W:86,segs:[{x0:0,x1:99,h:15.5}],corner:{kind:"chamfer",size:2.5},fillets:[]},features:[{kind:"slot",x:39.5,y:60.5,w:9,len:29.5,dir:"x",top:15.5,depth:15.5,thru:!0,group:1},{kind:"pocket",x0:66,x1:83,y0:41,y1:60.5,r:5.5,top:15.5,depth:11.5,group:2},{kind:"zhole",x:9.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:9.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:16.5,y:34.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4},{kind:"zhole",x:16.5,y:51.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4}],id:"H-2",seed:2,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:114493.829559,csg_volume_mm3:114493.829568,csg_rel_diff:792e-13,mass_g:{al6061:309.133,steel:898.777}},{pack:15,label:"Three-step block, fillets + side hole",id:"H-56",spec:{body:{type:"prism",W:43,segs:[{x0:0,x1:21,h:49.5},{x0:21,x1:57,h:21.5},{x0:57,x1:88,h:13.5}],corner:null,fillets:[{xb:21,z:21.5,r:5,dir:1},{xb:57,z:13.5,r:5,dir:1}],shape:"step3"},features:[{kind:"zhole",x:75,y:13,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"zhole",x:75,y:30,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"pocket",x0:35,x1:52.5,y0:3.5,y1:26.5,r:3.5,top:21.5,depth:18,group:2},{kind:"slot",x:10,y:34.5,w:8,len:14,dir:"x",top:49.5,depth:36,thru:!1,group:3},{kind:"yhole",x:8,z:6.5,d:3.5,group:4}],id:"H-56",seed:56,difficulty:"hard",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:84129.19851,csg_volume_mm3:84129.198515,csg_rel_diff:524e-13,mass_g:{al6061:227.149,steel:660.414}},{pack:16,label:"Channel block with cross hole",id:"H-45",spec:{body:{type:"prism",W:58,segs:[{x0:0,x1:31,h:45},{x0:31,x1:59,h:15},{x0:59,x1:80,h:27.5}],corner:null,fillets:[{xb:31,z:15,r:2.5,dir:1},{xb:59,z:15,r:2.5,dir:-1}],shape:"u"},features:[{kind:"zhole",x:45.5,y:37.5,d:13.5,top:15,depth:4.5,thru:!1,cb:null,group:1},{kind:"zhole",x:21,y:10,d:4.5,top:45,depth:45,thru:!0,cb:{d:8,depth:3},group:2},{kind:"zhole",x:69,y:14.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"zhole",x:69,y:43.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"xhole",y:29,z:38,d:4.5,x0:0,x1:31,group:4}],id:"H-45",seed:45,difficulty:"hard",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:133465.701562,csg_volume_mm3:133465.701567,csg_rel_diff:347e-13,mass_g:{al6061:360.357,steel:1047.706}},{pack:17,label:"L-bracket: fillet + slot",id:"H-6",spec:{body:{type:"prism",W:63,segs:[{x0:0,x1:11.5,h:42},{x0:11.5,x1:85,h:10.5}],corner:null,fillets:[{xb:11.5,z:10.5,r:4.5,dir:1}]},features:[{kind:"slot",x:42,y:19,w:5,len:29,dir:"x",top:10.5,depth:5,thru:!1,group:1},{kind:"xhole",y:20.5,z:25.5,d:11,x0:0,x1:11.5,group:2},{kind:"xhole",y:42.5,z:25.5,d:11,x0:0,x1:11.5,group:2}],id:"H-6",seed:6,difficulty:"hard",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:76439.090434,csg_volume_mm3:76439.090437,csg_rel_diff:354e-13,mass_g:{al6061:206.386,steel:600.047}},{pack:18,label:"Flange: hub, chamfer, counterbores",id:"H-18",spec:{body:{type:"flange",R:52,t:10,chamfer:1,hubR:26.5,hubH:13,boreD:31.5},features:[{kind:"bolts",n:3,bc:74,d:9,top:10,cb:{d:15,depth:3},startDeg:0,group:1}],id:"H-18",seed:18,difficulty:"hard",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:92616.180373,csg_volume_mm3:92616.180303,csg_rel_diff:756e-12,mass_g:{al6061:250.064,steel:727.037}},{pack:19,label:"Tee block with pocket",id:"H-22",spec:{body:{type:"prism",W:37,segs:[{x0:0,x1:56,h:23},{x0:56,x1:78,h:44.5},{x0:78,x1:131,h:28}],corner:null,fillets:[{xb:56,z:23,r:5.5,dir:-1},{xb:78,z:28,r:5.5,dir:1}],shape:"tee"},features:[{kind:"zhole",x:98.5,y:21,d:9,top:28,depth:28,thru:!0,cb:{d:15,depth:7},group:1},{kind:"slot",x:67.5,y:15,w:9,len:15,dir:"x",top:44.5,depth:24.5,thru:!1,group:2},{kind:"pocket",x0:5.5,x1:19.5,y0:9.5,y1:25.5,r:5,top:23,depth:2.5,group:3},{kind:"yhole",x:65,z:8,d:11,group:4}],id:"H-22",seed:22,difficulty:"hard",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:129790.222054,csg_volume_mm3:129790.222062,csg_rel_diff:557e-13,mass_g:{al6061:350.434,steel:1018.853}},{pack:20,label:"Plate: rounds, counterbores, slot",id:"H-46",spec:{body:{type:"prism",W:52,segs:[{x0:0,x1:84,h:11}],corner:{kind:"round",size:3},fillets:[]},features:[{kind:"zhole",x:29.5,y:14,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"zhole",x:29.5,y:38,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"slot",x:65,y:22,w:10.5,len:35,dir:"y",top:11,depth:11,thru:!0,group:2}],id:"H-46",seed:46,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:39492.538063,csg_volume_mm3:39492.538067,csg_rel_diff:102e-12,mass_g:{al6061:106.63,steel:310.016}}],En={drills:$h};function Xh(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function qh(i){let t=Xh(String(i))||1;const e=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296},n={next:e,int(r,s){return r+Math.floor(e()*(s-r+1))},q(r,s,a){const o=Math.ceil(r/a-1e-9),l=Math.floor(s/a+1e-9);return l<o?null:Nn(n.int(o,l)*a)},pick(r){return r[Math.floor(e()*r.length)]},chance(r){return e()<r}};return n}function Nn(i){return Math.round(i*1e6)/1e6}const wi=Math.PI;function Cn(i){return wi*i*i/4}function Yh(i,t){return(t-i)*i+Cn(i)}function jh(i,t,e){return i*t-(4-wi)*e*e}function zc(i){const t=[],e=i.body;if(e.type==="prism"){for(const n of e.segs)t.push({key:"body",label:"Main body",vol:(n.x1-n.x0)*n.h*e.W});if(e.corner){const n=e.corner.size,r=e.corner.kind==="round"?(1-wi/4)*n*n:n*n/2,s=e.segs[0].h,a=e.segs[e.segs.length-1].h;t.push({key:"corner",label:e.corner.kind==="round"?"Corner rounds":"Corner chamfers",vol:-r*2*(s+a)})}for(const n of e.fillets||[])t.push({key:"fillet",label:`Inside fillet R${n.r}`,vol:(1-wi/4)*n.r*n.r*e.W})}else if(e.type==="flange"){const n=e.chamfer||0;t.push({key:"body",label:"Disk",vol:wi*e.R*e.R*e.t}),n>0&&t.push({key:"chamfer",label:"Edge chamfer",vol:-2*wi*(e.R-n/3)*(n*n)/2}),e.hubR>0&&t.push({key:"hub",label:"Hub",vol:wi*e.hubR*e.hubR*e.hubH}),t.push({key:"bore",label:"Centre bore",vol:-Cn(e.boreD)*(e.t+(e.hubR>0?e.hubH:0))})}return i.features.forEach((n,r)=>{let s=0;switch(n.kind){case"zhole":s=Cn(n.d)*n.depth,n.cb&&(s+=(Cn(n.cb.d)-Cn(n.d))*n.cb.depth);break;case"yhole":s=Cn(n.d)*i.body.W;break;case"xhole":s=Cn(n.d)*(n.x1-n.x0);break;case"slot":s=Yh(n.w,n.len)*n.depth;break;case"pocket":s=jh(n.x1-n.x0,n.y1-n.y0,n.r)*n.depth;break;case"bolts":{const a=i.body.t;s=n.n*Cn(n.d)*a,n.cb&&(s+=n.n*(Cn(n.cb.d)-Cn(n.d))*n.cb.depth);break}default:throw new Error("unknown feature "+n.kind)}t.push({key:"feature",featureIndex:r,label:Kh(n),vol:-s})}),t}function Hc(i){return zc(i).reduce((t,e)=>t+e.vol,0)}function Vs(i,t){return i/1e3*t}function Kh(i){switch(i.kind){case"zhole":return`${i.thru?"Through":"Blind"} hole Ø${i.d}${i.cb?` with counterbore Ø${i.cb.d}`:""}`;case"yhole":case"xhole":return`Side hole Ø${i.d}`;case"slot":return`Slot ${i.w} × ${i.len}`;case"pocket":return`Pocket ${Br(i.x1-i.x0)} × ${Br(i.y1-i.y0)}`;case"bolts":return`${i.n}× bolt holes Ø${i.d}${i.cb?" (counterbored)":""}`}return i.kind}function Br(i){const t=Math.round(i*1e3)/1e3;return String(t)}function Vc(i){const t=[];for(const e of i.map(Nn).sort((n,r)=>n-r))t.some(n=>Math.abs(n-e)<1e-6)||t.push(e);return t}function Gc(i){const t=i.body,e={topX:[],topY:[],frontX:[],frontZ:[],rightY:[],rightZ:[]};if(t.type!=="prism")return e;const n=(a,o,l)=>e[a].push({v:Nn(o),tag:l}),r=t.segs[t.segs.length-1].x1,s=Math.max(...t.segs.map(a=>a.h));for(let a=0;a<t.segs.length-1;a++)n("frontX",t.segs[a].x1,`seg${a}.x1`);for(let a=0;a<t.segs.length;a++)n("frontZ",t.segs[a].h,`seg${a}.h`);i.features.forEach((a,o)=>{switch(a.kind){case"zhole":case"slot":n("topX",a.x,`f${o}.x`),n("topY",a.y,`f${o}.y`);break;case"pocket":n("topX",a.x0,`f${o}.x0`),n("topX",a.x1,`f${o}.x1`),n("topY",a.y0,`f${o}.y0`),n("topY",a.y1,`f${o}.y1`);break;case"yhole":n("frontX",a.x,`f${o}.x`),n("frontZ",a.z,`f${o}.z`);break;case"xhole":n("rightY",a.y,`f${o}.y`),n("rightZ",a.z,`f${o}.z`);break}}),e.overall={L:r,W:t.W,H:s};for(const a of["topX","topY","frontX","frontZ","rightY","rightZ"]){const o=Vc(e[a].map(l=>l.v));e[a]=o.map(l=>({v:l,tags:e[a].filter(u=>Math.abs(u.v-l)<1e-6).map(u=>u.tag)}))}return e}function Zh(i,t=3,e=6){const n=Gc(i);if(i.body.type!=="prism")return!0;const r={topX:n.overall.L,topY:n.overall.W,frontX:null,frontZ:null,rightY:n.overall.W,rightZ:n.overall.H};for(const s of["topX","topY","frontX","frontZ","rightY","rightZ"]){const a=n[s].map(l=>l.v);r[s]!=null&&a.push(r[s]),a.push(0);const o=Vc(a);if(o.length-1>e+1)return!1;for(let l=1;l<o.length;l++)if(o[l]-o[l-1]<t)return!1}return!0}const Jh={E:"easy",M:"medium",H:"hard"},Qh={easy:"E",medium:"M",hard:"H"},Za={plate:"Mounting plate",lbracket:"L-bracket",stepped:"Stepped block",flange:"Flange"},Jt=2.5,ci={easy:5,medium:1,hard:.5},Ja={easy:5,medium:2,hard:1},td={easy:[5,6,8,10],medium:[4,5,6,6.6,8,9,10,12],hard:[3.5,4.5,5.5,6.6,9,11,13.5]},Gs={3.5:6.5,4.5:8,5.5:9.5,6.6:11,9:15,11:18,13.5:20,4:7.5,5:9,6:10,8:13,10:16,12:19};function Wc(i){const t=/^([EMH])-(\d{1,9})$/.exec(String(i).trim().toUpperCase());return t?{difficulty:Jh[t[1]],seed:Number(t[2]),letter:t[1]}:null}function $c(i,t){return`${Qh[i]}-${t}`}const ed={easy:["plate","plate","lbracket","flange"],medium:["plate","lbracket","stepped","flange"],hard:["plate","lbracket","stepped","stepped","flange"]};function Ws(i){const t=Wc(i);if(!t)throw new Error("Bad drill id: "+i);const e=qh(`cad-drills/v1/${t.letter}/${t.seed}`),n=e.pick(ed[t.difficulty]);for(let r=0;r<400;r++){const s=fd[n](e,t.difficulty);if(!s||(s.id=$c(t.difficulty,t.seed),s.seed=t.seed,s.difficulty=t.difficulty,s.family=n,s.title=id(s),s.generatorVersion=1,s.features.length===0))continue;if(Xc(s).ok)return pd(s)}throw new Error("Generator could not build a valid part for "+i)}function nd(i,t,e){for(let n=t;n<t+5e3;n++){const r=Ws($c(i,n));if(!e||e==="any"||r.family===e)return r}throw new Error("no seed found")}function id(i){if(i.family==="stepped"){const t=i.body.shape;return t==="tee"?"Tee block":t==="u"?"Channel block":"Stepped block"}return Za[i.family]}function rd(i,t){const e=i.body;switch(t.kind){case"zhole":{const n=Math.max(t.d,t.cb?t.cb.d:0)/2;return[t.x-n,t.x+n,t.y-n,t.y+n,t.top-t.depth,t.top]}case"slot":{const n=t.dir==="x"?t.len/2:t.w/2,r=t.dir==="x"?t.w/2:t.len/2;return[t.x-n,t.x+n,t.y-r,t.y+r,t.top-t.depth,t.top]}case"pocket":return[t.x0,t.x1,t.y0,t.y1,t.top-t.depth,t.top];case"yhole":return[t.x-t.d/2,t.x+t.d/2,0,e.W,t.z-t.d/2,t.z+t.d/2];case"xhole":return[t.x0,t.x1,t.y-t.d/2,t.y+t.d/2,t.z-t.d/2,t.z+t.d/2]}return null}function sd(i,t,e){for(let n=0;n<3;n++){const r=i[2*n],s=i[2*n+1],a=t[2*n],o=t[2*n+1];if(a-s>=e-1e-9||r-o>=e-1e-9)return!0}return!1}function Xc(i){const t=[],e=i.body;if(e.type==="prism"){const n=e.segs,r=e.W;for(let o=0;o<n.length;o++)n[o].x1-n[o].x0<8&&t.push("segment too narrow"),o>0&&Math.abs(n[o].h-n[o-1].h)<4&&t.push("step too small");const s=[];if(e.corner){n.length!==1&&t.push("corners only on plates");const o=e.corner.size,l=n[0].x1,u=n[0].h;s.push([0,o,0,o,0,u],[l-o,l,0,o,0,u],[0,o,r-o,r,0,u],[l-o,l,r-o,r,0,u])}for(const o of e.fillets||[]){const l=o.dir>0?[o.xb,o.xb+o.r,0,r,o.z,o.z+o.r]:[o.xb-o.r,o.xb,0,r,o.z,o.z+o.r],u=n.find(f=>l[0]>=f.x0-1e-9&&l[1]<=f.x1+1e-9);(!u||Math.abs(u.h-o.z)>1e-9)&&t.push("fillet not on a step");const d=n.find(f=>o.dir>0?Math.abs(f.x1-o.xb)<1e-9:Math.abs(f.x0-o.xb)<1e-9);(!d||d.h<o.z+o.r+2)&&t.push("fillet taller than wall"),u&&(o.dir>0?u.x1-o.xb:o.xb-u.x0)<o.r+6&&t.push("fillet too wide for segment"),s.push(l)}const a=(o,l)=>n.find(u=>o>=u.x0+Jt-1e-9&&l<=u.x1-Jt+1e-9);for(const o of i.features){const l=rd(i,o);if(!l){t.push("bad feature");continue}if(o.kind==="zhole"||o.kind==="slot"||o.kind==="pocket"){const u=a(l[0],l[1]);u?Math.abs(u.h-o.top)>1e-9&&t.push(o.kind+" top not on segment face"):t.push(o.kind+" not inside one segment"),(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push(o.kind+" too close to front/back"),o.thru!==void 0&&o.thru&&Math.abs(o.depth-o.top)>1e-9&&t.push("thru depth mismatch"),!o.thru&&o.kind!=="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("blind too deep"),o.kind==="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("pocket too deep"),o.kind==="pocket"&&o.r*2>Math.min(o.x1-o.x0,o.y1-o.y0)-2&&t.push("pocket radius"),o.kind==="slot"&&o.len<o.w+4&&t.push("slot too short"),o.cb&&(o.cb.d<=o.d+1&&t.push("cbore too small"),o.cb.depth>=o.depth-2&&t.push("cbore too deep"))}else if(o.kind==="yhole"){const u=a(l[0],l[1]);u?l[5]>u.h-Jt+1e-9&&t.push("yhole too high"):t.push("yhole not in one segment"),l[4]<Jt-1e-9&&t.push("yhole too low")}else if(o.kind==="xhole"){const u=n.findIndex(d=>Math.abs(d.x0-o.x0)<1e-9&&Math.abs(d.x1-o.x1)<1e-9);if(u<0)t.push("xhole must span a whole segment");else{const d=n[u];l[5]>d.h-Jt+1e-9&&t.push("xhole too high"),l[4]<Jt-1e-9&&t.push("xhole too low");for(const f of[n[u-1],n[u+1]])f&&f.h>l[4]-Jt+1e-9&&t.push("xhole hits neighbour")}(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push("xhole too close to front/back")}for(const u of s)sd(u,l,Jt)||t.push("features too close");s.push(l)}Zh(i)||t.push("dimension stacks crowded")}else if(e.type==="flange"){const n=e.chamfer||0;e.boreD/2+Jt>(e.hubR>0?e.hubR:e.R-n)&&t.push("bore too big");for(const r of i.features){if(r.kind!=="bolts"){t.push("flange only has bolt circles");continue}const s=r.bc/2,a=Math.max(r.d,r.cb?r.cb.d:0)/2,o=(e.hubR>0?e.hubR:e.boreD/2)+Jt;s-a<o-1e-9&&t.push("bolt holes hit hub/bore"),s+a>e.R-n-Jt+1e-9&&t.push("bolt holes hit rim"),2*s*Math.sin(Math.PI/r.n)<2*a+Jt&&t.push("bolt holes too close"),r.cb&&r.cb.depth>e.t-Jt&&t.push("cbore too deep"),r.cb&&r.cb.d<=r.d+1&&t.push("cbore too small")}e.hubR>0&&e.hubR+4>e.R-n&&t.push("hub too big")}return Hc(i)>0||t.push("non-positive volume"),{ok:t.length===0,errs:t}}function $r(i,t){return i.pick(td[t])}function $s(i,t,e,n=40){for(let r=0;r<n;r++){const s=e();if(!s||s.length===0)continue;const a=i._group=(i._group||0)+1;s.forEach(l=>l.group=a);const o={...i,features:[...i.features,...s]};if(Xc(o).ok)return i.features.push(...s),!0;i._group--}return!1}function Rn(i,t,e,n,r={}){const s=!r.depth;return{kind:"zhole",x:Nn(i),y:Nn(t),d:e,top:n,depth:s?n:r.depth,thru:s,cb:r.cb||null}}function Rl(i,t,e,n,r,s){const a=i.next();if(s&&a<(t==="hard"?.45:.3)&&Gs[n]&&e>=8){const o=Gs[n],l=i.q(Math.min(3,e-4),Math.min(e-4,Math.round(o*.7)),t==="hard"?.5:1);return l==null||l<2?{}:{cb:{d:o,depth:l}}}if(r&&a>.7&&e>=8){const o=i.q(3,e-Jt,t==="hard"?.5:1);return o==null?{}:{depth:o}}return{}}function od(i,t,e,n,r){const s=ci[t],a=$r(i,t),o=Rl(i,t,n,a,t!=="easy",t!=="easy"),l=Math.max(a,o.cb?o.cb.d:0)/2,u=l+Jt,d=e.x1-e.x0,f=e.y1-e.y0;if(r==="pattern4"){const c=i.q(u,d/2-l-Jt/2-2,s),m=i.q(u,f/2-l-Jt/2-2,s);return c==null||m==null?null:[Rn(e.x0+c,e.y0+m,a,n,o),Rn(e.x1-c,e.y0+m,a,n,o),Rn(e.x0+c,e.y1-m,a,n,o),Rn(e.x1-c,e.y1-m,a,n,o)]}if(r==="pairY"){const c=i.q(e.x0+u,e.x1-u,s),m=i.q(u,f/2-l-2,s);return c==null||m==null?null:[Rn(c,e.y0+m,a,n,o),Rn(c,e.y1-m,a,n,o)]}if(r==="pairX"){const c=i.q(e.y0+u,e.y1-u,s),m=i.q(u,d/2-l-2,s);return c==null||m==null?null:[Rn(e.x0+m,c,a,n,o),Rn(e.x1-m,c,a,n,o)]}if(r==="single"){const c=i.q(e.x0+u,e.x1-u,s),m=i.q(e.y0+u,e.y1-u,s);return c==null||m==null?null:[Rn(c,m,a,n,o)]}if(r==="center"){const c=t==="easy"?i.pick([10,12,15,20,25]):i.q(10,Math.min(d,f)*.5,t==="hard"?.5:1);if(c==null)return null;const m=t==="easy"?{}:Rl(i,t,n,c,!0,!1);return[Rn((e.x0+e.x1)/2,(e.y0+e.y1)/2,c,n,m)]}return null}function ad(i,t,e,n){const r=ci[t],s=i.pick(t==="hard"?[5,6.5,8,9,10.5,12]:[6,8,10,12]),a=i.chance(.5)?"x":"y",o=a==="x"?e.x1-e.x0:e.y1-e.y0,l=i.q(s+6,Math.max(s+6,o*.7),t==="hard"?.5:1);if(l==null)return null;const u=a==="x"?l/2:s/2,d=a==="x"?s/2:l/2,f=i.q(e.x0+u+Jt,e.x1-u-Jt,r),c=i.q(e.y0+d+Jt,e.y1-d-Jt,r);if(f==null||c==null)return null;const m=t==="hard"&&i.chance(.4)&&n>=8,v=m?i.q(3,n-Jt,.5):n;return v==null?null:[{kind:"slot",x:f,y:c,w:s,len:l,dir:a,top:n,depth:v,thru:!m}]}function ld(i,t,e,n){const r=ci[t],s=i.q(14,(e.x1-e.x0)*.6,r),a=i.q(12,(e.y1-e.y0)*.6,r);if(s==null||a==null)return null;const o=i.q(2,Math.min(6,Math.min(s,a)/2-1.5),t==="hard"?.5:1),l=i.q(e.x0+Jt,e.x1-s-Jt,r),u=i.q(e.y0+Jt,e.y1-a-Jt,r),d=i.q(2,n-Jt-1,t==="hard"?.5:1);return o==null||l==null||u==null||d==null?null:[{kind:"pocket",x0:l,x1:Nn(l+s),y0:u,y1:Nn(u+a),r:o,top:n,depth:d}]}function cd(i,t){const e=Ja[t],n=i.q(50,t==="hard"?140:120,e),r=i.q(35,Math.min(n,t==="easy"?80:100),e),s=t==="easy"?i.pick([6,8,10,12,15,20]):i.q(6,22,t==="hard"?.5:1);let a=null;const o={easy:.5,medium:.65,hard:.8}[t];if(i.chance(o)){const f=t==="easy"||i.chance(.55)?"round":"chamfer",c=t==="easy"?i.pick([3,5,8]):i.q(2,Math.min(10,r/5),t==="hard"?.5:1);a={kind:f,size:c}}const l={body:{type:"prism",W:r,segs:[{x0:0,x1:n,h:s}],corner:a,fillets:[]},features:[]},u={x0:0,x1:n,y0:0,y1:r},d=t==="easy"?[i.pick(["pattern4","pattern4","pairX","center"])]:t==="medium"?sa(i,["pattern4","slot","pocket","center","pairX","pairY"]).slice(0,i.int(2,3)):sa(i,["pattern4","slot","pocket","center","pairY","slot","single"]).slice(0,i.int(3,4));t==="easy"&&d[0]==="pattern4"&&i.chance(.5)&&d.push("center");for(const f of d)zr(l,i,t,f,u,s);return l}function zr(i,t,e,n,r,s){return $s(i,t,()=>n==="slot"?ad(t,e,r,s):n==="pocket"?ld(t,e,r,s):od(t,e,r,s,n))}function ud(i,t){const e=Ja[t],n=t==="hard"?.5:1,r=i.q(50,110,e),s=i.q(30,75,e),a=i.q(40,90,e),o=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),l=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),u=[{x0:0,x1:o,h:a},{x0:o,x1:r,h:l}],d=[];t!=="easy"&&i.chance(t==="hard"?.8:.5)&&d.push({xb:o,z:l,r:i.q(3,8,t==="hard"?.5:1),dir:1});const f={body:{type:"prism",W:s,segs:u,corner:null,fillets:d},features:[]},c={x0:o+(d[0]?d[0].r:0),x1:r,y0:0,y1:s},m=t==="easy"?i.pick(["pairY","pattern4"]):i.pick(["pairY","pattern4","slot","pattern4"]);return m==="slot"?zr(f,i,t,"slot",{...c,x0:c.x0},l):zr(f,i,t,m,c,l),$s(f,i,()=>{const v=$r(i,t),x=l+(d[0]?d[0].r:0)+Jt+v/2,h=ci[t],g=i.q(x+2,a-Jt-v/2,h);if(g==null)return null;if(i.chance(t==="easy"?.5:.65)){const T=i.q(Jt+v/2,s/2-v/2-2,h);return T==null?null:[{kind:"xhole",y:T,z:g,d:v,x0:0,x1:o},{kind:"xhole",y:Nn(s-T),z:g,d:v,x0:0,x1:o}]}return[{kind:"xhole",y:Nn(s/2),z:g,d:v,x0:0,x1:o}]}),t==="hard"&&i.chance(.5)&&zr(f,i,t,"single",c,l),f}function hd(i,t){const e=Ja[t],n=t==="hard"?.5:1,r=i.pick(t==="medium"?["step2","step3","tee","u"]:["step3","tee","u","step2"]),s=r==="step2"?2:3,a=i.q(70,140,e),o=i.q(30,80,e),l=[];for(let M=1;M<s;M++)l.push(i.q(16*M,a-16*(s-M),ci[t]<1?1:ci[t]));l.sort((M,w)=>M-w);const u=[0,...l,a];for(let M=1;M<u.length;M++)if(u[M]-u[M-1]<16)return null;let d;const f=(M,w)=>i.q(M,w,n);if(r==="step2"){const M=f(18,45);d=[M,f(8,M-6)]}else if(r==="step3"){const M=f(26,50),w=f(16,M-6);d=[M,w,f(8,w-6)]}else if(r==="tee"){const M=f(24,50);d=[f(8,M-8),M,f(8,M-8)]}else{const M=f(8,20);d=[f(M+8,50),M,f(M+8,50)]}if(d.some(M=>M==null))return null;i.chance(.5)&&r!=="tee"&&r!=="u"&&d.reverse();const c=d.map((M,w)=>({x0:u[w],x1:u[w+1],h:M})),m=[];if(t!=="easy"&&i.chance(t==="hard"?.7:.4)){const M=i.q(2,6,n);for(let w=0;w<c.length-1;w++){const O=c[w],L=c[w+1];O.h>L.h?m.push({xb:O.x1,z:L.h,r:M,dir:1}):m.push({xb:O.x1,z:O.h,r:M,dir:-1})}}const v={body:{type:"prism",W:o,segs:c,corner:null,fillets:m,shape:r},features:[]},x=M=>{const w=c[M];let O=w.x0,L=w.x1;for(const C of m)C.dir>0&&Math.abs(C.xb-w.x0)<1e-9&&Math.abs(C.z-w.h)<1e-9&&(O+=C.r),C.dir<0&&Math.abs(C.xb-w.x1)<1e-9&&Math.abs(C.z-w.h)<1e-9&&(L-=C.r);return{x0:O,x1:L,y0:0,y1:o}},h=sa(i,c.map((M,w)=>w)),g=t==="medium"?2:i.int(3,4);let T=0;for(const M of h){if(T>=g)break;const w=i.pick(t==="hard"?["pairY","pairY","single","slot","pocket"]:["pairY","pairY","single"]);zr(v,i,t,w,x(M),c[M].h)&&T++}if(i.chance(t==="hard"?.75:.5)){const M=d.indexOf(Math.max(...d)),w=c[M];$s(v,i,()=>{const O=$r(i,t),L=i.q(w.x0+Jt+O/2,w.x1-Jt-O/2,ci[t]),C=i.q(Jt+O/2,w.h-Jt-O/2,ci[t]);return L==null||C==null?null:[{kind:"yhole",x:L,z:C,d:O}]})}if(r==="u"&&t==="hard"&&i.chance(.6)){const M=c[0];$s(v,i,()=>{const w=$r(i,t),O=i.q(c[1].h+Jt+w/2+1,M.h-Jt-w/2,.5),L=Nn(o/2);return O==null?null:[{kind:"xhole",y:L,z:O,d:w,x0:M.x0,x1:M.x1}]})}return T===0?null:v}function dd(i,t){const e=t==="easy"?i.pick([30,35,40,45,50,60]):i.q(30,70,t==="hard"?.5:1),n=t==="easy"?i.pick([6,8,10,12]):i.q(6,16,t==="hard"?.5:1);let r=0,s=0;t!=="easy"&&i.chance(t==="hard"?.85:.6)&&(r=i.q(e*.3,e*.55,t==="hard"?.5:1),s=i.q(5,25,t==="hard"?.5:1));const a=t==="hard"&&i.chance(.65)?i.q(1,Math.min(3,n/3),.5):0,o=r>0?2*(r-Jt-1):e*.8,l=t==="easy"?i.pick([10,15,20,25,30]):i.q(8,Math.min(o,50),t==="hard"?.5:1);if(l==null)return null;const u=i.pick(t==="easy"?[3,4,6]:[3,4,5,6,8]),d=$r(i,t);let f=null;t==="hard"&&i.chance(.5)&&Gs[d]&&n>=8&&(f={d:Gs[d],depth:i.q(2,n-4,.5)});const c=(r>0?r:l/2)+Jt,m=Math.max(d,f?f.d:0)/2,v=i.q(2*(c+m),2*(e-a-Jt-m),t==="easy"?10:t==="medium"?2:1);return v==null||f&&f.depth==null?null:{body:{type:"flange",R:e,t:n,chamfer:a,hubR:r,hubH:s,boreD:l},features:[{kind:"bolts",n:u,bc:v,d,top:n,cb:f,startDeg:0,group:1}]}}function sa(i,t){const e=t.slice();for(let n=e.length-1;n>0;n--){const r=Math.floor(i.next()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}const fd={plate:cd,lbracket:ud,stepped:hd,flange:dd};function pd(i){const t=JSON.parse(JSON.stringify(i));return delete t._group,t}const $i=297,Cr=210,cn=8,Cl=27,Ls=6.5,Ds=7,oa=3,ar=2.8,ns=2.4,yo=[5,4,3,2.5,2,1.5,1,.75,.5,.4,.3,.25,.2,.15,.1];function Pe(i){const t=Math.round(i*1e3)/1e3;return String(t)}const Xn="Ø";function md(i){for(let t=1;t<=20;t++){const e=i*t;if(Math.abs(e-Math.round(e))<1e-9){const n=Math.round(e),r=qc(n,t);return`${n/r}:${t/r}`}}return i.toFixed(2)}function qc(i,t){return t?qc(t,i%t):i}function Dn(i,t,e,n,r,s=16){const a=[];for(let o=0;o<=s;o++){const l=n+(r-n)*o/s;a.push([i+e*Math.cos(l),t+e*Math.sin(l)])}return a}function Yc(i,t,e,n,r){if(r<=0)return[[i,t],[e,t],[e,n],[i,n]];const s=Math.PI;return[...Dn(e-r,t+r,r,-s/2,0),...Dn(e-r,n-r,r,0,s/2),...Dn(i+r,n-r,r,s/2,s),...Dn(i+r,t+r,r,s,1.5*s)]}function gd(i,t,e,n,r){const s=e/2,a=(n-e)/2,o=Math.PI;return r==="x"?[...Dn(i+a,t,s,-o/2,o/2),...Dn(i-a,t,s,o/2,1.5*o)]:[...Dn(i,t+a,s,0,o),...Dn(i,t-a,s,o,2*o)]}function _d(i,t,e){if(!e)return[[0,0],[i,0],[i,t],[0,t]];const n=e.size;return e.kind==="chamfer"?[[n,0],[i-n,0],[i,n],[i,t-n],[i-n,t],[n,t],[0,t-n],[0,n]]:Yc(0,0,i,t,n)}function Is(i,t,e,n){i.push({t:"cmark",c:[t,e],r:n})}function vd(i){const t=i.body,e=t.segs,n=e[e.length-1].x1,r=t.W,s=Math.max(...e.map(c=>c.h)),a={name:"TOP",u0:0,u1:n,v0:0,v1:r,prims:[]},o={name:"FRONT",u0:0,u1:n,v0:0,v1:s,prims:[]},l={name:"RIGHT",u0:0,u1:r,v0:0,v1:s,prims:[]};a.prims.push({t:"poly",pts:_d(n,r,t.corner),closed:!0,st:"vis"});for(let c=0;c<e.length-1;c++)a.prims.push({t:"line",a:[e[c].x1,0],b:[e[c].x1,r],st:"vis"});for(const c of t.fillets||[]){const m=c.xb+c.dir*c.r;a.prims.push({t:"line",a:[m,0],b:[m,r],st:"thin"})}const u=Math.PI,d=[[0,e[0].h]];for(let c=0;c<e.length-1;c++){const m=e[c],v=e[c+1],x=m.x1,h=(t.fillets||[]).find(g=>Math.abs(g.xb-x)<1e-9);h?h.dir<0?d.push([x-h.r,m.h],...Dn(x-h.r,m.h+h.r,h.r,-u/2,0),[x,v.h]):d.push([x,m.h],[x,v.h+h.r],...Dn(x+h.r,v.h+h.r,h.r,u,1.5*u),[x+h.r,v.h]):d.push([x,m.h],[x,v.h])}d.push([n,e[e.length-1].h]);const f=[[0,0],[n,0],...d.reverse()];if(o.prims.push({t:"poly",pts:xd(f),closed:!0,st:"vis"}),t.corner){const c=t.corner.size,m=e[0].h,v=t.corner.kind==="chamfer"?"vis":"thin";o.prims.push({t:"line",a:[c,0],b:[c,m],st:v},{t:"line",a:[n-c,0],b:[n-c,m],st:v}),l.prims.push({t:"line",a:[c,0],b:[c,m],st:v},{t:"line",a:[r-c,0],b:[r-c,m],st:v})}l.prims.push({t:"poly",pts:[[0,0],[r,0],[r,s],[0,s]],closed:!0,st:"vis"});for(let c=0;c<e.length;c++){const m=e[c].h;if(Math.abs(m-s)<1e-9)continue;const v=Math.max(0,...e.slice(c+1).map(x=>x.h));l.prims.push({t:"line",a:[0,m],b:[r,m],st:v>m+1e-9?"hid":"vis"})}return i.features.forEach(c=>{if(c.kind==="zhole"){const m=c.d/2,v=c.top-c.depth;a.prims.push({t:"circle",c:[c.x,c.y],r:m,st:"vis",obst:!0}),c.cb&&a.prims.push({t:"circle",c:[c.x,c.y],r:c.cb.d/2,st:"vis",obst:!0}),Is(a.prims,c.x,c.y,Math.max(m,c.cb?c.cb.d/2:0));for(const[x,h]of[[o,c.x],[l,c.y]]){const g=c.cb?c.top-c.cb.depth:c.top;if(x.prims.push({t:"line",a:[h-m,v],b:[h-m,g],st:"hid"},{t:"line",a:[h+m,v],b:[h+m,g],st:"hid"}),c.thru||x.prims.push({t:"line",a:[h-m,v],b:[h+m,v],st:"hid"}),c.cb){const T=c.cb.d/2;x.prims.push({t:"line",a:[h-T,g],b:[h-T,c.top],st:"hid"},{t:"line",a:[h+T,g],b:[h+T,c.top],st:"hid"},{t:"line",a:[h-T,g],b:[h+T,g],st:"hid"})}x.prims.push({t:"cline",a:[h,v],b:[h,c.top]})}}else if(c.kind==="slot"){const m=c.top-c.depth;a.prims.push({t:"poly",pts:gd(c.x,c.y,c.w,c.len,c.dir),closed:!0,st:"vis",obst:!0});const v=(c.len-c.w)/2;c.dir==="x"?a.prims.push({t:"cline",a:[c.x-v-c.w/2,c.y],b:[c.x+v+c.w/2,c.y]},{t:"cline",a:[c.x,c.y-c.w/2],b:[c.x,c.y+c.w/2]}):a.prims.push({t:"cline",a:[c.x,c.y-v-c.w/2],b:[c.x,c.y+v+c.w/2]},{t:"cline",a:[c.x-c.w/2,c.y],b:[c.x+c.w/2,c.y]});const x=c.dir==="x"?c.len/2:c.w/2,h=c.dir==="x"?c.w/2:c.len/2;for(const[g,T,M]of[[o,c.x,x],[l,c.y,h]])g.prims.push({t:"line",a:[T-M,m],b:[T-M,c.top],st:"hid"},{t:"line",a:[T+M,m],b:[T+M,c.top],st:"hid"}),c.thru||g.prims.push({t:"line",a:[T-M,m],b:[T+M,m],st:"hid"}),g.prims.push({t:"cline",a:[T,m],b:[T,c.top]})}else if(c.kind==="pocket"){const m=c.top-c.depth;a.prims.push({t:"poly",pts:Yc(c.x0,c.y0,c.x1,c.y1,c.r),closed:!0,st:"vis",obst:!0});for(const[v,x,h]of[[o,c.x0,c.x1],[l,c.y0,c.y1]])v.prims.push({t:"line",a:[x,m],b:[x,c.top],st:"hid"},{t:"line",a:[h,m],b:[h,c.top],st:"hid"},{t:"line",a:[x,m],b:[h,m],st:"hid"})}else if(c.kind==="yhole"){const m=c.d/2;o.prims.push({t:"circle",c:[c.x,c.z],r:m,st:"vis",obst:!0}),Is(o.prims,c.x,c.z,m),a.prims.push({t:"line",a:[c.x-m,0],b:[c.x-m,r],st:"hid"},{t:"line",a:[c.x+m,0],b:[c.x+m,r],st:"hid"},{t:"cline",a:[c.x,0],b:[c.x,r]}),l.prims.push({t:"line",a:[0,c.z-m],b:[r,c.z-m],st:"hid"},{t:"line",a:[0,c.z+m],b:[r,c.z+m],st:"hid"},{t:"cline",a:[0,c.z],b:[r,c.z]})}else if(c.kind==="xhole"){const m=c.d/2,v=e.some(x=>x.x0>=c.x1-1e-9&&x.h>c.z-m+1e-9);l.prims.push({t:"circle",c:[c.y,c.z],r:m,st:v?"hid":"vis",obst:!0}),Is(l.prims,c.y,c.z,m),a.prims.push({t:"line",a:[c.x0,c.y-m],b:[c.x1,c.y-m],st:"hid"},{t:"line",a:[c.x0,c.y+m],b:[c.x1,c.y+m],st:"hid"},{t:"cline",a:[c.x0,c.y],b:[c.x1,c.y]}),o.prims.push({t:"line",a:[c.x0,c.z-m],b:[c.x1,c.z-m],st:"hid"},{t:"line",a:[c.x0,c.z+m],b:[c.x1,c.z+m],st:"hid"},{t:"cline",a:[c.x0,c.z],b:[c.x1,c.z]})}}),{top:a,front:o,right:l,L:n,W:r,H:s}}function xd(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n[0]-e[0],n[1]-e[1])>1e-9)&&t.push(e)}return t}function yd(i){const t=i.body,e=t.chamfer||0,n=t.t+(t.hubR>0?t.hubH:0),r={name:"TOP",u0:-t.R,u1:t.R,v0:-t.R,v1:t.R,prims:[]},s={name:"FRONT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]},a={name:"RIGHT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]};r.prims.push({t:"circle",c:[0,0],r:t.R,st:"vis"}),e>0&&r.prims.push({t:"circle",c:[0,0],r:t.R-e,st:"vis"}),t.hubR>0&&r.prims.push({t:"circle",c:[0,0],r:t.hubR,st:"vis"}),r.prims.push({t:"circle",c:[0,0],r:t.boreD/2,st:"vis",obst:!0}),r.prims.push({t:"cline",a:[-t.R,0],b:[t.R,0]},{t:"cline",a:[0,-t.R],b:[0,t.R]});const o=[[-t.R,0],[t.R,0]];e>0?o.push([t.R,t.t-e],[t.R-e,t.t]):o.push([t.R,t.t]),t.hubR>0&&o.push([t.hubR,t.t],[t.hubR,n],[-t.hubR,n],[-t.hubR,t.t]),e>0?o.push([-(t.R-e),t.t],[-t.R,t.t-e]):o.push([-t.R,t.t]);for(const l of[s,a]){l.prims.push({t:"poly",pts:o,closed:!0,st:"vis"}),e>0&&l.prims.push({t:"line",a:[-t.R,t.t-e],b:[t.R,t.t-e],st:"vis"}),t.hubR>0&&l.prims.push({t:"line",a:[-t.hubR,t.t],b:[t.hubR,t.t],st:"vis"});const u=t.boreD/2;l.prims.push({t:"line",a:[-u,0],b:[-u,n],st:"hid"},{t:"line",a:[u,0],b:[u,n],st:"hid"}),l.prims.push({t:"cline",a:[0,0],b:[0,n]})}for(const l of i.features){if(l.kind!=="bolts")continue;r.prims.push({t:"circle",c:[0,0],r:l.bc/2,st:"ctr"});const u=new Set,d=new Set;for(let f=0;f<l.n;f++){const c=((l.startDeg||0)+360*f/l.n)*Math.PI/180,m=l.bc/2*Math.cos(c),v=l.bc/2*Math.sin(c);r.prims.push({t:"circle",c:[m,v],r:l.d/2,st:"vis",obst:!0}),l.cb&&r.prims.push({t:"circle",c:[m,v],r:l.cb.d/2,st:"vis",obst:!0}),Is(r.prims,m,v,Math.max(l.d,l.cb?l.cb.d:0)/2);for(const[x,h,g]of[[s,m,u],[a,v,d]]){const T=Math.round(h*1e3);if(g.has(T))continue;g.add(T);const M=l.d/2,w=l.cb?t.t-l.cb.depth:t.t;if(x.prims.push({t:"line",a:[h-M,0],b:[h-M,w],st:"hid"},{t:"line",a:[h+M,0],b:[h+M,w],st:"hid"}),l.cb){const O=l.cb.d/2;x.prims.push({t:"line",a:[h-O,w],b:[h-O,t.t],st:"hid"},{t:"line",a:[h+O,w],b:[h+O,t.t],st:"hid"},{t:"line",a:[h-O,w],b:[h+O,w],st:"hid"})}x.prims.push({t:"cline",a:[h,0],b:[h,t.t]})}}}return{top:r,front:s,right:a,L:2*t.R,W:2*t.R,H:n}}function Md(i,t){const e=i.body,n={top:{stacks:{},callouts:[]},front:{stacks:{},callouts:[]},right:{stacks:{},callouts:[]}},r=(s,a,o)=>(n[s].stacks[a]=n[s].stacks[a]||[]).push(o);if(e.type==="prism"){const s=Gc(i),a=e.segs,o=s.overall.L,l=s.overall.W,u=s.overall.H,d=v=>{let x=-1/0,h=1/0;for(const g of v){const T=/^f(\d+)\.(\w+)$/.exec(g);if(!T)continue;const M=i.features[+T[1]];let w,O;if(M.kind==="zhole"){const L=Math.max(M.d,M.cb?M.cb.d:0)/2;w=M.y+L,O=M.y-L}else if(M.kind==="slot"){const L=M.dir==="x"?M.w/2:M.len/2;w=M.y+L,O=M.y-L}else if(M.kind==="pocket")w=M.y1,O=M.y0;else continue;x=Math.max(x,w),h=Math.min(h,O)}return{hi:x,lo:h}},f=v=>{let x=1/0;for(const h of v){const g=/^f(\d+)\.(\w+)$/.exec(h);if(!g)continue;const T=i.features[+g[1]];T.kind==="zhole"?x=Math.min(x,T.x-Math.max(T.d,T.cb?T.cb.d:0)/2):T.kind==="slot"?x=Math.min(x,T.x-(T.dir==="x"?T.len/2:T.w/2)):T.kind==="pocket"&&(x=Math.min(x,T.x0))}return x};for(const v of s.topX){const x=d(v.tags);r("top","top",{v:v.v,tags:v.tags,from:isFinite(x.hi)?x.hi:l})}r("top","top",{v:o,tags:["L"],from:l,overall:!0});for(const v of s.topY){const x=f(v.tags);r("top","left",{v:v.v,tags:v.tags,from:isFinite(x)?x:0})}r("top","left",{v:l,tags:["W"],from:0,overall:!0});for(const v of s.frontX){let x=0;for(const h of v.tags){const g=/^f(\d+)\.x$/.exec(h);if(g){const T=i.features[+g[1]];x=T.z-T.d/2}}r("front","bottom",{v:v.v,tags:v.tags,from:x})}for(const v of s.frontZ){let x="left",h=0;const g=v.tags.map(T=>/^seg(\d+)\.h$/.exec(T)).filter(Boolean).map(T=>+T[1]);if(g.length){const T=Math.min(...g),M=a.slice(0,T).every(L=>L.h<=v.v+1e-9),w=Math.max(...g),O=a.slice(w+1).every(L=>L.h<=v.v+1e-9);M?(x="left",h=a[T].x0):O?(x="right",h=a[w].x1):(x="left",h=a[T].x0)}else for(const T of v.tags){const M=/^f(\d+)\.z$/.exec(T);if(M){const w=i.features[+M[1]];h=w.x-w.d/2}}r("front",x,{v:v.v,tags:v.tags,from:h,overall:Math.abs(v.v-u)<1e-9})}for(const v of s.rightY){let x=0;for(const h of v.tags){const g=/^f(\d+)\.y$/.exec(h);if(g){const T=i.features[+g[1]];x=T.z-T.d/2}}r("right","bottom",{v:v.v,tags:v.tags,from:x})}for(const v of s.rightZ){let x=l;for(const h of v.tags){const g=/^f(\d+)\.z$/.exec(h);if(g){const T=i.features[+g[1]];x=T.y+T.d/2}}r("right","right",{v:v.v,tags:v.tags,from:x})}if(e.corner){const v=e.corner.size,x=e.corner.kind==="round"?[o-v+v*Math.SQRT1_2,l-v+v*Math.SQRT1_2]:[o-v/2,l-v/2];n.top.callouts.push({target:x,lines:[e.corner.kind==="round"?`4× R${Pe(v)}`:`4× ${Pe(v)} × 45° CHAMFER`],tags:["corner"]})}const c=new Map;i.features.forEach((v,x)=>{let h,g;v.kind==="zhole"?(h=`z|${v.d}|${v.thru}|${v.depth}|${v.cb?v.cb.d+"/"+v.cb.depth:""}|${v.top}`,g="top"):v.kind==="slot"?(h=`s|${x}`,g="top"):v.kind==="pocket"?(h=`p|${x}`,g="top"):v.kind==="yhole"?(h=`y|${v.d}`,g="front"):v.kind==="xhole"&&(h=`x|${v.d}|${v.x0}|${v.x1}`,g="right"),c.has(h)||c.set(h,{view:g,idx:[]}),c.get(h).idx.push(x)});for(const v of c.values()){const x=v.idx.map(b=>i.features[b]),h=x[0],g=x.length,T=g>1?`${g}× `:"",M=[];for(const b of v.idx){const W=i.features[b];W.kind==="zhole"&&M.push(`f${b}.d`,`f${b}.depth`,...W.cb?[`f${b}.cb`]:[]),(W.kind==="yhole"||W.kind==="xhole")&&M.push(`f${b}.d`),W.kind==="slot"&&M.push(`f${b}.w`,`f${b}.len`,`f${b}.depth`),W.kind==="pocket"&&M.push(`f${b}.r`,`f${b}.depth`)}let w,O,L;const C=b=>b.kind==="zhole"||b.kind==="slot"?b.x+b.y*.5:b.kind==="pocket"?b.x1+b.y1*.5:b.kind==="yhole"?b.x+b.z*.5:b.y+b.z*.5;L=x.reduce((b,W,Y)=>C(W)>C(x[b])?Y:b,0);const N=x[L],rt=Math.SQRT1_2;if(h.kind==="zhole"){w=[`${T}${Xn}${Pe(h.d)} ${h.thru?"THRU":`× ${Pe(h.depth)} DEEP`}`],h.cb&&w.push(`C'BORE ${Xn}${Pe(h.cb.d)} × ${Pe(h.cb.depth)} DEEP`);const b=(h.cb?h.cb.d:h.d)/2;O=[N.x+b*rt,N.y+b*rt]}else if(h.kind==="slot"){w=[`SLOT ${Pe(h.w)} WIDE × ${Pe(h.len)} LONG`,h.thru?"OVERALL, THRU":`OVERALL, ${Pe(h.depth)} DEEP`];const b=(h.len-h.w)/2,W=h.dir==="x"?h.x+b:h.x,Y=h.dir==="x"?h.y:h.y+b;O=[W+h.w/2*rt,Y+h.w/2*rt]}else h.kind==="pocket"?(w=[`POCKET ${Pe(h.depth)} DEEP`,`R${Pe(h.r)} INSIDE CORNERS`],O=[h.x1-h.r+h.r*rt,h.y1-h.r+h.r*rt]):h.kind==="yhole"?(w=[`${T}${Xn}${Pe(h.d)} THRU`],O=[N.x+h.d/2*rt,N.z+h.d/2*rt]):h.kind==="xhole"&&(w=[`${T}${Xn}${Pe(h.d)} THRU`],O=[N.y+h.d/2*rt,N.z+h.d/2*rt]);const y=x.map(b=>{if(b.kind==="zhole"){const W=(b.cb?b.cb.d:b.d)/2;return[b.x+W*rt,b.y+W*rt]}return b.kind==="yhole"?[b.x+b.d/2*rt,b.z+b.d/2*rt]:b.kind==="xhole"?[b.y+b.d/2*rt,b.z+b.d/2*rt]:null}).filter(Boolean);n[v.view].callouts.push({target:O,alts:y.length>1?y:null,lines:w,tags:M})}const m=new Map;(e.fillets||[]).forEach((v,x)=>{const h=v.r;m.has(h)||m.set(h,[]),m.get(h).push(x)});for(const[v,x]of m){const h=e.fillets[x[x.length-1]],g=h.xb+h.dir*h.r,T=h.z+h.r,M=[g-h.dir*h.r*Math.SQRT1_2,T-h.r*Math.SQRT1_2];n.front.callouts.push({target:M,lines:[`${x.length>1?x.length+"× ":""}R${Pe(v)} FILLET`],tags:x.map(w=>`fillet${w}`)})}}else{const s=e.t+(e.hubR>0?e.hubH:0);r("front","bottom",{v:2*e.R,sym:!0,tags:["R"],from:0,overall:!0,dia:!0}),e.hubR>0&&r("front","top",{v:2*e.hubR,sym:!0,tags:["hubR"],from:s,dia:!0}),r("front","left",{v:e.t,tags:["t"],from:-e.R}),e.hubR>0&&r("front","left",{v:s,tags:["hubH"],from:-e.hubR,overall:!0});const a=Math.SQRT1_2;n.top.callouts.push({target:[-(e.boreD/2)*a,e.boreD/2*a],lines:[`${Xn}${Pe(e.boreD)} THRU`],tags:["boreD"],leftward:!0});for(const o of i.features){const l=o.bc/2,u=(o.cb?o.cb.d:o.d)/2,d=[`${o.n}× ${Xn}${Pe(o.d)} THRU`];o.cb&&d.push(`C'BORE ${Xn}${Pe(o.cb.d)} × ${Pe(o.cb.depth)} DEEP`),d.push(`EQ. SPACED ON ${Xn}${Pe(o.bc)} B.C.`),n.top.callouts.push({target:[l+u*a,u*a],lines:d,tags:["bolts.n","bolts.d","bolts.bc",...o.cb?["bolts.cb"]:[]]})}if(e.chamfer>0){const o=e.chamfer;n.front.callouts.push({target:[e.R-o/2,e.t-o/2],lines:[`${Pe(o)} × 45° CHAMFER`],tags:["chamfer"]})}}return n}function aa(i,t){return i.length*t*.56}function Mo(i){const t={top:3,bottom:3,left:3,right:3,calloutW:0};for(const e of["top","bottom","left","right"]){const n=(i.stacks[e]||[]).length;n&&(t[e]=Ds+(n-1)*Ls+4.5)}if(i.callouts.length){const e=Math.max(...i.callouts.flatMap(n=>n.lines.map(r=>aa(r,ar))));t.calloutW=e+9,t.right+=t.calloutW}return t}function Hr(i,t={}){const e=t.theme||"light",n=i.body.type==="prism"?vd(i):yd(i),r=Md(i),s=Mo(r.top),a=Mo(r.front),o=Mo(r.right),l=n.top.u1-n.top.u0,u=n.right.u1-n.right.u0,d=n.front.v1-n.front.v0,f=n.top.v1-n.top.v0,c=62,m=6,v=Math.max(s.left,a.left),x=Math.max(s.right,a.right),h=$i-2*cn-4,g=Cr-2*cn-Cl-4;let T=yo[yo.length-1],M=!1;for(const z of yo){const Et=v+l*z+x,bt=Math.max(o.left+u*z+o.right,c),lt=s.top+f*z+Math.max(s.bottom,0),Lt=Math.max(a.top,o.top)+d*z+Math.max(a.bottom,o.bottom);if(Et+m+bt<=h&&lt+m+Lt<=g){T=z,M=!0;break}}const w=cn+2,O=cn+2,L=v+l*T+x,C=s.top+f*T+s.bottom,N=Math.max(a.top,o.top),rt=h-(L+m+Math.max(o.left+u*T+o.right,c)),y=g-(C+m+N+d*T+Math.max(a.bottom,o.bottom)),b=Math.max(0,rt/3),W=Math.max(0,y/3),Y=w+b+v-n.top.u0*T,it=O+W+s.top,pt={...n.top,ox:Y,oy:it+n.top.v1*T},Z=it+f*T+s.bottom+m+W+N,vt={...n.front,ox:Y,oy:Z+d*T},tt=w+b+L+m+b,Dt={...n.right,ox:tt+o.left-n.right.u0*T,oy:vt.oy},Mt=(z,Et,bt)=>[z.ox+Et*T,z.oy-bt*T],_t=[],se=new Set,ce=z=>{for(const lt of z.prims)if(lt.t==="line"){const[Lt,j]=Mt(z,...lt.a),[gt,At]=Mt(z,...lt.b);_t.push(`<line class="${lt.st}" x1="${ht(Lt)}" y1="${ht(j)}" x2="${ht(gt)}" y2="${ht(At)}"/>`)}else if(lt.t==="cline"){const[Lt,j]=Mt(z,...lt.a),[gt,At]=Mt(z,...lt.b),kt=Math.hypot(gt-Lt,At-j)||1,Tt=(gt-Lt)/kt*2,Ft=(At-j)/kt*2;_t.push(`<line class="ctr" x1="${ht(Lt-Tt)}" y1="${ht(j-Ft)}" x2="${ht(gt+Tt)}" y2="${ht(At+Ft)}"/>`)}else if(lt.t==="circle"){const[Lt,j]=Mt(z,...lt.c);_t.push(`<circle class="${lt.st}" cx="${ht(Lt)}" cy="${ht(j)}" r="${ht(lt.r*T)}"/>`)}else if(lt.t==="poly"){const Lt=lt.pts.map(j=>Mt(z,...j).map(ht).join(",")).join(" ");_t.push(`<${lt.closed?"polygon":"polyline"} class="${lt.st}" points="${Lt}"/>`)}else if(lt.t==="cmark"){const[Lt,j]=Mt(z,...lt.c),gt=lt.r*T+1.6,At=Math.min(1.2,lt.r*T*.5);_t.push(`<path class="ctr" d="M${ht(Lt-gt)} ${ht(j)}H${ht(Lt-At*1.4)}M${ht(Lt-At)} ${ht(j)}H${ht(Lt+At)}M${ht(Lt+At*1.4)} ${ht(j)}H${ht(Lt+gt)}M${ht(Lt)} ${ht(j-gt)}V${ht(j-At*1.4)}M${ht(Lt)} ${ht(j-At)}V${ht(j+At)}M${ht(Lt)} ${ht(j+At*1.4)}V${ht(j+gt)}"/>`)}const Et=Mt(z,(z.u0+z.u1)/2,z.v0),bt=z===pt?s.bottom:Math.max(a.bottom,o.bottom);_t.push(`<text class="vlabel" x="${ht(Et[0])}" y="${ht(Et[1]+bt+3.4)}" text-anchor="middle">${z.name}</text>`)};ce(pt),ce(vt),ce(Dt);const nt=(z,Et,bt,lt)=>{const Lt=Math.hypot(bt,lt)||1,j=bt/Lt,gt=lt/Lt,At=z-j*ns,kt=Et-gt*ns,Tt=.75;return`<path class="arr" d="M${ht(z)} ${ht(Et)}L${ht(At-gt*Tt)} ${ht(kt+j*Tt)}L${ht(At+gt*Tt)} ${ht(kt-j*Tt)}Z"/>`},dt=(z,Et,bt,lt=0,Lt="middle")=>`<text class="dim" x="${ht(z)}" y="${ht(Et)}" text-anchor="${Lt}"${lt?` transform="rotate(${lt} ${ht(z)} ${ht(Et)})"`:""}>${Pr(bt)}</text>`,It=(z,Et,bt)=>{for(const lt of["top","bottom","left","right"]){const Lt=(Et.stacks[lt]||[]).slice();Lt.length&&(Lt.sort((j,gt)=>(j.overall?1:0)-(gt.overall?1:0)||j.v-gt.v),Lt.forEach((j,gt)=>{j.tags.forEach(kt=>se.add(kt));const At=(j.dia?Xn:"")+Pe(j.v);if(lt==="top"||lt==="bottom"){const kt=j.sym?-j.v/2:0,Tt=j.sym?j.v/2:j.v,[Ft]=Mt(z,kt,0),[wt]=Mt(z,Tt,0),le=lt==="top"?Mt(z,0,z.v1)[1]:Mt(z,0,z.v0)[1],I=lt==="top"?-1:1,ut=le+I*(Ds+gt*Ls),K=Mt(z,0,j.from)[1]+I*1.2,F=j.sym?K:le+I*1.2;_t.push(`<line class="ext" x1="${ht(Ft)}" y1="${ht(j.sym?K:F)}" x2="${ht(Ft)}" y2="${ht(ut+I*1.5)}"/>`),_t.push(`<line class="ext" x1="${ht(wt)}" y1="${ht(K)}" x2="${ht(wt)}" y2="${ht(ut+I*1.5)}"/>`);const st=wt-Ft,Q=aa(At,oa);st>=Q+2*ns+1.5?(_t.push(`<line class="dimln" x1="${ht(Ft)}" y1="${ht(ut)}" x2="${ht(wt)}" y2="${ht(ut)}"/>`),_t.push(nt(Ft,ut,-1,0),nt(wt,ut,1,0)),_t.push(dt((Ft+wt)/2,ut-.9,At))):(_t.push(`<line class="dimln" x1="${ht(Ft-5)}" y1="${ht(ut)}" x2="${ht(wt+5)}" y2="${ht(ut)}"/>`),_t.push(nt(Ft,ut,1,0),nt(wt,ut,-1,0)),_t.push(dt(Ft-5.5,ut+1.05,At,0,"end")))}else{const kt=j.sym?-j.v/2:0,Tt=j.sym?j.v/2:j.v,Ft=Mt(z,0,kt)[1],wt=Mt(z,0,Tt)[1],le=lt==="left"?Mt(z,z.u0,0)[0]:Mt(z,z.u1,0)[0],I=lt==="left"?-1:1,ut=le+I*(Ds+gt*Ls),K=Mt(z,j.from,0)[0]+I*1.2,F=le+I*1.2;_t.push(`<line class="ext" x1="${ht(F)}" y1="${ht(Ft)}" x2="${ht(ut+I*1.5)}" y2="${ht(Ft)}"/>`),_t.push(`<line class="ext" x1="${ht(K)}" y1="${ht(wt)}" x2="${ht(ut+I*1.5)}" y2="${ht(wt)}"/>`);const st=Ft-wt,Q=aa(At,oa);st>=Q+2*ns+1.5?(_t.push(`<line class="dimln" x1="${ht(ut)}" y1="${ht(Ft)}" x2="${ht(ut)}" y2="${ht(wt)}"/>`),_t.push(nt(ut,Ft,0,1),nt(ut,wt,0,-1)),_t.push(dt(ut-.9,(Ft+wt)/2,At,-90))):gt===Lt.length-1?(_t.push(`<line class="dimln" x1="${ht(ut)}" y1="${ht(Ft+5)}" x2="${ht(ut)}" y2="${ht(wt-5)}"/>`),_t.push(nt(ut,Ft,0,-1),nt(ut,wt,0,1)),_t.push(dt(ut+I*1.2,(Ft+wt)/2+1.05,At,0,I<0?"end":"start"))):(_t.push(`<line class="dimln" x1="${ht(ut)}" y1="${ht(Ft+5)}" x2="${ht(ut)}" y2="${ht(wt-5)}"/>`),_t.push(nt(ut,Ft,0,-1),nt(ut,wt,0,1)),_t.push(`<line class="dimln" x1="${ht(ut)}" y1="${ht(wt-5)}" x2="${ht(ut)}" y2="${ht(wt-5.5-Q)}"/>`),_t.push(dt(ut-.9,wt-5.5,At,-90,"start")))}}))}};It(pt,r.top),It(vt,r.front),It(Dt,r.right);const Ut=(z,Et,bt,lt)=>{if(!Et.callouts.length)return;const Lt=(Et.stacks.right||[]).length,j=Mt(z,z.u1,0)[0]+(Lt?Ds+(Lt-1)*Ls+4.5:3)+6,gt=Et.callouts.map(F=>{const st=Mt(z,...F.target);return{...F,tp:st,h:F.lines.length*(ar+.9)+.6,y:st[1]-3}});gt.sort((F,st)=>F.y-st.y);const At=lt[0],kt=lt[1],Tt=[];for(const F of z.prims)if(F.obst){if(F.t==="circle"){const[st,Q]=Mt(z,...F.c);Tt.push({k:"c",cx:st,cy:Q,r:F.r*T})}else if(F.t==="poly"){const st=F.pts.map(Kt=>Mt(z,...Kt)),Q=st.map(Kt=>Kt[0]),$t=st.map(Kt=>Kt[1]);Tt.push({k:"r",x0:Math.min(...Q),x1:Math.max(...Q),y0:Math.min(...$t),y1:Math.max(...$t)})}}const Ft=(F,st)=>F.k==="c"?Math.abs(Math.hypot(st[0]-F.cx,st[1]-F.cy)-F.r)<.6||Math.hypot(st[0]-F.cx,st[1]-F.cy)<F.r:st[0]>=F.x0-.6&&st[0]<=F.x1+.6&&st[1]>=F.y0-.6&&st[1]<=F.y1+.6,wt=F=>[j-2.5,F+ar*.75-1],le=(F,st)=>Tt.some(Q=>!Ft(Q,F)&&(Q.k==="c"?bd(F,st,[Q.cx,Q.cy])<Q.r+.8:Sd(F,st,Q.x0-.8,Q.y0-.8,Q.x1+.8,Q.y1+.8))),I=[],ut=(F,st)=>F>=At-1e-9&&F+st<=kt+1e-9&&I.every(Q=>F+st+1.2<=Q.y||F>=Q.y+Q.h+1.2),K=(F,st)=>I.some(Q=>Ed(F,st,Q.tp,wt(Q.y)));for(const F of gt){let st=null;const Q=(F.alts||[F.target]).map($t=>Mt(z,...$t));for(let $t=0;$t<=400&&st==null;$t++)for(const Kt of Q){const he=Kt[1]-3;for(const oe of $t?[1,-1]:[1]){const Le=he+oe*$t*.5;if(!ut(Le,F.h))continue;const $e=wt(Le);if(!(le(Kt,$e)||K(Kt,$e))){st=Le,F.tp=Kt;break}}if(st!=null)break}if(st==null)for(let $t=0;$t<=400&&st==null;$t++)for(const Kt of[1,-1]){const he=F.y+Kt*$t*.5;if(ut(he,F.h)){st=he;break}}F.y=st??F.y,I.push(F)}for(const F of gt){F.tags.forEach(he=>se.add(he));const st=F.y+ar*.75,Q=j-2.5;_t.push(`<polyline class="leader" points="${ht(F.tp[0])},${ht(F.tp[1])} ${ht(Q)},${ht(st-1)} ${ht(j-.8)},${ht(st-1)}"/>`);const $t=F.tp[0]-Q,Kt=F.tp[1]-(st-1);_t.push(nt(F.tp[0],F.tp[1],$t,Kt)),F.lines.forEach((he,oe)=>{_t.push(`<text class="call" x="${ht(j)}" y="${ht(st+oe*(ar+.9))}">${Pr(he)}</text>`)})}};Ut(pt,r.top,s,[O+1,pt.oy+s.bottom]),Ut(vt,r.front,a,[Z-N+1,vt.oy+a.bottom]),Ut(Dt,r.right,o,[Z-N+1,Dt.oy+o.bottom]);const qt=tt,zt=O+2,ee=$i-cn-3-qt,ae=Z-N-zt-7;t.isoHref?_t.push(`<image href="${t.isoHref}" x="${ht(qt)}" y="${ht(zt)}" width="${ht(ee)}" height="${ht(ae)}" preserveAspectRatio="xMidYMid meet"/>`):(_t.push(`<rect class="isobox" x="${ht(qt)}" y="${ht(zt)}" width="${ht(ee)}" height="${ht(ae)}" rx="2"/>`),_t.push(`<text class="vlabel" x="${ht(qt+ee/2)}" y="${ht(zt+ae/2)}" text-anchor="middle">3D PREVIEW</text>`)),_t.push(`<text class="vlabel" x="${ht(qt+ee/2)}" y="${ht(zt+ae+3.6)}" text-anchor="middle">ISOMETRIC (REFERENCE ONLY)</text>`);const Qt=150,D=Cl-2,xe=$i-cn-Qt,Gt=Cr-cn-D,re=t.material||{name:"6061 ALUMINUM",density:2.7},Ot=[];Ot.push(`<rect class="frame" x="${cn}" y="${cn}" width="${$i-2*cn}" height="${Cr-2*cn}"/>`),Ot.push(`<rect class="frame" x="${xe}" y="${Gt}" width="${Qt}" height="${D}"/>`);const fe=xe+52,Wt=xe+104;Ot.push(`<line class="frame thin" x1="${fe}" y1="${Gt}" x2="${fe}" y2="${Gt+D}"/>`),Ot.push(`<line class="frame thin" x1="${Wt}" y1="${Gt}" x2="${Wt}" y2="${Gt+D}"/>`),Ot.push(`<line class="frame thin" x1="${xe}" y1="${Gt+D/2}" x2="${xe+Qt}" y2="${Gt+D/2}"/>`);const R=(z,Et,bt,lt,Lt)=>`<text class="tbl" x="${z+2}" y="${Et+3.6}">${bt}</text><text class="${Lt?"tbv big":"tbv"}" x="${z+2}" y="${Et+9.6}">${Pr(lt)}</text>`,S=D/2;Ot.push(R(xe,Gt,"PRACTICE DRILL","UNDO DILIGENCE",!0)),Ot.push(R(fe,Gt,"DRILL",`${i.id} · ${i.difficulty.toUpperCase()}`,!0)),Ot.push(R(Wt,Gt,"PART",i.title.toUpperCase())),Ot.push(R(xe,Gt+S,"MATERIAL",`${re.name} · ${re.density} g/cm³`)),Ot.push(R(fe,Gt+S,"UNITS · SCALE",`MM · ${md(T)}${M?"":" (REDUCED)"}`)),Ot.push(`<text class="tbl" x="${Wt+2}" y="${Gt+S+3.6}">PROJECTION</text>`),Ot.push(Td(Wt+30,Gt+S+7.6)),Ot.push(`<text class="tbv" x="${Wt+2}" y="${Gt+S+9.6}">3RD ANGLE</text>`),["NOTES","1. ALL DIMENSIONS IN MILLIMETRES. DO NOT SCALE THE DRAWING.","2. HOLES ARE THRU UNLESS NOTED. BLIND HOLES, SLOTS AND POCKETS HAVE FLAT BOTTOMS.","3. LOCATIONS ARE MEASURED FROM THE LEFT, FRONT AND BOTTOM FACES"+(i.body.type==="flange"?" (FLANGE: FROM ITS AXIS).":"."),`4. TASK: MODEL THE PART, APPLY ${re.name} (${re.density} g/cm³) AND REPORT ITS MASS IN GRAMS.`].forEach((z,Et)=>Ot.push(`<text class="${Et?"note":"note b"}" x="${cn+3}" y="${Gt+3.6+Et*4.6}">${Pr(z)}</text>`)),t.answer&&Ot.push(`<text class="note b" x="${xe}" y="${Gt-2}">ANSWER: ${Pr(t.answer)}</text>`);const ot=Ad(e);return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${$i} ${Cr}" width="${t.width||"100%"}" ${t.height?`height="${t.height}"`:""} class="sheet" font-family="Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"><style>${ot}</style><rect class="paper" x="0" y="0" width="${$i}" height="${Cr}"/>${Ot.join("")}${_t.join("")}</svg>`,covered:se,scale:T,fitted:M}}function bd(i,t,e){const n=t[0]-i[0],r=t[1]-i[1],s=n*n+r*r||1e-9,a=Math.max(0,Math.min(1,((e[0]-i[0])*n+(e[1]-i[1])*r)/s));return Math.hypot(i[0]+a*n-e[0],i[1]+a*r-e[1])}function Sd(i,t,e,n,r,s){let a=0,o=1;const l=t[0]-i[0],u=t[1]-i[1];for(const[d,f]of[[-l,i[0]-e],[l,r-i[0]],[-u,i[1]-n],[u,s-i[1]]]){if(Math.abs(d)<1e-12){if(f<0)return!1;continue}const c=f/d;if(d<0){if(c>o)return!1;c>a&&(a=c)}else{if(c<a)return!1;c<o&&(o=c)}}return!0}function Ed(i,t,e,n){const r=(u,d,f)=>(d[0]-u[0])*(f[1]-u[1])-(d[1]-u[1])*(f[0]-u[0]),s=r(e,n,i),a=r(e,n,t),o=r(i,t,e),l=r(i,t,n);return s*a<0&&o*l<0}function Td(i,t){return`<g class="sym">
    <path d="M${i} ${t-2.2*.9}L${i+7*.9} ${t-3.6*.9}L${i+7*.9} ${t+3.6*.9}L${i} ${t+2.2*.9}Z"/>
    <circle cx="${i+13*.9}" cy="${t}" r="${3.6*.9}"/><circle cx="${i+13*.9}" cy="${t}" r="${2.2*.9}"/></g>`}function Ad(i){const t=i==="dark"?{paper:"#141920",ink:"#e8ecf1",hid:"#9aa6b2",ctr:"#6f8fb7",dim:"#f2b65a",frame:"#56616e",note:"#c3cbd4",thin:"#7d8894"}:i==="print"?{paper:"#ffffff",ink:"#000000",hid:"#000000",ctr:"#000000",dim:"#000000",frame:"#000000",note:"#000000",thin:"#555555"}:{paper:"#ffffff",ink:"#111418",hid:"#3a434d",ctr:"#56708f",dim:"#0a58c2",frame:"#2b3138",note:"#2b3138",thin:"#8a939c"};return`
.paper{fill:${t.paper}}
.vis{fill:none;stroke:${t.ink};stroke-width:.45;stroke-linejoin:round}
.hid{fill:none;stroke:${t.hid};stroke-width:.28;stroke-dasharray:1.6 .8}
.ctr,.ctr path{fill:none;stroke:${t.ctr};stroke-width:.18;stroke-dasharray:5 1 1 1}
path.ctr{stroke-dasharray:none}
.thin{fill:none;stroke:${t.thin};stroke-width:.18}
.ext,.dimln,.leader{fill:none;stroke:${t.dim};stroke-width:.18}
.arr{fill:${t.dim};stroke:none}
.dim{fill:${t.dim};font-size:${oa}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
.call{fill:${t.dim};font-size:${ar}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
.vlabel{fill:${t.note};font-size:2.6px;letter-spacing:.25px;font-weight:600}
.frame{fill:none;stroke:${t.frame};stroke-width:.5}
.frame.thin{stroke-width:.25}
.isobox{fill:none;stroke:${t.frame};stroke-width:.2;stroke-dasharray:1 1}
.tbl{fill:${t.note};font-size:2.1px;letter-spacing:.2px;opacity:.85}
.tbv{fill:${t.ink};font-size:3.3px;font-weight:600}
.tbv.big{font-size:4.1px;font-weight:700}
.note{fill:${t.note};font-size:2.55px}
.note.b{font-weight:700}
.sym path,.sym circle{fill:none;stroke:${t.ink};stroke-width:.3}
`}function ht(i){return(Math.round(i*100)/100).toString()}function Pr(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const la=[{id:"al6061",name:"6061 ALUMINUM",label:"Aluminum 6061",density:2.7},{id:"steel",name:"STEEL (MILD)",label:"Steel (mild)",density:7.85},{id:"ss304",name:"304 STAINLESS",label:"Stainless 304",density:8},{id:"brass",name:"BRASS C360",label:"Brass C360",density:8.5},{id:"abs",name:"ABS PLASTIC",label:"ABS plastic",density:1.04},{id:"pla",name:"PLA (100% INFILL)",label:"PLA, 100% infill",density:1.24}],Qa=.005;function Xi(i){return la.find(t=>t.id===i)||la[0]}function Ke(i,t,e){return Math.abs(i-t)<=Math.abs(t)*e}function wd(i,t,e){const n=zc(i),r=n.reduce((l,u)=>l+u.vol,0),s=Vs(r,e),a=Number(t);if(!isFinite(a)||a<=0)return{correct:!1,expected:s,errorPct:null,hint:"Enter the mass in grams as a positive number, e.g. 123.4"};const o=(a-s)/s*100;return Ke(a,s,Qa)?{correct:!0,expected:s,errorPct:o,hint:null}:{correct:!1,expected:s,errorPct:o,hint:Rd(i,n,r,a,e)}}function Rd(i,t,e,n,r){const a=f=>Vs(f,r);if(Ke(n,e,.004))return"That number matches the volume in mm³. Convert to mass: grams = mm³ ÷ 1000 × density.";if(Ke(n,e/1e3,.004))return"That matches the volume in cm³. Multiply by the density to get grams.";if(Ke(n,a(e)/1e3,.004))return"Looks like kilograms. The answer is in grams.";if(Ke(n,a(e)*1e3,.004))return"Off by exactly 1000×. Check your mm³ → cm³ conversion (1 cm³ = 1000 mm³).";if(Ke(n,a(e)/28.3495,.004))return"That looks like ounces. The answer is in grams.";if(Ke(n,a(e)/453.592,.004))return"That looks like pounds. The answer is in grams.";const o=[2.7,7.85,8,8.5,1.04,1.24,1];for(const f of o)if(Math.abs(f-r)/r>.03&&Ke(n,Vs(e,f),.004))return`Your geometry looks right, but that mass matches a density of ${f} g/cm³. This drill uses ${r} g/cm³.`;const l=new Map;for(const f of t){if(f.key==="body")continue;const c=f.featureIndex!=null?i.features[f.featureIndex]:null,m=c?`g${c.group??f.featureIndex}`:f.key+f.label;l.has(m)||l.set(m,{vol:0,label:f.label,n:0,f:c});const v=l.get(m);v.vol+=f.vol,v.n++}for(const f of l.values()){const c=f.label.charAt(0).toLowerCase()+f.label.slice(1),m=f.n>1?`${f.n}× ${c.replace(/\b(hole|slot|pocket)\b/,"$1s")}`:c;if(Ke(n,a(e-f.vol),.004))return f.vol<0?`Close: it looks like the ${m} ${f.n>1?"are":"is"} missing from your model.`:`Close: it looks like the ${m} ${f.n>1?"are":"is"} missing (it adds material).`;if(f.n>1){const v=f.vol/f.n;for(let x=1;x<f.n;x++)if(Ke(n,a(e-v*x),.004))return`Close: ${x===1?"one":x} of the ${m} ${x===1?"seems":"seem"} to be missing.`}if(Ke(n,a(e+f.vol),.004))return`Close: the ${m} seem to be counted twice, or cut twice as deep.`}for(const f of l.values())if(f.f&&(f.f.kind==="zhole"||f.f.kind==="yhole"||f.f.kind==="xhole"||f.f.kind==="bolts")){if(Ke(n,a(e+3*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the diameter was used as the radius.`;if(Ke(n,a(e-.75*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the radius was used as the diameter.`}for(const f of l.values()){const c=f.f;if(c&&c.kind==="zhole"&&!c.thru){const m=f.vol*(c.top/c.depth-1);if(Ke(n,a(e+m),.004))return`The ${f.label.charAt(0).toLowerCase()+f.label.slice(1)} should stop at the depth shown, not go all the way through.`}if(c&&c.kind==="pocket"&&Ke(n,a(e+f.vol*(c.top/c.depth-1)),.004))return"The pocket should stop at its depth, not cut all the way through."}const u=(n-a(e))/a(e)*100,d=u>0?"heavy":"light";return Math.abs(u)<3?`Very close (${Br(Math.abs(u).toFixed(2))}% ${d}). Re-check small details: fillet and corner radii, chamfers, counterbore and pocket depths.`:Math.abs(u)<15?`${Br(Math.abs(u).toFixed(1))}% too ${d}. ${u>0?"Something is missing a cut, or a cut is too small/shallow.":"A cut is too big or deep, or a dimension is too small."} Compare each view against your model.`:`${Br(Math.abs(u).toFixed(0))}% too ${d}. Re-check the overall sizes (length, width, heights) first, then the features.`}const jc="cadDrills.v1";function ca(){return{attempts:{},solved:{},events:[],waitlist:[],visitorId:Math.random().toString(36).slice(2,10),theme:null,material:"al6061"}}let Ri=null;function pi(){if(Ri)return Ri;try{Ri={...ca(),...JSON.parse(localStorage.getItem(jc))||{}}}catch{Ri=ca()}return Ri}function yr(){try{localStorage.setItem(jc,JSON.stringify(Ri))}catch{}}function Cd(){const i={theme:pi().theme};Ri={...ca(),...i},yr()}function hn(i,t={}){try{window.goatcounter?.count?.({path:i+(t.source?"/"+t.source:""),title:i,event:!0})}catch{}const e=pi();e.events.push({t:Date.now(),type:i,...t}),e.events.length>5e3&&e.events.splice(0,e.events.length-5e3),yr()}function Pd(i,t,e,n,r){const s=pi();(s.attempts[i]=s.attempts[i]||[]).push({t:Date.now(),value:t,density:e,correct:n}),n&&!s.solved[i]?s.solved[i]={t:Date.now(),timeMs:r??null,attempts:s.attempts[i].length}:n&&r!=null&&(s.solved[i].timeMs==null||r<s.solved[i].timeMs)&&(s.solved[i].timeMs=r),yr()}function Xs(i){const t=pi();return t.solved[i]?"solved":t.attempts[i]?.length?"tried":"new"}function Kc(){const i=pi(),t=new Set(Object.values(i.solved).map(r=>new Date(r.t).toDateString()));let e=0;const n=new Date;for(t.has(n.toDateString())||n.setDate(n.getDate()-1);t.has(n.toDateString());)e++,n.setDate(n.getDate()-1);return e}function Ld(i,t){const e=pi();e.waitlist.some(n=>n.email===i)||e.waitlist.push({email:i,t:Date.now(),source:t}),yr()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="169",ur={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dd=0,Pl=1,Id=2,Zc=1,Ud=2,qn=3,di=0,rn=1,Yn=2,ui=0,hr=1,Ll=2,Dl=3,Il=4,Nd=5,Ci=100,Fd=101,Od=102,kd=103,Bd=104,zd=200,Hd=201,Vd=202,Gd=203,ua=204,ha=205,Wd=206,$d=207,Xd=208,qd=209,Yd=210,jd=211,Kd=212,Zd=213,Jd=214,da=0,fa=1,pa=2,pr=3,ma=4,ga=5,_a=6,va=7,Jc=0,Qd=1,tf=2,hi=0,ef=1,nf=2,rf=3,sf=4,of=5,af=6,lf=7,Qc=300,mr=301,gr=302,xa=303,ya=304,no=306,Ma=1e3,Li=1001,ba=1002,fn=1003,cf=1004,is=1005,Tn=1006,bo=1007,Di=1008,Zn=1009,tu=1010,eu=1011,Xr=1012,el=1013,Ui=1014,jn=1015,Yr=1016,nl=1017,il=1018,_r=1020,nu=35902,iu=1021,ru=1022,An=1023,su=1024,ou=1025,dr=1026,vr=1027,au=1028,rl=1029,lu=1030,sl=1031,ol=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,Sa=35840,Ea=35841,Ta=35842,Aa=35843,wa=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Da=37810,Ia=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,ka=37816,Ba=37817,za=37818,Ha=37819,Va=37820,Ga=37821,ks=36492,Wa=36494,$a=36495,cu=36283,Xa=36284,qa=36285,Ya=36286,uf=3200,hf=3201,uu=0,df=1,li="",Pn="srgb",mi="srgb-linear",al="display-p3",io="display-p3-linear",qs="linear",be="srgb",Ys="rec709",js="p3",qi=7680,Ul=519,ff=512,pf=513,mf=514,hu=515,gf=516,_f=517,vf=518,xf=519,Nl=35044,Fl="300 es",Kn=2e3,Ks=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,ja=180/Math.PI;function jr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function yf(i,t){return(i%t+t)%t}function So(i,t,e){return(1-e)*i+e*t}function Lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mf={DEG2RAD:Vr};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,r,s,a,o,l,u){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u)}set(t,e,n,r,s,a,o,l,u){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],f=n[7],c=n[2],m=n[5],v=n[8],x=r[0],h=r[3],g=r[6],T=r[1],M=r[4],w=r[7],O=r[2],L=r[5],C=r[8];return s[0]=a*x+o*T+l*O,s[3]=a*h+o*M+l*L,s[6]=a*g+o*w+l*C,s[1]=u*x+d*T+f*O,s[4]=u*h+d*M+f*L,s[7]=u*g+d*w+f*C,s[2]=c*x+m*T+v*O,s[5]=c*h+m*M+v*L,s[8]=c*g+m*w+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8];return e*a*d-e*o*u-n*s*d+n*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=d*a-o*u,c=o*l-d*s,m=u*s-a*l,v=e*f+n*c+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=f*x,t[1]=(r*u-d*n)*x,t[2]=(o*n-r*a)*x,t[3]=c*x,t[4]=(d*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=m*x,t[7]=(n*l-u*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new ie;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=Zs("canvas");return i.style.display="block",i}const Ol={};function Bs(i){i in Ol||(Ol[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ef(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kl=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bl=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[mi]:{transfer:qs,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Pn]:{transfer:be,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[io]:{transfer:qs,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Bl),fromReference:i=>i.applyMatrix3(kl)},[al]:{transfer:be,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bl),fromReference:i=>i.applyMatrix3(kl).convertLinearToSRGB()}},Af=new Set([mi,io]),_e={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Af.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Dr[t].toReference,r=Dr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Dr[i].primaries},getTransfer:function(i){return i===li?qs:Dr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Dr[t].luminanceCoefficients)}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class wf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Zs("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;class sn extends Oi{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Li,r=Li,s=Tn,a=Di,o=An,l=Zn,u=sn.DEFAULT_ANISOTROPY,d=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=jr(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ma:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ma:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Qc;sn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],d=l[4],f=l[8],c=l[1],m=l[5],v=l[9],x=l[2],h=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(f-x)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+c)<.1&&Math.abs(f+x)<.1&&Math.abs(v+h)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,w=(m+1)/2,O=(g+1)/2,L=(d+c)/4,C=(f+x)/4,N=(v+h)/4;return M>w&&M>O?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=L/n,s=C/n):w>O?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=L/r,s=N/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=C/s,r=N/s),this.set(n,r,s,e),this}let T=Math.sqrt((h-v)*(h-v)+(f-x)*(f-x)+(c-d)*(c-d));return Math.abs(T)<.001&&(T=1),this.x=(h-v)/T,this.y=(f-x)/T,this.z=(c-d)/T,this.w=Math.acos((u+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lf extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],u=n[r+1],d=n[r+2],f=n[r+3];const c=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=c,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(f!==x||l!==c||u!==m||d!==v){let h=1-o;const g=l*c+u*m+d*v+f*x,T=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const O=Math.sqrt(M),L=Math.atan2(O,g*T);h=Math.sin(h*L)/O,o=Math.sin(o*L)/O}const w=o*T;if(l=l*h+c*w,u=u*h+m*w,d=d*h+v*w,f=f*h+x*w,h===1-o){const O=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=O,u*=O,d*=O,f*=O}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],d=n[r+3],f=s[a],c=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+d*f+l*m-u*c,t[e+1]=l*v+d*c+u*f-o*m,t[e+2]=u*v+d*m+o*c-l*f,t[e+3]=d*v-o*f-l*c-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(r/2),f=o(s/2),c=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=c*d*f+u*m*v,this._y=u*m*f-c*d*v,this._z=u*d*v+c*m*f,this._w=u*d*f-c*m*v;break;case"YXZ":this._x=c*d*f+u*m*v,this._y=u*m*f-c*d*v,this._z=u*d*v-c*m*f,this._w=u*d*f+c*m*v;break;case"ZXY":this._x=c*d*f-u*m*v,this._y=u*m*f+c*d*v,this._z=u*d*v+c*m*f,this._w=u*d*f-c*m*v;break;case"ZYX":this._x=c*d*f-u*m*v,this._y=u*m*f+c*d*v,this._z=u*d*v-c*m*f,this._w=u*d*f+c*m*v;break;case"YZX":this._x=c*d*f+u*m*v,this._y=u*m*f+c*d*v,this._z=u*d*v-c*m*f,this._w=u*d*f-c*m*v;break;case"XZY":this._x=c*d*f-u*m*v,this._y=u*m*f-c*d*v,this._z=u*d*v+c*m*f,this._w=u*d*f+c*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],d=e[6],f=e[10],c=n+o+f;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,d=e._w;return this._x=n*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-n*u,this._z=s*d+a*u+n*l-r*o,this._w=a*d-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-e)*d)/u,c=Math.sin(e*d)/u;return this._w=a*f+this._w*c,this._x=n*f+this._x*c,this._y=r*f+this._y*c,this._z=s*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*n),d=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*u+a*f-o*d,this.y=n+l*d+o*u-s*f,this.z=r+l*f+s*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new G,zl=new Fi;class Kr{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),ss.subVectors(this.max,Ir),ji.subVectors(t.a,Ir),Ki.subVectors(t.b,Ir),Zi.subVectors(t.c,Ir),ei.subVectors(Ki,ji),ni.subVectors(Zi,Ki),xi.subVectors(ji,Zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!Ro(e,ji,Ki,Zi,ss)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,ji,Ki,Zi,ss))?!1:(os.crossVectors(ei,ni),e=[os.x,os.y,os.z],Ro(e,ji,Ki,Zi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],xn=new G,rs=new Kr,ji=new G,Ki=new G,Zi=new G,ei=new G,ni=new G,xi=new G,Ir=new G,ss=new G,os=new G,yi=new G;function Ro(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){yi.fromArray(i,s);const o=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=t.dot(yi),u=e.dot(yi),d=n.dot(yi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Df=new Kr,Ur=new G,Co=new G;class ro{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Co)),this.expandByPoint(Ur.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new G,Po=new G,as=new G,ii=new G,Lo=new G,ls=new G,Do=new G;class ll{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Po.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Po);const s=t.distanceTo(e)*.5,a=-this.direction.dot(as),o=ii.dot(this.direction),l=-ii.dot(as),u=ii.lengthSq(),d=Math.abs(1-a*a);let f,c,m,v;if(d>0)if(f=a*l-o,c=a*o-l,v=s*d,f>=0)if(c>=-v)if(c<=v){const x=1/d;f*=x,c*=x,m=f*(f+a*c+2*o)+c*(a*f+c+2*l)+u}else c=s,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;else c=-s,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;else c<=-v?(f=Math.max(0,-(-a*s+o)),c=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+c*(c+2*l)+u):c<=v?(f=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+u):(f=Math.max(0,-(a*s+o)),c=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+c*(c+2*l)+u);else c=a>0?-s:s,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(as,c),m}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,r=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,r=(t.min.x-c.x)*u),d>=0?(s=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(s=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-c.z)*f,l=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,l=(t.min.z-c.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,r,s){Lo.subVectors(e,t),ls.subVectors(n,t),Do.crossVectors(Lo,ls);let a=this.direction.dot(Do),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const l=o*this.direction.dot(ls.crossVectors(ii,ls));if(l<0)return null;const u=o*this.direction.dot(Lo.cross(ii));if(u<0||l+u>a)return null;const d=-o*ii.dot(Do);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,r,s,a,o,l,u,d,f,c,m,v,x,h){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u,d,f,c,m,v,x,h)}set(t,e,n,r,s,a,o,l,u,d,f,c,m,v,x,h){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=d,g[10]=f,g[14]=c,g[3]=m,g[7]=v,g[11]=x,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const c=a*d,m=a*f,v=o*d,x=o*f;e[0]=l*d,e[4]=-l*f,e[8]=u,e[1]=m+v*u,e[5]=c-x*u,e[9]=-o*l,e[2]=x-c*u,e[6]=v+m*u,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,m=l*f,v=u*d,x=u*f;e[0]=c+x*o,e[4]=v*o-m,e[8]=a*u,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=m*o-v,e[6]=x+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,m=l*f,v=u*d,x=u*f;e[0]=c-x*o,e[4]=-a*f,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*d,e[9]=x-c*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,m=a*f,v=o*d,x=o*f;e[0]=l*d,e[4]=v*u-m,e[8]=c*u+x,e[1]=l*f,e[5]=x*u+c,e[9]=m*u-v,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,m=a*u,v=o*l,x=o*u;e[0]=l*d,e[4]=x-c*f,e[8]=v*f+m,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-u*d,e[6]=m*f+v,e[10]=c-x*f}else if(t.order==="XZY"){const c=a*l,m=a*u,v=o*l,x=o*u;e[0]=l*d,e[4]=-f,e[8]=u*d,e[1]=c*f+x,e[5]=a*d,e[9]=m*f-v,e[2]=v*f-m,e[6]=o*d,e[10]=x*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Uf)}lookAt(t,e,n){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ri.crossVectors(n,an),ri.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ri.crossVectors(n,an)),ri.normalize(),cs.crossVectors(an,ri),r[0]=ri.x,r[4]=cs.x,r[8]=an.x,r[1]=ri.y,r[5]=cs.y,r[9]=an.y,r[2]=ri.z,r[6]=cs.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],f=n[5],c=n[9],m=n[13],v=n[2],x=n[6],h=n[10],g=n[14],T=n[3],M=n[7],w=n[11],O=n[15],L=r[0],C=r[4],N=r[8],rt=r[12],y=r[1],b=r[5],W=r[9],Y=r[13],it=r[2],pt=r[6],Z=r[10],vt=r[14],tt=r[3],Dt=r[7],Mt=r[11],_t=r[15];return s[0]=a*L+o*y+l*it+u*tt,s[4]=a*C+o*b+l*pt+u*Dt,s[8]=a*N+o*W+l*Z+u*Mt,s[12]=a*rt+o*Y+l*vt+u*_t,s[1]=d*L+f*y+c*it+m*tt,s[5]=d*C+f*b+c*pt+m*Dt,s[9]=d*N+f*W+c*Z+m*Mt,s[13]=d*rt+f*Y+c*vt+m*_t,s[2]=v*L+x*y+h*it+g*tt,s[6]=v*C+x*b+h*pt+g*Dt,s[10]=v*N+x*W+h*Z+g*Mt,s[14]=v*rt+x*Y+h*vt+g*_t,s[3]=T*L+M*y+w*it+O*tt,s[7]=T*C+M*b+w*pt+O*Dt,s[11]=T*N+M*W+w*Z+O*Mt,s[15]=T*rt+M*Y+w*vt+O*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],d=t[2],f=t[6],c=t[10],m=t[14],v=t[3],x=t[7],h=t[11],g=t[15];return v*(+s*l*f-r*u*f-s*o*c+n*u*c+r*o*m-n*l*m)+x*(+e*l*m-e*u*c+s*a*c-r*a*m+r*u*d-s*l*d)+h*(+e*u*f-e*o*m-s*a*f+n*a*m+s*o*d-n*u*d)+g*(-r*o*d-e*l*f+e*o*c+r*a*f-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=t[9],c=t[10],m=t[11],v=t[12],x=t[13],h=t[14],g=t[15],T=f*h*u-x*c*u+x*l*m-o*h*m-f*l*g+o*c*g,M=v*c*u-d*h*u-v*l*m+a*h*m+d*l*g-a*c*g,w=d*x*u-v*f*u+v*o*m-a*x*m-d*o*g+a*f*g,O=v*f*l-d*x*l-v*o*c+a*x*c+d*o*h-a*f*h,L=e*T+n*M+r*w+s*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=T*C,t[1]=(x*c*s-f*h*s-x*r*m+n*h*m+f*r*g-n*c*g)*C,t[2]=(o*h*s-x*l*s+x*r*u-n*h*u-o*r*g+n*l*g)*C,t[3]=(f*l*s-o*c*s-f*r*u+n*c*u+o*r*m-n*l*m)*C,t[4]=M*C,t[5]=(d*h*s-v*c*s+v*r*m-e*h*m-d*r*g+e*c*g)*C,t[6]=(v*l*s-a*h*s-v*r*u+e*h*u+a*r*g-e*l*g)*C,t[7]=(a*c*s-d*l*s+d*r*u-e*c*u-a*r*m+e*l*m)*C,t[8]=w*C,t[9]=(v*f*s-d*x*s-v*n*m+e*x*m+d*n*g-e*f*g)*C,t[10]=(a*x*s-v*o*s+v*n*u-e*x*u-a*n*g+e*o*g)*C,t[11]=(d*o*s-a*f*s-d*n*u+e*f*u+a*n*m-e*o*m)*C,t[12]=O*C,t[13]=(d*x*r-v*f*r+v*n*c-e*x*c-d*n*h+e*f*h)*C,t[14]=(v*o*r-a*x*r-v*n*l+e*x*l+a*n*h-e*o*h)*C,t[15]=(a*f*r-d*o*r+d*n*l-e*f*l-a*n*c+e*o*c)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,u=s*a,d=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+n,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,d=a+a,f=o+o,c=s*u,m=s*d,v=s*f,x=a*d,h=a*f,g=o*f,T=l*u,M=l*d,w=l*f,O=n.x,L=n.y,C=n.z;return r[0]=(1-(x+g))*O,r[1]=(m+w)*O,r[2]=(v-M)*O,r[3]=0,r[4]=(m-w)*L,r[5]=(1-(c+g))*L,r[6]=(h+T)*L,r[7]=0,r[8]=(v+M)*C,r[9]=(h-T)*C,r[10]=(1-(c+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const u=1/s,d=1/a,f=1/o;return yn.elements[0]*=u,yn.elements[1]*=u,yn.elements[2]*=u,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Kn){const l=this.elements,u=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),c=(n+r)/(n-r);let m,v;if(o===Kn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ks)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Kn){const l=this.elements,u=1/(e-t),d=1/(n-r),f=1/(a-s),c=(e+t)*u,m=(n+r)*d;let v,x;if(o===Kn)v=(a+s)*f,x=-2*f;else if(o===Ks)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new G,yn=new Te,If=new G(0,0,0),Uf=new G(1,1,1),ri=new G,cs=new G,an=new G,Hl=new Te,Vl=new Fi;class Fn{constructor(t=0,e=0,n=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],f=r[2],c=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nf=0;const Gl=new G,Qi=new Fi,Gn=new Te,us=new G,Nr=new G,Ff=new G,Of=new Fi,Wl=new G(1,0,0),$l=new G(0,1,0),Xl=new G(0,0,1),ql={type:"added"},kf={type:"removed"},tr={type:"childadded",child:null},Io={type:"childremoved",child:null};class We extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new G,e=new Fn,n=new Fi,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new ie}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Nr,us,this.up):Gn.lookAt(us,Nr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),c=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),c.length>0&&(n.skeletons=c),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}We.DEFAULT_UP=new G(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new G,Wn=new G,Uo=new G,$n=new G,er=new G,nr=new G,Yl=new G,No=new G,Fo=new G,Oo=new G,ko=new we,Bo=new we,zo=new we;class dn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Mn.subVectors(t,e),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Mn.subVectors(r,e),Wn.subVectors(n,e),Uo.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Wn),l=Mn.dot(Uo),u=Wn.dot(Wn),d=Wn.dot(Uo),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const c=1/f,m=(u*l-o*d)*c,v=(a*d-o*l)*c;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ko.setScalar(0),Bo.setScalar(0),zo.setScalar(0),ko.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ko,s.x),a.addScaledVector(Bo,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(t,e,n,r){return Mn.subVectors(n,e),Wn.subVectors(t,e),Mn.cross(Wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,n),nr.subVectors(s,n),No.subVectors(t,n);const l=er.dot(No),u=nr.dot(No);if(l<=0&&u<=0)return e.copy(n);Fo.subVectors(t,r);const d=er.dot(Fo),f=nr.dot(Fo);if(d>=0&&f<=d)return e.copy(r);const c=l*f-d*u;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(er,a);Oo.subVectors(t,s);const m=er.dot(Oo),v=nr.dot(Oo);if(v>=0&&m<=v)return e.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(nr,o);const h=d*v-m*f;if(h<=0&&f-d>=0&&m-v>=0)return Yl.subVectors(s,r),o=(f-d)/(f-d+(m-v)),e.copy(r).addScaledVector(Yl,o);const g=1/(h+x+c);return a=x*g,o=c*g,e.copy(n).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=yf(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ho(a,s,t+1/3),this.g=Ho(a,s,t),this.b=Ho(a,s,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return _e.fromWorkingColorSpace(qe.copy(this),t),Math.round(Je(qe.r*255,0,255))*65536+Math.round(Je(qe.g*255,0,255))*256+Math.round(Je(qe.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,r=qe.g,s=qe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Pn){_e.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,r=qe.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(hs);const n=So(si.h,hs.h,e),r=So(si.s,hs.s,e),s=So(si.l,hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new de;de.NAMES=gu;let Bf=0;class Mr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=hr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _u extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new G,ds=new te;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nl&&(t.usage=this.usage),t}}class vu extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xu extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Un extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zf=0;const un=new Te,Vo=new We,ir=new G,ln=new Kr,Fr=new Kr,Ge=new G;class On extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?xu:vu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(ln.min,Fr.min),ln.expandByPoint(Ge),Ge.addVectors(ln.max,Fr.max),ln.expandByPoint(Ge)):(ln.expandByPoint(Fr.min),ln.expandByPoint(Fr.max))}ln.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ge.fromBufferAttribute(o,u),l&&(ir.fromBufferAttribute(t,u),Ge.add(ir)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new G,l[N]=new G;const u=new G,d=new G,f=new G,c=new te,m=new te,v=new te,x=new G,h=new G;function g(N,rt,y){u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,rt),f.fromBufferAttribute(n,y),c.fromBufferAttribute(s,N),m.fromBufferAttribute(s,rt),v.fromBufferAttribute(s,y),d.sub(u),f.sub(u),m.sub(c),v.sub(c);const b=1/(m.x*v.y-v.x*m.y);isFinite(b)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(b),h.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(b),o[N].add(x),o[rt].add(x),o[y].add(x),l[N].add(h),l[rt].add(h),l[y].add(h))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,rt=T.length;N<rt;++N){const y=T[N],b=y.start,W=y.count;for(let Y=b,it=b+W;Y<it;Y+=3)g(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const M=new G,w=new G,O=new G,L=new G;function C(N){O.fromBufferAttribute(r,N),L.copy(O);const rt=o[N];M.copy(rt),M.sub(O.multiplyScalar(O.dot(rt))).normalize(),w.crossVectors(L,rt);const b=w.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,b)}for(let N=0,rt=T.length;N<rt;++N){const y=T[N],b=y.start,W=y.count;for(let Y=b,it=b+W;Y<it;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,m=n.count;c<m;c++)n.setXYZ(c,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,d=new G,f=new G;if(t)for(let c=0,m=t.count;c<m;c+=3){const v=t.getX(c+0),x=t.getX(c+1),h=t.getX(c+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,h),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,h),o.add(d),l.add(d),u.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let c=0,m=e.count;c<m;c+=3)r.fromBufferAttribute(e,c+0),s.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const u=o.array,d=o.itemSize,f=o.normalized,c=new u.constructor(l.length*d);let m=0,v=0;for(let x=0,h=l.length;x<h;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let g=0;g<d;g++)c[v++]=u[m++]}return new pn(c,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,f=u.length;d<f;d++){const c=u[d],m=t(c,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,c=u.length;f<c;f++){const m=u[f];d.push(m.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(e))}const s=t.morphAttributes;for(const u in s){const d=[],f=s[u];for(let c=0,m=f.length;c<m;c++)d.push(f[c].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Te,Mi=new ll,fs=new ro,Kl=new G,ps=new G,ms=new G,gs=new G,Go=new G,_s=new G,Zl=new G,vs=new G;class In extends We{constructor(t=new On,e=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){_s.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],f=s[l];d!==0&&(Go.fromBufferAttribute(f,t),a?_s.addScaledVector(Go,d):_s.addScaledVector(Go.sub(e),d))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(fs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(fs,Kl)===null||Mi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(jl.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,c=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=c.length;v<x;v++){const h=c[v],g=a[h.materialIndex],T=Math.max(h.start,m.start),M=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let w=T,O=M;w<O;w+=3){const L=o.getX(w),C=o.getX(w+1),N=o.getX(w+2);r=xs(this,g,t,n,u,d,f,L,C,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let h=v,g=x;h<g;h+=3){const T=o.getX(h),M=o.getX(h+1),w=o.getX(h+2);r=xs(this,a,t,n,u,d,f,T,M,w),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=c.length;v<x;v++){const h=c[v],g=a[h.materialIndex],T=Math.max(h.start,m.start),M=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let w=T,O=M;w<O;w+=3){const L=w,C=w+1,N=w+2;r=xs(this,g,t,n,u,d,f,L,C,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let h=v,g=x;h<g;h+=3){const T=h,M=h+1,w=h+2;r=xs(this,a,t,n,u,d,f,T,M,w),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}}}function Hf(i,t,e,n,r,s,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===di,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(vs);return u<e.near||u>e.far?null:{distance:u,point:vs.clone(),object:i}}function xs(i,t,e,n,r,s,a,o,l,u){i.getVertexPosition(o,ps),i.getVertexPosition(l,ms),i.getVertexPosition(u,gs);const d=Hf(i,t,e,n,ps,ms,gs,Zl);if(d){const f=new G;dn.getBarycoord(Zl,ps,ms,gs,f),r&&(d.uv=dn.getInterpolatedAttribute(r,o,l,u,f,new te)),s&&(d.uv1=dn.getInterpolatedAttribute(s,o,l,u,f,new te)),a&&(d.normal=dn.getInterpolatedAttribute(a,o,l,u,f,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new G,materialIndex:0};dn.getNormal(ps,ms,gs,c.normal),d.face=c,d.barycoord=f}return d}class Zr extends On{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],f=[];let c=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(u,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(f,2));function v(x,h,g,T,M,w,O,L,C,N,rt){const y=w/C,b=O/N,W=w/2,Y=O/2,it=L/2,pt=C+1,Z=N+1;let vt=0,tt=0;const Dt=new G;for(let Mt=0;Mt<Z;Mt++){const _t=Mt*b-Y;for(let se=0;se<pt;se++){const ce=se*y-W;Dt[x]=ce*T,Dt[h]=_t*M,Dt[g]=it,u.push(Dt.x,Dt.y,Dt.z),Dt[x]=0,Dt[h]=0,Dt[g]=L>0?1:-1,d.push(Dt.x,Dt.y,Dt.z),f.push(se/C),f.push(1-Mt/N),vt+=1}}for(let Mt=0;Mt<N;Mt++)for(let _t=0;_t<C;_t++){const se=c+_t+pt*Mt,ce=c+_t+pt*(Mt+1),nt=c+(_t+1)+pt*(Mt+1),dt=c+(_t+1)+pt*Mt;l.push(se,ce,dt),l.push(ce,nt,dt),tt+=6}o.addGroup(m,tt,rt),m+=tt,c+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=xr(i[e]);for(const r in n)t[r]=n[r]}return t}function Vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Gf={clone:xr,merge:Ze};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new G,Jl=new te,Ql=new te;class Sn extends Mu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class Xf extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new Sn(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new Sn(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new Sn(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new Sn(rr,sr,t,e);l.layers=this.layers,this.add(l);const u=new Sn(rr,sr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,c,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bu extends sn{constructor(t,e,n,r,s,a,o,l,u,d){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,n,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zr(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ui});s.uniforms.tEquirect.value=e;const a=new In(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Tn),new Xf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Wo=new G,Yf=new G,jf=new ie;class ai{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Wo.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jf.getNormalMatrix(t),r=this.coplanarPoint(Wo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new ro,ys=new G;class cl{constructor(t=new ai,e=new ai,n=new ai,r=new ai,s=new ai,a=new ai){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],d=r[5],f=r[6],c=r[7],m=r[8],v=r[9],x=r[10],h=r[11],g=r[12],T=r[13],M=r[14],w=r[15];if(n[0].setComponents(l-s,c-u,h-m,w-g).normalize(),n[1].setComponents(l+s,c+u,h+m,w+g).normalize(),n[2].setComponents(l+a,c+d,h+v,w+T).normalize(),n[3].setComponents(l-a,c-d,h-v,w-T).normalize(),n[4].setComponents(l-o,c-f,h-x,w-M).normalize(),e===Kn)n[5].setComponents(l+o,c+f,h+x,w+M).normalize();else if(e===Ks)n[5].setComponents(o,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ys.x=r.normal.x>0?t.max.x:t.min.x,ys.y=r.normal.y>0?t.max.y:t.min.y,ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Su(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Kf(i){const t=new WeakMap;function e(o,l){const u=o.array,d=o.usage,f=u.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,u,d),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,u){const d=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,d);else{f.sort((m,v)=>m.start-v.start);let c=0;for(let m=1;m<f.length;m++){const v=f[c],x=f[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++c,f[c]=x)}f.length=c+1;for(let m=0,v=f.length;m<v;m++){const x=f[m];i.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class so extends On{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),u=o+1,d=l+1,f=t/o,c=e/l,m=[],v=[],x=[],h=[];for(let g=0;g<d;g++){const T=g*c-a;for(let M=0;M<u;M++){const w=M*f-s;v.push(w,-T,0),x.push(0,0,1),h.push(M/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<o;T++){const M=T+u*g,w=T+u*(g+1),O=T+1+u*(g+1),L=T+1+u*g;m.push(M,w,L),m.push(w,O,L)}this.setIndex(m),this.setAttribute("position",new Un(v,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:rp,batching_pars_vertex:sp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:up,bumpmap_pars_fragment:hp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:vp,color_vertex:xp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,colorspace_fragment:wp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:$p,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:rm,map_particle_fragment:sm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:um,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:wm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Im,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:$m,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:jm,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:rg,distanceRGBA_frag:sg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Eg,points_frag:Tg,shadow_vert:Ag,shadow_frag:wg,sprite_vert:Rg,sprite_frag:Cg},Ct={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ln={basic:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ze([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ze([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ze([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ze([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ze([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ze([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ze([Ct.common,Ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ze([Ct.lights,Ct.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ln.physical={uniforms:Ze([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Ms={r:0,b:0,g:0},Si=new Fn,Pg=new Te;function Lg(i,t,e,n,r,s,a){const o=new de(0);let l=s===!0?0:1,u,d,f=null,c=0,m=null;function v(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function x(T){let M=!1;const w=v(T);w===null?g(o,l):w&&w.isColor&&(g(w,1),M=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(T,M){const w=v(M);w&&(w.isCubeTexture||w.mapping===no)?(d===void 0&&(d=new In(new Zr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:xr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Si.copy(M.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Si)),d.material.toneMapped=_e.getTransfer(w.colorSpace)!==be,(f!==w||c!==w.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=w,c=w.version,m=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new In(new so(2,2),new fi({name:"BackgroundMaterial",uniforms:xr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=_e.getTransfer(w.colorSpace)!==be,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||c!==w.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,c=w.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function g(T,M){T.getRGB(Ms,yu(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,g(o,l)},render:x,addToRenderList:h}}function Dg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(y,b,W,Y,it){let pt=!1;const Z=f(Y,W,b);s!==Z&&(s=Z,u(s.object)),pt=m(y,Y,W,it),pt&&v(y,Y,W,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,w(y,b,W,Y),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function f(y,b,W){const Y=W.wireframe===!0;let it=n[y.id];it===void 0&&(it={},n[y.id]=it);let pt=it[b.id];pt===void 0&&(pt={},it[b.id]=pt);let Z=pt[Y];return Z===void 0&&(Z=c(l()),pt[Y]=Z),Z}function c(y){const b=[],W=[],Y=[];for(let it=0;it<e;it++)b[it]=0,W[it]=0,Y[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:Y,object:y,attributes:{},index:null}}function m(y,b,W,Y){const it=s.attributes,pt=b.attributes;let Z=0;const vt=W.getAttributes();for(const tt in vt)if(vt[tt].location>=0){const Mt=it[tt];let _t=pt[tt];if(_t===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),Mt===void 0||Mt.attribute!==_t||_t&&Mt.data!==_t.data)return!0;Z++}return s.attributesNum!==Z||s.index!==Y}function v(y,b,W,Y){const it={},pt=b.attributes;let Z=0;const vt=W.getAttributes();for(const tt in vt)if(vt[tt].location>=0){let Mt=pt[tt];Mt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor));const _t={};_t.attribute=Mt,Mt&&Mt.data&&(_t.data=Mt.data),it[tt]=_t,Z++}s.attributes=it,s.attributesNum=Z,s.index=Y}function x(){const y=s.newAttributes;for(let b=0,W=y.length;b<W;b++)y[b]=0}function h(y){g(y,0)}function g(y,b){const W=s.newAttributes,Y=s.enabledAttributes,it=s.attributeDivisors;W[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),it[y]!==b&&(i.vertexAttribDivisor(y,b),it[y]=b)}function T(){const y=s.newAttributes,b=s.enabledAttributes;for(let W=0,Y=b.length;W<Y;W++)b[W]!==y[W]&&(i.disableVertexAttribArray(W),b[W]=0)}function M(y,b,W,Y,it,pt,Z){Z===!0?i.vertexAttribIPointer(y,b,W,it,pt):i.vertexAttribPointer(y,b,W,Y,it,pt)}function w(y,b,W,Y){x();const it=Y.attributes,pt=W.getAttributes(),Z=b.defaultAttributeValues;for(const vt in pt){const tt=pt[vt];if(tt.location>=0){let Dt=it[vt];if(Dt===void 0&&(vt==="instanceMatrix"&&y.instanceMatrix&&(Dt=y.instanceMatrix),vt==="instanceColor"&&y.instanceColor&&(Dt=y.instanceColor)),Dt!==void 0){const Mt=Dt.normalized,_t=Dt.itemSize,se=t.get(Dt);if(se===void 0)continue;const ce=se.buffer,nt=se.type,dt=se.bytesPerElement,It=nt===i.INT||nt===i.UNSIGNED_INT||Dt.gpuType===el;if(Dt.isInterleavedBufferAttribute){const Ut=Dt.data,qt=Ut.stride,zt=Dt.offset;if(Ut.isInstancedInterleavedBuffer){for(let ee=0;ee<tt.locationSize;ee++)g(tt.location+ee,Ut.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ee=0;ee<tt.locationSize;ee++)h(tt.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ee=0;ee<tt.locationSize;ee++)M(tt.location+ee,_t/tt.locationSize,nt,Mt,qt*dt,(zt+_t/tt.locationSize*ee)*dt,It)}else{if(Dt.isInstancedBufferAttribute){for(let Ut=0;Ut<tt.locationSize;Ut++)g(tt.location+Ut,Dt.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Ut=0;Ut<tt.locationSize;Ut++)h(tt.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ut=0;Ut<tt.locationSize;Ut++)M(tt.location+Ut,_t/tt.locationSize,nt,Mt,_t*dt,_t/tt.locationSize*Ut*dt,It)}}else if(Z!==void 0){const Mt=Z[vt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(tt.location,Mt);break;case 3:i.vertexAttrib3fv(tt.location,Mt);break;case 4:i.vertexAttrib4fv(tt.location,Mt);break;default:i.vertexAttrib1fv(tt.location,Mt)}}}}T()}function O(){N();for(const y in n){const b=n[y];for(const W in b){const Y=b[W];for(const it in Y)d(Y[it].object),delete Y[it];delete b[W]}delete n[y]}}function L(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const W in b){const Y=b[W];for(const it in Y)d(Y[it].object),delete Y[it];delete b[W]}delete n[y.id]}function C(y){for(const b in n){const W=n[b];if(W[y.id]===void 0)continue;const Y=W[y.id];for(const it in Y)d(Y[it].object),delete Y[it];delete W[y.id]}}function N(){rt(),a=!0,s!==r&&(s=r,u(s.object))}function rt(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:rt,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:h,disableUnusedAttributes:T}}function Ig(i,t,e){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),e.update(d,n,1)}function a(u,d,f){f!==0&&(i.drawArraysInstanced(n,u,d,f),e.update(d,n,f))}function o(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];e.update(m,n,1)}function l(u,d,f,c){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)a(u[v],d[v],c[v]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,d,0,c,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];for(let x=0;x<c.length;x++)e.update(v,n,c[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(c===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:O,maxSamples:L}}function Ng(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ai,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const m=f.length!==0||c||n!==0||r;return r=c,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,c){e=d(f,c,0)},this.setState=function(f,c,m){const v=f.clippingPlanes,x=f.clipIntersection,h=f.clipShadows,g=i.get(f);if(!r||v===null||v.length===0||s&&!h)s?d(null):u();else{const T=s?0:n,M=T*4;let w=g.clippingState||null;l.value=w,w=d(v,c,M,m);for(let O=0;O!==M;++O)w[O]=e[O];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,c,m,v){const x=f!==null?f.length:0;let h=null;if(x!==0){if(h=l.value,v!==!0||h===null){const g=m+x*4,T=c.matrixWorldInverse;o.getNormalMatrix(T),(h===null||h.length<g)&&(h=new Float32Array(g));for(let M=0,w=m;M!==x;++M,w+=4)a.copy(f[M]).applyMatrix4(T,o),a.normal.toArray(h,w),h[w+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function Fg(i){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=mr:o===ya&&(a.mapping=gr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new qf(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ul extends Mu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,tc=[.125,.215,.35,.446,.526,.582],Pi=20,$o=new ul,ec=new de;let Xo=null,qo=0,Yo=0,jo=!1;const Ai=(1+Math.sqrt(5))/2,or=1/Ai,nc=[new G(-Ai,or,0),new G(Ai,or,0),new G(-or,0,Ai),new G(or,0,Ai),new G(0,Ai,-or),new G(0,Ai,or),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=jo,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Yr,format:An,colorSpace:mi,depthBuffer:!1},r=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=kg(s,t,e)}return r}_compileMaterial(t){const e=new In(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,r){const o=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,c=d.toneMapping;d.getClearColor(ec),d.toneMapping=hi,d.autoClear=!1;const m=new _u({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new In(new Zr,m);let x=!1;const h=t.background;h?h.isColor&&(m.color.copy(h),t.background=null,x=!0):(m.color.copy(ec),x=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(o.up.set(0,l[g],0),o.lookAt(u[g],0,0)):T===1?(o.up.set(0,0,l[g]),o.lookAt(0,u[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,u[g]));const M=this._cubeSize;bs(r,T*M,g>2?M:0,M,M),d.setRenderTarget(r),x&&d.render(v,o),d.render(t,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=c,d.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===mr||t.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nc[(r-s-1)%nc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new In(this._lodPlanes[r],u),c=u.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),x=s/v,h=isFinite(s)?1+Math.floor(d*x):Pi;h>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Pi}`);const g=[];let T=0;for(let C=0;C<Pi;++C){const N=C/x,rt=Math.exp(-N*N/2);g.push(rt),C===0?T+=rt:C<h&&(T+=2*rt)}for(let C=0;C<g.length;C++)g[C]=g[C]/T;c.envMap.value=t.texture,c.samples.value=h,c.weights.value=g,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:M}=this;c.dTheta.value=v,c.mipInt.value=M-n;const w=this._sizeLods[r],O=3*w*(r>M-cr?r-M+cr:0),L=4*(this._cubeSize-w);bs(e,O,L,3*w,2*w),l.setRenderTarget(e),l.render(f,$o)}}function Og(i){const t=[],e=[],n=[];let r=i;const s=i-cr+1+tc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-cr?l=tc[a-i+cr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,f=1+u,c=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,x=3,h=2,g=1,T=new Float32Array(x*v*m),M=new Float32Array(h*v*m),w=new Float32Array(g*v*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,N=L>2?0:-1,rt=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(rt,x*v*L),M.set(c,h*v*L);const y=[L,L,L,L,L,L];w.set(y,g*v*L)}const O=new On;O.setAttribute("position",new pn(T,x)),O.setAttribute("uv",new pn(M,h)),O.setAttribute("faceIndex",new pn(w,g)),t.push(O),r>cr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function kg(i,t,e){const n=new Float32Array(Pi),r=new G(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sc(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function oc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===xa||l===ya,d=l===mr||l===gr;if(u||d){let f=t.get(o);const c=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new ic(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||d&&m&&r(m)?(e===null&&(e=new ic(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hg(i,t,e,n){const r={},s=new WeakMap;function a(f){const c=f.target;c.index!==null&&t.remove(c.index);for(const v in c.attributes)t.remove(c.attributes[v]);for(const v in c.morphAttributes){const x=c.morphAttributes[v];for(let h=0,g=x.length;h<g;h++)t.remove(x[h])}c.removeEventListener("dispose",a),delete r[c.id];const m=s.get(c);m&&(t.remove(m),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(f,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,e.memory.geometries++),c}function l(f){const c=f.attributes;for(const v in c)t.update(c[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let h=0,g=x.length;h<g;h++)t.update(x[h],i.ARRAY_BUFFER)}}function u(f){const c=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let M=0,w=T.length;M<w;M+=3){const O=T[M+0],L=T[M+1],C=T[M+2];c.push(O,L,L,C,C,O)}}else if(v!==void 0){const T=v.array;x=v.version;for(let M=0,w=T.length/3-1;M<w;M+=3){const O=M+0,L=M+1,C=M+2;c.push(O,L,L,C,C,O)}}else return;const h=new(du(c)?xu:vu)(c,1);h.version=x;const g=s.get(f);g&&t.remove(g),s.set(f,h)}function d(f){const c=s.get(f);if(c){const m=f.index;m!==null&&c.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Vg(i,t,e){let n;function r(c){n=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function l(c,m){i.drawElements(n,m,s,c*a),e.update(m,n,1)}function u(c,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,c*a,v),e.update(m,n,v))}function d(c,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,c,0,v);let h=0;for(let g=0;g<v;g++)h+=m[g];e.update(h,n,1)}function f(c,m,v,x){if(v===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)u(c[g]/a,m[g],x[g]);else{h.multiDrawElementsInstancedWEBGL(n,m,0,s,c,0,x,0,v);let g=0;for(let T=0;T<v;T++)g+=m[T];for(let T=0;T<x.length;T++)e.update(g,n,x[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Wg(i,t,e){const n=new WeakMap,r=new we;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==f){let rt=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",rt)};c!==void 0&&c.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),x===!0&&(M=3);let w=o.attributes.position.count*M,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const L=new Float32Array(w*O*4*f),C=new pu(L,w,O,f);C.type=jn,C.needsUpdate=!0;const N=M*4;for(let y=0;y<f;y++){const b=h[y],W=g[y],Y=T[y],it=w*O*4*y;for(let pt=0;pt<b.count;pt++){const Z=pt*N;m===!0&&(r.fromBufferAttribute(b,pt),L[it+Z+0]=r.x,L[it+Z+1]=r.y,L[it+Z+2]=r.z,L[it+Z+3]=0),v===!0&&(r.fromBufferAttribute(W,pt),L[it+Z+4]=r.x,L[it+Z+5]=r.y,L[it+Z+6]=r.z,L[it+Z+7]=0),x===!0&&(r.fromBufferAttribute(Y,pt),L[it+Z+8]=r.x,L[it+Z+9]=r.y,L[it+Z+10]=r.z,L[it+Z+11]=Y.itemSize===4?r.w:1)}}c={count:f,texture:C,size:new te(w,O)},n.set(o,c),o.addEventListener("dispose",rt)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function $g(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==u&&(c.update(),r.set(c,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class Eu extends sn{constructor(t,e,n,r,s,a,o,l,u,d=dr){if(d!==dr&&d!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===dr&&(n=Ui),n===void 0&&d===vr&&(n=_r),super(null,r,s,a,o,l,d,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tu=new sn,ac=new Eu(1,1),Au=new pu,wu=new Lf,Ru=new bu,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=lc[r];if(s===void 0&&(s=new Float32Array(r),lc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oo(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ze(e,n)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),ze(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),ze(e,n)}}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function i_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function a_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=hu,s=ac):s=Tu,e.setTexture2D(t||s,r)}function l_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||wu,r)}function c_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ru,r)}function u_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Au,r)}function h_(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return jg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function d_(i,t){i.uniform1fv(this.addr,t)}function f_(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function p_(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function m_(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function g_(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function __(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v_(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function x_(i,t){i.uniform1iv(this.addr,t)}function y_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function S_(i,t){i.uniform1uiv(this.addr,t)}function E_(i,t){i.uniform2uiv(this.addr,t)}function T_(i,t){i.uniform3uiv(this.addr,t)}function A_(i,t){i.uniform4uiv(this.addr,t)}function w_(i,t,e){const n=this.cache,r=t.length,s=oo(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Tu,s[a])}function R_(i,t,e){const n=this.cache,r=t.length,s=oo(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||wu,s[a])}function C_(i,t,e){const n=this.cache,r=t.length,s=oo(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ru,s[a])}function P_(i,t,e){const n=this.cache,r=t.length,s=oo(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Au,s[a])}function L_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}}class I_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}}class U_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function N_(i,t,e){const n=i.name,r=n.length;for(Ko.lastIndex=0;;){const s=Ko.exec(n),a=Ko.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){fc(e,u===void 0?new D_(o,i,t):new I_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new U_(o),fc(e,f)),e=f}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);N_(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const F_=37297;let O_=0;function k_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function B_(i){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(i);let n;switch(t===e?n="":t===js&&e===Ys?n="LinearDisplayP3ToLinearSRGB":t===Ys&&e===js&&(n="LinearSRGBToLinearDisplayP3"),i){case mi:case io:return[n,"LinearTransferOETF"];case Pn:case al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(t),a)}else return r}function z_(i,t){const e=B_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function H_(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case rf:e="Cineon";break;case sf:e="ACESFilmic";break;case af:e="AgX";break;case lf:e="Neutral";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ss=new G;function V_(){_e.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function W_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(X_,Y_)}const q_=new Map;function Y_(i,t){let e=ne[t];if(e===void 0){const n=q_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(j_,K_)}function K_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function J_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function t0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function e0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Z_(e),u=J_(e),d=Q_(e),f=t0(e),c=e0(e),m=G_(e),v=W_(s),x=r.createProgram();let h,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(kr).join(`
`),h.length>0&&(h+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(kr).join(`
`),g.length>0&&(g+=`
`)):(h=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),g=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ne.tonemapping_pars_fragment:"",e.toneMapping!==hi?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),V_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ka(a),a=gc(a,e),a=_c(a,e),o=Ka(o),o=gc(o,e),o=_c(o,e),a=vc(a),o=vc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=T+h+a,w=T+g+o,O=pc(r,r.VERTEX_SHADER,M),L=pc(r,r.FRAGMENT_SHADER,w);r.attachShader(x,O),r.attachShader(x,L),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(b){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),Y=r.getShaderInfoLog(O).trim(),it=r.getShaderInfoLog(L).trim();let pt=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,O,L);else{const vt=mc(r,O,"vertex"),tt=mc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+vt+`
`+tt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||it==="")&&(Z=!1);Z&&(b.diagnostics={runnable:pt,programLog:W,vertexShader:{log:Y,prefix:h},fragmentShader:{log:it,prefix:g}})}r.deleteShader(O),r.deleteShader(L),N=new zs(r,x),rt=$_(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let rt;this.getAttributes=function(){return rt===void 0&&C(this),rt};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,F_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=L,this}let i0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s0(t),e.set(t,n)),n}}class s0{constructor(t){this.id=i0++,this.code=t,this.usedTimes=0}}function o0(i,t,e,n,r,s,a){const o=new mu,l=new r0,u=new Set,d=[],f=r.logarithmicDepthBuffer,c=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return u.add(y),y===0?"uv":`uv${y}`}function g(y,b,W,Y,it){const pt=Y.fog,Z=it.geometry,vt=y.isMeshStandardMaterial?Y.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||vt),Dt=tt&&tt.mapping===no?tt.image.height:null,Mt=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=_t!==void 0?_t.length:0;let ce=0;Z.morphAttributes.position!==void 0&&(ce=1),Z.morphAttributes.normal!==void 0&&(ce=2),Z.morphAttributes.color!==void 0&&(ce=3);let nt,dt,It,Ut;if(Mt){const Le=Ln[Mt];nt=Le.vertexShader,dt=Le.fragmentShader}else nt=y.vertexShader,dt=y.fragmentShader,l.update(y),It=l.getVertexShaderID(y),Ut=l.getFragmentShaderID(y);const qt=i.getRenderTarget(),zt=it.isInstancedMesh===!0,ee=it.isBatchedMesh===!0,ae=!!y.map,Qt=!!y.matcap,D=!!tt,xe=!!y.aoMap,Gt=!!y.lightMap,re=!!y.bumpMap,Ot=!!y.normalMap,fe=!!y.displacementMap,Wt=!!y.emissiveMap,R=!!y.metalnessMap,S=!!y.roughnessMap,V=y.anisotropy>0,ot=y.clearcoat>0,mt=y.dispersion>0,z=y.iridescence>0,Et=y.sheen>0,bt=y.transmission>0,lt=V&&!!y.anisotropyMap,Lt=ot&&!!y.clearcoatMap,j=ot&&!!y.clearcoatNormalMap,gt=ot&&!!y.clearcoatRoughnessMap,At=z&&!!y.iridescenceMap,kt=z&&!!y.iridescenceThicknessMap,Tt=Et&&!!y.sheenColorMap,Ft=Et&&!!y.sheenRoughnessMap,wt=!!y.specularMap,le=!!y.specularColorMap,I=!!y.specularIntensityMap,ut=bt&&!!y.transmissionMap,K=bt&&!!y.thicknessMap,F=!!y.gradientMap,st=!!y.alphaMap,Q=y.alphaTest>0,$t=!!y.alphaHash,Kt=!!y.extensions;let he=hi;y.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(he=i.toneMapping);const oe={shaderID:Mt,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:dt,defines:y.defines,customVertexShaderID:It,customFragmentShaderID:Ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:ee,batchingColor:ee&&it._colorsTexture!==null,instancing:zt,instancingColor:zt&&it.instanceColor!==null,instancingMorph:zt&&it.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:qt===null?i.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:mi,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:Qt,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:Dt,aoMap:xe,lightMap:Gt,bumpMap:re,normalMap:Ot,displacementMap:m&&fe,emissiveMap:Wt,normalMapObjectSpace:Ot&&y.normalMapType===df,normalMapTangentSpace:Ot&&y.normalMapType===uu,metalnessMap:R,roughnessMap:S,anisotropy:V,anisotropyMap:lt,clearcoat:ot,clearcoatMap:Lt,clearcoatNormalMap:j,clearcoatRoughnessMap:gt,dispersion:mt,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:Et,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:wt,specularColorMap:le,specularIntensityMap:I,transmission:bt,transmissionMap:ut,thicknessMap:K,gradientMap:F,opaque:y.transparent===!1&&y.blending===hr&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Q,alphaHash:$t,combine:y.combine,mapUv:ae&&h(y.map.channel),aoMapUv:xe&&h(y.aoMap.channel),lightMapUv:Gt&&h(y.lightMap.channel),bumpMapUv:re&&h(y.bumpMap.channel),normalMapUv:Ot&&h(y.normalMap.channel),displacementMapUv:fe&&h(y.displacementMap.channel),emissiveMapUv:Wt&&h(y.emissiveMap.channel),metalnessMapUv:R&&h(y.metalnessMap.channel),roughnessMapUv:S&&h(y.roughnessMap.channel),anisotropyMapUv:lt&&h(y.anisotropyMap.channel),clearcoatMapUv:Lt&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:j&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&h(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&h(y.sheenRoughnessMap.channel),specularMapUv:wt&&h(y.specularMap.channel),specularColorMapUv:le&&h(y.specularColorMap.channel),specularIntensityMapUv:I&&h(y.specularIntensityMap.channel),transmissionMapUv:ut&&h(y.transmissionMap.channel),thicknessMapUv:K&&h(y.thicknessMap.channel),alphaMapUv:st&&h(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!Z.attributes.uv&&(ae||st),fog:!!pt,useFog:y.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:c,skinning:it.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=u.has(1),oe.vertexUv2s=u.has(2),oe.vertexUv3s=u.has(3),u.clear(),oe}function T(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)b.push(W),b.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(M(b,y),w(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function w(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),y.push(o.mask)}function O(y){const b=x[y.type];let W;if(b){const Y=Ln[b];W=Gf.clone(Y.uniforms)}else W=y.uniforms;return W}function L(y,b){let W;for(let Y=0,it=d.length;Y<it;Y++){const pt=d[Y];if(pt.cacheKey===b){W=pt,++W.usedTimes;break}}return W===void 0&&(W=new n0(i,b,y,s),d.push(W)),W}function C(y){if(--y.usedTimes===0){const b=d.indexOf(y);d[b]=d[d.length-1],d.pop(),y.destroy()}}function N(y){l.remove(y)}function rt(){l.dispose()}return{getParameters:g,getProgramCacheKey:T,getUniforms:O,acquireProgram:L,releaseProgram:C,releaseShaderCache:N,programs:d,dispose:rt}}function a0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function l0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,c,m,v,x,h){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:c,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:h},i[t]=g):(g.id=f.id,g.object=f,g.geometry=c,g.material=m,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=x,g.group=h),t++,g}function o(f,c,m,v,x,h){const g=a(f,c,m,v,x,h);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):e.push(g)}function l(f,c,m,v,x,h){const g=a(f,c,m,v,x,h);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):e.unshift(g)}function u(f,c){e.length>1&&e.sort(f||l0),n.length>1&&n.sort(c||yc),r.length>1&&r.sort(c||yc)}function d(){for(let f=t,c=i.length;f<c;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:u}}function c0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mc,i.set(n,[a])):r>=s.length?(a=new Mc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new de};break;case"SpotLight":e={position:new G,direction:new G,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function h0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let d0=0;function f0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p0(i){const t=new u0,e=h0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);const r=new G,s=new Te,a=new Te;function o(u){let d=0,f=0,c=0;for(let rt=0;rt<9;rt++)n.probe[rt].set(0,0,0);let m=0,v=0,x=0,h=0,g=0,T=0,M=0,w=0,O=0,L=0,C=0;u.sort(f0);for(let rt=0,y=u.length;rt<y;rt++){const b=u[rt],W=b.color,Y=b.intensity,it=b.distance,pt=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=W.r*Y,f+=W.g*Y,c+=W.b*Y;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(b.sh.coefficients[Z],Y);C++}else if(b.isDirectionalLight){const Z=t.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const vt=b.shadow,tt=e.get(b);tt.shadowIntensity=vt.intensity,tt.shadowBias=vt.bias,tt.shadowNormalBias=vt.normalBias,tt.shadowRadius=vt.radius,tt.shadowMapSize=vt.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=b.shadow.matrix,T++}n.directional[m]=Z,m++}else if(b.isSpotLight){const Z=t.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(W).multiplyScalar(Y),Z.distance=it,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,n.spot[x]=Z;const vt=b.shadow;if(b.map&&(n.spotLightMap[O]=b.map,O++,vt.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[x]=vt.matrix,b.castShadow){const tt=e.get(b);tt.shadowIntensity=vt.intensity,tt.shadowBias=vt.bias,tt.shadowNormalBias=vt.normalBias,tt.shadowRadius=vt.radius,tt.shadowMapSize=vt.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=pt,w++}x++}else if(b.isRectAreaLight){const Z=t.get(b);Z.color.copy(W).multiplyScalar(Y),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),n.rectArea[h]=Z,h++}else if(b.isPointLight){const Z=t.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const vt=b.shadow,tt=e.get(b);tt.shadowIntensity=vt.intensity,tt.shadowBias=vt.bias,tt.shadowNormalBias=vt.normalBias,tt.shadowRadius=vt.radius,tt.shadowMapSize=vt.mapSize,tt.shadowCameraNear=vt.camera.near,tt.shadowCameraFar=vt.camera.far,n.pointShadow[v]=tt,n.pointShadowMap[v]=pt,n.pointShadowMatrix[v]=b.shadow.matrix,M++}n.point[v]=Z,v++}else if(b.isHemisphereLight){const Z=t.get(b);Z.skyColor.copy(b.color).multiplyScalar(Y),Z.groundColor.copy(b.groundColor).multiplyScalar(Y),n.hemi[g]=Z,g++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=c;const N=n.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==h||N.hemiLength!==g||N.numDirectionalShadows!==T||N.numPointShadows!==M||N.numSpotShadows!==w||N.numSpotMaps!==O||N.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=h,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,N.directionalLength=m,N.pointLength=v,N.spotLength=x,N.rectAreaLength=h,N.hemiLength=g,N.numDirectionalShadows=T,N.numPointShadows=M,N.numSpotShadows=w,N.numSpotMaps=O,N.numLightProbes=C,n.version=d0++)}function l(u,d){let f=0,c=0,m=0,v=0,x=0;const h=d.matrixWorldInverse;for(let g=0,T=u.length;g<T;g++){const M=u[g];if(M.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(h),f++}else if(M.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(h),m++}else if(M.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),a.identity(),s.copy(M.matrixWorld),s.premultiply(h),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const w=n.point[c];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),c++}else if(M.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(h),x++}}}return{setup:o,setupView:l,state:n}}function bc(i){const t=new p0(i),e=[],n=[];function r(d){u.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function m0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new bc(i),t.set(r,[o])):s>=a.length?(o=new bc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class g0 extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _0 extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y0(i,t,e){let n=new cl;const r=new te,s=new te,a=new we,o=new g0({depthPacking:hf}),l=new _0,u={},d=e.maxTextureSize,f={[di]:rn,[rn]:di,[Yn]:Yn},c=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new In(v,c),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let g=this.type;this.render=function(L,C,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||L.length===0)return;const rt=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ui),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=g!==qn&&this.type===qn,it=g===qn&&this.type!==qn;for(let pt=0,Z=L.length;pt<Z;pt++){const vt=L[pt],tt=vt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);const Dt=tt.getFrameExtents();if(r.multiply(Dt),s.copy(tt.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Dt.x),r.x=s.x*Dt.x,tt.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Dt.y),r.y=s.y*Dt.y,tt.mapSize.y=s.y)),tt.map===null||Y===!0||it===!0){const _t=this.type!==qn?{minFilter:fn,magFilter:fn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Ni(r.x,r.y,_t),tt.map.texture.name=vt.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const Mt=tt.getViewportCount();for(let _t=0;_t<Mt;_t++){const se=tt.getViewport(_t);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),W.viewport(a),tt.updateMatrices(vt,_t),n=tt.getFrustum(),w(C,N,tt.camera,vt,this.type)}tt.isPointLightShadow!==!0&&this.type===qn&&T(tt,N),tt.needsUpdate=!1}g=this.type,h.needsUpdate=!1,i.setRenderTarget(rt,y,b)};function T(L,C){const N=t.update(x);c.defines.VSM_SAMPLES!==L.blurSamples&&(c.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ni(r.x,r.y)),c.uniforms.shadow_pass.value=L.map.texture,c.uniforms.resolution.value=L.mapSize,c.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,N,c,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,N,m,x,null)}function M(L,C,N,rt){let y=null;const b=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)y=b;else if(y=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=y.uuid,Y=C.uuid;let it=u[W];it===void 0&&(it={},u[W]=it);let pt=it[Y];pt===void 0&&(pt=y.clone(),it[Y]=pt,C.addEventListener("dispose",O)),y=pt}if(y.visible=C.visible,y.wireframe=C.wireframe,rt===qn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=N}return y}function w(L,C,N,rt,y){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===qn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const Y=t.update(L),it=L.material;if(Array.isArray(it)){const pt=Y.groups;for(let Z=0,vt=pt.length;Z<vt;Z++){const tt=pt[Z],Dt=it[tt.materialIndex];if(Dt&&Dt.visible){const Mt=M(L,Dt,rt,y);L.onBeforeShadow(i,L,C,N,Y,Mt,tt),i.renderBufferDirect(N,null,Y,Mt,L,tt),L.onAfterShadow(i,L,C,N,Y,Mt,tt)}}}else if(it.visible){const pt=M(L,it,rt,y);L.onBeforeShadow(i,L,C,N,Y,pt,null),i.renderBufferDirect(N,null,Y,pt,L,null),L.onAfterShadow(i,L,C,N,Y,pt,null)}}const W=L.children;for(let Y=0,it=W.length;Y<it;Y++)w(W[Y],C,N,rt,y)}function O(L){L.target.removeEventListener("dispose",O);for(const N in u){const rt=u[N],y=L.target.uuid;y in rt&&(rt[y].dispose(),delete rt[y])}}}const M0={[da]:fa,[pa]:_a,[ma]:va,[pr]:ga,[fa]:da,[_a]:pa,[va]:ma,[ga]:pr};function b0(i){function t(){let I=!1;const ut=new we;let K=null;const F=new we(0,0,0,0);return{setMask:function(st){K!==st&&!I&&(i.colorMask(st,st,st,st),K=st)},setLocked:function(st){I=st},setClear:function(st,Q,$t,Kt,he){he===!0&&(st*=Kt,Q*=Kt,$t*=Kt),ut.set(st,Q,$t,Kt),F.equals(ut)===!1&&(i.clearColor(st,Q,$t,Kt),F.copy(ut))},reset:function(){I=!1,K=null,F.set(-1,0,0,0)}}}function e(){let I=!1,ut=!1,K=null,F=null,st=null;return{setReversed:function(Q){ut=Q},setTest:function(Q){Q?It(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Q){K!==Q&&!I&&(i.depthMask(Q),K=Q)},setFunc:function(Q){if(ut&&(Q=M0[Q]),F!==Q){switch(Q){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=Q}},setLocked:function(Q){I=Q},setClear:function(Q){st!==Q&&(i.clearDepth(Q),st=Q)},reset:function(){I=!1,K=null,F=null,st=null}}}function n(){let I=!1,ut=null,K=null,F=null,st=null,Q=null,$t=null,Kt=null,he=null;return{setTest:function(oe){I||(oe?It(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(oe){ut!==oe&&!I&&(i.stencilMask(oe),ut=oe)},setFunc:function(oe,Le,$e){(K!==oe||F!==Le||st!==$e)&&(i.stencilFunc(oe,Le,$e),K=oe,F=Le,st=$e)},setOp:function(oe,Le,$e){(Q!==oe||$t!==Le||Kt!==$e)&&(i.stencilOp(oe,Le,$e),Q=oe,$t=Le,Kt=$e)},setLocked:function(oe){I=oe},setClear:function(oe){he!==oe&&(i.clearStencil(oe),he=oe)},reset:function(){I=!1,ut=null,K=null,F=null,st=null,Q=null,$t=null,Kt=null,he=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,c=[],m=null,v=!1,x=null,h=null,g=null,T=null,M=null,w=null,O=null,L=new de(0,0,0),C=0,N=!1,rt=null,y=null,b=null,W=null,Y=null;const it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,Z=0;const vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(vt)[1]),pt=Z>=1):vt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),pt=Z>=2);let tt=null,Dt={};const Mt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),se=new we().fromArray(Mt),ce=new we().fromArray(_t);function nt(I,ut,K,F){const st=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<K;$t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ut+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return Q}const dt={};dt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),It(i.DEPTH_TEST),s.setFunc(pr),Gt(!1),re(Pl),It(i.CULL_FACE),D(ui);function It(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Ut(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function qt(I,ut){return d[I]!==ut?(i.bindFramebuffer(I,ut),d[I]=ut,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function zt(I,ut){let K=c,F=!1;if(I){K=f.get(ut),K===void 0&&(K=[],f.set(ut,K));const st=I.textures;if(K.length!==st.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,$t=st.length;Q<$t;Q++)K[Q]=i.COLOR_ATTACHMENT0+Q;K.length=st.length,F=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,F=!0);F&&i.drawBuffers(K)}function ee(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const ae={[Ci]:i.FUNC_ADD,[Fd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};ae[kd]=i.MIN,ae[Bd]=i.MAX;const Qt={[zd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ut,K,F,st,Q,$t,Kt,he,oe){if(I===ui){v===!0&&(Ut(i.BLEND),v=!1);return}if(v===!1&&(It(i.BLEND),v=!0),I!==Nd){if(I!==x||oe!==N){if((h!==Ci||M!==Ci)&&(i.blendEquation(i.FUNC_ADD),h=Ci,M=Ci),oe)switch(I){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,T=null,w=null,O=null,L.set(0,0,0),C=0,x=I,N=oe}return}st=st||ut,Q=Q||K,$t=$t||F,(ut!==h||st!==M)&&(i.blendEquationSeparate(ae[ut],ae[st]),h=ut,M=st),(K!==g||F!==T||Q!==w||$t!==O)&&(i.blendFuncSeparate(Qt[K],Qt[F],Qt[Q],Qt[$t]),g=K,T=F,w=Q,O=$t),(Kt.equals(L)===!1||he!==C)&&(i.blendColor(Kt.r,Kt.g,Kt.b,he),L.copy(Kt),C=he),x=I,N=!1}function xe(I,ut){I.side===Yn?Ut(i.CULL_FACE):It(i.CULL_FACE);let K=I.side===rn;ut&&(K=!K),Gt(K),I.blending===hr&&I.transparent===!1?D(ui):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const F=I.stencilWrite;a.setTest(F),F&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),fe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){rt!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),rt=I)}function re(I){I!==Dd?(It(i.CULL_FACE),I!==y&&(I===Pl?i.cullFace(i.BACK):I===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),y=I}function Ot(I){I!==b&&(pt&&i.lineWidth(I),b=I)}function fe(I,ut,K){I?(It(i.POLYGON_OFFSET_FILL),(W!==ut||Y!==K)&&(i.polygonOffset(ut,K),W=ut,Y=K)):Ut(i.POLYGON_OFFSET_FILL)}function Wt(I){I?It(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+it-1),tt!==I&&(i.activeTexture(I),tt=I)}function S(I,ut,K){K===void 0&&(tt===null?K=i.TEXTURE0+it-1:K=tt);let F=Dt[K];F===void 0&&(F={type:void 0,texture:void 0},Dt[K]=F),(F.type!==I||F.texture!==ut)&&(tt!==K&&(i.activeTexture(K),tt=K),i.bindTexture(I,ut||dt[I]),F.type=I,F.texture=ut)}function V(){const I=Dt[tt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Tt(I){ce.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ce.copy(I))}function Ft(I,ut){let K=l.get(ut);K===void 0&&(K=new WeakMap,l.set(ut,K));let F=K.get(I);F===void 0&&(F=i.getUniformBlockIndex(ut,I.name),K.set(I,F))}function wt(I,ut){const F=l.get(ut).get(I);o.get(ut)!==F&&(i.uniformBlockBinding(ut,F,I.__bindingPointIndex),o.set(ut,F))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,Dt={},d={},f=new WeakMap,c=[],m=null,v=!1,x=null,h=null,g=null,T=null,M=null,w=null,O=null,L=new de(0,0,0),C=0,N=!1,rt=null,y=null,b=null,W=null,Y=null,se.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:It,disable:Ut,bindFramebuffer:qt,drawBuffers:zt,useProgram:ee,setBlending:D,setMaterial:xe,setFlipSided:Gt,setCullFace:re,setLineWidth:Ot,setPolygonOffset:fe,setScissorTest:Wt,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:ot,compressedTexImage3D:mt,texImage2D:gt,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:wt,texStorage2D:Lt,texStorage3D:j,texSubImage2D:z,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:lt,scissor:kt,viewport:Tt,reset:le}}function Sc(i,t,e,n){const r=S0(n);switch(e){case iu:return i*t;case su:return i*t;case ou:return i*t*2;case au:return i*t/r.components*r.byteLength;case rl:return i*t/r.components*r.byteLength;case lu:return i*t*2/r.components*r.byteLength;case sl:return i*t*2/r.components*r.byteLength;case ru:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case ol:return i*t*4/r.components*r.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ks:case Wa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cu:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(i){switch(i){case Zn:case tu:return{byteLength:1,components:1};case Xr:case eu:case Yr:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Ui:case el:case jn:return{byteLength:4,components:1};case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new te,d=new WeakMap;let f;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return m?new OffscreenCanvas(R,S):Zs("canvas")}function x(R,S,V){let ot=1;const mt=Wt(R);if((mt.width>V||mt.height>V)&&(ot=V/Math.max(mt.width,mt.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const z=Math.floor(ot*mt.width),Et=Math.floor(ot*mt.height);f===void 0&&(f=v(z,Et));const bt=S?v(z,Et):f;return bt.width=z,bt.height=Et,bt.getContext("2d").drawImage(R,0,0,z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+z+"x"+Et+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==fn&&R.minFilter!==Tn}function g(R){i.generateMipmap(R)}function T(R,S,V,ot,mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let z=S;if(S===i.RED&&(V===i.FLOAT&&(z=i.R32F),V===i.HALF_FLOAT&&(z=i.R16F),V===i.UNSIGNED_BYTE&&(z=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.R8UI),V===i.UNSIGNED_SHORT&&(z=i.R16UI),V===i.UNSIGNED_INT&&(z=i.R32UI),V===i.BYTE&&(z=i.R8I),V===i.SHORT&&(z=i.R16I),V===i.INT&&(z=i.R32I)),S===i.RG&&(V===i.FLOAT&&(z=i.RG32F),V===i.HALF_FLOAT&&(z=i.RG16F),V===i.UNSIGNED_BYTE&&(z=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RG8UI),V===i.UNSIGNED_SHORT&&(z=i.RG16UI),V===i.UNSIGNED_INT&&(z=i.RG32UI),V===i.BYTE&&(z=i.RG8I),V===i.SHORT&&(z=i.RG16I),V===i.INT&&(z=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(z=i.RGB16UI),V===i.UNSIGNED_INT&&(z=i.RGB32UI),V===i.BYTE&&(z=i.RGB8I),V===i.SHORT&&(z=i.RGB16I),V===i.INT&&(z=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),V===i.UNSIGNED_INT&&(z=i.RGBA32UI),V===i.BYTE&&(z=i.RGBA8I),V===i.SHORT&&(z=i.RGBA16I),V===i.INT&&(z=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),S===i.RGBA){const Et=mt?qs:_e.getTransfer(ot);V===i.FLOAT&&(z=i.RGBA32F),V===i.HALF_FLOAT&&(z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(z=Et===be?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function M(R,S){let V;return R?S===null||S===Ui||S===_r?V=i.DEPTH24_STENCIL8:S===jn?V=i.DEPTH32F_STENCIL8:S===Xr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===_r?V=i.DEPTH_COMPONENT24:S===jn?V=i.DEPTH_COMPONENT32F:S===Xr&&(V=i.DEPTH_COMPONENT16),V}function w(R,S){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function O(R){const S=R.target;S.removeEventListener("dispose",O),C(S),S.isVideoTexture&&d.delete(S)}function L(R){const S=R.target;S.removeEventListener("dispose",L),rt(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const V=R.source,ot=c.get(V);if(ot){const mt=ot[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&N(R),Object.keys(ot).length===0&&c.delete(V)}n.remove(R)}function N(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const V=R.source,ot=c.get(V);delete ot[S.__cacheKey],a.memory.textures--}function rt(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(S.__webglFramebuffer[ot]))for(let mt=0;mt<S.__webglFramebuffer[ot].length;mt++)i.deleteFramebuffer(S.__webglFramebuffer[ot][mt]);else i.deleteFramebuffer(S.__webglFramebuffer[ot]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ot])}else{if(Array.isArray(S.__webglFramebuffer))for(let ot=0;ot<S.__webglFramebuffer.length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[ot]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ot=0;ot<S.__webglColorRenderbuffer.length;ot++)S.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ot]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let ot=0,mt=V.length;ot<mt;ot++){const z=n.get(V[ot]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(V[ot])}n.remove(R)}let y=0;function b(){y=0}function W(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function it(R,S){const V=n.get(R);if(R.isVideoTexture&&Ot(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,R,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function pt(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function Z(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function vt(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){nt(V,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const tt={[Ma]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},Dt={[fn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Mt={[ff]:i.NEVER,[xf]:i.ALWAYS,[pf]:i.LESS,[hu]:i.LEQUAL,[mf]:i.EQUAL,[vf]:i.GEQUAL,[gf]:i.GREATER,[_f]:i.NOTEQUAL};function _t(R,S){if(S.type===jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===bo||S.magFilter===is||S.magFilter===Di||S.minFilter===Tn||S.minFilter===bo||S.minFilter===is||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,tt[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,tt[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,tt[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Dt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Dt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==is&&S.minFilter!==Di||S.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function se(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",O));const ot=S.source;let mt=c.get(ot);mt===void 0&&(mt={},c.set(ot,mt));const z=Y(S);if(z!==R.__cacheKey){mt[z]===void 0&&(mt[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),mt[z].usedTimes++;const Et=mt[R.__cacheKey];Et!==void 0&&(mt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&N(S)),R.__cacheKey=z,R.__webglTexture=mt[z].texture}return V}function ce(R,S,V){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);const mt=se(R,S),z=S.source;e.bindTexture(ot,R.__webglTexture,i.TEXTURE0+V);const Et=n.get(z);if(z.version!==Et.__version||mt===!0){e.activeTexture(i.TEXTURE0+V);const bt=_e.getPrimaries(_e.workingColorSpace),lt=S.colorSpace===li?null:_e.getPrimaries(S.colorSpace),Lt=S.colorSpace===li||bt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let j=x(S.image,!1,r.maxTextureSize);j=fe(S,j);const gt=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let kt=T(S.internalFormat,gt,At,S.colorSpace,S.isVideoTexture);_t(ot,S);let Tt;const Ft=S.mipmaps,wt=S.isVideoTexture!==!0,le=Et.__version===void 0||mt===!0,I=z.dataReady,ut=w(S,j);if(S.isDepthTexture)kt=M(S.format===vr,S.type),le&&(wt?e.texStorage2D(i.TEXTURE_2D,1,kt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,kt,j.width,j.height,0,gt,At,null));else if(S.isDataTexture)if(Ft.length>0){wt&&le&&e.texStorage2D(i.TEXTURE_2D,ut,kt,Ft[0].width,Ft[0].height);for(let K=0,F=Ft.length;K<F;K++)Tt=Ft[K],wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,gt,At,Tt.data);S.generateMipmaps=!1}else wt?(le&&e.texStorage2D(i.TEXTURE_2D,ut,kt,j.width,j.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,gt,At,j.data)):e.texImage2D(i.TEXTURE_2D,0,kt,j.width,j.height,0,gt,At,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){wt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,kt,Ft[0].width,Ft[0].height,j.depth);for(let K=0,F=Ft.length;K<F;K++)if(Tt=Ft[K],S.format!==An)if(gt!==null)if(wt){if(I)if(S.layerUpdates.size>0){const st=Sc(Tt.width,Tt.height,S.format,S.type);for(const Q of S.layerUpdates){const $t=Tt.data.subarray(Q*st/Tt.data.BYTES_PER_ELEMENT,(Q+1)*st/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Q,Tt.width,Tt.height,1,gt,$t,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,j.depth,gt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,kt,Tt.width,Tt.height,j.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,j.depth,gt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,kt,Tt.width,Tt.height,j.depth,0,gt,At,Tt.data)}else{wt&&le&&e.texStorage2D(i.TEXTURE_2D,ut,kt,Ft[0].width,Ft[0].height);for(let K=0,F=Ft.length;K<F;K++)Tt=Ft[K],S.format!==An?gt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,gt,At,Tt.data)}else if(S.isDataArrayTexture)if(wt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,kt,j.width,j.height,j.depth),I)if(S.layerUpdates.size>0){const K=Sc(j.width,j.height,S.format,S.type);for(const F of S.layerUpdates){const st=j.data.subarray(F*K/j.data.BYTES_PER_ELEMENT,(F+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,F,j.width,j.height,1,gt,At,st)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,gt,At,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,j.width,j.height,j.depth,0,gt,At,j.data);else if(S.isData3DTexture)wt?(le&&e.texStorage3D(i.TEXTURE_3D,ut,kt,j.width,j.height,j.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,gt,At,j.data)):e.texImage3D(i.TEXTURE_3D,0,kt,j.width,j.height,j.depth,0,gt,At,j.data);else if(S.isFramebufferTexture){if(le)if(wt)e.texStorage2D(i.TEXTURE_2D,ut,kt,j.width,j.height);else{let K=j.width,F=j.height;for(let st=0;st<ut;st++)e.texImage2D(i.TEXTURE_2D,st,kt,K,F,0,gt,At,null),K>>=1,F>>=1}}else if(Ft.length>0){if(wt&&le){const K=Wt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ut,kt,K.width,K.height)}for(let K=0,F=Ft.length;K<F;K++)Tt=Ft[K],wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt,At,Tt):e.texImage2D(i.TEXTURE_2D,K,kt,gt,At,Tt);S.generateMipmaps=!1}else if(wt){if(le){const K=Wt(j);e.texStorage2D(i.TEXTURE_2D,ut,kt,K.width,K.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,j)}else e.texImage2D(i.TEXTURE_2D,0,kt,gt,At,j);h(S)&&g(ot),Et.__version=z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function nt(R,S,V){if(S.image.length!==6)return;const ot=se(R,S),mt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const z=n.get(mt);if(mt.version!==z.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);const Et=_e.getPrimaries(_e.workingColorSpace),bt=S.colorSpace===li?null:_e.getPrimaries(S.colorSpace),lt=S.colorSpace===li||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let F=0;F<6;F++)!Lt&&!j?gt[F]=x(S.image[F],!0,r.maxCubemapSize):gt[F]=j?S.image[F].image:S.image[F],gt[F]=fe(S,gt[F]);const At=gt[0],kt=s.convert(S.format,S.colorSpace),Tt=s.convert(S.type),Ft=T(S.internalFormat,kt,Tt,S.colorSpace),wt=S.isVideoTexture!==!0,le=z.__version===void 0||ot===!0,I=mt.dataReady;let ut=w(S,At);_t(i.TEXTURE_CUBE_MAP,S);let K;if(Lt){wt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,At.width,At.height);for(let F=0;F<6;F++){K=gt[F].mipmaps;for(let st=0;st<K.length;st++){const Q=K[st];S.format!==An?kt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,0,0,Q.width,Q.height,kt,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,Ft,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,0,0,Q.width,Q.height,kt,Tt,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,Ft,Q.width,Q.height,0,kt,Tt,Q.data)}}}else{if(K=S.mipmaps,wt&&le){K.length>0&&ut++;const F=Wt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ft,F.width,F.height)}for(let F=0;F<6;F++)if(j){wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,gt[F].width,gt[F].height,kt,Tt,gt[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ft,gt[F].width,gt[F].height,0,kt,Tt,gt[F].data);for(let st=0;st<K.length;st++){const $t=K[st].image[F].image;wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,0,0,$t.width,$t.height,kt,Tt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,Ft,$t.width,$t.height,0,kt,Tt,$t.data)}}else{wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,kt,Tt,gt[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ft,kt,Tt,gt[F]);for(let st=0;st<K.length;st++){const Q=K[st];wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,0,0,kt,Tt,Q.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,Ft,kt,Tt,Q.image[F])}}}h(S)&&g(i.TEXTURE_CUBE_MAP),z.__version=mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function dt(R,S,V,ot,mt,z){const Et=s.convert(V.format,V.colorSpace),bt=s.convert(V.type),lt=T(V.internalFormat,Et,bt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const j=Math.max(1,S.width>>z),gt=Math.max(1,S.height>>z);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,z,lt,j,gt,S.depth,0,Et,bt,null):e.texImage2D(mt,z,lt,j,gt,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,mt,n.get(V).__webglTexture,0,Gt(S)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,mt,n.get(V).__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(R,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const ot=S.depthTexture,mt=ot&&ot.isDepthTexture?ot.type:null,z=M(S.stencilBuffer,mt),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=Gt(S);re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,z,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const ot=S.textures;for(let mt=0;mt<ot.length;mt++){const z=ot[mt],Et=s.convert(z.format,z.colorSpace),bt=s.convert(z.type),lt=T(z.internalFormat,Et,bt,z.colorSpace),Lt=Gt(S);V&&re(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,lt,S.width,S.height):re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it(S.depthTexture,0);const ot=n.get(S.depthTexture).__webglTexture,mt=Gt(S);if(S.depthTexture.format===dr)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===vr)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function qt(R){const S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ot=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){const mt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",mt)};ot.addEventListener("dispose",mt),S.__depthDisposeCallback=mt}S.__boundDepthTexture=ot}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),It(S.__webglDepthbuffer[ot],R,!1);else{const mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),It(S.__webglDepthbuffer,R,!1);else{const ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,S,V){const ot=n.get(R);S!==void 0&&dt(ot.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&qt(R)}function ee(R){const S=R.texture,V=n.get(R),ot=n.get(S);R.addEventListener("dispose",L);const mt=R.textures,z=R.isWebGLCubeRenderTarget===!0,Et=mt.length>1;if(Et||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,a.memory.textures++),z){V.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[bt]=[];for(let lt=0;lt<S.mipmaps.length;lt++)V.__webglFramebuffer[bt][lt]=i.createFramebuffer()}else V.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)V.__webglFramebuffer[bt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,lt=mt.length;bt<lt;bt++){const Lt=n.get(mt[bt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let bt=0;bt<mt.length;bt++){const lt=mt[bt];V.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[bt]);const Lt=s.convert(lt.format,lt.colorSpace),j=s.convert(lt.type),gt=T(lt.internalFormat,Lt,j,lt.colorSpace,R.isXRRenderTarget===!0),At=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,V.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),It(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),_t(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)dt(V.__webglFramebuffer[bt][lt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,lt);else dt(V.__webglFramebuffer[bt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);h(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,lt=mt.length;bt<lt;bt++){const Lt=mt[bt],j=n.get(Lt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),_t(i.TEXTURE_2D,Lt),dt(V.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),h(Lt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ot.__webglTexture),_t(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)dt(V.__webglFramebuffer[lt],R,S,i.COLOR_ATTACHMENT0,bt,lt);else dt(V.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,bt,0);h(S)&&g(bt),e.unbindTexture()}R.depthBuffer&&qt(R)}function ae(R){const S=R.textures;for(let V=0,ot=S.length;V<ot;V++){const mt=S[V];if(h(mt)){const z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(mt).__webglTexture;e.bindTexture(z,Et),g(z),e.unbindTexture()}}}const Qt=[],D=[];function xe(R){if(R.samples>0){if(re(R)===!1){const S=R.textures,V=R.width,ot=R.height;let mt=i.COLOR_BUFFER_BIT;const z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),bt=S.length>1;if(bt)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[lt]);const Lt=n.get(S[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,V,ot,0,0,V,ot,mt,i.NEAREST),l===!0&&(Qt.length=0,D.length=0,Qt.push(i.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qt.push(z),D.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[lt]);const Lt=n.get(S[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(R){return Math.min(r.maxSamples,R.samples)}function re(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function fe(R,S){const V=R.colorSpace,ot=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==mi&&V!==li&&(_e.getTransfer(V)===be?(ot!==An||mt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=it,this.setTexture2DArray=pt,this.setTexture3D=Z,this.setTextureCube=vt,this.rebindTextures=zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=re}function T0(i,t){function e(n,r=li){let s;const a=_e.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Yr)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===ru)return i.RGB;if(n===An)return i.RGBA;if(n===su)return i.LUMINANCE;if(n===ou)return i.LUMINANCE_ALPHA;if(n===dr)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Fs||n===Os)if(a===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===Ta||n===Aa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ra||n===Ca)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wa||n===Ra)return a===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===Ba||n===za||n===Ha||n===Va||n===Ga)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Wa||n===$a)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ks)return a===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===Xa||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class A0 extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Es extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w0={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),g=this._getHandJoint(u,x);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=d.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&c>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new sn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L0 extends Oi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,f=null,c=null,m=null,v=null;const x=new P0,h=e.getContextAttributes();let g=null,T=null;const M=[],w=[],O=new te;let L=null;const C=new Sn;C.layers.enable(1),C.viewport=new we;const N=new Sn;N.layers.enable(2),N.viewport=new we;const rt=[C,N],y=new A0;y.layers.enable(1),y.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=M[nt];return dt===void 0&&(dt=new Zo,M[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=M[nt];return dt===void 0&&(dt=new Zo,M[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=M[nt];return dt===void 0&&(dt=new Zo,M[nt]=dt),dt.getHandSpace()};function Y(nt){const dt=w.indexOf(nt.inputSource);if(dt===-1)return;const It=M[dt];It!==void 0&&(It.update(nt.inputSource,nt.frame,u||a),It.dispatchEvent({type:nt.type,data:nt.inputSource}))}function it(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",it),r.removeEventListener("inputsourceschange",pt);for(let nt=0;nt<M.length;nt++){const dt=w[nt];dt!==null&&(w[nt]=null,M[nt].disconnect(dt))}b=null,W=null,x.reset(),t.setRenderTarget(g),m=null,c=null,f=null,r=null,T=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",it),r.addEventListener("inputsourceschange",pt),h.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const dt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Ni(m.framebufferWidth,m.framebufferHeight,{format:An,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let dt=null,It=null,Ut=null;h.depth&&(Ut=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=h.stencil?vr:dr,It=h.stencil?_r:Ui);const qt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};f=new XRWebGLBinding(r,e),c=f.createProjectionLayer(qt),r.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),T=new Ni(c.textureWidth,c.textureHeight,{format:An,type:Zn,depthTexture:new Eu(c.textureWidth,c.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function pt(nt){for(let dt=0;dt<nt.removed.length;dt++){const It=nt.removed[dt],Ut=w.indexOf(It);Ut>=0&&(w[Ut]=null,M[Ut].disconnect(It))}for(let dt=0;dt<nt.added.length;dt++){const It=nt.added[dt];let Ut=w.indexOf(It);if(Ut===-1){for(let zt=0;zt<M.length;zt++)if(zt>=w.length){w.push(It),Ut=zt;break}else if(w[zt]===null){w[zt]=It,Ut=zt;break}if(Ut===-1)break}const qt=M[Ut];qt&&qt.connect(It)}}const Z=new G,vt=new G;function tt(nt,dt,It){Z.setFromMatrixPosition(dt.matrixWorld),vt.setFromMatrixPosition(It.matrixWorld);const Ut=Z.distanceTo(vt),qt=dt.projectionMatrix.elements,zt=It.projectionMatrix.elements,ee=qt[14]/(qt[10]-1),ae=qt[14]/(qt[10]+1),Qt=(qt[9]+1)/qt[5],D=(qt[9]-1)/qt[5],xe=(qt[8]-1)/qt[0],Gt=(zt[8]+1)/zt[0],re=ee*xe,Ot=ee*Gt,fe=Ut/(-xe+Gt),Wt=fe*-xe;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Wt),nt.translateZ(fe),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const R=ee+fe,S=ae+fe,V=re-Wt,ot=Ot+(Ut-Wt),mt=Qt*ae/S*R,z=D*ae/S*R;nt.projectionMatrix.makePerspective(V,ot,mt,z,R,S),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Dt(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let dt=nt.near,It=nt.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(It=x.depthFar)),y.near=N.near=C.near=dt,y.far=N.far=C.far=It,(b!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,W=y.far);const Ut=nt.parent,qt=y.cameras;Dt(y,Ut);for(let zt=0;zt<qt.length;zt++)Dt(qt[zt],Ut);qt.length===2?tt(y,C,N):y.projectionMatrix.copy(C.projectionMatrix),Mt(nt,y,Ut)};function Mt(nt,dt,It){It===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(It.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ja*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(nt){l=nt,c!==null&&(c.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function se(nt,dt){if(d=dt.getViewerPose(u||a),v=dt,d!==null){const It=d.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let Ut=!1;It.length!==y.cameras.length&&(y.cameras.length=0,Ut=!0);for(let zt=0;zt<It.length;zt++){const ee=It[zt];let ae=null;if(m!==null)ae=m.getViewport(ee);else{const D=f.getViewSubImage(c,ee);ae=D.viewport,zt===0&&(t.setRenderTargetTextures(T,D.colorTexture,c.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(T))}let Qt=rt[zt];Qt===void 0&&(Qt=new Sn,Qt.layers.enable(zt),Qt.viewport=new we,rt[zt]=Qt),Qt.matrix.fromArray(ee.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ee.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ae.x,ae.y,ae.width,ae.height),zt===0&&(y.matrix.copy(Qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ut===!0&&y.cameras.push(Qt)}const qt=r.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const zt=f.getDepthInformation(It[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,r.renderState)}}for(let It=0;It<M.length;It++){const Ut=w[It],qt=M[It];Ut!==null&&qt!==void 0&&qt.update(Ut,dt,u||a)}_t&&_t(nt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),v=null}const ce=new Su;ce.setAnimationLoop(se),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Ei=new Fn,D0=new Te;function I0(i,t){function e(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function n(h,g){g.color.getRGB(h.fogColor.value,yu(i)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function r(h,g,T,M,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(h,g):g.isMeshToonMaterial?(s(h,g),f(h,g)):g.isMeshPhongMaterial?(s(h,g),d(h,g)):g.isMeshStandardMaterial?(s(h,g),c(h,g),g.isMeshPhysicalMaterial&&m(h,g,w)):g.isMeshMatcapMaterial?(s(h,g),v(h,g)):g.isMeshDepthMaterial?s(h,g):g.isMeshDistanceMaterial?(s(h,g),x(h,g)):g.isMeshNormalMaterial?s(h,g):g.isLineBasicMaterial?(a(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?l(h,g,T,M):g.isSpriteMaterial?u(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,e(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===rn&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,e(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===rn&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,e(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,e(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const T=t.get(g),M=T.envMap,w=T.envMapRotation;M&&(h.envMap.value=M,Ei.copy(w),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Ei)),h.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap&&(h.lightMap.value=g.lightMap,h.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,h.lightMapTransform)),g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,h.aoMapTransform))}function a(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function l(h,g,T,M){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*T,h.scale.value=M*.5,g.map&&(h.map.value=g.map,e(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function u(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function d(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function f(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function c(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,h.roughnessMapTransform)),g.envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function m(h,g,T){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&h.clearcoatNormalScale.value.negate())),g.dispersion>0&&(h.dispersion.value=g.dispersion),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=T.texture,h.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,g){g.matcap&&(h.matcap.value=g.matcap)}function x(h,g){const T=t.get(g).light;h.referencePosition.value.setFromMatrixPosition(T.matrixWorld),h.nearDistance.value=T.shadow.camera.near,h.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const w=M.program;n.uniformBlockBinding(T,w)}function u(T,M){let w=r[T.id];w===void 0&&(v(T),w=d(T),r[T.id]=w,T.addEventListener("dispose",h));const O=M.program;n.updateUBOMapping(T,O);const L=t.render.frame;s[T.id]!==L&&(c(T),s[T.id]=L)}function d(T){const M=f();T.__bindingPointIndex=M;const w=i.createBuffer(),O=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,O,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(T){const M=r[T.id],w=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let L=0,C=w.length;L<C;L++){const N=Array.isArray(w[L])?w[L]:[w[L]];for(let rt=0,y=N.length;rt<y;rt++){const b=N[rt];if(m(b,L,rt,O)===!0){const W=b.__offset,Y=Array.isArray(b.value)?b.value:[b.value];let it=0;for(let pt=0;pt<Y.length;pt++){const Z=Y[pt],vt=x(Z);typeof Z=="number"||typeof Z=="boolean"?(b.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+it,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=0,b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=0,b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=0):(Z.toArray(b.__data,it),it+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,w,O){const L=T.value,C=M+"_"+w;if(O[C]===void 0)return typeof L=="number"||typeof L=="boolean"?O[C]=L:O[C]=L.clone(),!0;{const N=O[C];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return O[C]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function v(T){const M=T.uniforms;let w=0;const O=16;for(let C=0,N=M.length;C<N;C++){const rt=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,b=rt.length;y<b;y++){const W=rt[y],Y=Array.isArray(W.value)?W.value:[W.value];for(let it=0,pt=Y.length;it<pt;it++){const Z=Y[it],vt=x(Z),tt=w%O,Dt=tt%vt.boundary,Mt=tt+Dt;w+=Dt,Mt!==0&&O-Mt<vt.storage&&(w+=O-Mt),W.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=vt.storage}}}const L=w%O;return L>0&&(w+=O-L),T.__size=w,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function h(T){const M=T.target;M.removeEventListener("dispose",h);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:u,dispose:g}}class Cu{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,h=null;const g=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=hi,this.toneMappingExposure=1;const M=this;let w=!1,O=0,L=0,C=null,N=-1,rt=null;const y=new we,b=new we;let W=null;const Y=new de(0);let it=0,pt=e.width,Z=e.height,vt=1,tt=null,Dt=null;const Mt=new we(0,0,pt,Z),_t=new we(0,0,pt,Z);let se=!1;const ce=new cl;let nt=!1,dt=!1;const It=new Te,Ut=new Te,qt=new G,zt=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Qt(){return C===null?vt:1}let D=n;function xe(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Q,!1),D===null){const k="webgl2";if(D=xe(k,E),D===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,re,Ot,fe,Wt,R,S,V,ot,mt,z,Et,bt,lt,Lt,j,gt,At,kt,Tt,Ft,wt,le,I;function ut(){Gt=new zg(D),Gt.init(),wt=new T0(D,Gt),re=new Ug(D,Gt,t,wt),Ot=new b0(D),re.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),fe=new Gg(D),Wt=new a0,R=new E0(D,Gt,Ot,Wt,re,wt,fe),S=new Fg(M),V=new Bg(M),ot=new Kf(D),le=new Dg(D,ot),mt=new Hg(D,ot,fe,le),z=new $g(D,mt,ot,fe),kt=new Wg(D,re,R),j=new Ng(Wt),Et=new o0(M,S,V,Gt,re,le,j),bt=new I0(M,Wt),lt=new c0,Lt=new m0(Gt),At=new Lg(M,S,V,Ot,z,c,l),gt=new y0(M,z,re),I=new U0(D,fe,re,Ot),Tt=new Ig(D,Gt,fe),Ft=new Vg(D,Gt,fe),fe.programs=Et.programs,M.capabilities=re,M.extensions=Gt,M.properties=Wt,M.renderLists=lt,M.shadowMap=gt,M.state=Ot,M.info=fe}ut();const K=new L0(M,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(E){E!==void 0&&(vt=E,this.setSize(pt,Z,!1))},this.getSize=function(E){return E.set(pt,Z)},this.setSize=function(E,k,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=E,Z=k,e.width=Math.floor(E*vt),e.height=Math.floor(k*vt),X===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(pt*vt,Z*vt).floor()},this.setDrawingBufferSize=function(E,k,X){pt=E,Z=k,vt=X,e.width=Math.floor(E*X),e.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,k,X,q){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,k,X,q),Ot.viewport(y.copy(Mt).multiplyScalar(vt).round())},this.getScissor=function(E){return E.copy(_t)},this.setScissor=function(E,k,X,q){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,k,X,q),Ot.scissor(b.copy(_t).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){Ot.setScissorTest(se=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){Dt=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let B=!1;if(C!==null){const St=C.texture.format;B=St===ol||St===sl||St===rl}if(B){const St=C.texture.type,Pt=St===Zn||St===Ui||St===Xr||St===_r||St===nl||St===il,Nt=At.getClearColor(),Bt=At.getClearAlpha(),Xt=Nt.r,Yt=Nt.g,Ht=Nt.b;Pt?(m[0]=Xt,m[1]=Yt,m[2]=Ht,m[3]=Bt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Xt,v[1]=Yt,v[2]=Ht,v[3]=Bt,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}k&&(q|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),lt.dispose(),Lt.dispose(),Wt.dispose(),S.dispose(),V.dispose(),z.dispose(),le.dispose(),I.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",ki),K.removeEventListener("sessionend",Er),kn.stop()};function F(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=fe.autoReset,k=gt.enabled,X=gt.autoUpdate,q=gt.needsUpdate,B=gt.type;ut(),fe.autoReset=E,gt.enabled=k,gt.autoUpdate=X,gt.needsUpdate=q,gt.type=B}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){const k=E.target;k.removeEventListener("dispose",$t),Kt(k)}function Kt(E){he(E),Wt.remove(E)}function he(E){const k=Wt.get(E).programs;k!==void 0&&(k.forEach(function(X){Et.releaseProgram(X)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,B,St){k===null&&(k=ee);const Pt=B.isMesh&&B.matrixWorld.determinant()<0,Nt=lo(E,k,X,q,B);Ot.setMaterial(q,Pt);let Bt=X.index,Xt=1;if(q.wireframe===!0){if(Bt=mt.getWireframeAttribute(X),Bt===void 0)return;Xt=2}const Yt=X.drawRange,Ht=X.attributes.position;let ge=Yt.start*Xt,ye=(Yt.start+Yt.count)*Xt;St!==null&&(ge=Math.max(ge,St.start*Xt),ye=Math.min(ye,(St.start+St.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),ye=Math.min(ye,Bt.count)):Ht!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,Ht.count));const Me=ye-ge;if(Me<0||Me===1/0)return;le.setup(B,q,Nt,X,Bt);let Ye,pe=Tt;if(Bt!==null&&(Ye=ot.get(Bt),pe=Ft,pe.setIndex(Ye)),B.isMesh)q.wireframe===!0?(Ot.setLineWidth(q.wireframeLinewidth*Qt()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(B.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),Ot.setLineWidth(Vt*Qt()),B.isLineSegments?pe.setMode(D.LINES):B.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else B.isPoints?pe.setMode(D.POINTS):B.isSprite&&pe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Vt=B._multiDrawStarts,Ne=B._multiDrawCounts,ue=B._multiDrawCount,Qe=Bt?ot.get(Bt).bytesPerElement:1,Qn=Wt.get(q).currentProgram.getUniforms();for(let De=0;De<ue;De++)Qn.setValue(D,"_gl_DrawID",De),pe.render(Vt[De]/Qe,Ne[De])}else if(B.isInstancedMesh)pe.renderInstances(ge,Me,B.count);else if(X.isInstancedBufferGeometry){const Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ne=Math.min(X.instanceCount,Vt);pe.renderInstances(ge,Me,Ne)}else pe.render(ge,Me)};function oe(E,k,X){E.transparent===!0&&E.side===Yn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,wn(E,k,X),E.side=di,E.needsUpdate=!0,wn(E,k,X),E.side=Yn):wn(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),h=Lt.get(X),h.init(k),T.push(h),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const q=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const St=B.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Nt=St[Pt];oe(Nt,X,B),q.add(Nt)}else oe(St,X,B),q.add(St)}),T.pop(),h=null,q},this.compileAsync=function(E,k,X=null){const q=this.compile(E,k,X);return new Promise(B=>{function St(){if(q.forEach(function(Pt){Wt.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){B(E);return}setTimeout(St,10)}Gt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Le=null;function $e(E){Le&&Le(E)}function ki(){kn.stop()}function Er(){kn.start()}const kn=new Su;kn.setAnimationLoop($e),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){Le=E,K.setAnimationLoop(E),E===null?kn.stop():kn.start()},K.addEventListener("sessionstart",ki),K.addEventListener("sessionend",Er),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,C),h=Lt.get(E,T.length),h.init(k),T.push(h),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(Ut),dt=this.localClippingEnabled,nt=j.init(this.clippingPlanes,dt),x=lt.get(E,g.length),x.init(),g.push(x),K.enabled===!0&&K.isPresenting===!0){const St=M.xr.getDepthSensingMesh();St!==null&&Bi(St,k,-1/0,M.sortObjects)}Bi(E,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(tt,Dt),ae=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ae&&At.addToRenderList(x,E),this.info.render.frame++,nt===!0&&j.beginShadows();const X=h.state.shadowsArray;gt.render(X,E,k),nt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,B=x.transmissive;if(h.setupLights(),k.isArrayCamera){const St=k.cameras;if(B.length>0)for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Ar(q,B,E,Bt)}ae&&At.render(E);for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Tr(x,E,Bt,Bt.viewport)}}else B.length>0&&Ar(q,B,E,k),ae&&At.render(E),Tr(x,E,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(M,E,k),le.resetDefaultState(),N=-1,rt=null,T.pop(),T.length>0?(h=T[T.length-1],nt===!0&&j.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Bi(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ce.intersectsSprite(E)){q&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ut);const Pt=z.update(E),Nt=E.material;Nt.visible&&x.push(E,Pt,Nt,X,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ce.intersectsObject(E))){const Pt=z.update(E),Nt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(Ut)),Array.isArray(Nt)){const Bt=Pt.groups;for(let Xt=0,Yt=Bt.length;Xt<Yt;Xt++){const Ht=Bt[Xt],ge=Nt[Ht.materialIndex];ge&&ge.visible&&x.push(E,Pt,ge,X,zt.z,Ht)}}else Nt.visible&&x.push(E,Pt,Nt,X,zt.z,null)}}const St=E.children;for(let Pt=0,Nt=St.length;Pt<Nt;Pt++)Bi(St[Pt],k,X,q)}function Tr(E,k,X,q){const B=E.opaque,St=E.transmissive,Pt=E.transparent;h.setupLightsView(X),nt===!0&&j.setGlobalState(M.clippingPlanes,X),q&&Ot.viewport(y.copy(q)),B.length>0&&zi(B,k,X),St.length>0&&zi(St,k,X),Pt.length>0&&zi(Pt,k,X),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Ar(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new Ni(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Yr:Zn,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const St=h.state.transmissionRenderTarget[q.id],Pt=q.viewport||y;St.setSize(Pt.z,Pt.w);const Nt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(Y),it=M.getClearAlpha(),it<1&&M.setClearColor(16777215,.5),M.clear(),ae&&At.render(X);const Bt=M.toneMapping;M.toneMapping=hi;const Xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),nt===!0&&j.setGlobalState(M.clippingPlanes,q),zi(E,X,q),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ht=0,ge=k.length;Ht<ge;Ht++){const ye=k[Ht],Me=ye.object,Ye=ye.geometry,pe=ye.material,Vt=ye.group;if(pe.side===Yn&&Me.layers.test(q.layers)){const Ne=pe.side;pe.side=rn,pe.needsUpdate=!0,Jr(Me,X,q,Ye,pe,Vt),pe.side=Ne,pe.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}M.setRenderTarget(Nt),M.setClearColor(Y,it),Xt!==void 0&&(q.viewport=Xt),M.toneMapping=Bt}function zi(E,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,St=E.length;B<St;B++){const Pt=E[B],Nt=Pt.object,Bt=Pt.geometry,Xt=q===null?Pt.material:q,Yt=Pt.group;Nt.layers.test(X.layers)&&Jr(Nt,k,X,Bt,Xt,Yt)}}function Jr(E,k,X,q,B,St){E.onBeforeRender(M,k,X,q,B,St),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,k,X,q,E,St),B.transparent===!0&&B.side===Yn&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,M.renderBufferDirect(X,k,q,B,E,St),B.side=di,B.needsUpdate=!0,M.renderBufferDirect(X,k,q,B,E,St),B.side=Yn):M.renderBufferDirect(X,k,q,B,E,St),E.onAfterRender(M,k,X,q,B,St)}function wn(E,k,X){k.isScene!==!0&&(k=ee);const q=Wt.get(E),B=h.state.lights,St=h.state.shadowsArray,Pt=B.state.version,Nt=Et.getParameters(E,B.state,St,k,X),Bt=Et.getProgramCacheKey(Nt);let Xt=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",$t),Xt=new Map,q.programs=Xt);let Yt=Xt.get(Bt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===Pt)return Jn(E,Nt),Yt}else Nt.uniforms=Et.getUniforms(E),E.onBeforeCompile(Nt,M),Yt=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Yt),q.uniforms=Nt.uniforms;const Ht=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=j.uniform),Jn(E,Nt),q.needsLights=gi(E),q.lightsStateVersion=Pt,q.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function Hi(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=zs.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Jn(E,k){const X=Wt.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function lo(E,k,X,q,B){k.isScene!==!0&&(k=ee),R.resetTextureUnits();const St=k.fog,Pt=q.isMeshStandardMaterial?k.environment:null,Nt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mi,Bt=(q.isMeshStandardMaterial?V:S).get(q.envMap||Pt),Xt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Yt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!X.morphAttributes.position,ge=!!X.morphAttributes.normal,ye=!!X.morphAttributes.color;let Me=hi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=M.toneMapping);const Ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=Ye!==void 0?Ye.length:0,Vt=Wt.get(q),Ne=h.state.lights;if(nt===!0&&(dt===!0||E!==rt)){const tn=E===rt&&q.id===N;j.setState(q,E,tn)}let ue=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ne.state.version||Vt.outputColorSpace!==Nt||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isBatchedMesh&&Vt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Vt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==Bt||q.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==j.numPlanes||Vt.numIntersection!==j.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Yt||Vt.morphTargets!==Ht||Vt.morphNormals!==ge||Vt.morphColors!==ye||Vt.toneMapping!==Me||Vt.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,Vt.__version=q.version);let Qe=Vt.currentProgram;ue===!0&&(Qe=wn(q,k,B));let Qn=!1,De=!1,ti=!1;const Se=Qe.getUniforms(),mn=Vt.uniforms;if(Ot.useProgram(Qe.program)&&(Qn=!0,De=!0,ti=!0),q.id!==N&&(N=q.id,De=!0),Qn||rt!==E){re.reverseDepthBuffer?(It.copy(E.projectionMatrix),Ef(It),Tf(It),Se.setValue(D,"projectionMatrix",It)):Se.setValue(D,"projectionMatrix",E.projectionMatrix),Se.setValue(D,"viewMatrix",E.matrixWorldInverse);const tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(D,qt.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),rt!==E&&(rt=E,De=!0,ti=!0)}if(B.isSkinnedMesh){Se.setOptional(D,B,"bindMatrix"),Se.setOptional(D,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Se.setValue(D,"boneTexture",tn.boneTexture,R))}B.isBatchedMesh&&(Se.setOptional(D,B,"batchingTexture"),Se.setValue(D,"batchingTexture",B._matricesTexture,R),Se.setOptional(D,B,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",B._indirectTexture,R),Se.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",B._colorsTexture,R));const je=X.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&kt.update(B,X,Qe),(De||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Se.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=Bt,mn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(mn.envMapIntensity.value=k.environmentIntensity),De&&(Se.setValue(D,"toneMappingExposure",M.toneMappingExposure),Vt.needsLights&&co(mn,ti),St&&q.fog===!0&&bt.refreshFogUniforms(mn,St),bt.refreshMaterialUniforms(mn,q,vt,Z,h.state.transmissionRenderTarget[E.id]),zs.upload(D,Hi(Vt),mn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zs.upload(D,Hi(Vt),mn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(D,"center",B.center),Se.setValue(D,"modelViewMatrix",B.modelViewMatrix),Se.setValue(D,"normalMatrix",B.normalMatrix),Se.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let Vi=0,Qr=tn.length;Vi<Qr;Vi++){const _i=tn[Vi];I.update(_i,Qe),I.bind(_i,Qe)}}return Qe}function co(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function gi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,k,X){Wt.get(E.texture).__webglTexture=k,Wt.get(E.depthTexture).__webglTexture=X;const q=Wt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=Wt.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){C=E,O=k,L=X;let q=!0,B=null,St=!1,Pt=!1;if(E){const Bt=Wt.get(E);if(Bt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Bt.__hasExternalTextures)R.rebindTextures(E,Wt.get(E.texture).__webglTexture,Wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(Bt.__boundDepthTexture!==Ht){if(Ht!==null&&Wt.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const Yt=Wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?B=Yt[k][X]:B=Yt[k],St=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=Wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?B=Yt[X]:B=Yt,y.copy(E.viewport),b.copy(E.scissor),W=E.scissorTest}else y.copy(Mt).multiplyScalar(vt).floor(),b.copy(_t).multiplyScalar(vt).floor(),W=se;if(Ot.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&Ot.drawBuffers(E,B),Ot.viewport(y),Ot.scissor(b),Ot.setScissorTest(W),St){const Bt=Wt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,X)}else if(Pt){const Bt=Wt.get(E.texture),Xt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.__webglTexture,X||0,Xt)}N=-1},this.readRenderTargetPixels=function(E,k,X,q,B,St,Pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Ot.bindFramebuffer(D.FRAMEBUFFER,Nt);try{const Bt=E.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-B&&D.readPixels(k,X,q,B,wt.convert(Xt),wt.convert(Yt),St)}finally{const Bt=C!==null?Wt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,B,St,Pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){const Bt=E.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-B){Ot.bindFramebuffer(D.FRAMEBUFFER,Nt);const Ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.bufferData(D.PIXEL_PACK_BUFFER,St.byteLength,D.STREAM_READ),D.readPixels(k,X,q,B,wt.convert(Xt),wt.convert(Yt),0);const ge=C!==null?Wt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,ge);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sf(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,St),D.deleteBuffer(Ht),D.deleteSync(ye),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(E.image.width*q),St=Math.floor(E.image.height*q),Pt=k!==null?k.x:0,Nt=k!==null?k.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Pt,Nt,B,St),Ot.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,q=null,B=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let St,Pt,Nt,Bt,Xt,Yt;X!==null?(St=X.max.x-X.min.x,Pt=X.max.y-X.min.y,Nt=X.min.x,Bt=X.min.y):(St=E.image.width,Pt=E.image.height,Nt=0,Bt=0),q!==null?(Xt=q.x,Yt=q.y):(Xt=0,Yt=0);const Ht=wt.convert(k.format),ge=wt.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ye=D.getParameter(D.UNPACK_ROW_LENGTH),Me=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ye=D.getParameter(D.UNPACK_SKIP_PIXELS),pe=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ne=E.isCompressedTexture?E.mipmaps[B]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ne.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,Ne.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Xt,Yt,Ne.width,Ne.height,Ht,Ne.data):D.texSubImage2D(D.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,Ne),D.pixelStorei(D.UNPACK_ROW_LENGTH,ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),B===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,q=null,B=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],k=arguments[3],B=arguments[4]||0);let St,Pt,Nt,Bt,Xt,Yt,Ht,ge,ye;const Me=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(St=X.max.x-X.min.x,Pt=X.max.y-X.min.y,Nt=X.max.z-X.min.z,Bt=X.min.x,Xt=X.min.y,Yt=X.min.z):(St=Me.width,Pt=Me.height,Nt=Me.depth,Bt=0,Xt=0,Yt=0),q!==null?(Ht=q.x,ge=q.y,ye=q.z):(Ht=0,ge=0,ye=0);const Ye=wt.convert(k.format),pe=wt.convert(k.type);let Vt;if(k.isData3DTexture)R.setTexture3D(k,0),Vt=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ne=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Qn=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ye,pe,Me.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ye,Me.data):D.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ye,pe,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),B===0&&k.generateMipmaps&&D.generateMipmap(Vt),Ot.unbindTexture()},this.initRenderTarget=function(E){Wt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ot.unbindTexture()},this.resetState=function(){O=0,L=0,C=null,Ot.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===al?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===io?"display-p3":"srgb"}}class N0 extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pu extends Mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new G,Qs=new G,Ec=new Te,Or=new ll,Ts=new ro,Jo=new G,Tc=new G;class F0 extends We{constructor(t=new On,e=new Pu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Js.fromBufferAttribute(e,r-1),Qs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Js.distanceTo(Qs);t.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Ts.radius+=s,t.ray.intersectsSphere(Ts)===!1)return;Ec.copy(r).invert(),Or.copy(t.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=n.index,c=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=m,h=v-1;x<h;x+=u){const g=d.getX(x),T=d.getX(x+1),M=As(this,t,Or,l,g,T);M&&e.push(M)}if(this.isLineLoop){const x=d.getX(v-1),h=d.getX(m),g=As(this,t,Or,l,x,h);g&&e.push(g)}}else{const m=Math.max(0,a.start),v=Math.min(c.count,a.start+a.count);for(let x=m,h=v-1;x<h;x+=u){const g=As(this,t,Or,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=As(this,t,Or,l,v-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function As(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Js.fromBufferAttribute(a,r),Qs.fromBufferAttribute(a,s),e.distanceSqToSegment(Js,Qs,Jo,Tc)>n)return;Jo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jo);if(!(l<t.near||l>t.far))return{distance:l,point:Tc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Ac=new G,wc=new G;class O0 extends F0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ac.fromBufferAttribute(e,r),wc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ac.distanceTo(wc);t.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ws=new G,Rs=new G,Qo=new G,Cs=new dn;class k0 extends On{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Vr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,u=[0,0,0],d=["a","b","c"],f=new Array(3),c={},m=[];for(let v=0;v<l;v+=3){a?(u[0]=a.getX(v),u[1]=a.getX(v+1),u[2]=a.getX(v+2)):(u[0]=v,u[1]=v+1,u[2]=v+2);const{a:x,b:h,c:g}=Cs;if(x.fromBufferAttribute(o,u[0]),h.fromBufferAttribute(o,u[1]),g.fromBufferAttribute(o,u[2]),Cs.getNormal(Qo),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,f[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const M=(T+1)%3,w=f[T],O=f[M],L=Cs[d[T]],C=Cs[d[M]],N=`${w}_${O}`,rt=`${O}_${w}`;rt in c&&c[rt]?(Qo.dot(c[rt].normal)<=s&&(m.push(L.x,L.y,L.z),m.push(C.x,C.y,C.z)),c[rt]=null):N in c||(c[N]={index0:u[T],index1:u[M],normal:Qo.clone()})}}for(const v in c)if(c[v]){const{index0:x,index1:h}=c[v];ws.fromBufferAttribute(o,x),Rs.fromBufferAttribute(o,h),m.push(ws.x,ws.y,ws.z),m.push(Rs.x,Rs.y,Rs.z)}this.setAttribute("position",new Un(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class B0 extends Mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lu extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class z0 extends Lu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new Te,Rc=new G,Cc=new G;class H0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class V0 extends H0{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pc extends Lu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new V0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G0 extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const Dc={type:"change"},dl={type:"start"},Du={type:"end"},Ps=new ll,Ic=new ai,W0=Math.cos(70*Mf.DEG2RAD),Fe=new G,nn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ea=1e-6;class $0 extends G0{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Fi,this._lastTargetPosition=new G,this._quat=new Fi().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lc,this._sphericalDelta=new Lc,this._scale=1,this._panOffset=new G,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new G,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q0.bind(this),this._onPointerDown=X0.bind(this),this._onPointerUp=Y0.bind(this),this._onContextMenu=ev.bind(this),this._onMouseWheel=Z0.bind(this),this._onKeyDown=J0.bind(this),this._onTouchStart=Q0.bind(this),this._onTouchMove=tv.bind(this),this._onMouseDown=j0.bind(this),this._onMouseMove=K0.bind(this),this._interceptControlDown=nv.bind(this),this._interceptControlUp=iv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new G(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ps.origin.copy(this.object.position),Ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ps.direction))<W0?this.object.lookAt(this.target):(Ic.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ps.intersectPlane(Ic,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ea||this._lastTargetPosition.distanceToSquared(this.target)>ea?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Fe.copy(r).sub(this.target);let s=Fe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function X0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function q0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Y0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Du),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function j0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case ur.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case ur.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(dl)}function K0(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Z0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Du))}function J0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Q0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(dl)}function tv(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function ev(i){this.enabled!==!1&&i.preventDefault()}function nv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rv="modulepreload",sv=function(i,t){return new URL(i,t).href},Uc={},ov=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(e.map(u=>{if(u=sv(u,n),u in Uc)return;Uc[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const x=a[v];if(x.href===u&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":rv,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((v,x)=>{m.addEventListener("load",v),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var av=(()=>{var i=import.meta.url;return async function(t={}){var e,n=t,r,s,a=new Promise((p,_)=>{r=p,s=_}),o=typeof window=="object",l=typeof importScripts=="function",u=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(u){const{createRequire:p}=await ov(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var d=p(import.meta.url)}var f=!1;n.setup=function(){if(f)return;f=!0,n.initTBB();function p(U,$,at=yt=>yt){if($)for(let yt of $)U.push_back(at(yt));return U}function _(U,$=at=>at){const at=[],yt=U.size();for(let jt=0;jt<yt;jt++)at.push($(U.get(jt)));return at}function A(U,$=at=>at){const at=[],yt=U.size();for(let jt=0;jt<yt;jt++){const Ee=U.get(jt),Re=Ee.size(),on=[];for(let Ve=0;Ve<Re;Ve++)on.push($(Ee.get(Ve)));at.push(on)}return at}function P(U){return U[0].length<3&&(U=[U]),p(new n.Vector2_vec2,U,$=>p(new n.Vector_vec2,$,at=>at instanceof Array?{x:at[0],y:at[1]}:at))}function H(U){for(let $=0;$<U.size();$++)U.get($).delete();U.delete()}function J(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0}:U[0]}function ct(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1],z:U[0][2]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0,z:U[2]||0}:U[0]}function et(U){return U=="EvenOdd"?0:U=="NonZero"?1:U=="Negative"?3:2}function ft(U){return U=="Round"?1:U=="Miter"?2:0}const xt=n.CrossSection;function Rt(U,$="Positive"){if(U instanceof xt)return U;{const at=P(U),yt=new xt(at,et($));return H(at),yt}}n.CrossSection.prototype.translate=function(...U){return this._Translate(J(U))},n.CrossSection.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U}):this._Scale(J([U]))},n.CrossSection.prototype.mirror=function(U){return this._Mirror(J([U]))},n.CrossSection.prototype.warp=function(U){const $=wr(function(yt){const jt=V(yt,"double"),Ee=V(yt+8,"double"),Re=[jt,Ee];U(Re),ot(yt,Re[0],"double"),ot(yt+8,Re[1],"double")},"vi"),at=this._Warp($);return Rr($),at},n.CrossSection.prototype.decompose=function(){const U=this._Decompose(),$=_(U);return U.delete(),$},n.CrossSection.prototype.bounds=function(){const U=this._Bounds();return{min:["x","y"].map($=>U.min[$]),max:["x","y"].map($=>U.max[$])}},n.CrossSection.prototype.offset=function(U,$="Square",at=2,yt=0){return this._Offset(U,ft($),at,yt)},n.CrossSection.prototype.extrude=function(U,$=0,at=0,yt=[1,1],jt=!1){yt=J([yt]);const Ee=n._Extrude(this._ToPolygons(),U,$,at,yt);return jt?Ee.translate([0,0,-U/2]):Ee},n.CrossSection.prototype.revolve=function(U=0,$=360){return n._Revolve(this._ToPolygons(),U,$)},n.CrossSection.prototype.add=function(U){return this._add(Rt(U))},n.CrossSection.prototype.subtract=function(U){return this._subtract(Rt(U))},n.CrossSection.prototype.intersect=function(U){return this._intersect(Rt(U))},n.CrossSection.prototype.toPolygons=function(){const U=this._ToPolygons(),$=A(U,at=>[at.x,at.y]);return U.delete(),$},n.Manifold.prototype.smoothOut=function(U=60,$=0){return this._SmoothOut(U,$)},n.Manifold.prototype.warp=function(U){const $=wr(function(jt){const Ee=V(jt,"double"),Re=V(jt+8,"double"),on=V(jt+16,"double"),Ve=[Ee,Re,on];U(Ve),ot(jt,Ve[0],"double"),ot(jt+8,Ve[1],"double"),ot(jt+16,Ve[2],"double")},"vi"),at=this._Warp($);Rr($);const yt=at.status();if(yt.value!==0)throw new n.ManifoldError(yt.value);return at},n.Manifold.prototype.calculateNormals=function(U,$=60){return this._CalculateNormals(U,$)},n.Manifold.prototype.setProperties=function(U,$){const at=this.numProp(),yt=wr(function(Ee,Re,on){const Ve=[];for(let Ce=0;Ce<U;++Ce)Ve[Ce]=V(Ee+8*Ce,"double");const Gi=[];for(let Ce=0;Ce<3;++Ce)Gi[Ce]=V(Re+8*Ce,"double");const Wi=[];for(let Ce=0;Ce<at;++Ce)Wi[Ce]=V(on+8*Ce,"double");$(Ve,Gi,Wi);for(let Ce=0;Ce<U;++Ce)ot(Ee+8*Ce,Ve[Ce],"double")},"viii"),jt=this._SetProperties(U,yt);return Rr(yt),jt},n.Manifold.prototype.translate=function(...U){return this._Translate(ct(U))},n.Manifold.prototype.rotate=function(U,$,at){return Array.isArray(U)?this._Rotate(...U):this._Rotate(U,$||0,at||0)},n.Manifold.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U,z:U}):this._Scale(ct([U]))},n.Manifold.prototype.mirror=function(U){return this._Mirror(ct([U]))},n.Manifold.prototype.trimByPlane=function(U,$=0){return this._TrimByPlane(ct([U]),$)},n.Manifold.prototype.slice=function(U=0){const $=this._Slice(U),at=new xt($,et("Positive"));return H($),at},n.Manifold.prototype.project=function(){const U=this._Project(),$=new xt(U,et("Positive"));return H(U),$},n.Manifold.prototype.split=function(U){const $=this._Split(U),at=_($);return $.delete(),at},n.Manifold.prototype.splitByPlane=function(U,$=0){const at=this._SplitByPlane(ct([U]),$),yt=_(at);return at.delete(),yt},n.Manifold.prototype.decompose=function(){const U=this._Decompose(),$=_(U);return U.delete(),$},n.Manifold.prototype.boundingBox=function(){const U=this._boundingBox();return{min:["x","y","z"].map($=>U.min[$]),max:["x","y","z"].map($=>U.max[$])}};class Zt{constructor({numProp:$=3,triVerts:at=new Uint32Array,vertProperties:yt=new Float32Array,mergeFromVert:jt,mergeToVert:Ee,runIndex:Re,runOriginalID:on,faceID:Ve,halfedgeTangent:Gi,runTransform:Wi}={}){this.numProp=$,this.triVerts=at,this.vertProperties=yt,this.mergeFromVert=jt,this.mergeToVert=Ee,this.runIndex=Re,this.runOriginalID=on,this.faceID=Ve,this.halfedgeTangent=Gi,this.runTransform=Wi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:$,mesh:at}=n._Merge(this);return Object.assign(this,{...at}),$}verts($){return this.triVerts.subarray(3*$,3*($+1))}position($){return this.vertProperties.subarray(this.numProp*$,this.numProp*$+3)}extras($){return this.vertProperties.subarray(this.numProp*$+3,this.numProp*($+1))}tangent($){return this.halfedgeTangent.subarray(4*$,4*($+1))}transform($){const at=new Array(16);for(const yt of[0,1,2,3])for(const jt of[0,1,2])at[4*yt+jt]=this.runTransform[12*$+3*yt+jt];return at[15]=1,at}}n.Mesh=Zt,n.Manifold.prototype.getMesh=function(U=-1){return new Zt(this._GetMeshJS(U))},n.ManifoldError=function($,...at){let yt="Unknown error";switch($){case n.status.NonFiniteVertex.value:yt="Non-finite vertex";break;case n.status.NotManifold.value:yt="Not manifold";break;case n.status.VertexOutOfBounds.value:yt="Vertex index out of bounds";break;case n.status.PropertiesWrongLength.value:yt="Properties have wrong length";break;case n.status.MissingPositionProperties.value:yt="Less than three properties";break;case n.status.MergeVectorsDifferentLengths.value:yt="Merge vectors have different lengths";break;case n.status.MergeIndexOutOfBounds.value:yt="Merge index out of bounds";break;case n.status.TransformWrongLength.value:yt="Transform vector has wrong length";break;case n.status.RunIndexWrongLength.value:yt="Run index vector has wrong length";break;case n.status.FaceIDWrongLength.value:yt="Face ID vector has wrong length";case n.status.InvalidConstruction.value:yt="Manifold constructed with invalid parameters"}const jt=Error.apply(this,[yt,...at]);jt.name=this.name="ManifoldError",this.message=jt.message,this.stack=jt.stack,this.code=$},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(U,$="Positive"){const at=P(U),yt=new xt(at,et($));return H(at),yt},n.CrossSection.ofPolygons=function(U,$="Positive"){return new n.CrossSection(U,$)},n.CrossSection.square=function(...U){let $;U.length==0?$={x:1,y:1}:typeof U[0]=="number"?$={x:U[0],y:U[0]}:$=J(U);const at=U[1]||!1;return n._Square($,at)},n.CrossSection.circle=function(U,$=0){return n._Circle(U,$)};function me(U){return function(...$){$.length==1&&($=$[0]);const at=new n.Vector_crossSection;for(const jt of $)at.push_back(Rt(jt));const yt=n["_crossSection"+U](at);return at.delete(),yt}}n.CrossSection.compose=me("Compose"),n.CrossSection.union=me("UnionN"),n.CrossSection.difference=me("DifferenceN"),n.CrossSection.intersection=me("IntersectionN");function Ie(U,$){p(U,$,at=>at instanceof Array?{x:at[0],y:at[1]}:at)}n.CrossSection.hull=function(...U){U.length==1&&(U=U[0]);let $=new n.Vector_vec2;for(const yt of U)if(yt instanceof xt)n._crossSectionCollectVertices($,yt);else if(yt instanceof Array&&yt.length==2&&typeof yt[0]=="number")$.push_back({x:yt[0],y:yt[1]});else if(yt.x)$.push_back(yt);else{const Ee=yt[0].length==2&&typeof yt[0][0]=="number"||yt[0].x?[yt]:yt;for(const Re of Ee)Ie($,Re)}const at=n._crossSectionHullPoints($);return $.delete(),at},n.CrossSection.prototype=Object.create(xt.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>U=>U instanceof xt});const Ae=n.Manifold;n.Manifold=function(U){const $=new Ae(U),at=$.status();if(at.value!==0)throw new n.ManifoldError(at.value);return $},n.Manifold.ofMesh=function(U){return new n.Manifold(U)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...U){let $;U.length==0?$={x:1,y:1,z:1}:typeof U[0]=="number"?$={x:U[0],y:U[0],z:U[0]}:$=ct(U);const at=U[1]||!1;return n._Cube($,at)},n.Manifold.cylinder=function(U,$,at=-1,yt=0,jt=!1){return n._Cylinder(U,$,at,yt,jt)},n.Manifold.sphere=function(U,$=0){return n._Sphere(U,$)},n.Manifold.smooth=function(U,$=[]){const at=new n.Vector_smoothness;p(at,$);const yt=n._Smooth(U,at);return at.delete(),yt},n.Manifold.extrude=function(U,$,at=0,yt=0,jt=[1,1],Ee=!1){return(U instanceof xt?U:n.CrossSection(U,"Positive")).extrude($,at,yt,jt,Ee)},n.Manifold.revolve=function(U,$=0,at=360){return(U instanceof xt?U:n.CrossSection(U,"Positive")).revolve($,at)},n.Manifold.reserveIDs=function(U){return n._ReserveIDs(U)},n.Manifold.compose=function(U){const $=new n.Vector_manifold;p($,U);const at=n._manifoldCompose($);return $.delete(),at};function _n(U){return function(...$){$.length==1&&($=$[0]);const at=new n.Vector_manifold;for(const jt of $)at.push_back(jt);const yt=n["_manifold"+U+"N"](at);return at.delete(),yt}}n.Manifold.union=_n("Union"),n.Manifold.difference=_n("Difference"),n.Manifold.intersection=_n("Intersection"),n.Manifold.levelSet=function(U,$,at,yt=0,jt=-1){const Ee={min:{x:$.min[0],y:$.min[1],z:$.min[2]},max:{x:$.max[0],y:$.max[1],z:$.max[2]}},Re=wr(function(Ve){const Gi=V(Ve,"double"),Wi=V(Ve+8,"double"),Ce=V(Ve+16,"double");return U([Gi,Wi,Ce])},"di"),on=n._LevelSet(Re,Ee,at,yt,jt);return Rr(Re),on};function vn(U,$){p(U,$,at=>at instanceof Array?{x:at[0],y:at[1],z:at[2]}:at)}n.Manifold.hull=function(...U){U.length==1&&(U=U[0]);let $=new n.Vector_vec3;for(const yt of U)yt instanceof Ae?n._manifoldCollectVertices($,yt):yt instanceof Array&&yt.length==3&&typeof yt[0]=="number"?$.push_back({x:yt[0],y:yt[1],z:yt[2]}):yt.x?$.push_back(yt):vn($,yt);const at=n._manifoldHullPoints($);return $.delete(),at},n.Manifold.prototype=Object.create(Ae.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>U=>U instanceof Ae}),n.triangulate=function(U,$=-1){const at=P(U),yt=_(n._Triangulate(at,$),jt=>[jt[0],jt[1],jt[2]]);return H(at),yt}};var c=Object.assign({},n),m="";function v(p){return n.locateFile?n.locateFile(p,m):m+p}var x,h;if(u){var g=d("fs"),T=d("path");m=d("url").fileURLToPath(new URL(""+new URL("manifold-BrJGmODQ.js",import.meta.url).href,import.meta.url)),h=p=>{p=Qt(p)?new URL(p):T.normalize(p);var _=g.readFileSync(p);return _},x=(p,_=!0)=>(p=Qt(p)?new URL(p):T.normalize(p),new Promise((A,P)=>{g.readFile(p,_?void 0:"utf8",(H,J)=>{H?P(H):A(_?J.buffer:J)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),i&&(m=i),m.startsWith("blob:")?m="":m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(h=p=>{var _=new XMLHttpRequest;return _.open("GET",p,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),x=p=>Qt(p)?new Promise((_,A)=>{var P=new XMLHttpRequest;P.open("GET",p,!0),P.responseType="arraybuffer",P.onload=()=>{(P.status==200||P.status==0&&P.response)&&A(P.response),_(P.status)},P.onerror=_,P.send(null)}):fetch(p,{credentials:"same-origin"}).then(_=>_.ok?_.arrayBuffer():Promise.reject(new Error(_.status+" : "+_.url))));n.print||console.log.bind(console);var M=n.printErr||console.error.bind(console);Object.assign(n,c),c=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var w;n.wasmBinary&&(w=n.wasmBinary);var O,L=!1,C,N,rt,y,b,W,Y,it;function pt(){var p=O.buffer;n.HEAP8=C=new Int8Array(p),n.HEAP16=rt=new Int16Array(p),n.HEAPU8=N=new Uint8Array(p),n.HEAPU16=y=new Uint16Array(p),n.HEAP32=b=new Int32Array(p),n.HEAPU32=W=new Uint32Array(p),n.HEAPF32=Y=new Float32Array(p),n.HEAPF64=it=new Float64Array(p)}var Z=[],vt=[],tt=[];function Dt(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)se(n.preRun.shift());S(Z)}function Mt(){S(vt)}function _t(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)nt(n.postRun.shift());S(tt)}function se(p){Z.unshift(p)}function ce(p){vt.unshift(p)}function nt(p){tt.unshift(p)}var dt=0,It=null;function Ut(p){dt++,n.monitorRunDependencies?.(dt)}function qt(p){if(dt--,n.monitorRunDependencies?.(dt),dt==0&&It){var _=It;It=null,_()}}function zt(p){n.onAbort?.(p),p="Aborted("+p+")",M(p),L=!0,p+=". Build with -sASSERTIONS for more info.";var _=new WebAssembly.RuntimeError(p);throw s(_),_}var ee="data:application/octet-stream;base64,",ae=p=>p.startsWith(ee),Qt=p=>p.startsWith("file://");function D(){if(n.locateFile){var p="manifold.wasm";return ae(p)?p:v(p)}return new URL(""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,import.meta.url).href}var xe;function Gt(p){if(p==xe&&w)return new Uint8Array(w);if(h)return h(p);throw"both async and sync fetching of the wasm failed"}function re(p){return w?Promise.resolve().then(()=>Gt(p)):x(p).then(_=>new Uint8Array(_),()=>Gt(p))}function Ot(p,_,A){return re(p).then(P=>WebAssembly.instantiate(P,_)).then(A,P=>{M(`failed to asynchronously prepare wasm: ${P}`),zt(P)})}function fe(p,_,A,P){return!p&&typeof WebAssembly.instantiateStreaming=="function"&&!ae(_)&&!Qt(_)&&!u&&typeof fetch=="function"?fetch(_,{credentials:"same-origin"}).then(H=>{var J=WebAssembly.instantiateStreaming(H,A);return J.then(P,function(ct){return M(`wasm streaming compile failed: ${ct}`),M("falling back to ArrayBuffer instantiation"),Ot(_,A,P)})}):Ot(_,A,P)}function Wt(){return{a:Gh}}function R(){var p=Wt();function _(P,H){return gn=P.exports,gn=Wh(gn),O=gn.J,pt(),De=gn.M,ce(gn.K),qt(),gn}Ut();function A(P){_(P.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(p,_)}catch(P){M(`Module.instantiateWasm callback failed with error: ${P}`),s(P)}return xe||(xe=D()),fe(w,xe,p,A).catch(s),{}}var S=p=>{for(;p.length>0;)p.shift()(n)};function V(p,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":return C[p>>>0];case"i8":return C[p>>>0];case"i16":return rt[p>>>1>>>0];case"i32":return b[p>>>2>>>0];case"i64":zt("to do getValue(i64) use WASM_BIGINT");case"float":return Y[p>>>2>>>0];case"double":return it[p>>>3>>>0];case"*":return W[p>>>2>>>0];default:zt(`invalid type for getValue: ${_}`)}}n.noExitRuntime;function ot(p,_,A="i8"){switch(A.endsWith("*")&&(A="*"),A){case"i1":C[p>>>0]=_;break;case"i8":C[p>>>0]=_;break;case"i16":rt[p>>>1>>>0]=_;break;case"i32":b[p>>>2>>>0]=_;break;case"i64":zt("to do setValue(i64) use WASM_BIGINT");case"float":Y[p>>>2>>>0]=_;break;case"double":it[p>>>3>>>0]=_;break;case"*":W[p>>>2>>>0]=_;break;default:zt(`invalid type for setValue: ${A}`)}}class mt{constructor(_){this.excPtr=_,this.ptr=_-24}set_type(_){W[this.ptr+4>>>2>>>0]=_}get_type(){return W[this.ptr+4>>>2>>>0]}set_destructor(_){W[this.ptr+8>>>2>>>0]=_}get_destructor(){return W[this.ptr+8>>>2>>>0]}set_caught(_){_=_?1:0,C[this.ptr+12>>>0]=_}get_caught(){return C[this.ptr+12>>>0]!=0}set_rethrown(_){_=_?1:0,C[this.ptr+13>>>0]=_}get_rethrown(){return C[this.ptr+13>>>0]!=0}init(_,A){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(A)}set_adjusted_ptr(_){W[this.ptr+16>>>2>>>0]=_}get_adjusted_ptr(){return W[this.ptr+16>>>2>>>0]}get_exception_ptr(){var _=Al(this.get_type());if(_)return W[this.excPtr>>>2>>>0];var A=this.get_adjusted_ptr();return A!==0?A:this.excPtr}}var z=0;function Et(p,_,A){p>>>=0,_>>>=0,A>>>=0;var P=new mt(p);throw P.init(_,A),z=p,z}var bt=()=>{zt("")},lt={},Lt=p=>{for(;p.length;){var _=p.pop(),A=p.pop();A(_)}};function j(p){return this.fromWireType(W[p>>>2>>>0])}var gt={},At={},kt={},Tt,Ft=p=>{throw new Tt(p)},wt=(p,_,A)=>{p.forEach(function(et){kt[et]=_});function P(et){var ft=A(et);ft.length!==p.length&&Ft("Mismatched type converter count");for(var xt=0;xt<p.length;++xt)Kt(p[xt],ft[xt])}var H=new Array(_.length),J=[],ct=0;_.forEach((et,ft)=>{At.hasOwnProperty(et)?H[ft]=At[et]:(J.push(et),gt.hasOwnProperty(et)||(gt[et]=[]),gt[et].push(()=>{H[ft]=At[et],++ct,ct===J.length&&P(H)}))}),J.length===0&&P(H)},le=function(p){p>>>=0;var _=lt[p];delete lt[p];var A=_.rawConstructor,P=_.rawDestructor,H=_.fields,J=H.map(ct=>ct.getterReturnType).concat(H.map(ct=>ct.setterArgumentType));wt([p],J,ct=>{var et={};return H.forEach((ft,xt)=>{var Rt=ft.fieldName,Zt=ct[xt],me=ft.getter,Ie=ft.getterContext,Ae=ct[xt+H.length],_n=ft.setter,vn=ft.setterContext;et[Rt]={read:U=>Zt.fromWireType(me(Ie,U)),write:(U,$)=>{var at=[];_n(vn,U,Ae.toWireType(at,$)),Lt(at)}}}),[{name:_.name,fromWireType:ft=>{var xt={};for(var Rt in et)xt[Rt]=et[Rt].read(ft);return P(ft),xt},toWireType:(ft,xt)=>{for(var Rt in et)if(!(Rt in xt))throw new TypeError(`Missing field: "${Rt}"`);var Zt=A();for(Rt in et)et[Rt].write(Zt,xt[Rt]);return ft!==null&&ft.push(P,Zt),Zt},argPackAdvance:he,readValueFromPointer:j,destructorFunction:P}]})};function I(p,_,A,P,H){}var ut=()=>{for(var p=new Array(256),_=0;_<256;++_)p[_]=String.fromCharCode(_);K=p},K,F=p=>{for(var _="",A=p;N[A>>>0];)_+=K[N[A++>>>0]];return _},st,Q=p=>{throw new st(p)};function $t(p,_,A={}){var P=_.name;if(p||Q(`type "${P}" must have a positive integer typeid pointer`),At.hasOwnProperty(p)){if(A.ignoreDuplicateRegistrations)return;Q(`Cannot register type '${P}' twice`)}if(At[p]=_,delete kt[p],gt.hasOwnProperty(p)){var H=gt[p];delete gt[p],H.forEach(J=>J())}}function Kt(p,_,A={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");return $t(p,_,A)}var he=8;function oe(p,_,A,P){p>>>=0,_>>>=0,_=F(_),Kt(p,{name:_,fromWireType:function(H){return!!H},toWireType:function(H,J){return J?A:P},argPackAdvance:he,readValueFromPointer:function(H){return this.fromWireType(N[H>>>0])},destructorFunction:null})}var Le=p=>({count:p.count,deleteScheduled:p.deleteScheduled,preservePointerOnDelete:p.preservePointerOnDelete,ptr:p.ptr,ptrType:p.ptrType,smartPtr:p.smartPtr,smartPtrType:p.smartPtrType}),$e=p=>{function _(A){return A.$$.ptrType.registeredClass.name}Q(_(p)+" instance already deleted")},ki=!1,Er=p=>{},kn=p=>{p.smartPtr?p.smartPtrType.rawDestructor(p.smartPtr):p.ptrType.registeredClass.rawDestructor(p.ptr)},Bi=p=>{p.count.value-=1;var _=p.count.value===0;_&&kn(p)},Tr=(p,_,A)=>{if(_===A)return p;if(A.baseClass===void 0)return null;var P=Tr(p,_,A.baseClass);return P===null?null:A.downcast(P)},Ar={},zi=()=>Object.keys(gi).length,Jr=()=>{var p=[];for(var _ in gi)gi.hasOwnProperty(_)&&p.push(gi[_]);return p},wn=[],Hi=()=>{for(;wn.length;){var p=wn.pop();p.$$.deleteScheduled=!1,p.delete()}},Jn,lo=p=>{Jn=p,wn.length&&Jn&&Jn(Hi)},co=()=>{n.getInheritedInstanceCount=zi,n.getLiveInheritedInstances=Jr,n.flushPendingDeletes=Hi,n.setDelayFunction=lo},gi={},E=(p,_)=>{for(_===void 0&&Q("ptr should not be undefined");p.baseClass;)_=p.upcast(_),p=p.baseClass;return _},k=(p,_)=>(_=E(p,_),gi[_]),X=(p,_)=>{(!_.ptrType||!_.ptr)&&Ft("makeClassHandle requires ptr and ptrType");var A=!!_.smartPtrType,P=!!_.smartPtr;return A!==P&&Ft("Both smartPtrType and smartPtr must be specified"),_.count={value:1},B(Object.create(p,{$$:{value:_,writable:!0}}))};function q(p){var _=this.getPointee(p);if(!_)return this.destructor(p),null;var A=k(this.registeredClass,_);if(A!==void 0){if(A.$$.count.value===0)return A.$$.ptr=_,A.$$.smartPtr=p,A.clone();var P=A.clone();return this.destructor(p),P}function H(){return this.isSmartPointer?X(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:p}):X(this.registeredClass.instancePrototype,{ptrType:this,ptr:p})}var J=this.registeredClass.getActualType(_),ct=Ar[J];if(!ct)return H.call(this);var et;this.isConst?et=ct.constPointerType:et=ct.pointerType;var ft=Tr(_,this.registeredClass,et.registeredClass);return ft===null?H.call(this):this.isSmartPointer?X(et.registeredClass.instancePrototype,{ptrType:et,ptr:ft,smartPtrType:this,smartPtr:p}):X(et.registeredClass.instancePrototype,{ptrType:et,ptr:ft})}var B=p=>typeof FinalizationRegistry>"u"?(B=_=>_,p):(ki=new FinalizationRegistry(_=>{Bi(_.$$)}),B=_=>{var A=_.$$,P=!!A.smartPtr;if(P){var H={$$:A};ki.register(_,H,_)}return _},Er=_=>ki.unregister(_),B(p)),St=()=>{Object.assign(Pt.prototype,{isAliasOf(p){if(!(this instanceof Pt)||!(p instanceof Pt))return!1;var _=this.$$.ptrType.registeredClass,A=this.$$.ptr;p.$$=p.$$;for(var P=p.$$.ptrType.registeredClass,H=p.$$.ptr;_.baseClass;)A=_.upcast(A),_=_.baseClass;for(;P.baseClass;)H=P.upcast(H),P=P.baseClass;return _===P&&A===H},clone(){if(this.$$.ptr||$e(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var p=B(Object.create(Object.getPrototypeOf(this),{$$:{value:Le(this.$$)}}));return p.$$.count.value+=1,p.$$.deleteScheduled=!1,p},delete(){this.$$.ptr||$e(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Q("Object already scheduled for deletion"),Er(this),Bi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||$e(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Q("Object already scheduled for deletion"),wn.push(this),wn.length===1&&Jn&&Jn(Hi),this.$$.deleteScheduled=!0,this}})};function Pt(){}var Nt=(p,_)=>Object.defineProperty(_,"name",{value:p}),Bt=(p,_,A)=>{if(p[_].overloadTable===void 0){var P=p[_];p[_]=function(...H){return p[_].overloadTable.hasOwnProperty(H.length)||Q(`Function '${A}' called with an invalid number of arguments (${H.length}) - expects one of (${p[_].overloadTable})!`),p[_].overloadTable[H.length].apply(this,H)},p[_].overloadTable=[],p[_].overloadTable[P.argCount]=P}},Xt=(p,_,A)=>{n.hasOwnProperty(p)?((A===void 0||n[p].overloadTable!==void 0&&n[p].overloadTable[A]!==void 0)&&Q(`Cannot register public name '${p}' twice`),Bt(n,p,p),n.hasOwnProperty(A)&&Q(`Cannot register multiple overloads of a function with the same number of arguments (${A})!`),n[p].overloadTable[A]=_):(n[p]=_,A!==void 0&&(n[p].numArguments=A))},Yt=48,Ht=57,ge=p=>{if(p===void 0)return"_unknown";p=p.replace(/[^a-zA-Z0-9_]/g,"$");var _=p.charCodeAt(0);return _>=Yt&&_<=Ht?`_${p}`:p};function ye(p,_,A,P,H,J,ct,et){this.name=p,this.constructor=_,this.instancePrototype=A,this.rawDestructor=P,this.baseClass=H,this.getActualType=J,this.upcast=ct,this.downcast=et,this.pureVirtualFunctions=[]}var Me=(p,_,A)=>{for(;_!==A;)_.upcast||Q(`Expected null or instance of ${A.name}, got an instance of ${_.name}`),p=_.upcast(p),_=_.baseClass;return p};function Ye(p,_){if(_===null)return this.isReference&&Q(`null is not a valid ${this.name}`),0;_.$$||Q(`Cannot pass "${mo(_)}" as a ${this.name}`),_.$$.ptr||Q(`Cannot pass deleted object as a pointer of type ${this.name}`);var A=_.$$.ptrType.registeredClass,P=Me(_.$$.ptr,A,this.registeredClass);return P}function pe(p,_){var A;if(_===null)return this.isReference&&Q(`null is not a valid ${this.name}`),this.isSmartPointer?(A=this.rawConstructor(),p!==null&&p.push(this.rawDestructor,A),A):0;(!_||!_.$$)&&Q(`Cannot pass "${mo(_)}" as a ${this.name}`),_.$$.ptr||Q(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&_.$$.ptrType.isConst&&Q(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);var P=_.$$.ptrType.registeredClass;if(A=Me(_.$$.ptr,P,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&Q("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?A=_.$$.smartPtr:Q(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:A=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)A=_.$$.smartPtr;else{var H=_.clone();A=this.rawShare(A,He.toHandle(()=>H.delete())),p!==null&&p.push(this.rawDestructor,A)}break;default:Q("Unsupporting sharing policy")}return A}function Vt(p,_){if(_===null)return this.isReference&&Q(`null is not a valid ${this.name}`),0;_.$$||Q(`Cannot pass "${mo(_)}" as a ${this.name}`),_.$$.ptr||Q(`Cannot pass deleted object as a pointer of type ${this.name}`),_.$$.ptrType.isConst&&Q(`Cannot convert argument of type ${_.$$.ptrType.name} to parameter type ${this.name}`);var A=_.$$.ptrType.registeredClass,P=Me(_.$$.ptr,A,this.registeredClass);return P}var Ne=()=>{Object.assign(ue.prototype,{getPointee(p){return this.rawGetPointee&&(p=this.rawGetPointee(p)),p},destructor(p){this.rawDestructor?.(p)},argPackAdvance:he,readValueFromPointer:j,fromWireType:q})};function ue(p,_,A,P,H,J,ct,et,ft,xt,Rt){this.name=p,this.registeredClass=_,this.isReference=A,this.isConst=P,this.isSmartPointer=H,this.pointeeType=J,this.sharingPolicy=ct,this.rawGetPointee=et,this.rawConstructor=ft,this.rawShare=xt,this.rawDestructor=Rt,!H&&_.baseClass===void 0?P?(this.toWireType=Ye,this.destructorFunction=null):(this.toWireType=Vt,this.destructorFunction=null):this.toWireType=pe}var Qe=(p,_,A)=>{n.hasOwnProperty(p)||Ft("Replacing nonexistent public symbol"),n[p].overloadTable!==void 0&&A!==void 0?n[p].overloadTable[A]=_:(n[p]=_,n[p].argCount=A)},Qn=(p,_,A)=>{p=p.replace(/p/g,"i");var P=n["dynCall_"+p];return P(_,...A)},De,ti=p=>De.get(p),Se=(p,_,A=[])=>{if(p.includes("j"))return Qn(p,_,A);var P=ti(_)(...A);return p[0]=="p"?P>>>0:P},mn=(p,_)=>(...A)=>Se(p,_,A),je=(p,_)=>{p=F(p);function A(){return p.includes("j")||p.includes("p")?mn(p,_):ti(_)}var P=A();return typeof P!="function"&&Q(`unknown function pointer with signature ${p}: ${_}`),P},tn=(p,_)=>{var A=Nt(_,function(P){this.name=_,this.message=P;var H=new Error(P).stack;H!==void 0&&(this.stack=this.toString()+`
`+H.replace(/^Error(:[^\n]*)?\n/,""))});return A.prototype=Object.create(p.prototype),A.prototype.constructor=A,A.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},A},Vi,Qr=p=>{var _=Tl(p),A=F(_);return zn(_),A},_i=(p,_)=>{var A=[],P={};function H(J){if(!P[J]&&!At[J]){if(kt[J]){kt[J].forEach(H);return}A.push(J),P[J]=!0}}throw _.forEach(H),new Vi(`${p}: `+A.map(Qr).join([", "]))};function zu(p,_,A,P,H,J,ct,et,ft,xt,Rt,Zt,me){p>>>=0,_>>>=0,A>>>=0,P>>>=0,H>>>=0,J>>>=0,ct>>>=0,et>>>=0,ft>>>=0,xt>>>=0,Rt>>>=0,Zt>>>=0,me>>>=0,Rt=F(Rt),J=je(H,J),et&&=je(ct,et),xt&&=je(ft,xt),me=je(Zt,me);var Ie=ge(Rt);Xt(Ie,function(){_i(`Cannot construct ${Rt} due to unbound types`,[P])}),wt([p,_,A],P?[P]:[],Ae=>{Ae=Ae[0];var _n,vn;P?(_n=Ae.registeredClass,vn=_n.instancePrototype):vn=Pt.prototype;var U=Nt(Rt,function(...Re){if(Object.getPrototypeOf(this)!==$)throw new st("Use 'new' to construct "+Rt);if(at.constructor_body===void 0)throw new st(Rt+" has no accessible constructor");var on=at.constructor_body[Re.length];if(on===void 0)throw new st(`Tried to invoke ctor of ${Rt} with invalid number of parameters (${Re.length}) - expected (${Object.keys(at.constructor_body).toString()}) parameters instead!`);return on.apply(this,Re)}),$=Object.create(vn,{constructor:{value:U}});U.prototype=$;var at=new ye(Rt,U,$,me,_n,J,et,xt);at.baseClass&&(at.baseClass.__derivedClasses??=[],at.baseClass.__derivedClasses.push(at));var yt=new ue(Rt,at,!0,!1,!1),jt=new ue(Rt+"*",at,!1,!1,!1),Ee=new ue(Rt+" const*",at,!1,!0,!1);return Ar[p]={pointerType:jt,constPointerType:Ee},Qe(Ie,U),[yt,jt,Ee]})}var uo=(p,_)=>{for(var A=[],P=0;P<p;P++)A.push(W[_+P*4>>>2>>>0]);return A};function gl(p){for(var _=1;_<p.length;++_)if(p[_]!==null&&p[_].destructorFunction===void 0)return!0;return!1}function _l(p,_){if(!(p instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof p} which is not a function`);var A=Nt(p.name||"unknownFunctionName",function(){});A.prototype=p.prototype;var P=new A,H=p.apply(P,_);return H instanceof Object?H:P}function Hu(p,_,A,P){for(var H=gl(p),J=p.length,ct="",et="",ft=0;ft<J-2;++ft)ct+=(ft!==0?", ":"")+"arg"+ft,et+=(ft!==0?", ":"")+"arg"+ft+"Wired";var xt=`
        return function (${ct}) {
        if (arguments.length !== ${J-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${J-2}');
        }`;H&&(xt+=`var destructors = [];
`);var Rt=H?"destructors":"null",Zt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];_&&(xt+="var thisWired = classParam['toWireType']("+Rt+`, this);
`);for(var ft=0;ft<J-2;++ft)xt+="var arg"+ft+"Wired = argType"+ft+"['toWireType']("+Rt+", arg"+ft+`);
`,Zt.push("argType"+ft);if(_&&(et="thisWired"+(et.length>0?", ":"")+et),xt+=(A||P?"var rv = ":"")+"invoker(fn"+(et.length>0?", ":"")+et+`);
`,H)xt+=`runDestructors(destructors);
`;else for(var ft=_?1:2;ft<p.length;++ft){var me=ft===1?"thisWired":"arg"+(ft-2)+"Wired";p[ft].destructorFunction!==null&&(xt+=`${me}_dtor(${me});
`,Zt.push(`${me}_dtor`))}return A&&(xt+=`var ret = retType['fromWireType'](rv);
return ret;
`),xt+=`}
`,[Zt,xt]}function ho(p,_,A,P,H,J){var ct=_.length;ct<2&&Q("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var et=_[1]!==null&&A!==null,ft=gl(_),xt=_[0].name!=="void",Rt=[p,Q,P,H,Lt,_[0],_[1]],Zt=0;Zt<ct-2;++Zt)Rt.push(_[Zt+2]);if(!ft)for(var Zt=et?1:2;Zt<_.length;++Zt)_[Zt].destructorFunction!==null&&Rt.push(_[Zt].destructorFunction);let[me,Ie]=Hu(_,et,xt,J);me.push(Ie);var Ae=_l(Function,me)(...Rt);return Nt(p,Ae)}var Vu=function(p,_,A,P,H,J){p>>>=0,A>>>=0,P>>>=0,H>>>=0,J>>>=0;var ct=uo(_,A);H=je(P,H),wt([],[p],et=>{et=et[0];var ft=`constructor ${et.name}`;if(et.registeredClass.constructor_body===void 0&&(et.registeredClass.constructor_body=[]),et.registeredClass.constructor_body[_-1]!==void 0)throw new st(`Cannot register multiple constructors with identical number of parameters (${_-1}) for class '${et.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return et.registeredClass.constructor_body[_-1]=()=>{_i(`Cannot construct ${et.name} due to unbound types`,ct)},wt([],ct,xt=>(xt.splice(1,0,null),et.registeredClass.constructor_body[_-1]=ho(ft,xt,null,H,J),[])),[]})},vl=p=>{p=p.trim();const _=p.indexOf("(");return _!==-1?p.substr(0,_):p},Gu=function(p,_,A,P,H,J,ct,et,ft){p>>>=0,_>>>=0,P>>>=0,H>>>=0,J>>>=0,ct>>>=0;var xt=uo(A,P);_=F(_),_=vl(_),J=je(H,J),wt([],[p],Rt=>{Rt=Rt[0];var Zt=`${Rt.name}.${_}`;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),et&&Rt.registeredClass.pureVirtualFunctions.push(_);function me(){_i(`Cannot call ${Zt} due to unbound types`,xt)}var Ie=Rt.registeredClass.instancePrototype,Ae=Ie[_];return Ae===void 0||Ae.overloadTable===void 0&&Ae.className!==Rt.name&&Ae.argCount===A-2?(me.argCount=A-2,me.className=Rt.name,Ie[_]=me):(Bt(Ie,_,Zt),Ie[_].overloadTable[A-2]=me),wt([],xt,_n=>{var vn=ho(Zt,_n,Rt,J,ct,ft);return Ie[_].overloadTable===void 0?(vn.argCount=A-2,Ie[_]=vn):Ie[_].overloadTable[A-2]=vn,[]}),[]})},fo=[],Bn=[];function po(p){p>>>=0,p>9&&--Bn[p+1]===0&&(Bn[p]=void 0,fo.push(p))}var Wu=()=>Bn.length/2-5-fo.length,$u=()=>{Bn.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Wu},He={toValue:p=>(p||Q("Cannot use deleted val. handle = "+p),Bn[p]),toHandle:p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const _=fo.pop()||Bn.length;return Bn[_]=p,Bn[_+1]=1,_}}}},Xu={name:"emscripten::val",fromWireType:p=>{var _=He.toValue(p);return po(p),_},toWireType:(p,_)=>He.toHandle(_),argPackAdvance:he,readValueFromPointer:j,destructorFunction:null};function xl(p){return p>>>=0,Kt(p,Xu)}var qu=(p,_,A)=>{switch(_){case 1:return A?function(P){return this.fromWireType(C[P>>>0])}:function(P){return this.fromWireType(N[P>>>0])};case 2:return A?function(P){return this.fromWireType(rt[P>>>1>>>0])}:function(P){return this.fromWireType(y[P>>>1>>>0])};case 4:return A?function(P){return this.fromWireType(b[P>>>2>>>0])}:function(P){return this.fromWireType(W[P>>>2>>>0])};default:throw new TypeError(`invalid integer width (${_}): ${p}`)}};function Yu(p,_,A,P){p>>>=0,_>>>=0,A>>>=0,_=F(_);function H(){}H.values={},Kt(p,{name:_,constructor:H,fromWireType:function(J){return this.constructor.values[J]},toWireType:(J,ct)=>ct.value,argPackAdvance:he,readValueFromPointer:qu(_,A,P),destructorFunction:null}),Xt(_,H)}var ts=(p,_)=>{var A=At[p];return A===void 0&&Q(`${_} has unknown type ${Qr(p)}`),A};function ju(p,_,A){p>>>=0,_>>>=0;var P=ts(p,"enum");_=F(_);var H=P.constructor,J=Object.create(P.constructor.prototype,{value:{value:A},constructor:{value:Nt(`${P.name}_${_}`,function(){})}});H.values[A]=J,H[_]=J}var mo=p=>{if(p===null)return"null";var _=typeof p;return _==="object"||_==="array"||_==="function"?p.toString():""+p},Ku=(p,_)=>{switch(_){case 4:return function(A){return this.fromWireType(Y[A>>>2>>>0])};case 8:return function(A){return this.fromWireType(it[A>>>3>>>0])};default:throw new TypeError(`invalid float width (${_}): ${p}`)}},Zu=function(p,_,A){p>>>=0,_>>>=0,A>>>=0,_=F(_),Kt(p,{name:_,fromWireType:P=>P,toWireType:(P,H)=>H,argPackAdvance:he,readValueFromPointer:Ku(_,A),destructorFunction:null})};function Ju(p,_,A,P,H,J,ct){p>>>=0,A>>>=0,P>>>=0,H>>>=0,J>>>=0;var et=uo(_,A);p=F(p),p=vl(p),H=je(P,H),Xt(p,function(){_i(`Cannot call ${p} due to unbound types`,et)},_-1),wt([],et,ft=>{var xt=[ft[0],null].concat(ft.slice(1));return Qe(p,ho(p,xt,null,H,J,ct),_-1),[]})}var Qu=(p,_,A)=>{switch(_){case 1:return A?P=>C[P>>>0]:P=>N[P>>>0];case 2:return A?P=>rt[P>>>1>>>0]:P=>y[P>>>1>>>0];case 4:return A?P=>b[P>>>2>>>0]:P=>W[P>>>2>>>0];default:throw new TypeError(`invalid integer width (${_}): ${p}`)}};function th(p,_,A,P,H){p>>>=0,_>>>=0,A>>>=0,_=F(_);var J=Rt=>Rt;if(P===0){var ct=32-8*A;J=Rt=>Rt<<ct>>>ct}var et=_.includes("unsigned"),ft=(Rt,Zt)=>{},xt;et?xt=function(Rt,Zt){return ft(Zt,this.name),Zt>>>0}:xt=function(Rt,Zt){return ft(Zt,this.name),Zt},Kt(p,{name:_,fromWireType:J,toWireType:xt,argPackAdvance:he,readValueFromPointer:Qu(_,A,P!==0),destructorFunction:null})}function eh(p,_,A){p>>>=0,A>>>=0;var P=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],H=P[_];function J(ct){var et=W[ct>>>2>>>0],ft=W[ct+4>>>2>>>0];return new H(C.buffer,ft,et)}A=F(A),Kt(p,{name:A,fromWireType:J,argPackAdvance:he,readValueFromPointer:J},{ignoreDuplicateRegistrations:!0})}function nh(p,_){p>>>=0,xl(p)}var ih=(p,_,A,P)=>{if(A>>>=0,!(P>0))return 0;for(var H=A,J=A+P-1,ct=0;ct<p.length;++ct){var et=p.charCodeAt(ct);if(et>=55296&&et<=57343){var ft=p.charCodeAt(++ct);et=65536+((et&1023)<<10)|ft&1023}if(et<=127){if(A>=J)break;_[A++>>>0]=et}else if(et<=2047){if(A+1>=J)break;_[A++>>>0]=192|et>>6,_[A++>>>0]=128|et&63}else if(et<=65535){if(A+2>=J)break;_[A++>>>0]=224|et>>12,_[A++>>>0]=128|et>>6&63,_[A++>>>0]=128|et&63}else{if(A+3>=J)break;_[A++>>>0]=240|et>>18,_[A++>>>0]=128|et>>12&63,_[A++>>>0]=128|et>>6&63,_[A++>>>0]=128|et&63}}return _[A>>>0]=0,A-H},rh=(p,_,A)=>ih(p,N,_,A),sh=p=>{for(var _=0,A=0;A<p.length;++A){var P=p.charCodeAt(A);P<=127?_++:P<=2047?_+=2:P>=55296&&P<=57343?(_+=4,++A):_+=3}return _},yl=typeof TextDecoder<"u"?new TextDecoder:void 0,oh=(p,_,A)=>{_>>>=0;for(var P=_+A,H=_;p[H]&&!(H>=P);)++H;if(H-_>16&&p.buffer&&yl)return yl.decode(p.subarray(_,H));for(var J="";_<H;){var ct=p[_++];if(!(ct&128)){J+=String.fromCharCode(ct);continue}var et=p[_++]&63;if((ct&224)==192){J+=String.fromCharCode((ct&31)<<6|et);continue}var ft=p[_++]&63;if((ct&240)==224?ct=(ct&15)<<12|et<<6|ft:ct=(ct&7)<<18|et<<12|ft<<6|p[_++]&63,ct<65536)J+=String.fromCharCode(ct);else{var xt=ct-65536;J+=String.fromCharCode(55296|xt>>10,56320|xt&1023)}}return J},ah=(p,_)=>(p>>>=0,p?oh(N,p,_):"");function lh(p,_){p>>>=0,_>>>=0,_=F(_);var A=_==="std::string";Kt(p,{name:_,fromWireType(P){var H=W[P>>>2>>>0],J=P+4,ct;if(A)for(var et=J,ft=0;ft<=H;++ft){var xt=J+ft;if(ft==H||N[xt>>>0]==0){var Rt=xt-et,Zt=ah(et,Rt);ct===void 0?ct=Zt:(ct+="\0",ct+=Zt),et=xt+1}}else{for(var me=new Array(H),ft=0;ft<H;++ft)me[ft]=String.fromCharCode(N[J+ft>>>0]);ct=me.join("")}return zn(P),ct},toWireType(P,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var J,ct=typeof H=="string";ct||H instanceof Uint8Array||H instanceof Uint8ClampedArray||H instanceof Int8Array||Q("Cannot pass non-string to std::string"),A&&ct?J=sh(H):J=H.length;var et=xo(4+J+1),ft=et+4;if(W[et>>>2>>>0]=J,A&&ct)rh(H,ft,J+1);else if(ct)for(var xt=0;xt<J;++xt){var Rt=H.charCodeAt(xt);Rt>255&&(zn(ft),Q("String has UTF-16 code units that do not fit in 8 bits")),N[ft+xt>>>0]=Rt}else for(var xt=0;xt<J;++xt)N[ft+xt>>>0]=H[xt];return P!==null&&P.push(zn,et),et},argPackAdvance:he,readValueFromPointer:j,destructorFunction(P){zn(P)}})}var Ml=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ch=(p,_)=>{for(var A=p,P=A>>1,H=P+_/2;!(P>=H)&&y[P>>>0];)++P;if(A=P<<1,A-p>32&&Ml)return Ml.decode(N.subarray(p>>>0,A>>>0));for(var J="",ct=0;!(ct>=_/2);++ct){var et=rt[p+ct*2>>>1>>>0];if(et==0)break;J+=String.fromCharCode(et)}return J},uh=(p,_,A)=>{if(A??=2147483647,A<2)return 0;A-=2;for(var P=_,H=A<p.length*2?A/2:p.length,J=0;J<H;++J){var ct=p.charCodeAt(J);rt[_>>>1>>>0]=ct,_+=2}return rt[_>>>1>>>0]=0,_-P},hh=p=>p.length*2,dh=(p,_)=>{for(var A=0,P="";!(A>=_/4);){var H=b[p+A*4>>>2>>>0];if(H==0)break;if(++A,H>=65536){var J=H-65536;P+=String.fromCharCode(55296|J>>10,56320|J&1023)}else P+=String.fromCharCode(H)}return P},fh=(p,_,A)=>{if(_>>>=0,A??=2147483647,A<4)return 0;for(var P=_,H=P+A-4,J=0;J<p.length;++J){var ct=p.charCodeAt(J);if(ct>=55296&&ct<=57343){var et=p.charCodeAt(++J);ct=65536+((ct&1023)<<10)|et&1023}if(b[_>>>2>>>0]=ct,_+=4,_+4>H)break}return b[_>>>2>>>0]=0,_-P},ph=p=>{for(var _=0,A=0;A<p.length;++A){var P=p.charCodeAt(A);P>=55296&&P<=57343&&++A,_+=4}return _},mh=function(p,_,A){p>>>=0,_>>>=0,A>>>=0,A=F(A);var P,H,J,ct;_===2?(P=ch,H=uh,ct=hh,J=et=>y[et>>>1>>>0]):_===4&&(P=dh,H=fh,ct=ph,J=et=>W[et>>>2>>>0]),Kt(p,{name:A,fromWireType:et=>{for(var ft=W[et>>>2>>>0],xt,Rt=et+4,Zt=0;Zt<=ft;++Zt){var me=et+4+Zt*_;if(Zt==ft||J(me)==0){var Ie=me-Rt,Ae=P(Rt,Ie);xt===void 0?xt=Ae:(xt+="\0",xt+=Ae),Rt=me+_}}return zn(et),xt},toWireType:(et,ft)=>{typeof ft!="string"&&Q(`Cannot pass non-string to C++ string type ${A}`);var xt=ct(ft),Rt=xo(4+xt+_);return W[Rt>>>2>>>0]=xt/_,H(ft,Rt+4,xt+_),et!==null&&et.push(zn,Rt),Rt},argPackAdvance:he,readValueFromPointer:j,destructorFunction(et){zn(et)}})};function gh(p,_,A,P,H,J){p>>>=0,_>>>=0,A>>>=0,P>>>=0,H>>>=0,J>>>=0,lt[p]={name:F(_),rawConstructor:je(A,P),rawDestructor:je(H,J),fields:[]}}function _h(p,_,A,P,H,J,ct,et,ft,xt){p>>>=0,_>>>=0,A>>>=0,P>>>=0,H>>>=0,J>>>=0,ct>>>=0,et>>>=0,ft>>>=0,xt>>>=0,lt[p].fields.push({fieldName:F(_),getterReturnType:A,getter:je(P,H),getterContext:J,setterArgumentType:ct,setter:je(et,ft),setterContext:xt})}var vh=function(p,_){p>>>=0,_>>>=0,_=F(_),Kt(p,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:()=>{},toWireType:(A,P)=>{}})};function xh(p,_,A){return p>>>=0,_>>>=0,A>>>=0,N.copyWithin(p>>>0,_>>>0,_+A>>>0)}var bl=(p,_,A)=>{var P=[],H=p.toWireType(P,A);return P.length&&(W[_>>>2>>>0]=He.toHandle(P)),H};function yh(p,_,A){return p>>>=0,_>>>=0,A>>>=0,p=He.toValue(p),_=ts(_,"emval::as"),bl(_,A,p)}var Mh={},Sl=p=>{var _=Mh[p];return _===void 0?F(p):_},go=[];function bh(p,_,A,P,H){return p>>>=0,_>>>=0,A>>>=0,P>>>=0,H>>>=0,p=go[p],_=He.toValue(_),A=Sl(A),p(_,_[A],P,H)}function Sh(p,_){return p>>>=0,_>>>=0,p=He.toValue(p),_=He.toValue(_),p==_}var Eh=p=>{var _=go.length;return go.push(p),_},Th=(p,_)=>{for(var A=new Array(p),P=0;P<p;++P)A[P]=ts(W[_+P*4>>>2>>>0],"parameter "+P);return A};function Ah(p,_,A){_>>>=0;var P=Th(p,_),H=P.shift();p--;var J=`return function (obj, func, destructorsRef, args) {
`,ct=0,et=[];A===0&&et.push("obj");for(var ft=["retType"],xt=[H],Rt=0;Rt<p;++Rt)et.push("arg"+Rt),ft.push("argType"+Rt),xt.push(P[Rt]),J+=`  var arg${Rt} = argType${Rt}.readValueFromPointer(args${ct?"+"+ct:""});
`,ct+=P[Rt].argPackAdvance;var Zt=A===1?"new func":"func.call";J+=`  var rv = ${Zt}(${et.join(", ")});
`,H.isVoid||(ft.push("emval_returnValue"),xt.push(bl),J+=`  return emval_returnValue(retType, destructorsRef, rv);
`),J+=`};
`,ft.push(J);var me=_l(Function,ft)(...xt),Ie=`methodCaller<(${P.map(Ae=>Ae.name).join(", ")}) => ${H.name}>`;return Eh(Nt(Ie,me))}function wh(p,_){return p>>>=0,_>>>=0,p=He.toValue(p),_=He.toValue(_),He.toHandle(p[_])}function Rh(p){p>>>=0,p>9&&(Bn[p+1]+=1)}function Ch(p){return p>>>=0,He.toHandle(Sl(p))}function Ph(){return He.toHandle({})}function Lh(p){p>>>=0;var _=He.toValue(p);Lt(_),po(p)}function Dh(p,_,A){p>>>=0,_>>>=0,A>>>=0,p=He.toValue(p),_=He.toValue(_),A=He.toValue(A),p[_]=A}function Ih(p,_){p>>>=0,_>>>=0,p=ts(p,"_emval_take_value");var A=p.readValueFromPointer(_);return He.toHandle(A)}var Uh=()=>4294901760,Nh=p=>{var _=O.buffer,A=(p-_.byteLength+65535)/65536;try{return O.grow(A),pt(),1}catch{}};function Fh(p){p>>>=0;var _=N.length,A=Uh();if(p>A)return!1;for(var P=(ft,xt)=>ft+(xt-ft%xt)%xt,H=1;H<=4;H*=2){var J=_*(1+.2/H);J=Math.min(J,p+100663296);var ct=Math.min(A,P(Math.max(p,J),65536)),et=Nh(ct);if(et)return!0}return!1}var El=(p,_)=>{p<128?_.push(p):_.push(p%128|128,p>>7)},Oh=p=>{for(var _={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},A={parameters:[],results:p[0]=="v"?[]:[_[p[0]]]},P=1;P<p.length;++P)A.parameters.push(_[p[P]]);return A},kh=(p,_)=>{var A=p.slice(0,1),P=p.slice(1),H={i:127,p:127,j:126,f:125,d:124,e:111};_.push(96),El(P.length,_);for(var J=0;J<P.length;++J)_.push(H[P[J]]);A=="v"?_.push(0):_.push(1,H[A])},Bh=(p,_)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Oh(_),p);var A=[1];kh(_,A);var P=[0,97,115,109,1,0,0,0,1];El(A.length,P),P.push(...A),P.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var H=new WebAssembly.Module(new Uint8Array(P)),J=new WebAssembly.Instance(H,{e:{f:p}}),ct=J.exports.f;return ct},zh=(p,_)=>{if(vi)for(var A=p;A<p+_;A++){var P=ti(A);P&&vi.set(P,A)}},vi,Hh=p=>(vi||(vi=new WeakMap,zh(0,De.length)),vi.get(p)||0),_o=[],Vh=()=>{if(_o.length)return _o.pop();try{De.grow(1)}catch(p){throw p instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":p}return De.length-1},vo=(p,_)=>De.set(p,_),wr=(p,_)=>{var A=Hh(p);if(A)return A;var P=Vh();try{vo(P,p)}catch(J){if(!(J instanceof TypeError))throw J;var H=Bh(p,_);vo(P,H)}return vi.set(p,P),P},Rr=p=>{vi.delete(ti(p)),vo(p,null),_o.push(p)};Tt=n.InternalError=class extends Error{constructor(_){super(_),this.name="InternalError"}},ut(),st=n.BindingError=class extends Error{constructor(_){super(_),this.name="BindingError"}},St(),co(),Ne(),Vi=n.UnboundTypeError=tn(Error,"UnboundTypeError"),$u();var Gh={i:Et,D:bt,n:le,C:I,H:oe,h:zu,g:Vu,a:Gu,G:xl,t:Yu,f:ju,x:Zu,c:Ju,j:th,e:eh,k:nh,w:lh,s:mh,o:gh,l:_h,I:vh,F:xh,v:yh,z:bh,b:po,m:Sh,y:Ah,B:wh,u:Rh,q:Ch,A:Ph,p:Lh,r:Dh,d:Ih,E:Fh},gn=R(),Tl=p=>(Tl=gn.L)(p),zn=p=>(zn=gn.N)(p),xo=p=>(xo=gn.O)(p),Al=p=>(Al=gn.P)(p);function Wh(p){p=Object.assign({},p);var _=P=>H=>P(H)>>>0,A=P=>()=>P()>>>0;return p.L=_(p.L),p.O=_(p.O),p._emscripten_stack_alloc=_(p._emscripten_stack_alloc),p.emscripten_stack_get_current=A(p.emscripten_stack_get_current),p}n.addFunction=wr,n.removeFunction=Rr;var es;It=function p(){es||wl(),es||(It=p)};function wl(){if(dt>0||(Dt(),dt>0))return;function p(){es||(es=!0,n.calledRun=!0,!L&&(Mt(),r(n),n.onRuntimeInitialized?.(),_t()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),p()},1)):p()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return wl(),e=a,e}})();const lv=""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,Oe=1;function cv(i,t,e=256){const{Manifold:n,CrossSection:r}=i,s=t.body,a=u=>r.circle(u,e),o=(u,d)=>n.cylinder(u,d,d,e);let l;if(s.type==="prism"){const u=s.segs[s.segs.length-1].x1,d=[[0,0],[u,0]];for(let c=s.segs.length-1;c>=0;c--)d.push([s.segs[c].x1,s.segs[c].h],[s.segs[c].x0,s.segs[c].h]);let f=new r([d],"Positive");for(const c of s.fillets||[]){const m=c.dir>0?c.xb:c.xb-c.r,v=r.square([c.r,c.r]).translate([m,c.z]),x=c.dir>0?c.xb+c.r:c.xb-c.r;f=f.add(v.subtract(a(c.r).translate([x,c.z+c.r])))}if(l=f.extrude(s.W).rotate([90,0,0]).translate([0,s.W,0]),s.corner){const c=s.corner.size,m=s.segs[0].h,v=s.W;let x;s.corner.kind==="round"?x=r.square([c,c]).subtract(a(c).translate([c,c])):x=new r([[[0,0],[c,0],[0,c]]],"Positive");const h=[x,x.mirror([1,0]).translate([u,0]),x.mirror([0,1]).translate([0,v]),x.mirror([1,0]).mirror([0,1]).translate([u,v])];for(const g of h)l=l.subtract(g.extrude(m+2*Oe).translate([0,0,-Oe]))}for(const c of t.features)l=l.subtract(Nc(i,t,c,e))}else{const u=s.chamfer||0,d=[[0,0],[s.R,0]];u>0?d.push([s.R,s.t-u],[s.R-u,s.t]):d.push([s.R,s.t]),s.hubR>0?d.push([s.hubR,s.t],[s.hubR,s.t+s.hubH],[0,s.t+s.hubH]):d.push([0,s.t]),l=n.revolve(new r([d],"Positive"),e);const f=s.t+(s.hubR>0?s.hubH:0);l=l.subtract(o(f+2*Oe,s.boreD/2).translate([0,0,-Oe]));for(const c of t.features)l=l.subtract(Nc(i,t,c,e))}return l}function Nc(i,t,e,n){const{Manifold:r,CrossSection:s}=i,a=(o,l)=>r.cylinder(o,l,l,n);switch(e.kind){case"zhole":{let o=a(e.depth+Oe,e.d/2).translate([e.x,e.y,e.top-e.depth]);return e.thru&&(o=a(e.depth+2*Oe,e.d/2).translate([e.x,e.y,-Oe])),e.cb&&(o=o.add(a(e.cb.depth+Oe,e.cb.d/2).translate([e.x,e.y,e.top-e.cb.depth]))),o}case"yhole":return a(t.body.W+2*Oe,e.d/2).rotate([-90,0,0]).translate([e.x,-Oe,e.z]);case"xhole":return a(e.x1-e.x0+2*Oe,e.d/2).rotate([0,90,0]).translate([e.x0-Oe,e.y,e.z]);case"slot":{const o=(e.len-e.w)/2,l=s.circle(e.w/2,n),u=e.dir==="x"?s.hull([l.translate([-o,0]),l.translate([o,0])]):s.hull([l.translate([0,-o]),l.translate([0,o])]),d=e.thru?-Oe:e.top-e.depth,f=e.thru?e.depth+2*Oe:e.depth+Oe;return u.extrude(f).translate([e.x,e.y,d])}case"pocket":{const o=e.x1-e.x0,l=e.y1-e.y0,u=e.r,d=s.circle(u,n);return s.hull([d.translate([u,u]),d.translate([o-u,u]),d.translate([u,l-u]),d.translate([o-u,l-u])]).extrude(e.depth+Oe).translate([e.x0,e.y0,e.top-e.depth])}case"bolts":{let o=null;const l=t.body.t;for(let u=0;u<e.n;u++){const d=((e.startDeg||0)+360*u/e.n)*Math.PI/180,f=e.bc/2*Math.cos(d),c=e.bc/2*Math.sin(d);let m=a(l+2*Oe,e.d/2).translate([f,c,-Oe]);e.cb&&(m=m.add(a(e.cb.depth+Oe,e.cb.d/2).translate([f,c,l-e.cb.depth]))),o=o?o.add(m):m}return o}}throw new Error("unknown feature "+e.kind)}let na=null;function uv(){return na||(na=av({locateFile:()=>lv}).then(i=>(i.setup(),i))),na}const ia=new Map;async function Iu(i,t=96){const e=i.id+":"+t;if(ia.has(e))return ia.get(e);const n=await uv(),r=cv(n,i,t),s=r.getMesh(),a=new On;a.setAttribute("position",new pn(new Float32Array(s.vertProperties),s.numProp)),a.setIndex(new pn(new Uint32Array(s.triVerts),1));const o=a.toNonIndexed();o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere();const l=new k0(o,28),u=r.volume();r.delete&&r.delete();const d={geo:o,edges:l,volume:u};return ia.set(e,d),d}const Fc={dark:{body:10135220,edge:724498},light:{body:13226458,edge:1711910}};function Uu(i,t){const e=Fc[t]||Fc.dark,n=new N0,r=new B0({color:e.body,metalness:.15,roughness:.55,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});n.add(new In(i.geo,r)),n.add(new O0(i.edges,new Pu({color:e.edge}))),n.add(new z0(16777215,4478310,1.6));const s=new Pc(16777215,1.6);s.position.set(.6,-1,1.4),n.add(s);const a=new Pc(16777215,.5);return a.position.set(-1,.6,.4),n.add(a),n}function Nu(i,t){const e=i.geo.boundingBox,n=new G;e.getCenter(n);const r=i.geo.boundingSphere.radius,s=new ul(-r*t,r*t,r,-r,.1,r*20);return s.up.set(0,0,1),s.position.copy(n).add(new G(1,-1,1).normalize().multiplyScalar(r*6)),s.lookAt(n),s.zoom=1.05,s.updateProjectionMatrix(),{cam:s,center:n,r}}let Ti=null;async function Gr(i,t="dark",e=640,n=520,r=96){const s=await Iu(i,r);Ti||(Ti=new Cu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ti.setPixelRatio(1)),Ti.setSize(e,n,!1),Ti.setClearColor(0,0);const a=Uu(s,t),{cam:o}=Nu(s,e/n);return Ti.render(a,o),Ti.domElement.toDataURL("image/png")}async function hv(i,t,e="dark"){const n=await Iu(t,96),r=new Cu({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),i.innerHTML="",i.appendChild(r.domElement);const s=Uu(n,e);let{cam:a,center:o,r:l}=Nu(n,1);const u=new $0(a,r.domElement);u.target.copy(o),u.enableDamping=!0,u.update();let d=0;const f=()=>{r.render(s,a)},c=()=>{const x=i.clientWidth||300,h=i.clientHeight||240;r.setSize(x,h,!1);const g=x/h;a.left=-l*g,a.right=l*g,a.top=l,a.bottom=-l,a.updateProjectionMatrix(),f()},m=()=>{d=requestAnimationFrame(m),u.update()&&f()};u.addEventListener("change",f);const v=new ResizeObserver(c);return v.observe(i),c(),m(),()=>{cancelAnimationFrame(d),v.disconnect(),u.dispose(),r.dispose(),i.innerHTML=""}}const dv="undodiligence";{window.goatcounter={no_onload:!0};const i=document.createElement("script");i.async=!0,i.src="https://gc.zgo.at/count.js",i.dataset.goatcounter=`https://${dv}.goatcounter.com/count`,i.onload=()=>Fu(),document.head.appendChild(i)}function Fu(){try{window.goatcounter?.count?.({path:location.pathname+(location.hash||"#/").replace(/^#\/d\/.*/,"#/d")})}catch{}}const fl=7,fv=document.getElementById("app"),pv=document.getElementById("print-root"),ke=pi();let to=[];const bn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ii=()=>document.documentElement.dataset.theme||"dark",pl=i=>En.drills.find(t=>t.id===i),ml=i=>pl(i)?.spec||Ws(i),Oc=i=>{const t=Math.abs(i)<.005?0:i;return`${t>0?"+":""}${t.toFixed(2)}%`},kc=i=>i>=1e3?i.toFixed(1):i.toFixed(2),Hs=i=>{const t=Math.floor(i/1e3);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},qr=i=>`<span class="pill ${i}">${i[0].toUpperCase()+i.slice(1)}</span>`;function eo(i){const t=Xs(i);return t==="solved"?'<span class="pill solved">✓ Solved</span>':t==="tried"?'<span class="pill tried">Tried</span>':'<span class="pill new">New</span>'}const Wr={sun:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',moon:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/></svg>',close:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',back:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',mark:'<svg width="18" height="18" viewBox="0 0 32 32"><path d="M11 9 5.5 14.5 11 20" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 14.5H19a7 7 0 0 1 0 14h-5" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round"/></svg>'},ra=new Map;let Bc=Promise.resolve();function Ou(i,t){const e=i.id+Ii();if(ra.has(e)){t.src=ra.get(e);return}Bc=Bc.then(async()=>{if(document.body.contains(t))try{const n=await Gr(i,Ii(),520,360,64);ra.set(e,n),t.src=n}catch(n){console.warn("thumb failed",n)}})}function Sr(i,t){const n=[["#/","Drill pack","home"],["#/generate","Generator","generate"],["#/progress","Progress","progress"],["#/print","Print pack","print"]].map(([r,s,a])=>`<a href="${r}" class="${i===a?"on":""}">${s}</a>`).join("");fv.innerHTML=`
  <header class="topbar">
    <a class="brand" href="#/"><span class="brand-mark">${Wr.mark}</span>Undo Diligence <small>Beta</small></a>
    <nav class="nav">${n}</nav>
    <div class="top-right">
      <button class="icon-btn" id="themeBtn" title="Toggle light / dark" aria-label="Toggle light or dark theme">${Ii()==="dark"?Wr.sun:Wr.moon}</button>
      <button class="btn gold-outline sm" data-upgrade="topbar">Founding member<span class="long">&nbsp;· $${fl}/mo</span></button>
    </div>
  </header>
  <nav class="mobile-nav">${n}</nav>
  <main class="page">${t}</main>
  <footer class="footer">
    <span>Local prototype · nothing you type leaves this browser</span>
    <a href="#/stats">Test dashboard</a>
    <span>Works with FreeCAD, Onshape, Fusion, SOLIDWORKS: mass is the same in every CAD program.</span>
  </footer>`,document.getElementById("themeBtn").onclick=()=>{const r=Ii()==="dark"?"light":"dark";document.documentElement.dataset.theme=r,ke.theme=r,yr(),ao()}}document.addEventListener("click",i=>{const t=i.target.closest("[data-upgrade]");t&&(i.preventDefault(),Mv(t.dataset.upgrade))});function mv(){const i=En.drills.filter(n=>Xs(n.id)==="solved").length,t=En.drills.find(n=>Xs(n.id)!=="solved")||En.drills[0],e=["easy","medium","hard"].map(n=>{const r=En.drills.filter(o=>o.spec.difficulty===n),s=r.map(o=>`
      <a class="card" href="#/d/${o.id}">
        <div class="thumb"><img alt="" data-thumb="${o.id}"/></div>
        <div class="card-body">
          <div class="card-top"><span class="num">#${String(o.pack).padStart(2,"0")}</span>${eo(o.id)}</div>
          <div class="card-title">${bn(o.label)}</div>
          <div class="meta">${bn(o.spec.title)} · ${o.id}</div>
        </div>
      </a>`).join(""),a={easy:"Extrudes and holes. Start here.",medium:"Counterbores, slots, pockets, fillets, steps.",hard:"Several features, half-millimetre sizes, chamfers."}[n];return`<div class="section-head">${qr(n)}<h2>${r.length} ${n} drills</h2><p>${a}</p></div><div class="grid">${s}</div>`}).join("");Sr("home",`
    <section class="hero">
      <div>
        <div class="eyebrow">Practice drills for CAD</div>
        <h1>Model it from the drawing.<br/>Check it by the gram.</h1>
        <p class="lead">Every drill is a dimensioned engineering drawing. Model the part in your CAD program, read off its mass, and get an instant check with a hint if you're off.</p>
        <div class="row">
          <a class="btn primary" href="#/d/${t.id}">${i?"Continue":"Start"} with #${String(t.pack).padStart(2,"0")}</a>
          <a class="btn" href="#/generate">Generate a new drill</a>
        </div>
        <div class="cad-chips"><span class="chip">FreeCAD</span><span class="chip">Onshape</span><span class="chip">Fusion</span><span class="chip">SOLIDWORKS</span><span class="chip">any CAD with mass properties</span></div>
      </div>
      <div class="hero-card"><img alt="Isometric view of drill #01" data-thumb="${En.drills[0].id}"/></div>
    </section>
    <section class="stats">
      <div class="stat"><b>${i}/20</b><span>pack drills solved</span></div>
      <div class="stat"><b>${Kc()}</b><span>day streak</span></div>
      <div class="stat"><b>${Object.keys(ke.solved).length}</b><span>drills solved in total</span></div>
      <div class="stat"><b>±${Qa*100}%</b><span>grading tolerance</span></div>
    </section>
    ${e}
    <section class="section-head" style="margin-top:34px"><h2>New drill packs by email</h2></section>
    <div class="panel pad upsell" style="max-width:720px">
      <p class="small" style="margin:0 0 12px">Get a fresh printable pack of drills now and then. (Prototype: your email is saved only in this browser and is not sent anywhere.)</p>
      ${ku("home")}
    </div>`),document.querySelectorAll("img[data-thumb]").forEach(n=>Ou(ml(n.dataset.thumb),n)),Bu()}function ku(i){return`<form class="row waitlist" data-source="${i}" novalidate>
      <input class="input" type="email" name="email" placeholder="you@example.com" autocomplete="email" style="flex:1;min-width:200px" aria-label="Email address"/>
      <button class="btn primary" type="submit">Join the list</button>
    </form><div class="small waitlist-msg" style="margin-top:8px"></div>`}function Bu(){document.querySelectorAll("form.waitlist").forEach(i=>{i.onsubmit=t=>{t.preventDefault();const e=i.email.value.trim(),n=i.parentElement.querySelector(".waitlist-msg");if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)){n.textContent="Please enter a valid email address.";return}Ld(e,i.dataset.source),hn("waitlist_submit",{source:i.dataset.source}),i.reset();{n.textContent="Saved locally. In the live test this would go to the waitlist tool.";return}}})}function gv(i){let t;try{t=ml(i)}catch{return _v(i)}const e=pl(i),n=e?e.pack-1:-1,r=n>0?En.drills[n-1]:null,s=n>=0&&n<19?En.drills[n+1]:null,a=Xi(ke.material);hn("view_drill",{id:i});const o=e?`#${String(e.pack).padStart(2,"0")} · ${bn(e.label)}`:`Generated drill · ${bn(t.title)}`;Sr(e?"home":"generate",`
    <div class="drill-head">
      <a class="back" href="${e?"#/":"#/generate"}">${Wr.back}${e?"Drill pack":"Generator"}</a>
    </div>
    <div class="drill-head">
      <h1>${o}</h1>${qr(t.difficulty)}<span id="statusPill">${eo(i)}</span>
      <span class="meta">${bn(Za[t.family])} · code <span class="kbd">${t.id}</span></span>
      <span class="ml-auto row">
        ${r?`<a class="btn sm" href="#/d/${r.id}">← #${String(r.pack).padStart(2,"0")}</a>`:""}
        ${s?`<a class="btn sm" href="#/d/${s.id}">#${String(s.pack).padStart(2,"0")} →</a>`:""}
      </span>
    </div>
    <div class="drill-layout">
      <section class="panel sheet-panel">
        <div class="toolbar">
          <button class="btn sm" id="zOut" aria-label="Zoom out">−</button>
          <span class="zoom-label" id="zLbl">100%</span>
          <button class="btn sm" id="zIn" aria-label="Zoom in">+</button>
          <button class="btn sm ghost" id="zFit">Fit</button>
          <span class="sep"></span>
          <button class="btn sm" id="pngBtn">Download PNG</button>
          <button class="btn sm" id="printBtn">Print / PDF</button>
          <span class="meta ml-auto">Third-angle projection · mm</span>
        </div>
        <div class="zoom-hint">Tip: tap + to zoom in, then scroll the drawing.</div>
        <div class="sheet-scroll" id="sheetScroll"><div class="sheet-wrap" id="sheetWrap"></div></div>
      </section>
      <aside class="side">
        <div class="panel">
          <span class="label">Your answer</span>
          <div class="field">
            <select id="matSel" aria-label="Material">${la.map(L=>`<option value="${L.id}" ${L.id===a.id?"selected":""}>${L.label} · ${L.density} g/cm³</option>`).join("")}</select>
          </div>
          <div class="field">
            <div class="input-wrap"><input class="input" id="massIn" inputmode="decimal" autocomplete="off" placeholder="Mass" aria-label="Mass in grams"/><span class="unit">g</span></div>
          </div>
          <button class="btn primary" id="checkBtn" style="width:100%">Check mass</button>
          <div class="result" id="result" role="status" aria-live="polite"></div>
          <ul class="attempts" id="attempts"></ul>
          <div class="row" style="margin-top:12px;justify-content:space-between">
            <span class="small">Graded within ±${Qa*100}%</span>
            <button class="btn sm ghost" id="revealBtn">Reveal answer</button>
          </div>
        </div>
        <div class="panel">
          <span class="label">Speed timer</span>
          <div class="timer"><b id="tVal">00:00</b><span class="ml-auto row"><button class="btn sm" id="tGo">Start</button><button class="btn sm ghost" id="tReset">Reset</button></span></div>
          <p class="small" id="bestTime" style="margin:8px 0 0"></p>
        </div>
        <div class="panel">
          <details id="peek"><summary>Peek at the 3D part <span class="small">reference</span></summary><div class="viewer" id="viewer">Loading 3D…</div><p class="small" style="margin:8px 0 0">Drag to orbit, scroll to zoom. Try modelling from the drawing first.</p></details>
        </div>
        <div class="panel upsell">
          <h3>Unlimited drills, every day</h3>
          <p class="small" style="margin:6px 0 12px">Founding members get endless generated drills, timed runs and printable packs. Planned price $${fl}/mo.</p>
          <button class="btn gold-outline" data-upgrade="drill-panel" style="width:100%">Become a founding member</button>
        </div>
      </aside>
    </div>`);const l=document.getElementById("sheetWrap");let u=1,d=null;const f=()=>{const L=Xi(ke.material);l.innerHTML=Hr(t,{theme:Ii()==="dark"?"dark":"light",material:L,isoHref:d}).svg},c=()=>{l.style.width=`${u*100}%`,document.getElementById("zLbl").textContent=`${Math.round(u*100)}%`};f(),c(),Gr(t,Ii(),760,620).then(L=>{d=L,f()}).catch(L=>console.warn(L)),document.getElementById("zIn").onclick=()=>{u=Math.min(4,u*1.25),c()},document.getElementById("zOut").onclick=()=>{u=Math.max(1,u/1.25),c()},document.getElementById("zFit").onclick=()=>{u=1,c()};const m=document.getElementById("matSel");m.onchange=()=>{ke.material=m.value,yr(),f(),g()};const v=document.getElementById("massIn"),x=document.getElementById("result"),h=(L,C)=>{x.className=`result show ${L}`,x.innerHTML=C},g=()=>{const L=(ke.attempts[i]||[]).slice(-5).reverse();document.getElementById("attempts").innerHTML=L.map(C=>`<li><span>${C.correct?"✓":"✗"} ${bn(C.value)} g</span><span>${C.density} g/cm³ · ${new Date(C.t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></li>`).join("")};g();const T=()=>{const L=v.value.trim().replace(",","."),C=Xi(ke.material),N=wd(t,L,C.density);if(N.errorPct==null){h("info",bn(N.hint));return}const rt=M.running||M.acc?M.value():null;Pd(i,Number(L),C.density,N.correct,N.correct?rt:null),hn("check",{id:i,correct:N.correct}),N.correct?(hn("solve",{id:i}),M.stop(),h("ok",`<strong>Correct!</strong> ${kc(N.expected)} g (${Oc(N.errorPct)}).${rt?` Time ${Hs(rt)}.`:""}${s?` <a href="#/d/${s.id}" style="text-decoration:underline">Next drill →</a>`:""}`),document.getElementById("statusPill").innerHTML=eo(i),w()):h("bad",`<strong>Not quite</strong> (${Oc(N.errorPct)}).<br/>${bn(N.hint)}`),g()};document.getElementById("checkBtn").onclick=T,v.onkeydown=L=>{L.key==="Enter"&&T()},document.getElementById("revealBtn").onclick=()=>{if((ke.attempts[i]||[]).length<2&&!confirm("Reveal the answer? Try at least twice first - the hints get specific."))return;const C=Xi(ke.material),N=Hc(t);hn("reveal",{id:i}),h("info",`Answer: <strong>${kc(Vs(N,C.density))} g</strong> in ${bn(C.label)}.<br/>Volume ${(N/1e3).toFixed(3)} cm³ (${N.toFixed(1)} mm³).`)};const M={running:!1,start:0,acc:0,raf:0,value(){return this.acc+(this.running?Date.now()-this.start:0)},tick(){document.getElementById("tVal").textContent=Hs(this.value()),this.running&&(this.raf=setTimeout(()=>this.tick(),250))},go(){if(this.running)return this.stop();this.running=!0,this.start=Date.now(),document.getElementById("tGo").textContent="Pause",this.tick()},stop(){this.running&&(this.acc+=Date.now()-this.start,this.running=!1,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick())},reset(){this.running=!1,this.acc=0,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick()}};document.getElementById("tGo").onclick=()=>M.go(),document.getElementById("tReset").onclick=()=>M.reset();const w=()=>{const L=ke.solved[i];document.getElementById("bestTime").textContent=L?`Solved${L.timeMs?` · best time ${Hs(L.timeMs)}`:""} · ${L.attempts} attempt${L.attempts>1?"s":""}`:"Start the timer, model the part, then check your mass."};w(),to.push(()=>clearTimeout(M.raf));let O=null;document.getElementById("peek").addEventListener("toggle",async L=>{L.target.open&&!O&&(hn("peek_3d",{id:i}),O=await hv(document.getElementById("viewer"),t,Ii()))}),to.push(()=>O&&O()),document.getElementById("pngBtn").onclick=async()=>{hn("export_png",{id:i});const L=await Gr(t,"light",760,620),C=Hr(t,{theme:"print",material:Xi(ke.material),isoHref:L,width:3508,height:2480}).svg,N=new Image,rt=URL.createObjectURL(new Blob([C],{type:"image/svg+xml"}));N.onload=()=>{const y=document.createElement("canvas");y.width=3508,y.height=2480;const b=y.getContext("2d");b.fillStyle="#fff",b.fillRect(0,0,y.width,y.height),b.drawImage(N,0,0,y.width,y.height),URL.revokeObjectURL(rt),y.toBlob(W=>{const Y=document.createElement("a");Y.href=URL.createObjectURL(W),Y.download=`cad-drill-${t.id}.png`,Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),2e3)},"image/png")},N.src=rt},document.getElementById("printBtn").onclick=async()=>{hn("print",{id:i});const L=await Gr(t,"light",760,620);pv.innerHTML=`<div class="print-page">${Hr(t,{theme:"print",material:Xi(ke.material),isoHref:L}).svg}</div>`,document.body.classList.add("printing-one");const C=()=>{document.body.classList.remove("printing-one"),window.removeEventListener("afterprint",C)};window.addEventListener("afterprint",C),setTimeout(()=>window.print(),50)}}function _v(i){Sr("",`<div class="panel pad"><h2>No drill called “${bn(i)}”</h2><p class="small">Drill codes look like E-12, M-450 or H-9001.</p><a class="btn" href="#/generate">Open the generator</a></div>`)}function vv(){const i={diff:sessionStorage.getItem("gen.diff")||"medium",family:sessionStorage.getItem("gen.family")||"any"},t=[["any","Any shape"],...Object.entries(Za)].map(([u,d])=>`<option value="${u}" ${i.family===u?"selected":""}>${d}</option>`).join("");Sr("generate",`
    <div class="section-head" style="margin-top:0"><h2>Drill generator</h2><p>Every code makes the same part on every device, so you can share a code with a friend or a class.</p></div>
    <div class="two-col">
      <div class="panel pad">
        <span class="label">Difficulty</span>
        <div class="seg" id="diffSeg">${["easy","medium","hard"].map(u=>`<button data-d="${u}" class="${i.diff===u?"on":""}">${u[0].toUpperCase()+u.slice(1)}</button>`).join("")}</div>
        <div class="field" style="margin-top:16px"><span class="label">Shape</span><select id="famSel">${t}</select></div>
        <div class="field"><span class="label">Seed (optional)</span><input class="input" id="seedIn" inputmode="numeric" placeholder="random"/></div>
        <div class="row"><button class="btn primary" id="genBtn">Generate drill</button><button class="btn" id="luckyBtn">Surprise me</button></div>
        <div class="field" style="margin-top:22px"><span class="label">Open a code</span>
          <div class="row"><input class="input" id="codeIn" placeholder="e.g. M-1042" style="flex:1"/><button class="btn" id="codeBtn">Open</button></div>
        </div>
        <div class="small" id="genMsg"></div>
      </div>
      <div class="panel pad">
        <span class="label">Recently generated</span>
        <div id="recent" class="grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))"></div>
        <div class="notice" style="margin-top:14px">Free accounts get the 20-drill pack. Unlimited generation is the planned founding-member feature; in this prototype everything is open.</div>
      </div>
    </div>`);const e=document.getElementById("diffSeg");e.onclick=u=>{const d=u.target.closest("button");d&&(i.diff=d.dataset.d,sessionStorage.setItem("gen.diff",i.diff),e.querySelectorAll("button").forEach(f=>f.classList.toggle("on",f===d)))};const n=document.getElementById("famSel");n.onchange=()=>{i.family=n.value,sessionStorage.setItem("gen.family",i.family)};const r=u=>{const d=nd(i.diff,u,i.family),f=JSON.parse(sessionStorage.getItem("gen.recent")||"[]").filter(c=>c!==d.id);f.unshift(d.id),sessionStorage.setItem("gen.recent",JSON.stringify(f.slice(0,6))),hn("generate",{id:d.id}),location.hash=`#/d/${d.id}`},s=()=>1+Math.floor(Math.random()*999999);document.getElementById("genBtn").onclick=()=>{const u=document.getElementById("seedIn").value.trim();r(u&&/^\d{1,9}$/.test(u)?Number(u):s())},document.getElementById("luckyBtn").onclick=()=>{i.diff=["easy","medium","hard"][Math.floor(Math.random()*3)],i.family="any",r(s())};const a=()=>{const u=document.getElementById("codeIn").value.trim().toUpperCase();if(!Wc(u)){document.getElementById("genMsg").textContent="Codes look like E-12, M-450 or H-9001.";return}location.hash=`#/d/${u}`};document.getElementById("codeBtn").onclick=a,document.getElementById("codeIn").onkeydown=u=>{u.key==="Enter"&&a()};const o=JSON.parse(sessionStorage.getItem("gen.recent")||"[]"),l=document.getElementById("recent");l.innerHTML=o.length?o.map(u=>{const d=Ws(u);return`<a class="card" href="#/d/${u}"><div class="thumb"><img alt="" data-thumb="${u}"/></div><div class="card-body"><div class="card-top">${qr(d.difficulty)}${eo(u)}</div><div class="meta">${bn(d.title)} · ${u}</div></div></a>`}).join(""):'<div class="empty">Nothing yet. Generate your first drill.</div>',l.querySelectorAll("img[data-thumb]").forEach(u=>Ou(Ws(u.dataset.thumb),u))}function xv(){const i={easy:[0,0],medium:[0,0],hard:[0,0]};for(const s of En.drills)i[s.spec.difficulty][1]++,Xs(s.id)==="solved"&&i[s.spec.difficulty][0]++;const e=[...new Set([...Object.keys(ke.attempts)])].map(s=>{let a;try{a=ml(s)}catch{return""}const o=ke.attempts[s]||[],l=ke.solved[s],u=pl(s);return`<tr><td><a href="#/d/${s}" style="text-decoration:underline">${u?"#"+String(u.pack).padStart(2,"0")+" · ":""}${s}</a></td><td>${qr(a.difficulty)}</td><td>${o.length}</td><td>${l?'<span class="pill solved">✓ Solved</span>':'<span class="pill tried">Open</span>'}</td><td>${l&&l.timeMs?Hs(l.timeMs):"–"}</td></tr>`}).join(""),n=Object.values(ke.solved).filter(s=>s.attempts===1).length,r=Object.values(ke.attempts).reduce((s,a)=>s+a.length,0);Sr("progress",`
    <div class="section-head" style="margin-top:0"><h2>Your progress</h2><p>Stored in this browser only.</p></div>
    <section class="stats">
      <div class="stat"><b>${Object.keys(ke.solved).length}</b><span>drills solved</span></div>
      <div class="stat"><b>${Kc()}</b><span>day streak</span></div>
      <div class="stat"><b>${n}</b><span>first-try solves</span></div>
      <div class="stat"><b>${r}</b><span>answers checked</span></div>
    </section>
    <div class="two-col">
      <div class="panel pad">
        <span class="label">Drill pack</span>
        ${Object.entries(i).map(([s,[a,o]])=>`<div style="margin:12px 0"><div class="row" style="justify-content:space-between;margin-bottom:6px">${qr(s)}<span class="small">${a} / ${o}</span></div><div class="bar"><i style="width:${a/o*100}%"></i></div></div>`).join("")}
      </div>
      <div class="panel pad">
        <span class="label">Data</span>
        <p class="small">Progress, attempts and settings live in this browser's local storage. Clearing site data removes them.</p>
        <button class="btn" id="resetBtn">Reset progress</button>
      </div>
    </div>
    <div class="section-head"><h2>Attempted drills</h2></div>
    <div class="panel table-scroll">${e?`<table><thead><tr><th>Drill</th><th>Level</th><th>Checks</th><th>Status</th><th>Best time</th></tr></thead><tbody>${e}</tbody></table>`:'<div class="empty">No attempts yet. <a href="#/" style="text-decoration:underline">Pick a drill</a>.</div>'}</div>`),document.getElementById("resetBtn").onclick=()=>{confirm("Erase all local progress, attempts and test data?")&&(Cd(),Object.assign(ke,pi()),ao())}}function yv(){/[?&]pdf=1/.test(location.search)&&document.body.classList.add("printing-pack"),Sr("print",`
    <div class="no-print">
      <div class="section-head" style="margin-top:0"><h2>Printable drill pack</h2><p>All 20 drills as A4 landscape sheets: the free PDF for the video description.</p></div>
      <div class="row" style="margin-bottom:16px">
        <button class="btn primary" id="printAll">Print / Save as PDF</button>
        <span class="small">Use “Save as PDF”, A4 landscape, margins none. Answers are not printed: people check them here.</span>
      </div>
    </div>
    <div class="print-pages" id="pages">${En.drills.map(i=>`<div class="print-page" data-id="${i.id}">${Hr(i.spec,{theme:"print"}).svg}</div>`).join("")}</div>`),(async()=>{for(const i of En.drills){const t=document.querySelector(`.print-page[data-id="${i.id}"]`);if(!t)return;try{const e=await Gr(i.spec,"light",760,620);t.innerHTML=Hr(i.spec,{theme:"print",isoHref:e}).svg}catch(e){console.warn(e)}}document.body.dataset.packReady="1"})(),document.getElementById("printAll").onclick=()=>{hn("print_pack"),document.body.classList.add("printing-pack");const i=()=>{document.body.classList.remove("printing-pack"),window.removeEventListener("afterprint",i)};window.addEventListener("afterprint",i),window.print()}}function Mv(i){hn("upgrade_open",{source:i});const t=document.createElement("div");t.className="overlay",t.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="fmTitle">
      <button class="icon-btn close" aria-label="Close">${Wr.close}</button>
      <div class="eyebrow">Founding members</div>
      <h2 id="fmTitle">Unlimited CAD drills</h2>
      <div class="price">$${fl}<small> / month, locked in for founding members</small></div>
      <ul class="ticks">
        <li>A fresh generated drill every day, at the level you choose, plus endless practice</li>
        <li>Timed speed runs and streaks</li>
        <li>Printable PDF packs for classes and clubs</li>
        <li>Works with FreeCAD, Onshape, Fusion and SOLIDWORKS</li>
      </ul>
      <div id="fmBody">
        <button class="btn primary" id="fmYes" style="width:100%;height:46px">I'd join as a founding member</button>
        <p class="small" style="margin:10px 0 0;text-align:center">Not open yet. Clicking charges nothing and asks for no card: it tells us whether to build it.</p>
      </div>
    </div>`,document.body.appendChild(t);const e=()=>{t.remove(),document.removeEventListener("keydown",n)},n=r=>{r.key==="Escape"&&e()};document.addEventListener("keydown",n),t.addEventListener("mousedown",r=>{r.target===t&&e()}),t.querySelector(".close").onclick=e,t.querySelector("#fmYes").onclick=()=>{hn("upgrade_click",{source:i}),t.querySelector("#fmBody").innerHTML=`
      <div class="result show info" style="margin:0 0 12px"><strong>Thanks, that's counted.</strong> Nothing was charged. Leave your email and you'll hear first when founding spots open.</div>
      ${ku("founding-"+i)}`,Bu()}}function ao(){to.forEach(e=>{try{e()}catch{}}),to=[],document.querySelectorAll(".overlay").forEach(e=>e.remove());const i=location.hash||"#/",t=/^#\/d\/([A-Za-z]-\d+)$/.exec(i);t?gv(t[1].toUpperCase()):i==="#/generate"?vv():i==="#/progress"?xv():i==="#/print"?yv():mv(),window.scrollTo(0,0)}window.addEventListener("hashchange",()=>{ao(),Fu()});ao();
