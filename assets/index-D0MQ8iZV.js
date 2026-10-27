(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const nd=[{pack:1,label:"L-bracket, 2 base holes + 1 leg hole",id:"E-2",spec:{body:{type:"prism",W:45,segs:[{x0:0,x1:8,h:45},{x0:8,x1:65,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:10,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:35,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:22.5,z:20,d:5,x0:0,x1:8,group:2}],id:"E-2",seed:2,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:36110.531025,csg_volume_mm3:36110.531026,csg_rel_diff:128e-13,mass_g:{al6061:97.498,steel:283.468}},{pack:2,label:"Plate, 4-hole pattern",id:"E-3",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:120,h:12}],corner:null,fillets:[]},features:[{kind:"zhole",x:50,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:50,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1}],id:"E-3",seed:3,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:56242.831974,csg_volume_mm3:56242.831975,csg_rel_diff:182e-13,mass_g:{al6061:151.856,steel:441.506}},{pack:3,label:"Plate, rounded corners + centre hole",id:"E-60",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:85,h:8}],corner:{kind:"round",size:5},fillets:[]},features:[{kind:"zhole",x:15,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:15,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:42.5,y:20,d:15,top:8,depth:8,thru:!0,cb:null,group:2}],id:"E-60",seed:60,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:23101.327714,csg_volume_mm3:23101.327716,csg_rel_diff:109e-12,mass_g:{al6061:62.374,steel:181.345}},{pack:4,label:"Flange, bolt circle",id:"E-4",spec:{body:{type:"flange",R:45,t:6,chamfer:0,hubR:0,hubH:0,boreD:30},features:[{kind:"bolts",n:6,bc:70,d:10,top:6,cb:null,startDeg:0,group:1}],id:"E-4",seed:4,difficulty:"easy",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:31101.767271,csg_volume_mm3:31101.767247,csg_rel_diff:756e-12,mass_g:{al6061:83.975,steel:244.149}},{pack:5,label:"L-bracket, 4 holes",id:"E-5",spec:{body:{type:"prism",W:75,segs:[{x0:0,x1:10,h:85},{x0:10,x1:80,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:25,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:50,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:15,z:40,d:8,x0:0,x1:10,group:2},{kind:"xhole",y:60,z:40,d:8,x0:0,x1:10,group:2}],id:"E-5",seed:5,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:103940.442632,csg_volume_mm3:103940.442633,csg_rel_diff:132e-13,mass_g:{al6061:280.639,steel:815.932}},{pack:6,label:"Plate with counterbores",id:"M-1",spec:{body:{type:"prism",W:46,segs:[{x0:0,x1:74,h:16}],corner:{kind:"chamfer",size:8},fillets:[]},features:[{kind:"zhole",x:17,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:17,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:42,y:13,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:42,y:33,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:32,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3},{kind:"zhole",x:42,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3}],id:"M-1",seed:1,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:43896.000723,csg_volume_mm3:43896.00073,csg_rel_diff:147e-12,mass_g:{al6061:118.519,steel:344.584}},{pack:7,label:"Plate with slot and pocket",id:"M-11",spec:{body:{type:"prism",W:42,segs:[{x0:0,x1:94,h:14}],corner:{kind:"chamfer",size:6},fillets:[]},features:[{kind:"pocket",x0:40,x1:76,y0:17,y1:38,r:3,top:14,depth:4,group:1},{kind:"zhole",x:29,y:12,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"zhole",x:29,y:30,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"slot",x:14,y:22,w:10,len:17,dir:"y",top:14,depth:14,thru:!0,group:3}],id:"M-11",seed:11,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:46024.619841,csg_volume_mm3:46024.619844,csg_rel_diff:719e-13,mass_g:{al6061:124.266,steel:361.293}},{pack:8,label:"L-bracket with inside fillet",id:"M-21",spec:{body:{type:"prism",W:68,segs:[{x0:0,x1:12,h:68},{x0:12,x1:92,h:12}],corner:null,fillets:[{xb:12,z:12,r:3,dir:1}]},features:[{kind:"zhole",x:30,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:30,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"xhole",y:34,z:51,d:4,x0:0,x1:12,group:2}],id:"M-21",seed:21,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:118335.796719,csg_volume_mm3:118335.796721,csg_rel_diff:193e-13,mass_g:{al6061:319.507,steel:928.936}},{pack:9,label:"L-bracket with counterbores",id:"M-2",spec:{body:{type:"prism",W:34,segs:[{x0:0,x1:9,h:40},{x0:9,x1:70,h:9}],corner:null,fillets:[]},features:[{kind:"zhole",x:17,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:17,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"xhole",y:9,z:27,d:8,x0:0,x1:9,group:2},{kind:"xhole",y:25,z:27,d:8,x0:0,x1:9,group:2}],id:"M-2",seed:2,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:28916.586452,csg_volume_mm3:28916.586454,csg_rel_diff:52e-12,mass_g:{al6061:78.075,steel:226.995}},{pack:10,label:"Two-step block with side hole",id:"M-3",spec:{body:{type:"prism",W:64,segs:[{x0:0,x1:66,h:40},{x0:66,x1:94,h:12}],corner:null,fillets:[{xb:66,z:12,r:4,dir:1}],shape:"step2"},features:[{kind:"zhole",x:82,y:17,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:82,y:47,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:19,y:20,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"zhole",x:19,y:44,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"yhole",x:45,z:20,d:4,group:3}],id:"M-3",seed:3,difficulty:"medium",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:178525.788711,csg_volume_mm3:178525.788721,csg_rel_diff:551e-13,mass_g:{al6061:482.02,steel:1401.427}},{pack:11,label:"Tee block",id:"M-12",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:39,h:16},{x0:39,x1:85,h:31},{x0:85,x1:140,h:19}],corner:null,fillets:[],shape:"tee"},features:[{kind:"zhole",x:25,y:7,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:25,y:25,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:103,y:7,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2},{kind:"zhole",x:103,y:25,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2}],id:"M-12",seed:12,difficulty:"medium",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:96701.084269,csg_volume_mm3:96701.084271,csg_rel_diff:183e-13,mass_g:{al6061:261.093,steel:759.104}},{pack:12,label:"Flange with hub",id:"M-8",spec:{body:{type:"flange",R:60,t:11,chamfer:0,hubR:18,hubH:12,boreD:23},features:[{kind:"bolts",n:6,bc:66,d:12,top:11,cb:null,startDeg:0,group:1}],id:"M-8",seed:8,difficulty:"medium",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:119601.21772,csg_volume_mm3:119601.21763,csg_rel_diff:756e-12,mass_g:{al6061:322.923,steel:938.87}},{pack:13,label:"Channel block",id:"M-30",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:46,h:41},{x0:46,x1:74,h:15},{x0:74,x1:106,h:50}],corner:null,fillets:[],shape:"u"},features:[{kind:"zhole",x:87,y:9,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:87,y:23,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:33,y:9,d:9,top:41,depth:41,thru:!0,cb:null,group:2},{kind:"zhole",x:33,y:23,d:9,top:41,depth:41,thru:!0,cb:null,group:2}],id:"M-30",seed:30,difficulty:"medium",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:117547.996207,csg_volume_mm3:117547.996213,csg_rel_diff:479e-13,mass_g:{al6061:317.38,steel:922.752}},{pack:14,label:"Plate: chamfers, slot, pocket, blind holes",id:"H-2",spec:{body:{type:"prism",W:86,segs:[{x0:0,x1:99,h:15.5}],corner:{kind:"chamfer",size:2.5},fillets:[]},features:[{kind:"slot",x:39.5,y:60.5,w:9,len:29.5,dir:"x",top:15.5,depth:15.5,thru:!0,group:1},{kind:"pocket",x0:66,x1:83,y0:41,y1:60.5,r:5.5,top:15.5,depth:11.5,group:2},{kind:"zhole",x:9.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:9.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:16.5,y:34.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4},{kind:"zhole",x:16.5,y:51.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4}],id:"H-2",seed:2,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:114493.829559,csg_volume_mm3:114493.829568,csg_rel_diff:792e-13,mass_g:{al6061:309.133,steel:898.777}},{pack:15,label:"Three-step block, fillets + side hole",id:"H-56",spec:{body:{type:"prism",W:43,segs:[{x0:0,x1:21,h:49.5},{x0:21,x1:57,h:21.5},{x0:57,x1:88,h:13.5}],corner:null,fillets:[{xb:21,z:21.5,r:5,dir:1},{xb:57,z:13.5,r:5,dir:1}],shape:"step3"},features:[{kind:"zhole",x:75,y:13,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"zhole",x:75,y:30,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"pocket",x0:35,x1:52.5,y0:3.5,y1:26.5,r:3.5,top:21.5,depth:18,group:2},{kind:"slot",x:10,y:34.5,w:8,len:14,dir:"x",top:49.5,depth:36,thru:!1,group:3},{kind:"yhole",x:8,z:6.5,d:3.5,group:4}],id:"H-56",seed:56,difficulty:"hard",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:84129.19851,csg_volume_mm3:84129.198515,csg_rel_diff:524e-13,mass_g:{al6061:227.149,steel:660.414}},{pack:16,label:"Channel block with cross hole",id:"H-45",spec:{body:{type:"prism",W:58,segs:[{x0:0,x1:31,h:45},{x0:31,x1:59,h:15},{x0:59,x1:80,h:27.5}],corner:null,fillets:[{xb:31,z:15,r:2.5,dir:1},{xb:59,z:15,r:2.5,dir:-1}],shape:"u"},features:[{kind:"zhole",x:45.5,y:37.5,d:13.5,top:15,depth:4.5,thru:!1,cb:null,group:1},{kind:"zhole",x:21,y:10,d:4.5,top:45,depth:45,thru:!0,cb:{d:8,depth:3},group:2},{kind:"zhole",x:69,y:14.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"zhole",x:69,y:43.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"xhole",y:29,z:38,d:4.5,x0:0,x1:31,group:4}],id:"H-45",seed:45,difficulty:"hard",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:133465.701562,csg_volume_mm3:133465.701567,csg_rel_diff:347e-13,mass_g:{al6061:360.357,steel:1047.706}},{pack:17,label:"L-bracket: fillet + slot",id:"H-6",spec:{body:{type:"prism",W:63,segs:[{x0:0,x1:11.5,h:42},{x0:11.5,x1:85,h:10.5}],corner:null,fillets:[{xb:11.5,z:10.5,r:4.5,dir:1}]},features:[{kind:"slot",x:42,y:19,w:5,len:29,dir:"x",top:10.5,depth:5,thru:!1,group:1},{kind:"xhole",y:20.5,z:25.5,d:11,x0:0,x1:11.5,group:2},{kind:"xhole",y:42.5,z:25.5,d:11,x0:0,x1:11.5,group:2}],id:"H-6",seed:6,difficulty:"hard",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:76439.090434,csg_volume_mm3:76439.090437,csg_rel_diff:354e-13,mass_g:{al6061:206.386,steel:600.047}},{pack:18,label:"Flange: hub, chamfer, counterbores",id:"H-18",spec:{body:{type:"flange",R:52,t:10,chamfer:1,hubR:26.5,hubH:13,boreD:31.5},features:[{kind:"bolts",n:3,bc:74,d:9,top:10,cb:{d:15,depth:3},startDeg:0,group:1}],id:"H-18",seed:18,difficulty:"hard",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:92616.180373,csg_volume_mm3:92616.180303,csg_rel_diff:756e-12,mass_g:{al6061:250.064,steel:727.037}},{pack:19,label:"Tee block with pocket",id:"H-22",spec:{body:{type:"prism",W:37,segs:[{x0:0,x1:56,h:23},{x0:56,x1:78,h:44.5},{x0:78,x1:131,h:28}],corner:null,fillets:[{xb:56,z:23,r:5.5,dir:-1},{xb:78,z:28,r:5.5,dir:1}],shape:"tee"},features:[{kind:"zhole",x:98.5,y:21,d:9,top:28,depth:28,thru:!0,cb:{d:15,depth:7},group:1},{kind:"slot",x:67.5,y:15,w:9,len:15,dir:"x",top:44.5,depth:24.5,thru:!1,group:2},{kind:"pocket",x0:5.5,x1:19.5,y0:9.5,y1:25.5,r:5,top:23,depth:2.5,group:3},{kind:"yhole",x:65,z:8,d:11,group:4}],id:"H-22",seed:22,difficulty:"hard",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:129790.222054,csg_volume_mm3:129790.222062,csg_rel_diff:557e-13,mass_g:{al6061:350.434,steel:1018.853}},{pack:20,label:"Plate: rounds, counterbores, slot",id:"H-46",spec:{body:{type:"prism",W:52,segs:[{x0:0,x1:84,h:11}],corner:{kind:"round",size:3},fillets:[]},features:[{kind:"zhole",x:29.5,y:14,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"zhole",x:29.5,y:38,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"slot",x:65,y:22,w:10.5,len:35,dir:"y",top:11,depth:11,thru:!0,group:2}],id:"H-46",seed:46,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:39492.538063,csg_volume_mm3:39492.538067,csg_rel_diff:102e-12,mass_g:{al6061:106.63,steel:310.016}}],En={drills:nd};function id(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function rd(i){let t=id(String(i))||1;const e=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296},n={next:e,int(r,s){return r+Math.floor(e()*(s-r+1))},q(r,s,a){const o=Math.ceil(r/a-1e-9),l=Math.floor(s/a+1e-9);return l<o?null:Nn(n.int(o,l)*a)},pick(r){return r[Math.floor(e()*r.length)]},chance(r){return e()<r}};return n}function Nn(i){return Math.round(i*1e6)/1e6}const Li=Math.PI;function Cn(i){return Li*i*i/4}function sd(i,t){return(t-i)*i+Cn(i)}function od(i,t,e){return i*t-(4-Li)*e*e}function Wc(i){const t=[],e=i.body;if(e.type==="prism"){for(const n of e.segs)t.push({key:"body",label:"Main body",vol:(n.x1-n.x0)*n.h*e.W});if(e.corner){const n=e.corner.size,r=e.corner.kind==="round"?(1-Li/4)*n*n:n*n/2,s=e.segs[0].h,a=e.segs[e.segs.length-1].h;t.push({key:"corner",label:e.corner.kind==="round"?"Corner rounds":"Corner chamfers",vol:-r*2*(s+a)})}for(const n of e.fillets||[])t.push({key:"fillet",label:`Inside fillet R${n.r}`,vol:(1-Li/4)*n.r*n.r*e.W})}else if(e.type==="flange"){const n=e.chamfer||0;t.push({key:"body",label:"Disk",vol:Li*e.R*e.R*e.t}),n>0&&t.push({key:"chamfer",label:"Edge chamfer",vol:-2*Li*(e.R-n/3)*(n*n)/2}),e.hubR>0&&t.push({key:"hub",label:"Hub",vol:Li*e.hubR*e.hubR*e.hubH}),t.push({key:"bore",label:"Centre bore",vol:-Cn(e.boreD)*(e.t+(e.hubR>0?e.hubH:0))})}return i.features.forEach((n,r)=>{let s=0;switch(n.kind){case"zhole":s=Cn(n.d)*n.depth,n.cb&&(s+=(Cn(n.cb.d)-Cn(n.d))*n.cb.depth);break;case"yhole":s=Cn(n.d)*i.body.W;break;case"xhole":s=Cn(n.d)*(n.x1-n.x0);break;case"slot":s=sd(n.w,n.len)*n.depth;break;case"pocket":s=od(n.x1-n.x0,n.y1-n.y0,n.r)*n.depth;break;case"bolts":{const a=i.body.t;s=n.n*Cn(n.d)*a,n.cb&&(s+=n.n*(Cn(n.cb.d)-Cn(n.d))*n.cb.depth);break}default:throw new Error("unknown feature "+n.kind)}t.push({key:"feature",featureIndex:r,label:ad(n),vol:-s})}),t}function Xc(i){return Wc(i).reduce((t,e)=>t+e.vol,0)}function Ys(i,t){return i/1e3*t}function ad(i){switch(i.kind){case"zhole":return`${i.thru?"Through":"Blind"} hole Ø${i.d}${i.cb?` with counterbore Ø${i.cb.d}`:""}`;case"yhole":case"xhole":return`Side hole Ø${i.d}`;case"slot":return`Slot ${i.w} × ${i.len}`;case"pocket":return`Pocket ${Wr(i.x1-i.x0)} × ${Wr(i.y1-i.y0)}`;case"bolts":return`${i.n}× bolt holes Ø${i.d}${i.cb?" (counterbored)":""}`}return i.kind}function Wr(i){const t=Math.round(i*1e3)/1e3;return String(t)}function qc(i){const t=[];for(const e of i.map(Nn).sort((n,r)=>n-r))t.some(n=>Math.abs(n-e)<1e-6)||t.push(e);return t}function Yc(i){const t=i.body,e={topX:[],topY:[],frontX:[],frontZ:[],rightY:[],rightZ:[]};if(t.type!=="prism")return e;const n=(a,o,l)=>e[a].push({v:Nn(o),tag:l}),r=t.segs[t.segs.length-1].x1,s=Math.max(...t.segs.map(a=>a.h));for(let a=0;a<t.segs.length-1;a++)n("frontX",t.segs[a].x1,`seg${a}.x1`);for(let a=0;a<t.segs.length;a++)n("frontZ",t.segs[a].h,`seg${a}.h`);i.features.forEach((a,o)=>{switch(a.kind){case"zhole":case"slot":n("topX",a.x,`f${o}.x`),n("topY",a.y,`f${o}.y`);break;case"pocket":n("topX",a.x0,`f${o}.x0`),n("topX",a.x1,`f${o}.x1`),n("topY",a.y0,`f${o}.y0`),n("topY",a.y1,`f${o}.y1`);break;case"yhole":n("frontX",a.x,`f${o}.x`),n("frontZ",a.z,`f${o}.z`);break;case"xhole":n("rightY",a.y,`f${o}.y`),n("rightZ",a.z,`f${o}.z`);break}}),e.overall={L:r,W:t.W,H:s};for(const a of["topX","topY","frontX","frontZ","rightY","rightZ"]){const o=qc(e[a].map(l=>l.v));e[a]=o.map(l=>({v:l,tags:e[a].filter(c=>Math.abs(c.v-l)<1e-6).map(c=>c.tag)}))}return e}function ld(i,t=3,e=6){const n=Yc(i);if(i.body.type!=="prism")return!0;const r={topX:n.overall.L,topY:n.overall.W,frontX:null,frontZ:null,rightY:n.overall.W,rightZ:n.overall.H};for(const s of["topX","topY","frontX","frontZ","rightY","rightZ"]){const a=n[s].map(l=>l.v);r[s]!=null&&a.push(r[s]),a.push(0);const o=qc(a);if(o.length-1>e+1)return!1;for(let l=1;l<o.length;l++)if(o[l]-o[l-1]<t)return!1}return!0}const cd={E:"easy",M:"medium",H:"hard"},ud={easy:"E",medium:"M",hard:"H"},sl={plate:"Mounting plate",lbracket:"L-bracket",stepped:"Stepped block",flange:"Flange"},Jt=2.5,hi={easy:5,medium:1,hard:.5},ol={easy:5,medium:2,hard:1},hd={easy:[5,6,8,10],medium:[4,5,6,6.6,8,9,10,12],hard:[3.5,4.5,5.5,6.6,9,11,13.5]},js={3.5:6.5,4.5:8,5.5:9.5,6.6:11,9:15,11:18,13.5:20,4:7.5,5:9,6:10,8:13,10:16,12:19};function jc(i){const t=/^([EMH])-(\d{1,9})$/.exec(String(i).trim().toUpperCase());return t?{difficulty:cd[t[1]],seed:Number(t[2]),letter:t[1]}:null}function Kc(i,t){return`${ud[i]}-${t}`}const dd={easy:["plate","plate","lbracket","flange"],medium:["plate","lbracket","stepped","flange"],hard:["plate","lbracket","stepped","stepped","flange"]};function Ks(i){const t=jc(i);if(!t)throw new Error("Bad drill id: "+i);const e=rd(`cad-drills/v1/${t.letter}/${t.seed}`),n=e.pick(dd[t.difficulty]);for(let r=0;r<400;r++){const s=Ed[n](e,t.difficulty);if(!s||(s.id=Kc(t.difficulty,t.seed),s.seed=t.seed,s.difficulty=t.difficulty,s.family=n,s.title=pd(s),s.generatorVersion=1,s.features.length===0))continue;if(Zc(s).ok)return Td(s)}throw new Error("Generator could not build a valid part for "+i)}function fd(i,t,e){for(let n=t;n<t+5e3;n++){const r=Ks(Kc(i,n));if(!e||e==="any"||r.family===e)return r}throw new Error("no seed found")}function pd(i){if(i.family==="stepped"){const t=i.body.shape;return t==="tee"?"Tee block":t==="u"?"Channel block":"Stepped block"}return sl[i.family]}function md(i,t){const e=i.body;switch(t.kind){case"zhole":{const n=Math.max(t.d,t.cb?t.cb.d:0)/2;return[t.x-n,t.x+n,t.y-n,t.y+n,t.top-t.depth,t.top]}case"slot":{const n=t.dir==="x"?t.len/2:t.w/2,r=t.dir==="x"?t.w/2:t.len/2;return[t.x-n,t.x+n,t.y-r,t.y+r,t.top-t.depth,t.top]}case"pocket":return[t.x0,t.x1,t.y0,t.y1,t.top-t.depth,t.top];case"yhole":return[t.x-t.d/2,t.x+t.d/2,0,e.W,t.z-t.d/2,t.z+t.d/2];case"xhole":return[t.x0,t.x1,t.y-t.d/2,t.y+t.d/2,t.z-t.d/2,t.z+t.d/2]}return null}function gd(i,t,e){for(let n=0;n<3;n++){const r=i[2*n],s=i[2*n+1],a=t[2*n],o=t[2*n+1];if(a-s>=e-1e-9||r-o>=e-1e-9)return!0}return!1}function Zc(i){const t=[],e=i.body;if(e.type==="prism"){const n=e.segs,r=e.W;for(let o=0;o<n.length;o++)n[o].x1-n[o].x0<8&&t.push("segment too narrow"),o>0&&Math.abs(n[o].h-n[o-1].h)<4&&t.push("step too small");const s=[];if(e.corner){n.length!==1&&t.push("corners only on plates");const o=e.corner.size,l=n[0].x1,c=n[0].h;s.push([0,o,0,o,0,c],[l-o,l,0,o,0,c],[0,o,r-o,r,0,c],[l-o,l,r-o,r,0,c])}for(const o of e.fillets||[]){const l=o.dir>0?[o.xb,o.xb+o.r,0,r,o.z,o.z+o.r]:[o.xb-o.r,o.xb,0,r,o.z,o.z+o.r],c=n.find(f=>l[0]>=f.x0-1e-9&&l[1]<=f.x1+1e-9);(!c||Math.abs(c.h-o.z)>1e-9)&&t.push("fillet not on a step");const d=n.find(f=>o.dir>0?Math.abs(f.x1-o.xb)<1e-9:Math.abs(f.x0-o.xb)<1e-9);(!d||d.h<o.z+o.r+2)&&t.push("fillet taller than wall"),c&&(o.dir>0?c.x1-o.xb:o.xb-c.x0)<o.r+6&&t.push("fillet too wide for segment"),s.push(l)}const a=(o,l)=>n.find(c=>o>=c.x0+Jt-1e-9&&l<=c.x1-Jt+1e-9);for(const o of i.features){const l=md(i,o);if(!l){t.push("bad feature");continue}if(o.kind==="zhole"||o.kind==="slot"||o.kind==="pocket"){const c=a(l[0],l[1]);c?Math.abs(c.h-o.top)>1e-9&&t.push(o.kind+" top not on segment face"):t.push(o.kind+" not inside one segment"),(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push(o.kind+" too close to front/back"),o.thru!==void 0&&o.thru&&Math.abs(o.depth-o.top)>1e-9&&t.push("thru depth mismatch"),!o.thru&&o.kind!=="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("blind too deep"),o.kind==="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("pocket too deep"),o.kind==="pocket"&&o.r*2>Math.min(o.x1-o.x0,o.y1-o.y0)-2&&t.push("pocket radius"),o.kind==="slot"&&o.len<o.w+4&&t.push("slot too short"),o.cb&&(o.cb.d<=o.d+1&&t.push("cbore too small"),o.cb.depth>=o.depth-2&&t.push("cbore too deep"))}else if(o.kind==="yhole"){const c=a(l[0],l[1]);c?l[5]>c.h-Jt+1e-9&&t.push("yhole too high"):t.push("yhole not in one segment"),l[4]<Jt-1e-9&&t.push("yhole too low")}else if(o.kind==="xhole"){const c=n.findIndex(d=>Math.abs(d.x0-o.x0)<1e-9&&Math.abs(d.x1-o.x1)<1e-9);if(c<0)t.push("xhole must span a whole segment");else{const d=n[c];l[5]>d.h-Jt+1e-9&&t.push("xhole too high"),l[4]<Jt-1e-9&&t.push("xhole too low");for(const f of[n[c-1],n[c+1]])f&&f.h>l[4]-Jt+1e-9&&t.push("xhole hits neighbour")}(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push("xhole too close to front/back")}for(const c of s)gd(c,l,Jt)||t.push("features too close");s.push(l)}ld(i)||t.push("dimension stacks crowded")}else if(e.type==="flange"){const n=e.chamfer||0;e.boreD/2+Jt>(e.hubR>0?e.hubR:e.R-n)&&t.push("bore too big");for(const r of i.features){if(r.kind!=="bolts"){t.push("flange only has bolt circles");continue}const s=r.bc/2,a=Math.max(r.d,r.cb?r.cb.d:0)/2,o=(e.hubR>0?e.hubR:e.boreD/2)+Jt;s-a<o-1e-9&&t.push("bolt holes hit hub/bore"),s+a>e.R-n-Jt+1e-9&&t.push("bolt holes hit rim"),2*s*Math.sin(Math.PI/r.n)<2*a+Jt&&t.push("bolt holes too close"),r.cb&&r.cb.depth>e.t-Jt&&t.push("cbore too deep"),r.cb&&r.cb.d<=r.d+1&&t.push("cbore too small")}e.hubR>0&&e.hubR+4>e.R-n&&t.push("hub too big")}return Xc(i)>0||t.push("non-positive volume"),{ok:t.length===0,errs:t}}function Zr(i,t){return i.pick(hd[t])}function Zs(i,t,e,n=40){for(let r=0;r<n;r++){const s=e();if(!s||s.length===0)continue;const a=i._group=(i._group||0)+1;s.forEach(l=>l.group=a);const o={...i,features:[...i.features,...s]};if(Zc(o).ok)return i.features.push(...s),!0;i._group--}return!1}function Rn(i,t,e,n,r={}){const s=!r.depth;return{kind:"zhole",x:Nn(i),y:Nn(t),d:e,top:n,depth:s?n:r.depth,thru:s,cb:r.cb||null}}function Ul(i,t,e,n,r,s){const a=i.next();if(s&&a<(t==="hard"?.45:.3)&&js[n]&&e>=8){const o=js[n],l=i.q(Math.min(3,e-4),Math.min(e-4,Math.round(o*.7)),t==="hard"?.5:1);return l==null||l<2?{}:{cb:{d:o,depth:l}}}if(r&&a>.7&&e>=8){const o=i.q(3,e-Jt,t==="hard"?.5:1);return o==null?{}:{depth:o}}return{}}function _d(i,t,e,n,r){const s=hi[t],a=Zr(i,t),o=Ul(i,t,n,a,t!=="easy",t!=="easy"),l=Math.max(a,o.cb?o.cb.d:0)/2,c=l+Jt,d=e.x1-e.x0,f=e.y1-e.y0;if(r==="pattern4"){const u=i.q(c,d/2-l-Jt/2-2,s),p=i.q(c,f/2-l-Jt/2-2,s);return u==null||p==null?null:[Rn(e.x0+u,e.y0+p,a,n,o),Rn(e.x1-u,e.y0+p,a,n,o),Rn(e.x0+u,e.y1-p,a,n,o),Rn(e.x1-u,e.y1-p,a,n,o)]}if(r==="pairY"){const u=i.q(e.x0+c,e.x1-c,s),p=i.q(c,f/2-l-2,s);return u==null||p==null?null:[Rn(u,e.y0+p,a,n,o),Rn(u,e.y1-p,a,n,o)]}if(r==="pairX"){const u=i.q(e.y0+c,e.y1-c,s),p=i.q(c,d/2-l-2,s);return u==null||p==null?null:[Rn(e.x0+p,u,a,n,o),Rn(e.x1-p,u,a,n,o)]}if(r==="single"){const u=i.q(e.x0+c,e.x1-c,s),p=i.q(e.y0+c,e.y1-c,s);return u==null||p==null?null:[Rn(u,p,a,n,o)]}if(r==="center"){const u=t==="easy"?i.pick([10,12,15,20,25]):i.q(10,Math.min(d,f)*.5,t==="hard"?.5:1);if(u==null)return null;const p=t==="easy"?{}:Ul(i,t,n,u,!0,!1);return[Rn((e.x0+e.x1)/2,(e.y0+e.y1)/2,u,n,p)]}return null}function vd(i,t,e,n){const r=hi[t],s=i.pick(t==="hard"?[5,6.5,8,9,10.5,12]:[6,8,10,12]),a=i.chance(.5)?"x":"y",o=a==="x"?e.x1-e.x0:e.y1-e.y0,l=i.q(s+6,Math.max(s+6,o*.7),t==="hard"?.5:1);if(l==null)return null;const c=a==="x"?l/2:s/2,d=a==="x"?s/2:l/2,f=i.q(e.x0+c+Jt,e.x1-c-Jt,r),u=i.q(e.y0+d+Jt,e.y1-d-Jt,r);if(f==null||u==null)return null;const p=t==="hard"&&i.chance(.4)&&n>=8,v=p?i.q(3,n-Jt,.5):n;return v==null?null:[{kind:"slot",x:f,y:u,w:s,len:l,dir:a,top:n,depth:v,thru:!p}]}function xd(i,t,e,n){const r=hi[t],s=i.q(14,(e.x1-e.x0)*.6,r),a=i.q(12,(e.y1-e.y0)*.6,r);if(s==null||a==null)return null;const o=i.q(2,Math.min(6,Math.min(s,a)/2-1.5),t==="hard"?.5:1),l=i.q(e.x0+Jt,e.x1-s-Jt,r),c=i.q(e.y0+Jt,e.y1-a-Jt,r),d=i.q(2,n-Jt-1,t==="hard"?.5:1);return o==null||l==null||c==null||d==null?null:[{kind:"pocket",x0:l,x1:Nn(l+s),y0:c,y1:Nn(c+a),r:o,top:n,depth:d}]}function yd(i,t){const e=ol[t],n=i.q(50,t==="hard"?140:120,e),r=i.q(35,Math.min(n,t==="easy"?80:100),e),s=t==="easy"?i.pick([6,8,10,12,15,20]):i.q(6,22,t==="hard"?.5:1);let a=null;const o={easy:.5,medium:.65,hard:.8}[t];if(i.chance(o)){const f=t==="easy"||i.chance(.55)?"round":"chamfer",u=t==="easy"?i.pick([3,5,8]):i.q(2,Math.min(10,r/5),t==="hard"?.5:1);a={kind:f,size:u}}const l={body:{type:"prism",W:r,segs:[{x0:0,x1:n,h:s}],corner:a,fillets:[]},features:[]},c={x0:0,x1:n,y0:0,y1:r},d=t==="easy"?[i.pick(["pattern4","pattern4","pairX","center"])]:t==="medium"?fa(i,["pattern4","slot","pocket","center","pairX","pairY"]).slice(0,i.int(2,3)):fa(i,["pattern4","slot","pocket","center","pairY","slot","single"]).slice(0,i.int(3,4));t==="easy"&&d[0]==="pattern4"&&i.chance(.5)&&d.push("center");for(const f of d)Xr(l,i,t,f,c,s);return l}function Xr(i,t,e,n,r,s){return Zs(i,t,()=>n==="slot"?vd(t,e,r,s):n==="pocket"?xd(t,e,r,s):_d(t,e,r,s,n))}function Md(i,t){const e=ol[t],n=t==="hard"?.5:1,r=i.q(50,110,e),s=i.q(30,75,e),a=i.q(40,90,e),o=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),l=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),c=[{x0:0,x1:o,h:a},{x0:o,x1:r,h:l}],d=[];t!=="easy"&&i.chance(t==="hard"?.8:.5)&&d.push({xb:o,z:l,r:i.q(3,8,t==="hard"?.5:1),dir:1});const f={body:{type:"prism",W:s,segs:c,corner:null,fillets:d},features:[]},u={x0:o+(d[0]?d[0].r:0),x1:r,y0:0,y1:s},p=t==="easy"?i.pick(["pairY","pattern4"]):i.pick(["pairY","pattern4","slot","pattern4"]);return p==="slot"?Xr(f,i,t,"slot",{...u,x0:u.x0},l):Xr(f,i,t,p,u,l),Zs(f,i,()=>{const v=Zr(i,t),x=l+(d[0]?d[0].r:0)+Jt+v/2,h=hi[t],g=i.q(x+2,a-Jt-v/2,h);if(g==null)return null;if(i.chance(t==="easy"?.5:.65)){const E=i.q(Jt+v/2,s/2-v/2-2,h);return E==null?null:[{kind:"xhole",y:E,z:g,d:v,x0:0,x1:o},{kind:"xhole",y:Nn(s-E),z:g,d:v,x0:0,x1:o}]}return[{kind:"xhole",y:Nn(s/2),z:g,d:v,x0:0,x1:o}]}),t==="hard"&&i.chance(.5)&&Xr(f,i,t,"single",u,l),f}function bd(i,t){const e=ol[t],n=t==="hard"?.5:1,r=i.pick(t==="medium"?["step2","step3","tee","u"]:["step3","tee","u","step2"]),s=r==="step2"?2:3,a=i.q(70,140,e),o=i.q(30,80,e),l=[];for(let y=1;y<s;y++)l.push(i.q(16*y,a-16*(s-y),hi[t]<1?1:hi[t]));l.sort((y,A)=>y-A);const c=[0,...l,a];for(let y=1;y<c.length;y++)if(c[y]-c[y-1]<16)return null;let d;const f=(y,A)=>i.q(y,A,n);if(r==="step2"){const y=f(18,45);d=[y,f(8,y-6)]}else if(r==="step3"){const y=f(26,50),A=f(16,y-6);d=[y,A,f(8,A-6)]}else if(r==="tee"){const y=f(24,50);d=[f(8,y-8),y,f(8,y-8)]}else{const y=f(8,20);d=[f(y+8,50),y,f(y+8,50)]}if(d.some(y=>y==null))return null;i.chance(.5)&&r!=="tee"&&r!=="u"&&d.reverse();const u=d.map((y,A)=>({x0:c[A],x1:c[A+1],h:y})),p=[];if(t!=="easy"&&i.chance(t==="hard"?.7:.4)){const y=i.q(2,6,n);for(let A=0;A<u.length-1;A++){const N=u[A],P=u[A+1];N.h>P.h?p.push({xb:N.x1,z:P.h,r:y,dir:1}):p.push({xb:N.x1,z:N.h,r:y,dir:-1})}}const v={body:{type:"prism",W:o,segs:u,corner:null,fillets:p,shape:r},features:[]},x=y=>{const A=u[y];let N=A.x0,P=A.x1;for(const C of p)C.dir>0&&Math.abs(C.xb-A.x0)<1e-9&&Math.abs(C.z-A.h)<1e-9&&(N+=C.r),C.dir<0&&Math.abs(C.xb-A.x1)<1e-9&&Math.abs(C.z-A.h)<1e-9&&(P-=C.r);return{x0:N,x1:P,y0:0,y1:o}},h=fa(i,u.map((y,A)=>A)),g=t==="medium"?2:i.int(3,4);let E=0;for(const y of h){if(E>=g)break;const A=i.pick(t==="hard"?["pairY","pairY","single","slot","pocket"]:["pairY","pairY","single"]);Xr(v,i,t,A,x(y),u[y].h)&&E++}if(i.chance(t==="hard"?.75:.5)){const y=d.indexOf(Math.max(...d)),A=u[y];Zs(v,i,()=>{const N=Zr(i,t),P=i.q(A.x0+Jt+N/2,A.x1-Jt-N/2,hi[t]),C=i.q(Jt+N/2,A.h-Jt-N/2,hi[t]);return P==null||C==null?null:[{kind:"yhole",x:P,z:C,d:N}]})}if(r==="u"&&t==="hard"&&i.chance(.6)){const y=u[0];Zs(v,i,()=>{const A=Zr(i,t),N=i.q(u[1].h+Jt+A/2+1,y.h-Jt-A/2,.5),P=Nn(o/2);return N==null?null:[{kind:"xhole",y:P,z:N,d:A,x0:y.x0,x1:y.x1}]})}return E===0?null:v}function Sd(i,t){const e=t==="easy"?i.pick([30,35,40,45,50,60]):i.q(30,70,t==="hard"?.5:1),n=t==="easy"?i.pick([6,8,10,12]):i.q(6,16,t==="hard"?.5:1);let r=0,s=0;t!=="easy"&&i.chance(t==="hard"?.85:.6)&&(r=i.q(e*.3,e*.55,t==="hard"?.5:1),s=i.q(5,25,t==="hard"?.5:1));const a=t==="hard"&&i.chance(.65)?i.q(1,Math.min(3,n/3),.5):0,o=r>0?2*(r-Jt-1):e*.8,l=t==="easy"?i.pick([10,15,20,25,30]):i.q(8,Math.min(o,50),t==="hard"?.5:1);if(l==null)return null;const c=i.pick(t==="easy"?[3,4,6]:[3,4,5,6,8]),d=Zr(i,t);let f=null;t==="hard"&&i.chance(.5)&&js[d]&&n>=8&&(f={d:js[d],depth:i.q(2,n-4,.5)});const u=(r>0?r:l/2)+Jt,p=Math.max(d,f?f.d:0)/2,v=i.q(2*(u+p),2*(e-a-Jt-p),t==="easy"?10:t==="medium"?2:1);return v==null||f&&f.depth==null?null:{body:{type:"flange",R:e,t:n,chamfer:a,hubR:r,hubH:s,boreD:l},features:[{kind:"bolts",n:c,bc:v,d,top:n,cb:f,startDeg:0,group:1}]}}function fa(i,t){const e=t.slice();for(let n=e.length-1;n>0;n--){const r=Math.floor(i.next()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}const Ed={plate:yd,lbracket:Md,stepped:bd,flange:Sd};function Td(i){const t=JSON.parse(JSON.stringify(i));return delete t._group,t}const Qi=297,Fr=210,hn=8,Nl=27,Os=6.5,ks=7,pa=3,pr=2.8,ls=2.4,Ro=[5,4,3,2.5,2,1.5,1,.75,.5,.4,.3,.25,.2,.15,.1];function Le(i){const t=Math.round(i*1e3)/1e3;return String(t)}const Xn="Ø";function Ad(i){for(let t=1;t<=20;t++){const e=i*t;if(Math.abs(e-Math.round(e))<1e-9){const n=Math.round(e),r=Jc(n,t);return`${n/r}:${t/r}`}}return i.toFixed(2)}function Jc(i,t){return t?Jc(t,i%t):i}function Dn(i,t,e,n,r,s=16){const a=[];for(let o=0;o<=s;o++){const l=n+(r-n)*o/s;a.push([i+e*Math.cos(l),t+e*Math.sin(l)])}return a}function Qc(i,t,e,n,r){if(r<=0)return[[i,t],[e,t],[e,n],[i,n]];const s=Math.PI;return[...Dn(e-r,t+r,r,-s/2,0),...Dn(e-r,n-r,r,0,s/2),...Dn(i+r,n-r,r,s/2,s),...Dn(i+r,t+r,r,s,1.5*s)]}function wd(i,t,e,n,r){const s=e/2,a=(n-e)/2,o=Math.PI;return r==="x"?[...Dn(i+a,t,s,-o/2,o/2),...Dn(i-a,t,s,o/2,1.5*o)]:[...Dn(i,t+a,s,0,o),...Dn(i,t-a,s,o,2*o)]}function Rd(i,t,e){if(!e)return[[0,0],[i,0],[i,t],[0,t]];const n=e.size;return e.kind==="chamfer"?[[n,0],[i-n,0],[i,n],[i,t-n],[i-n,t],[n,t],[0,t-n],[0,n]]:Qc(0,0,i,t,n)}function Bs(i,t,e,n){i.push({t:"cmark",c:[t,e],r:n})}function Cd(i){const t=i.body,e=t.segs,n=e[e.length-1].x1,r=t.W,s=Math.max(...e.map(u=>u.h)),a={name:"TOP",u0:0,u1:n,v0:0,v1:r,prims:[]},o={name:"FRONT",u0:0,u1:n,v0:0,v1:s,prims:[]},l={name:"RIGHT",u0:0,u1:r,v0:0,v1:s,prims:[]};a.prims.push({t:"poly",pts:Rd(n,r,t.corner),closed:!0,st:"vis"});for(let u=0;u<e.length-1;u++)a.prims.push({t:"line",a:[e[u].x1,0],b:[e[u].x1,r],st:"vis"});for(const u of t.fillets||[]){const p=u.xb+u.dir*u.r;a.prims.push({t:"line",a:[p,0],b:[p,r],st:"thin"})}const c=Math.PI,d=[[0,e[0].h]];for(let u=0;u<e.length-1;u++){const p=e[u],v=e[u+1],x=p.x1,h=(t.fillets||[]).find(g=>Math.abs(g.xb-x)<1e-9);h?h.dir<0?d.push([x-h.r,p.h],...Dn(x-h.r,p.h+h.r,h.r,-c/2,0),[x,v.h]):d.push([x,p.h],[x,v.h+h.r],...Dn(x+h.r,v.h+h.r,h.r,c,1.5*c),[x+h.r,v.h]):d.push([x,p.h],[x,v.h])}d.push([n,e[e.length-1].h]);const f=[[0,0],[n,0],...d.reverse()];if(o.prims.push({t:"poly",pts:Pd(f),closed:!0,st:"vis"}),t.corner){const u=t.corner.size,p=e[0].h,v=t.corner.kind==="chamfer"?"vis":"thin";o.prims.push({t:"line",a:[u,0],b:[u,p],st:v},{t:"line",a:[n-u,0],b:[n-u,p],st:v}),l.prims.push({t:"line",a:[u,0],b:[u,p],st:v},{t:"line",a:[r-u,0],b:[r-u,p],st:v})}l.prims.push({t:"poly",pts:[[0,0],[r,0],[r,s],[0,s]],closed:!0,st:"vis"});for(let u=0;u<e.length;u++){const p=e[u].h;if(Math.abs(p-s)<1e-9)continue;const v=Math.max(0,...e.slice(u+1).map(x=>x.h));l.prims.push({t:"line",a:[0,p],b:[r,p],st:v>p+1e-9?"hid":"vis"})}return i.features.forEach(u=>{if(u.kind==="zhole"){const p=u.d/2,v=u.top-u.depth;a.prims.push({t:"circle",c:[u.x,u.y],r:p,st:"vis",obst:!0}),u.cb&&a.prims.push({t:"circle",c:[u.x,u.y],r:u.cb.d/2,st:"vis",obst:!0}),Bs(a.prims,u.x,u.y,Math.max(p,u.cb?u.cb.d/2:0));for(const[x,h]of[[o,u.x],[l,u.y]]){const g=u.cb?u.top-u.cb.depth:u.top;if(x.prims.push({t:"line",a:[h-p,v],b:[h-p,g],st:"hid"},{t:"line",a:[h+p,v],b:[h+p,g],st:"hid"}),u.thru||x.prims.push({t:"line",a:[h-p,v],b:[h+p,v],st:"hid"}),u.cb){const E=u.cb.d/2;x.prims.push({t:"line",a:[h-E,g],b:[h-E,u.top],st:"hid"},{t:"line",a:[h+E,g],b:[h+E,u.top],st:"hid"},{t:"line",a:[h-E,g],b:[h+E,g],st:"hid"})}x.prims.push({t:"cline",a:[h,v],b:[h,u.top]})}}else if(u.kind==="slot"){const p=u.top-u.depth;a.prims.push({t:"poly",pts:wd(u.x,u.y,u.w,u.len,u.dir),closed:!0,st:"vis",obst:!0});const v=(u.len-u.w)/2;u.dir==="x"?a.prims.push({t:"cline",a:[u.x-v-u.w/2,u.y],b:[u.x+v+u.w/2,u.y]},{t:"cline",a:[u.x,u.y-u.w/2],b:[u.x,u.y+u.w/2]}):a.prims.push({t:"cline",a:[u.x,u.y-v-u.w/2],b:[u.x,u.y+v+u.w/2]},{t:"cline",a:[u.x-u.w/2,u.y],b:[u.x+u.w/2,u.y]});const x=u.dir==="x"?u.len/2:u.w/2,h=u.dir==="x"?u.w/2:u.len/2;for(const[g,E,y]of[[o,u.x,x],[l,u.y,h]])g.prims.push({t:"line",a:[E-y,p],b:[E-y,u.top],st:"hid"},{t:"line",a:[E+y,p],b:[E+y,u.top],st:"hid"}),u.thru||g.prims.push({t:"line",a:[E-y,p],b:[E+y,p],st:"hid"}),g.prims.push({t:"cline",a:[E,p],b:[E,u.top]})}else if(u.kind==="pocket"){const p=u.top-u.depth;a.prims.push({t:"poly",pts:Qc(u.x0,u.y0,u.x1,u.y1,u.r),closed:!0,st:"vis",obst:!0});for(const[v,x,h]of[[o,u.x0,u.x1],[l,u.y0,u.y1]])v.prims.push({t:"line",a:[x,p],b:[x,u.top],st:"hid"},{t:"line",a:[h,p],b:[h,u.top],st:"hid"},{t:"line",a:[x,p],b:[h,p],st:"hid"})}else if(u.kind==="yhole"){const p=u.d/2;o.prims.push({t:"circle",c:[u.x,u.z],r:p,st:"vis",obst:!0}),Bs(o.prims,u.x,u.z,p),a.prims.push({t:"line",a:[u.x-p,0],b:[u.x-p,r],st:"hid"},{t:"line",a:[u.x+p,0],b:[u.x+p,r],st:"hid"},{t:"cline",a:[u.x,0],b:[u.x,r]}),l.prims.push({t:"line",a:[0,u.z-p],b:[r,u.z-p],st:"hid"},{t:"line",a:[0,u.z+p],b:[r,u.z+p],st:"hid"},{t:"cline",a:[0,u.z],b:[r,u.z]})}else if(u.kind==="xhole"){const p=u.d/2,v=e.some(x=>x.x0>=u.x1-1e-9&&x.h>u.z-p+1e-9);l.prims.push({t:"circle",c:[u.y,u.z],r:p,st:v?"hid":"vis",obst:!0}),Bs(l.prims,u.y,u.z,p),a.prims.push({t:"line",a:[u.x0,u.y-p],b:[u.x1,u.y-p],st:"hid"},{t:"line",a:[u.x0,u.y+p],b:[u.x1,u.y+p],st:"hid"},{t:"cline",a:[u.x0,u.y],b:[u.x1,u.y]}),o.prims.push({t:"line",a:[u.x0,u.z-p],b:[u.x1,u.z-p],st:"hid"},{t:"line",a:[u.x0,u.z+p],b:[u.x1,u.z+p],st:"hid"},{t:"cline",a:[u.x0,u.z],b:[u.x1,u.z]})}}),{top:a,front:o,right:l,L:n,W:r,H:s}}function Pd(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n[0]-e[0],n[1]-e[1])>1e-9)&&t.push(e)}return t}function Ld(i){const t=i.body,e=t.chamfer||0,n=t.t+(t.hubR>0?t.hubH:0),r={name:"TOP",u0:-t.R,u1:t.R,v0:-t.R,v1:t.R,prims:[]},s={name:"FRONT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]},a={name:"RIGHT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]};r.prims.push({t:"circle",c:[0,0],r:t.R,st:"vis"}),e>0&&r.prims.push({t:"circle",c:[0,0],r:t.R-e,st:"vis"}),t.hubR>0&&r.prims.push({t:"circle",c:[0,0],r:t.hubR,st:"vis"}),r.prims.push({t:"circle",c:[0,0],r:t.boreD/2,st:"vis",obst:!0}),r.prims.push({t:"cline",a:[-t.R,0],b:[t.R,0]},{t:"cline",a:[0,-t.R],b:[0,t.R]});const o=[[-t.R,0],[t.R,0]];e>0?o.push([t.R,t.t-e],[t.R-e,t.t]):o.push([t.R,t.t]),t.hubR>0&&o.push([t.hubR,t.t],[t.hubR,n],[-t.hubR,n],[-t.hubR,t.t]),e>0?o.push([-(t.R-e),t.t],[-t.R,t.t-e]):o.push([-t.R,t.t]);for(const l of[s,a]){l.prims.push({t:"poly",pts:o,closed:!0,st:"vis"}),e>0&&l.prims.push({t:"line",a:[-t.R,t.t-e],b:[t.R,t.t-e],st:"vis"}),t.hubR>0&&l.prims.push({t:"line",a:[-t.hubR,t.t],b:[t.hubR,t.t],st:"vis"});const c=t.boreD/2;l.prims.push({t:"line",a:[-c,0],b:[-c,n],st:"hid"},{t:"line",a:[c,0],b:[c,n],st:"hid"}),l.prims.push({t:"cline",a:[0,0],b:[0,n]})}for(const l of i.features){if(l.kind!=="bolts")continue;r.prims.push({t:"circle",c:[0,0],r:l.bc/2,st:"ctr"});const c=new Set,d=new Set;for(let f=0;f<l.n;f++){const u=((l.startDeg||0)+360*f/l.n)*Math.PI/180,p=l.bc/2*Math.cos(u),v=l.bc/2*Math.sin(u);r.prims.push({t:"circle",c:[p,v],r:l.d/2,st:"vis",obst:!0}),l.cb&&r.prims.push({t:"circle",c:[p,v],r:l.cb.d/2,st:"vis",obst:!0}),Bs(r.prims,p,v,Math.max(l.d,l.cb?l.cb.d:0)/2);for(const[x,h,g]of[[s,p,c],[a,v,d]]){const E=Math.round(h*1e3);if(g.has(E))continue;g.add(E);const y=l.d/2,A=l.cb?t.t-l.cb.depth:t.t;if(x.prims.push({t:"line",a:[h-y,0],b:[h-y,A],st:"hid"},{t:"line",a:[h+y,0],b:[h+y,A],st:"hid"}),l.cb){const N=l.cb.d/2;x.prims.push({t:"line",a:[h-N,A],b:[h-N,t.t],st:"hid"},{t:"line",a:[h+N,A],b:[h+N,t.t],st:"hid"},{t:"line",a:[h-N,A],b:[h+N,A],st:"hid"})}x.prims.push({t:"cline",a:[h,0],b:[h,t.t]})}}}return{top:r,front:s,right:a,L:2*t.R,W:2*t.R,H:n}}function Dd(i,t){const e=i.body,n={top:{stacks:{},callouts:[]},front:{stacks:{},callouts:[]},right:{stacks:{},callouts:[]}},r=(s,a,o)=>(n[s].stacks[a]=n[s].stacks[a]||[]).push(o);if(e.type==="prism"){const s=Yc(i),a=e.segs,o=s.overall.L,l=s.overall.W,c=s.overall.H,d=v=>{let x=-1/0,h=1/0;for(const g of v){const E=/^f(\d+)\.(\w+)$/.exec(g);if(!E)continue;const y=i.features[+E[1]];let A,N;if(y.kind==="zhole"){const P=Math.max(y.d,y.cb?y.cb.d:0)/2;A=y.y+P,N=y.y-P}else if(y.kind==="slot"){const P=y.dir==="x"?y.w/2:y.len/2;A=y.y+P,N=y.y-P}else if(y.kind==="pocket")A=y.y1,N=y.y0;else continue;x=Math.max(x,A),h=Math.min(h,N)}return{hi:x,lo:h}},f=v=>{let x=1/0;for(const h of v){const g=/^f(\d+)\.(\w+)$/.exec(h);if(!g)continue;const E=i.features[+g[1]];E.kind==="zhole"?x=Math.min(x,E.x-Math.max(E.d,E.cb?E.cb.d:0)/2):E.kind==="slot"?x=Math.min(x,E.x-(E.dir==="x"?E.len/2:E.w/2)):E.kind==="pocket"&&(x=Math.min(x,E.x0))}return x};for(const v of s.topX){const x=d(v.tags);r("top","top",{v:v.v,tags:v.tags,from:isFinite(x.hi)?x.hi:l})}r("top","top",{v:o,tags:["L"],from:l,overall:!0});for(const v of s.topY){const x=f(v.tags);r("top","left",{v:v.v,tags:v.tags,from:isFinite(x)?x:0})}r("top","left",{v:l,tags:["W"],from:0,overall:!0});for(const v of s.frontX){let x=0;for(const h of v.tags){const g=/^f(\d+)\.x$/.exec(h);if(g){const E=i.features[+g[1]];x=E.z-E.d/2}}r("front","bottom",{v:v.v,tags:v.tags,from:x})}for(const v of s.frontZ){let x="left",h=0;const g=v.tags.map(E=>/^seg(\d+)\.h$/.exec(E)).filter(Boolean).map(E=>+E[1]);if(g.length){const E=Math.min(...g),y=a.slice(0,E).every(P=>P.h<=v.v+1e-9),A=Math.max(...g),N=a.slice(A+1).every(P=>P.h<=v.v+1e-9);y?(x="left",h=a[E].x0):N?(x="right",h=a[A].x1):(x="left",h=a[E].x0)}else for(const E of v.tags){const y=/^f(\d+)\.z$/.exec(E);if(y){const A=i.features[+y[1]];h=A.x-A.d/2}}r("front",x,{v:v.v,tags:v.tags,from:h,overall:Math.abs(v.v-c)<1e-9})}for(const v of s.rightY){let x=0;for(const h of v.tags){const g=/^f(\d+)\.y$/.exec(h);if(g){const E=i.features[+g[1]];x=E.z-E.d/2}}r("right","bottom",{v:v.v,tags:v.tags,from:x})}for(const v of s.rightZ){let x=l;for(const h of v.tags){const g=/^f(\d+)\.z$/.exec(h);if(g){const E=i.features[+g[1]];x=E.y+E.d/2}}r("right","right",{v:v.v,tags:v.tags,from:x})}if(e.corner){const v=e.corner.size,x=e.corner.kind==="round"?[o-v+v*Math.SQRT1_2,l-v+v*Math.SQRT1_2]:[o-v/2,l-v/2];n.top.callouts.push({target:x,lines:[e.corner.kind==="round"?`4× R${Le(v)}`:`4× ${Le(v)} × 45° CHAMFER`],tags:["corner"]})}const u=new Map;i.features.forEach((v,x)=>{let h,g;v.kind==="zhole"?(h=`z|${v.d}|${v.thru}|${v.depth}|${v.cb?v.cb.d+"/"+v.cb.depth:""}|${v.top}`,g="top"):v.kind==="slot"?(h=`s|${x}`,g="top"):v.kind==="pocket"?(h=`p|${x}`,g="top"):v.kind==="yhole"?(h=`y|${v.d}`,g="front"):v.kind==="xhole"&&(h=`x|${v.d}|${v.x0}|${v.x1}`,g="right"),u.has(h)||u.set(h,{view:g,idx:[]}),u.get(h).idx.push(x)});for(const v of u.values()){const x=v.idx.map(b=>i.features[b]),h=x[0],g=x.length,E=g>1?`${g}× `:"",y=[];for(const b of v.idx){const $=i.features[b];$.kind==="zhole"&&y.push(`f${b}.d`,`f${b}.depth`,...$.cb?[`f${b}.cb`]:[]),($.kind==="yhole"||$.kind==="xhole")&&y.push(`f${b}.d`),$.kind==="slot"&&y.push(`f${b}.w`,`f${b}.len`,`f${b}.depth`),$.kind==="pocket"&&y.push(`f${b}.r`,`f${b}.depth`)}let A,N,P;const C=b=>b.kind==="zhole"||b.kind==="slot"?b.x+b.y*.5:b.kind==="pocket"?b.x1+b.y1*.5:b.kind==="yhole"?b.x+b.z*.5:b.y+b.z*.5;P=x.reduce((b,$,Y)=>C($)>C(x[b])?Y:b,0);const F=x[P],st=Math.SQRT1_2;if(h.kind==="zhole"){A=[`${E}${Xn}${Le(h.d)} ${h.thru?"THRU":`× ${Le(h.depth)} DEEP`}`],h.cb&&A.push(`C'BORE ${Xn}${Le(h.cb.d)} × ${Le(h.cb.depth)} DEEP`);const b=(h.cb?h.cb.d:h.d)/2;N=[F.x+b*st,F.y+b*st]}else if(h.kind==="slot"){A=[`SLOT ${Le(h.w)} WIDE × ${Le(h.len)} LONG`,h.thru?"OVERALL, THRU":`OVERALL, ${Le(h.depth)} DEEP`];const b=(h.len-h.w)/2,$=h.dir==="x"?h.x+b:h.x,Y=h.dir==="x"?h.y:h.y+b;N=[$+h.w/2*st,Y+h.w/2*st]}else h.kind==="pocket"?(A=[`POCKET ${Le(h.depth)} DEEP`,`R${Le(h.r)} INSIDE CORNERS`],N=[h.x1-h.r+h.r*st,h.y1-h.r+h.r*st]):h.kind==="yhole"?(A=[`${E}${Xn}${Le(h.d)} THRU`],N=[F.x+h.d/2*st,F.z+h.d/2*st]):h.kind==="xhole"&&(A=[`${E}${Xn}${Le(h.d)} THRU`],N=[F.y+h.d/2*st,F.z+h.d/2*st]);const M=x.map(b=>{if(b.kind==="zhole"){const $=(b.cb?b.cb.d:b.d)/2;return[b.x+$*st,b.y+$*st]}return b.kind==="yhole"?[b.x+b.d/2*st,b.z+b.d/2*st]:b.kind==="xhole"?[b.y+b.d/2*st,b.z+b.d/2*st]:null}).filter(Boolean);n[v.view].callouts.push({target:N,alts:M.length>1?M:null,lines:A,tags:y})}const p=new Map;(e.fillets||[]).forEach((v,x)=>{const h=v.r;p.has(h)||p.set(h,[]),p.get(h).push(x)});for(const[v,x]of p){const h=e.fillets[x[x.length-1]],g=h.xb+h.dir*h.r,E=h.z+h.r,y=[g-h.dir*h.r*Math.SQRT1_2,E-h.r*Math.SQRT1_2];n.front.callouts.push({target:y,lines:[`${x.length>1?x.length+"× ":""}R${Le(v)} FILLET`],tags:x.map(A=>`fillet${A}`)})}}else{const s=e.t+(e.hubR>0?e.hubH:0);r("front","bottom",{v:2*e.R,sym:!0,tags:["R"],from:0,overall:!0,dia:!0}),e.hubR>0&&r("front","top",{v:2*e.hubR,sym:!0,tags:["hubR"],from:s,dia:!0}),r("front","left",{v:e.t,tags:["t"],from:-e.R}),e.hubR>0&&r("front","left",{v:s,tags:["hubH"],from:-e.hubR,overall:!0});const a=Math.SQRT1_2;n.top.callouts.push({target:[-(e.boreD/2)*a,e.boreD/2*a],lines:[`${Xn}${Le(e.boreD)} THRU`],tags:["boreD"],leftward:!0});for(const o of i.features){const l=o.bc/2,c=(o.cb?o.cb.d:o.d)/2,d=[`${o.n}× ${Xn}${Le(o.d)} THRU`];o.cb&&d.push(`C'BORE ${Xn}${Le(o.cb.d)} × ${Le(o.cb.depth)} DEEP`),d.push(`EQ. SPACED ON ${Xn}${Le(o.bc)} B.C.`),n.top.callouts.push({target:[l+c*a,c*a],lines:d,tags:["bolts.n","bolts.d","bolts.bc",...o.cb?["bolts.cb"]:[]]})}if(e.chamfer>0){const o=e.chamfer;n.front.callouts.push({target:[e.R-o/2,e.t-o/2],lines:[`${Le(o)} × 45° CHAMFER`],tags:["chamfer"]})}}return n}function ma(i,t){return i.length*t*.56}function Co(i){const t={top:3,bottom:3,left:3,right:3,calloutW:0};for(const e of["top","bottom","left","right"]){const n=(i.stacks[e]||[]).length;n&&(t[e]=ks+(n-1)*Os+4.5)}if(i.callouts.length){const e=Math.max(...i.callouts.flatMap(n=>n.lines.map(r=>ma(r,pr))));t.calloutW=e+9,t.right+=t.calloutW}return t}function qr(i,t={}){const e=t.theme||"light",n=i.body.type==="prism"?Cd(i):Ld(i),r=Dd(i),s=Co(r.top),a=Co(r.front),o=Co(r.right),l=n.top.u1-n.top.u0,c=n.right.u1-n.right.u0,d=n.front.v1-n.front.v0,f=n.top.v1-n.top.v0,u=62,p=6,v=Math.max(s.left,a.left),x=Math.max(s.right,a.right),h=Qi-2*hn-4,g=Fr-2*hn-Nl-4;let E=Ro[Ro.length-1],y=!1;for(const z of Ro){const Et=v+l*z+x,bt=Math.max(o.left+c*z+o.right,u),ct=s.top+f*z+Math.max(s.bottom,0),Lt=Math.max(a.top,o.top)+d*z+Math.max(a.bottom,o.bottom);if(Et+p+bt<=h&&ct+p+Lt<=g){E=z,y=!0;break}}const A=hn+2,N=hn+2,P=v+l*E+x,C=s.top+f*E+s.bottom,F=Math.max(a.top,o.top),st=h-(P+p+Math.max(o.left+c*E+o.right,u)),M=g-(C+p+F+d*E+Math.max(a.bottom,o.bottom)),b=Math.max(0,st/3),$=Math.max(0,M/3),Y=A+b+v-n.top.u0*E,rt=N+$+s.top,pt={...n.top,ox:Y,oy:rt+n.top.v1*E},J=rt+f*E+s.bottom+p+$+F,vt={...n.front,ox:Y,oy:J+d*E},et=A+b+P+p+b,Dt={...n.right,ox:et+o.left-n.right.u0*E,oy:vt.oy},Mt=(z,Et,bt)=>[z.ox+Et*E,z.oy-bt*E],_t=[],se=new Set,ce=z=>{for(const ct of z.prims)if(ct.t==="line"){const[Lt,j]=Mt(z,...ct.a),[gt,At]=Mt(z,...ct.b);_t.push(`<line class="${ct.st}" x1="${Z(Lt)}" y1="${Z(j)}" x2="${Z(gt)}" y2="${Z(At)}"/>`)}else if(ct.t==="cline"){const[Lt,j]=Mt(z,...ct.a),[gt,At]=Mt(z,...ct.b),kt=Math.hypot(gt-Lt,At-j)||1,Tt=(gt-Lt)/kt*2,Ft=(At-j)/kt*2;_t.push(`<line class="ctr" x1="${Z(Lt-Tt)}" y1="${Z(j-Ft)}" x2="${Z(gt+Tt)}" y2="${Z(At+Ft)}"/>`)}else if(ct.t==="circle"){const[Lt,j]=Mt(z,...ct.c);_t.push(`<circle class="${ct.st}" cx="${Z(Lt)}" cy="${Z(j)}" r="${Z(ct.r*E)}"/>`)}else if(ct.t==="poly"){const Lt=ct.pts.map(j=>Mt(z,...j).map(Z).join(",")).join(" ");_t.push(`<${ct.closed?"polygon":"polyline"} class="${ct.st}" points="${Lt}"/>`)}else if(ct.t==="cmark"){const[Lt,j]=Mt(z,...ct.c),gt=ct.r*E+1.6,At=Math.min(1.2,ct.r*E*.5);_t.push(`<path class="ctr" d="M${Z(Lt-gt)} ${Z(j)}H${Z(Lt-At*1.4)}M${Z(Lt-At)} ${Z(j)}H${Z(Lt+At)}M${Z(Lt+At*1.4)} ${Z(j)}H${Z(Lt+gt)}M${Z(Lt)} ${Z(j-gt)}V${Z(j-At*1.4)}M${Z(Lt)} ${Z(j-At)}V${Z(j+At)}M${Z(Lt)} ${Z(j+At*1.4)}V${Z(j+gt)}"/>`)}const Et=Mt(z,(z.u0+z.u1)/2,z.v0),bt=z===pt?s.bottom:Math.max(a.bottom,o.bottom);_t.push(`<text class="vlabel" x="${Z(Et[0])}" y="${Z(Et[1]+bt+3.4)}" text-anchor="middle">${z.name}</text>`)};ce(pt),ce(vt),ce(Dt);const it=(z,Et,bt,ct)=>{const Lt=Math.hypot(bt,ct)||1,j=bt/Lt,gt=ct/Lt,At=z-j*ls,kt=Et-gt*ls,Tt=.75;return`<path class="arr" d="M${Z(z)} ${Z(Et)}L${Z(At-gt*Tt)} ${Z(kt+j*Tt)}L${Z(At+gt*Tt)} ${Z(kt-j*Tt)}Z"/>`},dt=(z,Et,bt,ct=0,Lt="middle")=>`<text class="dim" x="${Z(z)}" y="${Z(Et)}" text-anchor="${Lt}"${ct?` transform="rotate(${ct} ${Z(z)} ${Z(Et)})"`:""}>${ci(bt)}</text>`,It=(z,Et,bt)=>{for(const ct of["top","bottom","left","right"]){const Lt=(Et.stacks[ct]||[]).slice();Lt.length&&(Lt.sort((j,gt)=>(j.overall?1:0)-(gt.overall?1:0)||j.v-gt.v),Lt.forEach((j,gt)=>{j.tags.forEach(kt=>se.add(kt));const At=(j.dia?Xn:"")+Le(j.v);if(ct==="top"||ct==="bottom"){const kt=j.sym?-j.v/2:0,Tt=j.sym?j.v/2:j.v,[Ft]=Mt(z,kt,0),[wt]=Mt(z,Tt,0),le=ct==="top"?Mt(z,0,z.v1)[1]:Mt(z,0,z.v0)[1],I=ct==="top"?-1:1,ht=le+I*(ks+gt*Os),K=Mt(z,0,j.from)[1]+I*1.2,O=j.sym?K:le+I*1.2;_t.push(`<line class="ext" x1="${Z(Ft)}" y1="${Z(j.sym?K:O)}" x2="${Z(Ft)}" y2="${Z(ht+I*1.5)}"/>`),_t.push(`<line class="ext" x1="${Z(wt)}" y1="${Z(K)}" x2="${Z(wt)}" y2="${Z(ht+I*1.5)}"/>`);const ot=wt-Ft,tt=ma(At,pa);ot>=tt+2*ls+1.5?(_t.push(`<line class="dimln" x1="${Z(Ft)}" y1="${Z(ht)}" x2="${Z(wt)}" y2="${Z(ht)}"/>`),_t.push(it(Ft,ht,-1,0),it(wt,ht,1,0)),_t.push(dt((Ft+wt)/2,ht-.9,At))):(_t.push(`<line class="dimln" x1="${Z(Ft-5)}" y1="${Z(ht)}" x2="${Z(wt+5)}" y2="${Z(ht)}"/>`),_t.push(it(Ft,ht,1,0),it(wt,ht,-1,0)),_t.push(dt(Ft-5.5,ht+1.05,At,0,"end")))}else{const kt=j.sym?-j.v/2:0,Tt=j.sym?j.v/2:j.v,Ft=Mt(z,0,kt)[1],wt=Mt(z,0,Tt)[1],le=ct==="left"?Mt(z,z.u0,0)[0]:Mt(z,z.u1,0)[0],I=ct==="left"?-1:1,ht=le+I*(ks+gt*Os),K=Mt(z,j.from,0)[0]+I*1.2,O=le+I*1.2;_t.push(`<line class="ext" x1="${Z(O)}" y1="${Z(Ft)}" x2="${Z(ht+I*1.5)}" y2="${Z(Ft)}"/>`),_t.push(`<line class="ext" x1="${Z(K)}" y1="${Z(wt)}" x2="${Z(ht+I*1.5)}" y2="${Z(wt)}"/>`);const ot=Ft-wt,tt=ma(At,pa);ot>=tt+2*ls+1.5?(_t.push(`<line class="dimln" x1="${Z(ht)}" y1="${Z(Ft)}" x2="${Z(ht)}" y2="${Z(wt)}"/>`),_t.push(it(ht,Ft,0,1),it(ht,wt,0,-1)),_t.push(dt(ht-.9,(Ft+wt)/2,At,-90))):gt===Lt.length-1?(_t.push(`<line class="dimln" x1="${Z(ht)}" y1="${Z(Ft+5)}" x2="${Z(ht)}" y2="${Z(wt-5)}"/>`),_t.push(it(ht,Ft,0,-1),it(ht,wt,0,1)),_t.push(dt(ht+I*1.2,(Ft+wt)/2+1.05,At,0,I<0?"end":"start"))):(_t.push(`<line class="dimln" x1="${Z(ht)}" y1="${Z(Ft+5)}" x2="${Z(ht)}" y2="${Z(wt-5)}"/>`),_t.push(it(ht,Ft,0,-1),it(ht,wt,0,1)),_t.push(`<line class="dimln" x1="${Z(ht)}" y1="${Z(wt-5)}" x2="${Z(ht)}" y2="${Z(wt-5.5-tt)}"/>`),_t.push(dt(ht-.9,wt-5.5,At,-90,"start")))}}))}};It(pt,r.top),It(vt,r.front),It(Dt,r.right);const Ut=(z,Et,bt,ct)=>{if(!Et.callouts.length)return;const Lt=(Et.stacks.right||[]).length,j=Mt(z,z.u1,0)[0]+(Lt?ks+(Lt-1)*Os+4.5:3)+6,gt=Et.callouts.map(O=>{const ot=Mt(z,...O.target);return{...O,tp:ot,h:O.lines.length*(pr+.9)+.6,y:ot[1]-3}});gt.sort((O,ot)=>O.y-ot.y);const At=ct[0],kt=ct[1],Tt=[];for(const O of z.prims)if(O.obst){if(O.t==="circle"){const[ot,tt]=Mt(z,...O.c);Tt.push({k:"c",cx:ot,cy:tt,r:O.r*E})}else if(O.t==="poly"){const ot=O.pts.map(Kt=>Mt(z,...Kt)),tt=ot.map(Kt=>Kt[0]),Wt=ot.map(Kt=>Kt[1]);Tt.push({k:"r",x0:Math.min(...tt),x1:Math.max(...tt),y0:Math.min(...Wt),y1:Math.max(...Wt)})}}const Ft=(O,ot)=>O.k==="c"?Math.abs(Math.hypot(ot[0]-O.cx,ot[1]-O.cy)-O.r)<.6||Math.hypot(ot[0]-O.cx,ot[1]-O.cy)<O.r:ot[0]>=O.x0-.6&&ot[0]<=O.x1+.6&&ot[1]>=O.y0-.6&&ot[1]<=O.y1+.6,wt=O=>[j-2.5,O+pr*.75-1],le=(O,ot)=>Tt.some(tt=>!Ft(tt,O)&&(tt.k==="c"?Id(O,ot,[tt.cx,tt.cy])<tt.r+.8:Ud(O,ot,tt.x0-.8,tt.y0-.8,tt.x1+.8,tt.y1+.8))),I=[],ht=(O,ot)=>O>=At-1e-9&&O+ot<=kt+1e-9&&I.every(tt=>O+ot+1.2<=tt.y||O>=tt.y+tt.h+1.2),K=(O,ot)=>I.some(tt=>Nd(O,ot,tt.tp,wt(tt.y)));for(const O of gt){let ot=null;const tt=(O.alts||[O.target]).map(Wt=>Mt(z,...Wt));for(let Wt=0;Wt<=400&&ot==null;Wt++)for(const Kt of tt){const he=Kt[1]-3;for(const oe of Wt?[1,-1]:[1]){const De=he+oe*Wt*.5;if(!ht(De,O.h))continue;const qe=wt(De);if(!(le(Kt,qe)||K(Kt,qe))){ot=De,O.tp=Kt;break}}if(ot!=null)break}if(ot==null)for(let Wt=0;Wt<=400&&ot==null;Wt++)for(const Kt of[1,-1]){const he=O.y+Kt*Wt*.5;if(ht(he,O.h)){ot=he;break}}O.y=ot??O.y,I.push(O)}for(const O of gt){O.tags.forEach(he=>se.add(he));const ot=O.y+pr*.75,tt=j-2.5;_t.push(`<polyline class="leader" points="${Z(O.tp[0])},${Z(O.tp[1])} ${Z(tt)},${Z(ot-1)} ${Z(j-.8)},${Z(ot-1)}"/>`);const Wt=O.tp[0]-tt,Kt=O.tp[1]-(ot-1);_t.push(it(O.tp[0],O.tp[1],Wt,Kt)),O.lines.forEach((he,oe)=>{_t.push(`<text class="call" x="${Z(j)}" y="${Z(ot+oe*(pr+.9))}">${ci(he)}</text>`)})}};Ut(pt,r.top,s,[N+1,pt.oy+s.bottom]),Ut(vt,r.front,a,[J-F+1,vt.oy+a.bottom]),Ut(Dt,r.right,o,[J-F+1,Dt.oy+o.bottom]);const qt=et,zt=N+2,ee=Qi-hn-3-qt,ae=J-F-zt-7;t.isoHref?_t.push(`<image href="${t.isoHref}" x="${Z(qt)}" y="${Z(zt)}" width="${Z(ee)}" height="${Z(ae)}" preserveAspectRatio="xMidYMid meet"/>`):(_t.push(`<rect class="isobox" x="${Z(qt)}" y="${Z(zt)}" width="${Z(ee)}" height="${Z(ae)}" rx="2"/>`),_t.push(`<text class="vlabel" x="${Z(qt+ee/2)}" y="${Z(zt+ae/2)}" text-anchor="middle">3D PREVIEW</text>`)),_t.push(`<text class="vlabel" x="${Z(qt+ee/2)}" y="${Z(zt+ae+3.6)}" text-anchor="middle">ISOMETRIC (REFERENCE ONLY)</text>`);const Qt=150,D=Nl-2,xe=Qi-hn-Qt,Gt=Fr-hn-D,re=t.material||{name:"6061 ALUMINUM",density:2.7},Ot=[];Ot.push(`<rect class="frame" x="${hn}" y="${hn}" width="${Qi-2*hn}" height="${Fr-2*hn}"/>`),Ot.push(`<rect class="frame" x="${xe}" y="${Gt}" width="${Qt}" height="${D}"/>`);const fe=xe+52,$t=xe+104;Ot.push(`<line class="frame thin" x1="${fe}" y1="${Gt}" x2="${fe}" y2="${Gt+D}"/>`),Ot.push(`<line class="frame thin" x1="${$t}" y1="${Gt}" x2="${$t}" y2="${Gt+D}"/>`),Ot.push(`<line class="frame thin" x1="${xe}" y1="${Gt+D/2}" x2="${xe+Qt}" y2="${Gt+D/2}"/>`);const R=(z,Et,bt,ct,Lt)=>`<text class="tbl" x="${z+2}" y="${Et+3.6}">${bt}</text><text class="${Lt?"tbv big":"tbv"}" x="${z+2}" y="${Et+9.6}">${ci(ct)}</text>`,S=D/2;Ot.push(R(xe,Gt,"PRACTICE DRILL","UNDO DILIGENCE",!0)),Ot.push(R(fe,Gt,"DRILL",`${i.id} · ${i.difficulty.toUpperCase()}`,!0)),Ot.push(R($t,Gt,"PART",i.title.toUpperCase())),Ot.push(R(xe,Gt+S,"MATERIAL",`${re.name} · ${re.density} g/cm³`)),Ot.push(R(fe,Gt+S,"UNITS · SCALE",`MM · ${Ad(E)}${y?"":" (REDUCED)"}`)),Ot.push(`<text class="tbl" x="${$t+2}" y="${Gt+S+3.6}">PROJECTION</text>`),Ot.push(tu($t+30,Gt+S+7.6)),Ot.push(`<text class="tbv" x="${$t+2}" y="${Gt+S+9.6}">3RD ANGLE</text>`),["NOTES","1. ALL DIMENSIONS IN MILLIMETRES. DO NOT SCALE THE DRAWING.","2. HOLES ARE THRU UNLESS NOTED. BLIND HOLES, SLOTS AND POCKETS HAVE FLAT BOTTOMS.","3. LOCATIONS ARE MEASURED FROM THE LEFT, FRONT AND BOTTOM FACES"+(i.body.type==="flange"?" (FLANGE: FROM ITS AXIS).":"."),`4. TASK: MODEL THE PART, APPLY ${re.name} (${re.density} g/cm³) AND REPORT ITS MASS IN GRAMS.`].forEach((z,Et)=>Ot.push(`<text class="${Et?"note":"note b"}" x="${hn+3}" y="${Gt+3.6+Et*4.6}">${ci(z)}</text>`)),t.answer&&Ot.push(`<text class="note b" x="${xe}" y="${Gt-2}">ANSWER: ${ci(t.answer)}</text>`);const at=eu(e);return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Qi} ${Fr}" width="${t.width||"100%"}" ${t.height?`height="${t.height}"`:""} class="sheet" font-family="Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"><style>${at}</style><rect class="paper" x="0" y="0" width="${Qi}" height="${Fr}"/>${Ot.join("")}${_t.join("")}</svg>`,covered:se,scale:E,fitted:y}}function Id(i,t,e){const n=t[0]-i[0],r=t[1]-i[1],s=n*n+r*r||1e-9,a=Math.max(0,Math.min(1,((e[0]-i[0])*n+(e[1]-i[1])*r)/s));return Math.hypot(i[0]+a*n-e[0],i[1]+a*r-e[1])}function Ud(i,t,e,n,r,s){let a=0,o=1;const l=t[0]-i[0],c=t[1]-i[1];for(const[d,f]of[[-l,i[0]-e],[l,r-i[0]],[-c,i[1]-n],[c,s-i[1]]]){if(Math.abs(d)<1e-12){if(f<0)return!1;continue}const u=f/d;if(d<0){if(u>o)return!1;u>a&&(a=u)}else{if(u<a)return!1;u<o&&(o=u)}}return!0}function Nd(i,t,e,n){const r=(c,d,f)=>(d[0]-c[0])*(f[1]-c[1])-(d[1]-c[1])*(f[0]-c[0]),s=r(e,n,i),a=r(e,n,t),o=r(i,t,e),l=r(i,t,n);return s*a<0&&o*l<0}function tu(i,t){return`<g class="sym">
    <path d="M${i} ${t-2.2*.9}L${i+7*.9} ${t-3.6*.9}L${i+7*.9} ${t+3.6*.9}L${i} ${t+2.2*.9}Z"/>
    <circle cx="${i+13*.9}" cy="${t}" r="${3.6*.9}"/><circle cx="${i+13*.9}" cy="${t}" r="${2.2*.9}"/></g>`}function eu(i){const t=i==="dark"?{paper:"#141920",ink:"#e8ecf1",hid:"#9aa6b2",ctr:"#6f8fb7",dim:"#f2b65a",frame:"#56616e",note:"#c3cbd4",thin:"#7d8894"}:i==="print"?{paper:"#ffffff",ink:"#000000",hid:"#000000",ctr:"#000000",dim:"#000000",frame:"#000000",note:"#000000",thin:"#555555"}:{paper:"#ffffff",ink:"#111418",hid:"#3a434d",ctr:"#56708f",dim:"#0a58c2",frame:"#2b3138",note:"#2b3138",thin:"#8a939c"};return`
.paper{fill:${t.paper}}
.vis{fill:none;stroke:${t.ink};stroke-width:.45;stroke-linejoin:round}
.hid{fill:none;stroke:${t.hid};stroke-width:.28;stroke-dasharray:1.6 .8}
.ctr,.ctr path{fill:none;stroke:${t.ctr};stroke-width:.18;stroke-dasharray:5 1 1 1}
path.ctr{stroke-dasharray:none}
.thin{fill:none;stroke:${t.thin};stroke-width:.18}
.ext,.dimln,.leader{fill:none;stroke:${t.dim};stroke-width:.18}
.arr{fill:${t.dim};stroke:none}
.dim{fill:${t.dim};font-size:${pa}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
.call{fill:${t.dim};font-size:${pr}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
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
`}function Z(i){return(Math.round(i*100)/100).toString()}function ci(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Jr=[{id:"al6061",name:"6061 ALUMINUM",label:"Aluminum 6061",density:2.7},{id:"steel",name:"STEEL (MILD)",label:"Steel (mild)",density:7.85},{id:"ss304",name:"304 STAINLESS",label:"Stainless 304",density:8},{id:"brass",name:"BRASS C360",label:"Brass C360",density:8.5},{id:"abs",name:"ABS PLASTIC",label:"ABS plastic",density:1.04},{id:"pla",name:"PLA (100% INFILL)",label:"PLA, 100% infill",density:1.24}],co=.005;function ai(i){return Jr.find(t=>t.id===i)||Jr[0]}function Je(i,t,e){return Math.abs(i-t)<=Math.abs(t)*e}function Fd(i,t,e){const n=Wc(i),r=n.reduce((l,c)=>l+c.vol,0),s=Ys(r,e),a=Number(t);if(!isFinite(a)||a<=0)return{correct:!1,expected:s,errorPct:null,hint:"Enter the mass in grams as a positive number, e.g. 123.4"};const o=(a-s)/s*100;return Je(a,s,co)?{correct:!0,expected:s,errorPct:o,hint:null}:{correct:!1,expected:s,errorPct:o,hint:Od(i,n,r,a,e)}}function Od(i,t,e,n,r){const a=f=>Ys(f,r);if(Je(n,e,.004))return"That number matches the volume in mm³. Convert to mass: grams = mm³ ÷ 1000 × density.";if(Je(n,e/1e3,.004))return"That matches the volume in cm³. Multiply by the density to get grams.";if(Je(n,a(e)/1e3,.004))return"Looks like kilograms. The answer is in grams.";if(Je(n,a(e)*1e3,.004))return"Off by exactly 1000×. Check your mm³ → cm³ conversion (1 cm³ = 1000 mm³).";if(Je(n,a(e)/28.3495,.004))return"That looks like ounces. The answer is in grams.";if(Je(n,a(e)/453.592,.004))return"That looks like pounds. The answer is in grams.";const o=[2.7,7.85,8,8.5,1.04,1.24,1];for(const f of o)if(Math.abs(f-r)/r>.03&&Je(n,Ys(e,f),.004))return`Your geometry looks right, but that mass matches a density of ${f} g/cm³. This drill uses ${r} g/cm³.`;const l=new Map;for(const f of t){if(f.key==="body")continue;const u=f.featureIndex!=null?i.features[f.featureIndex]:null,p=u?`g${u.group??f.featureIndex}`:f.key+f.label;l.has(p)||l.set(p,{vol:0,label:f.label,n:0,f:u});const v=l.get(p);v.vol+=f.vol,v.n++}for(const f of l.values()){const u=f.label.charAt(0).toLowerCase()+f.label.slice(1),p=f.n>1?`${f.n}× ${u.replace(/\b(hole|slot|pocket)\b/,"$1s")}`:u;if(Je(n,a(e-f.vol),.004))return f.vol<0?`Close: it looks like the ${p} ${f.n>1?"are":"is"} missing from your model.`:`Close: it looks like the ${p} ${f.n>1?"are":"is"} missing (it adds material).`;if(f.n>1){const v=f.vol/f.n;for(let x=1;x<f.n;x++)if(Je(n,a(e-v*x),.004))return`Close: ${x===1?"one":x} of the ${p} ${x===1?"seems":"seem"} to be missing.`}if(Je(n,a(e+f.vol),.004))return`Close: the ${p} seem to be counted twice, or cut twice as deep.`}for(const f of l.values())if(f.f&&(f.f.kind==="zhole"||f.f.kind==="yhole"||f.f.kind==="xhole"||f.f.kind==="bolts")){if(Je(n,a(e+3*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the diameter was used as the radius.`;if(Je(n,a(e-.75*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the radius was used as the diameter.`}for(const f of l.values()){const u=f.f;if(u&&u.kind==="zhole"&&!u.thru){const p=f.vol*(u.top/u.depth-1);if(Je(n,a(e+p),.004))return`The ${f.label.charAt(0).toLowerCase()+f.label.slice(1)} should stop at the depth shown, not go all the way through.`}if(u&&u.kind==="pocket"&&Je(n,a(e+f.vol*(u.top/u.depth-1)),.004))return"The pocket should stop at its depth, not cut all the way through."}const c=(n-a(e))/a(e)*100,d=c>0?"heavy":"light";return Math.abs(c)<3?`Very close (${Wr(Math.abs(c).toFixed(2))}% ${d}). Re-check small details: fillet and corner radii, chamfers, counterbore and pocket depths.`:Math.abs(c)<15?`${Wr(Math.abs(c).toFixed(1))}% too ${d}. ${c>0?"Something is missing a cut, or a cut is too small/shallow.":"A cut is too big or deep, or a dimension is too small."} Compare each view against your model.`:`${Wr(Math.abs(c).toFixed(0))}% too ${d}. Re-check the overall sizes (length, width, heights) first, then the features.`}const nu="cadDrills.v1";function ga(){return{attempts:{},solved:{},events:[],waitlist:[],visitorId:Math.random().toString(36).slice(2,10),theme:null,material:"al6061"}}let Di=null;function _i(){if(Di)return Di;try{Di={...ga(),...JSON.parse(localStorage.getItem(nu))||{}}}catch{Di=ga()}return Di}function Gi(){try{localStorage.setItem(nu,JSON.stringify(Di))}catch{}}function kd(){const i={theme:_i().theme};Di={...ga(),...i},Gi()}function We(i,t={}){try{window.goatcounter?.count?.({path:i+(t.source?"/"+t.source:""),title:i,event:!0})}catch{}const e=_i();e.events.push({t:Date.now(),type:i,...t}),e.events.length>5e3&&e.events.splice(0,e.events.length-5e3),Gi()}function iu(i,t,e,n,r){const s=_i();(s.attempts[i]=s.attempts[i]||[]).push({t:Date.now(),value:t,density:e,correct:n}),n&&!s.solved[i]?s.solved[i]={t:Date.now(),timeMs:r??null,attempts:s.attempts[i].length}:n&&r!=null&&(s.solved[i].timeMs==null||r<s.solved[i].timeMs)&&(s.solved[i].timeMs=r),Gi()}function Oi(i){const t=_i();return t.solved[i]?"solved":t.attempts[i]?.length?"tried":"new"}function ru(){const i=_i(),t=new Set(Object.values(i.solved).map(r=>new Date(r.t).toDateString()));let e=0;const n=new Date;for(t.has(n.toDateString())||n.setDate(n.getDate()-1);t.has(n.toDateString());)e++,n.setDate(n.getDate()-1);return e}function Bd(i,t){const e=_i();e.waitlist.some(n=>n.email===i)||e.waitlist.push({email:i,t:Date.now(),source:t}),Gi()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="169",_r={ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,Fl=1,Hd=2,su=1,Vd=2,qn=3,mi=0,on=1,Yn=2,di=0,vr=1,Ol=2,kl=3,Bl=4,Gd=5,Ii=100,$d=101,Wd=102,Xd=103,qd=104,Yd=200,jd=201,Kd=202,Zd=203,_a=204,va=205,Jd=206,Qd=207,tf=208,ef=209,nf=210,rf=211,sf=212,of=213,af=214,xa=0,ya=1,Ma=2,br=3,ba=4,Sa=5,Ea=6,Ta=7,ou=0,lf=1,cf=2,fi=0,uf=1,hf=2,df=3,ff=4,pf=5,mf=6,gf=7,au=300,Sr=301,Er=302,Aa=303,wa=304,uo=306,Ra=1e3,Ni=1001,Ca=1002,pn=1003,_f=1004,cs=1005,Tn=1006,Po=1007,Fi=1008,Zn=1009,lu=1010,cu=1011,Qr=1012,ll=1013,Bi=1014,jn=1015,ts=1016,cl=1017,ul=1018,Tr=1020,uu=35902,hu=1021,du=1022,An=1023,fu=1024,pu=1025,xr=1026,Ar=1027,mu=1028,hl=1029,gu=1030,dl=1031,fl=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,Pa=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,ka=37809,Ba=37810,za=37811,Ha=37812,Va=37813,Ga=37814,$a=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Ka=37821,$s=36492,Za=36494,Ja=36495,_u=36283,Qa=36284,tl=36285,el=36286,vf=3200,xf=3201,vu=0,yf=1,ui="",Pn="srgb",vi="srgb-linear",pl="display-p3",ho="display-p3-linear",Js="linear",be="srgb",Qs="rec709",to="p3",tr=7680,zl=519,Mf=512,bf=513,Sf=514,xu=515,Ef=516,Tf=517,Af=518,wf=519,Hl=35044,Vl="300 es",Kn=2e3,eo=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,nl=180/Math.PI;function es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function tn(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function Lo(i,t,e){return(1-e)*i+e*t}function Or(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cf={DEG2RAD:Yr};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,r,s,a,o,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],p=n[5],v=n[8],x=r[0],h=r[3],g=r[6],E=r[1],y=r[4],A=r[7],N=r[2],P=r[5],C=r[8];return s[0]=a*x+o*E+l*N,s[3]=a*h+o*y+l*P,s[6]=a*g+o*A+l*C,s[1]=c*x+d*E+f*N,s[4]=c*h+d*y+f*P,s[7]=c*g+d*A+f*C,s[2]=u*x+p*E+v*N,s[5]=u*h+p*y+v*P,s[8]=u*g+p*A+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=d*a-o*c,u=o*l-d*s,p=c*s-a*l,v=e*f+n*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=f*x,t[1]=(r*c-d*n)*x,t[2]=(o*n-r*a)*x,t[3]=u*x,t[4]=(d*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new ie;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=no("canvas");return i.style.display="block",i}const Gl={};function Ws(i){i in Gl||(Gl[i]=!0,console.warn(i))}function Lf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Df(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $l=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[vi]:{transfer:Js,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Pn]:{transfer:be,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ho]:{transfer:Js,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wl),fromReference:i=>i.applyMatrix3($l)},[pl]:{transfer:be,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},Uf=new Set([vi,ho]),_e={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=kr[t].toReference,r=kr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return kr[i].primaries},getTransfer:function(i){return i===ui?Js:kr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(kr[t].luminanceCoefficients)}};function yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{er===void 0&&(er=no("canvas")),er.width=t.width,er.height=t.height;const n=er.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yr(e[n]/255)*255):e[n]=yr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class Mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uo(r[a].image)):s.push(Uo(r[a]))}else s=Uo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Of=0;class an extends $i{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Ni,r=Ni,s=Tn,a=Fi,o=An,l=Zn,c=an.DEFAULT_ANISOTROPY,d=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=es(),this.name="",this.source=new Mu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=au;an.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],v=l[9],x=l[2],h=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(v+h)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,A=(p+1)/2,N=(g+1)/2,P=(d+u)/4,C=(f+x)/4,F=(v+h)/4;return y>A&&y>N?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=C/n):A>N?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=P/r,s=F/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=C/s,r=F/s),this.set(n,r,s,e),this}let E=Math.sqrt((h-v)*(h-v)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(h-v)/E,this.y=(f-x)/E,this.z=(u-d)/E,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kf extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends kf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bu extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const u=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(f!==x||l!==u||c!==p||d!==v){let h=1-o;const g=l*u+c*p+d*v+f*x,E=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const N=Math.sqrt(y),P=Math.atan2(N,g*E);h=Math.sin(h*P)/N,o=Math.sin(o*P)/N}const A=o*E;if(l=l*h+u*A,c=c*h+p*A,d=d*h+v*A,f=f*h+x*A,h===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=N,c*=N,d*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[a],u=s[a+1],p=s[a+2],v=s[a+3];return t[e]=o*v+d*f+l*p-c*u,t[e+1]=l*v+d*u+c*f-o*p,t[e+2]=c*v+d*p+o*u-l*f,t[e+3]=d*v-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),f=o(s/2),u=l(n/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"YXZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"ZXY":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"ZYX":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"YZX":this._x=u*d*f+c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f-u*p*v;break;case"XZY":this._x=u*d*f-c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],f=e[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*d,this.y=n+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new G,Xl=new Hi;class ns{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),hs.subVectors(this.max,Br),nr.subVectors(t.a,Br),ir.subVectors(t.b,Br),rr.subVectors(t.c,Br),ei.subVectors(ir,nr),ni.subVectors(rr,ir),bi.subVectors(nr,rr);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!Fo(e,nr,ir,rr,hs)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,nr,ir,rr,hs))?!1:(ds.crossVectors(ei,ni),e=[ds.x,ds.y,ds.z],Fo(e,nr,ir,rr,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],yn=new G,us=new ns,nr=new G,ir=new G,rr=new G,ei=new G,ni=new G,bi=new G,Br=new G,hs=new G,ds=new G,Si=new G;function Fo(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Si.fromArray(i,s);const o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),d=n.dot(Si);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const zf=new ns,zr=new G,Oo=new G;class fo{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Oo)),this.expandByPoint(zr.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new G,ko=new G,fs=new G,ii=new G,Bo=new G,ps=new G,zo=new G;class ml{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ko.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(ko);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fs),o=ii.dot(this.direction),l=-ii.dot(fs),c=ii.lengthSq(),d=Math.abs(1-a*a);let f,u,p,v;if(d>0)if(f=a*l-o,u=a*o-l,v=s*d,f>=0)if(u>=-v)if(u<=v){const x=1/d;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ko).addScaledVector(fs,u),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,r,s){Bo.subVectors(e,t),ps.subVectors(n,t),zo.crossVectors(Bo,ps);let a=this.direction.dot(zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const l=o*this.direction.dot(ps.crossVectors(ii,ps));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(ii));if(c<0||l+c>a)return null;const d=-o*ii.dot(zo);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,s,a,o,l,c,d,f,u,p,v,x,h){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,f,u,p,v,x,h)}set(t,e,n,r,s,a,o,l,c,d,f,u,p,v,x,h){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=f,g[14]=u,g[3]=p,g[7]=v,g[11]=x,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/sr.setFromMatrixColumn(t,0).length(),s=1/sr.setFromMatrixColumn(t,1).length(),a=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*d,p=a*f,v=o*d,x=o*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=p+v*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,p=l*f,v=c*d,x=c*f;e[0]=u+x*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-v,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,p=l*f,v=c*d,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*d,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,p=a*f,v=o*d,x=o*f;e[0]=l*d,e[4]=v*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*d,e[4]=x-u*f,e[8]=v*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*f+v,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=u*f+x,e[5]=a*d,e[9]=p*f-v,e[2]=v*f-p,e[6]=o*d,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Vf)}lookAt(t,e,n){const r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(n,cn),ri.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(n,cn)),ri.normalize(),ms.crossVectors(cn,ri),r[0]=ri.x,r[4]=ms.x,r[8]=cn.x,r[1]=ri.y,r[5]=ms.y,r[9]=cn.y,r[2]=ri.z,r[6]=ms.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],p=n[13],v=n[2],x=n[6],h=n[10],g=n[14],E=n[3],y=n[7],A=n[11],N=n[15],P=r[0],C=r[4],F=r[8],st=r[12],M=r[1],b=r[5],$=r[9],Y=r[13],rt=r[2],pt=r[6],J=r[10],vt=r[14],et=r[3],Dt=r[7],Mt=r[11],_t=r[15];return s[0]=a*P+o*M+l*rt+c*et,s[4]=a*C+o*b+l*pt+c*Dt,s[8]=a*F+o*$+l*J+c*Mt,s[12]=a*st+o*Y+l*vt+c*_t,s[1]=d*P+f*M+u*rt+p*et,s[5]=d*C+f*b+u*pt+p*Dt,s[9]=d*F+f*$+u*J+p*Mt,s[13]=d*st+f*Y+u*vt+p*_t,s[2]=v*P+x*M+h*rt+g*et,s[6]=v*C+x*b+h*pt+g*Dt,s[10]=v*F+x*$+h*J+g*Mt,s[14]=v*st+x*Y+h*vt+g*_t,s[3]=E*P+y*M+A*rt+N*et,s[7]=E*C+y*b+A*pt+N*Dt,s[11]=E*F+y*$+A*J+N*Mt,s[15]=E*st+y*Y+A*vt+N*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],f=t[6],u=t[10],p=t[14],v=t[3],x=t[7],h=t[11],g=t[15];return v*(+s*l*f-r*c*f-s*o*u+n*c*u+r*o*p-n*l*p)+x*(+e*l*p-e*c*u+s*a*u-r*a*p+r*c*d-s*l*d)+h*(+e*c*f-e*o*p-s*a*f+n*a*p+s*o*d-n*c*d)+g*(-r*o*d-e*l*f+e*o*u+r*a*f-n*a*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=t[9],u=t[10],p=t[11],v=t[12],x=t[13],h=t[14],g=t[15],E=f*h*c-x*u*c+x*l*p-o*h*p-f*l*g+o*u*g,y=v*u*c-d*h*c-v*l*p+a*h*p+d*l*g-a*u*g,A=d*x*c-v*f*c+v*o*p-a*x*p-d*o*g+a*f*g,N=v*f*l-d*x*l-v*o*u+a*x*u+d*o*h-a*f*h,P=e*E+n*y+r*A+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=E*C,t[1]=(x*u*s-f*h*s-x*r*p+n*h*p+f*r*g-n*u*g)*C,t[2]=(o*h*s-x*l*s+x*r*c-n*h*c-o*r*g+n*l*g)*C,t[3]=(f*l*s-o*u*s-f*r*c+n*u*c+o*r*p-n*l*p)*C,t[4]=y*C,t[5]=(d*h*s-v*u*s+v*r*p-e*h*p-d*r*g+e*u*g)*C,t[6]=(v*l*s-a*h*s-v*r*c+e*h*c+a*r*g-e*l*g)*C,t[7]=(a*u*s-d*l*s+d*r*c-e*u*c-a*r*p+e*l*p)*C,t[8]=A*C,t[9]=(v*f*s-d*x*s-v*n*p+e*x*p+d*n*g-e*f*g)*C,t[10]=(a*x*s-v*o*s+v*n*c-e*x*c-a*n*g+e*o*g)*C,t[11]=(d*o*s-a*f*s-d*n*c+e*f*c+a*n*p-e*o*p)*C,t[12]=N*C,t[13]=(d*x*r-v*f*r+v*n*u-e*x*u-d*n*h+e*f*h)*C,t[14]=(v*o*r-a*x*r-v*n*l+e*x*l+a*n*h-e*o*h)*C,t[15]=(a*f*r-d*o*r+d*n*l-e*f*l-a*n*u+e*o*u)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,f=o+o,u=s*c,p=s*d,v=s*f,x=a*d,h=a*f,g=o*f,E=l*c,y=l*d,A=l*f,N=n.x,P=n.y,C=n.z;return r[0]=(1-(x+g))*N,r[1]=(p+A)*N,r[2]=(v-y)*N,r[3]=0,r[4]=(p-A)*P,r[5]=(1-(u+g))*P,r[6]=(h+E)*P,r[7]=0,r[8]=(v+y)*C,r[9]=(h-E)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mn.copy(this);const c=1/s,d=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Kn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),u=(n+r)/(n-r);let p,v;if(o===Kn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===eo)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Kn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(a-s),u=(e+t)*c,p=(n+r)*d;let v,x;if(o===Kn)v=(a+s)*f,x=-2*f;else if(o===eo)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new G,Mn=new Ae,Hf=new G(0,0,0),Vf=new G(1,1,1),ri=new G,ms=new G,cn=new G,ql=new Ae,Yl=new Hi;class Fn{constructor(t=0,e=0,n=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const jl=new G,or=new Hi,Gn=new Ae,gs=new G,Hr=new G,$f=new G,Wf=new Hi,Kl=new G(1,0,0),Zl=new G(0,1,0),Jl=new G(0,0,1),Ql={type:"added"},Xf={type:"removed"},ar={type:"childadded",child:null},Ho={type:"childremoved",child:null};class Xe extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new G,e=new Fn,n=new Hi,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ie}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hr,gs,this.up):Gn.lookAt(gs,Hr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Gn),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),ar.child=t,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Xe.DEFAULT_UP=new G(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new G,$n=new G,Vo=new G,Wn=new G,lr=new G,cr=new G,tc=new G,Go=new G,$o=new G,Wo=new G,Xo=new Re,qo=new Re,Yo=new Re;class fn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),bn.subVectors(t,e),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){bn.subVectors(r,e),$n.subVectors(n,e),Vo.subVectors(t,e);const a=bn.dot(bn),o=bn.dot($n),l=bn.dot(Vo),c=$n.dot($n),d=$n.dot(Vo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,v=(a*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Xo,s.x),a.addScaledVector(qo,s.y),a.addScaledVector(Yo,s.z),a}static isFrontFacing(t,e,n,r){return bn.subVectors(n,e),$n.subVectors(t,e),bn.cross($n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,n),cr.subVectors(s,n),Go.subVectors(t,n);const l=lr.dot(Go),c=cr.dot(Go);if(l<=0&&c<=0)return e.copy(n);$o.subVectors(t,r);const d=lr.dot($o),f=cr.dot($o);if(d>=0&&f<=d)return e.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(lr,a);Wo.subVectors(t,s);const p=lr.dot(Wo),v=cr.dot(Wo);if(v>=0&&p<=v)return e.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(cr,o);const h=d*v-p*f;if(h<=0&&f-d>=0&&p-v>=0)return tc.subVectors(s,r),o=(f-d)/(f-d+(p-v)),e.copy(r).addScaledVector(tc,o);const g=1/(h+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},_s={h:0,s:0,l:0};function jo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=Rf(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=jo(a,s,t+1/3),this.g=jo(a,s,t),this.b=jo(a,s,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return _e.fromWorkingColorSpace(je.copy(this),t),Math.round(tn(je.r*255,0,255))*65536+Math.round(tn(je.g*255,0,255))*256+Math.round(tn(je.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(je.copy(this),e);const n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Pn){_e.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,r=je.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(_s);const n=Lo(si.h,_s.h,e),r=Lo(si.s,_s.s,e),s=Lo(si.l,_s.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new de;de.NAMES=Eu;let qf=0;class Cr extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=vr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tu extends Cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new G,vs=new te;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}}class Au extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Un extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yf=0;const dn=new Ae,Ko=new Xe,ur=new G,un=new ns,Vr=new ns,$e=new G;class On extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?wu:Au)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(un.min,Vr.min),un.expandByPoint($e),$e.addVectors(un.max,Vr.max),un.expandByPoint($e)):(un.expandByPoint(Vr.min),un.expandByPoint(Vr.max))}un.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared($e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)$e.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(t,c),$e.add(ur)),r=Math.max(r,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new G,l[F]=new G;const c=new G,d=new G,f=new G,u=new te,p=new te,v=new te,x=new G,h=new G;function g(F,st,M){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,st),f.fromBufferAttribute(n,M),u.fromBufferAttribute(s,F),p.fromBufferAttribute(s,st),v.fromBufferAttribute(s,M),d.sub(c),f.sub(c),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(b),h.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(b),o[F].add(x),o[st].add(x),o[M].add(x),l[F].add(h),l[st].add(h),l[M].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,st=E.length;F<st;++F){const M=E[F],b=M.start,$=M.count;for(let Y=b,rt=b+$;Y<rt;Y+=3)g(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const y=new G,A=new G,N=new G,P=new G;function C(F){N.fromBufferAttribute(r,F),P.copy(N);const st=o[F];y.copy(st),y.sub(N.multiplyScalar(N.dot(st))).normalize(),A.crossVectors(P,st);const b=A.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,b)}for(let F=0,st=E.length;F<st;++F){const M=E[F],b=M.start,$=M.count;for(let Y=b,rt=b+$;Y<rt;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,f=new G;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),x=t.getX(u+1),h=t.getX(u+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,h),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,h),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let x=0,h=l.length;x<h;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let g=0;g<d;g++)u[v++]=c[p++]}return new mn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Ae,Ei=new ml,xs=new fo,nc=new G,ys=new G,Ms=new G,bs=new G,Zo=new G,Ss=new G,ic=new G,Es=new G;class In extends Xe{constructor(t=new On,e=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Zo.fromBufferAttribute(f,t),a?Ss.addScaledVector(Zo,d):Ss.addScaledVector(Zo.sub(e),d))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(xs.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(xs,nc)===null||Ei.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=u.length;v<x;v++){const h=u[v],g=a[h.materialIndex],E=Math.max(h.start,p.start),y=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let A=E,N=y;A<N;A+=3){const P=o.getX(A),C=o.getX(A+1),F=o.getX(A+2);r=Ts(this,g,t,n,c,d,f,P,C,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let h=v,g=x;h<g;h+=3){const E=o.getX(h),y=o.getX(h+1),A=o.getX(h+2);r=Ts(this,a,t,n,c,d,f,E,y,A),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=u.length;v<x;v++){const h=u[v],g=a[h.materialIndex],E=Math.max(h.start,p.start),y=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let A=E,N=y;A<N;A+=3){const P=A,C=A+1,F=A+2;r=Ts(this,g,t,n,c,d,f,P,C,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let h=v,g=x;h<g;h+=3){const E=h,y=h+1,A=h+2;r=Ts(this,a,t,n,c,d,f,E,y,A),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}}}function jf(i,t,e,n,r,s,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===mi,o),l===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Es);return c<e.near||c>e.far?null:{distance:c,point:Es.clone(),object:i}}function Ts(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,Ms),i.getVertexPosition(c,bs);const d=jf(i,t,e,n,ys,Ms,bs,ic);if(d){const f=new G;fn.getBarycoord(ic,ys,Ms,bs,f),r&&(d.uv=fn.getInterpolatedAttribute(r,o,l,c,f,new te)),s&&(d.uv1=fn.getInterpolatedAttribute(s,o,l,c,f,new te)),a&&(d.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};fn.getNormal(ys,Ms,bs,u.normal),d.face=u,d.barycoord=f}return d}class is extends On{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,p=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(f,2));function v(x,h,g,E,y,A,N,P,C,F,st){const M=A/C,b=N/F,$=A/2,Y=N/2,rt=P/2,pt=C+1,J=F+1;let vt=0,et=0;const Dt=new G;for(let Mt=0;Mt<J;Mt++){const _t=Mt*b-Y;for(let se=0;se<pt;se++){const ce=se*M-$;Dt[x]=ce*E,Dt[h]=_t*y,Dt[g]=rt,c.push(Dt.x,Dt.y,Dt.z),Dt[x]=0,Dt[h]=0,Dt[g]=P>0?1:-1,d.push(Dt.x,Dt.y,Dt.z),f.push(se/C),f.push(1-Mt/F),vt+=1}}for(let Mt=0;Mt<F;Mt++)for(let _t=0;_t<C;_t++){const se=u+_t+pt*Mt,ce=u+_t+pt*(Mt+1),it=u+(_t+1)+pt*(Mt+1),dt=u+(_t+1)+pt*Mt;l.push(se,ce,dt),l.push(ce,it,dt),et+=6}o.addGroup(p,et,st),p+=et,u+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=wr(i[e]);for(const r in n)t[r]=n[r]}return t}function Kf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ru(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Zf={clone:wr,merge:Qe};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cu extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new G,rc=new te,sc=new te;class Sn extends Cu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,rc,sc),e.subVectors(sc,rc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hr=-90,dr=1;class tp extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(hr,dr,t,e);r.layers=this.layers,this.add(r);const s=new Sn(hr,dr,t,e);s.layers=this.layers,this.add(s);const a=new Sn(hr,dr,t,e);a.layers=this.layers,this.add(a);const o=new Sn(hr,dr,t,e);o.layers=this.layers,this.add(o);const l=new Sn(hr,dr,t,e);l.layers=this.layers,this.add(l);const c=new Sn(hr,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Pu extends an{constructor(t,e,n,r,s,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ep extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Pu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:di});s.uniforms.tEquirect.value=e;const a=new In(r,s),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Tn),new tp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Jo=new G,np=new G,ip=new ie;class li{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Jo.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ip.getNormalMatrix(t),r=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new fo,As=new G;class gl{constructor(t=new li,e=new li,n=new li,r=new li,s=new li,a=new li){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],x=r[10],h=r[11],g=r[12],E=r[13],y=r[14],A=r[15];if(n[0].setComponents(l-s,u-c,h-p,A-g).normalize(),n[1].setComponents(l+s,u+c,h+p,A+g).normalize(),n[2].setComponents(l+a,u+d,h+v,A+E).normalize(),n[3].setComponents(l-a,u-d,h-v,A-E).normalize(),n[4].setComponents(l-o,u-f,h-x,A-y).normalize(),e===Kn)n[5].setComponents(l+o,u+f,h+x,A+y).normalize();else if(e===eo)n[5].setComponents(o,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(As.x=r.normal.x>0?t.max.x:t.min.x,As.y=r.normal.y>0?t.max.y:t.min.y,As.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function rp(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){const v=f[u],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class po extends On{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,f=t/o,u=e/l,p=[],v=[],x=[],h=[];for(let g=0;g<d;g++){const E=g*u-a;for(let y=0;y<c;y++){const A=y*f-s;v.push(A,-E,0),x.push(0,0,1),h.push(y/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<o;E++){const y=E+c*g,A=E+c*(g+1),N=E+1+c*(g+1),P=E+1+c*g;p.push(y,A,P),p.push(A,N,P)}this.setIndex(p),this.setAttribute("position",new Un(v,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`
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
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,rm=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:sp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:up,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Sp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:wp,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:kp,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:$p,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:jp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:rm,lights_fragment_maps:sm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:Mm,normal_fragment_begin:bm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Im,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:km,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:$m,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:Km,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:rg,background_frag:sg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:ug,depth_frag:hg,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:bg,meshmatcap_frag:Sg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:Ag,meshphong_frag:wg,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Dg,points_frag:Ig,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Fg,sprite_frag:Og},Ct={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ln={basic:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Qe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Qe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Qe([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Qe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Qe([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Qe([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Qe([Ct.common,Ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Qe([Ct.lights,Ct.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ln.physical={uniforms:Qe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ws={r:0,b:0,g:0},Ai=new Fn,kg=new Ae;function Bg(i,t,e,n,r,s,a){const o=new de(0);let l=s===!0?0:1,c,d,f=null,u=0,p=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1;const A=v(E);A===null?g(o,l):A&&A.isColor&&(g(A,1),y=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(E,y){const A=v(y);A&&(A.isCubeTexture||A.mapping===uo)?(d===void 0&&(d=new In(new is(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:wr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ai)),d.material.toneMapped=_e.getTransfer(A.colorSpace)!==be,(f!==A||u!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=A,u=A.version,p=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new In(new po(2,2),new gi({name:"BackgroundMaterial",uniforms:wr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_e.getTransfer(A.colorSpace)!==be,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||u!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,u=A.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,y){E.getRGB(ws,Ru(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,g(o,l)},render:x,addToRenderList:h}}function zg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(M,b,$,Y,rt){let pt=!1;const J=f(Y,$,b);s!==J&&(s=J,c(s.object)),pt=p(M,Y,$,rt),pt&&v(M,Y,$,rt),rt!==null&&t.update(rt,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,A(M,b,$,Y),rt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,b,$){const Y=$.wireframe===!0;let rt=n[M.id];rt===void 0&&(rt={},n[M.id]=rt);let pt=rt[b.id];pt===void 0&&(pt={},rt[b.id]=pt);let J=pt[Y];return J===void 0&&(J=u(l()),pt[Y]=J),J}function u(M){const b=[],$=[],Y=[];for(let rt=0;rt<e;rt++)b[rt]=0,$[rt]=0,Y[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:$,attributeDivisors:Y,object:M,attributes:{},index:null}}function p(M,b,$,Y){const rt=s.attributes,pt=b.attributes;let J=0;const vt=$.getAttributes();for(const et in vt)if(vt[et].location>=0){const Mt=rt[et];let _t=pt[et];if(_t===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),Mt===void 0||Mt.attribute!==_t||_t&&Mt.data!==_t.data)return!0;J++}return s.attributesNum!==J||s.index!==Y}function v(M,b,$,Y){const rt={},pt=b.attributes;let J=0;const vt=$.getAttributes();for(const et in vt)if(vt[et].location>=0){let Mt=pt[et];Mt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const _t={};_t.attribute=Mt,Mt&&Mt.data&&(_t.data=Mt.data),rt[et]=_t,J++}s.attributes=rt,s.attributesNum=J,s.index=Y}function x(){const M=s.newAttributes;for(let b=0,$=M.length;b<$;b++)M[b]=0}function h(M){g(M,0)}function g(M,b){const $=s.newAttributes,Y=s.enabledAttributes,rt=s.attributeDivisors;$[M]=1,Y[M]===0&&(i.enableVertexAttribArray(M),Y[M]=1),rt[M]!==b&&(i.vertexAttribDivisor(M,b),rt[M]=b)}function E(){const M=s.newAttributes,b=s.enabledAttributes;for(let $=0,Y=b.length;$<Y;$++)b[$]!==M[$]&&(i.disableVertexAttribArray($),b[$]=0)}function y(M,b,$,Y,rt,pt,J){J===!0?i.vertexAttribIPointer(M,b,$,rt,pt):i.vertexAttribPointer(M,b,$,Y,rt,pt)}function A(M,b,$,Y){x();const rt=Y.attributes,pt=$.getAttributes(),J=b.defaultAttributeValues;for(const vt in pt){const et=pt[vt];if(et.location>=0){let Dt=rt[vt];if(Dt===void 0&&(vt==="instanceMatrix"&&M.instanceMatrix&&(Dt=M.instanceMatrix),vt==="instanceColor"&&M.instanceColor&&(Dt=M.instanceColor)),Dt!==void 0){const Mt=Dt.normalized,_t=Dt.itemSize,se=t.get(Dt);if(se===void 0)continue;const ce=se.buffer,it=se.type,dt=se.bytesPerElement,It=it===i.INT||it===i.UNSIGNED_INT||Dt.gpuType===ll;if(Dt.isInterleavedBufferAttribute){const Ut=Dt.data,qt=Ut.stride,zt=Dt.offset;if(Ut.isInstancedInterleavedBuffer){for(let ee=0;ee<et.locationSize;ee++)g(et.location+ee,Ut.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ee=0;ee<et.locationSize;ee++)h(et.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ee=0;ee<et.locationSize;ee++)y(et.location+ee,_t/et.locationSize,it,Mt,qt*dt,(zt+_t/et.locationSize*ee)*dt,It)}else{if(Dt.isInstancedBufferAttribute){for(let Ut=0;Ut<et.locationSize;Ut++)g(et.location+Ut,Dt.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)h(et.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ut=0;Ut<et.locationSize;Ut++)y(et.location+Ut,_t/et.locationSize,it,Mt,_t*dt,_t/et.locationSize*Ut*dt,It)}}else if(J!==void 0){const Mt=J[vt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(et.location,Mt);break;case 3:i.vertexAttrib3fv(et.location,Mt);break;case 4:i.vertexAttrib4fv(et.location,Mt);break;default:i.vertexAttrib1fv(et.location,Mt)}}}}E()}function N(){F();for(const M in n){const b=n[M];for(const $ in b){const Y=b[$];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete b[$]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const $ in b){const Y=b[$];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete b[$]}delete n[M.id]}function C(M){for(const b in n){const $=n[b];if($[M.id]===void 0)continue;const Y=$[M.id];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete $[M.id]}}function F(){st(),a=!0,s!==r&&(s=r,c(s.object))}function st(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:st,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:h,disableUnusedAttributes:E}}function Hg(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function o(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];e.update(p,n,1)}function l(c,d,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];for(let x=0;x<u.length;x++)e.update(v,n,u[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:N,maxSamples:P}}function Gg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new li,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=d(f,u,0)},this.setState=function(f,u,p){const v=f.clippingPlanes,x=f.clipIntersection,h=f.clipShadows,g=i.get(f);if(!r||v===null||v.length===0||s&&!h)s?d(null):c();else{const E=s?0:n,y=E*4;let A=g.clippingState||null;l.value=A,A=d(v,u,y,p);for(let N=0;N!==y;++N)A[N]=e[N];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,u,p,v){const x=f!==null?f.length:0;let h=null;if(x!==0){if(h=l.value,v!==!0||h===null){const g=p+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<g)&&(h=new Float32Array(g));for(let y=0,A=p;y!==x;++y,A+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(h,A),h[A+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function $g(i){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=Sr:o===wa&&(a.mapping=Er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===wa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ep(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class _l extends Cu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gr=4,oc=[.125,.215,.35,.446,.526,.582],Ui=20,Qo=new _l,ac=new de;let ta=null,ea=0,na=0,ia=!1;const Pi=(1+Math.sqrt(5))/2,fr=1/Pi,lc=[new G(-Pi,fr,0),new G(Pi,fr,0),new G(-fr,0,Pi),new G(fr,0,Pi),new G(0,Pi,-fr),new G(0,Pi,fr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ts,format:An,colorSpace:vi,depthBuffer:!1},r=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(s)),this._blurMaterial=Xg(s,t,e)}return r}_compileMaterial(t){const e=new In(this._lodPlanes[0],t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,r){const o=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(ac),d.toneMapping=fi,d.autoClear=!1;const p=new Tu({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new In(new is,p);let x=!1;const h=t.background;h?h.isColor&&(p.color.copy(h),t.background=null,x=!0):(p.color.copy(ac),x=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):E===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;Rs(r,E*y,g>2?y:0,y,y),d.setRenderTarget(r),x&&d.render(v,o),d.render(t,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Sr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lc[(r-s-1)%lc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new In(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),x=s/v,h=isFinite(s)?1+Math.floor(d*x):Ui;h>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ui}`);const g=[];let E=0;for(let C=0;C<Ui;++C){const F=C/x,st=Math.exp(-F*F/2);g.push(st),C===0?E+=st:C<h&&(E+=2*st)}for(let C=0;C<g.length;C++)g[C]=g[C]/E;u.envMap.value=t.texture,u.samples.value=h,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-n;const A=this._sizeLods[r],N=3*A*(r>y-gr?r-y+gr:0),P=4*(this._cubeSize-A);Rs(e,N,P,3*A,2*A),l.setRenderTarget(e),l.render(f,Qo)}}function Wg(i){const t=[],e=[],n=[];let r=i;const s=i-gr+1+oc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-gr?l=oc[a-i+gr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,x=3,h=2,g=1,E=new Float32Array(x*v*p),y=new Float32Array(h*v*p),A=new Float32Array(g*v*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,F=P>2?0:-1,st=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];E.set(st,x*v*P),y.set(u,h*v*P);const M=[P,P,P,P,P,P];A.set(M,g*v*P)}const N=new On;N.setAttribute("position",new mn(E,x)),N.setAttribute("uv",new mn(y,h)),N.setAttribute("faceIndex",new mn(A,g)),t.push(N),r>gr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Xg(i,t,e){const n=new Float32Array(Ui),r=new G(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function hc(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function dc(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function qg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===wa,d=l===Sr||l===Er;if(c||d){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new cc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(e===null&&(e=new cc(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jg(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const x=u.morphAttributes[v];for(let h=0,g=x.length;h<g;h++)t.remove(x[h])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const v in u)t.update(u[v],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let h=0,g=x.length;h<g;h++)t.update(x[h],i.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let y=0,A=E.length;y<A;y+=3){const N=E[y+0],P=E[y+1],C=E[y+2];u.push(N,P,P,C,C,N)}}else if(v!==void 0){const E=v.array;x=v.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const N=y+0,P=y+1,C=y+2;u.push(N,P,P,C,C,N)}}else return;const h=new(yu(u)?wu:Au)(u,1);h.version=x;const g=s.get(f);g&&t.remove(g),s.set(f,h)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Kg(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function c(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,s,u*a,v),e.update(p,n,v))}function d(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g];e.update(h,n,1)}function f(u,p,v,x){if(v===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)c(u[g]/a,p[g],x[g]);else{h.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,v);let g=0;for(let E=0;E<v;E++)g+=p[E];for(let E=0;E<x.length;E++)e.update(g,n,x[E])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Zg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Jg(i,t,e){const n=new WeakMap,r=new Re;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let st=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",st)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),x===!0&&(y=3);let A=o.attributes.position.count*y,N=1;A>t.maxTextureSize&&(N=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*N*4*f),C=new bu(P,A,N,f);C.type=jn,C.needsUpdate=!0;const F=y*4;for(let M=0;M<f;M++){const b=h[M],$=g[M],Y=E[M],rt=A*N*4*M;for(let pt=0;pt<b.count;pt++){const J=pt*F;p===!0&&(r.fromBufferAttribute(b,pt),P[rt+J+0]=r.x,P[rt+J+1]=r.y,P[rt+J+2]=r.z,P[rt+J+3]=0),v===!0&&(r.fromBufferAttribute($,pt),P[rt+J+4]=r.x,P[rt+J+5]=r.y,P[rt+J+6]=r.z,P[rt+J+7]=0),x===!0&&(r.fromBufferAttribute(Y,pt),P[rt+J+8]=r.x,P[rt+J+9]=r.y,P[rt+J+10]=r.z,P[rt+J+11]=Y.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new te(A,N)},n.set(o,u),o.addEventListener("dispose",st)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Qg(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Du extends an{constructor(t,e,n,r,s,a,o,l,c,d=xr){if(d!==xr&&d!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===xr&&(n=Bi),n===void 0&&d===Ar&&(n=Tr),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Iu=new an,fc=new Du(1,1),Uu=new bu,Nu=new Bf,Fu=new Pu,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pc[r];if(s===void 0&&(s=new Float32Array(r),pc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function r_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),He(e,n)}}function s_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),He(e,n)}}function o_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),He(e,n)}}function a_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function h_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function f_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function p_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function m_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=xu,s=fc):s=Iu,e.setTexture2D(t||s,r)}function g_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Nu,r)}function __(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Fu,r)}function v_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Uu,r)}function x_(i){switch(i){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return r_;case 35675:return s_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}function y_(i,t){i.uniform1fv(this.addr,t)}function M_(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function b_(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function S_(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function E_(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T_(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A_(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w_(i,t){i.uniform1iv(this.addr,t)}function R_(i,t){i.uniform2iv(this.addr,t)}function C_(i,t){i.uniform3iv(this.addr,t)}function P_(i,t){i.uniform4iv(this.addr,t)}function L_(i,t){i.uniform1uiv(this.addr,t)}function D_(i,t){i.uniform2uiv(this.addr,t)}function I_(i,t){i.uniform3uiv(this.addr,t)}function U_(i,t){i.uniform4uiv(this.addr,t)}function N_(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Iu,s[a])}function F_(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Nu,s[a])}function O_(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Fu,s[a])}function k_(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Uu,s[a])}function B_(i){switch(i){case 5126:return y_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return w_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return D_;case 36295:return I_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return k_}}class z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x_(e.type)}}class H_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B_(e.type)}}class V_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function xc(i,t){i.seq.push(t),i.map[t.id]=t}function G_(i,t,e){const n=i.name,r=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){xc(e,c===void 0?new z_(o,i,t):new H_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new V_(o),xc(e,f)),e=f}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);G_(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $_=37297;let W_=0;function X_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function q_(i){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(i);let n;switch(t===e?n="":t===to&&e===Qs?n="LinearDisplayP3ToLinearSRGB":t===Qs&&e===to&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case ho:return[n,"LinearTransferOETF"];case Pn:case pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+X_(i.getShaderSource(t),a)}else return r}function Y_(i,t){const e=q_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function j_(i,t){let e;switch(t){case uf:e="Linear";break;case hf:e="Reinhard";break;case df:e="Cineon";break;case ff:e="ACESFilmic";break;case mf:e="AgX";break;case gf:e="Neutral";break;case pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new G;function K_(){_e.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function J_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $r(i){return i!==""}function bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(t0,n0)}const e0=new Map;function n0(i,t){let e=ne[t];if(e===void 0){const n=e0.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(i0,r0)}function r0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function s0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function o0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function l0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case lf:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function c0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=s0(e),c=o0(e),d=a0(e),f=l0(e),u=c0(e),p=Z_(e),v=J_(s),x=r.createProgram();let h,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($r).join(`
`),h.length>0&&(h+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($r).join(`
`),g.length>0&&(g+=`
`)):(h=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ne.tonemapping_pars_fragment:"",e.toneMapping!==fi?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Y_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=il(a),a=bc(a,e),a=Sc(a,e),o=il(o),o=bc(o,e),o=Sc(o,e),a=Ec(a),o=Ec(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=E+h+a,A=E+g+o,N=yc(r,r.VERTEX_SHADER,y),P=yc(r,r.FRAGMENT_SHADER,A);r.attachShader(x,N),r.attachShader(x,P),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(b){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(x).trim(),Y=r.getShaderInfoLog(N).trim(),rt=r.getShaderInfoLog(P).trim();let pt=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,N,P);else{const vt=Mc(r,N,"vertex"),et=Mc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+$+`
`+vt+`
`+et)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||rt==="")&&(J=!1);J&&(b.diagnostics={runnable:pt,programLog:$,vertexShader:{log:Y,prefix:h},fragmentShader:{log:rt,prefix:g}})}r.deleteShader(N),r.deleteShader(P),F=new Xs(r,x),st=Q_(r,x)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let st;this.getAttributes=function(){return st===void 0&&C(this),st};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,$_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=P,this}let h0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}}function p0(i,t,e,n,r,s,a){const o=new Su,l=new d0,c=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,$,Y,rt){const pt=Y.fog,J=rt.geometry,vt=M.isMeshStandardMaterial?Y.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||vt),Dt=et&&et.mapping===uo?et.image.height:null,Mt=x[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=_t!==void 0?_t.length:0;let ce=0;J.morphAttributes.position!==void 0&&(ce=1),J.morphAttributes.normal!==void 0&&(ce=2),J.morphAttributes.color!==void 0&&(ce=3);let it,dt,It,Ut;if(Mt){const De=Ln[Mt];it=De.vertexShader,dt=De.fragmentShader}else it=M.vertexShader,dt=M.fragmentShader,l.update(M),It=l.getVertexShaderID(M),Ut=l.getFragmentShaderID(M);const qt=i.getRenderTarget(),zt=rt.isInstancedMesh===!0,ee=rt.isBatchedMesh===!0,ae=!!M.map,Qt=!!M.matcap,D=!!et,xe=!!M.aoMap,Gt=!!M.lightMap,re=!!M.bumpMap,Ot=!!M.normalMap,fe=!!M.displacementMap,$t=!!M.emissiveMap,R=!!M.metalnessMap,S=!!M.roughnessMap,V=M.anisotropy>0,at=M.clearcoat>0,mt=M.dispersion>0,z=M.iridescence>0,Et=M.sheen>0,bt=M.transmission>0,ct=V&&!!M.anisotropyMap,Lt=at&&!!M.clearcoatMap,j=at&&!!M.clearcoatNormalMap,gt=at&&!!M.clearcoatRoughnessMap,At=z&&!!M.iridescenceMap,kt=z&&!!M.iridescenceThicknessMap,Tt=Et&&!!M.sheenColorMap,Ft=Et&&!!M.sheenRoughnessMap,wt=!!M.specularMap,le=!!M.specularColorMap,I=!!M.specularIntensityMap,ht=bt&&!!M.transmissionMap,K=bt&&!!M.thicknessMap,O=!!M.gradientMap,ot=!!M.alphaMap,tt=M.alphaTest>0,Wt=!!M.alphaHash,Kt=!!M.extensions;let he=fi;M.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(he=i.toneMapping);const oe={shaderID:Mt,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:dt,defines:M.defines,customVertexShaderID:It,customFragmentShaderID:Ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ee,batchingColor:ee&&rt._colorsTexture!==null,instancing:zt,instancingColor:zt&&rt.instanceColor!==null,instancingMorph:zt&&rt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:qt===null?i.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:vi,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Qt,envMap:D,envMapMode:D&&et.mapping,envMapCubeUVHeight:Dt,aoMap:xe,lightMap:Gt,bumpMap:re,normalMap:Ot,displacementMap:p&&fe,emissiveMap:$t,normalMapObjectSpace:Ot&&M.normalMapType===yf,normalMapTangentSpace:Ot&&M.normalMapType===vu,metalnessMap:R,roughnessMap:S,anisotropy:V,anisotropyMap:ct,clearcoat:at,clearcoatMap:Lt,clearcoatNormalMap:j,clearcoatRoughnessMap:gt,dispersion:mt,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:Et,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:wt,specularColorMap:le,specularIntensityMap:I,transmission:bt,transmissionMap:ht,thicknessMap:K,gradientMap:O,opaque:M.transparent===!1&&M.blending===vr&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:tt,alphaHash:Wt,combine:M.combine,mapUv:ae&&h(M.map.channel),aoMapUv:xe&&h(M.aoMap.channel),lightMapUv:Gt&&h(M.lightMap.channel),bumpMapUv:re&&h(M.bumpMap.channel),normalMapUv:Ot&&h(M.normalMap.channel),displacementMapUv:fe&&h(M.displacementMap.channel),emissiveMapUv:$t&&h(M.emissiveMap.channel),metalnessMapUv:R&&h(M.metalnessMap.channel),roughnessMapUv:S&&h(M.roughnessMap.channel),anisotropyMapUv:ct&&h(M.anisotropyMap.channel),clearcoatMapUv:Lt&&h(M.clearcoatMap.channel),clearcoatNormalMapUv:j&&h(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&h(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&h(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&h(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&h(M.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&h(M.sheenRoughnessMap.channel),specularMapUv:wt&&h(M.specularMap.channel),specularColorMapUv:le&&h(M.specularColorMap.channel),specularIntensityMapUv:I&&h(M.specularIntensityMap.channel),transmissionMapUv:ht&&h(M.transmissionMap.channel),thicknessMapUv:K&&h(M.thicknessMap.channel),alphaMapUv:ot&&h(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!J.attributes.uv&&(ae||ot),fog:!!pt,useFog:M.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&_e.getTransfer(M.map.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&M.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function E(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)b.push($),b.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(y(b,M),A(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function A(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),M.push(o.mask)}function N(M){const b=x[M.type];let $;if(b){const Y=Ln[b];$=Zf.clone(Y.uniforms)}else $=M.uniforms;return $}function P(M,b){let $;for(let Y=0,rt=d.length;Y<rt;Y++){const pt=d[Y];if(pt.cacheKey===b){$=pt,++$.usedTimes;break}}return $===void 0&&($=new u0(i,b,M,s),d.push($)),$}function C(M){if(--M.usedTimes===0){const b=d.indexOf(M);d[b]=d[d.length-1],d.pop(),M.destroy()}}function F(M){l.remove(M)}function st(){l.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:N,acquireProgram:P,releaseProgram:C,releaseShaderCache:F,programs:d,dispose:st}}function m0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function g0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,u,p,v,x,h){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:u,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:h},i[t]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=p,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=x,g.group=h),t++,g}function o(f,u,p,v,x,h){const g=a(f,u,p,v,x,h);p.transmission>0?n.push(g):p.transparent===!0?r.push(g):e.push(g)}function l(f,u,p,v,x,h){const g=a(f,u,p,v,x,h);p.transmission>0?n.unshift(g):p.transparent===!0?r.unshift(g):e.unshift(g)}function c(f,u){e.length>1&&e.sort(f||g0),n.length>1&&n.sort(u||Ac),r.length>1&&r.sort(u||Ac)}function d(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function _0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new wc,i.set(n,[a])):r>=s.length?(a=new wc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new de};break;case"SpotLight":e={position:new G,direction:new G,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function x0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y0=0;function M0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b0(i){const t=new v0,e=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new Ae,a=new Ae;function o(c){let d=0,f=0,u=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let p=0,v=0,x=0,h=0,g=0,E=0,y=0,A=0,N=0,P=0,C=0;c.sort(M0);for(let st=0,M=c.length;st<M;st++){const b=c[st],$=b.color,Y=b.intensity,rt=b.distance,pt=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=$.r*Y,f+=$.g*Y,u+=$.b*Y;else if(b.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(b.sh.coefficients[J],Y);C++}else if(b.isDirectionalLight){const J=t.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const vt=b.shadow,et=e.get(b);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=pt,n.directionalShadowMatrix[p]=b.shadow.matrix,E++}n.directional[p]=J,p++}else if(b.isSpotLight){const J=t.get(b);J.position.setFromMatrixPosition(b.matrixWorld),J.color.copy($).multiplyScalar(Y),J.distance=rt,J.coneCos=Math.cos(b.angle),J.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),J.decay=b.decay,n.spot[x]=J;const vt=b.shadow;if(b.map&&(n.spotLightMap[N]=b.map,N++,vt.updateMatrices(b),b.castShadow&&P++),n.spotLightMatrix[x]=vt.matrix,b.castShadow){const et=e.get(b);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=pt,A++}x++}else if(b.isRectAreaLight){const J=t.get(b);J.color.copy($).multiplyScalar(Y),J.halfWidth.set(b.width*.5,0,0),J.halfHeight.set(0,b.height*.5,0),n.rectArea[h]=J,h++}else if(b.isPointLight){const J=t.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),J.distance=b.distance,J.decay=b.decay,b.castShadow){const vt=b.shadow,et=e.get(b);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,et.shadowCameraNear=vt.camera.near,et.shadowCameraFar=vt.camera.far,n.pointShadow[v]=et,n.pointShadowMap[v]=pt,n.pointShadowMatrix[v]=b.shadow.matrix,y++}n.point[v]=J,v++}else if(b.isHemisphereLight){const J=t.get(b);J.skyColor.copy(b.color).multiplyScalar(Y),J.groundColor.copy(b.groundColor).multiplyScalar(Y),n.hemi[g]=J,g++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==p||F.pointLength!==v||F.spotLength!==x||F.rectAreaLength!==h||F.hemiLength!==g||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==A||F.numSpotMaps!==N||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=h,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,F.directionalLength=p,F.pointLength=v,F.spotLength=x,F.rectAreaLength=h,F.hemiLength=g,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=A,F.numSpotMaps=N,F.numLightProbes=C,n.version=y0++)}function l(c,d){let f=0,u=0,p=0,v=0,x=0;const h=d.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){const y=c[g];if(y.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),f++}else if(y.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),p++}else if(y.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),a.identity(),s.copy(y.matrixWorld),s.premultiply(h),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const A=n.point[u];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),u++}else if(y.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(h),x++}}}return{setup:o,setupView:l,state:n}}function Rc(i){const t=new b0(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function S0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Rc(i),t.set(r,[o])):s>=a.length?(o=new Rc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class E0 extends Cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T0 extends Cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`;function R0(i,t,e){let n=new gl;const r=new te,s=new te,a=new Re,o=new E0({depthPacking:xf}),l=new T0,c={},d=e.maxTextureSize,f={[mi]:on,[on]:mi,[Yn]:Yn},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:A0,fragmentShader:w0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new In(v,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let g=this.type;this.render=function(P,C,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const st=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),$=i.state;$.setBlending(di),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Y=g!==qn&&this.type===qn,rt=g===qn&&this.type!==qn;for(let pt=0,J=P.length;pt<J;pt++){const vt=P[pt],et=vt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const Dt=et.getFrameExtents();if(r.multiply(Dt),s.copy(et.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Dt.x),r.x=s.x*Dt.x,et.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Dt.y),r.y=s.y*Dt.y,et.mapSize.y=s.y)),et.map===null||Y===!0||rt===!0){const _t=this.type!==qn?{minFilter:pn,magFilter:pn}:{};et.map!==null&&et.map.dispose(),et.map=new zi(r.x,r.y,_t),et.map.texture.name=vt.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const Mt=et.getViewportCount();for(let _t=0;_t<Mt;_t++){const se=et.getViewport(_t);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),$.viewport(a),et.updateMatrices(vt,_t),n=et.getFrustum(),A(C,F,et.camera,vt,this.type)}et.isPointLightShadow!==!0&&this.type===qn&&E(et,F),et.needsUpdate=!1}g=this.type,h.needsUpdate=!1,i.setRenderTarget(st,M,b)};function E(P,C){const F=t.update(x);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zi(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,F,u,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,F,p,x,null)}function y(P,C,F,st){let M=null;const b=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)M=b;else if(M=F.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=M.uuid,Y=C.uuid;let rt=c[$];rt===void 0&&(rt={},c[$]=rt);let pt=rt[Y];pt===void 0&&(pt=M.clone(),rt[Y]=pt,C.addEventListener("dispose",N)),M=pt}if(M.visible=C.visible,M.wireframe=C.wireframe,st===qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=F}return M}function A(P,C,F,st,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===qn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const Y=t.update(P),rt=P.material;if(Array.isArray(rt)){const pt=Y.groups;for(let J=0,vt=pt.length;J<vt;J++){const et=pt[J],Dt=rt[et.materialIndex];if(Dt&&Dt.visible){const Mt=y(P,Dt,st,M);P.onBeforeShadow(i,P,C,F,Y,Mt,et),i.renderBufferDirect(F,null,Y,Mt,P,et),P.onAfterShadow(i,P,C,F,Y,Mt,et)}}}else if(rt.visible){const pt=y(P,rt,st,M);P.onBeforeShadow(i,P,C,F,Y,pt,null),i.renderBufferDirect(F,null,Y,pt,P,null),P.onAfterShadow(i,P,C,F,Y,pt,null)}}const $=P.children;for(let Y=0,rt=$.length;Y<rt;Y++)A($[Y],C,F,st,M)}function N(P){P.target.removeEventListener("dispose",N);for(const F in c){const st=c[F],M=P.target.uuid;M in st&&(st[M].dispose(),delete st[M])}}}const C0={[xa]:ya,[Ma]:Ea,[ba]:Ta,[br]:Sa,[ya]:xa,[Ea]:Ma,[Ta]:ba,[Sa]:br};function P0(i){function t(){let I=!1;const ht=new Re;let K=null;const O=new Re(0,0,0,0);return{setMask:function(ot){K!==ot&&!I&&(i.colorMask(ot,ot,ot,ot),K=ot)},setLocked:function(ot){I=ot},setClear:function(ot,tt,Wt,Kt,he){he===!0&&(ot*=Kt,tt*=Kt,Wt*=Kt),ht.set(ot,tt,Wt,Kt),O.equals(ht)===!1&&(i.clearColor(ot,tt,Wt,Kt),O.copy(ht))},reset:function(){I=!1,K=null,O.set(-1,0,0,0)}}}function e(){let I=!1,ht=!1,K=null,O=null,ot=null;return{setReversed:function(tt){ht=tt},setTest:function(tt){tt?It(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(tt){K!==tt&&!I&&(i.depthMask(tt),K=tt)},setFunc:function(tt){if(ht&&(tt=C0[tt]),O!==tt){switch(tt){case xa:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=tt}},setLocked:function(tt){I=tt},setClear:function(tt){ot!==tt&&(i.clearDepth(tt),ot=tt)},reset:function(){I=!1,K=null,O=null,ot=null}}}function n(){let I=!1,ht=null,K=null,O=null,ot=null,tt=null,Wt=null,Kt=null,he=null;return{setTest:function(oe){I||(oe?It(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!I&&(i.stencilMask(oe),ht=oe)},setFunc:function(oe,De,qe){(K!==oe||O!==De||ot!==qe)&&(i.stencilFunc(oe,De,qe),K=oe,O=De,ot=qe)},setOp:function(oe,De,qe){(tt!==oe||Wt!==De||Kt!==qe)&&(i.stencilOp(oe,De,qe),tt=oe,Wt=De,Kt=qe)},setLocked:function(oe){I=oe},setClear:function(oe){he!==oe&&(i.clearStencil(oe),he=oe)},reset:function(){I=!1,ht=null,K=null,O=null,ot=null,tt=null,Wt=null,Kt=null,he=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,u=[],p=null,v=!1,x=null,h=null,g=null,E=null,y=null,A=null,N=null,P=new de(0,0,0),C=0,F=!1,st=null,M=null,b=null,$=null,Y=null;const rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,J=0;const vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(vt)[1]),pt=J>=1):vt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),pt=J>=2);let et=null,Dt={};const Mt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),se=new Re().fromArray(Mt),ce=new Re().fromArray(_t);function it(I,ht,K,O){const ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(I,tt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<K;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ht+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}const dt={};dt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),It(i.DEPTH_TEST),s.setFunc(br),Gt(!1),re(Fl),It(i.CULL_FACE),D(di);function It(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function Ut(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function qt(I,ht){return d[I]!==ht?(i.bindFramebuffer(I,ht),d[I]=ht,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function zt(I,ht){let K=u,O=!1;if(I){K=f.get(ht),K===void 0&&(K=[],f.set(ht,K));const ot=I.textures;if(K.length!==ot.length||K[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Wt=ot.length;tt<Wt;tt++)K[tt]=i.COLOR_ATTACHMENT0+tt;K.length=ot.length,O=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,O=!0);O&&i.drawBuffers(K)}function ee(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ae={[Ii]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[Wd]:i.FUNC_REVERSE_SUBTRACT};ae[Xd]=i.MIN,ae[qd]=i.MAX;const Qt={[Yd]:i.ZERO,[jd]:i.ONE,[Kd]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[sf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ht,K,O,ot,tt,Wt,Kt,he,oe){if(I===di){v===!0&&(Ut(i.BLEND),v=!1);return}if(v===!1&&(It(i.BLEND),v=!0),I!==Gd){if(I!==x||oe!==F){if((h!==Ii||y!==Ii)&&(i.blendEquation(i.FUNC_ADD),h=Ii,y=Ii),oe)switch(I){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,E=null,A=null,N=null,P.set(0,0,0),C=0,x=I,F=oe}return}ot=ot||ht,tt=tt||K,Wt=Wt||O,(ht!==h||ot!==y)&&(i.blendEquationSeparate(ae[ht],ae[ot]),h=ht,y=ot),(K!==g||O!==E||tt!==A||Wt!==N)&&(i.blendFuncSeparate(Qt[K],Qt[O],Qt[tt],Qt[Wt]),g=K,E=O,A=tt,N=Wt),(Kt.equals(P)===!1||he!==C)&&(i.blendColor(Kt.r,Kt.g,Kt.b,he),P.copy(Kt),C=he),x=I,F=!1}function xe(I,ht){I.side===Yn?Ut(i.CULL_FACE):It(i.CULL_FACE);let K=I.side===on;ht&&(K=!K),Gt(K),I.blending===vr&&I.transparent===!1?D(di):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const O=I.stencilWrite;a.setTest(O),O&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),fe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){st!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),st=I)}function re(I){I!==zd?(It(i.CULL_FACE),I!==M&&(I===Fl?i.cullFace(i.BACK):I===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),M=I}function Ot(I){I!==b&&(pt&&i.lineWidth(I),b=I)}function fe(I,ht,K){I?(It(i.POLYGON_OFFSET_FILL),($!==ht||Y!==K)&&(i.polygonOffset(ht,K),$=ht,Y=K)):Ut(i.POLYGON_OFFSET_FILL)}function $t(I){I?It(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+rt-1),et!==I&&(i.activeTexture(I),et=I)}function S(I,ht,K){K===void 0&&(et===null?K=i.TEXTURE0+rt-1:K=et);let O=Dt[K];O===void 0&&(O={type:void 0,texture:void 0},Dt[K]=O),(O.type!==I||O.texture!==ht)&&(et!==K&&(i.activeTexture(K),et=K),i.bindTexture(I,ht||dt[I]),O.type=I,O.texture=ht)}function V(){const I=Dt[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Tt(I){ce.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ce.copy(I))}function Ft(I,ht){let K=l.get(ht);K===void 0&&(K=new WeakMap,l.set(ht,K));let O=K.get(I);O===void 0&&(O=i.getUniformBlockIndex(ht,I.name),K.set(I,O))}function wt(I,ht){const O=l.get(ht).get(I);o.get(ht)!==O&&(i.uniformBlockBinding(ht,O,I.__bindingPointIndex),o.set(ht,O))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},et=null,Dt={},d={},f=new WeakMap,u=[],p=null,v=!1,x=null,h=null,g=null,E=null,y=null,A=null,N=null,P=new de(0,0,0),C=0,F=!1,st=null,M=null,b=null,$=null,Y=null,se.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:It,disable:Ut,bindFramebuffer:qt,drawBuffers:zt,useProgram:ee,setBlending:D,setMaterial:xe,setFlipSided:Gt,setCullFace:re,setLineWidth:Ot,setPolygonOffset:fe,setScissorTest:$t,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:at,compressedTexImage3D:mt,texImage2D:gt,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:wt,texStorage2D:Lt,texStorage3D:j,texSubImage2D:z,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:ct,scissor:kt,viewport:Tt,reset:le}}function Cc(i,t,e,n){const r=L0(n);switch(e){case hu:return i*t;case fu:return i*t;case pu:return i*t*2;case mu:return i*t/r.components*r.byteLength;case hl:return i*t/r.components*r.byteLength;case gu:return i*t*2/r.components*r.byteLength;case dl:return i*t*2/r.components*r.byteLength;case du:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case fl:return i*t*4/r.components*r.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _u:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(i){switch(i){case Zn:case lu:return{byteLength:1,components:1};case Qr:case cu:case ts:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case Bi:case ll:case jn:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):no("canvas")}function x(R,S,V){let at=1;const mt=$t(R);if((mt.width>V||mt.height>V)&&(at=V/Math.max(mt.width,mt.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const z=Math.floor(at*mt.width),Et=Math.floor(at*mt.height);f===void 0&&(f=v(z,Et));const bt=S?v(z,Et):f;return bt.width=z,bt.height=Et,bt.getContext("2d").drawImage(R,0,0,z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+z+"x"+Et+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==pn&&R.minFilter!==Tn}function g(R){i.generateMipmap(R)}function E(R,S,V,at,mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let z=S;if(S===i.RED&&(V===i.FLOAT&&(z=i.R32F),V===i.HALF_FLOAT&&(z=i.R16F),V===i.UNSIGNED_BYTE&&(z=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.R8UI),V===i.UNSIGNED_SHORT&&(z=i.R16UI),V===i.UNSIGNED_INT&&(z=i.R32UI),V===i.BYTE&&(z=i.R8I),V===i.SHORT&&(z=i.R16I),V===i.INT&&(z=i.R32I)),S===i.RG&&(V===i.FLOAT&&(z=i.RG32F),V===i.HALF_FLOAT&&(z=i.RG16F),V===i.UNSIGNED_BYTE&&(z=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RG8UI),V===i.UNSIGNED_SHORT&&(z=i.RG16UI),V===i.UNSIGNED_INT&&(z=i.RG32UI),V===i.BYTE&&(z=i.RG8I),V===i.SHORT&&(z=i.RG16I),V===i.INT&&(z=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(z=i.RGB16UI),V===i.UNSIGNED_INT&&(z=i.RGB32UI),V===i.BYTE&&(z=i.RGB8I),V===i.SHORT&&(z=i.RGB16I),V===i.INT&&(z=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),V===i.UNSIGNED_INT&&(z=i.RGBA32UI),V===i.BYTE&&(z=i.RGBA8I),V===i.SHORT&&(z=i.RGBA16I),V===i.INT&&(z=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),S===i.RGBA){const Et=mt?Js:_e.getTransfer(at);V===i.FLOAT&&(z=i.RGBA32F),V===i.HALF_FLOAT&&(z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(z=Et===be?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(R,S){let V;return R?S===null||S===Bi||S===Tr?V=i.DEPTH24_STENCIL8:S===jn?V=i.DEPTH32F_STENCIL8:S===Qr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bi||S===Tr?V=i.DEPTH_COMPONENT24:S===jn?V=i.DEPTH_COMPONENT32F:S===Qr&&(V=i.DEPTH_COMPONENT16),V}function A(R,S){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){const S=R.target;S.removeEventListener("dispose",N),C(S),S.isVideoTexture&&d.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),st(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const V=R.source,at=u.get(V);if(at){const mt=at[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&F(R),Object.keys(at).length===0&&u.delete(V)}n.remove(R)}function F(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const V=R.source,at=u.get(V);delete at[S.__cacheKey],a.memory.textures--}function st(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let mt=0;mt<S.__webglFramebuffer[at].length;mt++)i.deleteFramebuffer(S.__webglFramebuffer[at][mt]);else i.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)i.deleteFramebuffer(S.__webglFramebuffer[at]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let at=0,mt=V.length;at<mt;at++){const z=n.get(V[at]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(V[at])}n.remove(R)}let M=0;function b(){M=0}function $(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function rt(R,S){const V=n.get(R);if(R.isVideoTexture&&Ot(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const at=R.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,R,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function pt(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function J(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function vt(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){it(V,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const et={[Ra]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},Dt={[pn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Mf]:i.NEVER,[wf]:i.ALWAYS,[bf]:i.LESS,[xu]:i.LEQUAL,[Sf]:i.EQUAL,[Af]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function _t(R,S){if(S.type===jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===Po||S.magFilter===cs||S.magFilter===Fi||S.minFilter===Tn||S.minFilter===Po||S.minFilter===cs||S.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Dt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Dt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==cs&&S.minFilter!==Fi||S.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function se(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N));const at=S.source;let mt=u.get(at);mt===void 0&&(mt={},u.set(at,mt));const z=Y(S);if(z!==R.__cacheKey){mt[z]===void 0&&(mt[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),mt[z].usedTimes++;const Et=mt[R.__cacheKey];Et!==void 0&&(mt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&F(S)),R.__cacheKey=z,R.__webglTexture=mt[z].texture}return V}function ce(R,S,V){let at=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=i.TEXTURE_3D);const mt=se(R,S),z=S.source;e.bindTexture(at,R.__webglTexture,i.TEXTURE0+V);const Et=n.get(z);if(z.version!==Et.__version||mt===!0){e.activeTexture(i.TEXTURE0+V);const bt=_e.getPrimaries(_e.workingColorSpace),ct=S.colorSpace===ui?null:_e.getPrimaries(S.colorSpace),Lt=S.colorSpace===ui||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let j=x(S.image,!1,r.maxTextureSize);j=fe(S,j);const gt=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let kt=E(S.internalFormat,gt,At,S.colorSpace,S.isVideoTexture);_t(at,S);let Tt;const Ft=S.mipmaps,wt=S.isVideoTexture!==!0,le=Et.__version===void 0||mt===!0,I=z.dataReady,ht=A(S,j);if(S.isDepthTexture)kt=y(S.format===Ar,S.type),le&&(wt?e.texStorage2D(i.TEXTURE_2D,1,kt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,kt,j.width,j.height,0,gt,At,null));else if(S.isDataTexture)if(Ft.length>0){wt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,Ft[0].width,Ft[0].height);for(let K=0,O=Ft.length;K<O;K++)Tt=Ft[K],wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,gt,At,Tt.data);S.generateMipmaps=!1}else wt?(le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,j.width,j.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,gt,At,j.data)):e.texImage2D(i.TEXTURE_2D,0,kt,j.width,j.height,0,gt,At,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){wt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,kt,Ft[0].width,Ft[0].height,j.depth);for(let K=0,O=Ft.length;K<O;K++)if(Tt=Ft[K],S.format!==An)if(gt!==null)if(wt){if(I)if(S.layerUpdates.size>0){const ot=Cc(Tt.width,Tt.height,S.format,S.type);for(const tt of S.layerUpdates){const Wt=Tt.data.subarray(tt*ot/Tt.data.BYTES_PER_ELEMENT,(tt+1)*ot/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,tt,Tt.width,Tt.height,1,gt,Wt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,j.depth,gt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,kt,Tt.width,Tt.height,j.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,j.depth,gt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,kt,Tt.width,Tt.height,j.depth,0,gt,At,Tt.data)}else{wt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,Ft[0].width,Ft[0].height);for(let K=0,O=Ft.length;K<O;K++)Tt=Ft[K],S.format!==An?gt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,K,kt,Tt.width,Tt.height,0,gt,At,Tt.data)}else if(S.isDataArrayTexture)if(wt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,kt,j.width,j.height,j.depth),I)if(S.layerUpdates.size>0){const K=Cc(j.width,j.height,S.format,S.type);for(const O of S.layerUpdates){const ot=j.data.subarray(O*K/j.data.BYTES_PER_ELEMENT,(O+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,j.width,j.height,1,gt,At,ot)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,gt,At,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,j.width,j.height,j.depth,0,gt,At,j.data);else if(S.isData3DTexture)wt?(le&&e.texStorage3D(i.TEXTURE_3D,ht,kt,j.width,j.height,j.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,gt,At,j.data)):e.texImage3D(i.TEXTURE_3D,0,kt,j.width,j.height,j.depth,0,gt,At,j.data);else if(S.isFramebufferTexture){if(le)if(wt)e.texStorage2D(i.TEXTURE_2D,ht,kt,j.width,j.height);else{let K=j.width,O=j.height;for(let ot=0;ot<ht;ot++)e.texImage2D(i.TEXTURE_2D,ot,kt,K,O,0,gt,At,null),K>>=1,O>>=1}}else if(Ft.length>0){if(wt&&le){const K=$t(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ht,kt,K.width,K.height)}for(let K=0,O=Ft.length;K<O;K++)Tt=Ft[K],wt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt,At,Tt):e.texImage2D(i.TEXTURE_2D,K,kt,gt,At,Tt);S.generateMipmaps=!1}else if(wt){if(le){const K=$t(j);e.texStorage2D(i.TEXTURE_2D,ht,kt,K.width,K.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,j)}else e.texImage2D(i.TEXTURE_2D,0,kt,gt,At,j);h(S)&&g(at),Et.__version=z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function it(R,S,V){if(S.image.length!==6)return;const at=se(R,S),mt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const z=n.get(mt);if(mt.version!==z.__version||at===!0){e.activeTexture(i.TEXTURE0+V);const Et=_e.getPrimaries(_e.workingColorSpace),bt=S.colorSpace===ui?null:_e.getPrimaries(S.colorSpace),ct=S.colorSpace===ui||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let O=0;O<6;O++)!Lt&&!j?gt[O]=x(S.image[O],!0,r.maxCubemapSize):gt[O]=j?S.image[O].image:S.image[O],gt[O]=fe(S,gt[O]);const At=gt[0],kt=s.convert(S.format,S.colorSpace),Tt=s.convert(S.type),Ft=E(S.internalFormat,kt,Tt,S.colorSpace),wt=S.isVideoTexture!==!0,le=z.__version===void 0||at===!0,I=mt.dataReady;let ht=A(S,At);_t(i.TEXTURE_CUBE_MAP,S);let K;if(Lt){wt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,At.width,At.height);for(let O=0;O<6;O++){K=gt[O].mipmaps;for(let ot=0;ot<K.length;ot++){const tt=K[ot];S.format!==An?kt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,0,0,tt.width,tt.height,kt,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,Ft,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,0,0,tt.width,tt.height,kt,Tt,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,Ft,tt.width,tt.height,0,kt,Tt,tt.data)}}}else{if(K=S.mipmaps,wt&&le){K.length>0&&ht++;const O=$t(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,O.width,O.height)}for(let O=0;O<6;O++)if(j){wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,gt[O].width,gt[O].height,kt,Tt,gt[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ft,gt[O].width,gt[O].height,0,kt,Tt,gt[O].data);for(let ot=0;ot<K.length;ot++){const Wt=K[ot].image[O].image;wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,0,0,Wt.width,Wt.height,kt,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,Ft,Wt.width,Wt.height,0,kt,Tt,Wt.data)}}else{wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,kt,Tt,gt[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ft,kt,Tt,gt[O]);for(let ot=0;ot<K.length;ot++){const tt=K[ot];wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,0,0,kt,Tt,tt.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,Ft,kt,Tt,tt.image[O])}}}h(S)&&g(i.TEXTURE_CUBE_MAP),z.__version=mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function dt(R,S,V,at,mt,z){const Et=s.convert(V.format,V.colorSpace),bt=s.convert(V.type),ct=E(V.internalFormat,Et,bt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const j=Math.max(1,S.width>>z),gt=Math.max(1,S.height>>z);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,z,ct,j,gt,S.depth,0,Et,bt,null):e.texImage2D(mt,z,ct,j,gt,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,mt,n.get(V).__webglTexture,0,Gt(S)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,mt,n.get(V).__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(R,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const at=S.depthTexture,mt=at&&at.isDepthTexture?at.type:null,z=y(S.stencilBuffer,mt),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=Gt(S);re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,z,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const at=S.textures;for(let mt=0;mt<at.length;mt++){const z=at[mt],Et=s.convert(z.format,z.colorSpace),bt=s.convert(z.type),ct=E(z.internalFormat,Et,bt,z.colorSpace),Lt=Gt(S);V&&re(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ct,S.width,S.height):re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ct,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt(S.depthTexture,0);const at=n.get(S.depthTexture).__webglTexture,mt=Gt(S);if(S.depthTexture.format===xr)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(S.depthTexture.format===Ar)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function qt(R){const S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const at=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),at){const mt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,at.removeEventListener("dispose",mt)};at.addEventListener("dispose",mt),S.__depthDisposeCallback=mt}S.__boundDepthTexture=at}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]===void 0)S.__webglDepthbuffer[at]=i.createRenderbuffer(),It(S.__webglDepthbuffer[at],R,!1);else{const mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),It(S.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,S,V){const at=n.get(R);S!==void 0&&dt(at.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&qt(R)}function ee(R){const S=R.texture,V=n.get(R),at=n.get(S);R.addEventListener("dispose",P);const mt=R.textures,z=R.isWebGLCubeRenderTarget===!0,Et=mt.length>1;if(Et||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=S.version,a.memory.textures++),z){V.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[bt]=[];for(let ct=0;ct<S.mipmaps.length;ct++)V.__webglFramebuffer[bt][ct]=i.createFramebuffer()}else V.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)V.__webglFramebuffer[bt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,ct=mt.length;bt<ct;bt++){const Lt=n.get(mt[bt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let bt=0;bt<mt.length;bt++){const ct=mt[bt];V.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[bt]);const Lt=s.convert(ct.format,ct.colorSpace),j=s.convert(ct.type),gt=E(ct.internalFormat,Lt,j,ct.colorSpace,R.isXRRenderTarget===!0),At=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,V.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),It(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_t(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)dt(V.__webglFramebuffer[bt][ct],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ct);else dt(V.__webglFramebuffer[bt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);h(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,ct=mt.length;bt<ct;bt++){const Lt=mt[bt],j=n.get(Lt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),_t(i.TEXTURE_2D,Lt),dt(V.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),h(Lt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,at.__webglTexture),_t(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)dt(V.__webglFramebuffer[ct],R,S,i.COLOR_ATTACHMENT0,bt,ct);else dt(V.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,bt,0);h(S)&&g(bt),e.unbindTexture()}R.depthBuffer&&qt(R)}function ae(R){const S=R.textures;for(let V=0,at=S.length;V<at;V++){const mt=S[V];if(h(mt)){const z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(mt).__webglTexture;e.bindTexture(z,Et),g(z),e.unbindTexture()}}}const Qt=[],D=[];function xe(R){if(R.samples>0){if(re(R)===!1){const S=R.textures,V=R.width,at=R.height;let mt=i.COLOR_BUFFER_BIT;const z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),bt=S.length>1;if(bt)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ct]);const Lt=n.get(S[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,V,at,0,0,V,at,mt,i.NEAREST),l===!0&&(Qt.length=0,D.length=0,Qt.push(i.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qt.push(z),D.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ct]);const Lt=n.get(S[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(R){return Math.min(r.maxSamples,R.samples)}function re(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function fe(R,S){const V=R.colorSpace,at=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==vi&&V!==ui&&(_e.getTransfer(V)===be?(at!==An||mt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=b,this.setTexture2D=rt,this.setTexture2DArray=pt,this.setTexture3D=J,this.setTextureCube=vt,this.rebindTextures=zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=re}function I0(i,t){function e(n,r=ui){let s;const a=_e.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===du)return i.RGB;if(n===An)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===Vs||n===Gs)if(a===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ua||n===Na)return a===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===ka||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===$a||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===Za||n===Ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===$s)return a===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===Qa||n===tl||n===el)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class U0 extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ps extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),g=this._getHandJoint(c,x);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new an,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gi({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends $i{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,v=null;const x=new k0,h=e.getContextAttributes();let g=null,E=null;const y=[],A=[],N=new te;let P=null;const C=new Sn;C.layers.enable(1),C.viewport=new Re;const F=new Sn;F.layers.enable(2),F.viewport=new Re;const st=[C,F],M=new U0;M.layers.enable(1),M.layers.enable(2);let b=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=y[it];return dt===void 0&&(dt=new sa,y[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=y[it];return dt===void 0&&(dt=new sa,y[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=y[it];return dt===void 0&&(dt=new sa,y[it]=dt),dt.getHandSpace()};function Y(it){const dt=A.indexOf(it.inputSource);if(dt===-1)return;const It=y[dt];It!==void 0&&(It.update(it.inputSource,it.frame,c||a),It.dispatchEvent({type:it.type,data:it.inputSource}))}function rt(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",rt),r.removeEventListener("inputsourceschange",pt);for(let it=0;it<y.length;it++){const dt=A[it];dt!==null&&(A[it]=null,y[it].disconnect(dt))}b=null,$=null,x.reset(),t.setRenderTarget(g),p=null,u=null,f=null,r=null,E=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",rt),r.addEventListener("inputsourceschange",pt),h.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const dt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new zi(p.framebufferWidth,p.framebufferHeight,{format:An,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let dt=null,It=null,Ut=null;h.depth&&(Ut=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=h.stencil?Ar:xr,It=h.stencil?Tr:Bi);const qt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};f=new XRWebGLBinding(r,e),u=f.createProjectionLayer(qt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new zi(u.textureWidth,u.textureHeight,{format:An,type:Zn,depthTexture:new Du(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function pt(it){for(let dt=0;dt<it.removed.length;dt++){const It=it.removed[dt],Ut=A.indexOf(It);Ut>=0&&(A[Ut]=null,y[Ut].disconnect(It))}for(let dt=0;dt<it.added.length;dt++){const It=it.added[dt];let Ut=A.indexOf(It);if(Ut===-1){for(let zt=0;zt<y.length;zt++)if(zt>=A.length){A.push(It),Ut=zt;break}else if(A[zt]===null){A[zt]=It,Ut=zt;break}if(Ut===-1)break}const qt=y[Ut];qt&&qt.connect(It)}}const J=new G,vt=new G;function et(it,dt,It){J.setFromMatrixPosition(dt.matrixWorld),vt.setFromMatrixPosition(It.matrixWorld);const Ut=J.distanceTo(vt),qt=dt.projectionMatrix.elements,zt=It.projectionMatrix.elements,ee=qt[14]/(qt[10]-1),ae=qt[14]/(qt[10]+1),Qt=(qt[9]+1)/qt[5],D=(qt[9]-1)/qt[5],xe=(qt[8]-1)/qt[0],Gt=(zt[8]+1)/zt[0],re=ee*xe,Ot=ee*Gt,fe=Ut/(-xe+Gt),$t=fe*-xe;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX($t),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),qt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const R=ee+fe,S=ae+fe,V=re-$t,at=Ot+(Ut-$t),mt=Qt*ae/S*R,z=D*ae/S*R;it.projectionMatrix.makePerspective(V,at,mt,z,R,S),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Dt(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let dt=it.near,It=it.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(It=x.depthFar)),M.near=F.near=C.near=dt,M.far=F.far=C.far=It,(b!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,$=M.far);const Ut=it.parent,qt=M.cameras;Dt(M,Ut);for(let zt=0;zt<qt.length;zt++)Dt(qt[zt],Ut);qt.length===2?et(M,C,F):M.projectionMatrix.copy(C.projectionMatrix),Mt(it,M,Ut)};function Mt(it,dt,It){It===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(It.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=nl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _t=null;function se(it,dt){if(d=dt.getViewerPose(c||a),v=dt,d!==null){const It=d.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Ut=!1;It.length!==M.cameras.length&&(M.cameras.length=0,Ut=!0);for(let zt=0;zt<It.length;zt++){const ee=It[zt];let ae=null;if(p!==null)ae=p.getViewport(ee);else{const D=f.getViewSubImage(u,ee);ae=D.viewport,zt===0&&(t.setRenderTargetTextures(E,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(E))}let Qt=st[zt];Qt===void 0&&(Qt=new Sn,Qt.layers.enable(zt),Qt.viewport=new Re,st[zt]=Qt),Qt.matrix.fromArray(ee.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ee.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ae.x,ae.y,ae.width,ae.height),zt===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ut===!0&&M.cameras.push(Qt)}const qt=r.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const zt=f.getDepthInformation(It[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,r.renderState)}}for(let It=0;It<y.length;It++){const Ut=A[It],qt=y[It];Ut!==null&&qt!==void 0&&qt.update(Ut,dt,c||a)}_t&&_t(it,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),v=null}const ce=new Lu;ce.setAnimationLoop(se),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const wi=new Fn,z0=new Ae;function H0(i,t){function e(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function n(h,g){g.color.getRGB(h.fogColor.value,Ru(i)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function r(h,g,E,y,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(h,g):g.isMeshToonMaterial?(s(h,g),f(h,g)):g.isMeshPhongMaterial?(s(h,g),d(h,g)):g.isMeshStandardMaterial?(s(h,g),u(h,g),g.isMeshPhysicalMaterial&&p(h,g,A)):g.isMeshMatcapMaterial?(s(h,g),v(h,g)):g.isMeshDepthMaterial?s(h,g):g.isMeshDistanceMaterial?(s(h,g),x(h,g)):g.isMeshNormalMaterial?s(h,g):g.isLineBasicMaterial?(a(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?l(h,g,E,y):g.isSpriteMaterial?c(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,e(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===on&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,e(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===on&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,e(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,e(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const E=t.get(g),y=E.envMap,A=E.envMapRotation;y&&(h.envMap.value=y,wi.copy(A),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(wi)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap&&(h.lightMap.value=g.lightMap,h.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,h.lightMapTransform)),g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,h.aoMapTransform))}function a(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function l(h,g,E,y){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*E,h.scale.value=y*.5,g.map&&(h.map.value=g.map,e(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function c(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function d(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function f(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function u(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,h.roughnessMapTransform)),g.envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function p(h,g,E){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&h.clearcoatNormalScale.value.negate())),g.dispersion>0&&(h.dispersion.value=g.dispersion),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,g){g.matcap&&(h.matcap.value=g.matcap)}function x(h,g){const E=t.get(g).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const A=y.program;n.uniformBlockBinding(E,A)}function c(E,y){let A=r[E.id];A===void 0&&(v(E),A=d(E),r[E.id]=A,E.addEventListener("dispose",h));const N=y.program;n.updateUBOMapping(E,N);const P=t.render.frame;s[E.id]!==P&&(u(E),s[E.id]=P)}function d(E){const y=f();E.__bindingPointIndex=y;const A=i.createBuffer(),N=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const y=r[E.id],A=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,C=A.length;P<C;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let st=0,M=F.length;st<M;st++){const b=F[st];if(p(b,P,st,N)===!0){const $=b.__offset,Y=Array.isArray(b.value)?b.value:[b.value];let rt=0;for(let pt=0;pt<Y.length;pt++){const J=Y[pt],vt=x(J);typeof J=="number"||typeof J=="boolean"?(b.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,$+rt,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=0,b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=0,b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=0):(J.toArray(b.__data,rt),rt+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,A,N){const P=E.value,C=y+"_"+A;if(N[C]===void 0)return typeof P=="number"||typeof P=="boolean"?N[C]=P:N[C]=P.clone(),!0;{const F=N[C];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return N[C]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(E){const y=E.uniforms;let A=0;const N=16;for(let C=0,F=y.length;C<F;C++){const st=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,b=st.length;M<b;M++){const $=st[M],Y=Array.isArray($.value)?$.value:[$.value];for(let rt=0,pt=Y.length;rt<pt;rt++){const J=Y[rt],vt=x(J),et=A%N,Dt=et%vt.boundary,Mt=et+Dt;A+=Dt,Mt!==0&&N-Mt<vt.storage&&(A+=N-Mt),$.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=vt.storage}}}const P=A%N;return P>0&&(A+=N-P),E.__size=A,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function h(E){const y=E.target;y.removeEventListener("dispose",h);const A=a.indexOf(y.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}class Ou{constructor(t={}){const{canvas:e=Pf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,h=null;const g=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=fi,this.toneMappingExposure=1;const y=this;let A=!1,N=0,P=0,C=null,F=-1,st=null;const M=new Re,b=new Re;let $=null;const Y=new de(0);let rt=0,pt=e.width,J=e.height,vt=1,et=null,Dt=null;const Mt=new Re(0,0,pt,J),_t=new Re(0,0,pt,J);let se=!1;const ce=new gl;let it=!1,dt=!1;const It=new Ae,Ut=new Ae,qt=new G,zt=new Re,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Qt(){return C===null?vt:1}let D=n;function xe(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",tt,!1),D===null){const k="webgl2";if(D=xe(k,T),D===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Gt,re,Ot,fe,$t,R,S,V,at,mt,z,Et,bt,ct,Lt,j,gt,At,kt,Tt,Ft,wt,le,I;function ht(){Gt=new Yg(D),Gt.init(),wt=new I0(D,Gt),re=new Vg(D,Gt,t,wt),Ot=new P0(D),re.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),fe=new Zg(D),$t=new m0,R=new D0(D,Gt,Ot,$t,re,wt,fe),S=new $g(y),V=new qg(y),at=new rp(D),le=new zg(D,at),mt=new jg(D,at,fe,le),z=new Qg(D,mt,at,fe),kt=new Jg(D,re,R),j=new Gg($t),Et=new p0(y,S,V,Gt,re,le,j),bt=new H0(y,$t),ct=new _0,Lt=new S0(Gt),At=new Bg(y,S,V,Ot,z,u,l),gt=new R0(y,z,re),I=new V0(D,fe,re,Ot),Tt=new Hg(D,Gt,fe),Ft=new Kg(D,Gt,fe),fe.programs=Et.programs,y.capabilities=re,y.extensions=Gt,y.properties=$t,y.renderLists=ct,y.shadowMap=gt,y.state=Ot,y.info=fe}ht();const K=new B0(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(T){T!==void 0&&(vt=T,this.setSize(pt,J,!1))},this.getSize=function(T){return T.set(pt,J)},this.setSize=function(T,k,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=T,J=k,e.width=Math.floor(T*vt),e.height=Math.floor(k*vt),X===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(pt*vt,J*vt).floor()},this.setDrawingBufferSize=function(T,k,X){pt=T,J=k,vt=X,e.width=Math.floor(T*X),e.height=Math.floor(k*X),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,k,X,q){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,k,X,q),Ot.viewport(M.copy(Mt).multiplyScalar(vt).round())},this.getScissor=function(T){return T.copy(_t)},this.setScissor=function(T,k,X,q){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,k,X,q),Ot.scissor(b.copy(_t).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){Ot.setScissorTest(se=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){Dt=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(T=!0,k=!0,X=!0){let q=0;if(T){let B=!1;if(C!==null){const St=C.texture.format;B=St===fl||St===dl||St===hl}if(B){const St=C.texture.type,Pt=St===Zn||St===Bi||St===Qr||St===Tr||St===cl||St===ul,Nt=At.getClearColor(),Bt=At.getClearAlpha(),Xt=Nt.r,Yt=Nt.g,Ht=Nt.b;Pt?(p[0]=Xt,p[1]=Yt,p[2]=Ht,p[3]=Bt,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Xt,v[1]=Yt,v[2]=Ht,v[3]=Bt,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}k&&(q|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),ct.dispose(),Lt.dispose(),$t.dispose(),S.dispose(),V.dispose(),z.dispose(),le.dispose(),I.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",Xi),K.removeEventListener("sessionend",Lr),kn.stop()};function O(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=fe.autoReset,k=gt.enabled,X=gt.autoUpdate,q=gt.needsUpdate,B=gt.type;ht(),fe.autoReset=T,gt.enabled=k,gt.autoUpdate=X,gt.needsUpdate=q,gt.type=B}function tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const k=T.target;k.removeEventListener("dispose",Wt),Kt(k)}function Kt(T){he(T),$t.remove(T)}function he(T){const k=$t.get(T).programs;k!==void 0&&(k.forEach(function(X){Et.releaseProgram(X)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,X,q,B,St){k===null&&(k=ee);const Pt=B.isMesh&&B.matrixWorld.determinant()<0,Nt=_o(T,k,X,q,B);Ot.setMaterial(q,Pt);let Bt=X.index,Xt=1;if(q.wireframe===!0){if(Bt=mt.getWireframeAttribute(X),Bt===void 0)return;Xt=2}const Yt=X.drawRange,Ht=X.attributes.position;let ge=Yt.start*Xt,ye=(Yt.start+Yt.count)*Xt;St!==null&&(ge=Math.max(ge,St.start*Xt),ye=Math.min(ye,(St.start+St.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),ye=Math.min(ye,Bt.count)):Ht!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,Ht.count));const Me=ye-ge;if(Me<0||Me===1/0)return;le.setup(B,q,Nt,X,Bt);let Ke,pe=Tt;if(Bt!==null&&(Ke=at.get(Bt),pe=Ft,pe.setIndex(Ke)),B.isMesh)q.wireframe===!0?(Ot.setLineWidth(q.wireframeLinewidth*Qt()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(B.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),Ot.setLineWidth(Vt*Qt()),B.isLineSegments?pe.setMode(D.LINES):B.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else B.isPoints?pe.setMode(D.POINTS):B.isSprite&&pe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Vt=B._multiDrawStarts,Oe=B._multiDrawCounts,ue=B._multiDrawCount,en=Bt?at.get(Bt).bytesPerElement:1,Qn=$t.get(q).currentProgram.getUniforms();for(let Ie=0;Ie<ue;Ie++)Qn.setValue(D,"_gl_DrawID",Ie),pe.render(Vt[Ie]/en,Oe[Ie])}else if(B.isInstancedMesh)pe.renderInstances(ge,Me,B.count);else if(X.isInstancedBufferGeometry){const Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Oe=Math.min(X.instanceCount,Vt);pe.renderInstances(ge,Me,Oe)}else pe.render(ge,Me)};function oe(T,k,X){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,wn(T,k,X),T.side=mi,T.needsUpdate=!0,wn(T,k,X),T.side=Yn):wn(T,k,X)}this.compile=function(T,k,X=null){X===null&&(X=T),h=Lt.get(X),h.init(k),E.push(h),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const St=B.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Nt=St[Pt];oe(Nt,X,B),q.add(Nt)}else oe(St,X,B),q.add(St)}),E.pop(),h=null,q},this.compileAsync=function(T,k,X=null){const q=this.compile(T,k,X);return new Promise(B=>{function St(){if(q.forEach(function(Pt){$t.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){B(T);return}setTimeout(St,10)}Gt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let De=null;function qe(T){De&&De(T)}function Xi(){kn.stop()}function Lr(){kn.start()}const kn=new Lu;kn.setAnimationLoop(qe),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){De=T,K.setAnimationLoop(T),T===null?kn.stop():kn.start()},K.addEventListener("sessionstart",Xi),K.addEventListener("sessionend",Lr),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,C),h=Lt.get(T,E.length),h.init(k),E.push(h),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(Ut),dt=this.localClippingEnabled,it=j.init(this.clippingPlanes,dt),x=ct.get(T,g.length),x.init(),g.push(x),K.enabled===!0&&K.isPresenting===!0){const St=y.xr.getDepthSensingMesh();St!==null&&qi(St,k,-1/0,y.sortObjects)}qi(T,k,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(et,Dt),ae=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ae&&At.addToRenderList(x,T),this.info.render.frame++,it===!0&&j.beginShadows();const X=h.state.shadowsArray;gt.render(X,T,k),it===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,B=x.transmissive;if(h.setupLights(),k.isArrayCamera){const St=k.cameras;if(B.length>0)for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Ir(q,B,T,Bt)}ae&&At.render(T);for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Dr(x,T,Bt,Bt.viewport)}}else B.length>0&&Ir(q,B,T,k),ae&&At.render(T),Dr(x,T,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,k),le.resetDefaultState(),F=-1,st=null,E.pop(),E.length>0?(h=E[E.length-1],it===!0&&j.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function qi(T,k,X,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ce.intersectsSprite(T)){q&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ut);const Pt=z.update(T),Nt=T.material;Nt.visible&&x.push(T,Pt,Nt,X,zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ce.intersectsObject(T))){const Pt=z.update(T),Nt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Ut)),Array.isArray(Nt)){const Bt=Pt.groups;for(let Xt=0,Yt=Bt.length;Xt<Yt;Xt++){const Ht=Bt[Xt],ge=Nt[Ht.materialIndex];ge&&ge.visible&&x.push(T,Pt,ge,X,zt.z,Ht)}}else Nt.visible&&x.push(T,Pt,Nt,X,zt.z,null)}}const St=T.children;for(let Pt=0,Nt=St.length;Pt<Nt;Pt++)qi(St[Pt],k,X,q)}function Dr(T,k,X,q){const B=T.opaque,St=T.transmissive,Pt=T.transparent;h.setupLightsView(X),it===!0&&j.setGlobalState(y.clippingPlanes,X),q&&Ot.viewport(M.copy(q)),B.length>0&&Yi(B,k,X),St.length>0&&Yi(St,k,X),Pt.length>0&&Yi(Pt,k,X),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Ir(T,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new zi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ts:Zn,minFilter:Fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const St=h.state.transmissionRenderTarget[q.id],Pt=q.viewport||M;St.setSize(Pt.z,Pt.w);const Nt=y.getRenderTarget();y.setRenderTarget(St),y.getClearColor(Y),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),ae&&At.render(X);const Bt=y.toneMapping;y.toneMapping=fi;const Xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),it===!0&&j.setGlobalState(y.clippingPlanes,q),Yi(T,X,q),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ht=0,ge=k.length;Ht<ge;Ht++){const ye=k[Ht],Me=ye.object,Ke=ye.geometry,pe=ye.material,Vt=ye.group;if(pe.side===Yn&&Me.layers.test(q.layers)){const Oe=pe.side;pe.side=on,pe.needsUpdate=!0,rs(Me,X,q,Ke,pe,Vt),pe.side=Oe,pe.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}y.setRenderTarget(Nt),y.setClearColor(Y,rt),Xt!==void 0&&(q.viewport=Xt),y.toneMapping=Bt}function Yi(T,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,St=T.length;B<St;B++){const Pt=T[B],Nt=Pt.object,Bt=Pt.geometry,Xt=q===null?Pt.material:q,Yt=Pt.group;Nt.layers.test(X.layers)&&rs(Nt,k,X,Bt,Xt,Yt)}}function rs(T,k,X,q,B,St){T.onBeforeRender(y,k,X,q,B,St),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,k,X,q,T,St),B.transparent===!0&&B.side===Yn&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,y.renderBufferDirect(X,k,q,B,T,St),B.side=mi,B.needsUpdate=!0,y.renderBufferDirect(X,k,q,B,T,St),B.side=Yn):y.renderBufferDirect(X,k,q,B,T,St),T.onAfterRender(y,k,X,q,B,St)}function wn(T,k,X){k.isScene!==!0&&(k=ee);const q=$t.get(T),B=h.state.lights,St=h.state.shadowsArray,Pt=B.state.version,Nt=Et.getParameters(T,B.state,St,k,X),Bt=Et.getProgramCacheKey(Nt);let Xt=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",Wt),Xt=new Map,q.programs=Xt);let Yt=Xt.get(Bt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===Pt)return Jn(T,Nt),Yt}else Nt.uniforms=Et.getUniforms(T),T.onBeforeCompile(Nt,y),Yt=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Yt),q.uniforms=Nt.uniforms;const Ht=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=j.uniform),Jn(T,Nt),q.needsLights=xi(T),q.lightsStateVersion=Pt,q.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function ji(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Jn(T,k){const X=$t.get(T);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function _o(T,k,X,q,B){k.isScene!==!0&&(k=ee),R.resetTextureUnits();const St=k.fog,Pt=q.isMeshStandardMaterial?k.environment:null,Nt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vi,Bt=(q.isMeshStandardMaterial?V:S).get(q.envMap||Pt),Xt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Yt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!X.morphAttributes.position,ge=!!X.morphAttributes.normal,ye=!!X.morphAttributes.color;let Me=fi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=y.toneMapping);const Ke=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=Ke!==void 0?Ke.length:0,Vt=$t.get(q),Oe=h.state.lights;if(it===!0&&(dt===!0||T!==st)){const nn=T===st&&q.id===F;j.setState(q,T,nn)}let ue=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Oe.state.version||Vt.outputColorSpace!==Nt||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isBatchedMesh&&Vt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Vt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==Bt||q.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==j.numPlanes||Vt.numIntersection!==j.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Yt||Vt.morphTargets!==Ht||Vt.morphNormals!==ge||Vt.morphColors!==ye||Vt.toneMapping!==Me||Vt.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,Vt.__version=q.version);let en=Vt.currentProgram;ue===!0&&(en=wn(q,k,B));let Qn=!1,Ie=!1,ti=!1;const Ee=en.getUniforms(),gn=Vt.uniforms;if(Ot.useProgram(en.program)&&(Qn=!0,Ie=!0,ti=!0),q.id!==F&&(F=q.id,Ie=!0),Qn||st!==T){re.reverseDepthBuffer?(It.copy(T.projectionMatrix),Df(It),If(It),Ee.setValue(D,"projectionMatrix",It)):Ee.setValue(D,"projectionMatrix",T.projectionMatrix),Ee.setValue(D,"viewMatrix",T.matrixWorldInverse);const nn=Ee.map.cameraPosition;nn!==void 0&&nn.setValue(D,qt.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),st!==T&&(st=T,Ie=!0,ti=!0)}if(B.isSkinnedMesh){Ee.setOptional(D,B,"bindMatrix"),Ee.setOptional(D,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ee.setValue(D,"boneTexture",nn.boneTexture,R))}B.isBatchedMesh&&(Ee.setOptional(D,B,"batchingTexture"),Ee.setValue(D,"batchingTexture",B._matricesTexture,R),Ee.setOptional(D,B,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",B._indirectTexture,R),Ee.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",B._colorsTexture,R));const Ze=X.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&kt.update(B,X,en),(Ie||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Ee.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gn.envMap.value=Bt,gn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),Ie&&(Ee.setValue(D,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&vo(gn,ti),St&&q.fog===!0&&bt.refreshFogUniforms(gn,St),bt.refreshMaterialUniforms(gn,q,vt,J,h.state.transmissionRenderTarget[T.id]),Xs.upload(D,ji(Vt),gn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xs.upload(D,ji(Vt),gn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(D,"center",B.center),Ee.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(D,"normalMatrix",B.normalMatrix),Ee.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let Ki=0,ss=nn.length;Ki<ss;Ki++){const yi=nn[Ki];I.update(yi,en),I.bind(yi,en)}}return en}function vo(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function xi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,k,X){$t.get(T.texture).__webglTexture=k,$t.get(T.depthTexture).__webglTexture=X;const q=$t.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const X=$t.get(T);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,X=0){C=T,N=k,P=X;let q=!0,B=null,St=!1,Pt=!1;if(T){const Bt=$t.get(T);if(Bt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Bt.__hasExternalTextures)R.rebindTextures(T,$t.get(T.texture).__webglTexture,$t.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ht=T.depthTexture;if(Bt.__boundDepthTexture!==Ht){if(Ht!==null&&$t.has(Ht)&&(T.width!==Ht.image.width||T.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const Yt=$t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?B=Yt[k][X]:B=Yt[k],St=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=$t.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?B=Yt[X]:B=Yt,M.copy(T.viewport),b.copy(T.scissor),$=T.scissorTest}else M.copy(Mt).multiplyScalar(vt).floor(),b.copy(_t).multiplyScalar(vt).floor(),$=se;if(Ot.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&Ot.drawBuffers(T,B),Ot.viewport(M),Ot.scissor(b),Ot.setScissorTest($),St){const Bt=$t.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,X)}else if(Pt){const Bt=$t.get(T.texture),Xt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.__webglTexture,X||0,Xt)}F=-1},this.readRenderTargetPixels=function(T,k,X,q,B,St,Pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=$t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Ot.bindFramebuffer(D.FRAMEBUFFER,Nt);try{const Bt=T.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&X>=0&&X<=T.height-B&&D.readPixels(k,X,q,B,wt.convert(Xt),wt.convert(Yt),St)}finally{const Bt=C!==null?$t.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,k,X,q,B,St,Pt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=$t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){const Bt=T.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-q&&X>=0&&X<=T.height-B){Ot.bindFramebuffer(D.FRAMEBUFFER,Nt);const Ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.bufferData(D.PIXEL_PACK_BUFFER,St.byteLength,D.STREAM_READ),D.readPixels(k,X,q,B,wt.convert(Xt),wt.convert(Yt),0);const ge=C!==null?$t.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(D.FRAMEBUFFER,ge);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lf(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,St),D.deleteBuffer(Ht),D.deleteSync(ye),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,X=0){T.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(T.image.width*q),St=Math.floor(T.image.height*q),Pt=k!==null?k.x:0,Nt=k!==null?k.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Pt,Nt,B,St),Ot.unbindTexture()},this.copyTextureToTexture=function(T,k,X=null,q=null,B=0){T.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let St,Pt,Nt,Bt,Xt,Yt;X!==null?(St=X.max.x-X.min.x,Pt=X.max.y-X.min.y,Nt=X.min.x,Bt=X.min.y):(St=T.image.width,Pt=T.image.height,Nt=0,Bt=0),q!==null?(Xt=q.x,Yt=q.y):(Xt=0,Yt=0);const Ht=wt.convert(k.format),ge=wt.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ye=D.getParameter(D.UNPACK_ROW_LENGTH),Me=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ke=D.getParameter(D.UNPACK_SKIP_PIXELS),pe=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Oe=T.isCompressedTexture?T.mipmaps[B]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,Oe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Xt,Yt,Oe.width,Oe.height,Ht,Oe.data):D.texSubImage2D(D.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,Oe),D.pixelStorei(D.UNPACK_ROW_LENGTH,ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),B===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(T,k,X=null,q=null,B=0){T.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,T=arguments[2],k=arguments[3],B=arguments[4]||0);let St,Pt,Nt,Bt,Xt,Yt,Ht,ge,ye;const Me=T.isCompressedTexture?T.mipmaps[B]:T.image;X!==null?(St=X.max.x-X.min.x,Pt=X.max.y-X.min.y,Nt=X.max.z-X.min.z,Bt=X.min.x,Xt=X.min.y,Yt=X.min.z):(St=Me.width,Pt=Me.height,Nt=Me.depth,Bt=0,Xt=0,Yt=0),q!==null?(Ht=q.x,ge=q.y,ye=q.z):(Ht=0,ge=0,ye=0);const Ke=wt.convert(k.format),pe=wt.convert(k.type);let Vt;if(k.isData3DTexture)R.setTexture3D(k,0),Vt=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Oe=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),Qn=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ke,pe,Me.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ke,Me.data):D.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ke,pe,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,Oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),B===0&&k.generateMipmaps&&D.generateMipmap(Vt),Ot.unbindTexture()},this.initRenderTarget=function(T){$t.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ot.unbindTexture()},this.resetState=function(){N=0,P=0,C=null,Ot.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pl?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===ho?"display-p3":"srgb"}}class G0 extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ku extends Cr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const io=new G,ro=new G,Pc=new Ae,Gr=new ml,Ls=new fo,oa=new G,Lc=new G;class $0 extends Xe{constructor(t=new On,e=new ku){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)io.fromBufferAttribute(e,r-1),ro.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=io.distanceTo(ro);t.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,t.ray.intersectsSphere(Ls)===!1)return;Pc.copy(r).invert(),Gr.copy(t.ray).applyMatrix4(Pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=p,h=v-1;x<h;x+=c){const g=d.getX(x),E=d.getX(x+1),y=Ds(this,t,Gr,l,g,E);y&&e.push(y)}if(this.isLineLoop){const x=d.getX(v-1),h=d.getX(p),g=Ds(this,t,Gr,l,x,h);g&&e.push(g)}}else{const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let x=p,h=v-1;x<h;x+=c){const g=Ds(this,t,Gr,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Ds(this,t,Gr,l,v-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ds(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(io.fromBufferAttribute(a,r),ro.fromBufferAttribute(a,s),e.distanceSqToSegment(io,ro,oa,Lc)>n)return;oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(oa);if(!(l<t.near||l>t.far))return{distance:l,point:Lc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Dc=new G,Ic=new G;class W0 extends $0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Dc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dc.distanceTo(Ic);t.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Is=new G,Us=new G,aa=new G,Ns=new fn;class X0 extends On{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Yr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},p=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:h,c:g}=Ns;if(x.fromBufferAttribute(o,c[0]),h.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ns.getNormal(aa),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,f[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const y=(E+1)%3,A=f[E],N=f[y],P=Ns[d[E]],C=Ns[d[y]],F=`${A}_${N}`,st=`${N}_${A}`;st in u&&u[st]?(aa.dot(u[st].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(C.x,C.y,C.z)),u[st]=null):F in u||(u[F]={index0:c[E],index1:c[y],normal:aa.clone()})}}for(const v in u)if(u[v]){const{index0:x,index1:h}=u[v];Is.fromBufferAttribute(o,x),Us.fromBufferAttribute(o,h),p.push(Is.x,Is.y,Is.z),p.push(Us.x,Us.y,Us.z)}this.setAttribute("position",new Un(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class q0 extends Cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bu extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Y0 extends Bu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new Ae,Uc=new G,Nc=new G;class j0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class K0 extends j0{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends Bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new K0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Oc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Z0 extends $i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const kc={type:"change"},xl={type:"start"},zu={type:"end"},Fs=new ml,Bc=new li,J0=Math.cos(70*Cf.DEG2RAD),ke=new G,sn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ca=1e-6;class Q0 extends Z0{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Hi,this._lastTargetPosition=new G,this._quat=new Hi().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oc,this._sphericalDelta=new Oc,this._scale=1,this._panOffset=new G,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new G,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ev.bind(this),this._onPointerDown=tv.bind(this),this._onPointerUp=nv.bind(this),this._onContextMenu=cv.bind(this),this._onMouseWheel=sv.bind(this),this._onKeyDown=ov.bind(this),this._onTouchStart=av.bind(this),this._onTouchMove=lv.bind(this),this._onMouseDown=iv.bind(this),this._onMouseMove=rv.bind(this),this._interceptControlDown=uv.bind(this),this._interceptControlUp=hv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kc),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ke.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fs.origin.copy(this.object.position),Fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fs.direction))<J0?this.object.lookAt(this.target):(Bc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fs.intersectPlane(Bc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ca||this._lastTargetPosition.distanceToSquared(this.target)>ca?(this.dispatchEvent(kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ke.copy(r).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ev(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case _r.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case _r.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(xl)}function rv(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zu))}function ov(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function av(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(xl)}function lv(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function cv(i){this.enabled!==!1&&i.preventDefault()}function uv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dv="modulepreload",fv=function(i,t){return new URL(i,t).href},zc={},pv=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(e.map(c=>{if(c=fv(c,n),c in zc)return;zc[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const x=a[v];if(x.href===c&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":dv,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((v,x)=>{p.addEventListener("load",v),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var mv=(()=>{var i=import.meta.url;return async function(t={}){var e,n=t,r,s,a=new Promise((m,_)=>{r=m,s=_}),o=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:m}=await pv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var d=m(import.meta.url)}var f=!1;n.setup=function(){if(f)return;f=!0,n.initTBB();function m(U,W,lt=yt=>yt){if(W)for(let yt of W)U.push_back(lt(yt));return U}function _(U,W=lt=>lt){const lt=[],yt=U.size();for(let jt=0;jt<yt;jt++)lt.push(W(U.get(jt)));return lt}function w(U,W=lt=>lt){const lt=[],yt=U.size();for(let jt=0;jt<yt;jt++){const Te=U.get(jt),Ce=Te.size(),ln=[];for(let Ge=0;Ge<Ce;Ge++)ln.push(W(Te.get(Ge)));lt.push(ln)}return lt}function L(U){return U[0].length<3&&(U=[U]),m(new n.Vector2_vec2,U,W=>m(new n.Vector_vec2,W,lt=>lt instanceof Array?{x:lt[0],y:lt[1]}:lt))}function H(U){for(let W=0;W<U.size();W++)U.get(W).delete();U.delete()}function Q(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0}:U[0]}function ut(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1],z:U[0][2]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0,z:U[2]||0}:U[0]}function nt(U){return U=="EvenOdd"?0:U=="NonZero"?1:U=="Negative"?3:2}function ft(U){return U=="Round"?1:U=="Miter"?2:0}const xt=n.CrossSection;function Rt(U,W="Positive"){if(U instanceof xt)return U;{const lt=L(U),yt=new xt(lt,nt(W));return H(lt),yt}}n.CrossSection.prototype.translate=function(...U){return this._Translate(Q(U))},n.CrossSection.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U}):this._Scale(Q([U]))},n.CrossSection.prototype.mirror=function(U){return this._Mirror(Q([U]))},n.CrossSection.prototype.warp=function(U){const W=Ur(function(yt){const jt=V(yt,"double"),Te=V(yt+8,"double"),Ce=[jt,Te];U(Ce),at(yt,Ce[0],"double"),at(yt+8,Ce[1],"double")},"vi"),lt=this._Warp(W);return Nr(W),lt},n.CrossSection.prototype.decompose=function(){const U=this._Decompose(),W=_(U);return U.delete(),W},n.CrossSection.prototype.bounds=function(){const U=this._Bounds();return{min:["x","y"].map(W=>U.min[W]),max:["x","y"].map(W=>U.max[W])}},n.CrossSection.prototype.offset=function(U,W="Square",lt=2,yt=0){return this._Offset(U,ft(W),lt,yt)},n.CrossSection.prototype.extrude=function(U,W=0,lt=0,yt=[1,1],jt=!1){yt=Q([yt]);const Te=n._Extrude(this._ToPolygons(),U,W,lt,yt);return jt?Te.translate([0,0,-U/2]):Te},n.CrossSection.prototype.revolve=function(U=0,W=360){return n._Revolve(this._ToPolygons(),U,W)},n.CrossSection.prototype.add=function(U){return this._add(Rt(U))},n.CrossSection.prototype.subtract=function(U){return this._subtract(Rt(U))},n.CrossSection.prototype.intersect=function(U){return this._intersect(Rt(U))},n.CrossSection.prototype.toPolygons=function(){const U=this._ToPolygons(),W=w(U,lt=>[lt.x,lt.y]);return U.delete(),W},n.Manifold.prototype.smoothOut=function(U=60,W=0){return this._SmoothOut(U,W)},n.Manifold.prototype.warp=function(U){const W=Ur(function(jt){const Te=V(jt,"double"),Ce=V(jt+8,"double"),ln=V(jt+16,"double"),Ge=[Te,Ce,ln];U(Ge),at(jt,Ge[0],"double"),at(jt+8,Ge[1],"double"),at(jt+16,Ge[2],"double")},"vi"),lt=this._Warp(W);Nr(W);const yt=lt.status();if(yt.value!==0)throw new n.ManifoldError(yt.value);return lt},n.Manifold.prototype.calculateNormals=function(U,W=60){return this._CalculateNormals(U,W)},n.Manifold.prototype.setProperties=function(U,W){const lt=this.numProp(),yt=Ur(function(Te,Ce,ln){const Ge=[];for(let Pe=0;Pe<U;++Pe)Ge[Pe]=V(Te+8*Pe,"double");const Zi=[];for(let Pe=0;Pe<3;++Pe)Zi[Pe]=V(Ce+8*Pe,"double");const Ji=[];for(let Pe=0;Pe<lt;++Pe)Ji[Pe]=V(ln+8*Pe,"double");W(Ge,Zi,Ji);for(let Pe=0;Pe<U;++Pe)at(Te+8*Pe,Ge[Pe],"double")},"viii"),jt=this._SetProperties(U,yt);return Nr(yt),jt},n.Manifold.prototype.translate=function(...U){return this._Translate(ut(U))},n.Manifold.prototype.rotate=function(U,W,lt){return Array.isArray(U)?this._Rotate(...U):this._Rotate(U,W||0,lt||0)},n.Manifold.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U,z:U}):this._Scale(ut([U]))},n.Manifold.prototype.mirror=function(U){return this._Mirror(ut([U]))},n.Manifold.prototype.trimByPlane=function(U,W=0){return this._TrimByPlane(ut([U]),W)},n.Manifold.prototype.slice=function(U=0){const W=this._Slice(U),lt=new xt(W,nt("Positive"));return H(W),lt},n.Manifold.prototype.project=function(){const U=this._Project(),W=new xt(U,nt("Positive"));return H(U),W},n.Manifold.prototype.split=function(U){const W=this._Split(U),lt=_(W);return W.delete(),lt},n.Manifold.prototype.splitByPlane=function(U,W=0){const lt=this._SplitByPlane(ut([U]),W),yt=_(lt);return lt.delete(),yt},n.Manifold.prototype.decompose=function(){const U=this._Decompose(),W=_(U);return U.delete(),W},n.Manifold.prototype.boundingBox=function(){const U=this._boundingBox();return{min:["x","y","z"].map(W=>U.min[W]),max:["x","y","z"].map(W=>U.max[W])}};class Zt{constructor({numProp:W=3,triVerts:lt=new Uint32Array,vertProperties:yt=new Float32Array,mergeFromVert:jt,mergeToVert:Te,runIndex:Ce,runOriginalID:ln,faceID:Ge,halfedgeTangent:Zi,runTransform:Ji}={}){this.numProp=W,this.triVerts=lt,this.vertProperties=yt,this.mergeFromVert=jt,this.mergeToVert=Te,this.runIndex=Ce,this.runOriginalID=ln,this.faceID=Ge,this.halfedgeTangent=Zi,this.runTransform=Ji}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:W,mesh:lt}=n._Merge(this);return Object.assign(this,{...lt}),W}verts(W){return this.triVerts.subarray(3*W,3*(W+1))}position(W){return this.vertProperties.subarray(this.numProp*W,this.numProp*W+3)}extras(W){return this.vertProperties.subarray(this.numProp*W+3,this.numProp*(W+1))}tangent(W){return this.halfedgeTangent.subarray(4*W,4*(W+1))}transform(W){const lt=new Array(16);for(const yt of[0,1,2,3])for(const jt of[0,1,2])lt[4*yt+jt]=this.runTransform[12*W+3*yt+jt];return lt[15]=1,lt}}n.Mesh=Zt,n.Manifold.prototype.getMesh=function(U=-1){return new Zt(this._GetMeshJS(U))},n.ManifoldError=function(W,...lt){let yt="Unknown error";switch(W){case n.status.NonFiniteVertex.value:yt="Non-finite vertex";break;case n.status.NotManifold.value:yt="Not manifold";break;case n.status.VertexOutOfBounds.value:yt="Vertex index out of bounds";break;case n.status.PropertiesWrongLength.value:yt="Properties have wrong length";break;case n.status.MissingPositionProperties.value:yt="Less than three properties";break;case n.status.MergeVectorsDifferentLengths.value:yt="Merge vectors have different lengths";break;case n.status.MergeIndexOutOfBounds.value:yt="Merge index out of bounds";break;case n.status.TransformWrongLength.value:yt="Transform vector has wrong length";break;case n.status.RunIndexWrongLength.value:yt="Run index vector has wrong length";break;case n.status.FaceIDWrongLength.value:yt="Face ID vector has wrong length";case n.status.InvalidConstruction.value:yt="Manifold constructed with invalid parameters"}const jt=Error.apply(this,[yt,...lt]);jt.name=this.name="ManifoldError",this.message=jt.message,this.stack=jt.stack,this.code=W},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(U,W="Positive"){const lt=L(U),yt=new xt(lt,nt(W));return H(lt),yt},n.CrossSection.ofPolygons=function(U,W="Positive"){return new n.CrossSection(U,W)},n.CrossSection.square=function(...U){let W;U.length==0?W={x:1,y:1}:typeof U[0]=="number"?W={x:U[0],y:U[0]}:W=Q(U);const lt=U[1]||!1;return n._Square(W,lt)},n.CrossSection.circle=function(U,W=0){return n._Circle(U,W)};function me(U){return function(...W){W.length==1&&(W=W[0]);const lt=new n.Vector_crossSection;for(const jt of W)lt.push_back(Rt(jt));const yt=n["_crossSection"+U](lt);return lt.delete(),yt}}n.CrossSection.compose=me("Compose"),n.CrossSection.union=me("UnionN"),n.CrossSection.difference=me("DifferenceN"),n.CrossSection.intersection=me("IntersectionN");function Ue(U,W){m(U,W,lt=>lt instanceof Array?{x:lt[0],y:lt[1]}:lt)}n.CrossSection.hull=function(...U){U.length==1&&(U=U[0]);let W=new n.Vector_vec2;for(const yt of U)if(yt instanceof xt)n._crossSectionCollectVertices(W,yt);else if(yt instanceof Array&&yt.length==2&&typeof yt[0]=="number")W.push_back({x:yt[0],y:yt[1]});else if(yt.x)W.push_back(yt);else{const Te=yt[0].length==2&&typeof yt[0][0]=="number"||yt[0].x?[yt]:yt;for(const Ce of Te)Ue(W,Ce)}const lt=n._crossSectionHullPoints(W);return W.delete(),lt},n.CrossSection.prototype=Object.create(xt.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>U=>U instanceof xt});const we=n.Manifold;n.Manifold=function(U){const W=new we(U),lt=W.status();if(lt.value!==0)throw new n.ManifoldError(lt.value);return W},n.Manifold.ofMesh=function(U){return new n.Manifold(U)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...U){let W;U.length==0?W={x:1,y:1,z:1}:typeof U[0]=="number"?W={x:U[0],y:U[0],z:U[0]}:W=ut(U);const lt=U[1]||!1;return n._Cube(W,lt)},n.Manifold.cylinder=function(U,W,lt=-1,yt=0,jt=!1){return n._Cylinder(U,W,lt,yt,jt)},n.Manifold.sphere=function(U,W=0){return n._Sphere(U,W)},n.Manifold.smooth=function(U,W=[]){const lt=new n.Vector_smoothness;m(lt,W);const yt=n._Smooth(U,lt);return lt.delete(),yt},n.Manifold.extrude=function(U,W,lt=0,yt=0,jt=[1,1],Te=!1){return(U instanceof xt?U:n.CrossSection(U,"Positive")).extrude(W,lt,yt,jt,Te)},n.Manifold.revolve=function(U,W=0,lt=360){return(U instanceof xt?U:n.CrossSection(U,"Positive")).revolve(W,lt)},n.Manifold.reserveIDs=function(U){return n._ReserveIDs(U)},n.Manifold.compose=function(U){const W=new n.Vector_manifold;m(W,U);const lt=n._manifoldCompose(W);return W.delete(),lt};function vn(U){return function(...W){W.length==1&&(W=W[0]);const lt=new n.Vector_manifold;for(const jt of W)lt.push_back(jt);const yt=n["_manifold"+U+"N"](lt);return lt.delete(),yt}}n.Manifold.union=vn("Union"),n.Manifold.difference=vn("Difference"),n.Manifold.intersection=vn("Intersection"),n.Manifold.levelSet=function(U,W,lt,yt=0,jt=-1){const Te={min:{x:W.min[0],y:W.min[1],z:W.min[2]},max:{x:W.max[0],y:W.max[1],z:W.max[2]}},Ce=Ur(function(Ge){const Zi=V(Ge,"double"),Ji=V(Ge+8,"double"),Pe=V(Ge+16,"double");return U([Zi,Ji,Pe])},"di"),ln=n._LevelSet(Ce,Te,lt,yt,jt);return Nr(Ce),ln};function xn(U,W){m(U,W,lt=>lt instanceof Array?{x:lt[0],y:lt[1],z:lt[2]}:lt)}n.Manifold.hull=function(...U){U.length==1&&(U=U[0]);let W=new n.Vector_vec3;for(const yt of U)yt instanceof we?n._manifoldCollectVertices(W,yt):yt instanceof Array&&yt.length==3&&typeof yt[0]=="number"?W.push_back({x:yt[0],y:yt[1],z:yt[2]}):yt.x?W.push_back(yt):xn(W,yt);const lt=n._manifoldHullPoints(W);return W.delete(),lt},n.Manifold.prototype=Object.create(we.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>U=>U instanceof we}),n.triangulate=function(U,W=-1){const lt=L(U),yt=_(n._Triangulate(lt,W),jt=>[jt[0],jt[1],jt[2]]);return H(lt),yt}};var u=Object.assign({},n),p="";function v(m){return n.locateFile?n.locateFile(m,p):p+m}var x,h;if(c){var g=d("fs"),E=d("path");p=d("url").fileURLToPath(new URL(""+new URL("manifold-BrJGmODQ.js",import.meta.url).href,import.meta.url)),h=m=>{m=Qt(m)?new URL(m):E.normalize(m);var _=g.readFileSync(m);return _},x=(m,_=!0)=>(m=Qt(m)?new URL(m):E.normalize(m),new Promise((w,L)=>{g.readFile(m,_?void 0:"utf8",(H,Q)=>{H?L(H):w(_?Q.buffer:Q)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),i&&(p=i),p.startsWith("blob:")?p="":p=p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(h=m=>{var _=new XMLHttpRequest;return _.open("GET",m,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),x=m=>Qt(m)?new Promise((_,w)=>{var L=new XMLHttpRequest;L.open("GET",m,!0),L.responseType="arraybuffer",L.onload=()=>{(L.status==200||L.status==0&&L.response)&&w(L.response),_(L.status)},L.onerror=_,L.send(null)}):fetch(m,{credentials:"same-origin"}).then(_=>_.ok?_.arrayBuffer():Promise.reject(new Error(_.status+" : "+_.url))));n.print||console.log.bind(console);var y=n.printErr||console.error.bind(console);Object.assign(n,u),u=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var A;n.wasmBinary&&(A=n.wasmBinary);var N,P=!1,C,F,st,M,b,$,Y,rt;function pt(){var m=N.buffer;n.HEAP8=C=new Int8Array(m),n.HEAP16=st=new Int16Array(m),n.HEAPU8=F=new Uint8Array(m),n.HEAPU16=M=new Uint16Array(m),n.HEAP32=b=new Int32Array(m),n.HEAPU32=$=new Uint32Array(m),n.HEAPF32=Y=new Float32Array(m),n.HEAPF64=rt=new Float64Array(m)}var J=[],vt=[],et=[];function Dt(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)se(n.preRun.shift());S(J)}function Mt(){S(vt)}function _t(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)it(n.postRun.shift());S(et)}function se(m){J.unshift(m)}function ce(m){vt.unshift(m)}function it(m){et.unshift(m)}var dt=0,It=null;function Ut(m){dt++,n.monitorRunDependencies?.(dt)}function qt(m){if(dt--,n.monitorRunDependencies?.(dt),dt==0&&It){var _=It;It=null,_()}}function zt(m){n.onAbort?.(m),m="Aborted("+m+")",y(m),P=!0,m+=". Build with -sASSERTIONS for more info.";var _=new WebAssembly.RuntimeError(m);throw s(_),_}var ee="data:application/octet-stream;base64,",ae=m=>m.startsWith(ee),Qt=m=>m.startsWith("file://");function D(){if(n.locateFile){var m="manifold.wasm";return ae(m)?m:v(m)}return new URL(""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,import.meta.url).href}var xe;function Gt(m){if(m==xe&&A)return new Uint8Array(A);if(h)return h(m);throw"both async and sync fetching of the wasm failed"}function re(m){return A?Promise.resolve().then(()=>Gt(m)):x(m).then(_=>new Uint8Array(_),()=>Gt(m))}function Ot(m,_,w){return re(m).then(L=>WebAssembly.instantiate(L,_)).then(w,L=>{y(`failed to asynchronously prepare wasm: ${L}`),zt(L)})}function fe(m,_,w,L){return!m&&typeof WebAssembly.instantiateStreaming=="function"&&!ae(_)&&!Qt(_)&&!c&&typeof fetch=="function"?fetch(_,{credentials:"same-origin"}).then(H=>{var Q=WebAssembly.instantiateStreaming(H,w);return Q.then(L,function(ut){return y(`wasm streaming compile failed: ${ut}`),y("falling back to ArrayBuffer instantiation"),Ot(_,w,L)})}):Ot(_,w,L)}function $t(){return{a:td}}function R(){var m=$t();function _(L,H){return _n=L.exports,_n=ed(_n),N=_n.J,pt(),Ie=_n.M,ce(_n.K),qt(),_n}Ut();function w(L){_(L.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(m,_)}catch(L){y(`Module.instantiateWasm callback failed with error: ${L}`),s(L)}return xe||(xe=D()),fe(A,xe,m,w).catch(s),{}}var S=m=>{for(;m.length>0;)m.shift()(n)};function V(m,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":return C[m>>>0];case"i8":return C[m>>>0];case"i16":return st[m>>>1>>>0];case"i32":return b[m>>>2>>>0];case"i64":zt("to do getValue(i64) use WASM_BIGINT");case"float":return Y[m>>>2>>>0];case"double":return rt[m>>>3>>>0];case"*":return $[m>>>2>>>0];default:zt(`invalid type for getValue: ${_}`)}}n.noExitRuntime;function at(m,_,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":C[m>>>0]=_;break;case"i8":C[m>>>0]=_;break;case"i16":st[m>>>1>>>0]=_;break;case"i32":b[m>>>2>>>0]=_;break;case"i64":zt("to do setValue(i64) use WASM_BIGINT");case"float":Y[m>>>2>>>0]=_;break;case"double":rt[m>>>3>>>0]=_;break;case"*":$[m>>>2>>>0]=_;break;default:zt(`invalid type for setValue: ${w}`)}}class mt{constructor(_){this.excPtr=_,this.ptr=_-24}set_type(_){$[this.ptr+4>>>2>>>0]=_}get_type(){return $[this.ptr+4>>>2>>>0]}set_destructor(_){$[this.ptr+8>>>2>>>0]=_}get_destructor(){return $[this.ptr+8>>>2>>>0]}set_caught(_){_=_?1:0,C[this.ptr+12>>>0]=_}get_caught(){return C[this.ptr+12>>>0]!=0}set_rethrown(_){_=_?1:0,C[this.ptr+13>>>0]=_}get_rethrown(){return C[this.ptr+13>>>0]!=0}init(_,w){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(w)}set_adjusted_ptr(_){$[this.ptr+16>>>2>>>0]=_}get_adjusted_ptr(){return $[this.ptr+16>>>2>>>0]}get_exception_ptr(){var _=Dl(this.get_type());if(_)return $[this.excPtr>>>2>>>0];var w=this.get_adjusted_ptr();return w!==0?w:this.excPtr}}var z=0;function Et(m,_,w){m>>>=0,_>>>=0,w>>>=0;var L=new mt(m);throw L.init(_,w),z=m,z}var bt=()=>{zt("")},ct={},Lt=m=>{for(;m.length;){var _=m.pop(),w=m.pop();w(_)}};function j(m){return this.fromWireType($[m>>>2>>>0])}var gt={},At={},kt={},Tt,Ft=m=>{throw new Tt(m)},wt=(m,_,w)=>{m.forEach(function(nt){kt[nt]=_});function L(nt){var ft=w(nt);ft.length!==m.length&&Ft("Mismatched type converter count");for(var xt=0;xt<m.length;++xt)Kt(m[xt],ft[xt])}var H=new Array(_.length),Q=[],ut=0;_.forEach((nt,ft)=>{At.hasOwnProperty(nt)?H[ft]=At[nt]:(Q.push(nt),gt.hasOwnProperty(nt)||(gt[nt]=[]),gt[nt].push(()=>{H[ft]=At[nt],++ut,ut===Q.length&&L(H)}))}),Q.length===0&&L(H)},le=function(m){m>>>=0;var _=ct[m];delete ct[m];var w=_.rawConstructor,L=_.rawDestructor,H=_.fields,Q=H.map(ut=>ut.getterReturnType).concat(H.map(ut=>ut.setterArgumentType));wt([m],Q,ut=>{var nt={};return H.forEach((ft,xt)=>{var Rt=ft.fieldName,Zt=ut[xt],me=ft.getter,Ue=ft.getterContext,we=ut[xt+H.length],vn=ft.setter,xn=ft.setterContext;nt[Rt]={read:U=>Zt.fromWireType(me(Ue,U)),write:(U,W)=>{var lt=[];vn(xn,U,we.toWireType(lt,W)),Lt(lt)}}}),[{name:_.name,fromWireType:ft=>{var xt={};for(var Rt in nt)xt[Rt]=nt[Rt].read(ft);return L(ft),xt},toWireType:(ft,xt)=>{for(var Rt in nt)if(!(Rt in xt))throw new TypeError(`Missing field: "${Rt}"`);var Zt=w();for(Rt in nt)nt[Rt].write(Zt,xt[Rt]);return ft!==null&&ft.push(L,Zt),Zt},argPackAdvance:he,readValueFromPointer:j,destructorFunction:L}]})};function I(m,_,w,L,H){}var ht=()=>{for(var m=new Array(256),_=0;_<256;++_)m[_]=String.fromCharCode(_);K=m},K,O=m=>{for(var _="",w=m;F[w>>>0];)_+=K[F[w++>>>0]];return _},ot,tt=m=>{throw new ot(m)};function Wt(m,_,w={}){var L=_.name;if(m||tt(`type "${L}" must have a positive integer typeid pointer`),At.hasOwnProperty(m)){if(w.ignoreDuplicateRegistrations)return;tt(`Cannot register type '${L}' twice`)}if(At[m]=_,delete kt[m],gt.hasOwnProperty(m)){var H=gt[m];delete gt[m],H.forEach(Q=>Q())}}function Kt(m,_,w={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Wt(m,_,w)}var he=8;function oe(m,_,w,L){m>>>=0,_>>>=0,_=O(_),Kt(m,{name:_,fromWireType:function(H){return!!H},toWireType:function(H,Q){return Q?w:L},argPackAdvance:he,readValueFromPointer:function(H){return this.fromWireType(F[H>>>0])},destructorFunction:null})}var De=m=>({count:m.count,deleteScheduled:m.deleteScheduled,preservePointerOnDelete:m.preservePointerOnDelete,ptr:m.ptr,ptrType:m.ptrType,smartPtr:m.smartPtr,smartPtrType:m.smartPtrType}),qe=m=>{function _(w){return w.$$.ptrType.registeredClass.name}tt(_(m)+" instance already deleted")},Xi=!1,Lr=m=>{},kn=m=>{m.smartPtr?m.smartPtrType.rawDestructor(m.smartPtr):m.ptrType.registeredClass.rawDestructor(m.ptr)},qi=m=>{m.count.value-=1;var _=m.count.value===0;_&&kn(m)},Dr=(m,_,w)=>{if(_===w)return m;if(w.baseClass===void 0)return null;var L=Dr(m,_,w.baseClass);return L===null?null:w.downcast(L)},Ir={},Yi=()=>Object.keys(xi).length,rs=()=>{var m=[];for(var _ in xi)xi.hasOwnProperty(_)&&m.push(xi[_]);return m},wn=[],ji=()=>{for(;wn.length;){var m=wn.pop();m.$$.deleteScheduled=!1,m.delete()}},Jn,_o=m=>{Jn=m,wn.length&&Jn&&Jn(ji)},vo=()=>{n.getInheritedInstanceCount=Yi,n.getLiveInheritedInstances=rs,n.flushPendingDeletes=ji,n.setDelayFunction=_o},xi={},T=(m,_)=>{for(_===void 0&&tt("ptr should not be undefined");m.baseClass;)_=m.upcast(_),m=m.baseClass;return _},k=(m,_)=>(_=T(m,_),xi[_]),X=(m,_)=>{(!_.ptrType||!_.ptr)&&Ft("makeClassHandle requires ptr and ptrType");var w=!!_.smartPtrType,L=!!_.smartPtr;return w!==L&&Ft("Both smartPtrType and smartPtr must be specified"),_.count={value:1},B(Object.create(m,{$$:{value:_,writable:!0}}))};function q(m){var _=this.getPointee(m);if(!_)return this.destructor(m),null;var w=k(this.registeredClass,_);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=_,w.$$.smartPtr=m,w.clone();var L=w.clone();return this.destructor(m),L}function H(){return this.isSmartPointer?X(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:m}):X(this.registeredClass.instancePrototype,{ptrType:this,ptr:m})}var Q=this.registeredClass.getActualType(_),ut=Ir[Q];if(!ut)return H.call(this);var nt;this.isConst?nt=ut.constPointerType:nt=ut.pointerType;var ft=Dr(_,this.registeredClass,nt.registeredClass);return ft===null?H.call(this):this.isSmartPointer?X(nt.registeredClass.instancePrototype,{ptrType:nt,ptr:ft,smartPtrType:this,smartPtr:m}):X(nt.registeredClass.instancePrototype,{ptrType:nt,ptr:ft})}var B=m=>typeof FinalizationRegistry>"u"?(B=_=>_,m):(Xi=new FinalizationRegistry(_=>{qi(_.$$)}),B=_=>{var w=_.$$,L=!!w.smartPtr;if(L){var H={$$:w};Xi.register(_,H,_)}return _},Lr=_=>Xi.unregister(_),B(m)),St=()=>{Object.assign(Pt.prototype,{isAliasOf(m){if(!(this instanceof Pt)||!(m instanceof Pt))return!1;var _=this.$$.ptrType.registeredClass,w=this.$$.ptr;m.$$=m.$$;for(var L=m.$$.ptrType.registeredClass,H=m.$$.ptr;_.baseClass;)w=_.upcast(w),_=_.baseClass;for(;L.baseClass;)H=L.upcast(H),L=L.baseClass;return _===L&&w===H},clone(){if(this.$$.ptr||qe(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var m=B(Object.create(Object.getPrototypeOf(this),{$$:{value:De(this.$$)}}));return m.$$.count.value+=1,m.$$.deleteScheduled=!1,m},delete(){this.$$.ptr||qe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),Lr(this),qi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||qe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),wn.push(this),wn.length===1&&Jn&&Jn(ji),this.$$.deleteScheduled=!0,this}})};function Pt(){}var Nt=(m,_)=>Object.defineProperty(_,"name",{value:m}),Bt=(m,_,w)=>{if(m[_].overloadTable===void 0){var L=m[_];m[_]=function(...H){return m[_].overloadTable.hasOwnProperty(H.length)||tt(`Function '${w}' called with an invalid number of arguments (${H.length}) - expects one of (${m[_].overloadTable})!`),m[_].overloadTable[H.length].apply(this,H)},m[_].overloadTable=[],m[_].overloadTable[L.argCount]=L}},Xt=(m,_,w)=>{n.hasOwnProperty(m)?((w===void 0||n[m].overloadTable!==void 0&&n[m].overloadTable[w]!==void 0)&&tt(`Cannot register public name '${m}' twice`),Bt(n,m,m),n.hasOwnProperty(w)&&tt(`Cannot register multiple overloads of a function with the same number of arguments (${w})!`),n[m].overloadTable[w]=_):(n[m]=_,w!==void 0&&(n[m].numArguments=w))},Yt=48,Ht=57,ge=m=>{if(m===void 0)return"_unknown";m=m.replace(/[^a-zA-Z0-9_]/g,"$");var _=m.charCodeAt(0);return _>=Yt&&_<=Ht?`_${m}`:m};function ye(m,_,w,L,H,Q,ut,nt){this.name=m,this.constructor=_,this.instancePrototype=w,this.rawDestructor=L,this.baseClass=H,this.getActualType=Q,this.upcast=ut,this.downcast=nt,this.pureVirtualFunctions=[]}var Me=(m,_,w)=>{for(;_!==w;)_.upcast||tt(`Expected null or instance of ${w.name}, got an instance of ${_.name}`),m=_.upcast(m),_=_.baseClass;return m};function Ke(m,_){if(_===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;_.$$||tt(`Cannot pass "${So(_)}" as a ${this.name}`),_.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`);var w=_.$$.ptrType.registeredClass,L=Me(_.$$.ptr,w,this.registeredClass);return L}function pe(m,_){var w;if(_===null)return this.isReference&&tt(`null is not a valid ${this.name}`),this.isSmartPointer?(w=this.rawConstructor(),m!==null&&m.push(this.rawDestructor,w),w):0;(!_||!_.$$)&&tt(`Cannot pass "${So(_)}" as a ${this.name}`),_.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&_.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);var L=_.$$.ptrType.registeredClass;if(w=Me(_.$$.ptr,L,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&tt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?w=_.$$.smartPtr:tt(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:w=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)w=_.$$.smartPtr;else{var H=_.clone();w=this.rawShare(w,Ve.toHandle(()=>H.delete())),m!==null&&m.push(this.rawDestructor,w)}break;default:tt("Unsupporting sharing policy")}return w}function Vt(m,_){if(_===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;_.$$||tt(`Cannot pass "${So(_)}" as a ${this.name}`),_.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),_.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${_.$$.ptrType.name} to parameter type ${this.name}`);var w=_.$$.ptrType.registeredClass,L=Me(_.$$.ptr,w,this.registeredClass);return L}var Oe=()=>{Object.assign(ue.prototype,{getPointee(m){return this.rawGetPointee&&(m=this.rawGetPointee(m)),m},destructor(m){this.rawDestructor?.(m)},argPackAdvance:he,readValueFromPointer:j,fromWireType:q})};function ue(m,_,w,L,H,Q,ut,nt,ft,xt,Rt){this.name=m,this.registeredClass=_,this.isReference=w,this.isConst=L,this.isSmartPointer=H,this.pointeeType=Q,this.sharingPolicy=ut,this.rawGetPointee=nt,this.rawConstructor=ft,this.rawShare=xt,this.rawDestructor=Rt,!H&&_.baseClass===void 0?L?(this.toWireType=Ke,this.destructorFunction=null):(this.toWireType=Vt,this.destructorFunction=null):this.toWireType=pe}var en=(m,_,w)=>{n.hasOwnProperty(m)||Ft("Replacing nonexistent public symbol"),n[m].overloadTable!==void 0&&w!==void 0?n[m].overloadTable[w]=_:(n[m]=_,n[m].argCount=w)},Qn=(m,_,w)=>{m=m.replace(/p/g,"i");var L=n["dynCall_"+m];return L(_,...w)},Ie,ti=m=>Ie.get(m),Ee=(m,_,w=[])=>{if(m.includes("j"))return Qn(m,_,w);var L=ti(_)(...w);return m[0]=="p"?L>>>0:L},gn=(m,_)=>(...w)=>Ee(m,_,w),Ze=(m,_)=>{m=O(m);function w(){return m.includes("j")||m.includes("p")?gn(m,_):ti(_)}var L=w();return typeof L!="function"&&tt(`unknown function pointer with signature ${m}: ${_}`),L},nn=(m,_)=>{var w=Nt(_,function(L){this.name=_,this.message=L;var H=new Error(L).stack;H!==void 0&&(this.stack=this.toString()+`
`+H.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(m.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},w},Ki,ss=m=>{var _=Ll(m),w=O(_);return zn(_),w},yi=(m,_)=>{var w=[],L={};function H(Q){if(!L[Q]&&!At[Q]){if(kt[Q]){kt[Q].forEach(H);return}w.push(Q),L[Q]=!0}}throw _.forEach(H),new Ki(`${m}: `+w.map(ss).join([", "]))};function Zu(m,_,w,L,H,Q,ut,nt,ft,xt,Rt,Zt,me){m>>>=0,_>>>=0,w>>>=0,L>>>=0,H>>>=0,Q>>>=0,ut>>>=0,nt>>>=0,ft>>>=0,xt>>>=0,Rt>>>=0,Zt>>>=0,me>>>=0,Rt=O(Rt),Q=Ze(H,Q),nt&&=Ze(ut,nt),xt&&=Ze(ft,xt),me=Ze(Zt,me);var Ue=ge(Rt);Xt(Ue,function(){yi(`Cannot construct ${Rt} due to unbound types`,[L])}),wt([m,_,w],L?[L]:[],we=>{we=we[0];var vn,xn;L?(vn=we.registeredClass,xn=vn.instancePrototype):xn=Pt.prototype;var U=Nt(Rt,function(...Ce){if(Object.getPrototypeOf(this)!==W)throw new ot("Use 'new' to construct "+Rt);if(lt.constructor_body===void 0)throw new ot(Rt+" has no accessible constructor");var ln=lt.constructor_body[Ce.length];if(ln===void 0)throw new ot(`Tried to invoke ctor of ${Rt} with invalid number of parameters (${Ce.length}) - expected (${Object.keys(lt.constructor_body).toString()}) parameters instead!`);return ln.apply(this,Ce)}),W=Object.create(xn,{constructor:{value:U}});U.prototype=W;var lt=new ye(Rt,U,W,me,vn,Q,nt,xt);lt.baseClass&&(lt.baseClass.__derivedClasses??=[],lt.baseClass.__derivedClasses.push(lt));var yt=new ue(Rt,lt,!0,!1,!1),jt=new ue(Rt+"*",lt,!1,!1,!1),Te=new ue(Rt+" const*",lt,!1,!0,!1);return Ir[m]={pointerType:jt,constPointerType:Te},en(Ue,U),[yt,jt,Te]})}var xo=(m,_)=>{for(var w=[],L=0;L<m;L++)w.push($[_+L*4>>>2>>>0]);return w};function bl(m){for(var _=1;_<m.length;++_)if(m[_]!==null&&m[_].destructorFunction===void 0)return!0;return!1}function Sl(m,_){if(!(m instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof m} which is not a function`);var w=Nt(m.name||"unknownFunctionName",function(){});w.prototype=m.prototype;var L=new w,H=m.apply(L,_);return H instanceof Object?H:L}function Ju(m,_,w,L){for(var H=bl(m),Q=m.length,ut="",nt="",ft=0;ft<Q-2;++ft)ut+=(ft!==0?", ":"")+"arg"+ft,nt+=(ft!==0?", ":"")+"arg"+ft+"Wired";var xt=`
        return function (${ut}) {
        if (arguments.length !== ${Q-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${Q-2}');
        }`;H&&(xt+=`var destructors = [];
`);var Rt=H?"destructors":"null",Zt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];_&&(xt+="var thisWired = classParam['toWireType']("+Rt+`, this);
`);for(var ft=0;ft<Q-2;++ft)xt+="var arg"+ft+"Wired = argType"+ft+"['toWireType']("+Rt+", arg"+ft+`);
`,Zt.push("argType"+ft);if(_&&(nt="thisWired"+(nt.length>0?", ":"")+nt),xt+=(w||L?"var rv = ":"")+"invoker(fn"+(nt.length>0?", ":"")+nt+`);
`,H)xt+=`runDestructors(destructors);
`;else for(var ft=_?1:2;ft<m.length;++ft){var me=ft===1?"thisWired":"arg"+(ft-2)+"Wired";m[ft].destructorFunction!==null&&(xt+=`${me}_dtor(${me});
`,Zt.push(`${me}_dtor`))}return w&&(xt+=`var ret = retType['fromWireType'](rv);
return ret;
`),xt+=`}
`,[Zt,xt]}function yo(m,_,w,L,H,Q){var ut=_.length;ut<2&&tt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var nt=_[1]!==null&&w!==null,ft=bl(_),xt=_[0].name!=="void",Rt=[m,tt,L,H,Lt,_[0],_[1]],Zt=0;Zt<ut-2;++Zt)Rt.push(_[Zt+2]);if(!ft)for(var Zt=nt?1:2;Zt<_.length;++Zt)_[Zt].destructorFunction!==null&&Rt.push(_[Zt].destructorFunction);let[me,Ue]=Ju(_,nt,xt,Q);me.push(Ue);var we=Sl(Function,me)(...Rt);return Nt(m,we)}var Qu=function(m,_,w,L,H,Q){m>>>=0,w>>>=0,L>>>=0,H>>>=0,Q>>>=0;var ut=xo(_,w);H=Ze(L,H),wt([],[m],nt=>{nt=nt[0];var ft=`constructor ${nt.name}`;if(nt.registeredClass.constructor_body===void 0&&(nt.registeredClass.constructor_body=[]),nt.registeredClass.constructor_body[_-1]!==void 0)throw new ot(`Cannot register multiple constructors with identical number of parameters (${_-1}) for class '${nt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return nt.registeredClass.constructor_body[_-1]=()=>{yi(`Cannot construct ${nt.name} due to unbound types`,ut)},wt([],ut,xt=>(xt.splice(1,0,null),nt.registeredClass.constructor_body[_-1]=yo(ft,xt,null,H,Q),[])),[]})},El=m=>{m=m.trim();const _=m.indexOf("(");return _!==-1?m.substr(0,_):m},th=function(m,_,w,L,H,Q,ut,nt,ft){m>>>=0,_>>>=0,L>>>=0,H>>>=0,Q>>>=0,ut>>>=0;var xt=xo(w,L);_=O(_),_=El(_),Q=Ze(H,Q),wt([],[m],Rt=>{Rt=Rt[0];var Zt=`${Rt.name}.${_}`;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),nt&&Rt.registeredClass.pureVirtualFunctions.push(_);function me(){yi(`Cannot call ${Zt} due to unbound types`,xt)}var Ue=Rt.registeredClass.instancePrototype,we=Ue[_];return we===void 0||we.overloadTable===void 0&&we.className!==Rt.name&&we.argCount===w-2?(me.argCount=w-2,me.className=Rt.name,Ue[_]=me):(Bt(Ue,_,Zt),Ue[_].overloadTable[w-2]=me),wt([],xt,vn=>{var xn=yo(Zt,vn,Rt,Q,ut,ft);return Ue[_].overloadTable===void 0?(xn.argCount=w-2,Ue[_]=xn):Ue[_].overloadTable[w-2]=xn,[]}),[]})},Mo=[],Bn=[];function bo(m){m>>>=0,m>9&&--Bn[m+1]===0&&(Bn[m]=void 0,Mo.push(m))}var eh=()=>Bn.length/2-5-Mo.length,nh=()=>{Bn.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=eh},Ve={toValue:m=>(m||tt("Cannot use deleted val. handle = "+m),Bn[m]),toHandle:m=>{switch(m){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const _=Mo.pop()||Bn.length;return Bn[_]=m,Bn[_+1]=1,_}}}},ih={name:"emscripten::val",fromWireType:m=>{var _=Ve.toValue(m);return bo(m),_},toWireType:(m,_)=>Ve.toHandle(_),argPackAdvance:he,readValueFromPointer:j,destructorFunction:null};function Tl(m){return m>>>=0,Kt(m,ih)}var rh=(m,_,w)=>{switch(_){case 1:return w?function(L){return this.fromWireType(C[L>>>0])}:function(L){return this.fromWireType(F[L>>>0])};case 2:return w?function(L){return this.fromWireType(st[L>>>1>>>0])}:function(L){return this.fromWireType(M[L>>>1>>>0])};case 4:return w?function(L){return this.fromWireType(b[L>>>2>>>0])}:function(L){return this.fromWireType($[L>>>2>>>0])};default:throw new TypeError(`invalid integer width (${_}): ${m}`)}};function sh(m,_,w,L){m>>>=0,_>>>=0,w>>>=0,_=O(_);function H(){}H.values={},Kt(m,{name:_,constructor:H,fromWireType:function(Q){return this.constructor.values[Q]},toWireType:(Q,ut)=>ut.value,argPackAdvance:he,readValueFromPointer:rh(_,w,L),destructorFunction:null}),Xt(_,H)}var os=(m,_)=>{var w=At[m];return w===void 0&&tt(`${_} has unknown type ${ss(m)}`),w};function oh(m,_,w){m>>>=0,_>>>=0;var L=os(m,"enum");_=O(_);var H=L.constructor,Q=Object.create(L.constructor.prototype,{value:{value:w},constructor:{value:Nt(`${L.name}_${_}`,function(){})}});H.values[w]=Q,H[_]=Q}var So=m=>{if(m===null)return"null";var _=typeof m;return _==="object"||_==="array"||_==="function"?m.toString():""+m},ah=(m,_)=>{switch(_){case 4:return function(w){return this.fromWireType(Y[w>>>2>>>0])};case 8:return function(w){return this.fromWireType(rt[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${_}): ${m}`)}},lh=function(m,_,w){m>>>=0,_>>>=0,w>>>=0,_=O(_),Kt(m,{name:_,fromWireType:L=>L,toWireType:(L,H)=>H,argPackAdvance:he,readValueFromPointer:ah(_,w),destructorFunction:null})};function ch(m,_,w,L,H,Q,ut){m>>>=0,w>>>=0,L>>>=0,H>>>=0,Q>>>=0;var nt=xo(_,w);m=O(m),m=El(m),H=Ze(L,H),Xt(m,function(){yi(`Cannot call ${m} due to unbound types`,nt)},_-1),wt([],nt,ft=>{var xt=[ft[0],null].concat(ft.slice(1));return en(m,yo(m,xt,null,H,Q,ut),_-1),[]})}var uh=(m,_,w)=>{switch(_){case 1:return w?L=>C[L>>>0]:L=>F[L>>>0];case 2:return w?L=>st[L>>>1>>>0]:L=>M[L>>>1>>>0];case 4:return w?L=>b[L>>>2>>>0]:L=>$[L>>>2>>>0];default:throw new TypeError(`invalid integer width (${_}): ${m}`)}};function hh(m,_,w,L,H){m>>>=0,_>>>=0,w>>>=0,_=O(_);var Q=Rt=>Rt;if(L===0){var ut=32-8*w;Q=Rt=>Rt<<ut>>>ut}var nt=_.includes("unsigned"),ft=(Rt,Zt)=>{},xt;nt?xt=function(Rt,Zt){return ft(Zt,this.name),Zt>>>0}:xt=function(Rt,Zt){return ft(Zt,this.name),Zt},Kt(m,{name:_,fromWireType:Q,toWireType:xt,argPackAdvance:he,readValueFromPointer:uh(_,w,L!==0),destructorFunction:null})}function dh(m,_,w){m>>>=0,w>>>=0;var L=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],H=L[_];function Q(ut){var nt=$[ut>>>2>>>0],ft=$[ut+4>>>2>>>0];return new H(C.buffer,ft,nt)}w=O(w),Kt(m,{name:w,fromWireType:Q,argPackAdvance:he,readValueFromPointer:Q},{ignoreDuplicateRegistrations:!0})}function fh(m,_){m>>>=0,Tl(m)}var ph=(m,_,w,L)=>{if(w>>>=0,!(L>0))return 0;for(var H=w,Q=w+L-1,ut=0;ut<m.length;++ut){var nt=m.charCodeAt(ut);if(nt>=55296&&nt<=57343){var ft=m.charCodeAt(++ut);nt=65536+((nt&1023)<<10)|ft&1023}if(nt<=127){if(w>=Q)break;_[w++>>>0]=nt}else if(nt<=2047){if(w+1>=Q)break;_[w++>>>0]=192|nt>>6,_[w++>>>0]=128|nt&63}else if(nt<=65535){if(w+2>=Q)break;_[w++>>>0]=224|nt>>12,_[w++>>>0]=128|nt>>6&63,_[w++>>>0]=128|nt&63}else{if(w+3>=Q)break;_[w++>>>0]=240|nt>>18,_[w++>>>0]=128|nt>>12&63,_[w++>>>0]=128|nt>>6&63,_[w++>>>0]=128|nt&63}}return _[w>>>0]=0,w-H},mh=(m,_,w)=>ph(m,F,_,w),gh=m=>{for(var _=0,w=0;w<m.length;++w){var L=m.charCodeAt(w);L<=127?_++:L<=2047?_+=2:L>=55296&&L<=57343?(_+=4,++w):_+=3}return _},Al=typeof TextDecoder<"u"?new TextDecoder:void 0,_h=(m,_,w)=>{_>>>=0;for(var L=_+w,H=_;m[H]&&!(H>=L);)++H;if(H-_>16&&m.buffer&&Al)return Al.decode(m.subarray(_,H));for(var Q="";_<H;){var ut=m[_++];if(!(ut&128)){Q+=String.fromCharCode(ut);continue}var nt=m[_++]&63;if((ut&224)==192){Q+=String.fromCharCode((ut&31)<<6|nt);continue}var ft=m[_++]&63;if((ut&240)==224?ut=(ut&15)<<12|nt<<6|ft:ut=(ut&7)<<18|nt<<12|ft<<6|m[_++]&63,ut<65536)Q+=String.fromCharCode(ut);else{var xt=ut-65536;Q+=String.fromCharCode(55296|xt>>10,56320|xt&1023)}}return Q},vh=(m,_)=>(m>>>=0,m?_h(F,m,_):"");function xh(m,_){m>>>=0,_>>>=0,_=O(_);var w=_==="std::string";Kt(m,{name:_,fromWireType(L){var H=$[L>>>2>>>0],Q=L+4,ut;if(w)for(var nt=Q,ft=0;ft<=H;++ft){var xt=Q+ft;if(ft==H||F[xt>>>0]==0){var Rt=xt-nt,Zt=vh(nt,Rt);ut===void 0?ut=Zt:(ut+="\0",ut+=Zt),nt=xt+1}}else{for(var me=new Array(H),ft=0;ft<H;++ft)me[ft]=String.fromCharCode(F[Q+ft>>>0]);ut=me.join("")}return zn(L),ut},toWireType(L,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var Q,ut=typeof H=="string";ut||H instanceof Uint8Array||H instanceof Uint8ClampedArray||H instanceof Int8Array||tt("Cannot pass non-string to std::string"),w&&ut?Q=gh(H):Q=H.length;var nt=wo(4+Q+1),ft=nt+4;if($[nt>>>2>>>0]=Q,w&&ut)mh(H,ft,Q+1);else if(ut)for(var xt=0;xt<Q;++xt){var Rt=H.charCodeAt(xt);Rt>255&&(zn(ft),tt("String has UTF-16 code units that do not fit in 8 bits")),F[ft+xt>>>0]=Rt}else for(var xt=0;xt<Q;++xt)F[ft+xt>>>0]=H[xt];return L!==null&&L.push(zn,nt),nt},argPackAdvance:he,readValueFromPointer:j,destructorFunction(L){zn(L)}})}var wl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,yh=(m,_)=>{for(var w=m,L=w>>1,H=L+_/2;!(L>=H)&&M[L>>>0];)++L;if(w=L<<1,w-m>32&&wl)return wl.decode(F.subarray(m>>>0,w>>>0));for(var Q="",ut=0;!(ut>=_/2);++ut){var nt=st[m+ut*2>>>1>>>0];if(nt==0)break;Q+=String.fromCharCode(nt)}return Q},Mh=(m,_,w)=>{if(w??=2147483647,w<2)return 0;w-=2;for(var L=_,H=w<m.length*2?w/2:m.length,Q=0;Q<H;++Q){var ut=m.charCodeAt(Q);st[_>>>1>>>0]=ut,_+=2}return st[_>>>1>>>0]=0,_-L},bh=m=>m.length*2,Sh=(m,_)=>{for(var w=0,L="";!(w>=_/4);){var H=b[m+w*4>>>2>>>0];if(H==0)break;if(++w,H>=65536){var Q=H-65536;L+=String.fromCharCode(55296|Q>>10,56320|Q&1023)}else L+=String.fromCharCode(H)}return L},Eh=(m,_,w)=>{if(_>>>=0,w??=2147483647,w<4)return 0;for(var L=_,H=L+w-4,Q=0;Q<m.length;++Q){var ut=m.charCodeAt(Q);if(ut>=55296&&ut<=57343){var nt=m.charCodeAt(++Q);ut=65536+((ut&1023)<<10)|nt&1023}if(b[_>>>2>>>0]=ut,_+=4,_+4>H)break}return b[_>>>2>>>0]=0,_-L},Th=m=>{for(var _=0,w=0;w<m.length;++w){var L=m.charCodeAt(w);L>=55296&&L<=57343&&++w,_+=4}return _},Ah=function(m,_,w){m>>>=0,_>>>=0,w>>>=0,w=O(w);var L,H,Q,ut;_===2?(L=yh,H=Mh,ut=bh,Q=nt=>M[nt>>>1>>>0]):_===4&&(L=Sh,H=Eh,ut=Th,Q=nt=>$[nt>>>2>>>0]),Kt(m,{name:w,fromWireType:nt=>{for(var ft=$[nt>>>2>>>0],xt,Rt=nt+4,Zt=0;Zt<=ft;++Zt){var me=nt+4+Zt*_;if(Zt==ft||Q(me)==0){var Ue=me-Rt,we=L(Rt,Ue);xt===void 0?xt=we:(xt+="\0",xt+=we),Rt=me+_}}return zn(nt),xt},toWireType:(nt,ft)=>{typeof ft!="string"&&tt(`Cannot pass non-string to C++ string type ${w}`);var xt=ut(ft),Rt=wo(4+xt+_);return $[Rt>>>2>>>0]=xt/_,H(ft,Rt+4,xt+_),nt!==null&&nt.push(zn,Rt),Rt},argPackAdvance:he,readValueFromPointer:j,destructorFunction(nt){zn(nt)}})};function wh(m,_,w,L,H,Q){m>>>=0,_>>>=0,w>>>=0,L>>>=0,H>>>=0,Q>>>=0,ct[m]={name:O(_),rawConstructor:Ze(w,L),rawDestructor:Ze(H,Q),fields:[]}}function Rh(m,_,w,L,H,Q,ut,nt,ft,xt){m>>>=0,_>>>=0,w>>>=0,L>>>=0,H>>>=0,Q>>>=0,ut>>>=0,nt>>>=0,ft>>>=0,xt>>>=0,ct[m].fields.push({fieldName:O(_),getterReturnType:w,getter:Ze(L,H),getterContext:Q,setterArgumentType:ut,setter:Ze(nt,ft),setterContext:xt})}var Ch=function(m,_){m>>>=0,_>>>=0,_=O(_),Kt(m,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:()=>{},toWireType:(w,L)=>{}})};function Ph(m,_,w){return m>>>=0,_>>>=0,w>>>=0,F.copyWithin(m>>>0,_>>>0,_+w>>>0)}var Rl=(m,_,w)=>{var L=[],H=m.toWireType(L,w);return L.length&&($[_>>>2>>>0]=Ve.toHandle(L)),H};function Lh(m,_,w){return m>>>=0,_>>>=0,w>>>=0,m=Ve.toValue(m),_=os(_,"emval::as"),Rl(_,w,m)}var Dh={},Cl=m=>{var _=Dh[m];return _===void 0?O(m):_},Eo=[];function Ih(m,_,w,L,H){return m>>>=0,_>>>=0,w>>>=0,L>>>=0,H>>>=0,m=Eo[m],_=Ve.toValue(_),w=Cl(w),m(_,_[w],L,H)}function Uh(m,_){return m>>>=0,_>>>=0,m=Ve.toValue(m),_=Ve.toValue(_),m==_}var Nh=m=>{var _=Eo.length;return Eo.push(m),_},Fh=(m,_)=>{for(var w=new Array(m),L=0;L<m;++L)w[L]=os($[_+L*4>>>2>>>0],"parameter "+L);return w};function Oh(m,_,w){_>>>=0;var L=Fh(m,_),H=L.shift();m--;var Q=`return function (obj, func, destructorsRef, args) {
`,ut=0,nt=[];w===0&&nt.push("obj");for(var ft=["retType"],xt=[H],Rt=0;Rt<m;++Rt)nt.push("arg"+Rt),ft.push("argType"+Rt),xt.push(L[Rt]),Q+=`  var arg${Rt} = argType${Rt}.readValueFromPointer(args${ut?"+"+ut:""});
`,ut+=L[Rt].argPackAdvance;var Zt=w===1?"new func":"func.call";Q+=`  var rv = ${Zt}(${nt.join(", ")});
`,H.isVoid||(ft.push("emval_returnValue"),xt.push(Rl),Q+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Q+=`};
`,ft.push(Q);var me=Sl(Function,ft)(...xt),Ue=`methodCaller<(${L.map(we=>we.name).join(", ")}) => ${H.name}>`;return Nh(Nt(Ue,me))}function kh(m,_){return m>>>=0,_>>>=0,m=Ve.toValue(m),_=Ve.toValue(_),Ve.toHandle(m[_])}function Bh(m){m>>>=0,m>9&&(Bn[m+1]+=1)}function zh(m){return m>>>=0,Ve.toHandle(Cl(m))}function Hh(){return Ve.toHandle({})}function Vh(m){m>>>=0;var _=Ve.toValue(m);Lt(_),bo(m)}function Gh(m,_,w){m>>>=0,_>>>=0,w>>>=0,m=Ve.toValue(m),_=Ve.toValue(_),w=Ve.toValue(w),m[_]=w}function $h(m,_){m>>>=0,_>>>=0,m=os(m,"_emval_take_value");var w=m.readValueFromPointer(_);return Ve.toHandle(w)}var Wh=()=>4294901760,Xh=m=>{var _=N.buffer,w=(m-_.byteLength+65535)/65536;try{return N.grow(w),pt(),1}catch{}};function qh(m){m>>>=0;var _=F.length,w=Wh();if(m>w)return!1;for(var L=(ft,xt)=>ft+(xt-ft%xt)%xt,H=1;H<=4;H*=2){var Q=_*(1+.2/H);Q=Math.min(Q,m+100663296);var ut=Math.min(w,L(Math.max(m,Q),65536)),nt=Xh(ut);if(nt)return!0}return!1}var Pl=(m,_)=>{m<128?_.push(m):_.push(m%128|128,m>>7)},Yh=m=>{for(var _={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},w={parameters:[],results:m[0]=="v"?[]:[_[m[0]]]},L=1;L<m.length;++L)w.parameters.push(_[m[L]]);return w},jh=(m,_)=>{var w=m.slice(0,1),L=m.slice(1),H={i:127,p:127,j:126,f:125,d:124,e:111};_.push(96),Pl(L.length,_);for(var Q=0;Q<L.length;++Q)_.push(H[L[Q]]);w=="v"?_.push(0):_.push(1,H[w])},Kh=(m,_)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Yh(_),m);var w=[1];jh(_,w);var L=[0,97,115,109,1,0,0,0,1];Pl(w.length,L),L.push(...w),L.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var H=new WebAssembly.Module(new Uint8Array(L)),Q=new WebAssembly.Instance(H,{e:{f:m}}),ut=Q.exports.f;return ut},Zh=(m,_)=>{if(Mi)for(var w=m;w<m+_;w++){var L=ti(w);L&&Mi.set(L,w)}},Mi,Jh=m=>(Mi||(Mi=new WeakMap,Zh(0,Ie.length)),Mi.get(m)||0),To=[],Qh=()=>{if(To.length)return To.pop();try{Ie.grow(1)}catch(m){throw m instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":m}return Ie.length-1},Ao=(m,_)=>Ie.set(m,_),Ur=(m,_)=>{var w=Jh(m);if(w)return w;var L=Qh();try{Ao(L,m)}catch(Q){if(!(Q instanceof TypeError))throw Q;var H=Kh(m,_);Ao(L,H)}return Mi.set(m,L),L},Nr=m=>{Mi.delete(ti(m)),Ao(m,null),To.push(m)};Tt=n.InternalError=class extends Error{constructor(_){super(_),this.name="InternalError"}},ht(),ot=n.BindingError=class extends Error{constructor(_){super(_),this.name="BindingError"}},St(),vo(),Oe(),Ki=n.UnboundTypeError=nn(Error,"UnboundTypeError"),nh();var td={i:Et,D:bt,n:le,C:I,H:oe,h:Zu,g:Qu,a:th,G:Tl,t:sh,f:oh,x:lh,c:ch,j:hh,e:dh,k:fh,w:xh,s:Ah,o:wh,l:Rh,I:Ch,F:Ph,v:Lh,z:Ih,b:bo,m:Uh,y:Oh,B:kh,u:Bh,q:zh,A:Hh,p:Vh,r:Gh,d:$h,E:qh},_n=R(),Ll=m=>(Ll=_n.L)(m),zn=m=>(zn=_n.N)(m),wo=m=>(wo=_n.O)(m),Dl=m=>(Dl=_n.P)(m);function ed(m){m=Object.assign({},m);var _=L=>H=>L(H)>>>0,w=L=>()=>L()>>>0;return m.L=_(m.L),m.O=_(m.O),m._emscripten_stack_alloc=_(m._emscripten_stack_alloc),m.emscripten_stack_get_current=w(m.emscripten_stack_get_current),m}n.addFunction=Ur,n.removeFunction=Nr;var as;It=function m(){as||Il(),as||(It=m)};function Il(){if(dt>0||(Dt(),dt>0))return;function m(){as||(as=!0,n.calledRun=!0,!P&&(Mt(),r(n),n.onRuntimeInitialized?.(),_t()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),m()},1)):m()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Il(),e=a,e}})();const gv=""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,Be=1;function _v(i,t,e=256){const{Manifold:n,CrossSection:r}=i,s=t.body,a=c=>r.circle(c,e),o=(c,d)=>n.cylinder(c,d,d,e);let l;if(s.type==="prism"){const c=s.segs[s.segs.length-1].x1,d=[[0,0],[c,0]];for(let u=s.segs.length-1;u>=0;u--)d.push([s.segs[u].x1,s.segs[u].h],[s.segs[u].x0,s.segs[u].h]);let f=new r([d],"Positive");for(const u of s.fillets||[]){const p=u.dir>0?u.xb:u.xb-u.r,v=r.square([u.r,u.r]).translate([p,u.z]),x=u.dir>0?u.xb+u.r:u.xb-u.r;f=f.add(v.subtract(a(u.r).translate([x,u.z+u.r])))}if(l=f.extrude(s.W).rotate([90,0,0]).translate([0,s.W,0]),s.corner){const u=s.corner.size,p=s.segs[0].h,v=s.W;let x;s.corner.kind==="round"?x=r.square([u,u]).subtract(a(u).translate([u,u])):x=new r([[[0,0],[u,0],[0,u]]],"Positive");const h=[x,x.mirror([1,0]).translate([c,0]),x.mirror([0,1]).translate([0,v]),x.mirror([1,0]).mirror([0,1]).translate([c,v])];for(const g of h)l=l.subtract(g.extrude(p+2*Be).translate([0,0,-Be]))}for(const u of t.features)l=l.subtract(Hc(i,t,u,e))}else{const c=s.chamfer||0,d=[[0,0],[s.R,0]];c>0?d.push([s.R,s.t-c],[s.R-c,s.t]):d.push([s.R,s.t]),s.hubR>0?d.push([s.hubR,s.t],[s.hubR,s.t+s.hubH],[0,s.t+s.hubH]):d.push([0,s.t]),l=n.revolve(new r([d],"Positive"),e);const f=s.t+(s.hubR>0?s.hubH:0);l=l.subtract(o(f+2*Be,s.boreD/2).translate([0,0,-Be]));for(const u of t.features)l=l.subtract(Hc(i,t,u,e))}return l}function Hc(i,t,e,n){const{Manifold:r,CrossSection:s}=i,a=(o,l)=>r.cylinder(o,l,l,n);switch(e.kind){case"zhole":{let o=a(e.depth+Be,e.d/2).translate([e.x,e.y,e.top-e.depth]);return e.thru&&(o=a(e.depth+2*Be,e.d/2).translate([e.x,e.y,-Be])),e.cb&&(o=o.add(a(e.cb.depth+Be,e.cb.d/2).translate([e.x,e.y,e.top-e.cb.depth]))),o}case"yhole":return a(t.body.W+2*Be,e.d/2).rotate([-90,0,0]).translate([e.x,-Be,e.z]);case"xhole":return a(e.x1-e.x0+2*Be,e.d/2).rotate([0,90,0]).translate([e.x0-Be,e.y,e.z]);case"slot":{const o=(e.len-e.w)/2,l=s.circle(e.w/2,n),c=e.dir==="x"?s.hull([l.translate([-o,0]),l.translate([o,0])]):s.hull([l.translate([0,-o]),l.translate([0,o])]),d=e.thru?-Be:e.top-e.depth,f=e.thru?e.depth+2*Be:e.depth+Be;return c.extrude(f).translate([e.x,e.y,d])}case"pocket":{const o=e.x1-e.x0,l=e.y1-e.y0,c=e.r,d=s.circle(c,n);return s.hull([d.translate([c,c]),d.translate([o-c,c]),d.translate([c,l-c]),d.translate([o-c,l-c])]).extrude(e.depth+Be).translate([e.x0,e.y0,e.top-e.depth])}case"bolts":{let o=null;const l=t.body.t;for(let c=0;c<e.n;c++){const d=((e.startDeg||0)+360*c/e.n)*Math.PI/180,f=e.bc/2*Math.cos(d),u=e.bc/2*Math.sin(d);let p=a(l+2*Be,e.d/2).translate([f,u,-Be]);e.cb&&(p=p.add(a(e.cb.depth+Be,e.cb.d/2).translate([f,u,l-e.cb.depth]))),o=o?o.add(p):p}return o}}throw new Error("unknown feature "+e.kind)}let ua=null;function vv(){return ua||(ua=mv({locateFile:()=>gv}).then(i=>(i.setup(),i))),ua}const ha=new Map;async function Hu(i,t=96){const e=i.id+":"+t;if(ha.has(e))return ha.get(e);const n=await vv(),r=_v(n,i,t),s=r.getMesh(),a=new On;a.setAttribute("position",new mn(new Float32Array(s.vertProperties),s.numProp)),a.setIndex(new mn(new Uint32Array(s.triVerts),1));const o=a.toNonIndexed();o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere();const l=new X0(o,28),c=r.volume();r.delete&&r.delete();const d={geo:o,edges:l,volume:c};return ha.set(e,d),d}const Vc={dark:{body:10135220,edge:724498},light:{body:13226458,edge:1711910}};function Vu(i,t){const e=Vc[t]||Vc.dark,n=new G0,r=new q0({color:e.body,metalness:.15,roughness:.55,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});n.add(new In(i.geo,r)),n.add(new W0(i.edges,new ku({color:e.edge}))),n.add(new Y0(16777215,4478310,1.6));const s=new Fc(16777215,1.6);s.position.set(.6,-1,1.4),n.add(s);const a=new Fc(16777215,.5);return a.position.set(-1,.6,.4),n.add(a),n}function Gu(i,t){const e=i.geo.boundingBox,n=new G;e.getCenter(n);const r=i.geo.boundingSphere.radius,s=new _l(-r*t,r*t,r,-r,.1,r*20);return s.up.set(0,0,1),s.position.copy(n).add(new G(1,-1,1).normalize().multiplyScalar(r*6)),s.lookAt(n),s.zoom=1.05,s.updateProjectionMatrix(),{cam:s,center:n,r}}let Ri=null;async function jr(i,t="dark",e=640,n=520,r=96){const s=await Hu(i,r);Ri||(Ri=new Ou({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ri.setPixelRatio(1)),Ri.setSize(e,n,!1),Ri.setClearColor(0,0);const a=Vu(s,t),{cam:o}=Gu(s,e/n);return Ri.render(a,o),Ri.domElement.toDataURL("image/png")}async function xv(i,t,e="dark"){const n=await Hu(t,96),r=new Ou({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),i.innerHTML="",i.appendChild(r.domElement);const s=Vu(n,e);let{cam:a,center:o,r:l}=Gu(n,1);const c=new Q0(a,r.domElement);c.target.copy(o),c.enableDamping=!0,c.update();let d=0;const f=()=>{r.render(s,a)},u=()=>{const x=i.clientWidth||300,h=i.clientHeight||240;r.setSize(x,h,!1);const g=x/h;a.left=-l*g,a.right=l*g,a.top=l,a.bottom=-l,a.updateProjectionMatrix(),f()},p=()=>{d=requestAnimationFrame(p),c.update()&&f()};c.addEventListener("change",f);const v=new ResizeObserver(u);return v.observe(i),u(),p(),()=>{cancelAnimationFrame(d),v.disconnect(),c.dispose(),r.dispose(),i.innerHTML=""}}const yv="10076389",Mv="undodiligence",so=297,oo=210,Ci=8,bv=27,Sv=2.8,Gc=2.4,ki=Math.PI/180;function Ev(){const s=.14705882352941177,a=2.4*Math.sqrt(1+s*s),o=c=>37.5+s*c-a,l=(c,d,f)=>Math.PI*f*(c*c+c*d+d*d)/3;return l(37.5,50,85)-l(o(3),o(85),82)-6*Math.PI*16*3}function Tv(){const i=Math.sin(70*ki);return(80*5+5*10+90*(5/i))*70-Math.PI*7.5*7.5*5}const Kr=[{id:"P-1",pack:"R1",title:"Plant pot",label:"Plant pot with drainage holes",difficulty:"easy",material:"pla",skills:["Revolution","Polar Pattern","Parallel + distance"],stl:"stl/undo-diligence-plant-pot.stl",iso:"iso/undo-diligence-plant-pot.png",volume:Ev(),blurb:"A tapered pot with a 3 mm floor and six drainage holes. One half-profile, one spin, one pattern.",hints:[[82.707,"Close: it looks like only one drainage hole was cut. Did the Polar Pattern run with 6 occurrences?"],[82.894,"Close: the six drainage holes look missing."],[81.087,"Close: check the wall. 2.4 is measured square to the wall (a distance between the two parallel lines), not straight across."]]},{id:"P-2",pack:"R2",title:"Phone stand",label:"Phone stand with cable hole",difficulty:"easy",material:"pla",skills:["Angles","Parallel + distance","Symmetric pad","Sketch on a slanted face"],stl:"stl/undo-diligence-phone-stand.stl",iso:"iso/undo-diligence-phone-stand.png",volume:Tv(),blurb:"A 70° phone stand with a front lip and a cable hole. One side profile, padded symmetric, plus one hole on the slanted face.",hints:[[80.627,"Close: the cable hole looks missing."],[77.024,"Close: check the backrest. 5 thick is measured square to the slanted face, not straight across."],[39.218,"About half the mass: the stand is 70 wide in total. Did the pad go only 35?"]]}],Av=i=>Kr.find(t=>t.id===i);function $u(i){const t=[],e=(s,a,o,l)=>{const c=Math.hypot(o,l)||1,d=o/c,f=l/c,u=s-d*Gc,p=a-f*Gc,v=.75;return`<path class="arr" d="M${Z(s)} ${Z(a)}L${Z(u-f*v)} ${Z(p+d*v)}L${Z(u+f*v)} ${Z(p-d*v)}Z"/>`},n=(s,a,o,l="dim",c="middle",d=0)=>t.push(`<text class="${l}" x="${Z(s)}" y="${Z(a)}" text-anchor="${c}"${d?` transform="rotate(${d} ${Z(s)} ${Z(a)})"`:""}>${ci(o)}</text>`),r={out:t,line:(s,a,o="vis")=>t.push(`<line class="${o}" x1="${Z(s[0])}" y1="${Z(s[1])}" x2="${Z(a[0])}" y2="${Z(a[1])}"/>`),poly:(s,a="vis",o=!0)=>t.push(`<${o?"polygon":"polyline"} class="${a}" points="${s.map(l=>l.map(Z).join(",")).join(" ")}"/>`),circle:(s,a,o="vis")=>t.push(`<circle class="${o}" cx="${Z(s[0])}" cy="${Z(s[1])}" r="${Z(a)}"/>`),ellipse:(s,a,o,l="vis")=>t.push(`<ellipse class="${l}" cx="${Z(s[0])}" cy="${Z(s[1])}" rx="${Z(a)}" ry="${Z(o)}"/>`),text:n,dimH(s,a,o,l,c,d){const f=o<c?-1:1;if(r.line([s,c+f*1.2],[s,o+f*1.5],"ext"),r.line([a,(d??c)+f*1.2],[a,o+f*1.5],"ext"),Math.abs(a-s)>l.length*1.9+7)r.line([s,o],[a,o],"dimln"),t.push(e(s,o,-Math.sign(a-s),0),e(a,o,Math.sign(a-s),0)),n((s+a)/2,o-.9,l);else{const u=Math.min(s,a),p=Math.max(s,a);r.line([u-5,o],[p+5,o],"dimln"),t.push(e(u,o,1,0),e(p,o,-1,0)),n(p+5.5,o+1.05,l,"dim","start")}},dimV(s,a,o,l,c,d,f="left"){const u=o<c?-1:1;if(r.line([c+u*1.2,s],[o+u*1.5,s],"ext"),r.line([(d??c)+u*1.2,a],[o+u*1.5,a],"ext"),Math.abs(s-a)>l.length*1.9+7)r.line([o,s],[o,a],"dimln"),t.push(e(o,s,0,Math.sign(s-a)),e(o,a,0,Math.sign(a-s))),n(o-.9,(s+a)/2,l,"dim","middle",-90);else{const p=Math.max(s,a),v=Math.min(s,a);r.line([o,p+5],[o,v-5],"dimln"),t.push(e(o,p,0,-1),e(o,v,0,1)),n(o+(f==="left"?-1.2:1.2),(p+v)/2+1.05,l,"dim",f==="left"?"end":"start")}},callout(s,a,o,l){const c=a-2.5,d=o-1;t.push(`<polyline class="leader" points="${Z(s[0])},${Z(s[1])} ${Z(c)},${Z(d)} ${Z(a-.8)},${Z(d)}"/>`),t.push(e(s[0],s[1],s[0]-c,s[1]-d)),l.forEach((f,u)=>n(a,o+u*(Sv+.9),f,"call","start"))},angle(s,a,o,l){const c=-a*ki,d=[s[0]+o,s[1]],f=[s[0]+o*Math.cos(c),s[1]+o*Math.sin(c)];t.push(`<path class="dimln" d="M${Z(d[0])} ${Z(d[1])}A${Z(o)} ${Z(o)} 0 0 0 ${Z(f[0])} ${Z(f[1])}"/>`),t.push(e(d[0],d[1],0,1),e(f[0],f[1],-Math.sin(-c),-Math.cos(-c)));const u=c/2;n(s[0]+(o+4.5)*Math.cos(u),s[1]+(o+4.5)*Math.sin(u)+1,l,"dim","start")},vlabel:(s,a,o)=>n(s,a,o,"vlabel","middle"),ctrH:(s,a,o)=>r.line([a-2,s],[o+2,s],"ctr"),ctrV:(s,a,o)=>r.line([s,a-2],[s,o+2],"ctr")};return r}function wv(i,t,e,n,r,s){const a=[],l=bv-2,c=so-Ci-150,d=oo-Ci-l;a.push(`<rect class="frame" x="${Ci}" y="${Ci}" width="${so-2*Ci}" height="${oo-2*Ci}"/>`),a.push(`<rect class="frame" x="${c}" y="${d}" width="150" height="${l}"/>`);const f=c+52,u=c+104,p=l/2;a.push(`<line class="frame thin" x1="${f}" y1="${d}" x2="${f}" y2="${d+l}"/><line class="frame thin" x1="${u}" y1="${d}" x2="${u}" y2="${d+l}"/><line class="frame thin" x1="${c}" y1="${d+p}" x2="${c+150}" y2="${d+p}"/>`);const v=(A,N,P,C,F)=>`<text class="tbl" x="${A+2}" y="${N+3.6}">${P}</text><text class="${F?"tbv big":"tbv"}" x="${A+2}" y="${N+9.6}">${ci(C)}</text>`;a.push(v(c,d,"PRACTICE DRILL","UNDO DILIGENCE",!0)),a.push(v(f,d,"DRILL",`${i.id} · REAL PART`,!0)),a.push(v(u,d,"PART",i.title.toUpperCase())),a.push(v(c,d+p,"MATERIAL","PLA · 1.24 g/cm³ (SOLID)")),a.push(v(f,d+p,"UNITS · SCALE",`MM · ${t}`)),a.push(`<text class="tbl" x="${u+2}" y="${d+p+3.6}">PROJECTION</text>${tu(u+30,d+p+7.6)}<text class="tbv" x="${u+2}" y="${d+p+9.6}">3RD ANGLE</text>`),["NOTES","1. ALL DIMENSIONS IN MILLIMETRES. DO NOT SCALE THE DRAWING.",...s,"4. TASK: MODEL THE PART, APPLY PLA (1.24 g/cm³, 100% INFILL) AND REPORT ITS MASS IN GRAMS."].forEach((A,N)=>a.push(`<text class="${N?"note":"note b"}" x="${Ci+3}" y="${d+3.6+N*4.6}">${ci(A)}</text>`));const[h,g,E,y]=r;return n?a.push(`<image href="${n}" x="${h}" y="${g}" width="${E}" height="${y}" preserveAspectRatio="xMidYMid meet"/>`):a.push(`<rect class="isobox" x="${h}" y="${g}" width="${E}" height="${y}" rx="2"/>`),a.push(`<text class="vlabel" x="${Z(h+E/2)}" y="${Z(g+y+3.6)}" text-anchor="middle">ISOMETRIC (REFERENCE ONLY)</text>`),a.join("")}function Wu(i,t,e,n,r,s){const a=n.theme||"light";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${so} ${oo}" width="${n.width||"100%"}" ${n.height?`height="${n.height}"`:""} class="sheet" font-family="Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"><style>${eu(a)}</style><rect class="paper" x="0" y="0" width="${so}" height="${oo}"/>${wv(i,e,a,n.isoHref,r,s)}${t}</svg>`}function Rv(i,t){const e=$u(t.theme),n=.5,r=37.5,s=50,a=85,o=2.4,l=3,c=(s-r)/a,d=o*Math.sqrt(1+c*c),f=y=>r+c*y-d,u=72,p=14+s*n,v=(y,A)=>[u+y*n,p-A*n];e.circle(v(0,0),s*n),e.circle(v(0,0),f(a)*n),e.circle(v(0,0),f(l)*n),e.circle(v(0,0),25*n,"ctr");for(let y=0;y<6;y++){const A=y*60*ki;e.circle(v(25*Math.cos(A),25*Math.sin(A)),4*n)}e.ctrH(p,u-s*n,u+s*n),e.ctrV(u,p-s*n,p+s*n),e.vlabel(u,p+s*n+5.5,"TOP");const x=p+s*n+22+a*n,h=(y,A)=>[u+y*n,x-A*n];e.poly([h(-r,0),h(r,0),h(s,a),h(-s,a)]),e.line(h(-f(l),l),h(-f(a),a),"hid"),e.line(h(f(l),l),h(f(a),a),"hid"),e.line(h(-f(l),l),h(f(l),l),"hid");for(const y of[-25,25])e.line(h(y-4,0),h(y-4,l),"hid"),e.line(h(y+4,0),h(y+4,l),"hid");e.ctrV(u,x-a*n,x),e.vlabel(u,x+15,"FRONT"),e.dimH(h(-s,a)[0],h(s,a)[0],h(0,a)[1]-7,"Ø100",h(0,a)[1]),e.dimH(h(-r,0)[0],h(r,0)[0],x+8,"Ø75",x),e.dimV(x,x-a*n,h(s,0)[0]+8,"85",h(r,0)[0],h(s,a)[0]);const g=u+s*n+20;e.callout(v(25*Math.cos(60*ki)+4*.7,25*Math.sin(60*ki)+4*.7),g,p-18,["6× Ø8 THRU THE FLOOR","EQ. SPACED ON Ø50 B.C."]),e.callout(h(f(48)+(r+c*48-f(48))/2,48),g+10,x-40,["WALL 2.4 THICK","(MEASURED SQUARE TO THE WALL)"]),e.callout(h(-10,l/2),g+10,x-12,["FLOOR 3 THICK"]);const E=[178,14,104,88];return Wu(i,e.out.join(""),"1:2",t,E,["2. ROUND PART: DIAMETERS (Ø) ARE MEASURED ACROSS THE CENTRE.","3. INSIDE WALL IS PARALLEL TO THE OUTSIDE WALL. HOLES ARE ON THE X AXIS AND EVERY 60°."])}function Cv(i,t){const e=$u(t.theme),n=.5,r=Math.sin(70*ki),s=Math.cos(70*ki),a=[[0,0],[80,0],[80,5],[20+5/r,5],[20+90*s/r+5/r,95],[20+90*s/r,95],[20,5],[5,5],[5,15],[0,15]],o=48,l=150,c=(E,y)=>[o+E*n,l-y*n];e.poly(a.map(E=>c(...E))),e.vlabel(o+40*n,l+20,"FRONT"),e.dimH(c(0,0)[0],c(80,0)[0],l+13,"80",l),e.dimH(c(0,0)[0],c(20,0)[0],l+6,"20",l,c(20,5)[1]),e.dimV(l,c(0,95)[1],o-14,"95",o,c(a[5][0],95)[0]),e.dimV(l,c(0,15)[1],o-6,"15",o),e.dimV(l,c(0,5)[1],c(80,0)[0]+7,"5",c(80,0)[0],c(80,5)[0],"right"),e.dimH(c(0,15)[0],c(5,15)[0],c(0,15)[1]-5,"5",c(0,15)[1]),e.angle(c(20,5),70,13,"70°"),e.callout(c(a[5][0]+2.5/r*.9,70),c(80,0)[0]+6,c(0,82)[1],["BACKREST 5 THICK","(SQUARE TO THE FACE)"]);const d=l-95*n-22-35*n,f=(E,y)=>[o+E*n,d-y*n];e.poly([f(0,-35),f(80,-35),f(80,35),f(0,35)]);for(const E of[5,20,a[5][0],a[4][0]])e.line(f(E,-35),f(E,35));e.line(f(a[3][0],-35),f(a[3][0],35),"hid");const u=[25.13,0];e.ellipse(f(...u),7.5*s*n,7.5*n),e.ctrH(d,o,o+80*n),e.vlabel(o+40*n,d+35*n+5.5,"TOP"),e.dimV(f(0,-35)[1],f(0,35)[1],o-8,"70",o),e.callout(f(u[0]+7.5*s*.7,7.5*.7),o+80*n+16,d-12,["Ø15 THRU THE BACKREST,","CENTRED ACROSS THE WIDTH,","15 FROM THE FACE’S BOTTOM EDGE","(MEASURED ALONG THE FACE)"]);const p=o+80*n+48,v=l,x=(E,y)=>[p+(E+35)*n,v-y*n];e.poly([x(-35,0),x(35,0),x(35,95),x(-35,95)]),e.line(x(-35,5),x(35,5));const h=19.0954-5*s;e.ellipse(x(0,h),7.5*n,7.5*r*n),e.ctrV(x(0,0)[0],x(0,95)[1],v),e.vlabel(x(0,0)[0],v+16,"RIGHT"),e.dimH(x(-35,0)[0],x(35,0)[0],v+9,"70",v);const g=[178,14,104,88];return Wu(i,e.out.join(""),"1:2",t,g,["2. ONE SIDE PROFILE, 70 WIDE. THE BACKREST LEANS BACK 70° FROM THE BASE.","3. THE SEAT (WHERE THE PHONE STANDS) IS LEVEL WITH THE TOP OF THE BASE."])}function Pv(i,t={}){return{svg:i.id==="P-1"?Rv(i,t):Cv(i,t)}}function Lv(i,t,e,n=.005){const r=Number(String(t).trim().replace(",",".")),s=i.volume/1e3*e;if(!isFinite(r)||r<=0)return{correct:!1,expected:s,errorPct:null,hint:"Enter the mass in grams as a positive number, e.g. 81.8"};const a=(r-s)/s*100;if(Math.abs(r-s)<=s*n)return{correct:!0,expected:s,errorPct:a,hint:null};const o=(d,f)=>Math.abs(d-f)<=Math.abs(f)*.004,l=i.volume;let c;if(o(r,l))c="That number matches the volume in mm³. Convert to mass: grams = mm³ ÷ 1000 × density.";else if(o(r,l/1e3))c="That matches the volume in cm³. Multiply by the density to get grams.";else if(o(r,s/1e3))c="Looks like kilograms. The answer is in grams.";else if(o(r,s*1e3))c="Off by exactly 1000×. Check your mm³ → cm³ conversion (1 cm³ = 1000 mm³).";else{for(const d of[2.7,7.85,8,8.5,1.04,1.24,1])Math.abs(d-e)/e>.03&&o(r,l/1e3*d)&&(c=`Your geometry looks right, but that mass matches a density of ${d} g/cm³. This drill uses ${e} g/cm³.`);if(!c&&i.hints){let d=null;for(const[f,u]of i.hints){const p=Math.abs(r-f/1.24*e)/r;p<.0015&&(!d||p<d[0])&&(d=[p,u])}d&&(c=d[1])}c||(c=a>0?`${Math.abs(a).toFixed(1)}% too heavy. A cut is missing or too small, or a wall is too thick. Compare each view with your model.`:`${Math.abs(a).toFixed(1)}% too light. Something is cut too deep or too big, or a wall is too thin. Compare each view with your model.`)}return{correct:!1,expected:s,errorPct:a,hint:c}}{window.goatcounter={no_onload:!0};const i=document.createElement("script");i.async=!0,i.src="https://gc.zgo.at/count.js",i.dataset.goatcounter=`https://${Mv}.goatcounter.com/count`,i.onload=()=>Xu(),document.head.appendChild(i)}function Xu(){try{window.goatcounter?.count?.({path:location.pathname+(location.hash||"#/").replace(/^#\/d\/.*/,"#/d")})}catch{}}function Dv(i,t){const e=new FormData;return e.append("email_address",i),fetch(`https://app.kit.com/forms/${yv}/subscriptions`,{method:"POST",body:e,headers:{Accept:"application/json"}}).then(n=>n.json()).then(n=>n.status==="success"||n.status==="quarantined",()=>!1)}const Iv=7,Uv=document.getElementById("app"),Nv=document.getElementById("print-root"),Se=_i();let ao=[];const Fe=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),pi=()=>document.documentElement.dataset.theme||"dark",yl=i=>En.drills.find(t=>t.id===i),Ml=i=>yl(i)?.spec||Ks(i),lo=i=>{const t=Math.abs(i)<.005?0:i;return`${t>0?"+":""}${t.toFixed(2)}%`},rl=i=>i>=1e3?i.toFixed(1):i.toFixed(2),qs=i=>{const t=Math.floor(i/1e3);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},Rr=i=>`<span class="pill ${i}">${i[0].toUpperCase()+i.slice(1)}</span>`;function Vi(i){const t=Oi(i);return t==="solved"?'<span class="pill solved">✓ Solved</span>':t==="tried"?'<span class="pill tried">Tried</span>':'<span class="pill new">New</span>'}const Mr={sun:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',moon:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/></svg>',close:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',back:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',mark:'<svg width="18" height="18" viewBox="0 0 32 32"><path d="M11 9 5.5 14.5 11 20" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 14.5H19a7 7 0 0 1 0 14h-5" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round"/></svg>'},da=new Map;let $c=Promise.resolve();function qu(i,t){const e=i.id+pi();if(da.has(e)){t.src=da.get(e);return}$c=$c.then(async()=>{if(document.body.contains(t))try{const n=await jr(i,pi(),520,360,64);da.set(e,n),t.src=n}catch(n){console.warn("thumb failed",n)}})}function Wi(i,t){const n=[["#/","Drill pack","home"],["#/generate","Generator","generate"],["#/progress","Progress","progress"],["#/print","Print pack","print"]].map(([r,s,a])=>`<a href="${r}" class="${i===a?"on":""}">${s}</a>`).join("");Uv.innerHTML=`
  <header class="topbar">
    <a class="brand" href="#/"><span class="brand-mark">${Mr.mark}</span>Undo Diligence <small>Beta</small></a>
    <nav class="nav">${n}</nav>
    <div class="top-right">
      <button class="icon-btn" id="themeBtn" title="Toggle light / dark" aria-label="Toggle light or dark theme">${pi()==="dark"?Mr.sun:Mr.moon}</button>
      <button class="btn gold-outline sm" data-upgrade="topbar">Founding member<span class="long">&nbsp;· free to join</span></button>
    </div>
  </header>
  <nav class="mobile-nav">${n}</nav>
  <main class="page">${t}</main>
  <footer class="footer">
    <span>Local prototype · nothing you type leaves this browser</span>
    <a href="#/stats">Test dashboard</a>
    <span>Works with FreeCAD, Onshape, Fusion, SOLIDWORKS: mass is the same in every CAD program.</span>
  </footer>`,document.getElementById("themeBtn").onclick=()=>{const r=pi()==="dark"?"light":"dark";document.documentElement.dataset.theme=r,Se.theme=r,Gi(),go()}}document.addEventListener("click",i=>{const t=i.target.closest("[data-upgrade]");t&&(i.preventDefault(),Hv(t.dataset.upgrade))});function Fv(){const i=En.drills.filter(n=>Oi(n.id)==="solved").length,t=En.drills.find(n=>Oi(n.id)!=="solved")||En.drills[0],e=["easy","medium","hard"].map(n=>{const r=En.drills.filter(o=>o.spec.difficulty===n),s=r.map(o=>`
      <a class="card" href="#/d/${o.id}">
        <div class="thumb"><img alt="" data-thumb="${o.id}"/></div>
        <div class="card-body">
          <div class="card-top"><span class="num">#${String(o.pack).padStart(2,"0")}</span>${Vi(o.id)}</div>
          <div class="card-title">${Fe(o.label)}</div>
          <div class="meta">${Fe(o.spec.title)} · ${o.id}</div>
        </div>
      </a>`).join(""),a={easy:"Extrudes and holes. Start here.",medium:"Counterbores, slots, pockets, fillets, steps.",hard:"Several features, half-millimetre sizes, chamfers."}[n];return`<div class="section-head">${Rr(n)}<h2>${r.length} ${n} drills</h2><p>${a}</p></div><div class="grid">${s}</div>`}).join("");Wi("home",`
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
      <div class="stat"><b>${ru()}</b><span>day streak</span></div>
      <div class="stat"><b>${Object.keys(Se.solved).length}</b><span>drills solved in total</span></div>
      <div class="stat"><b>±${co*100}%</b><span>grading tolerance</span></div>
    </section>
    <div class="section-head"><span class="pill new">New</span><h2>Real parts you can print</h2><p>Model it, check the grams, then download the STL and print it. The grams are the solid PLA weight: the most filament it could take.</p></div>
    <div class="grid">${Kr.map(n=>`
      <a class="card" href="#/p/${n.id}">
        <div class="thumb"><img alt="" src="${n.iso}"/></div>
        <div class="card-body">
          <div class="card-top"><span class="num">${n.id}</span>${Vi(n.id)}</div>
          <div class="card-title">${Fe(n.label)}</div>
          <div class="meta">${n.skills.map(Fe).join(" · ")}</div>
        </div>
      </a>`).join("")}</div>
    ${e}
    <section class="section-head" style="margin-top:34px"><h2>New drill packs by email</h2></section>
    <div class="panel pad upsell" style="max-width:720px">
      <p class="small" style="margin:0 0 12px">Get a fresh printable pack of drills now and then. (Prototype: your email is saved only in this browser and is not sent anywhere.)</p>
      ${Yu("home")}
    </div>`),document.querySelectorAll("img[data-thumb]").forEach(n=>qu(Ml(n.dataset.thumb),n)),ju()}function Yu(i){return`<form class="row waitlist" data-source="${i}" novalidate>
      <input class="input" type="email" name="email" placeholder="you@example.com" autocomplete="email" style="flex:1;min-width:200px" aria-label="Email address"/>
      <button class="btn primary" type="submit">Join the list</button>
    </form><div class="small waitlist-msg" style="margin-top:8px"></div>`}function ju(){document.querySelectorAll("form.waitlist").forEach(i=>{i.onsubmit=t=>{t.preventDefault();const e=i.email.value.trim(),n=i.parentElement.querySelector(".waitlist-msg");if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)){n.textContent="Please enter a valid email address.";return}Bd(e,i.dataset.source),We("waitlist_submit",{source:i.dataset.source}),i.reset(),n.textContent="Adding you…",Dv(e,i.dataset.source).then(r=>{n.textContent=r?"You're on the list! If a confirmation email shows up, it may be in spam.":"Something went wrong. Please try again in a minute."})}})}function Ov(i){let t;try{t=Ml(i)}catch{return Ku(i)}const e=yl(i),n=e?e.pack-1:-1,r=n>0?En.drills[n-1]:null,s=n>=0&&n<19?En.drills[n+1]:null,a=ai(Se.material);We("view_drill",{id:i});const o=e?`#${String(e.pack).padStart(2,"0")} · ${Fe(e.label)}`:`Generated drill · ${Fe(t.title)}`;Wi(e?"home":"generate",`
    <div class="drill-head">
      <a class="back" href="${e?"#/":"#/generate"}">${Mr.back}${e?"Drill pack":"Generator"}</a>
    </div>
    <div class="drill-head">
      <h1>${o}</h1>${Rr(t.difficulty)}<span id="statusPill">${Vi(i)}</span>
      <span class="meta">${Fe(sl[t.family])} · code <span class="kbd">${t.id}</span></span>
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
            <select id="matSel" aria-label="Material">${Jr.map(P=>`<option value="${P.id}" ${P.id===a.id?"selected":""}>${P.label} · ${P.density} g/cm³</option>`).join("")}</select>
          </div>
          <div class="field">
            <div class="input-wrap"><input class="input" id="massIn" inputmode="decimal" autocomplete="off" placeholder="Mass" aria-label="Mass in grams"/><span class="unit">g</span></div>
          </div>
          <button class="btn primary" id="checkBtn" style="width:100%">Check mass</button>
          <div class="result" id="result" role="status" aria-live="polite"></div>
          <ul class="attempts" id="attempts"></ul>
          <div class="row" style="margin-top:12px;justify-content:space-between">
            <span class="small">Graded within ±${co*100}%</span>
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
          <p class="small" style="margin:6px 0 12px">Founding members get a new real-life project every week, endless generated drills and printable packs. Joining is free: nothing is for sale yet.</p>
          <button class="btn gold-outline" data-upgrade="drill-panel" style="width:100%">Become a founding member</button>
        </div>
      </aside>
    </div>`);const l=document.getElementById("sheetWrap");let c=1,d=null;const f=()=>{const P=ai(Se.material);l.innerHTML=qr(t,{theme:pi()==="dark"?"dark":"light",material:P,isoHref:d}).svg},u=()=>{l.style.width=`${c*100}%`,document.getElementById("zLbl").textContent=`${Math.round(c*100)}%`};f(),u(),jr(t,pi(),760,620).then(P=>{d=P,f()}).catch(P=>console.warn(P)),document.getElementById("zIn").onclick=()=>{c=Math.min(4,c*1.25),u()},document.getElementById("zOut").onclick=()=>{c=Math.max(1,c/1.25),u()},document.getElementById("zFit").onclick=()=>{c=1,u()};const p=document.getElementById("matSel");p.onchange=()=>{Se.material=p.value,Gi(),f(),g()};const v=document.getElementById("massIn"),x=document.getElementById("result"),h=(P,C)=>{x.className=`result show ${P}`,x.innerHTML=C},g=()=>{const P=(Se.attempts[i]||[]).slice(-5).reverse();document.getElementById("attempts").innerHTML=P.map(C=>`<li><span>${C.correct?"✓":"✗"} ${Fe(C.value)} g</span><span>${C.density} g/cm³ · ${new Date(C.t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></li>`).join("")};g();const E=()=>{const P=v.value.trim().replace(",","."),C=ai(Se.material),F=Fd(t,P,C.density);if(F.errorPct==null){h("info",Fe(F.hint));return}const st=y.running||y.acc?y.value():null;iu(i,Number(P),C.density,F.correct,F.correct?st:null),We("check",{id:i,correct:F.correct}),F.correct?(We("solve",{id:i}),y.stop(),h("ok",`<strong>Correct!</strong> ${rl(F.expected)} g (${lo(F.errorPct)}).${st?` Time ${qs(st)}.`:""}${s?` <a href="#/d/${s.id}" style="text-decoration:underline">Next drill →</a>`:""}`),document.getElementById("statusPill").innerHTML=Vi(i),A()):h("bad",`<strong>Not quite</strong> (${lo(F.errorPct)}).<br/>${Fe(F.hint)}`),g()};document.getElementById("checkBtn").onclick=E,v.onkeydown=P=>{P.key==="Enter"&&E()},document.getElementById("revealBtn").onclick=()=>{if((Se.attempts[i]||[]).length<2&&!confirm("Reveal the answer? Try at least twice first - the hints get specific."))return;const C=ai(Se.material),F=Xc(t);We("reveal",{id:i}),h("info",`Answer: <strong>${rl(Ys(F,C.density))} g</strong> in ${Fe(C.label)}.<br/>Volume ${(F/1e3).toFixed(3)} cm³ (${F.toFixed(1)} mm³).`)};const y={running:!1,start:0,acc:0,raf:0,value(){return this.acc+(this.running?Date.now()-this.start:0)},tick(){document.getElementById("tVal").textContent=qs(this.value()),this.running&&(this.raf=setTimeout(()=>this.tick(),250))},go(){if(this.running)return this.stop();this.running=!0,this.start=Date.now(),document.getElementById("tGo").textContent="Pause",this.tick()},stop(){this.running&&(this.acc+=Date.now()-this.start,this.running=!1,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick())},reset(){this.running=!1,this.acc=0,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick()}};document.getElementById("tGo").onclick=()=>y.go(),document.getElementById("tReset").onclick=()=>y.reset();const A=()=>{const P=Se.solved[i];document.getElementById("bestTime").textContent=P?`Solved${P.timeMs?` · best time ${qs(P.timeMs)}`:""} · ${P.attempts} attempt${P.attempts>1?"s":""}`:"Start the timer, model the part, then check your mass."};A(),ao.push(()=>clearTimeout(y.raf));let N=null;document.getElementById("peek").addEventListener("toggle",async P=>{P.target.open&&!N&&(We("peek_3d",{id:i}),N=await xv(document.getElementById("viewer"),t,pi()))}),ao.push(()=>N&&N()),document.getElementById("pngBtn").onclick=async()=>{We("export_png",{id:i});const P=await jr(t,"light",760,620),C=qr(t,{theme:"print",material:ai(Se.material),isoHref:P,width:3508,height:2480}).svg,F=new Image,st=URL.createObjectURL(new Blob([C],{type:"image/svg+xml"}));F.onload=()=>{const M=document.createElement("canvas");M.width=3508,M.height=2480;const b=M.getContext("2d");b.fillStyle="#fff",b.fillRect(0,0,M.width,M.height),b.drawImage(F,0,0,M.width,M.height),URL.revokeObjectURL(st),M.toBlob($=>{const Y=document.createElement("a");Y.href=URL.createObjectURL($),Y.download=`cad-drill-${t.id}.png`,Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),2e3)},"image/png")},F.src=st},document.getElementById("printBtn").onclick=async()=>{We("print",{id:i});const P=await jr(t,"light",760,620);Nv.innerHTML=`<div class="print-page">${qr(t,{theme:"print",material:ai(Se.material),isoHref:P}).svg}</div>`,document.body.classList.add("printing-one");const C=()=>{document.body.classList.remove("printing-one"),window.removeEventListener("afterprint",C)};window.addEventListener("afterprint",C),setTimeout(()=>window.print(),50)}}function Ku(i){Wi("",`<div class="panel pad"><h2>No drill called “${Fe(i)}”</h2><p class="small">Drill codes look like E-12, M-450 or H-9001.</p><a class="btn" href="#/generate">Open the generator</a></div>`)}function kv(){const i={diff:sessionStorage.getItem("gen.diff")||"medium",family:sessionStorage.getItem("gen.family")||"any"},t=[["any","Any shape"],...Object.entries(sl)].map(([c,d])=>`<option value="${c}" ${i.family===c?"selected":""}>${d}</option>`).join("");Wi("generate",`
    <div class="section-head" style="margin-top:0"><h2>Drill generator</h2><p>Every code makes the same part on every device, so you can share a code with a friend or a class.</p></div>
    <div class="two-col">
      <div class="panel pad">
        <span class="label">Difficulty</span>
        <div class="seg" id="diffSeg">${["easy","medium","hard"].map(c=>`<button data-d="${c}" class="${i.diff===c?"on":""}">${c[0].toUpperCase()+c.slice(1)}</button>`).join("")}</div>
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
    </div>`);const e=document.getElementById("diffSeg");e.onclick=c=>{const d=c.target.closest("button");d&&(i.diff=d.dataset.d,sessionStorage.setItem("gen.diff",i.diff),e.querySelectorAll("button").forEach(f=>f.classList.toggle("on",f===d)))};const n=document.getElementById("famSel");n.onchange=()=>{i.family=n.value,sessionStorage.setItem("gen.family",i.family)};const r=c=>{const d=fd(i.diff,c,i.family),f=JSON.parse(sessionStorage.getItem("gen.recent")||"[]").filter(u=>u!==d.id);f.unshift(d.id),sessionStorage.setItem("gen.recent",JSON.stringify(f.slice(0,6))),We("generate",{id:d.id}),location.hash=`#/d/${d.id}`},s=()=>1+Math.floor(Math.random()*999999);document.getElementById("genBtn").onclick=()=>{const c=document.getElementById("seedIn").value.trim();r(c&&/^\d{1,9}$/.test(c)?Number(c):s())},document.getElementById("luckyBtn").onclick=()=>{i.diff=["easy","medium","hard"][Math.floor(Math.random()*3)],i.family="any",r(s())};const a=()=>{const c=document.getElementById("codeIn").value.trim().toUpperCase();if(!jc(c)){document.getElementById("genMsg").textContent="Codes look like E-12, M-450 or H-9001.";return}location.hash=`#/d/${c}`};document.getElementById("codeBtn").onclick=a,document.getElementById("codeIn").onkeydown=c=>{c.key==="Enter"&&a()};const o=JSON.parse(sessionStorage.getItem("gen.recent")||"[]"),l=document.getElementById("recent");l.innerHTML=o.length?o.map(c=>{const d=Ks(c);return`<a class="card" href="#/d/${c}"><div class="thumb"><img alt="" data-thumb="${c}"/></div><div class="card-body"><div class="card-top">${Rr(d.difficulty)}${Vi(c)}</div><div class="meta">${Fe(d.title)} · ${c}</div></div></a>`}).join(""):'<div class="empty">Nothing yet. Generate your first drill.</div>',l.querySelectorAll("img[data-thumb]").forEach(c=>qu(Ks(c.dataset.thumb),c))}function Bv(){const i={easy:[0,0],medium:[0,0],hard:[0,0]};for(const s of En.drills)i[s.spec.difficulty][1]++,Oi(s.id)==="solved"&&i[s.spec.difficulty][0]++;const e=[...new Set([...Object.keys(Se.attempts)])].map(s=>{let a;try{a=Ml(s)}catch{return""}const o=Se.attempts[s]||[],l=Se.solved[s],c=yl(s);return`<tr><td><a href="#/d/${s}" style="text-decoration:underline">${c?"#"+String(c.pack).padStart(2,"0")+" · ":""}${s}</a></td><td>${Rr(a.difficulty)}</td><td>${o.length}</td><td>${l?'<span class="pill solved">✓ Solved</span>':'<span class="pill tried">Open</span>'}</td><td>${l&&l.timeMs?qs(l.timeMs):"–"}</td></tr>`}).join(""),n=Object.values(Se.solved).filter(s=>s.attempts===1).length,r=Object.values(Se.attempts).reduce((s,a)=>s+a.length,0);Wi("progress",`
    <div class="section-head" style="margin-top:0"><h2>Your progress</h2><p>Stored in this browser only.</p></div>
    <section class="stats">
      <div class="stat"><b>${Object.keys(Se.solved).length}</b><span>drills solved</span></div>
      <div class="stat"><b>${ru()}</b><span>day streak</span></div>
      <div class="stat"><b>${n}</b><span>first-try solves</span></div>
      <div class="stat"><b>${r}</b><span>answers checked</span></div>
    </section>
    <div class="two-col">
      <div class="panel pad">
        <span class="label">Drill pack</span>
        ${Object.entries(i).map(([s,[a,o]])=>`<div style="margin:12px 0"><div class="row" style="justify-content:space-between;margin-bottom:6px">${Rr(s)}<span class="small">${a} / ${o}</span></div><div class="bar"><i style="width:${a/o*100}%"></i></div></div>`).join("")}
      </div>
      <div class="panel pad">
        <span class="label">Data</span>
        <p class="small">Progress, attempts and settings live in this browser's local storage. Clearing site data removes them.</p>
        <button class="btn" id="resetBtn">Reset progress</button>
      </div>
    </div>
    <div class="section-head"><h2>Attempted drills</h2></div>
    <div class="panel table-scroll">${e?`<table><thead><tr><th>Drill</th><th>Level</th><th>Checks</th><th>Status</th><th>Best time</th></tr></thead><tbody>${e}</tbody></table>`:'<div class="empty">No attempts yet. <a href="#/" style="text-decoration:underline">Pick a drill</a>.</div>'}</div>`),document.getElementById("resetBtn").onclick=()=>{confirm("Erase all local progress, attempts and test data?")&&(kd(),Object.assign(Se,_i()),go())}}function zv(){/[?&]pdf=1/.test(location.search)&&document.body.classList.add("printing-pack"),Wi("print",`
    <div class="no-print">
      <div class="section-head" style="margin-top:0"><h2>Printable drill pack</h2><p>All 20 drills as A4 landscape sheets: the free PDF for the video description.</p></div>
      <div class="row" style="margin-bottom:16px">
        <button class="btn primary" id="printAll">Print / Save as PDF</button>
        <span class="small">Use “Save as PDF”, A4 landscape, margins none. Answers are not printed: people check them here.</span>
      </div>
    </div>
    <div class="print-pages" id="pages">${En.drills.map(i=>`<div class="print-page" data-id="${i.id}">${qr(i.spec,{theme:"print"}).svg}</div>`).join("")}</div>`),(async()=>{for(const i of En.drills){const t=document.querySelector(`.print-page[data-id="${i.id}"]`);if(!t)return;try{const e=await jr(i.spec,"light",760,620);t.innerHTML=qr(i.spec,{theme:"print",isoHref:e}).svg}catch(e){console.warn(e)}}document.body.dataset.packReady="1"})(),document.getElementById("printAll").onclick=()=>{We("print_pack"),document.body.classList.add("printing-pack");const i=()=>{document.body.classList.remove("printing-pack"),window.removeEventListener("afterprint",i)};window.addEventListener("afterprint",i),window.print()}}function Hv(i){We("upgrade_open",{source:i});const t=document.createElement("div");t.className="overlay",t.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="fmTitle">
      <button class="icon-btn close" aria-label="Close">${Mr.close}</button>
      <div class="eyebrow">Founding members</div>
      <h2 id="fmTitle">Unlimited CAD drills</h2>
      <div class="price">Free<small> to join. No card, nothing for sale yet</small></div>
      <ul class="ticks">
        <li>A fresh generated drill every day, at the level you choose, plus endless practice</li>
        <li>A new real-life, printable project every week</li>
        <li>Printable PDF packs for classes and clubs</li>
        <li>Works with FreeCAD, Onshape, Fusion and SOLIDWORKS</li>
      </ul>
      <div id="fmBody">
        <button class="btn primary" id="fmYes" style="width:100%;height:46px">Count me in</button>
        <p class="small" style="margin:10px 0 0;text-align:center">If it opens, the plan is $${Iv}/month, locked in for founding members, and you can say no then. Clicking now just tells me to build it.</p>
      </div>
    </div>`,document.body.appendChild(t);const e=()=>{t.remove(),document.removeEventListener("keydown",n)},n=r=>{r.key==="Escape"&&e()};document.addEventListener("keydown",n),t.addEventListener("mousedown",r=>{r.target===t&&e()}),t.querySelector(".close").onclick=e,t.querySelector("#fmYes").onclick=()=>{We("upgrade_click",{source:i}),t.querySelector("#fmBody").innerHTML=`
      <div class="result show info" style="margin:0 0 12px"><strong>Thanks, that's counted.</strong> Nothing was charged. Leave your email and you'll hear first when founding spots open.</div>
      ${Yu("founding-"+i)}`,ju()}}function Vv(i){const t=Av(i);if(!t)return Ku(i);Jr.find(h=>h.id===Se.realMaterial)||(Se.realMaterial="pla");const e=ai(Se.realMaterial),n=Kr.indexOf(t),r=Kr[n-1],s=Kr[n+1];We("view_drill",{id:i}),Wi("home",`
    <div class="drill-head"><a class="back" href="#/">${Mr.back}Drill pack</a></div>
    <div class="drill-head">
      <h1>${Fe(t.id)} · ${Fe(t.label)}</h1>${Rr(t.difficulty)}<span id="statusPill">${Vi(i)}</span>
      <span class="meta">Real part · ${t.skills.map(Fe).join(" · ")}</span>
      <span class="ml-auto row">
        ${r?`<a class="btn sm" href="#/p/${r.id}">← ${r.id}</a>`:""}
        ${s?`<a class="btn sm" href="#/p/${s.id}">${s.id} →</a>`:""}
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
          <button class="btn sm" id="printBtn">Print / PDF</button>
          <span class="meta ml-auto">Third-angle projection · mm</span>
        </div>
        <div class="zoom-hint">Tip: tap + to zoom in, then scroll the drawing.</div>
        <div class="sheet-scroll"><div class="sheet-wrap" id="sheetWrap"></div></div>
      </section>
      <aside class="side">
        <div class="panel">
          <span class="label">Your answer</span>
          <div class="field">
            <select id="matSel" aria-label="Material">${Jr.map(h=>`<option value="${h.id}" ${h.id===e.id?"selected":""}>${h.label} · ${h.density} g/cm³</option>`).join("")}</select>
          </div>
          <div class="field"><div class="input-wrap"><input class="input" id="massIn" inputmode="decimal" autocomplete="off" placeholder="Mass" aria-label="Mass in grams"/><span class="unit">g</span></div></div>
          <button class="btn primary" id="checkBtn" style="width:100%">Check mass</button>
          <div class="result" id="result" role="status" aria-live="polite"></div>
          <ul class="attempts" id="attempts"></ul>
          <p class="small" style="margin:12px 0 0">Graded within ±${co*100}%. Solve it to unlock the STL.</p>
        </div>
        <div class="panel">
          <span class="label">Print it</span>
          <p class="small" style="margin:6px 0 12px">${Fe(t.blurb)}</p>
          <a class="btn" id="stlBtn" ${Oi(i)==="solved"?`href="${t.stl}" download`:'aria-disabled="true" style="opacity:.55;pointer-events:none"'}>${Oi(i)==="solved"?"Download STL":"STL unlocks when you solve it"}</a>
          <p class="small" style="margin:10px 0 0">Your slicer's filament estimate will be lower than the solid weight if you print with less than 100% infill.</p>
        </div>
        <div class="panel upsell">
          <h3>A new real-life project every week</h3>
          <p class="small" style="margin:6px 0 12px">Founding members get a new printable project each week, plus endless generated drills. Joining is free: nothing is for sale yet.</p>
          <button class="btn gold-outline" data-upgrade="real-panel" style="width:100%">Become a founding member</button>
        </div>
      </aside>
    </div>`);const a=document.getElementById("sheetWrap");let o=1;const l=()=>{a.innerHTML=Pv(t,{theme:pi()==="dark"?"dark":"light",isoHref:t.iso}).svg},c=()=>{a.style.width=`${o*100}%`,document.getElementById("zLbl").textContent=`${Math.round(o*100)}%`};l(),c(),document.getElementById("zIn").onclick=()=>{o=Math.min(4,o*1.25),c()},document.getElementById("zOut").onclick=()=>{o=Math.max(1,o/1.25),c()},document.getElementById("zFit").onclick=()=>{o=1,c()},document.getElementById("printBtn").onclick=()=>{We("print_real",{id:i}),window.print()};const d=document.getElementById("matSel");d.onchange=()=>{Se.realMaterial=d.value,Gi()};const f=document.getElementById("massIn"),u=document.getElementById("result"),p=(h,g)=>{u.className=`result show ${h}`,u.innerHTML=g},v=()=>{const h=(Se.attempts[i]||[]).slice(-5).reverse();document.getElementById("attempts").innerHTML=h.map(g=>`<li><span>${g.correct?"✓":"✗"} ${Fe(g.value)} g</span><span>${g.density} g/cm³ · ${new Date(g.t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></li>`).join("")};v();const x=()=>{const h=f.value.trim().replace(",","."),g=ai(Se.realMaterial),E=Lv(t,h,g.density);if(E.errorPct==null){p("info",Fe(E.hint));return}if(iu(i,Number(h),g.density,E.correct,null),We("check",{id:i,correct:E.correct}),E.correct){We("solve",{id:i}),p("ok",`<strong>Correct!</strong> ${rl(E.expected)} g (${lo(E.errorPct)}). The STL is unlocked below.${s?` <a href="#/p/${s.id}" style="text-decoration:underline">Next part →</a>`:""}`),document.getElementById("statusPill").innerHTML=Vi(i);const y=document.getElementById("stlBtn");y.setAttribute("href",t.stl),y.setAttribute("download",""),y.removeAttribute("aria-disabled"),y.style.opacity="",y.style.pointerEvents="",y.textContent="Download STL",y.onclick=()=>We("stl_download",{id:i})}else p("bad",`<strong>Not quite</strong> (${lo(E.errorPct)}).<br/>${Fe(E.hint)}`);v()};document.getElementById("checkBtn").onclick=x,f.onkeydown=h=>{h.key==="Enter"&&x()},Oi(i)==="solved"&&(document.getElementById("stlBtn").onclick=()=>We("stl_download",{id:i}))}function go(){ao.forEach(n=>{try{n()}catch{}}),ao=[],document.querySelectorAll(".overlay").forEach(n=>n.remove());const i=location.hash||"#/",t=/^#\/d\/([A-Za-z]-\d+)$/.exec(i),e=/^#\/p\/(P-\d+)$/i.exec(i);e?Vv(e[1].toUpperCase()):t?Ov(t[1].toUpperCase()):i==="#/generate"?kv():i==="#/progress"?Bv():i==="#/print"?zv():Fv(),window.scrollTo(0,0)}window.addEventListener("hashchange",()=>{go(),Xu()});go();
