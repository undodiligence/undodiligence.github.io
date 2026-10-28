(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const rd=[{pack:1,label:"L-bracket, 2 base holes + 1 leg hole",id:"E-2",spec:{body:{type:"prism",W:45,segs:[{x0:0,x1:8,h:45},{x0:8,x1:65,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:10,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:35,d:6,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:22.5,z:20,d:5,x0:0,x1:8,group:2}],id:"E-2",seed:2,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:36110.531025,csg_volume_mm3:36110.531026,csg_rel_diff:128e-13,mass_g:{al6061:97.498,steel:283.468}},{pack:2,label:"Plate, 4-hole pattern",id:"E-3",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:120,h:12}],corner:null,fillets:[]},features:[{kind:"zhole",x:50,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:50,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:6,top:12,depth:12,thru:!0,cb:null,group:1}],id:"E-3",seed:3,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:56242.831974,csg_volume_mm3:56242.831975,csg_rel_diff:182e-13,mass_g:{al6061:151.856,steel:441.506}},{pack:3,label:"Plate, rounded corners + centre hole",id:"E-60",spec:{body:{type:"prism",W:40,segs:[{x0:0,x1:85,h:8}],corner:{kind:"round",size:5},fillets:[]},features:[{kind:"zhole",x:15,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:10,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:15,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:70,y:30,d:10,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:42.5,y:20,d:15,top:8,depth:8,thru:!0,cb:null,group:2}],id:"E-60",seed:60,difficulty:"easy",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:23101.327714,csg_volume_mm3:23101.327716,csg_rel_diff:109e-12,mass_g:{al6061:62.374,steel:181.345}},{pack:4,label:"Flange, bolt circle",id:"E-4",spec:{body:{type:"flange",R:45,t:6,chamfer:0,hubR:0,hubH:0,boreD:30},features:[{kind:"bolts",n:6,bc:70,d:10,top:6,cb:null,startDeg:0,group:1}],id:"E-4",seed:4,difficulty:"easy",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:31101.767271,csg_volume_mm3:31101.767247,csg_rel_diff:756e-12,mass_g:{al6061:83.975,steel:244.149}},{pack:5,label:"L-bracket, 4 holes",id:"E-5",spec:{body:{type:"prism",W:75,segs:[{x0:0,x1:10,h:85},{x0:10,x1:80,h:8}],corner:null,fillets:[]},features:[{kind:"zhole",x:40,y:25,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"zhole",x:40,y:50,d:8,top:8,depth:8,thru:!0,cb:null,group:1},{kind:"xhole",y:15,z:40,d:8,x0:0,x1:10,group:2},{kind:"xhole",y:60,z:40,d:8,x0:0,x1:10,group:2}],id:"E-5",seed:5,difficulty:"easy",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:103940.442632,csg_volume_mm3:103940.442633,csg_rel_diff:132e-13,mass_g:{al6061:280.639,steel:815.932}},{pack:6,label:"Plate with counterbores",id:"M-1",spec:{body:{type:"prism",W:46,segs:[{x0:0,x1:74,h:16}],corner:{kind:"chamfer",size:8},fillets:[]},features:[{kind:"zhole",x:17,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:13,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:17,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:57,y:33,d:12,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:42,y:13,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:42,y:33,d:5,top:16,depth:16,thru:!0,cb:{d:9,depth:6},group:2},{kind:"zhole",x:32,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3},{kind:"zhole",x:42,y:22,d:4,top:16,depth:5,thru:!1,cb:null,group:3}],id:"M-1",seed:1,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:43896.000723,csg_volume_mm3:43896.00073,csg_rel_diff:147e-12,mass_g:{al6061:118.519,steel:344.584}},{pack:7,label:"Plate with slot and pocket",id:"M-11",spec:{body:{type:"prism",W:42,segs:[{x0:0,x1:94,h:14}],corner:{kind:"chamfer",size:6},fillets:[]},features:[{kind:"pocket",x0:40,x1:76,y0:17,y1:38,r:3,top:14,depth:4,group:1},{kind:"zhole",x:29,y:12,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"zhole",x:29,y:30,d:12,top:14,depth:14,thru:!0,cb:null,group:2},{kind:"slot",x:14,y:22,w:10,len:17,dir:"y",top:14,depth:14,thru:!0,group:3}],id:"M-11",seed:11,difficulty:"medium",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:46024.619841,csg_volume_mm3:46024.619844,csg_rel_diff:719e-13,mass_g:{al6061:124.266,steel:361.293}},{pack:8,label:"L-bracket with inside fillet",id:"M-21",spec:{body:{type:"prism",W:68,segs:[{x0:0,x1:12,h:68},{x0:12,x1:92,h:12}],corner:null,fillets:[{xb:12,z:12,r:3,dir:1}]},features:[{kind:"zhole",x:30,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:18,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:30,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"zhole",x:77,y:50,d:8,top:12,depth:12,thru:!0,cb:null,group:1},{kind:"xhole",y:34,z:51,d:4,x0:0,x1:12,group:2}],id:"M-21",seed:21,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:118335.796719,csg_volume_mm3:118335.796721,csg_rel_diff:193e-13,mass_g:{al6061:319.507,steel:928.936}},{pack:9,label:"L-bracket with counterbores",id:"M-2",spec:{body:{type:"prism",W:34,segs:[{x0:0,x1:9,h:40},{x0:9,x1:70,h:9}],corner:null,fillets:[]},features:[{kind:"zhole",x:17,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:9,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:17,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"zhole",x:62,y:25,d:4,top:9,depth:9,thru:!0,cb:{d:7.5,depth:5},group:1},{kind:"xhole",y:9,z:27,d:8,x0:0,x1:9,group:2},{kind:"xhole",y:25,z:27,d:8,x0:0,x1:9,group:2}],id:"M-2",seed:2,difficulty:"medium",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:28916.586452,csg_volume_mm3:28916.586454,csg_rel_diff:52e-12,mass_g:{al6061:78.075,steel:226.995}},{pack:10,label:"Two-step block with side hole",id:"M-3",spec:{body:{type:"prism",W:64,segs:[{x0:0,x1:66,h:40},{x0:66,x1:94,h:12}],corner:null,fillets:[{xb:66,z:12,r:4,dir:1}],shape:"step2"},features:[{kind:"zhole",x:82,y:17,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:82,y:47,d:10,top:12,depth:12,thru:!0,cb:{d:16,depth:3},group:1},{kind:"zhole",x:19,y:20,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"zhole",x:19,y:44,d:10,top:40,depth:40,thru:!0,cb:{d:16,depth:10},group:2},{kind:"yhole",x:45,z:20,d:4,group:3}],id:"M-3",seed:3,difficulty:"medium",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:178525.788711,csg_volume_mm3:178525.788721,csg_rel_diff:551e-13,mass_g:{al6061:482.02,steel:1401.427}},{pack:11,label:"Tee block",id:"M-12",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:39,h:16},{x0:39,x1:85,h:31},{x0:85,x1:140,h:19}],corner:null,fillets:[],shape:"tee"},features:[{kind:"zhole",x:25,y:7,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:25,y:25,d:8,top:16,depth:16,thru:!0,cb:null,group:1},{kind:"zhole",x:103,y:7,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2},{kind:"zhole",x:103,y:25,d:4,top:19,depth:19,thru:!0,cb:{d:7.5,depth:4},group:2}],id:"M-12",seed:12,difficulty:"medium",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:96701.084269,csg_volume_mm3:96701.084271,csg_rel_diff:183e-13,mass_g:{al6061:261.093,steel:759.104}},{pack:12,label:"Flange with hub",id:"M-8",spec:{body:{type:"flange",R:60,t:11,chamfer:0,hubR:18,hubH:12,boreD:23},features:[{kind:"bolts",n:6,bc:66,d:12,top:11,cb:null,startDeg:0,group:1}],id:"M-8",seed:8,difficulty:"medium",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:119601.21772,csg_volume_mm3:119601.21763,csg_rel_diff:756e-12,mass_g:{al6061:322.923,steel:938.87}},{pack:13,label:"Channel block",id:"M-30",spec:{body:{type:"prism",W:32,segs:[{x0:0,x1:46,h:41},{x0:46,x1:74,h:15},{x0:74,x1:106,h:50}],corner:null,fillets:[],shape:"u"},features:[{kind:"zhole",x:87,y:9,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:87,y:23,d:5,top:50,depth:50,thru:!0,cb:{d:9,depth:3},group:1},{kind:"zhole",x:33,y:9,d:9,top:41,depth:41,thru:!0,cb:null,group:2},{kind:"zhole",x:33,y:23,d:9,top:41,depth:41,thru:!0,cb:null,group:2}],id:"M-30",seed:30,difficulty:"medium",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:117547.996207,csg_volume_mm3:117547.996213,csg_rel_diff:479e-13,mass_g:{al6061:317.38,steel:922.752}},{pack:14,label:"Plate: chamfers, slot, pocket, blind holes",id:"H-2",spec:{body:{type:"prism",W:86,segs:[{x0:0,x1:99,h:15.5}],corner:{kind:"chamfer",size:2.5},fillets:[]},features:[{kind:"slot",x:39.5,y:60.5,w:9,len:29.5,dir:"x",top:15.5,depth:15.5,thru:!0,group:1},{kind:"pocket",x0:66,x1:83,y0:41,y1:60.5,r:5.5,top:15.5,depth:11.5,group:2},{kind:"zhole",x:9.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:12,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:9.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:89.5,y:74,d:13.5,top:15.5,depth:15.5,thru:!0,cb:null,group:3},{kind:"zhole",x:16.5,y:34.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4},{kind:"zhole",x:16.5,y:51.5,d:11,top:15.5,depth:5.5,thru:!1,cb:null,group:4}],id:"H-2",seed:2,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:114493.829559,csg_volume_mm3:114493.829568,csg_rel_diff:792e-13,mass_g:{al6061:309.133,steel:898.777}},{pack:15,label:"Three-step block, fillets + side hole",id:"H-56",spec:{body:{type:"prism",W:43,segs:[{x0:0,x1:21,h:49.5},{x0:21,x1:57,h:21.5},{x0:57,x1:88,h:13.5}],corner:null,fillets:[{xb:21,z:21.5,r:5,dir:1},{xb:57,z:13.5,r:5,dir:1}],shape:"step3"},features:[{kind:"zhole",x:75,y:13,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"zhole",x:75,y:30,d:5.5,top:13.5,depth:13.5,thru:!0,cb:{d:9.5,depth:7},group:1},{kind:"pocket",x0:35,x1:52.5,y0:3.5,y1:26.5,r:3.5,top:21.5,depth:18,group:2},{kind:"slot",x:10,y:34.5,w:8,len:14,dir:"x",top:49.5,depth:36,thru:!1,group:3},{kind:"yhole",x:8,z:6.5,d:3.5,group:4}],id:"H-56",seed:56,difficulty:"hard",family:"stepped",title:"Stepped block",generatorVersion:1},volume_mm3:84129.19851,csg_volume_mm3:84129.198515,csg_rel_diff:524e-13,mass_g:{al6061:227.149,steel:660.414}},{pack:16,label:"Channel block with cross hole",id:"H-45",spec:{body:{type:"prism",W:58,segs:[{x0:0,x1:31,h:45},{x0:31,x1:59,h:15},{x0:59,x1:80,h:27.5}],corner:null,fillets:[{xb:31,z:15,r:2.5,dir:1},{xb:59,z:15,r:2.5,dir:-1}],shape:"u"},features:[{kind:"zhole",x:45.5,y:37.5,d:13.5,top:15,depth:4.5,thru:!1,cb:null,group:1},{kind:"zhole",x:21,y:10,d:4.5,top:45,depth:45,thru:!0,cb:{d:8,depth:3},group:2},{kind:"zhole",x:69,y:14.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"zhole",x:69,y:43.5,d:9,top:27.5,depth:27.5,thru:!0,cb:null,group:3},{kind:"xhole",y:29,z:38,d:4.5,x0:0,x1:31,group:4}],id:"H-45",seed:45,difficulty:"hard",family:"stepped",title:"Channel block",generatorVersion:1},volume_mm3:133465.701562,csg_volume_mm3:133465.701567,csg_rel_diff:347e-13,mass_g:{al6061:360.357,steel:1047.706}},{pack:17,label:"L-bracket: fillet + slot",id:"H-6",spec:{body:{type:"prism",W:63,segs:[{x0:0,x1:11.5,h:42},{x0:11.5,x1:85,h:10.5}],corner:null,fillets:[{xb:11.5,z:10.5,r:4.5,dir:1}]},features:[{kind:"slot",x:42,y:19,w:5,len:29,dir:"x",top:10.5,depth:5,thru:!1,group:1},{kind:"xhole",y:20.5,z:25.5,d:11,x0:0,x1:11.5,group:2},{kind:"xhole",y:42.5,z:25.5,d:11,x0:0,x1:11.5,group:2}],id:"H-6",seed:6,difficulty:"hard",family:"lbracket",title:"L-bracket",generatorVersion:1},volume_mm3:76439.090434,csg_volume_mm3:76439.090437,csg_rel_diff:354e-13,mass_g:{al6061:206.386,steel:600.047}},{pack:18,label:"Flange: hub, chamfer, counterbores",id:"H-18",spec:{body:{type:"flange",R:52,t:10,chamfer:1,hubR:26.5,hubH:13,boreD:31.5},features:[{kind:"bolts",n:3,bc:74,d:9,top:10,cb:{d:15,depth:3},startDeg:0,group:1}],id:"H-18",seed:18,difficulty:"hard",family:"flange",title:"Flange",generatorVersion:1},volume_mm3:92616.180373,csg_volume_mm3:92616.180303,csg_rel_diff:756e-12,mass_g:{al6061:250.064,steel:727.037}},{pack:19,label:"Tee block with pocket",id:"H-22",spec:{body:{type:"prism",W:37,segs:[{x0:0,x1:56,h:23},{x0:56,x1:78,h:44.5},{x0:78,x1:131,h:28}],corner:null,fillets:[{xb:56,z:23,r:5.5,dir:-1},{xb:78,z:28,r:5.5,dir:1}],shape:"tee"},features:[{kind:"zhole",x:98.5,y:21,d:9,top:28,depth:28,thru:!0,cb:{d:15,depth:7},group:1},{kind:"slot",x:67.5,y:15,w:9,len:15,dir:"x",top:44.5,depth:24.5,thru:!1,group:2},{kind:"pocket",x0:5.5,x1:19.5,y0:9.5,y1:25.5,r:5,top:23,depth:2.5,group:3},{kind:"yhole",x:65,z:8,d:11,group:4}],id:"H-22",seed:22,difficulty:"hard",family:"stepped",title:"Tee block",generatorVersion:1},volume_mm3:129790.222054,csg_volume_mm3:129790.222062,csg_rel_diff:557e-13,mass_g:{al6061:350.434,steel:1018.853}},{pack:20,label:"Plate: rounds, counterbores, slot",id:"H-46",spec:{body:{type:"prism",W:52,segs:[{x0:0,x1:84,h:11}],corner:{kind:"round",size:3},fillets:[]},features:[{kind:"zhole",x:29.5,y:14,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"zhole",x:29.5,y:38,d:13.5,top:11,depth:11,thru:!0,cb:{d:20,depth:4.5},group:1},{kind:"slot",x:65,y:22,w:10.5,len:35,dir:"y",top:11,depth:11,thru:!0,group:2}],id:"H-46",seed:46,difficulty:"hard",family:"plate",title:"Mounting plate",generatorVersion:1},volume_mm3:39492.538063,csg_volume_mm3:39492.538067,csg_rel_diff:102e-12,mass_g:{al6061:106.63,steel:310.016}}],Tn={drills:rd};function sd(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function od(i){let t=sd(String(i))||1;const e=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296},n={next:e,int(r,s){return r+Math.floor(e()*(s-r+1))},q(r,s,a){const o=Math.ceil(r/a-1e-9),l=Math.floor(s/a+1e-9);return l<o?null:Fn(n.int(o,l)*a)},pick(r){return r[Math.floor(e()*r.length)]},chance(r){return e()<r}};return n}function Fn(i){return Math.round(i*1e6)/1e6}const Di=Math.PI;function Pn(i){return Di*i*i/4}function ad(i,t){return(t-i)*i+Pn(i)}function ld(i,t,e){return i*t-(4-Di)*e*e}function jc(i){const t=[],e=i.body;if(e.type==="prism"){for(const n of e.segs)t.push({key:"body",label:"Main body",vol:(n.x1-n.x0)*n.h*e.W});if(e.corner){const n=e.corner.size,r=e.corner.kind==="round"?(1-Di/4)*n*n:n*n/2,s=e.segs[0].h,a=e.segs[e.segs.length-1].h;t.push({key:"corner",label:e.corner.kind==="round"?"Corner rounds":"Corner chamfers",vol:-r*2*(s+a)})}for(const n of e.fillets||[])t.push({key:"fillet",label:`Inside fillet R${n.r}`,vol:(1-Di/4)*n.r*n.r*e.W})}else if(e.type==="flange"){const n=e.chamfer||0;t.push({key:"body",label:"Disk",vol:Di*e.R*e.R*e.t}),n>0&&t.push({key:"chamfer",label:"Edge chamfer",vol:-2*Di*(e.R-n/3)*(n*n)/2}),e.hubR>0&&t.push({key:"hub",label:"Hub",vol:Di*e.hubR*e.hubR*e.hubH}),t.push({key:"bore",label:"Centre bore",vol:-Pn(e.boreD)*(e.t+(e.hubR>0?e.hubH:0))})}return i.features.forEach((n,r)=>{let s=0;switch(n.kind){case"zhole":s=Pn(n.d)*n.depth,n.cb&&(s+=(Pn(n.cb.d)-Pn(n.d))*n.cb.depth);break;case"yhole":s=Pn(n.d)*i.body.W;break;case"xhole":s=Pn(n.d)*(n.x1-n.x0);break;case"slot":s=ad(n.w,n.len)*n.depth;break;case"pocket":s=ld(n.x1-n.x0,n.y1-n.y0,n.r)*n.depth;break;case"bolts":{const a=i.body.t;s=n.n*Pn(n.d)*a,n.cb&&(s+=n.n*(Pn(n.cb.d)-Pn(n.d))*n.cb.depth);break}default:throw new Error("unknown feature "+n.kind)}t.push({key:"feature",featureIndex:r,label:cd(n),vol:-s})}),t}function Kc(i){return jc(i).reduce((t,e)=>t+e.vol,0)}function Ys(i,t){return i/1e3*t}function cd(i){switch(i.kind){case"zhole":return`${i.thru?"Through":"Blind"} hole Ø${i.d}${i.cb?` with counterbore Ø${i.cb.d}`:""}`;case"yhole":case"xhole":return`Side hole Ø${i.d}`;case"slot":return`Slot ${i.w} × ${i.len}`;case"pocket":return`Pocket ${$r(i.x1-i.x0)} × ${$r(i.y1-i.y0)}`;case"bolts":return`${i.n}× bolt holes Ø${i.d}${i.cb?" (counterbored)":""}`}return i.kind}function $r(i){const t=Math.round(i*1e3)/1e3;return String(t)}function Zc(i){const t=[];for(const e of i.map(Fn).sort((n,r)=>n-r))t.some(n=>Math.abs(n-e)<1e-6)||t.push(e);return t}function Jc(i){const t=i.body,e={topX:[],topY:[],frontX:[],frontZ:[],rightY:[],rightZ:[]};if(t.type!=="prism")return e;const n=(a,o,l)=>e[a].push({v:Fn(o),tag:l}),r=t.segs[t.segs.length-1].x1,s=Math.max(...t.segs.map(a=>a.h));for(let a=0;a<t.segs.length-1;a++)n("frontX",t.segs[a].x1,`seg${a}.x1`);for(let a=0;a<t.segs.length;a++)n("frontZ",t.segs[a].h,`seg${a}.h`);i.features.forEach((a,o)=>{switch(a.kind){case"zhole":case"slot":n("topX",a.x,`f${o}.x`),n("topY",a.y,`f${o}.y`);break;case"pocket":n("topX",a.x0,`f${o}.x0`),n("topX",a.x1,`f${o}.x1`),n("topY",a.y0,`f${o}.y0`),n("topY",a.y1,`f${o}.y1`);break;case"yhole":n("frontX",a.x,`f${o}.x`),n("frontZ",a.z,`f${o}.z`);break;case"xhole":n("rightY",a.y,`f${o}.y`),n("rightZ",a.z,`f${o}.z`);break}}),e.overall={L:r,W:t.W,H:s};for(const a of["topX","topY","frontX","frontZ","rightY","rightZ"]){const o=Zc(e[a].map(l=>l.v));e[a]=o.map(l=>({v:l,tags:e[a].filter(c=>Math.abs(c.v-l)<1e-6).map(c=>c.tag)}))}return e}function ud(i,t=3,e=6){const n=Jc(i);if(i.body.type!=="prism")return!0;const r={topX:n.overall.L,topY:n.overall.W,frontX:null,frontZ:null,rightY:n.overall.W,rightZ:n.overall.H};for(const s of["topX","topY","frontX","frontZ","rightY","rightZ"]){const a=n[s].map(l=>l.v);r[s]!=null&&a.push(r[s]),a.push(0);const o=Zc(a);if(o.length-1>e+1)return!1;for(let l=1;l<o.length;l++)if(o[l]-o[l-1]<t)return!1}return!0}const hd={E:"easy",M:"medium",H:"hard"},dd={easy:"E",medium:"M",hard:"H"},al={plate:"Mounting plate",lbracket:"L-bracket",stepped:"Stepped block",flange:"Flange"},Jt=2.5,di={easy:5,medium:1,hard:.5},ll={easy:5,medium:2,hard:1},fd={easy:[5,6,8,10],medium:[4,5,6,6.6,8,9,10,12],hard:[3.5,4.5,5.5,6.6,9,11,13.5]},js={3.5:6.5,4.5:8,5.5:9.5,6.6:11,9:15,11:18,13.5:20,4:7.5,5:9,6:10,8:13,10:16,12:19};function Qc(i){const t=/^([EMH])-(\d{1,9})$/.exec(String(i).trim().toUpperCase());return t?{difficulty:hd[t[1]],seed:Number(t[2]),letter:t[1]}:null}function tu(i,t){return`${dd[i]}-${t}`}const pd={easy:["plate","plate","lbracket","flange"],medium:["plate","lbracket","stepped","flange"],hard:["plate","lbracket","stepped","stepped","flange"]};function Ks(i){const t=Qc(i);if(!t)throw new Error("Bad drill id: "+i);const e=od(`cad-drills/v1/${t.letter}/${t.seed}`),n=e.pick(pd[t.difficulty]);for(let r=0;r<400;r++){const s=Ad[n](e,t.difficulty);if(!s||(s.id=tu(t.difficulty,t.seed),s.seed=t.seed,s.difficulty=t.difficulty,s.family=n,s.title=gd(s),s.generatorVersion=1,s.features.length===0))continue;if(eu(s).ok)return wd(s)}throw new Error("Generator could not build a valid part for "+i)}function md(i,t,e){for(let n=t;n<t+5e3;n++){const r=Ks(tu(i,n));if(!e||e==="any"||r.family===e)return r}throw new Error("no seed found")}function gd(i){if(i.family==="stepped"){const t=i.body.shape;return t==="tee"?"Tee block":t==="u"?"Channel block":"Stepped block"}return al[i.family]}function _d(i,t){const e=i.body;switch(t.kind){case"zhole":{const n=Math.max(t.d,t.cb?t.cb.d:0)/2;return[t.x-n,t.x+n,t.y-n,t.y+n,t.top-t.depth,t.top]}case"slot":{const n=t.dir==="x"?t.len/2:t.w/2,r=t.dir==="x"?t.w/2:t.len/2;return[t.x-n,t.x+n,t.y-r,t.y+r,t.top-t.depth,t.top]}case"pocket":return[t.x0,t.x1,t.y0,t.y1,t.top-t.depth,t.top];case"yhole":return[t.x-t.d/2,t.x+t.d/2,0,e.W,t.z-t.d/2,t.z+t.d/2];case"xhole":return[t.x0,t.x1,t.y-t.d/2,t.y+t.d/2,t.z-t.d/2,t.z+t.d/2]}return null}function vd(i,t,e){for(let n=0;n<3;n++){const r=i[2*n],s=i[2*n+1],a=t[2*n],o=t[2*n+1];if(a-s>=e-1e-9||r-o>=e-1e-9)return!0}return!1}function eu(i){const t=[],e=i.body;if(e.type==="prism"){const n=e.segs,r=e.W;for(let o=0;o<n.length;o++)n[o].x1-n[o].x0<8&&t.push("segment too narrow"),o>0&&Math.abs(n[o].h-n[o-1].h)<4&&t.push("step too small");const s=[];if(e.corner){n.length!==1&&t.push("corners only on plates");const o=e.corner.size,l=n[0].x1,c=n[0].h;s.push([0,o,0,o,0,c],[l-o,l,0,o,0,c],[0,o,r-o,r,0,c],[l-o,l,r-o,r,0,c])}for(const o of e.fillets||[]){const l=o.dir>0?[o.xb,o.xb+o.r,0,r,o.z,o.z+o.r]:[o.xb-o.r,o.xb,0,r,o.z,o.z+o.r],c=n.find(f=>l[0]>=f.x0-1e-9&&l[1]<=f.x1+1e-9);(!c||Math.abs(c.h-o.z)>1e-9)&&t.push("fillet not on a step");const d=n.find(f=>o.dir>0?Math.abs(f.x1-o.xb)<1e-9:Math.abs(f.x0-o.xb)<1e-9);(!d||d.h<o.z+o.r+2)&&t.push("fillet taller than wall"),c&&(o.dir>0?c.x1-o.xb:o.xb-c.x0)<o.r+6&&t.push("fillet too wide for segment"),s.push(l)}const a=(o,l)=>n.find(c=>o>=c.x0+Jt-1e-9&&l<=c.x1-Jt+1e-9);for(const o of i.features){const l=_d(i,o);if(!l){t.push("bad feature");continue}if(o.kind==="zhole"||o.kind==="slot"||o.kind==="pocket"){const c=a(l[0],l[1]);c?Math.abs(c.h-o.top)>1e-9&&t.push(o.kind+" top not on segment face"):t.push(o.kind+" not inside one segment"),(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push(o.kind+" too close to front/back"),o.thru!==void 0&&o.thru&&Math.abs(o.depth-o.top)>1e-9&&t.push("thru depth mismatch"),!o.thru&&o.kind!=="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("blind too deep"),o.kind==="pocket"&&o.depth>o.top-Jt+1e-9&&t.push("pocket too deep"),o.kind==="pocket"&&o.r*2>Math.min(o.x1-o.x0,o.y1-o.y0)-2&&t.push("pocket radius"),o.kind==="slot"&&o.len<o.w+4&&t.push("slot too short"),o.cb&&(o.cb.d<=o.d+1&&t.push("cbore too small"),o.cb.depth>=o.depth-2&&t.push("cbore too deep"))}else if(o.kind==="yhole"){const c=a(l[0],l[1]);c?l[5]>c.h-Jt+1e-9&&t.push("yhole too high"):t.push("yhole not in one segment"),l[4]<Jt-1e-9&&t.push("yhole too low")}else if(o.kind==="xhole"){const c=n.findIndex(d=>Math.abs(d.x0-o.x0)<1e-9&&Math.abs(d.x1-o.x1)<1e-9);if(c<0)t.push("xhole must span a whole segment");else{const d=n[c];l[5]>d.h-Jt+1e-9&&t.push("xhole too high"),l[4]<Jt-1e-9&&t.push("xhole too low");for(const f of[n[c-1],n[c+1]])f&&f.h>l[4]-Jt+1e-9&&t.push("xhole hits neighbour")}(l[2]<Jt-1e-9||l[3]>r-Jt+1e-9)&&t.push("xhole too close to front/back")}for(const c of s)vd(c,l,Jt)||t.push("features too close");s.push(l)}ud(i)||t.push("dimension stacks crowded")}else if(e.type==="flange"){const n=e.chamfer||0;e.boreD/2+Jt>(e.hubR>0?e.hubR:e.R-n)&&t.push("bore too big");for(const r of i.features){if(r.kind!=="bolts"){t.push("flange only has bolt circles");continue}const s=r.bc/2,a=Math.max(r.d,r.cb?r.cb.d:0)/2,o=(e.hubR>0?e.hubR:e.boreD/2)+Jt;s-a<o-1e-9&&t.push("bolt holes hit hub/bore"),s+a>e.R-n-Jt+1e-9&&t.push("bolt holes hit rim"),2*s*Math.sin(Math.PI/r.n)<2*a+Jt&&t.push("bolt holes too close"),r.cb&&r.cb.depth>e.t-Jt&&t.push("cbore too deep"),r.cb&&r.cb.d<=r.d+1&&t.push("cbore too small")}e.hubR>0&&e.hubR+4>e.R-n&&t.push("hub too big")}return Kc(i)>0||t.push("non-positive volume"),{ok:t.length===0,errs:t}}function Kr(i,t){return i.pick(fd[t])}function Zs(i,t,e,n=40){for(let r=0;r<n;r++){const s=e();if(!s||s.length===0)continue;const a=i._group=(i._group||0)+1;s.forEach(l=>l.group=a);const o={...i,features:[...i.features,...s]};if(eu(o).ok)return i.features.push(...s),!0;i._group--}return!1}function Cn(i,t,e,n,r={}){const s=!r.depth;return{kind:"zhole",x:Fn(i),y:Fn(t),d:e,top:n,depth:s?n:r.depth,thru:s,cb:r.cb||null}}function Fl(i,t,e,n,r,s){const a=i.next();if(s&&a<(t==="hard"?.45:.3)&&js[n]&&e>=8){const o=js[n],l=i.q(Math.min(3,e-4),Math.min(e-4,Math.round(o*.7)),t==="hard"?.5:1);return l==null||l<2?{}:{cb:{d:o,depth:l}}}if(r&&a>.7&&e>=8){const o=i.q(3,e-Jt,t==="hard"?.5:1);return o==null?{}:{depth:o}}return{}}function xd(i,t,e,n,r){const s=di[t],a=Kr(i,t),o=Fl(i,t,n,a,t!=="easy",t!=="easy"),l=Math.max(a,o.cb?o.cb.d:0)/2,c=l+Jt,d=e.x1-e.x0,f=e.y1-e.y0;if(r==="pattern4"){const u=i.q(c,d/2-l-Jt/2-2,s),p=i.q(c,f/2-l-Jt/2-2,s);return u==null||p==null?null:[Cn(e.x0+u,e.y0+p,a,n,o),Cn(e.x1-u,e.y0+p,a,n,o),Cn(e.x0+u,e.y1-p,a,n,o),Cn(e.x1-u,e.y1-p,a,n,o)]}if(r==="pairY"){const u=i.q(e.x0+c,e.x1-c,s),p=i.q(c,f/2-l-2,s);return u==null||p==null?null:[Cn(u,e.y0+p,a,n,o),Cn(u,e.y1-p,a,n,o)]}if(r==="pairX"){const u=i.q(e.y0+c,e.y1-c,s),p=i.q(c,d/2-l-2,s);return u==null||p==null?null:[Cn(e.x0+p,u,a,n,o),Cn(e.x1-p,u,a,n,o)]}if(r==="single"){const u=i.q(e.x0+c,e.x1-c,s),p=i.q(e.y0+c,e.y1-c,s);return u==null||p==null?null:[Cn(u,p,a,n,o)]}if(r==="center"){const u=t==="easy"?i.pick([10,12,15,20,25]):i.q(10,Math.min(d,f)*.5,t==="hard"?.5:1);if(u==null)return null;const p=t==="easy"?{}:Fl(i,t,n,u,!0,!1);return[Cn((e.x0+e.x1)/2,(e.y0+e.y1)/2,u,n,p)]}return null}function yd(i,t,e,n){const r=di[t],s=i.pick(t==="hard"?[5,6.5,8,9,10.5,12]:[6,8,10,12]),a=i.chance(.5)?"x":"y",o=a==="x"?e.x1-e.x0:e.y1-e.y0,l=i.q(s+6,Math.max(s+6,o*.7),t==="hard"?.5:1);if(l==null)return null;const c=a==="x"?l/2:s/2,d=a==="x"?s/2:l/2,f=i.q(e.x0+c+Jt,e.x1-c-Jt,r),u=i.q(e.y0+d+Jt,e.y1-d-Jt,r);if(f==null||u==null)return null;const p=t==="hard"&&i.chance(.4)&&n>=8,_=p?i.q(3,n-Jt,.5):n;return _==null?null:[{kind:"slot",x:f,y:u,w:s,len:l,dir:a,top:n,depth:_,thru:!p}]}function Md(i,t,e,n){const r=di[t],s=i.q(14,(e.x1-e.x0)*.6,r),a=i.q(12,(e.y1-e.y0)*.6,r);if(s==null||a==null)return null;const o=i.q(2,Math.min(6,Math.min(s,a)/2-1.5),t==="hard"?.5:1),l=i.q(e.x0+Jt,e.x1-s-Jt,r),c=i.q(e.y0+Jt,e.y1-a-Jt,r),d=i.q(2,n-Jt-1,t==="hard"?.5:1);return o==null||l==null||c==null||d==null?null:[{kind:"pocket",x0:l,x1:Fn(l+s),y0:c,y1:Fn(c+a),r:o,top:n,depth:d}]}function bd(i,t){const e=ll[t],n=i.q(50,t==="hard"?140:120,e),r=i.q(35,Math.min(n,t==="easy"?80:100),e),s=t==="easy"?i.pick([6,8,10,12,15,20]):i.q(6,22,t==="hard"?.5:1);let a=null;const o={easy:.5,medium:.65,hard:.8}[t];if(i.chance(o)){const f=t==="easy"||i.chance(.55)?"round":"chamfer",u=t==="easy"?i.pick([3,5,8]):i.q(2,Math.min(10,r/5),t==="hard"?.5:1);a={kind:f,size:u}}const l={body:{type:"prism",W:r,segs:[{x0:0,x1:n,h:s}],corner:a,fillets:[]},features:[]},c={x0:0,x1:n,y0:0,y1:r},d=t==="easy"?[i.pick(["pattern4","pattern4","pairX","center"])]:t==="medium"?ma(i,["pattern4","slot","pocket","center","pairX","pairY"]).slice(0,i.int(2,3)):ma(i,["pattern4","slot","pocket","center","pairY","slot","single"]).slice(0,i.int(3,4));t==="easy"&&d[0]==="pattern4"&&i.chance(.5)&&d.push("center");for(const f of d)Wr(l,i,t,f,c,s);return l}function Wr(i,t,e,n,r,s){return Zs(i,t,()=>n==="slot"?yd(t,e,r,s):n==="pocket"?Md(t,e,r,s):xd(t,e,r,s,n))}function Sd(i,t){const e=ll[t],n=t==="hard"?.5:1,r=i.q(50,110,e),s=i.q(30,75,e),a=i.q(40,90,e),o=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),l=t==="easy"?i.pick([6,8,10,12]):i.q(6,14,n),c=[{x0:0,x1:o,h:a},{x0:o,x1:r,h:l}],d=[];t!=="easy"&&i.chance(t==="hard"?.8:.5)&&d.push({xb:o,z:l,r:i.q(3,8,t==="hard"?.5:1),dir:1});const f={body:{type:"prism",W:s,segs:c,corner:null,fillets:d},features:[]},u={x0:o+(d[0]?d[0].r:0),x1:r,y0:0,y1:s},p=t==="easy"?i.pick(["pairY","pattern4"]):i.pick(["pairY","pattern4","slot","pattern4"]);return p==="slot"?Wr(f,i,t,"slot",{...u,x0:u.x0},l):Wr(f,i,t,p,u,l),Zs(f,i,()=>{const _=Kr(i,t),x=l+(d[0]?d[0].r:0)+Jt+_/2,h=di[t],g=i.q(x+2,a-Jt-_/2,h);if(g==null)return null;if(i.chance(t==="easy"?.5:.65)){const b=i.q(Jt+_/2,s/2-_/2-2,h);return b==null?null:[{kind:"xhole",y:b,z:g,d:_,x0:0,x1:o},{kind:"xhole",y:Fn(s-b),z:g,d:_,x0:0,x1:o}]}return[{kind:"xhole",y:Fn(s/2),z:g,d:_,x0:0,x1:o}]}),t==="hard"&&i.chance(.5)&&Wr(f,i,t,"single",u,l),f}function Ed(i,t){const e=ll[t],n=t==="hard"?.5:1,r=i.pick(t==="medium"?["step2","step3","tee","u"]:["step3","tee","u","step2"]),s=r==="step2"?2:3,a=i.q(70,140,e),o=i.q(30,80,e),l=[];for(let y=1;y<s;y++)l.push(i.q(16*y,a-16*(s-y),di[t]<1?1:di[t]));l.sort((y,T)=>y-T);const c=[0,...l,a];for(let y=1;y<c.length;y++)if(c[y]-c[y-1]<16)return null;let d;const f=(y,T)=>i.q(y,T,n);if(r==="step2"){const y=f(18,45);d=[y,f(8,y-6)]}else if(r==="step3"){const y=f(26,50),T=f(16,y-6);d=[y,T,f(8,T-6)]}else if(r==="tee"){const y=f(24,50);d=[f(8,y-8),y,f(8,y-8)]}else{const y=f(8,20);d=[f(y+8,50),y,f(y+8,50)]}if(d.some(y=>y==null))return null;i.chance(.5)&&r!=="tee"&&r!=="u"&&d.reverse();const u=d.map((y,T)=>({x0:c[T],x1:c[T+1],h:y})),p=[];if(t!=="easy"&&i.chance(t==="hard"?.7:.4)){const y=i.q(2,6,n);for(let T=0;T<u.length-1;T++){const D=u[T],P=u[T+1];D.h>P.h?p.push({xb:D.x1,z:P.h,r:y,dir:1}):p.push({xb:D.x1,z:D.h,r:y,dir:-1})}}const _={body:{type:"prism",W:o,segs:u,corner:null,fillets:p,shape:r},features:[]},x=y=>{const T=u[y];let D=T.x0,P=T.x1;for(const C of p)C.dir>0&&Math.abs(C.xb-T.x0)<1e-9&&Math.abs(C.z-T.h)<1e-9&&(D+=C.r),C.dir<0&&Math.abs(C.xb-T.x1)<1e-9&&Math.abs(C.z-T.h)<1e-9&&(P-=C.r);return{x0:D,x1:P,y0:0,y1:o}},h=ma(i,u.map((y,T)=>T)),g=t==="medium"?2:i.int(3,4);let b=0;for(const y of h){if(b>=g)break;const T=i.pick(t==="hard"?["pairY","pairY","single","slot","pocket"]:["pairY","pairY","single"]);Wr(_,i,t,T,x(y),u[y].h)&&b++}if(i.chance(t==="hard"?.75:.5)){const y=d.indexOf(Math.max(...d)),T=u[y];Zs(_,i,()=>{const D=Kr(i,t),P=i.q(T.x0+Jt+D/2,T.x1-Jt-D/2,di[t]),C=i.q(Jt+D/2,T.h-Jt-D/2,di[t]);return P==null||C==null?null:[{kind:"yhole",x:P,z:C,d:D}]})}if(r==="u"&&t==="hard"&&i.chance(.6)){const y=u[0];Zs(_,i,()=>{const T=Kr(i,t),D=i.q(u[1].h+Jt+T/2+1,y.h-Jt-T/2,.5),P=Fn(o/2);return D==null?null:[{kind:"xhole",y:P,z:D,d:T,x0:y.x0,x1:y.x1}]})}return b===0?null:_}function Td(i,t){const e=t==="easy"?i.pick([30,35,40,45,50,60]):i.q(30,70,t==="hard"?.5:1),n=t==="easy"?i.pick([6,8,10,12]):i.q(6,16,t==="hard"?.5:1);let r=0,s=0;t!=="easy"&&i.chance(t==="hard"?.85:.6)&&(r=i.q(e*.3,e*.55,t==="hard"?.5:1),s=i.q(5,25,t==="hard"?.5:1));const a=t==="hard"&&i.chance(.65)?i.q(1,Math.min(3,n/3),.5):0,o=r>0?2*(r-Jt-1):e*.8,l=t==="easy"?i.pick([10,15,20,25,30]):i.q(8,Math.min(o,50),t==="hard"?.5:1);if(l==null)return null;const c=i.pick(t==="easy"?[3,4,6]:[3,4,5,6,8]),d=Kr(i,t);let f=null;t==="hard"&&i.chance(.5)&&js[d]&&n>=8&&(f={d:js[d],depth:i.q(2,n-4,.5)});const u=(r>0?r:l/2)+Jt,p=Math.max(d,f?f.d:0)/2,_=i.q(2*(u+p),2*(e-a-Jt-p),t==="easy"?10:t==="medium"?2:1);return _==null||f&&f.depth==null?null:{body:{type:"flange",R:e,t:n,chamfer:a,hubR:r,hubH:s,boreD:l},features:[{kind:"bolts",n:c,bc:_,d,top:n,cb:f,startDeg:0,group:1}]}}function ma(i,t){const e=t.slice();for(let n=e.length-1;n>0;n--){const r=Math.floor(i.next()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}const Ad={plate:bd,lbracket:Sd,stepped:Ed,flange:Td};function wd(i){const t=JSON.parse(JSON.stringify(i));return delete t._group,t}const Ji=297,Nr=210,dn=8,Ol=27,Os=6.5,ks=7,ga=3,fr=2.8,ls=2.4,Po=[5,4,3,2.5,2,1.5,1,.75,.5,.4,.3,.25,.2,.15,.1];function Le(i){const t=Math.round(i*1e3)/1e3;return String(t)}const qn="Ø";function Rd(i){for(let t=1;t<=20;t++){const e=i*t;if(Math.abs(e-Math.round(e))<1e-9){const n=Math.round(e),r=nu(n,t);return`${n/r}:${t/r}`}}return i.toFixed(2)}function nu(i,t){return t?nu(t,i%t):i}function In(i,t,e,n,r,s=16){const a=[];for(let o=0;o<=s;o++){const l=n+(r-n)*o/s;a.push([i+e*Math.cos(l),t+e*Math.sin(l)])}return a}function iu(i,t,e,n,r){if(r<=0)return[[i,t],[e,t],[e,n],[i,n]];const s=Math.PI;return[...In(e-r,t+r,r,-s/2,0),...In(e-r,n-r,r,0,s/2),...In(i+r,n-r,r,s/2,s),...In(i+r,t+r,r,s,1.5*s)]}function Cd(i,t,e,n,r){const s=e/2,a=(n-e)/2,o=Math.PI;return r==="x"?[...In(i+a,t,s,-o/2,o/2),...In(i-a,t,s,o/2,1.5*o)]:[...In(i,t+a,s,0,o),...In(i,t-a,s,o,2*o)]}function Pd(i,t,e){if(!e)return[[0,0],[i,0],[i,t],[0,t]];const n=e.size;return e.kind==="chamfer"?[[n,0],[i-n,0],[i,n],[i,t-n],[i-n,t],[n,t],[0,t-n],[0,n]]:iu(0,0,i,t,n)}function Bs(i,t,e,n){i.push({t:"cmark",c:[t,e],r:n})}function Ld(i){const t=i.body,e=t.segs,n=e[e.length-1].x1,r=t.W,s=Math.max(...e.map(u=>u.h)),a={name:"TOP",u0:0,u1:n,v0:0,v1:r,prims:[]},o={name:"FRONT",u0:0,u1:n,v0:0,v1:s,prims:[]},l={name:"RIGHT",u0:0,u1:r,v0:0,v1:s,prims:[]};a.prims.push({t:"poly",pts:Pd(n,r,t.corner),closed:!0,st:"vis"});for(let u=0;u<e.length-1;u++)a.prims.push({t:"line",a:[e[u].x1,0],b:[e[u].x1,r],st:"vis"});for(const u of t.fillets||[]){const p=u.xb+u.dir*u.r;a.prims.push({t:"line",a:[p,0],b:[p,r],st:"thin"})}const c=Math.PI,d=[[0,e[0].h]];for(let u=0;u<e.length-1;u++){const p=e[u],_=e[u+1],x=p.x1,h=(t.fillets||[]).find(g=>Math.abs(g.xb-x)<1e-9);h?h.dir<0?d.push([x-h.r,p.h],...In(x-h.r,p.h+h.r,h.r,-c/2,0),[x,_.h]):d.push([x,p.h],[x,_.h+h.r],...In(x+h.r,_.h+h.r,h.r,c,1.5*c),[x+h.r,_.h]):d.push([x,p.h],[x,_.h])}d.push([n,e[e.length-1].h]);const f=[[0,0],[n,0],...d.reverse()];if(o.prims.push({t:"poly",pts:Dd(f),closed:!0,st:"vis"}),t.corner){const u=t.corner.size,p=e[0].h,_=t.corner.kind==="chamfer"?"vis":"thin";o.prims.push({t:"line",a:[u,0],b:[u,p],st:_},{t:"line",a:[n-u,0],b:[n-u,p],st:_}),l.prims.push({t:"line",a:[u,0],b:[u,p],st:_},{t:"line",a:[r-u,0],b:[r-u,p],st:_})}l.prims.push({t:"poly",pts:[[0,0],[r,0],[r,s],[0,s]],closed:!0,st:"vis"});for(let u=0;u<e.length;u++){const p=e[u].h;if(Math.abs(p-s)<1e-9)continue;const _=Math.max(0,...e.slice(u+1).map(x=>x.h));l.prims.push({t:"line",a:[0,p],b:[r,p],st:_>p+1e-9?"hid":"vis"})}return i.features.forEach(u=>{if(u.kind==="zhole"){const p=u.d/2,_=u.top-u.depth;a.prims.push({t:"circle",c:[u.x,u.y],r:p,st:"vis",obst:!0}),u.cb&&a.prims.push({t:"circle",c:[u.x,u.y],r:u.cb.d/2,st:"vis",obst:!0}),Bs(a.prims,u.x,u.y,Math.max(p,u.cb?u.cb.d/2:0));for(const[x,h]of[[o,u.x],[l,u.y]]){const g=u.cb?u.top-u.cb.depth:u.top;if(x.prims.push({t:"line",a:[h-p,_],b:[h-p,g],st:"hid"},{t:"line",a:[h+p,_],b:[h+p,g],st:"hid"}),u.thru||x.prims.push({t:"line",a:[h-p,_],b:[h+p,_],st:"hid"}),u.cb){const b=u.cb.d/2;x.prims.push({t:"line",a:[h-b,g],b:[h-b,u.top],st:"hid"},{t:"line",a:[h+b,g],b:[h+b,u.top],st:"hid"},{t:"line",a:[h-b,g],b:[h+b,g],st:"hid"})}x.prims.push({t:"cline",a:[h,_],b:[h,u.top]})}}else if(u.kind==="slot"){const p=u.top-u.depth;a.prims.push({t:"poly",pts:Cd(u.x,u.y,u.w,u.len,u.dir),closed:!0,st:"vis",obst:!0});const _=(u.len-u.w)/2;u.dir==="x"?a.prims.push({t:"cline",a:[u.x-_-u.w/2,u.y],b:[u.x+_+u.w/2,u.y]},{t:"cline",a:[u.x,u.y-u.w/2],b:[u.x,u.y+u.w/2]}):a.prims.push({t:"cline",a:[u.x,u.y-_-u.w/2],b:[u.x,u.y+_+u.w/2]},{t:"cline",a:[u.x-u.w/2,u.y],b:[u.x+u.w/2,u.y]});const x=u.dir==="x"?u.len/2:u.w/2,h=u.dir==="x"?u.w/2:u.len/2;for(const[g,b,y]of[[o,u.x,x],[l,u.y,h]])g.prims.push({t:"line",a:[b-y,p],b:[b-y,u.top],st:"hid"},{t:"line",a:[b+y,p],b:[b+y,u.top],st:"hid"}),u.thru||g.prims.push({t:"line",a:[b-y,p],b:[b+y,p],st:"hid"}),g.prims.push({t:"cline",a:[b,p],b:[b,u.top]})}else if(u.kind==="pocket"){const p=u.top-u.depth;a.prims.push({t:"poly",pts:iu(u.x0,u.y0,u.x1,u.y1,u.r),closed:!0,st:"vis",obst:!0});for(const[_,x,h]of[[o,u.x0,u.x1],[l,u.y0,u.y1]])_.prims.push({t:"line",a:[x,p],b:[x,u.top],st:"hid"},{t:"line",a:[h,p],b:[h,u.top],st:"hid"},{t:"line",a:[x,p],b:[h,p],st:"hid"})}else if(u.kind==="yhole"){const p=u.d/2;o.prims.push({t:"circle",c:[u.x,u.z],r:p,st:"vis",obst:!0}),Bs(o.prims,u.x,u.z,p),a.prims.push({t:"line",a:[u.x-p,0],b:[u.x-p,r],st:"hid"},{t:"line",a:[u.x+p,0],b:[u.x+p,r],st:"hid"},{t:"cline",a:[u.x,0],b:[u.x,r]}),l.prims.push({t:"line",a:[0,u.z-p],b:[r,u.z-p],st:"hid"},{t:"line",a:[0,u.z+p],b:[r,u.z+p],st:"hid"},{t:"cline",a:[0,u.z],b:[r,u.z]})}else if(u.kind==="xhole"){const p=u.d/2,_=e.some(x=>x.x0>=u.x1-1e-9&&x.h>u.z-p+1e-9);l.prims.push({t:"circle",c:[u.y,u.z],r:p,st:_?"hid":"vis",obst:!0}),Bs(l.prims,u.y,u.z,p),a.prims.push({t:"line",a:[u.x0,u.y-p],b:[u.x1,u.y-p],st:"hid"},{t:"line",a:[u.x0,u.y+p],b:[u.x1,u.y+p],st:"hid"},{t:"cline",a:[u.x0,u.y],b:[u.x1,u.y]}),o.prims.push({t:"line",a:[u.x0,u.z-p],b:[u.x1,u.z-p],st:"hid"},{t:"line",a:[u.x0,u.z+p],b:[u.x1,u.z+p],st:"hid"},{t:"cline",a:[u.x0,u.z],b:[u.x1,u.z]})}}),{top:a,front:o,right:l,L:n,W:r,H:s}}function Dd(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n[0]-e[0],n[1]-e[1])>1e-9)&&t.push(e)}return t}function Id(i){const t=i.body,e=t.chamfer||0,n=t.t+(t.hubR>0?t.hubH:0),r={name:"TOP",u0:-t.R,u1:t.R,v0:-t.R,v1:t.R,prims:[]},s={name:"FRONT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]},a={name:"RIGHT",u0:-t.R,u1:t.R,v0:0,v1:n,prims:[]};r.prims.push({t:"circle",c:[0,0],r:t.R,st:"vis"}),e>0&&r.prims.push({t:"circle",c:[0,0],r:t.R-e,st:"vis"}),t.hubR>0&&r.prims.push({t:"circle",c:[0,0],r:t.hubR,st:"vis"}),r.prims.push({t:"circle",c:[0,0],r:t.boreD/2,st:"vis",obst:!0}),r.prims.push({t:"cline",a:[-t.R,0],b:[t.R,0]},{t:"cline",a:[0,-t.R],b:[0,t.R]});const o=[[-t.R,0],[t.R,0]];e>0?o.push([t.R,t.t-e],[t.R-e,t.t]):o.push([t.R,t.t]),t.hubR>0&&o.push([t.hubR,t.t],[t.hubR,n],[-t.hubR,n],[-t.hubR,t.t]),e>0?o.push([-(t.R-e),t.t],[-t.R,t.t-e]):o.push([-t.R,t.t]);for(const l of[s,a]){l.prims.push({t:"poly",pts:o,closed:!0,st:"vis"}),e>0&&l.prims.push({t:"line",a:[-t.R,t.t-e],b:[t.R,t.t-e],st:"vis"}),t.hubR>0&&l.prims.push({t:"line",a:[-t.hubR,t.t],b:[t.hubR,t.t],st:"vis"});const c=t.boreD/2;l.prims.push({t:"line",a:[-c,0],b:[-c,n],st:"hid"},{t:"line",a:[c,0],b:[c,n],st:"hid"}),l.prims.push({t:"cline",a:[0,0],b:[0,n]})}for(const l of i.features){if(l.kind!=="bolts")continue;r.prims.push({t:"circle",c:[0,0],r:l.bc/2,st:"ctr"});const c=new Set,d=new Set;for(let f=0;f<l.n;f++){const u=((l.startDeg||0)+360*f/l.n)*Math.PI/180,p=l.bc/2*Math.cos(u),_=l.bc/2*Math.sin(u);r.prims.push({t:"circle",c:[p,_],r:l.d/2,st:"vis",obst:!0}),l.cb&&r.prims.push({t:"circle",c:[p,_],r:l.cb.d/2,st:"vis",obst:!0}),Bs(r.prims,p,_,Math.max(l.d,l.cb?l.cb.d:0)/2);for(const[x,h,g]of[[s,p,c],[a,_,d]]){const b=Math.round(h*1e3);if(g.has(b))continue;g.add(b);const y=l.d/2,T=l.cb?t.t-l.cb.depth:t.t;if(x.prims.push({t:"line",a:[h-y,0],b:[h-y,T],st:"hid"},{t:"line",a:[h+y,0],b:[h+y,T],st:"hid"}),l.cb){const D=l.cb.d/2;x.prims.push({t:"line",a:[h-D,T],b:[h-D,t.t],st:"hid"},{t:"line",a:[h+D,T],b:[h+D,t.t],st:"hid"},{t:"line",a:[h-D,T],b:[h+D,T],st:"hid"})}x.prims.push({t:"cline",a:[h,0],b:[h,t.t]})}}}return{top:r,front:s,right:a,L:2*t.R,W:2*t.R,H:n}}function Ud(i,t){const e=i.body,n={top:{stacks:{},callouts:[]},front:{stacks:{},callouts:[]},right:{stacks:{},callouts:[]}},r=(s,a,o)=>(n[s].stacks[a]=n[s].stacks[a]||[]).push(o);if(e.type==="prism"){const s=Jc(i),a=e.segs,o=s.overall.L,l=s.overall.W,c=s.overall.H,d=_=>{let x=-1/0,h=1/0;for(const g of _){const b=/^f(\d+)\.(\w+)$/.exec(g);if(!b)continue;const y=i.features[+b[1]];let T,D;if(y.kind==="zhole"){const P=Math.max(y.d,y.cb?y.cb.d:0)/2;T=y.y+P,D=y.y-P}else if(y.kind==="slot"){const P=y.dir==="x"?y.w/2:y.len/2;T=y.y+P,D=y.y-P}else if(y.kind==="pocket")T=y.y1,D=y.y0;else continue;x=Math.max(x,T),h=Math.min(h,D)}return{hi:x,lo:h}},f=_=>{let x=1/0;for(const h of _){const g=/^f(\d+)\.(\w+)$/.exec(h);if(!g)continue;const b=i.features[+g[1]];b.kind==="zhole"?x=Math.min(x,b.x-Math.max(b.d,b.cb?b.cb.d:0)/2):b.kind==="slot"?x=Math.min(x,b.x-(b.dir==="x"?b.len/2:b.w/2)):b.kind==="pocket"&&(x=Math.min(x,b.x0))}return x};for(const _ of s.topX){const x=d(_.tags);r("top","top",{v:_.v,tags:_.tags,from:isFinite(x.hi)?x.hi:l})}r("top","top",{v:o,tags:["L"],from:l,overall:!0});for(const _ of s.topY){const x=f(_.tags);r("top","left",{v:_.v,tags:_.tags,from:isFinite(x)?x:0})}r("top","left",{v:l,tags:["W"],from:0,overall:!0});for(const _ of s.frontX){let x=0;for(const h of _.tags){const g=/^f(\d+)\.x$/.exec(h);if(g){const b=i.features[+g[1]];x=b.z-b.d/2}}r("front","bottom",{v:_.v,tags:_.tags,from:x})}for(const _ of s.frontZ){let x="left",h=0;const g=_.tags.map(b=>/^seg(\d+)\.h$/.exec(b)).filter(Boolean).map(b=>+b[1]);if(g.length){const b=Math.min(...g),y=a.slice(0,b).every(P=>P.h<=_.v+1e-9),T=Math.max(...g),D=a.slice(T+1).every(P=>P.h<=_.v+1e-9);y?(x="left",h=a[b].x0):D?(x="right",h=a[T].x1):(x="left",h=a[b].x0)}else for(const b of _.tags){const y=/^f(\d+)\.z$/.exec(b);if(y){const T=i.features[+y[1]];h=T.x-T.d/2}}r("front",x,{v:_.v,tags:_.tags,from:h,overall:Math.abs(_.v-c)<1e-9})}for(const _ of s.rightY){let x=0;for(const h of _.tags){const g=/^f(\d+)\.y$/.exec(h);if(g){const b=i.features[+g[1]];x=b.z-b.d/2}}r("right","bottom",{v:_.v,tags:_.tags,from:x})}for(const _ of s.rightZ){let x=l;for(const h of _.tags){const g=/^f(\d+)\.z$/.exec(h);if(g){const b=i.features[+g[1]];x=b.y+b.d/2}}r("right","right",{v:_.v,tags:_.tags,from:x})}if(e.corner){const _=e.corner.size,x=e.corner.kind==="round"?[o-_+_*Math.SQRT1_2,l-_+_*Math.SQRT1_2]:[o-_/2,l-_/2];n.top.callouts.push({target:x,lines:[e.corner.kind==="round"?`4× R${Le(_)}`:`4× ${Le(_)} × 45° CHAMFER`],tags:["corner"]})}const u=new Map;i.features.forEach((_,x)=>{let h,g;_.kind==="zhole"?(h=`z|${_.d}|${_.thru}|${_.depth}|${_.cb?_.cb.d+"/"+_.cb.depth:""}|${_.top}`,g="top"):_.kind==="slot"?(h=`s|${x}`,g="top"):_.kind==="pocket"?(h=`p|${x}`,g="top"):_.kind==="yhole"?(h=`y|${_.d}`,g="front"):_.kind==="xhole"&&(h=`x|${_.d}|${_.x0}|${_.x1}`,g="right"),u.has(h)||u.set(h,{view:g,idx:[]}),u.get(h).idx.push(x)});for(const _ of u.values()){const x=_.idx.map(S=>i.features[S]),h=x[0],g=x.length,b=g>1?`${g}× `:"",y=[];for(const S of _.idx){const W=i.features[S];W.kind==="zhole"&&y.push(`f${S}.d`,`f${S}.depth`,...W.cb?[`f${S}.cb`]:[]),(W.kind==="yhole"||W.kind==="xhole")&&y.push(`f${S}.d`),W.kind==="slot"&&y.push(`f${S}.w`,`f${S}.len`,`f${S}.depth`),W.kind==="pocket"&&y.push(`f${S}.r`,`f${S}.depth`)}let T,D,P;const C=S=>S.kind==="zhole"||S.kind==="slot"?S.x+S.y*.5:S.kind==="pocket"?S.x1+S.y1*.5:S.kind==="yhole"?S.x+S.z*.5:S.y+S.z*.5;P=x.reduce((S,W,j)=>C(W)>C(x[S])?j:S,0);const I=x[P],st=Math.SQRT1_2;if(h.kind==="zhole"){T=[`${b}${qn}${Le(h.d)} ${h.thru?"THRU":`× ${Le(h.depth)} DEEP`}`],h.cb&&T.push(`C'BORE ${qn}${Le(h.cb.d)} × ${Le(h.cb.depth)} DEEP`);const S=(h.cb?h.cb.d:h.d)/2;D=[I.x+S*st,I.y+S*st]}else if(h.kind==="slot"){T=[`SLOT ${Le(h.w)} WIDE × ${Le(h.len)} LONG`,h.thru?"OVERALL, THRU":`OVERALL, ${Le(h.depth)} DEEP`];const S=(h.len-h.w)/2,W=h.dir==="x"?h.x+S:h.x,j=h.dir==="x"?h.y:h.y+S;D=[W+h.w/2*st,j+h.w/2*st]}else h.kind==="pocket"?(T=[`POCKET ${Le(h.depth)} DEEP`,`R${Le(h.r)} INSIDE CORNERS`],D=[h.x1-h.r+h.r*st,h.y1-h.r+h.r*st]):h.kind==="yhole"?(T=[`${b}${qn}${Le(h.d)} THRU`],D=[I.x+h.d/2*st,I.z+h.d/2*st]):h.kind==="xhole"&&(T=[`${b}${qn}${Le(h.d)} THRU`],D=[I.y+h.d/2*st,I.z+h.d/2*st]);const M=x.map(S=>{if(S.kind==="zhole"){const W=(S.cb?S.cb.d:S.d)/2;return[S.x+W*st,S.y+W*st]}return S.kind==="yhole"?[S.x+S.d/2*st,S.z+S.d/2*st]:S.kind==="xhole"?[S.y+S.d/2*st,S.z+S.d/2*st]:null}).filter(Boolean);n[_.view].callouts.push({target:D,alts:M.length>1?M:null,lines:T,tags:y})}const p=new Map;(e.fillets||[]).forEach((_,x)=>{const h=_.r;p.has(h)||p.set(h,[]),p.get(h).push(x)});for(const[_,x]of p){const h=e.fillets[x[x.length-1]],g=h.xb+h.dir*h.r,b=h.z+h.r,y=[g-h.dir*h.r*Math.SQRT1_2,b-h.r*Math.SQRT1_2];n.front.callouts.push({target:y,lines:[`${x.length>1?x.length+"× ":""}R${Le(_)} FILLET`],tags:x.map(T=>`fillet${T}`)})}}else{const s=e.t+(e.hubR>0?e.hubH:0);r("front","bottom",{v:2*e.R,sym:!0,tags:["R"],from:0,overall:!0,dia:!0}),e.hubR>0&&r("front","top",{v:2*e.hubR,sym:!0,tags:["hubR"],from:s,dia:!0}),r("front","left",{v:e.t,tags:["t"],from:-e.R}),e.hubR>0&&r("front","left",{v:s,tags:["hubH"],from:-e.hubR,overall:!0});const a=Math.SQRT1_2;n.top.callouts.push({target:[-(e.boreD/2)*a,e.boreD/2*a],lines:[`${qn}${Le(e.boreD)} THRU`],tags:["boreD"],leftward:!0});for(const o of i.features){const l=o.bc/2,c=(o.cb?o.cb.d:o.d)/2,d=[`${o.n}× ${qn}${Le(o.d)} THRU`];o.cb&&d.push(`C'BORE ${qn}${Le(o.cb.d)} × ${Le(o.cb.depth)} DEEP`),d.push(`EQ. SPACED ON ${qn}${Le(o.bc)} B.C.`),n.top.callouts.push({target:[l+c*a,c*a],lines:d,tags:["bolts.n","bolts.d","bolts.bc",...o.cb?["bolts.cb"]:[]]})}if(e.chamfer>0){const o=e.chamfer;n.front.callouts.push({target:[e.R-o/2,e.t-o/2],lines:[`${Le(o)} × 45° CHAMFER`],tags:["chamfer"]})}}return n}function _a(i,t){return i.length*t*.56}function Lo(i){const t={top:3,bottom:3,left:3,right:3,calloutW:0};for(const e of["top","bottom","left","right"]){const n=(i.stacks[e]||[]).length;n&&(t[e]=ks+(n-1)*Os+4.5)}if(i.callouts.length){const e=Math.max(...i.callouts.flatMap(n=>n.lines.map(r=>_a(r,fr))));t.calloutW=e+9,t.right+=t.calloutW}return t}function Xr(i,t={}){const e=t.theme||"light",n=i.body.type==="prism"?Ld(i):Id(i),r=Ud(i),s=Lo(r.top),a=Lo(r.front),o=Lo(r.right),l=n.top.u1-n.top.u0,c=n.right.u1-n.right.u0,d=n.front.v1-n.front.v0,f=n.top.v1-n.top.v0,u=62,p=6,_=Math.max(s.left,a.left),x=Math.max(s.right,a.right),h=Ji-2*dn-4,g=Nr-2*dn-Ol-4;let b=Po[Po.length-1],y=!1;for(const z of Po){const Et=_+l*z+x,bt=Math.max(o.left+c*z+o.right,u),ct=s.top+f*z+Math.max(s.bottom,0),Lt=Math.max(a.top,o.top)+d*z+Math.max(a.bottom,o.bottom);if(Et+p+bt<=h&&ct+p+Lt<=g){b=z,y=!0;break}}const T=dn+2,D=dn+2,P=_+l*b+x,C=s.top+f*b+s.bottom,I=Math.max(a.top,o.top),st=h-(P+p+Math.max(o.left+c*b+o.right,u)),M=g-(C+p+I+d*b+Math.max(a.bottom,o.bottom)),S=Math.max(0,st/3),W=Math.max(0,M/3),j=T+S+_-n.top.u0*b,rt=D+W+s.top,pt={...n.top,ox:j,oy:rt+n.top.v1*b},J=rt+f*b+s.bottom+p+W+I,vt={...n.front,ox:j,oy:J+d*b},et=T+S+P+p+S,Dt={...n.right,ox:et+o.left-n.right.u0*b,oy:vt.oy},Mt=(z,Et,bt)=>[z.ox+Et*b,z.oy-bt*b],_t=[],se=new Set,ce=z=>{for(const ct of z.prims)if(ct.t==="line"){const[Lt,K]=Mt(z,...ct.a),[gt,At]=Mt(z,...ct.b);_t.push(`<line class="${ct.st}" x1="${H(Lt)}" y1="${H(K)}" x2="${H(gt)}" y2="${H(At)}"/>`)}else if(ct.t==="cline"){const[Lt,K]=Mt(z,...ct.a),[gt,At]=Mt(z,...ct.b),kt=Math.hypot(gt-Lt,At-K)||1,Tt=(gt-Lt)/kt*2,Ft=(At-K)/kt*2;_t.push(`<line class="ctr" x1="${H(Lt-Tt)}" y1="${H(K-Ft)}" x2="${H(gt+Tt)}" y2="${H(At+Ft)}"/>`)}else if(ct.t==="circle"){const[Lt,K]=Mt(z,...ct.c);_t.push(`<circle class="${ct.st}" cx="${H(Lt)}" cy="${H(K)}" r="${H(ct.r*b)}"/>`)}else if(ct.t==="poly"){const Lt=ct.pts.map(K=>Mt(z,...K).map(H).join(",")).join(" ");_t.push(`<${ct.closed?"polygon":"polyline"} class="${ct.st}" points="${Lt}"/>`)}else if(ct.t==="cmark"){const[Lt,K]=Mt(z,...ct.c),gt=ct.r*b+1.6,At=Math.min(1.2,ct.r*b*.5);_t.push(`<path class="ctr" d="M${H(Lt-gt)} ${H(K)}H${H(Lt-At*1.4)}M${H(Lt-At)} ${H(K)}H${H(Lt+At)}M${H(Lt+At*1.4)} ${H(K)}H${H(Lt+gt)}M${H(Lt)} ${H(K-gt)}V${H(K-At*1.4)}M${H(Lt)} ${H(K-At)}V${H(K+At)}M${H(Lt)} ${H(K+At*1.4)}V${H(K+gt)}"/>`)}const Et=Mt(z,(z.u0+z.u1)/2,z.v0),bt=z===pt?s.bottom:Math.max(a.bottom,o.bottom);_t.push(`<text class="vlabel" x="${H(Et[0])}" y="${H(Et[1]+bt+3.4)}" text-anchor="middle">${z.name}</text>`)};ce(pt),ce(vt),ce(Dt);const it=(z,Et,bt,ct)=>{const Lt=Math.hypot(bt,ct)||1,K=bt/Lt,gt=ct/Lt,At=z-K*ls,kt=Et-gt*ls,Tt=.75;return`<path class="arr" d="M${H(z)} ${H(Et)}L${H(At-gt*Tt)} ${H(kt+K*Tt)}L${H(At+gt*Tt)} ${H(kt-K*Tt)}Z"/>`},dt=(z,Et,bt,ct=0,Lt="middle")=>`<text class="dim" x="${H(z)}" y="${H(Et)}" text-anchor="${Lt}"${ct?` transform="rotate(${ct} ${H(z)} ${H(Et)})"`:""}>${ui(bt)}</text>`,It=(z,Et,bt)=>{for(const ct of["top","bottom","left","right"]){const Lt=(Et.stacks[ct]||[]).slice();Lt.length&&(Lt.sort((K,gt)=>(K.overall?1:0)-(gt.overall?1:0)||K.v-gt.v),Lt.forEach((K,gt)=>{K.tags.forEach(kt=>se.add(kt));const At=(K.dia?qn:"")+Le(K.v);if(ct==="top"||ct==="bottom"){const kt=K.sym?-K.v/2:0,Tt=K.sym?K.v/2:K.v,[Ft]=Mt(z,kt,0),[wt]=Mt(z,Tt,0),le=ct==="top"?Mt(z,0,z.v1)[1]:Mt(z,0,z.v0)[1],N=ct==="top"?-1:1,ht=le+N*(ks+gt*Os),Z=Mt(z,0,K.from)[1]+N*1.2,O=K.sym?Z:le+N*1.2;_t.push(`<line class="ext" x1="${H(Ft)}" y1="${H(K.sym?Z:O)}" x2="${H(Ft)}" y2="${H(ht+N*1.5)}"/>`),_t.push(`<line class="ext" x1="${H(wt)}" y1="${H(Z)}" x2="${H(wt)}" y2="${H(ht+N*1.5)}"/>`);const ot=wt-Ft,tt=_a(At,ga);ot>=tt+2*ls+1.5?(_t.push(`<line class="dimln" x1="${H(Ft)}" y1="${H(ht)}" x2="${H(wt)}" y2="${H(ht)}"/>`),_t.push(it(Ft,ht,-1,0),it(wt,ht,1,0)),_t.push(dt((Ft+wt)/2,ht-.9,At))):(_t.push(`<line class="dimln" x1="${H(Ft-5)}" y1="${H(ht)}" x2="${H(wt+5)}" y2="${H(ht)}"/>`),_t.push(it(Ft,ht,1,0),it(wt,ht,-1,0)),_t.push(dt(Ft-5.5,ht+1.05,At,0,"end")))}else{const kt=K.sym?-K.v/2:0,Tt=K.sym?K.v/2:K.v,Ft=Mt(z,0,kt)[1],wt=Mt(z,0,Tt)[1],le=ct==="left"?Mt(z,z.u0,0)[0]:Mt(z,z.u1,0)[0],N=ct==="left"?-1:1,ht=le+N*(ks+gt*Os),Z=Mt(z,K.from,0)[0]+N*1.2,O=le+N*1.2;_t.push(`<line class="ext" x1="${H(O)}" y1="${H(Ft)}" x2="${H(ht+N*1.5)}" y2="${H(Ft)}"/>`),_t.push(`<line class="ext" x1="${H(Z)}" y1="${H(wt)}" x2="${H(ht+N*1.5)}" y2="${H(wt)}"/>`);const ot=Ft-wt,tt=_a(At,ga);ot>=tt+2*ls+1.5?(_t.push(`<line class="dimln" x1="${H(ht)}" y1="${H(Ft)}" x2="${H(ht)}" y2="${H(wt)}"/>`),_t.push(it(ht,Ft,0,1),it(ht,wt,0,-1)),_t.push(dt(ht-.9,(Ft+wt)/2,At,-90))):gt===Lt.length-1?(_t.push(`<line class="dimln" x1="${H(ht)}" y1="${H(Ft+5)}" x2="${H(ht)}" y2="${H(wt-5)}"/>`),_t.push(it(ht,Ft,0,-1),it(ht,wt,0,1)),_t.push(dt(ht+N*1.2,(Ft+wt)/2+1.05,At,0,N<0?"end":"start"))):(_t.push(`<line class="dimln" x1="${H(ht)}" y1="${H(Ft+5)}" x2="${H(ht)}" y2="${H(wt-5)}"/>`),_t.push(it(ht,Ft,0,-1),it(ht,wt,0,1)),_t.push(`<line class="dimln" x1="${H(ht)}" y1="${H(wt-5)}" x2="${H(ht)}" y2="${H(wt-5.5-tt)}"/>`),_t.push(dt(ht-.9,wt-5.5,At,-90,"start")))}}))}};It(pt,r.top),It(vt,r.front),It(Dt,r.right);const Ut=(z,Et,bt,ct)=>{if(!Et.callouts.length)return;const Lt=(Et.stacks.right||[]).length,K=Mt(z,z.u1,0)[0]+(Lt?ks+(Lt-1)*Os+4.5:3)+6,gt=Et.callouts.map(O=>{const ot=Mt(z,...O.target);return{...O,tp:ot,h:O.lines.length*(fr+.9)+.6,y:ot[1]-3}});gt.sort((O,ot)=>O.y-ot.y);const At=ct[0],kt=ct[1],Tt=[];for(const O of z.prims)if(O.obst){if(O.t==="circle"){const[ot,tt]=Mt(z,...O.c);Tt.push({k:"c",cx:ot,cy:tt,r:O.r*b})}else if(O.t==="poly"){const ot=O.pts.map(Kt=>Mt(z,...Kt)),tt=ot.map(Kt=>Kt[0]),Wt=ot.map(Kt=>Kt[1]);Tt.push({k:"r",x0:Math.min(...tt),x1:Math.max(...tt),y0:Math.min(...Wt),y1:Math.max(...Wt)})}}const Ft=(O,ot)=>O.k==="c"?Math.abs(Math.hypot(ot[0]-O.cx,ot[1]-O.cy)-O.r)<.6||Math.hypot(ot[0]-O.cx,ot[1]-O.cy)<O.r:ot[0]>=O.x0-.6&&ot[0]<=O.x1+.6&&ot[1]>=O.y0-.6&&ot[1]<=O.y1+.6,wt=O=>[K-2.5,O+fr*.75-1],le=(O,ot)=>Tt.some(tt=>!Ft(tt,O)&&(tt.k==="c"?Nd(O,ot,[tt.cx,tt.cy])<tt.r+.8:Fd(O,ot,tt.x0-.8,tt.y0-.8,tt.x1+.8,tt.y1+.8))),N=[],ht=(O,ot)=>O>=At-1e-9&&O+ot<=kt+1e-9&&N.every(tt=>O+ot+1.2<=tt.y||O>=tt.y+tt.h+1.2),Z=(O,ot)=>N.some(tt=>Od(O,ot,tt.tp,wt(tt.y)));for(const O of gt){let ot=null;const tt=(O.alts||[O.target]).map(Wt=>Mt(z,...Wt));for(let Wt=0;Wt<=400&&ot==null;Wt++)for(const Kt of tt){const he=Kt[1]-3;for(const oe of Wt?[1,-1]:[1]){const De=he+oe*Wt*.5;if(!ht(De,O.h))continue;const Ye=wt(De);if(!(le(Kt,Ye)||Z(Kt,Ye))){ot=De,O.tp=Kt;break}}if(ot!=null)break}if(ot==null)for(let Wt=0;Wt<=400&&ot==null;Wt++)for(const Kt of[1,-1]){const he=O.y+Kt*Wt*.5;if(ht(he,O.h)){ot=he;break}}O.y=ot??O.y,N.push(O)}for(const O of gt){O.tags.forEach(he=>se.add(he));const ot=O.y+fr*.75,tt=K-2.5;_t.push(`<polyline class="leader" points="${H(O.tp[0])},${H(O.tp[1])} ${H(tt)},${H(ot-1)} ${H(K-.8)},${H(ot-1)}"/>`);const Wt=O.tp[0]-tt,Kt=O.tp[1]-(ot-1);_t.push(it(O.tp[0],O.tp[1],Wt,Kt)),O.lines.forEach((he,oe)=>{_t.push(`<text class="call" x="${H(K)}" y="${H(ot+oe*(fr+.9))}">${ui(he)}</text>`)})}};Ut(pt,r.top,s,[D+1,pt.oy+s.bottom]),Ut(vt,r.front,a,[J-I+1,vt.oy+a.bottom]),Ut(Dt,r.right,o,[J-I+1,Dt.oy+o.bottom]);const qt=et,zt=D+2,ee=Ji-dn-3-qt,ae=J-I-zt-7;t.isoHref?_t.push(`<image href="${t.isoHref}" x="${H(qt)}" y="${H(zt)}" width="${H(ee)}" height="${H(ae)}" preserveAspectRatio="xMidYMid meet"/>`):(_t.push(`<rect class="isobox" x="${H(qt)}" y="${H(zt)}" width="${H(ee)}" height="${H(ae)}" rx="2"/>`),_t.push(`<text class="vlabel" x="${H(qt+ee/2)}" y="${H(zt+ae/2)}" text-anchor="middle">3D PREVIEW</text>`)),_t.push(`<text class="vlabel" x="${H(qt+ee/2)}" y="${H(zt+ae+3.6)}" text-anchor="middle">ISOMETRIC (REFERENCE ONLY)</text>`);const Qt=150,U=Ol-2,xe=Ji-dn-Qt,Gt=Nr-dn-U,re=t.material||{name:"6061 ALUMINUM",density:2.7},Ot=[];Ot.push(`<rect class="frame" x="${dn}" y="${dn}" width="${Ji-2*dn}" height="${Nr-2*dn}"/>`),Ot.push(`<rect class="frame" x="${xe}" y="${Gt}" width="${Qt}" height="${U}"/>`);const fe=xe+52,$t=xe+104;Ot.push(`<line class="frame thin" x1="${fe}" y1="${Gt}" x2="${fe}" y2="${Gt+U}"/>`),Ot.push(`<line class="frame thin" x1="${$t}" y1="${Gt}" x2="${$t}" y2="${Gt+U}"/>`),Ot.push(`<line class="frame thin" x1="${xe}" y1="${Gt+U/2}" x2="${xe+Qt}" y2="${Gt+U/2}"/>`);const R=(z,Et,bt,ct,Lt)=>`<text class="tbl" x="${z+2}" y="${Et+3.6}">${bt}</text><text class="${Lt?"tbv big":"tbv"}" x="${z+2}" y="${Et+9.6}">${ui(ct)}</text>`,E=U/2;Ot.push(R(xe,Gt,"PRACTICE DRILL","UNDO DILIGENCE",!0)),Ot.push(R(fe,Gt,"DRILL",`${i.id} · ${i.difficulty.toUpperCase()}`,!0)),Ot.push(R($t,Gt,"PART",i.title.toUpperCase())),Ot.push(R(xe,Gt+E,"MATERIAL",`${re.name} · ${re.density} g/cm³`)),Ot.push(R(fe,Gt+E,"UNITS · SCALE",`MM · ${Rd(b)}${y?"":" (REDUCED)"}`)),Ot.push(`<text class="tbl" x="${$t+2}" y="${Gt+E+3.6}">PROJECTION</text>`),Ot.push(ru($t+30,Gt+E+7.6)),Ot.push(`<text class="tbv" x="${$t+2}" y="${Gt+E+9.6}">3RD ANGLE</text>`),["NOTES","1. ALL DIMENSIONS IN MILLIMETRES. DO NOT SCALE THE DRAWING.","2. HOLES ARE THRU UNLESS NOTED. BLIND HOLES, SLOTS AND POCKETS HAVE FLAT BOTTOMS.","3. LOCATIONS ARE MEASURED FROM THE LEFT, FRONT AND BOTTOM FACES"+(i.body.type==="flange"?" (FLANGE: FROM ITS AXIS).":"."),`4. TASK: MODEL THE PART, APPLY ${re.name} (${re.density} g/cm³) AND REPORT ITS MASS IN GRAMS.`].forEach((z,Et)=>Ot.push(`<text class="${Et?"note":"note b"}" x="${dn+3}" y="${Gt+3.6+Et*4.6}">${ui(z)}</text>`)),t.answer&&Ot.push(`<text class="note b" x="${xe}" y="${Gt-2}">ANSWER: ${ui(t.answer)}</text>`);const at=su(e);return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ji} ${Nr}" width="${t.width||"100%"}" ${t.height?`height="${t.height}"`:""} class="sheet" font-family="Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"><style>${at}</style><rect class="paper" x="0" y="0" width="${Ji}" height="${Nr}"/>${Ot.join("")}${_t.join("")}</svg>`,covered:se,scale:b,fitted:y}}function Nd(i,t,e){const n=t[0]-i[0],r=t[1]-i[1],s=n*n+r*r||1e-9,a=Math.max(0,Math.min(1,((e[0]-i[0])*n+(e[1]-i[1])*r)/s));return Math.hypot(i[0]+a*n-e[0],i[1]+a*r-e[1])}function Fd(i,t,e,n,r,s){let a=0,o=1;const l=t[0]-i[0],c=t[1]-i[1];for(const[d,f]of[[-l,i[0]-e],[l,r-i[0]],[-c,i[1]-n],[c,s-i[1]]]){if(Math.abs(d)<1e-12){if(f<0)return!1;continue}const u=f/d;if(d<0){if(u>o)return!1;u>a&&(a=u)}else{if(u<a)return!1;u<o&&(o=u)}}return!0}function Od(i,t,e,n){const r=(c,d,f)=>(d[0]-c[0])*(f[1]-c[1])-(d[1]-c[1])*(f[0]-c[0]),s=r(e,n,i),a=r(e,n,t),o=r(i,t,e),l=r(i,t,n);return s*a<0&&o*l<0}function ru(i,t){return`<g class="sym">
    <path d="M${i} ${t-2.2*.9}L${i+7*.9} ${t-3.6*.9}L${i+7*.9} ${t+3.6*.9}L${i} ${t+2.2*.9}Z"/>
    <circle cx="${i+13*.9}" cy="${t}" r="${3.6*.9}"/><circle cx="${i+13*.9}" cy="${t}" r="${2.2*.9}"/></g>`}function su(i){const t=i==="dark"?{paper:"#141920",ink:"#e8ecf1",hid:"#9aa6b2",ctr:"#6f8fb7",dim:"#f2b65a",frame:"#56616e",note:"#c3cbd4",thin:"#7d8894"}:i==="print"?{paper:"#ffffff",ink:"#000000",hid:"#000000",ctr:"#000000",dim:"#000000",frame:"#000000",note:"#000000",thin:"#555555"}:{paper:"#ffffff",ink:"#111418",hid:"#3a434d",ctr:"#56708f",dim:"#0a58c2",frame:"#2b3138",note:"#2b3138",thin:"#8a939c"};return`
.paper{fill:${t.paper}}
.vis{fill:none;stroke:${t.ink};stroke-width:.45;stroke-linejoin:round}
.hid{fill:none;stroke:${t.hid};stroke-width:.28;stroke-dasharray:1.6 .8}
.ctr,.ctr path{fill:none;stroke:${t.ctr};stroke-width:.18;stroke-dasharray:5 1 1 1}
path.ctr{stroke-dasharray:none}
.thin{fill:none;stroke:${t.thin};stroke-width:.18}
.ext,.dimln,.leader{fill:none;stroke:${t.dim};stroke-width:.18}
.arr{fill:${t.dim};stroke:none}
.dim{fill:${t.dim};font-size:${ga}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
.call{fill:${t.dim};font-size:${fr}px;paint-order:stroke;stroke:${t.paper};stroke-width:.9px;stroke-linejoin:round}
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
`}function H(i){return(Math.round(i*100)/100).toString()}function ui(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Zr=[{id:"al6061",name:"6061 ALUMINUM",label:"Aluminum 6061",density:2.7},{id:"steel",name:"STEEL (MILD)",label:"Steel (mild)",density:7.85},{id:"ss304",name:"304 STAINLESS",label:"Stainless 304",density:8},{id:"brass",name:"BRASS C360",label:"Brass C360",density:8.5},{id:"abs",name:"ABS PLASTIC",label:"ABS plastic",density:1.04},{id:"pla",name:"PLA (100% INFILL)",label:"PLA, 100% infill",density:1.24}],co=.005;function li(i){return Zr.find(t=>t.id===i)||Zr[0]}function Qe(i,t,e){return Math.abs(i-t)<=Math.abs(t)*e}function kd(i,t,e){const n=jc(i),r=n.reduce((l,c)=>l+c.vol,0),s=Ys(r,e),a=Number(t);if(!isFinite(a)||a<=0)return{correct:!1,expected:s,errorPct:null,hint:"Enter the mass in grams as a positive number, e.g. 123.4"};const o=(a-s)/s*100;return Qe(a,s,co)?{correct:!0,expected:s,errorPct:o,hint:null}:{correct:!1,expected:s,errorPct:o,hint:Bd(i,n,r,a,e)}}function Bd(i,t,e,n,r){const a=f=>Ys(f,r);if(Qe(n,e,.004))return"That number matches the volume in mm³. Convert to mass: grams = mm³ ÷ 1000 × density.";if(Qe(n,e/1e3,.004))return"That matches the volume in cm³. Multiply by the density to get grams.";if(Qe(n,a(e)/1e3,.004))return"Looks like kilograms. The answer is in grams.";if(Qe(n,a(e)*1e3,.004))return"Off by exactly 1000×. Check your mm³ → cm³ conversion (1 cm³ = 1000 mm³).";if(Qe(n,a(e)/28.3495,.004))return"That looks like ounces. The answer is in grams.";if(Qe(n,a(e)/453.592,.004))return"That looks like pounds. The answer is in grams.";const o=[2.7,7.85,8,8.5,1.04,1.24,1];for(const f of o)if(Math.abs(f-r)/r>.03&&Qe(n,Ys(e,f),.004))return`Your geometry looks right, but that mass matches a density of ${f} g/cm³. This drill uses ${r} g/cm³.`;const l=new Map;for(const f of t){if(f.key==="body")continue;const u=f.featureIndex!=null?i.features[f.featureIndex]:null,p=u?`g${u.group??f.featureIndex}`:f.key+f.label;l.has(p)||l.set(p,{vol:0,label:f.label,n:0,f:u});const _=l.get(p);_.vol+=f.vol,_.n++}for(const f of l.values()){const u=f.label.charAt(0).toLowerCase()+f.label.slice(1),p=f.n>1?`${f.n}× ${u.replace(/\b(hole|slot|pocket)\b/,"$1s")}`:u;if(Qe(n,a(e-f.vol),.004))return f.vol<0?`Close: it looks like the ${p} ${f.n>1?"are":"is"} missing from your model.`:`Close: it looks like the ${p} ${f.n>1?"are":"is"} missing (it adds material).`;if(f.n>1){const _=f.vol/f.n;for(let x=1;x<f.n;x++)if(Qe(n,a(e-_*x),.004))return`Close: ${x===1?"one":x} of the ${p} ${x===1?"seems":"seem"} to be missing.`}if(Qe(n,a(e+f.vol),.004))return`Close: the ${p} seem to be counted twice, or cut twice as deep.`}for(const f of l.values())if(f.f&&(f.f.kind==="zhole"||f.f.kind==="yhole"||f.f.kind==="xhole"||f.f.kind==="bolts")){if(Qe(n,a(e+3*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the diameter was used as the radius.`;if(Qe(n,a(e-.75*f.vol),.004))return`Check the ${f.label.charAt(0).toLowerCase()+f.label.slice(1)}: it looks like the radius was used as the diameter.`}for(const f of l.values()){const u=f.f;if(u&&u.kind==="zhole"&&!u.thru){const p=f.vol*(u.top/u.depth-1);if(Qe(n,a(e+p),.004))return`The ${f.label.charAt(0).toLowerCase()+f.label.slice(1)} should stop at the depth shown, not go all the way through.`}if(u&&u.kind==="pocket"&&Qe(n,a(e+f.vol*(u.top/u.depth-1)),.004))return"The pocket should stop at its depth, not cut all the way through."}const c=(n-a(e))/a(e)*100,d=c>0?"heavy":"light";return Math.abs(c)<3?`Very close (${$r(Math.abs(c).toFixed(2))}% ${d}). Re-check small details: fillet and corner radii, chamfers, counterbore and pocket depths.`:Math.abs(c)<15?`${$r(Math.abs(c).toFixed(1))}% too ${d}. ${c>0?"Something is missing a cut, or a cut is too small/shallow.":"A cut is too big or deep, or a dimension is too small."} Compare each view against your model.`:`${$r(Math.abs(c).toFixed(0))}% too ${d}. Re-check the overall sizes (length, width, heights) first, then the features.`}const ou="cadDrills.v1";function va(){return{attempts:{},solved:{},events:[],waitlist:[],visitorId:Math.random().toString(36).slice(2,10),theme:null,material:"al6061"}}let Ii=null;function vi(){if(Ii)return Ii;try{Ii={...va(),...JSON.parse(localStorage.getItem(ou))||{}}}catch{Ii=va()}return Ii}function Vi(){try{localStorage.setItem(ou,JSON.stringify(Ii))}catch{}}function zd(){const i={theme:vi().theme};Ii={...va(),...i},Vi()}function qe(i,t={}){try{window.goatcounter?.count?.({path:i+(t.source?"/"+t.source:""),title:i,event:!0})}catch{}const e=vi();e.events.push({t:Date.now(),type:i,...t}),e.events.length>5e3&&e.events.splice(0,e.events.length-5e3),Vi()}function au(i,t,e,n,r){const s=vi();(s.attempts[i]=s.attempts[i]||[]).push({t:Date.now(),value:t,density:e,correct:n}),n&&!s.solved[i]?s.solved[i]={t:Date.now(),timeMs:r??null,attempts:s.attempts[i].length}:n&&r!=null&&(s.solved[i].timeMs==null||r<s.solved[i].timeMs)&&(s.solved[i].timeMs=r),Vi()}function Jr(i){const t=vi();return t.solved[i]?"solved":t.attempts[i]?.length?"tried":"new"}function lu(){const i=vi(),t=new Set(Object.values(i.solved).map(r=>new Date(r.t).toDateString()));let e=0;const n=new Date;for(t.has(n.toDateString())||n.setDate(n.getDate()-1);t.has(n.toDateString());)e++,n.setDate(n.getDate()-1);return e}function Hd(i,t){const e=vi();e.waitlist.some(n=>n.email===i)||e.waitlist.push({email:i,t:Date.now(),source:t}),Vi()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="169",gr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,kl=1,Gd=2,cu=1,$d=2,Yn=3,gi=0,an=1,jn=2,fi=0,_r=1,Bl=2,zl=3,Hl=4,Wd=5,Ui=100,Xd=101,qd=102,Yd=103,jd=104,Kd=200,Zd=201,Jd=202,Qd=203,xa=204,ya=205,tf=206,ef=207,nf=208,rf=209,sf=210,of=211,af=212,lf=213,cf=214,Ma=0,ba=1,Sa=2,Mr=3,Ea=4,Ta=5,Aa=6,wa=7,uu=0,uf=1,hf=2,pi=0,df=1,ff=2,pf=3,mf=4,gf=5,_f=6,vf=7,hu=300,br=301,Sr=302,Ra=303,Ca=304,uo=306,Pa=1e3,Fi=1001,La=1002,mn=1003,xf=1004,cs=1005,An=1006,Do=1007,Oi=1008,Jn=1009,du=1010,fu=1011,Qr=1012,ul=1013,ki=1014,Kn=1015,ts=1016,hl=1017,dl=1018,Er=1020,pu=35902,mu=1021,gu=1022,wn=1023,_u=1024,vu=1025,vr=1026,Tr=1027,xu=1028,fl=1029,yu=1030,pl=1031,ml=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,Da=35840,Ia=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,ka=37496,Ba=37808,za=37809,Ha=37810,Va=37811,Ga=37812,$a=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,ja=37818,Ka=37819,Za=37820,Ja=37821,$s=36492,Qa=36494,tl=36495,Mu=36283,el=36284,nl=36285,il=36286,yf=3200,Mf=3201,bu=0,bf=1,hi="",Ln="srgb",xi="srgb-linear",gl="display-p3",ho="display-p3-linear",Js="linear",be="srgb",Qs="rec709",to="p3",Qi=7680,Vl=519,Sf=512,Ef=513,Tf=514,Su=515,Af=516,wf=517,Rf=518,Cf=519,Gl=35044,$l="300 es",Zn=2e3,eo=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,rl=180/Math.PI;function es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Pf(i,t){return(i%t+t)%t}function Io(i,t,e){return(1-e)*i+e*t}function Fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lf={DEG2RAD:qr};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,r,s,a,o,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],p=n[5],_=n[8],x=r[0],h=r[3],g=r[6],b=r[1],y=r[4],T=r[7],D=r[2],P=r[5],C=r[8];return s[0]=a*x+o*b+l*D,s[3]=a*h+o*y+l*P,s[6]=a*g+o*T+l*C,s[1]=c*x+d*b+f*D,s[4]=c*h+d*y+f*P,s[7]=c*g+d*T+f*C,s[2]=u*x+p*b+_*D,s[5]=u*h+p*y+_*P,s[8]=u*g+p*T+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=d*a-o*c,u=o*l-d*s,p=c*s-a*l,_=e*f+n*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*c-d*n)*x,t[2]=(o*n-r*a)*x,t[3]=u*x,t[4]=(d*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new ie;function Eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){const i=no("canvas");return i.style.display="block",i}const Wl={};function Ws(i){i in Wl||(Wl[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Uf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xl=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[xi]:{transfer:Js,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:be,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ho]:{transfer:Js,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Xl)},[gl]:{transfer:be,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Xl).convertLinearToSRGB()}},Ff=new Set([xi,ho]),_e={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Or[t].toReference,r=Or[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Or[i].primaries},getTransfer:function(i){return i===hi?Js:Or[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Or[t].luminanceCoefficients)}};function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function No(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class Of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=no("canvas")),tr.width=t.width,tr.height=t.height;const n=tr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xr(e[n]/255)*255):e[n]=xr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kf=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fo(r[a].image)):s.push(Fo(r[a]))}else s=Fo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bf=0;class ln extends Gi{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=Fi,r=Fi,s=An,a=Oi,o=wn,l=Jn,c=ln.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=es(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=hu;ln.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],_=l[9],x=l[2],h=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(_+h)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,T=(p+1)/2,D=(g+1)/2,P=(d+u)/4,C=(f+x)/4,I=(_+h)/4;return y>T&&y>D?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=C/n):T>D?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=P/r,s=I/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=I/s),this.set(n,r,s,e),this}let b=Math.sqrt((h-_)*(h-_)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(h-_)/b,this.y=(f-x)/b,this.z=(u-d)/b,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Au extends ln{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hf extends ln{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const u=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(f!==x||l!==u||c!==p||d!==_){let h=1-o;const g=l*u+c*p+d*_+f*x,b=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const D=Math.sqrt(y),P=Math.atan2(D,g*b);h=Math.sin(h*P)/D,o=Math.sin(o*P)/D}const T=o*b;if(l=l*h+u*T,c=c*h+p*T,d=d*h+_*T,f=f*h+x*T,h===1-o){const D=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=D,c*=D,d*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+d*f+l*p-c*u,t[e+1]=l*_+d*u+c*f-o*p,t[e+2]=c*_+d*p+o*u-l*f,t[e+3]=d*_-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),f=o(s/2),u=l(n/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f-u*p*_;break;case"YXZ":this._x=u*d*f+c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f+u*p*_;break;case"ZXY":this._x=u*d*f-c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f-u*p*_;break;case"ZYX":this._x=u*d*f-c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f+u*p*_;break;case"YZX":this._x=u*d*f+c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f-u*p*_;break;case"XZY":this._x=u*d*f-c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],f=e[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*d,this.y=n+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new $,Yl=new zi;class ns{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),hs.subVectors(this.max,kr),er.subVectors(t.a,kr),nr.subVectors(t.b,kr),ir.subVectors(t.c,kr),ni.subVectors(nr,er),ii.subVectors(ir,nr),Si.subVectors(er,ir);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Si.z,Si.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Si.z,0,-Si.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Si.y,Si.x,0];return!ko(e,er,nr,ir,hs)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,er,nr,ir,hs))?!1:(ds.crossVectors(ni,ii),e=[ds.x,ds.y,ds.z],ko(e,er,nr,ir,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new $,new $,new $,new $,new $,new $,new $,new $],Mn=new $,us=new ns,er=new $,nr=new $,ir=new $,ni=new $,ii=new $,Si=new $,kr=new $,hs=new $,ds=new $,Ei=new $;function ko(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ei.fromArray(i,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),d=n.dot(Ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Vf=new ns,Br=new $,Bo=new $;class fo{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Br,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Bo)),this.expandByPoint(Br.copy(t.center).sub(Bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new $,zo=new $,fs=new $,ri=new $,Ho=new $,ps=new $,Vo=new $;class _l{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zo.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(zo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fs),o=ri.dot(this.direction),l=-ri.dot(fs),c=ri.lengthSq(),d=Math.abs(1-a*a);let f,u,p,_;if(d>0)if(f=a*l-o,u=a*o-l,_=s*d,f>=0)if(u>=-_)if(u<=_){const x=1/d;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zo).addScaledVector(fs,u),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,r,s){Ho.subVectors(e,t),ps.subVectors(n,t),Vo.crossVectors(Ho,ps);let a=this.direction.dot(Vo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);const l=o*this.direction.dot(ps.crossVectors(ri,ps));if(l<0)return null;const c=o*this.direction.dot(Ho.cross(ri));if(c<0||l+c>a)return null;const d=-o*ri.dot(Vo);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,s,a,o,l,c,d,f,u,p,_,x,h){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,f,u,p,_,x,h)}set(t,e,n,r,s,a,o,l,c,d,f,u,p,_,x,h){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=f,g[14]=u,g[3]=p,g[7]=_,g[11]=x,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/rr.setFromMatrixColumn(t,0).length(),s=1/rr.setFromMatrixColumn(t,1).length(),a=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*d,p=a*f,_=o*d,x=o*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,p=l*f,_=c*d,x=c*f;e[0]=u+x*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-_,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,p=l*f,_=c*d,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*d,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,p=a*f,_=o*d,x=o*f;e[0]=l*d,e[4]=_*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=x-u*f,e[8]=_*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*f+_,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=u*f+x,e[5]=a*d,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*d,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,$f)}lookAt(t,e,n){const r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),si.crossVectors(n,un),si.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),si.crossVectors(n,un)),si.normalize(),ms.crossVectors(un,si),r[0]=si.x,r[4]=ms.x,r[8]=un.x,r[1]=si.y,r[5]=ms.y,r[9]=un.y,r[2]=si.z,r[6]=ms.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],p=n[13],_=n[2],x=n[6],h=n[10],g=n[14],b=n[3],y=n[7],T=n[11],D=n[15],P=r[0],C=r[4],I=r[8],st=r[12],M=r[1],S=r[5],W=r[9],j=r[13],rt=r[2],pt=r[6],J=r[10],vt=r[14],et=r[3],Dt=r[7],Mt=r[11],_t=r[15];return s[0]=a*P+o*M+l*rt+c*et,s[4]=a*C+o*S+l*pt+c*Dt,s[8]=a*I+o*W+l*J+c*Mt,s[12]=a*st+o*j+l*vt+c*_t,s[1]=d*P+f*M+u*rt+p*et,s[5]=d*C+f*S+u*pt+p*Dt,s[9]=d*I+f*W+u*J+p*Mt,s[13]=d*st+f*j+u*vt+p*_t,s[2]=_*P+x*M+h*rt+g*et,s[6]=_*C+x*S+h*pt+g*Dt,s[10]=_*I+x*W+h*J+g*Mt,s[14]=_*st+x*j+h*vt+g*_t,s[3]=b*P+y*M+T*rt+D*et,s[7]=b*C+y*S+T*pt+D*Dt,s[11]=b*I+y*W+T*J+D*Mt,s[15]=b*st+y*j+T*vt+D*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],f=t[6],u=t[10],p=t[14],_=t[3],x=t[7],h=t[11],g=t[15];return _*(+s*l*f-r*c*f-s*o*u+n*c*u+r*o*p-n*l*p)+x*(+e*l*p-e*c*u+s*a*u-r*a*p+r*c*d-s*l*d)+h*(+e*c*f-e*o*p-s*a*f+n*a*p+s*o*d-n*c*d)+g*(-r*o*d-e*l*f+e*o*u+r*a*f-n*a*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=t[9],u=t[10],p=t[11],_=t[12],x=t[13],h=t[14],g=t[15],b=f*h*c-x*u*c+x*l*p-o*h*p-f*l*g+o*u*g,y=_*u*c-d*h*c-_*l*p+a*h*p+d*l*g-a*u*g,T=d*x*c-_*f*c+_*o*p-a*x*p-d*o*g+a*f*g,D=_*f*l-d*x*l-_*o*u+a*x*u+d*o*h-a*f*h,P=e*b+n*y+r*T+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=b*C,t[1]=(x*u*s-f*h*s-x*r*p+n*h*p+f*r*g-n*u*g)*C,t[2]=(o*h*s-x*l*s+x*r*c-n*h*c-o*r*g+n*l*g)*C,t[3]=(f*l*s-o*u*s-f*r*c+n*u*c+o*r*p-n*l*p)*C,t[4]=y*C,t[5]=(d*h*s-_*u*s+_*r*p-e*h*p-d*r*g+e*u*g)*C,t[6]=(_*l*s-a*h*s-_*r*c+e*h*c+a*r*g-e*l*g)*C,t[7]=(a*u*s-d*l*s+d*r*c-e*u*c-a*r*p+e*l*p)*C,t[8]=T*C,t[9]=(_*f*s-d*x*s-_*n*p+e*x*p+d*n*g-e*f*g)*C,t[10]=(a*x*s-_*o*s+_*n*c-e*x*c-a*n*g+e*o*g)*C,t[11]=(d*o*s-a*f*s-d*n*c+e*f*c+a*n*p-e*o*p)*C,t[12]=D*C,t[13]=(d*x*r-_*f*r+_*n*u-e*x*u-d*n*h+e*f*h)*C,t[14]=(_*o*r-a*x*r-_*n*l+e*x*l+a*n*h-e*o*h)*C,t[15]=(a*f*r-d*o*r+d*n*l-e*f*l-a*n*u+e*o*u)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,f=o+o,u=s*c,p=s*d,_=s*f,x=a*d,h=a*f,g=o*f,b=l*c,y=l*d,T=l*f,D=n.x,P=n.y,C=n.z;return r[0]=(1-(x+g))*D,r[1]=(p+T)*D,r[2]=(_-y)*D,r[3]=0,r[4]=(p-T)*P,r[5]=(1-(u+g))*P,r[6]=(h+b)*P,r[7]=0,r[8]=(_+y)*C,r[9]=(h-b)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const c=1/s,d=1/a,f=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Zn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),u=(n+r)/(n-r);let p,_;if(o===Zn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===eo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Zn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(a-s),u=(e+t)*c,p=(n+r)*d;let _,x;if(o===Zn)_=(a+s)*f,x=-2*f;else if(o===eo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rr=new $,bn=new Ae,Gf=new $(0,0,0),$f=new $(1,1,1),si=new $,ms=new $,un=new $,jl=new Ae,Kl=new zi;class On{constructor(t=0,e=0,n=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wf=0;const Zl=new $,sr=new zi,$n=new Ae,gs=new $,zr=new $,Xf=new $,qf=new zi,Jl=new $(1,0,0),Ql=new $(0,1,0),tc=new $(0,0,1),ec={type:"added"},Yf={type:"removed"},or={type:"childadded",child:null},Go={type:"childremoved",child:null};class Xe extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new $,e=new On,n=new zi,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ie}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(Jl,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(tc,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jl,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(zr,gs,this.up):$n.lookAt(gs,zr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),sr.setFromRotationMatrix($n),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ec),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ec),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Xe.DEFAULT_UP=new $(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new $,Wn=new $,$o=new $,Xn=new $,ar=new $,lr=new $,nc=new $,Wo=new $,Xo=new $,qo=new $,Yo=new Re,jo=new Re,Ko=new Re;class pn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),Wn.subVectors(n,e),$o.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Wn),l=Sn.dot($o),c=Wn.dot(Wn),d=Wn.dot($o),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,_=(a*d-o*l)*u;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Yo.setScalar(0),jo.setScalar(0),Ko.setScalar(0),Yo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Yo,s.x),a.addScaledVector(jo,s.y),a.addScaledVector(Ko,s.z),a}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),Wn.subVectors(t,e),Sn.cross(Wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ar.subVectors(r,n),lr.subVectors(s,n),Wo.subVectors(t,n);const l=ar.dot(Wo),c=lr.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,r);const d=ar.dot(Xo),f=lr.dot(Xo);if(d>=0&&f<=d)return e.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ar,a);qo.subVectors(t,s);const p=ar.dot(qo),_=lr.dot(qo);if(_>=0&&p<=_)return e.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(lr,o);const h=d*_-p*f;if(h<=0&&f-d>=0&&p-_>=0)return nc.subVectors(s,r),o=(f-d)/(f-d+(p-_)),e.copy(r).addScaledVector(nc,o);const g=1/(h+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(ar,a).addScaledVector(lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=Pf(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Zo(a,s,t+1/3),this.g=Zo(a,s,t),this.b=Zo(a,s,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return _e.fromWorkingColorSpace(Ke.copy(this),t),Math.round(en(Ke.r*255,0,255))*65536+Math.round(en(Ke.g*255,0,255))*256+Math.round(en(Ke.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,r=Ke.g,s=Ke.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ln){_e.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,r=Ke.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(_s);const n=Io(oi.h,_s.h,e),r=Io(oi.s,_s.s,e),s=Io(oi.l,_s.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new de;de.NAMES=Ru;let jf=0;class Rr extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=_r,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=ya,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cu extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new $,vs=new te;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Pu extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lu extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nn extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kf=0;const fn=new Ae,Jo=new Xe,cr=new $,hn=new ns,Hr=new ns,We=new $;class kn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Lu:Pu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(hn.min,Hr.min),hn.expandByPoint(We),We.addVectors(hn.max,Hr.max),hn.expandByPoint(We)):(hn.expandByPoint(Hr.min),hn.expandByPoint(Hr.max))}hn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)We.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(t,c),We.add(cr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new $,l[I]=new $;const c=new $,d=new $,f=new $,u=new te,p=new te,_=new te,x=new $,h=new $;function g(I,st,M){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,st),f.fromBufferAttribute(n,M),u.fromBufferAttribute(s,I),p.fromBufferAttribute(s,st),_.fromBufferAttribute(s,M),d.sub(c),f.sub(c),p.sub(u),_.sub(u);const S=1/(p.x*_.y-_.x*p.y);isFinite(S)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(S),h.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(S),o[I].add(x),o[st].add(x),o[M].add(x),l[I].add(h),l[st].add(h),l[M].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,st=b.length;I<st;++I){const M=b[I],S=M.start,W=M.count;for(let j=S,rt=S+W;j<rt;j+=3)g(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const y=new $,T=new $,D=new $,P=new $;function C(I){D.fromBufferAttribute(r,I),P.copy(D);const st=o[I];y.copy(st),y.sub(D.multiplyScalar(D.dot(st))).normalize(),T.crossVectors(P,st);const S=T.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,S)}for(let I=0,st=b.length;I<st;++I){const M=b[I],S=M.start,W=M.count;for(let j=S,rt=S+W;j<rt;j+=3)C(t.getX(j+0)),C(t.getX(j+1)),C(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,d=new $,f=new $;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),x=t.getX(u+1),h=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,h),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,h),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let x=0,h=l.length;x<h;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let g=0;g<d;g++)u[_++]=c[p++]}return new gn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new kn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new Ae,Ti=new _l,xs=new fo,rc=new $,ys=new $,Ms=new $,bs=new $,Qo=new $,Ss=new $,sc=new $,Es=new $;class Un extends Xe{constructor(t=new kn,e=new Cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Qo.fromBufferAttribute(f,t),a?Ss.addScaledVector(Qo,d):Ss.addScaledVector(Qo.sub(e),d))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),Ti.copy(t.ray).recast(t.near),!(xs.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(xs,rc)===null||Ti.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(ic.copy(s).invert(),Ti.copy(t.ray).applyMatrix4(ic),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const h=u[_],g=a[h.materialIndex],b=Math.max(h.start,p.start),y=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let T=b,D=y;T<D;T+=3){const P=o.getX(T),C=o.getX(T+1),I=o.getX(T+2);r=Ts(this,g,t,n,c,d,f,P,C,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let h=_,g=x;h<g;h+=3){const b=o.getX(h),y=o.getX(h+1),T=o.getX(h+2);r=Ts(this,a,t,n,c,d,f,b,y,T),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const h=u[_],g=a[h.materialIndex],b=Math.max(h.start,p.start),y=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let T=b,D=y;T<D;T+=3){const P=T,C=T+1,I=T+2;r=Ts(this,g,t,n,c,d,f,P,C,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let h=_,g=x;h<g;h+=3){const b=h,y=h+1,T=h+2;r=Ts(this,a,t,n,c,d,f,b,y,T),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}}}function Zf(i,t,e,n,r,s,a,o){let l;if(t.side===an?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===gi,o),l===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Es);return c<e.near||c>e.far?null:{distance:c,point:Es.clone(),object:i}}function Ts(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,Ms),i.getVertexPosition(c,bs);const d=Zf(i,t,e,n,ys,Ms,bs,sc);if(d){const f=new $;pn.getBarycoord(sc,ys,Ms,bs,f),r&&(d.uv=pn.getInterpolatedAttribute(r,o,l,c,f,new te)),s&&(d.uv1=pn.getInterpolatedAttribute(s,o,l,c,f,new te)),a&&(d.normal=pn.getInterpolatedAttribute(a,o,l,c,f,new $),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new $,materialIndex:0};pn.getNormal(ys,Ms,bs,u.normal),d.face=u,d.barycoord=f}return d}class is extends kn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(d,3)),this.setAttribute("uv",new Nn(f,2));function _(x,h,g,b,y,T,D,P,C,I,st){const M=T/C,S=D/I,W=T/2,j=D/2,rt=P/2,pt=C+1,J=I+1;let vt=0,et=0;const Dt=new $;for(let Mt=0;Mt<J;Mt++){const _t=Mt*S-j;for(let se=0;se<pt;se++){const ce=se*M-W;Dt[x]=ce*b,Dt[h]=_t*y,Dt[g]=rt,c.push(Dt.x,Dt.y,Dt.z),Dt[x]=0,Dt[h]=0,Dt[g]=P>0?1:-1,d.push(Dt.x,Dt.y,Dt.z),f.push(se/C),f.push(1-Mt/I),vt+=1}}for(let Mt=0;Mt<I;Mt++)for(let _t=0;_t<C;_t++){const se=u+_t+pt*Mt,ce=u+_t+pt*(Mt+1),it=u+(_t+1)+pt*(Mt+1),dt=u+(_t+1)+pt*Mt;l.push(se,ce,dt),l.push(ce,it,dt),et+=6}o.addGroup(p,et,st),p+=et,u+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Ar(i[e]);for(const r in n)t[r]=n[r]}return t}function Jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Qf={clone:Ar,merge:tn};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=Jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Iu extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new $,oc=new te,ac=new te;class En extends Iu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,oc,ac),e.subVectors(ac,oc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,hr=1;class np extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(ur,hr,t,e);r.layers=this.layers,this.add(r);const s=new En(ur,hr,t,e);s.layers=this.layers,this.add(s);const a=new En(ur,hr,t,e);a.layers=this.layers,this.add(a);const o=new En(ur,hr,t,e);o.layers=this.layers,this.add(o);const l=new En(ur,hr,t,e);l.layers=this.layers,this.add(l);const c=new En(ur,hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Uu extends ln{constructor(t,e,n,r,s,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:br,super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ip extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Uu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:fi});s.uniforms.tEquirect.value=e;const a=new Un(r,s),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=An),new np(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ta=new $,rp=new $,sp=new ie;class ci{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ta.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sp.getNormalMatrix(t),r=this.coplanarPoint(ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new fo,As=new $;class vl{constructor(t=new ci,e=new ci,n=new ci,r=new ci,s=new ci,a=new ci){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],x=r[10],h=r[11],g=r[12],b=r[13],y=r[14],T=r[15];if(n[0].setComponents(l-s,u-c,h-p,T-g).normalize(),n[1].setComponents(l+s,u+c,h+p,T+g).normalize(),n[2].setComponents(l+a,u+d,h+_,T+b).normalize(),n[3].setComponents(l-a,u-d,h-_,T-b).normalize(),n[4].setComponents(l-o,u-f,h-x,T-y).normalize(),e===Zn)n[5].setComponents(l+o,u+f,h+x,T+y).normalize();else if(e===eo)n[5].setComponents(o,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(As.x=r.normal.x>0?t.max.x:t.min.x,As.y=r.normal.y>0?t.max.y:t.min.y,As.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function op(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class po extends kn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,f=t/o,u=e/l,p=[],_=[],x=[],h=[];for(let g=0;g<d;g++){const b=g*u-a;for(let y=0;y<c;y++){const T=y*f-s;_.push(T,-b,0),x.push(0,0,1),h.push(y/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const y=b+c*g,T=b+c*(g+1),D=b+1+c*(g+1),P=b+1+c*g;p.push(y,T,P),p.push(T,D,P)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`
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
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
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
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,om=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:ap,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:hp,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:wp,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:$p,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:wm,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Im,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:km,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:$m,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:jm,specularmap_fragment:Km,specularmap_pars_fragment:Zm,tonemapping_fragment:Jm,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,worldpos_vertex:sg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:ug,cube_frag:hg,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:bg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:wg,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:kg,sprite_frag:Bg},Ct={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:tn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:tn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:tn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:tn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:tn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:tn([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:tn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:tn([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:tn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:tn([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:tn([Ct.common,Ct.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:tn([Ct.lights,Ct.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ws={r:0,b:0,g:0},wi=new On,zg=new Ae;function Hg(i,t,e,n,r,s,a){const o=new de(0);let l=s===!0?0:1,c,d,f=null,u=0,p=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const T=_(b);T===null?g(o,l):T&&T.isColor&&(g(T,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(b,y){const T=_(y);T&&(T.isCubeTexture||T.mapping===uo)?(d===void 0&&(d=new Un(new is(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ar(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(wi)),d.material.toneMapped=_e.getTransfer(T.colorSpace)!==be,(f!==T||u!==T.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=T,u=T.version,p=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Un(new po(2,2),new _i({name:"BackgroundMaterial",uniforms:Ar(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_e.getTransfer(T.colorSpace)!==be,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||u!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,u=T.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(ws,Du(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(o,l)},render:x,addToRenderList:h}}function Vg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(M,S,W,j,rt){let pt=!1;const J=f(j,W,S);s!==J&&(s=J,c(s.object)),pt=p(M,j,W,rt),pt&&_(M,j,W,rt),rt!==null&&t.update(rt,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,T(M,S,W,j),rt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,S,W){const j=W.wireframe===!0;let rt=n[M.id];rt===void 0&&(rt={},n[M.id]=rt);let pt=rt[S.id];pt===void 0&&(pt={},rt[S.id]=pt);let J=pt[j];return J===void 0&&(J=u(l()),pt[j]=J),J}function u(M){const S=[],W=[],j=[];for(let rt=0;rt<e;rt++)S[rt]=0,W[rt]=0,j[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:W,attributeDivisors:j,object:M,attributes:{},index:null}}function p(M,S,W,j){const rt=s.attributes,pt=S.attributes;let J=0;const vt=W.getAttributes();for(const et in vt)if(vt[et].location>=0){const Mt=rt[et];let _t=pt[et];if(_t===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),Mt===void 0||Mt.attribute!==_t||_t&&Mt.data!==_t.data)return!0;J++}return s.attributesNum!==J||s.index!==j}function _(M,S,W,j){const rt={},pt=S.attributes;let J=0;const vt=W.getAttributes();for(const et in vt)if(vt[et].location>=0){let Mt=pt[et];Mt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const _t={};_t.attribute=Mt,Mt&&Mt.data&&(_t.data=Mt.data),rt[et]=_t,J++}s.attributes=rt,s.attributesNum=J,s.index=j}function x(){const M=s.newAttributes;for(let S=0,W=M.length;S<W;S++)M[S]=0}function h(M){g(M,0)}function g(M,S){const W=s.newAttributes,j=s.enabledAttributes,rt=s.attributeDivisors;W[M]=1,j[M]===0&&(i.enableVertexAttribArray(M),j[M]=1),rt[M]!==S&&(i.vertexAttribDivisor(M,S),rt[M]=S)}function b(){const M=s.newAttributes,S=s.enabledAttributes;for(let W=0,j=S.length;W<j;W++)S[W]!==M[W]&&(i.disableVertexAttribArray(W),S[W]=0)}function y(M,S,W,j,rt,pt,J){J===!0?i.vertexAttribIPointer(M,S,W,rt,pt):i.vertexAttribPointer(M,S,W,j,rt,pt)}function T(M,S,W,j){x();const rt=j.attributes,pt=W.getAttributes(),J=S.defaultAttributeValues;for(const vt in pt){const et=pt[vt];if(et.location>=0){let Dt=rt[vt];if(Dt===void 0&&(vt==="instanceMatrix"&&M.instanceMatrix&&(Dt=M.instanceMatrix),vt==="instanceColor"&&M.instanceColor&&(Dt=M.instanceColor)),Dt!==void 0){const Mt=Dt.normalized,_t=Dt.itemSize,se=t.get(Dt);if(se===void 0)continue;const ce=se.buffer,it=se.type,dt=se.bytesPerElement,It=it===i.INT||it===i.UNSIGNED_INT||Dt.gpuType===ul;if(Dt.isInterleavedBufferAttribute){const Ut=Dt.data,qt=Ut.stride,zt=Dt.offset;if(Ut.isInstancedInterleavedBuffer){for(let ee=0;ee<et.locationSize;ee++)g(et.location+ee,Ut.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ee=0;ee<et.locationSize;ee++)h(et.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ee=0;ee<et.locationSize;ee++)y(et.location+ee,_t/et.locationSize,it,Mt,qt*dt,(zt+_t/et.locationSize*ee)*dt,It)}else{if(Dt.isInstancedBufferAttribute){for(let Ut=0;Ut<et.locationSize;Ut++)g(et.location+Ut,Dt.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)h(et.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ut=0;Ut<et.locationSize;Ut++)y(et.location+Ut,_t/et.locationSize,it,Mt,_t*dt,_t/et.locationSize*Ut*dt,It)}}else if(J!==void 0){const Mt=J[vt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(et.location,Mt);break;case 3:i.vertexAttrib3fv(et.location,Mt);break;case 4:i.vertexAttrib4fv(et.location,Mt);break;default:i.vertexAttrib1fv(et.location,Mt)}}}}b()}function D(){I();for(const M in n){const S=n[M];for(const W in S){const j=S[W];for(const rt in j)d(j[rt].object),delete j[rt];delete S[W]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const S=n[M.id];for(const W in S){const j=S[W];for(const rt in j)d(j[rt].object),delete j[rt];delete S[W]}delete n[M.id]}function C(M){for(const S in n){const W=n[S];if(W[M.id]===void 0)continue;const j=W[M.id];for(const rt in j)d(j[rt].object),delete j[rt];delete W[M.id]}}function I(){st(),a=!0,s!==r&&(s=r,c(s.object))}function st(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:st,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:h,disableUnusedAttributes:b}}function Gg(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function o(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];e.update(p,n,1)}function l(c,d,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];for(let x=0;x<u.length;x++)e.update(_,n,u[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $g(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:D,maxSamples:P}}function Wg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ci,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=d(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,x=f.clipIntersection,h=f.clipShadows,g=i.get(f);if(!r||_===null||_.length===0||s&&!h)s?d(null):c();else{const b=s?0:n,y=b*4;let T=g.clippingState||null;l.value=T,T=d(_,u,y,p);for(let D=0;D!==y;++D)T[D]=e[D];g.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,u,p,_){const x=f!==null?f.length:0;let h=null;if(x!==0){if(h=l.value,_!==!0||h===null){const g=p+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(h===null||h.length<g)&&(h=new Float32Array(g));for(let y=0,T=p;y!==x;++y,T+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(h,T),h[T+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function Xg(i){let t=new WeakMap;function e(a,o){return o===Ra?a.mapping=br:o===Ca&&(a.mapping=Sr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ra||o===Ca)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ip(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xl extends Iu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mr=4,lc=[.125,.215,.35,.446,.526,.582],Ni=20,ea=new xl,cc=new de;let na=null,ia=0,ra=0,sa=!1;const Li=(1+Math.sqrt(5))/2,dr=1/Li,uc=[new $(-Li,dr,0),new $(Li,dr,0),new $(-dr,0,Li),new $(dr,0,Li),new $(0,Li,-dr),new $(0,Li,dr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:ts,format:wn,colorSpace:xi,depthBuffer:!1},r=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(s)),this._blurMaterial=Yg(s,t,e)}return r}_compileMaterial(t){const e=new Un(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,r){const o=new En(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(cc),d.toneMapping=pi,d.autoClear=!1;const p=new Cu({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Un(new is,p);let x=!1;const h=t.background;h?h.isColor&&(p.color.copy(h),t.background=null,x=!0):(p.color.copy(cc),x=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):b===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;Rs(r,b*y,g>2?y:0,y,y),d.setRenderTarget(r),x&&d.render(_,o),d.render(t,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===br||t.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uc[(r-s-1)%uc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Un(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),x=s/_,h=isFinite(s)?1+Math.floor(d*x):Ni;h>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ni}`);const g=[];let b=0;for(let C=0;C<Ni;++C){const I=C/x,st=Math.exp(-I*I/2);g.push(st),C===0?b+=st:C<h&&(b+=2*st)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;u.envMap.value=t.texture,u.samples.value=h,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;const T=this._sizeLods[r],D=3*T*(r>y-mr?r-y+mr:0),P=4*(this._cubeSize-T);Rs(e,D,P,3*T,2*T),l.setRenderTarget(e),l.render(f,ea)}}function qg(i){const t=[],e=[],n=[];let r=i;const s=i-mr+1+lc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-mr?l=lc[a-i+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,x=3,h=2,g=1,b=new Float32Array(x*_*p),y=new Float32Array(h*_*p),T=new Float32Array(g*_*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,I=P>2?0:-1,st=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(st,x*_*P),y.set(u,h*_*P);const M=[P,P,P,P,P,P];T.set(M,g*_*P)}const D=new kn;D.setAttribute("position",new gn(b,x)),D.setAttribute("uv",new gn(y,h)),D.setAttribute("faceIndex",new gn(T,g)),t.push(D),r>mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Yg(i,t,e){const n=new Float32Array(Ni),r=new $(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function fc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function pc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function jg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Ca,d=l===br||l===Sr;if(c||d){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new hc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(e===null&&(e=new hc(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Zg(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const x=u.morphAttributes[_];for(let h=0,g=x.length;h<g;h++)t.remove(x[h])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const _ in u)t.update(u[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let h=0,g=x.length;h<g;h++)t.update(x[h],i.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let y=0,T=b.length;y<T;y+=3){const D=b[y+0],P=b[y+1],C=b[y+2];u.push(D,P,P,C,C,D)}}else if(_!==void 0){const b=_.array;x=_.version;for(let y=0,T=b.length/3-1;y<T;y+=3){const D=y+0,P=y+1,C=y+2;u.push(D,P,P,C,C,D)}}else return;const h=new(Eu(u)?Lu:Pu)(u,1);h.version=x;const g=s.get(f);g&&t.remove(g),s.set(f,h)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Jg(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,u*a,_),e.update(p,n,_))}function d(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];e.update(h,n,1)}function f(u,p,_,x){if(_===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)c(u[g]/a,p[g],x[g]);else{h.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,_);let g=0;for(let b=0;b<_;b++)g+=p[b];for(let b=0;b<x.length;b++)e.update(g,n,x[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Qg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function t0(i,t,e){const n=new WeakMap,r=new Re;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let st=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",st)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let T=o.attributes.position.count*y,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const P=new Float32Array(T*D*4*f),C=new Au(P,T,D,f);C.type=Kn,C.needsUpdate=!0;const I=y*4;for(let M=0;M<f;M++){const S=h[M],W=g[M],j=b[M],rt=T*D*4*M;for(let pt=0;pt<S.count;pt++){const J=pt*I;p===!0&&(r.fromBufferAttribute(S,pt),P[rt+J+0]=r.x,P[rt+J+1]=r.y,P[rt+J+2]=r.z,P[rt+J+3]=0),_===!0&&(r.fromBufferAttribute(W,pt),P[rt+J+4]=r.x,P[rt+J+5]=r.y,P[rt+J+6]=r.z,P[rt+J+7]=0),x===!0&&(r.fromBufferAttribute(j,pt),P[rt+J+8]=r.x,P[rt+J+9]=r.y,P[rt+J+10]=r.z,P[rt+J+11]=j.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new te(T,D)},n.set(o,u),o.addEventListener("dispose",st)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function e0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Fu extends ln{constructor(t,e,n,r,s,a,o,l,c,d=vr){if(d!==vr&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===vr&&(n=ki),n===void 0&&d===Tr&&(n=Er),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ou=new ln,mc=new Fu(1,1),ku=new Au,Bu=new Hf,zu=new Uu,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),yc=new Float32Array(4);function Cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Ve(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),Ve(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Ve(e,n)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function _0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=Su,s=mc):s=Ou,e.setTexture2D(t||s,r)}function v0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Bu,r)}function x0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||zu,r)}function y0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ku,r)}function M0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return h0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}function b0(i,t){i.uniform1fv(this.addr,t)}function S0(i,t){const e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){const e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){const e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){const e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function D0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function U0(i,t){i.uniform2uiv(this.addr,t)}function N0(i,t){i.uniform3uiv(this.addr,t)}function F0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ou,s[a])}function k0(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Bu,s[a])}function B0(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||zu,s[a])}function z0(i,t,e){const n=this.cache,r=t.length,s=mo(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ku,s[a])}function H0(i){switch(i){case 5126:return b0;case 35664:return S0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return I0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}class V0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}}class $0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){const n=i.name,r=n.length;for(oa.lastIndex=0;;){const s=oa.exec(n),a=oa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mc(e,c===void 0?new V0(o,i,t):new G0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new $0(o),Mc(e,f)),e=f}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);W0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const X0=37297;let q0=0;function Y0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function j0(i){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(i);let n;switch(t===e?n="":t===to&&e===Qs?n="LinearDisplayP3ToLinearSRGB":t===Qs&&e===to&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case ho:return[n,"LinearTransferOETF"];case Ln:case gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(t),a)}else return r}function K0(i,t){const e=j0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Z0(i,t){let e;switch(t){case df:e="Linear";break;case ff:e="Reinhard";break;case pf:e="Cineon";break;case mf:e="ACESFilmic";break;case _f:e="AgX";break;case vf:e="Neutral";break;case gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new $;function J0(){_e.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function t_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gr(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(n_,r_)}const i_=new Map;function r_(i,t){let e=ne[t];if(e===void 0){const n=i_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(s_,o_)}function o_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function a_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case Sr:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case uf:t="ENVMAP_BLENDING_MIX";break;case hf:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function d_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=a_(e),c=l_(e),d=c_(e),f=u_(e),u=h_(e),p=Q0(e),_=t_(s),x=r.createProgram();let h,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),h.length>0&&(h+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),g.length>0&&(g+=`
`)):(h=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),g=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?ne.tonemapping_pars_fragment:"",e.toneMapping!==pi?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),J0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=sl(a),a=Ec(a,e),a=Tc(a,e),o=sl(o),o=Ec(o,e),o=Tc(o,e),a=Ac(a),o=Ac(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=b+h+a,T=b+g+o,D=bc(r,r.VERTEX_SHADER,y),P=bc(r,r.FRAGMENT_SHADER,T);r.attachShader(x,D),r.attachShader(x,P),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(S){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),j=r.getShaderInfoLog(D).trim(),rt=r.getShaderInfoLog(P).trim();let pt=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,D,P);else{const vt=Sc(r,D,"vertex"),et=Sc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+W+`
`+vt+`
`+et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||rt==="")&&(J=!1);J&&(S.diagnostics={runnable:pt,programLog:W,vertexShader:{log:j,prefix:h},fragmentShader:{log:rt,prefix:g}})}r.deleteShader(D),r.deleteShader(P),I=new Xs(r,x),st=e_(r,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let st;this.getAttributes=function(){return st===void 0&&C(this),st};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,X0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=P,this}let f_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m_(t),e.set(t,n)),n}}class m_{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}}function g_(i,t,e,n,r,s,a){const o=new wu,l=new p_,c=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,W,j,rt){const pt=j.fog,J=rt.geometry,vt=M.isMeshStandardMaterial?j.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||vt),Dt=et&&et.mapping===uo?et.image.height:null,Mt=x[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=_t!==void 0?_t.length:0;let ce=0;J.morphAttributes.position!==void 0&&(ce=1),J.morphAttributes.normal!==void 0&&(ce=2),J.morphAttributes.color!==void 0&&(ce=3);let it,dt,It,Ut;if(Mt){const De=Dn[Mt];it=De.vertexShader,dt=De.fragmentShader}else it=M.vertexShader,dt=M.fragmentShader,l.update(M),It=l.getVertexShaderID(M),Ut=l.getFragmentShaderID(M);const qt=i.getRenderTarget(),zt=rt.isInstancedMesh===!0,ee=rt.isBatchedMesh===!0,ae=!!M.map,Qt=!!M.matcap,U=!!et,xe=!!M.aoMap,Gt=!!M.lightMap,re=!!M.bumpMap,Ot=!!M.normalMap,fe=!!M.displacementMap,$t=!!M.emissiveMap,R=!!M.metalnessMap,E=!!M.roughnessMap,G=M.anisotropy>0,at=M.clearcoat>0,mt=M.dispersion>0,z=M.iridescence>0,Et=M.sheen>0,bt=M.transmission>0,ct=G&&!!M.anisotropyMap,Lt=at&&!!M.clearcoatMap,K=at&&!!M.clearcoatNormalMap,gt=at&&!!M.clearcoatRoughnessMap,At=z&&!!M.iridescenceMap,kt=z&&!!M.iridescenceThicknessMap,Tt=Et&&!!M.sheenColorMap,Ft=Et&&!!M.sheenRoughnessMap,wt=!!M.specularMap,le=!!M.specularColorMap,N=!!M.specularIntensityMap,ht=bt&&!!M.transmissionMap,Z=bt&&!!M.thicknessMap,O=!!M.gradientMap,ot=!!M.alphaMap,tt=M.alphaTest>0,Wt=!!M.alphaHash,Kt=!!M.extensions;let he=pi;M.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(he=i.toneMapping);const oe={shaderID:Mt,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:dt,defines:M.defines,customVertexShaderID:It,customFragmentShaderID:Ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ee,batchingColor:ee&&rt._colorsTexture!==null,instancing:zt,instancingColor:zt&&rt.instanceColor!==null,instancingMorph:zt&&rt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:qt===null?i.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:xi,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Qt,envMap:U,envMapMode:U&&et.mapping,envMapCubeUVHeight:Dt,aoMap:xe,lightMap:Gt,bumpMap:re,normalMap:Ot,displacementMap:p&&fe,emissiveMap:$t,normalMapObjectSpace:Ot&&M.normalMapType===bf,normalMapTangentSpace:Ot&&M.normalMapType===bu,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:ct,clearcoat:at,clearcoatMap:Lt,clearcoatNormalMap:K,clearcoatRoughnessMap:gt,dispersion:mt,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:Et,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:wt,specularColorMap:le,specularIntensityMap:N,transmission:bt,transmissionMap:ht,thicknessMap:Z,gradientMap:O,opaque:M.transparent===!1&&M.blending===_r&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:tt,alphaHash:Wt,combine:M.combine,mapUv:ae&&h(M.map.channel),aoMapUv:xe&&h(M.aoMap.channel),lightMapUv:Gt&&h(M.lightMap.channel),bumpMapUv:re&&h(M.bumpMap.channel),normalMapUv:Ot&&h(M.normalMap.channel),displacementMapUv:fe&&h(M.displacementMap.channel),emissiveMapUv:$t&&h(M.emissiveMap.channel),metalnessMapUv:R&&h(M.metalnessMap.channel),roughnessMapUv:E&&h(M.roughnessMap.channel),anisotropyMapUv:ct&&h(M.anisotropyMap.channel),clearcoatMapUv:Lt&&h(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&h(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&h(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&h(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&h(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&h(M.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&h(M.sheenRoughnessMap.channel),specularMapUv:wt&&h(M.specularMap.channel),specularColorMapUv:le&&h(M.specularColorMap.channel),specularIntensityMapUv:N&&h(M.specularIntensityMap.channel),transmissionMapUv:ht&&h(M.transmissionMap.channel),thicknessMapUv:Z&&h(M.thicknessMap.channel),alphaMapUv:ot&&h(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!J.attributes.uv&&(ae||ot),fog:!!pt,useFog:M.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&_e.getTransfer(M.map.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&M.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function b(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)S.push(W),S.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(y(S,M),T(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function T(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),M.push(o.mask)}function D(M){const S=x[M.type];let W;if(S){const j=Dn[S];W=Qf.clone(j.uniforms)}else W=M.uniforms;return W}function P(M,S){let W;for(let j=0,rt=d.length;j<rt;j++){const pt=d[j];if(pt.cacheKey===S){W=pt,++W.usedTimes;break}}return W===void 0&&(W=new d_(i,S,M,s),d.push(W)),W}function C(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function I(M){l.remove(M)}function st(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:D,acquireProgram:P,releaseProgram:C,releaseShaderCache:I,programs:d,dispose:st}}function __(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function v_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,u,p,_,x,h){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:u,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:h},i[t]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=p,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=x,g.group=h),t++,g}function o(f,u,p,_,x,h){const g=a(f,u,p,_,x,h);p.transmission>0?n.push(g):p.transparent===!0?r.push(g):e.push(g)}function l(f,u,p,_,x,h){const g=a(f,u,p,_,x,h);p.transmission>0?n.unshift(g):p.transparent===!0?r.unshift(g):e.unshift(g)}function c(f,u){e.length>1&&e.sort(f||v_),n.length>1&&n.sort(u||Rc),r.length>1&&r.sort(u||Rc)}function d(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function x_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Cc,i.set(n,[a])):r>=s.length?(a=new Cc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new de};break;case"SpotLight":e={position:new $,direction:new $,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function M_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b_=0;function S_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E_(i){const t=new y_,e=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new Ae,a=new Ae;function o(c){let d=0,f=0,u=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let p=0,_=0,x=0,h=0,g=0,b=0,y=0,T=0,D=0,P=0,C=0;c.sort(S_);for(let st=0,M=c.length;st<M;st++){const S=c[st],W=S.color,j=S.intensity,rt=S.distance,pt=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=W.r*j,f+=W.g*j,u+=W.b*j;else if(S.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(S.sh.coefficients[J],j);C++}else if(S.isDirectionalLight){const J=t.get(S);if(J.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const vt=S.shadow,et=e.get(S);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=pt,n.directionalShadowMatrix[p]=S.shadow.matrix,b++}n.directional[p]=J,p++}else if(S.isSpotLight){const J=t.get(S);J.position.setFromMatrixPosition(S.matrixWorld),J.color.copy(W).multiplyScalar(j),J.distance=rt,J.coneCos=Math.cos(S.angle),J.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),J.decay=S.decay,n.spot[x]=J;const vt=S.shadow;if(S.map&&(n.spotLightMap[D]=S.map,D++,vt.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[x]=vt.matrix,S.castShadow){const et=e.get(S);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=pt,T++}x++}else if(S.isRectAreaLight){const J=t.get(S);J.color.copy(W).multiplyScalar(j),J.halfWidth.set(S.width*.5,0,0),J.halfHeight.set(0,S.height*.5,0),n.rectArea[h]=J,h++}else if(S.isPointLight){const J=t.get(S);if(J.color.copy(S.color).multiplyScalar(S.intensity),J.distance=S.distance,J.decay=S.decay,S.castShadow){const vt=S.shadow,et=e.get(S);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,et.shadowCameraNear=vt.camera.near,et.shadowCameraFar=vt.camera.far,n.pointShadow[_]=et,n.pointShadowMap[_]=pt,n.pointShadowMatrix[_]=S.shadow.matrix,y++}n.point[_]=J,_++}else if(S.isHemisphereLight){const J=t.get(S);J.skyColor.copy(S.color).multiplyScalar(j),J.groundColor.copy(S.groundColor).multiplyScalar(j),n.hemi[g]=J,g++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==h||I.hemiLength!==g||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==D||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=h,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,I.directionalLength=p,I.pointLength=_,I.spotLength=x,I.rectAreaLength=h,I.hemiLength=g,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=D,I.numLightProbes=C,n.version=b_++)}function l(c,d){let f=0,u=0,p=0,_=0,x=0;const h=d.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const y=c[g];if(y.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),f++}else if(y.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),p++}else if(y.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),a.identity(),s.copy(y.matrixWorld),s.premultiply(h),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),u++}else if(y.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),x++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const t=new E_(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function T_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Pc(i),t.set(r,[o])):s>=a.length?(o=new Pc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class A_ extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class w_ extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,t,e){let n=new vl;const r=new te,s=new te,a=new Re,o=new A_({depthPacking:Mf}),l=new w_,c={},d=e.maxTextureSize,f={[gi]:an,[an]:gi,[jn]:jn},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Un(_,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let g=this.type;this.render=function(P,C,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const st=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),W=i.state;W.setBlending(fi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=g!==Yn&&this.type===Yn,rt=g===Yn&&this.type!==Yn;for(let pt=0,J=P.length;pt<J;pt++){const vt=P[pt],et=vt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const Dt=et.getFrameExtents();if(r.multiply(Dt),s.copy(et.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Dt.x),r.x=s.x*Dt.x,et.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Dt.y),r.y=s.y*Dt.y,et.mapSize.y=s.y)),et.map===null||j===!0||rt===!0){const _t=this.type!==Yn?{minFilter:mn,magFilter:mn}:{};et.map!==null&&et.map.dispose(),et.map=new Bi(r.x,r.y,_t),et.map.texture.name=vt.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const Mt=et.getViewportCount();for(let _t=0;_t<Mt;_t++){const se=et.getViewport(_t);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),W.viewport(a),et.updateMatrices(vt,_t),n=et.getFrustum(),T(C,I,et.camera,vt,this.type)}et.isPointLightShadow!==!0&&this.type===Yn&&b(et,I),et.needsUpdate=!1}g=this.type,h.needsUpdate=!1,i.setRenderTarget(st,M,S)};function b(P,C){const I=t.update(x);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,I,u,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,I,p,x,null)}function y(P,C,I,st){let M=null;const S=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)M=S;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=M.uuid,j=C.uuid;let rt=c[W];rt===void 0&&(rt={},c[W]=rt);let pt=rt[j];pt===void 0&&(pt=M.clone(),rt[j]=pt,C.addEventListener("dispose",D)),M=pt}if(M.visible=C.visible,M.wireframe=C.wireframe,st===Yn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=I}return M}function T(P,C,I,st,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Yn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const j=t.update(P),rt=P.material;if(Array.isArray(rt)){const pt=j.groups;for(let J=0,vt=pt.length;J<vt;J++){const et=pt[J],Dt=rt[et.materialIndex];if(Dt&&Dt.visible){const Mt=y(P,Dt,st,M);P.onBeforeShadow(i,P,C,I,j,Mt,et),i.renderBufferDirect(I,null,j,Mt,P,et),P.onAfterShadow(i,P,C,I,j,Mt,et)}}}else if(rt.visible){const pt=y(P,rt,st,M);P.onBeforeShadow(i,P,C,I,j,pt,null),i.renderBufferDirect(I,null,j,pt,P,null),P.onAfterShadow(i,P,C,I,j,pt,null)}}const W=P.children;for(let j=0,rt=W.length;j<rt;j++)T(W[j],C,I,st,M)}function D(P){P.target.removeEventListener("dispose",D);for(const I in c){const st=c[I],M=P.target.uuid;M in st&&(st[M].dispose(),delete st[M])}}}const L_={[Ma]:ba,[Sa]:Aa,[Ea]:wa,[Mr]:Ta,[ba]:Ma,[Aa]:Sa,[wa]:Ea,[Ta]:Mr};function D_(i){function t(){let N=!1;const ht=new Re;let Z=null;const O=new Re(0,0,0,0);return{setMask:function(ot){Z!==ot&&!N&&(i.colorMask(ot,ot,ot,ot),Z=ot)},setLocked:function(ot){N=ot},setClear:function(ot,tt,Wt,Kt,he){he===!0&&(ot*=Kt,tt*=Kt,Wt*=Kt),ht.set(ot,tt,Wt,Kt),O.equals(ht)===!1&&(i.clearColor(ot,tt,Wt,Kt),O.copy(ht))},reset:function(){N=!1,Z=null,O.set(-1,0,0,0)}}}function e(){let N=!1,ht=!1,Z=null,O=null,ot=null;return{setReversed:function(tt){ht=tt},setTest:function(tt){tt?It(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!N&&(i.depthMask(tt),Z=tt)},setFunc:function(tt){if(ht&&(tt=L_[tt]),O!==tt){switch(tt){case Ma:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=tt}},setLocked:function(tt){N=tt},setClear:function(tt){ot!==tt&&(i.clearDepth(tt),ot=tt)},reset:function(){N=!1,Z=null,O=null,ot=null}}}function n(){let N=!1,ht=null,Z=null,O=null,ot=null,tt=null,Wt=null,Kt=null,he=null;return{setTest:function(oe){N||(oe?It(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!N&&(i.stencilMask(oe),ht=oe)},setFunc:function(oe,De,Ye){(Z!==oe||O!==De||ot!==Ye)&&(i.stencilFunc(oe,De,Ye),Z=oe,O=De,ot=Ye)},setOp:function(oe,De,Ye){(tt!==oe||Wt!==De||Kt!==Ye)&&(i.stencilOp(oe,De,Ye),tt=oe,Wt=De,Kt=Ye)},setLocked:function(oe){N=oe},setClear:function(oe){he!==oe&&(i.clearStencil(oe),he=oe)},reset:function(){N=!1,ht=null,Z=null,O=null,ot=null,tt=null,Wt=null,Kt=null,he=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,u=[],p=null,_=!1,x=null,h=null,g=null,b=null,y=null,T=null,D=null,P=new de(0,0,0),C=0,I=!1,st=null,M=null,S=null,W=null,j=null;const rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,J=0;const vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(vt)[1]),pt=J>=1):vt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),pt=J>=2);let et=null,Dt={};const Mt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),se=new Re().fromArray(Mt),ce=new Re().fromArray(_t);function it(N,ht,Z,O){const ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(N,tt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Z;Wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ht+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}const dt={};dt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),It(i.DEPTH_TEST),s.setFunc(Mr),Gt(!1),re(kl),It(i.CULL_FACE),U(fi);function It(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function Ut(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function qt(N,ht){return d[N]!==ht?(i.bindFramebuffer(N,ht),d[N]=ht,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function zt(N,ht){let Z=u,O=!1;if(N){Z=f.get(ht),Z===void 0&&(Z=[],f.set(ht,Z));const ot=N.textures;if(Z.length!==ot.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Wt=ot.length;tt<Wt;tt++)Z[tt]=i.COLOR_ATTACHMENT0+tt;Z.length=ot.length,O=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,O=!0);O&&i.drawBuffers(Z)}function ee(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const ae={[Ui]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[qd]:i.FUNC_REVERSE_SUBTRACT};ae[Yd]=i.MIN,ae[jd]=i.MAX;const Qt={[Kd]:i.ZERO,[Zd]:i.ONE,[Jd]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,ht,Z,O,ot,tt,Wt,Kt,he,oe){if(N===fi){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(It(i.BLEND),_=!0),N!==Wd){if(N!==x||oe!==I){if((h!==Ui||y!==Ui)&&(i.blendEquation(i.FUNC_ADD),h=Ui,y=Ui),oe)switch(N){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,b=null,T=null,D=null,P.set(0,0,0),C=0,x=N,I=oe}return}ot=ot||ht,tt=tt||Z,Wt=Wt||O,(ht!==h||ot!==y)&&(i.blendEquationSeparate(ae[ht],ae[ot]),h=ht,y=ot),(Z!==g||O!==b||tt!==T||Wt!==D)&&(i.blendFuncSeparate(Qt[Z],Qt[O],Qt[tt],Qt[Wt]),g=Z,b=O,T=tt,D=Wt),(Kt.equals(P)===!1||he!==C)&&(i.blendColor(Kt.r,Kt.g,Kt.b,he),P.copy(Kt),C=he),x=N,I=!1}function xe(N,ht){N.side===jn?Ut(i.CULL_FACE):It(i.CULL_FACE);let Z=N.side===an;ht&&(Z=!Z),Gt(Z),N.blending===_r&&N.transparent===!1?U(fi):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const O=N.stencilWrite;a.setTest(O),O&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){st!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),st=N)}function re(N){N!==Vd?(It(i.CULL_FACE),N!==M&&(N===kl?i.cullFace(i.BACK):N===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),M=N}function Ot(N){N!==S&&(pt&&i.lineWidth(N),S=N)}function fe(N,ht,Z){N?(It(i.POLYGON_OFFSET_FILL),(W!==ht||j!==Z)&&(i.polygonOffset(ht,Z),W=ht,j=Z)):Ut(i.POLYGON_OFFSET_FILL)}function $t(N){N?It(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+rt-1),et!==N&&(i.activeTexture(N),et=N)}function E(N,ht,Z){Z===void 0&&(et===null?Z=i.TEXTURE0+rt-1:Z=et);let O=Dt[Z];O===void 0&&(O={type:void 0,texture:void 0},Dt[Z]=O),(O.type!==N||O.texture!==ht)&&(et!==Z&&(i.activeTexture(Z),et=Z),i.bindTexture(N,ht||dt[N]),O.type=N,O.texture=ht)}function G(){const N=Dt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function Tt(N){ce.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function Ft(N,ht){let Z=l.get(ht);Z===void 0&&(Z=new WeakMap,l.set(ht,Z));let O=Z.get(N);O===void 0&&(O=i.getUniformBlockIndex(ht,N.name),Z.set(N,O))}function wt(N,ht){const O=l.get(ht).get(N);o.get(ht)!==O&&(i.uniformBlockBinding(ht,O,N.__bindingPointIndex),o.set(ht,O))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},et=null,Dt={},d={},f=new WeakMap,u=[],p=null,_=!1,x=null,h=null,g=null,b=null,y=null,T=null,D=null,P=new de(0,0,0),C=0,I=!1,st=null,M=null,S=null,W=null,j=null,se.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:It,disable:Ut,bindFramebuffer:qt,drawBuffers:zt,useProgram:ee,setBlending:U,setMaterial:xe,setFlipSided:Gt,setCullFace:re,setLineWidth:Ot,setPolygonOffset:fe,setScissorTest:$t,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:at,compressedTexImage3D:mt,texImage2D:gt,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:wt,texStorage2D:Lt,texStorage3D:K,texSubImage2D:z,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:ct,scissor:kt,viewport:Tt,reset:le}}function Lc(i,t,e,n){const r=I_(n);switch(e){case mu:return i*t;case _u:return i*t;case vu:return i*t*2;case xu:return i*t/r.components*r.byteLength;case fl:return i*t/r.components*r.byteLength;case yu:return i*t*2/r.components*r.byteLength;case pl:return i*t*2/r.components*r.byteLength;case gu:return i*t*3/r.components*r.byteLength;case wn:return i*t*4/r.components*r.byteLength;case ml:return i*t*4/r.components*r.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case Qa:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mu:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I_(i){switch(i){case Jn:case du:return{byteLength:1,components:1};case Qr:case fu:case ts:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case ki:case ul:case Kn:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function U_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return p?new OffscreenCanvas(R,E):no("canvas")}function x(R,E,G){let at=1;const mt=$t(R);if((mt.width>G||mt.height>G)&&(at=G/Math.max(mt.width,mt.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const z=Math.floor(at*mt.width),Et=Math.floor(at*mt.height);f===void 0&&(f=_(z,Et));const bt=E?_(z,Et):f;return bt.width=z,bt.height=Et,bt.getContext("2d").drawImage(R,0,0,z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+z+"x"+Et+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==mn&&R.minFilter!==An}function g(R){i.generateMipmap(R)}function b(R,E,G,at,mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let z=E;if(E===i.RED&&(G===i.FLOAT&&(z=i.R32F),G===i.HALF_FLOAT&&(z=i.R16F),G===i.UNSIGNED_BYTE&&(z=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.R8UI),G===i.UNSIGNED_SHORT&&(z=i.R16UI),G===i.UNSIGNED_INT&&(z=i.R32UI),G===i.BYTE&&(z=i.R8I),G===i.SHORT&&(z=i.R16I),G===i.INT&&(z=i.R32I)),E===i.RG&&(G===i.FLOAT&&(z=i.RG32F),G===i.HALF_FLOAT&&(z=i.RG16F),G===i.UNSIGNED_BYTE&&(z=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RG8UI),G===i.UNSIGNED_SHORT&&(z=i.RG16UI),G===i.UNSIGNED_INT&&(z=i.RG32UI),G===i.BYTE&&(z=i.RG8I),G===i.SHORT&&(z=i.RG16I),G===i.INT&&(z=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(z=i.RGB16UI),G===i.UNSIGNED_INT&&(z=i.RGB32UI),G===i.BYTE&&(z=i.RGB8I),G===i.SHORT&&(z=i.RGB16I),G===i.INT&&(z=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),G===i.UNSIGNED_INT&&(z=i.RGBA32UI),G===i.BYTE&&(z=i.RGBA8I),G===i.SHORT&&(z=i.RGBA16I),G===i.INT&&(z=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),E===i.RGBA){const Et=mt?Js:_e.getTransfer(at);G===i.FLOAT&&(z=i.RGBA32F),G===i.HALF_FLOAT&&(z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(z=Et===be?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(R,E){let G;return R?E===null||E===ki||E===Er?G=i.DEPTH24_STENCIL8:E===Kn?G=i.DEPTH32F_STENCIL8:E===Qr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===Er?G=i.DEPTH_COMPONENT24:E===Kn?G=i.DEPTH_COMPONENT32F:E===Qr&&(G=i.DEPTH_COMPONENT16),G}function T(R,E){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function D(R){const E=R.target;E.removeEventListener("dispose",D),C(E),E.isVideoTexture&&d.delete(E)}function P(R){const E=R.target;E.removeEventListener("dispose",P),st(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,at=u.get(G);if(at){const mt=at[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&I(R),Object.keys(at).length===0&&u.delete(G)}n.remove(R)}function I(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const G=R.source,at=u.get(G);delete at[E.__cacheKey],a.memory.textures--}function st(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(E.__webglFramebuffer[at]))for(let mt=0;mt<E.__webglFramebuffer[at].length;mt++)i.deleteFramebuffer(E.__webglFramebuffer[at][mt]);else i.deleteFramebuffer(E.__webglFramebuffer[at]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[at])}else{if(Array.isArray(E.__webglFramebuffer))for(let at=0;at<E.__webglFramebuffer.length;at++)i.deleteFramebuffer(E.__webglFramebuffer[at]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let at=0;at<E.__webglColorRenderbuffer.length;at++)E.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[at]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let at=0,mt=G.length;at<mt;at++){const z=n.get(G[at]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(G[at])}n.remove(R)}let M=0;function S(){M=0}function W(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function rt(R,E){const G=n.get(R);if(R.isVideoTexture&&Ot(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const at=R.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,R,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function pt(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function J(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function vt(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){it(G,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const et={[Pa]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Dt={[mn]:i.NEAREST,[xf]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Sf]:i.NEVER,[Cf]:i.ALWAYS,[Ef]:i.LESS,[Su]:i.LEQUAL,[Tf]:i.EQUAL,[Rf]:i.GEQUAL,[Af]:i.GREATER,[wf]:i.NOTEQUAL};function _t(R,E){if(E.type===Kn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===Do||E.magFilter===cs||E.magFilter===Oi||E.minFilter===An||E.minFilter===Do||E.minFilter===cs||E.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Dt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Dt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==cs&&E.minFilter!==Oi||E.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function se(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D));const at=E.source;let mt=u.get(at);mt===void 0&&(mt={},u.set(at,mt));const z=j(E);if(z!==R.__cacheKey){mt[z]===void 0&&(mt[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),mt[z].usedTimes++;const Et=mt[R.__cacheKey];Et!==void 0&&(mt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&I(E)),R.__cacheKey=z,R.__webglTexture=mt[z].texture}return G}function ce(R,E,G){let at=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(at=i.TEXTURE_3D);const mt=se(R,E),z=E.source;e.bindTexture(at,R.__webglTexture,i.TEXTURE0+G);const Et=n.get(z);if(z.version!==Et.__version||mt===!0){e.activeTexture(i.TEXTURE0+G);const bt=_e.getPrimaries(_e.workingColorSpace),ct=E.colorSpace===hi?null:_e.getPrimaries(E.colorSpace),Lt=E.colorSpace===hi||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let K=x(E.image,!1,r.maxTextureSize);K=fe(E,K);const gt=s.convert(E.format,E.colorSpace),At=s.convert(E.type);let kt=b(E.internalFormat,gt,At,E.colorSpace,E.isVideoTexture);_t(at,E);let Tt;const Ft=E.mipmaps,wt=E.isVideoTexture!==!0,le=Et.__version===void 0||mt===!0,N=z.dataReady,ht=T(E,K);if(E.isDepthTexture)kt=y(E.format===Tr,E.type),le&&(wt?e.texStorage2D(i.TEXTURE_2D,1,kt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,kt,K.width,K.height,0,gt,At,null));else if(E.isDataTexture)if(Ft.length>0){wt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,Ft[0].width,Ft[0].height);for(let Z=0,O=Ft.length;Z<O;Z++)Tt=Ft[Z],wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,Z,kt,Tt.width,Tt.height,0,gt,At,Tt.data);E.generateMipmaps=!1}else wt?(le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,K.width,K.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,gt,At,K.data)):e.texImage2D(i.TEXTURE_2D,0,kt,K.width,K.height,0,gt,At,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,kt,Ft[0].width,Ft[0].height,K.depth);for(let Z=0,O=Ft.length;Z<O;Z++)if(Tt=Ft[Z],E.format!==wn)if(gt!==null)if(wt){if(N)if(E.layerUpdates.size>0){const ot=Lc(Tt.width,Tt.height,E.format,E.type);for(const tt of E.layerUpdates){const Wt=Tt.data.subarray(tt*ot/Tt.data.BYTES_PER_ELEMENT,(tt+1)*ot/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,tt,Tt.width,Tt.height,1,gt,Wt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,K.depth,gt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,kt,Tt.width,Tt.height,K.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,K.depth,gt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,kt,Tt.width,Tt.height,K.depth,0,gt,At,Tt.data)}else{wt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,kt,Ft[0].width,Ft[0].height);for(let Z=0,O=Ft.length;Z<O;Z++)Tt=Ft[Z],E.format!==wn?gt!==null?wt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,gt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,gt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,Z,kt,Tt.width,Tt.height,0,gt,At,Tt.data)}else if(E.isDataArrayTexture)if(wt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,kt,K.width,K.height,K.depth),N)if(E.layerUpdates.size>0){const Z=Lc(K.width,K.height,E.format,E.type);for(const O of E.layerUpdates){const ot=K.data.subarray(O*Z/K.data.BYTES_PER_ELEMENT,(O+1)*Z/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,K.width,K.height,1,gt,At,ot)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,gt,At,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,K.width,K.height,K.depth,0,gt,At,K.data);else if(E.isData3DTexture)wt?(le&&e.texStorage3D(i.TEXTURE_3D,ht,kt,K.width,K.height,K.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,gt,At,K.data)):e.texImage3D(i.TEXTURE_3D,0,kt,K.width,K.height,K.depth,0,gt,At,K.data);else if(E.isFramebufferTexture){if(le)if(wt)e.texStorage2D(i.TEXTURE_2D,ht,kt,K.width,K.height);else{let Z=K.width,O=K.height;for(let ot=0;ot<ht;ot++)e.texImage2D(i.TEXTURE_2D,ot,kt,Z,O,0,gt,At,null),Z>>=1,O>>=1}}else if(Ft.length>0){if(wt&&le){const Z=$t(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ht,kt,Z.width,Z.height)}for(let Z=0,O=Ft.length;Z<O;Z++)Tt=Ft[Z],wt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,gt,At,Tt):e.texImage2D(i.TEXTURE_2D,Z,kt,gt,At,Tt);E.generateMipmaps=!1}else if(wt){if(le){const Z=$t(K);e.texStorage2D(i.TEXTURE_2D,ht,kt,Z.width,Z.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,K)}else e.texImage2D(i.TEXTURE_2D,0,kt,gt,At,K);h(E)&&g(at),Et.__version=z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function it(R,E,G){if(E.image.length!==6)return;const at=se(R,E),mt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const z=n.get(mt);if(mt.version!==z.__version||at===!0){e.activeTexture(i.TEXTURE0+G);const Et=_e.getPrimaries(_e.workingColorSpace),bt=E.colorSpace===hi?null:_e.getPrimaries(E.colorSpace),ct=E.colorSpace===hi||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,K=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let O=0;O<6;O++)!Lt&&!K?gt[O]=x(E.image[O],!0,r.maxCubemapSize):gt[O]=K?E.image[O].image:E.image[O],gt[O]=fe(E,gt[O]);const At=gt[0],kt=s.convert(E.format,E.colorSpace),Tt=s.convert(E.type),Ft=b(E.internalFormat,kt,Tt,E.colorSpace),wt=E.isVideoTexture!==!0,le=z.__version===void 0||at===!0,N=mt.dataReady;let ht=T(E,At);_t(i.TEXTURE_CUBE_MAP,E);let Z;if(Lt){wt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,At.width,At.height);for(let O=0;O<6;O++){Z=gt[O].mipmaps;for(let ot=0;ot<Z.length;ot++){const tt=Z[ot];E.format!==wn?kt!==null?wt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,0,0,tt.width,tt.height,kt,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,Ft,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,0,0,tt.width,tt.height,kt,Tt,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot,Ft,tt.width,tt.height,0,kt,Tt,tt.data)}}}else{if(Z=E.mipmaps,wt&&le){Z.length>0&&ht++;const O=$t(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,O.width,O.height)}for(let O=0;O<6;O++)if(K){wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,gt[O].width,gt[O].height,kt,Tt,gt[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ft,gt[O].width,gt[O].height,0,kt,Tt,gt[O].data);for(let ot=0;ot<Z.length;ot++){const Wt=Z[ot].image[O].image;wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,0,0,Wt.width,Wt.height,kt,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,Ft,Wt.width,Wt.height,0,kt,Tt,Wt.data)}}else{wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,kt,Tt,gt[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ft,kt,Tt,gt[O]);for(let ot=0;ot<Z.length;ot++){const tt=Z[ot];wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,0,0,kt,Tt,tt.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ot+1,Ft,kt,Tt,tt.image[O])}}}h(E)&&g(i.TEXTURE_CUBE_MAP),z.__version=mt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function dt(R,E,G,at,mt,z){const Et=s.convert(G.format,G.colorSpace),bt=s.convert(G.type),ct=b(G.internalFormat,Et,bt,G.colorSpace);if(!n.get(E).__hasExternalTextures){const K=Math.max(1,E.width>>z),gt=Math.max(1,E.height>>z);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,z,ct,K,gt,E.depth,0,Et,bt,null):e.texImage2D(mt,z,ct,K,gt,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),re(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,mt,n.get(G).__webglTexture,0,Gt(E)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,mt,n.get(G).__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(R,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const at=E.depthTexture,mt=at&&at.isDepthTexture?at.type:null,z=y(E.stencilBuffer,mt),Et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=Gt(E);re(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,z,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const at=E.textures;for(let mt=0;mt<at.length;mt++){const z=at[mt],Et=s.convert(z.format,z.colorSpace),bt=s.convert(z.type),ct=b(z.internalFormat,Et,bt,z.colorSpace),Lt=Gt(E);G&&re(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ct,E.width,E.height):re(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt(E.depthTexture,0);const at=n.get(E.depthTexture).__webglTexture,mt=Gt(E);if(E.depthTexture.format===vr)re(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(E.depthTexture.format===Tr)re(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function qt(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const at=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),at){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,at.removeEventListener("dispose",mt)};at.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=at}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ut(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]===void 0)E.__webglDepthbuffer[at]=i.createRenderbuffer(),It(E.__webglDepthbuffer[at],R,!1);else{const mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=E.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),It(E.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,E,G){const at=n.get(R);E!==void 0&&dt(at.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&qt(R)}function ee(R){const E=R.texture,G=n.get(R),at=n.get(E);R.addEventListener("dispose",P);const mt=R.textures,z=R.isWebGLCubeRenderTarget===!0,Et=mt.length>1;if(Et||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=E.version,a.memory.textures++),z){G.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[bt]=[];for(let ct=0;ct<E.mipmaps.length;ct++)G.__webglFramebuffer[bt][ct]=i.createFramebuffer()}else G.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)G.__webglFramebuffer[bt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,ct=mt.length;bt<ct;bt++){const Lt=n.get(mt[bt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let bt=0;bt<mt.length;bt++){const ct=mt[bt];G.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[bt]);const Lt=s.convert(ct.format,ct.colorSpace),K=s.convert(ct.type),gt=b(ct.internalFormat,Lt,K,ct.colorSpace,R.isXRRenderTarget===!0),At=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,G.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),It(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_t(i.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)dt(G.__webglFramebuffer[bt][ct],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ct);else dt(G.__webglFramebuffer[bt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);h(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,ct=mt.length;bt<ct;bt++){const Lt=mt[bt],K=n.get(Lt);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),_t(i.TEXTURE_2D,Lt),dt(G.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),h(Lt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,at.__webglTexture),_t(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)dt(G.__webglFramebuffer[ct],R,E,i.COLOR_ATTACHMENT0,bt,ct);else dt(G.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,bt,0);h(E)&&g(bt),e.unbindTexture()}R.depthBuffer&&qt(R)}function ae(R){const E=R.textures;for(let G=0,at=E.length;G<at;G++){const mt=E[G];if(h(mt)){const z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(mt).__webglTexture;e.bindTexture(z,Et),g(z),e.unbindTexture()}}}const Qt=[],U=[];function xe(R){if(R.samples>0){if(re(R)===!1){const E=R.textures,G=R.width,at=R.height;let mt=i.COLOR_BUFFER_BIT;const z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),bt=E.length>1;if(bt)for(let ct=0;ct<E.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ct=0;ct<E.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ct]);const Lt=n.get(E[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,G,at,0,0,G,at,mt,i.NEAREST),l===!0&&(Qt.length=0,U.length=0,Qt.push(i.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qt.push(z),U.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let ct=0;ct<E.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ct]);const Lt=n.get(E[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(r.maxSamples,R.samples)}function re(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function fe(R,E){const G=R.colorSpace,at=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==xi&&G!==hi&&(_e.getTransfer(G)===be?(at!==wn||mt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=S,this.setTexture2D=rt,this.setTexture2DArray=pt,this.setTexture3D=J,this.setTextureCube=vt,this.rebindTextures=zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=re}function N_(i,t){function e(n,r=hi){let s;const a=_e.getTransfer(r);if(n===Jn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.BYTE;if(n===fu)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===wn)return i.RGBA;if(n===_u)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===Vs||n===Gs)if(a===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===Ua||n===Na)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fa||n===Oa)return a===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Ha||n===Va||n===Ga||n===$a||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===Ja)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ba)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===Qa||n===tl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===$s)return a===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===el||n===nl||n===il)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class F_ extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ps extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),g=this._getHandJoint(c,x);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ln,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:k_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Gi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,_=null;const x=new z_,h=e.getContextAttributes();let g=null,b=null;const y=[],T=[],D=new te;let P=null;const C=new En;C.layers.enable(1),C.viewport=new Re;const I=new En;I.layers.enable(2),I.viewport=new Re;const st=[C,I],M=new F_;M.layers.enable(1),M.layers.enable(2);let S=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=y[it];return dt===void 0&&(dt=new aa,y[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=y[it];return dt===void 0&&(dt=new aa,y[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=y[it];return dt===void 0&&(dt=new aa,y[it]=dt),dt.getHandSpace()};function j(it){const dt=T.indexOf(it.inputSource);if(dt===-1)return;const It=y[dt];It!==void 0&&(It.update(it.inputSource,it.frame,c||a),It.dispatchEvent({type:it.type,data:it.inputSource}))}function rt(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",rt),r.removeEventListener("inputsourceschange",pt);for(let it=0;it<y.length;it++){const dt=T[it];dt!==null&&(T[it]=null,y[it].disconnect(dt))}S=null,W=null,x.reset(),t.setRenderTarget(g),p=null,u=null,f=null,r=null,b=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",rt),r.addEventListener("inputsourceschange",pt),h.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const dt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bi(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let dt=null,It=null,Ut=null;h.depth&&(Ut=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=h.stencil?Tr:vr,It=h.stencil?Er:ki);const qt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};f=new XRWebGLBinding(r,e),u=f.createProjectionLayer(qt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Bi(u.textureWidth,u.textureHeight,{format:wn,type:Jn,depthTexture:new Fu(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function pt(it){for(let dt=0;dt<it.removed.length;dt++){const It=it.removed[dt],Ut=T.indexOf(It);Ut>=0&&(T[Ut]=null,y[Ut].disconnect(It))}for(let dt=0;dt<it.added.length;dt++){const It=it.added[dt];let Ut=T.indexOf(It);if(Ut===-1){for(let zt=0;zt<y.length;zt++)if(zt>=T.length){T.push(It),Ut=zt;break}else if(T[zt]===null){T[zt]=It,Ut=zt;break}if(Ut===-1)break}const qt=y[Ut];qt&&qt.connect(It)}}const J=new $,vt=new $;function et(it,dt,It){J.setFromMatrixPosition(dt.matrixWorld),vt.setFromMatrixPosition(It.matrixWorld);const Ut=J.distanceTo(vt),qt=dt.projectionMatrix.elements,zt=It.projectionMatrix.elements,ee=qt[14]/(qt[10]-1),ae=qt[14]/(qt[10]+1),Qt=(qt[9]+1)/qt[5],U=(qt[9]-1)/qt[5],xe=(qt[8]-1)/qt[0],Gt=(zt[8]+1)/zt[0],re=ee*xe,Ot=ee*Gt,fe=Ut/(-xe+Gt),$t=fe*-xe;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX($t),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),qt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const R=ee+fe,E=ae+fe,G=re-$t,at=Ot+(Ut-$t),mt=Qt*ae/E*R,z=U*ae/E*R;it.projectionMatrix.makePerspective(G,at,mt,z,R,E),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Dt(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let dt=it.near,It=it.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(It=x.depthFar)),M.near=I.near=C.near=dt,M.far=I.far=C.far=It,(S!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,W=M.far);const Ut=it.parent,qt=M.cameras;Dt(M,Ut);for(let zt=0;zt<qt.length;zt++)Dt(qt[zt],Ut);qt.length===2?et(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),Mt(it,M,Ut)};function Mt(it,dt,It){It===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(It.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=rl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _t=null;function se(it,dt){if(d=dt.getViewerPose(c||a),_=dt,d!==null){const It=d.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Ut=!1;It.length!==M.cameras.length&&(M.cameras.length=0,Ut=!0);for(let zt=0;zt<It.length;zt++){const ee=It[zt];let ae=null;if(p!==null)ae=p.getViewport(ee);else{const U=f.getViewSubImage(u,ee);ae=U.viewport,zt===0&&(t.setRenderTargetTextures(b,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(b))}let Qt=st[zt];Qt===void 0&&(Qt=new En,Qt.layers.enable(zt),Qt.viewport=new Re,st[zt]=Qt),Qt.matrix.fromArray(ee.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ee.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ae.x,ae.y,ae.width,ae.height),zt===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ut===!0&&M.cameras.push(Qt)}const qt=r.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const zt=f.getDepthInformation(It[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,r.renderState)}}for(let It=0;It<y.length;It++){const Ut=T[It],qt=y[It];Ut!==null&&qt!==void 0&&qt.update(Ut,dt,c||a)}_t&&_t(it,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),_=null}const ce=new Nu;ce.setAnimationLoop(se),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const Ri=new On,V_=new Ae;function G_(i,t){function e(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function n(h,g){g.color.getRGB(h.fogColor.value,Du(i)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function r(h,g,b,y,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(h,g):g.isMeshToonMaterial?(s(h,g),f(h,g)):g.isMeshPhongMaterial?(s(h,g),d(h,g)):g.isMeshStandardMaterial?(s(h,g),u(h,g),g.isMeshPhysicalMaterial&&p(h,g,T)):g.isMeshMatcapMaterial?(s(h,g),_(h,g)):g.isMeshDepthMaterial?s(h,g):g.isMeshDistanceMaterial?(s(h,g),x(h,g)):g.isMeshNormalMaterial?s(h,g):g.isLineBasicMaterial?(a(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?l(h,g,b,y):g.isSpriteMaterial?c(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,e(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===an&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,e(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===an&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,e(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,e(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const b=t.get(g),y=b.envMap,T=b.envMapRotation;y&&(h.envMap.value=y,Ri.copy(T),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(Ri)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap&&(h.lightMap.value=g.lightMap,h.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,h.lightMapTransform)),g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,h.aoMapTransform))}function a(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function l(h,g,b,y){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*b,h.scale.value=y*.5,g.map&&(h.map.value=g.map,e(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function c(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,e(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,e(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function d(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function f(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function u(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,h.roughnessMapTransform)),g.envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function p(h,g,b){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&h.clearcoatNormalScale.value.negate())),g.dispersion>0&&(h.dispersion.value=g.dispersion),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,g){g.matcap&&(h.matcap.value=g.matcap)}function x(h,g){const b=t.get(g).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const T=y.program;n.uniformBlockBinding(b,T)}function c(b,y){let T=r[b.id];T===void 0&&(_(b),T=d(b),r[b.id]=T,b.addEventListener("dispose",h));const D=y.program;n.updateUBOMapping(b,D);const P=t.render.frame;s[b.id]!==P&&(u(b),s[b.id]=P)}function d(b){const y=f();b.__bindingPointIndex=y;const T=i.createBuffer(),D=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=r[b.id],T=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,C=T.length;P<C;P++){const I=Array.isArray(T[P])?T[P]:[T[P]];for(let st=0,M=I.length;st<M;st++){const S=I[st];if(p(S,P,st,D)===!0){const W=S.__offset,j=Array.isArray(S.value)?S.value:[S.value];let rt=0;for(let pt=0;pt<j.length;pt++){const J=j[pt],vt=x(J);typeof J=="number"||typeof J=="boolean"?(S.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,W+rt,S.__data)):J.isMatrix3?(S.__data[0]=J.elements[0],S.__data[1]=J.elements[1],S.__data[2]=J.elements[2],S.__data[3]=0,S.__data[4]=J.elements[3],S.__data[5]=J.elements[4],S.__data[6]=J.elements[5],S.__data[7]=0,S.__data[8]=J.elements[6],S.__data[9]=J.elements[7],S.__data[10]=J.elements[8],S.__data[11]=0):(J.toArray(S.__data,rt),rt+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,T,D){const P=b.value,C=y+"_"+T;if(D[C]===void 0)return typeof P=="number"||typeof P=="boolean"?D[C]=P:D[C]=P.clone(),!0;{const I=D[C];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return D[C]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function _(b){const y=b.uniforms;let T=0;const D=16;for(let C=0,I=y.length;C<I;C++){const st=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,S=st.length;M<S;M++){const W=st[M],j=Array.isArray(W.value)?W.value:[W.value];for(let rt=0,pt=j.length;rt<pt;rt++){const J=j[rt],vt=x(J),et=T%D,Dt=et%vt.boundary,Mt=et+Dt;T+=Dt,Mt!==0&&D-Mt<vt.storage&&(T+=D-Mt),W.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=vt.storage}}}const P=T%D;return P>0&&(T+=D-P),b.__size=T,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function h(b){const y=b.target;y.removeEventListener("dispose",h);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}class Hu{constructor(t={}){const{canvas:e=Df(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,h=null;const g=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=pi,this.toneMappingExposure=1;const y=this;let T=!1,D=0,P=0,C=null,I=-1,st=null;const M=new Re,S=new Re;let W=null;const j=new de(0);let rt=0,pt=e.width,J=e.height,vt=1,et=null,Dt=null;const Mt=new Re(0,0,pt,J),_t=new Re(0,0,pt,J);let se=!1;const ce=new vl;let it=!1,dt=!1;const It=new Ae,Ut=new Ae,qt=new $,zt=new Re,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Qt(){return C===null?vt:1}let U=n;function xe(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",tt,!1),U===null){const k="webgl2";if(U=xe(k,A),U===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Gt,re,Ot,fe,$t,R,E,G,at,mt,z,Et,bt,ct,Lt,K,gt,At,kt,Tt,Ft,wt,le,N;function ht(){Gt=new Kg(U),Gt.init(),wt=new N_(U,Gt),re=new $g(U,Gt,t,wt),Ot=new D_(U),re.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),fe=new Qg(U),$t=new __,R=new U_(U,Gt,Ot,$t,re,wt,fe),E=new Xg(y),G=new jg(y),at=new op(U),le=new Vg(U,at),mt=new Zg(U,at,fe,le),z=new e0(U,mt,at,fe),kt=new t0(U,re,R),K=new Wg($t),Et=new g_(y,E,G,Gt,re,le,K),bt=new G_(y,$t),ct=new x_,Lt=new T_(Gt),At=new Hg(y,E,G,Ot,z,u,l),gt=new P_(y,z,re),N=new $_(U,fe,re,Ot),Tt=new Gg(U,Gt,fe),Ft=new Jg(U,Gt,fe),fe.programs=Et.programs,y.capabilities=re,y.extensions=Gt,y.properties=$t,y.renderLists=ct,y.shadowMap=gt,y.state=Ot,y.info=fe}ht();const Z=new H_(y,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(pt,J,!1))},this.getSize=function(A){return A.set(pt,J)},this.setSize=function(A,k,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=A,J=k,e.width=Math.floor(A*vt),e.height=Math.floor(k*vt),q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(pt*vt,J*vt).floor()},this.setDrawingBufferSize=function(A,k,q){pt=A,J=k,vt=q,e.width=Math.floor(A*q),e.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Mt)},this.setViewport=function(A,k,q,Y){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,k,q,Y),Ot.viewport(M.copy(Mt).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,k,q,Y){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,k,q,Y),Ot.scissor(S.copy(_t).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){Ot.setScissorTest(se=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(A=!0,k=!0,q=!0){let Y=0;if(A){let B=!1;if(C!==null){const St=C.texture.format;B=St===ml||St===pl||St===fl}if(B){const St=C.texture.type,Pt=St===Jn||St===ki||St===Qr||St===Er||St===hl||St===dl,Nt=At.getClearColor(),Bt=At.getClearAlpha(),Xt=Nt.r,Yt=Nt.g,Ht=Nt.b;Pt?(p[0]=Xt,p[1]=Yt,p[2]=Ht,p[3]=Bt,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=Xt,_[1]=Yt,_[2]=Ht,_[3]=Bt,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),ct.dispose(),Lt.dispose(),$t.dispose(),E.dispose(),G.dispose(),z.dispose(),le.dispose(),N.dispose(),Et.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Wi),Z.removeEventListener("sessionend",Pr),Bn.stop()};function O(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=fe.autoReset,k=gt.enabled,q=gt.autoUpdate,Y=gt.needsUpdate,B=gt.type;ht(),fe.autoReset=A,gt.enabled=k,gt.autoUpdate=q,gt.needsUpdate=Y,gt.type=B}function tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const k=A.target;k.removeEventListener("dispose",Wt),Kt(k)}function Kt(A){he(A),$t.remove(A)}function he(A){const k=$t.get(A).programs;k!==void 0&&(k.forEach(function(q){Et.releaseProgram(q)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,Y,B,St){k===null&&(k=ee);const Pt=B.isMesh&&B.matrixWorld.determinant()<0,Nt=xo(A,k,q,Y,B);Ot.setMaterial(Y,Pt);let Bt=q.index,Xt=1;if(Y.wireframe===!0){if(Bt=mt.getWireframeAttribute(q),Bt===void 0)return;Xt=2}const Yt=q.drawRange,Ht=q.attributes.position;let ge=Yt.start*Xt,ye=(Yt.start+Yt.count)*Xt;St!==null&&(ge=Math.max(ge,St.start*Xt),ye=Math.min(ye,(St.start+St.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),ye=Math.min(ye,Bt.count)):Ht!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,Ht.count));const Me=ye-ge;if(Me<0||Me===1/0)return;le.setup(B,Y,Nt,q,Bt);let Ze,pe=Tt;if(Bt!==null&&(Ze=at.get(Bt),pe=Ft,pe.setIndex(Ze)),B.isMesh)Y.wireframe===!0?(Ot.setLineWidth(Y.wireframeLinewidth*Qt()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(B.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),Ot.setLineWidth(Vt*Qt()),B.isLineSegments?pe.setMode(U.LINES):B.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else B.isPoints?pe.setMode(U.POINTS):B.isSprite&&pe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Vt=B._multiDrawStarts,ke=B._multiDrawCounts,ue=B._multiDrawCount,nn=Bt?at.get(Bt).bytesPerElement:1,ti=$t.get(Y).currentProgram.getUniforms();for(let Ie=0;Ie<ue;Ie++)ti.setValue(U,"_gl_DrawID",Ie),pe.render(Vt[Ie]/nn,ke[Ie])}else if(B.isInstancedMesh)pe.renderInstances(ge,Me,B.count);else if(q.isInstancedBufferGeometry){const Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ke=Math.min(q.instanceCount,Vt);pe.renderInstances(ge,Me,ke)}else pe.render(ge,Me)};function oe(A,k,q){A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,Rn(A,k,q),A.side=gi,A.needsUpdate=!0,Rn(A,k,q),A.side=jn):Rn(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),h=Lt.get(q),h.init(k),b.push(h),q.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),A!==q&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const Y=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const St=B.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Nt=St[Pt];oe(Nt,q,B),Y.add(Nt)}else oe(St,q,B),Y.add(St)}),b.pop(),h=null,Y},this.compileAsync=function(A,k,q=null){const Y=this.compile(A,k,q);return new Promise(B=>{function St(){if(Y.forEach(function(Pt){$t.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){B(A);return}setTimeout(St,10)}Gt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let De=null;function Ye(A){De&&De(A)}function Wi(){Bn.stop()}function Pr(){Bn.start()}const Bn=new Nu;Bn.setAnimationLoop(Ye),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(A){De=A,Z.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},Z.addEventListener("sessionstart",Wi),Z.addEventListener("sessionend",Pr),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,C),h=Lt.get(A,b.length),h.init(k),b.push(h),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(Ut),dt=this.localClippingEnabled,it=K.init(this.clippingPlanes,dt),x=ct.get(A,g.length),x.init(),g.push(x),Z.enabled===!0&&Z.isPresenting===!0){const St=y.xr.getDepthSensingMesh();St!==null&&Xi(St,k,-1/0,y.sortObjects)}Xi(A,k,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(et,Dt),ae=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ae&&At.addToRenderList(x,A),this.info.render.frame++,it===!0&&K.beginShadows();const q=h.state.shadowsArray;gt.render(q,A,k),it===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,B=x.transmissive;if(h.setupLights(),k.isArrayCamera){const St=k.cameras;if(B.length>0)for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Dr(Y,B,A,Bt)}ae&&At.render(A);for(let Pt=0,Nt=St.length;Pt<Nt;Pt++){const Bt=St[Pt];Lr(x,A,Bt,Bt.viewport)}}else B.length>0&&Dr(Y,B,A,k),ae&&At.render(A),Lr(x,A,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,k),le.resetDefaultState(),I=-1,st=null,b.pop(),b.length>0?(h=b[b.length-1],it===!0&&K.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Xi(A,k,q,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){Y&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Pt=z.update(A),Nt=A.material;Nt.visible&&x.push(A,Pt,Nt,q,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const Pt=z.update(A),Nt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Nt)){const Bt=Pt.groups;for(let Xt=0,Yt=Bt.length;Xt<Yt;Xt++){const Ht=Bt[Xt],ge=Nt[Ht.materialIndex];ge&&ge.visible&&x.push(A,Pt,ge,q,zt.z,Ht)}}else Nt.visible&&x.push(A,Pt,Nt,q,zt.z,null)}}const St=A.children;for(let Pt=0,Nt=St.length;Pt<Nt;Pt++)Xi(St[Pt],k,q,Y)}function Lr(A,k,q,Y){const B=A.opaque,St=A.transmissive,Pt=A.transparent;h.setupLightsView(q),it===!0&&K.setGlobalState(y.clippingPlanes,q),Y&&Ot.viewport(M.copy(Y)),B.length>0&&qi(B,k,q),St.length>0&&qi(St,k,q),Pt.length>0&&qi(Pt,k,q),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Dr(A,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Bi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ts:Jn,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const St=h.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||M;St.setSize(Pt.z,Pt.w);const Nt=y.getRenderTarget();y.setRenderTarget(St),y.getClearColor(j),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),ae&&At.render(q);const Bt=y.toneMapping;y.toneMapping=pi;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),it===!0&&K.setGlobalState(y.clippingPlanes,Y),qi(A,q,Y),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ht=0,ge=k.length;Ht<ge;Ht++){const ye=k[Ht],Me=ye.object,Ze=ye.geometry,pe=ye.material,Vt=ye.group;if(pe.side===jn&&Me.layers.test(Y.layers)){const ke=pe.side;pe.side=an,pe.needsUpdate=!0,rs(Me,q,Y,Ze,pe,Vt),pe.side=ke,pe.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}y.setRenderTarget(Nt),y.setClearColor(j,rt),Xt!==void 0&&(Y.viewport=Xt),y.toneMapping=Bt}function qi(A,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let B=0,St=A.length;B<St;B++){const Pt=A[B],Nt=Pt.object,Bt=Pt.geometry,Xt=Y===null?Pt.material:Y,Yt=Pt.group;Nt.layers.test(q.layers)&&rs(Nt,k,q,Bt,Xt,Yt)}}function rs(A,k,q,Y,B,St){A.onBeforeRender(y,k,q,Y,B,St),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,k,q,Y,A,St),B.transparent===!0&&B.side===jn&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,y.renderBufferDirect(q,k,Y,B,A,St),B.side=gi,B.needsUpdate=!0,y.renderBufferDirect(q,k,Y,B,A,St),B.side=jn):y.renderBufferDirect(q,k,Y,B,A,St),A.onAfterRender(y,k,q,Y,B,St)}function Rn(A,k,q){k.isScene!==!0&&(k=ee);const Y=$t.get(A),B=h.state.lights,St=h.state.shadowsArray,Pt=B.state.version,Nt=Et.getParameters(A,B.state,St,k,q),Bt=Et.getProgramCacheKey(Nt);let Xt=Y.programs;Y.environment=A.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Wt),Xt=new Map,Y.programs=Xt);let Yt=Xt.get(Bt);if(Yt!==void 0){if(Y.currentProgram===Yt&&Y.lightsStateVersion===Pt)return Qn(A,Nt),Yt}else Nt.uniforms=Et.getUniforms(A),A.onBeforeCompile(Nt,y),Yt=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Yt),Y.uniforms=Nt.uniforms;const Ht=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=K.uniform),Qn(A,Nt),Y.needsLights=yi(A),Y.lightsStateVersion=Pt,Y.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Yt,Y.uniformsList=null,Yt}function Yi(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Qn(A,k){const q=$t.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function xo(A,k,q,Y,B){k.isScene!==!0&&(k=ee),R.resetTextureUnits();const St=k.fog,Pt=Y.isMeshStandardMaterial?k.environment:null,Nt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xi,Bt=(Y.isMeshStandardMaterial?G:E).get(Y.envMap||Pt),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Yt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!q.morphAttributes.position,ge=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color;let Me=pi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=y.toneMapping);const Ze=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=Ze!==void 0?Ze.length:0,Vt=$t.get(Y),ke=h.state.lights;if(it===!0&&(dt===!0||A!==st)){const rn=A===st&&Y.id===I;K.setState(Y,A,rn)}let ue=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ke.state.version||Vt.outputColorSpace!==Nt||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isBatchedMesh&&Vt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Vt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==Bt||Y.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==K.numPlanes||Vt.numIntersection!==K.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Yt||Vt.morphTargets!==Ht||Vt.morphNormals!==ge||Vt.morphColors!==ye||Vt.toneMapping!==Me||Vt.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,Vt.__version=Y.version);let nn=Vt.currentProgram;ue===!0&&(nn=Rn(Y,k,B));let ti=!1,Ie=!1,ei=!1;const Ee=nn.getUniforms(),_n=Vt.uniforms;if(Ot.useProgram(nn.program)&&(ti=!0,Ie=!0,ei=!0),Y.id!==I&&(I=Y.id,Ie=!0),ti||st!==A){re.reverseDepthBuffer?(It.copy(A.projectionMatrix),Uf(It),Nf(It),Ee.setValue(U,"projectionMatrix",It)):Ee.setValue(U,"projectionMatrix",A.projectionMatrix),Ee.setValue(U,"viewMatrix",A.matrixWorldInverse);const rn=Ee.map.cameraPosition;rn!==void 0&&rn.setValue(U,qt.setFromMatrixPosition(A.matrixWorld)),re.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),st!==A&&(st=A,Ie=!0,ei=!0)}if(B.isSkinnedMesh){Ee.setOptional(U,B,"bindMatrix"),Ee.setOptional(U,B,"bindMatrixInverse");const rn=B.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ee.setValue(U,"boneTexture",rn.boneTexture,R))}B.isBatchedMesh&&(Ee.setOptional(U,B,"batchingTexture"),Ee.setValue(U,"batchingTexture",B._matricesTexture,R),Ee.setOptional(U,B,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",B._indirectTexture,R),Ee.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",B._colorsTexture,R));const Je=q.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&kt.update(B,q,nn),(Ie||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Ee.setValue(U,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_n.envMap.value=Bt,_n.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),Ie&&(Ee.setValue(U,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&yo(_n,ei),St&&Y.fog===!0&&bt.refreshFogUniforms(_n,St),bt.refreshMaterialUniforms(_n,Y,vt,J,h.state.transmissionRenderTarget[A.id]),Xs.upload(U,Yi(Vt),_n,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xs.upload(U,Yi(Vt),_n,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(U,"center",B.center),Ee.setValue(U,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(U,"normalMatrix",B.normalMatrix),Ee.setValue(U,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const rn=Y.uniformsGroups;for(let ji=0,ss=rn.length;ji<ss;ji++){const Mi=rn[ji];N.update(Mi,nn),N.bind(Mi,nn)}}return nn}function yo(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function yi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,q){$t.get(A.texture).__webglTexture=k,$t.get(A.depthTexture).__webglTexture=q;const Y=$t.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const q=$t.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){C=A,D=k,P=q;let Y=!0,B=null,St=!1,Pt=!1;if(A){const Bt=$t.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Bt.__hasExternalTextures)R.rebindTextures(A,$t.get(A.texture).__webglTexture,$t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ht=A.depthTexture;if(Bt.__boundDepthTexture!==Ht){if(Ht!==null&&$t.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const Yt=$t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?B=Yt[k][q]:B=Yt[k],St=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=$t.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?B=Yt[q]:B=Yt,M.copy(A.viewport),S.copy(A.scissor),W=A.scissorTest}else M.copy(Mt).multiplyScalar(vt).floor(),S.copy(_t).multiplyScalar(vt).floor(),W=se;if(Ot.bindFramebuffer(U.FRAMEBUFFER,B)&&Y&&Ot.drawBuffers(A,B),Ot.viewport(M),Ot.scissor(S),Ot.setScissorTest(W),St){const Bt=$t.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,q)}else if(Pt){const Bt=$t.get(A.texture),Xt=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,q||0,Xt)}I=-1},this.readRenderTargetPixels=function(A,k,q,Y,B,St,Pt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Ot.bindFramebuffer(U.FRAMEBUFFER,Nt);try{const Bt=A.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&q>=0&&q<=A.height-B&&U.readPixels(k,q,Y,B,wt.convert(Xt),wt.convert(Yt),St)}finally{const Bt=C!==null?$t.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,Y,B,St,Pt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){const Bt=A.texture,Xt=Bt.format,Yt=Bt.type;if(!re.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-Y&&q>=0&&q<=A.height-B){Ot.bindFramebuffer(U.FRAMEBUFFER,Nt);const Ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(k,q,Y,B,wt.convert(Xt),wt.convert(Yt),0);const ge=C!==null?$t.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(U.FRAMEBUFFER,ge);const ye=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await If(U,ye,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.deleteBuffer(Ht),U.deleteSync(ye),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,q=0){A.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-q),B=Math.floor(A.image.width*Y),St=Math.floor(A.image.height*Y),Pt=k!==null?k.x:0,Nt=k!==null?k.y:0;R.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Pt,Nt,B,St),Ot.unbindTexture()},this.copyTextureToTexture=function(A,k,q=null,Y=null,B=0){A.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,q=null);let St,Pt,Nt,Bt,Xt,Yt;q!==null?(St=q.max.x-q.min.x,Pt=q.max.y-q.min.y,Nt=q.min.x,Bt=q.min.y):(St=A.image.width,Pt=A.image.height,Nt=0,Bt=0),Y!==null?(Xt=Y.x,Yt=Y.y):(Xt=0,Yt=0);const Ht=wt.convert(k.format),ge=wt.convert(k.type);R.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ye=U.getParameter(U.UNPACK_ROW_LENGTH),Me=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ze=U.getParameter(U.UNPACK_SKIP_PIXELS),pe=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES),ke=A.isCompressedTexture?A.mipmaps[B]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ke.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ke.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,ke.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Xt,Yt,ke.width,ke.height,Ht,ke.data):U.texSubImage2D(U.TEXTURE_2D,B,Xt,Yt,St,Pt,Ht,ge,ke),U.pixelStorei(U.UNPACK_ROW_LENGTH,ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),B===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q=null,Y=null,B=0){A.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0);let St,Pt,Nt,Bt,Xt,Yt,Ht,ge,ye;const Me=A.isCompressedTexture?A.mipmaps[B]:A.image;q!==null?(St=q.max.x-q.min.x,Pt=q.max.y-q.min.y,Nt=q.max.z-q.min.z,Bt=q.min.x,Xt=q.min.y,Yt=q.min.z):(St=Me.width,Pt=Me.height,Nt=Me.depth,Bt=0,Xt=0,Yt=0),Y!==null?(Ht=Y.x,ge=Y.y,ye=Y.z):(Ht=0,ge=0,ye=0);const Ze=wt.convert(k.format),pe=wt.convert(k.type);let Vt;if(k.isData3DTexture)R.setTexture3D(k,0),Vt=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Vt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ke=U.getParameter(U.UNPACK_ROW_LENGTH),ue=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),ti=U.getParameter(U.UNPACK_SKIP_ROWS),Ie=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ze,pe,Me.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ze,Me.data):U.texSubImage3D(Vt,B,Ht,ge,ye,St,Pt,Nt,Ze,pe,Me),U.pixelStorei(U.UNPACK_ROW_LENGTH,ke),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ti),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),B===0&&k.generateMipmaps&&U.generateMipmap(Vt),Ot.unbindTexture()},this.initRenderTarget=function(A){$t.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){D=0,P=0,C=null,Ot.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gl?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===ho?"display-p3":"srgb"}}class W_ extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vu extends Rr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const io=new $,ro=new $,Dc=new Ae,Vr=new _l,Ls=new fo,la=new $,Ic=new $;class X_ extends Xe{constructor(t=new kn,e=new Vu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)io.fromBufferAttribute(e,r-1),ro.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=io.distanceTo(ro);t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,t.ray.intersectsSphere(Ls)===!1)return;Dc.copy(r).invert(),Vr.copy(t.ray).applyMatrix4(Dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,h=_-1;x<h;x+=c){const g=d.getX(x),b=d.getX(x+1),y=Ds(this,t,Vr,l,g,b);y&&e.push(y)}if(this.isLineLoop){const x=d.getX(_-1),h=d.getX(p),g=Ds(this,t,Vr,l,x,h);g&&e.push(g)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=p,h=_-1;x<h;x+=c){const g=Ds(this,t,Vr,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Ds(this,t,Vr,l,_-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ds(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(io.fromBufferAttribute(a,r),ro.fromBufferAttribute(a,s),e.distanceSqToSegment(io,ro,la,Ic)>n)return;la.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(la);if(!(l<t.near||l>t.far))return{distance:l,point:Ic.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Uc=new $,Nc=new $;class q_ extends X_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Uc.fromBufferAttribute(e,r),Nc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uc.distanceTo(Nc);t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Is=new $,Us=new $,ca=new $,Ns=new pn;class Y_ extends kn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(qr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:h,c:g}=Ns;if(x.fromBufferAttribute(o,c[0]),h.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ns.getNormal(ca),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,f[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const y=(b+1)%3,T=f[b],D=f[y],P=Ns[d[b]],C=Ns[d[y]],I=`${T}_${D}`,st=`${D}_${T}`;st in u&&u[st]?(ca.dot(u[st].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(C.x,C.y,C.z)),u[st]=null):I in u||(u[I]={index0:c[b],index1:c[y],normal:ca.clone()})}}for(const _ in u)if(u[_]){const{index0:x,index1:h}=u[_];Is.fromBufferAttribute(o,x),Us.fromBufferAttribute(o,h),p.push(Is.x,Is.y,Is.z),p.push(Us.x,Us.y,Us.z)}this.setAttribute("position",new Nn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class j_ extends Rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gu extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class K_ extends Gu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new Ae,Fc=new $,Oc=new $;class Z_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class J_ extends Z_{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kc extends Gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q_ extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const zc={type:"change"},Ml={type:"start"},$u={type:"end"},Fs=new _l,Hc=new ci,tv=Math.cos(70*Lf.DEG2RAD),Be=new $,on=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ha=1e-6;class ev extends Q_{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new zi,this._lastTargetPosition=new $,this._quat=new zi().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bc,this._sphericalDelta=new Bc,this._scale=1,this._panOffset=new $,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new $,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=rv.bind(this),this._onContextMenu=hv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=uv.bind(this),this._onMouseDown=sv.bind(this),this._onMouseMove=ov.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zc),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Be.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fs.origin.copy(this.object.position),Fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fs.direction))<tv?this.object.lookAt(this.target):(Hc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fs.intersectPlane(Hc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ha||this._lastTargetPosition.distanceToSquared(this.target)>ha?(this.dispatchEvent(zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Be.copy(r).sub(this.target);let s=Be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case gr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case gr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ml)}function ov(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function av(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($u))}function lv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ml)}function uv(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function hv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pv="modulepreload",mv=function(i,t){return new URL(i,t).href},Vc={},gv=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(e.map(c=>{if(c=mv(c,n),c in Vc)return;Vc[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const x=a[_];if(x.href===c&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":pv,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((_,x)=>{p.addEventListener("load",_),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var _v=(()=>{var i=import.meta.url;return async function(t={}){var e,n=t,r,s,a=new Promise((m,v)=>{r=m,s=v}),o=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:m}=await gv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var d=m(import.meta.url)}var f=!1;n.setup=function(){if(f)return;f=!0,n.initTBB();function m(F,X,lt=yt=>yt){if(X)for(let yt of X)F.push_back(lt(yt));return F}function v(F,X=lt=>lt){const lt=[],yt=F.size();for(let jt=0;jt<yt;jt++)lt.push(X(F.get(jt)));return lt}function w(F,X=lt=>lt){const lt=[],yt=F.size();for(let jt=0;jt<yt;jt++){const Te=F.get(jt),Ce=Te.size(),cn=[];for(let $e=0;$e<Ce;$e++)cn.push(X(Te.get($e)));lt.push(cn)}return lt}function L(F){return F[0].length<3&&(F=[F]),m(new n.Vector2_vec2,F,X=>m(new n.Vector_vec2,X,lt=>lt instanceof Array?{x:lt[0],y:lt[1]}:lt))}function V(F){for(let X=0;X<F.size();X++)F.get(X).delete();F.delete()}function Q(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0}:F[0]}function ut(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1],z:F[0][2]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0,z:F[2]||0}:F[0]}function nt(F){return F=="EvenOdd"?0:F=="NonZero"?1:F=="Negative"?3:2}function ft(F){return F=="Round"?1:F=="Miter"?2:0}const xt=n.CrossSection;function Rt(F,X="Positive"){if(F instanceof xt)return F;{const lt=L(F),yt=new xt(lt,nt(X));return V(lt),yt}}n.CrossSection.prototype.translate=function(...F){return this._Translate(Q(F))},n.CrossSection.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F}):this._Scale(Q([F]))},n.CrossSection.prototype.mirror=function(F){return this._Mirror(Q([F]))},n.CrossSection.prototype.warp=function(F){const X=Ir(function(yt){const jt=G(yt,"double"),Te=G(yt+8,"double"),Ce=[jt,Te];F(Ce),at(yt,Ce[0],"double"),at(yt+8,Ce[1],"double")},"vi"),lt=this._Warp(X);return Ur(X),lt},n.CrossSection.prototype.decompose=function(){const F=this._Decompose(),X=v(F);return F.delete(),X},n.CrossSection.prototype.bounds=function(){const F=this._Bounds();return{min:["x","y"].map(X=>F.min[X]),max:["x","y"].map(X=>F.max[X])}},n.CrossSection.prototype.offset=function(F,X="Square",lt=2,yt=0){return this._Offset(F,ft(X),lt,yt)},n.CrossSection.prototype.extrude=function(F,X=0,lt=0,yt=[1,1],jt=!1){yt=Q([yt]);const Te=n._Extrude(this._ToPolygons(),F,X,lt,yt);return jt?Te.translate([0,0,-F/2]):Te},n.CrossSection.prototype.revolve=function(F=0,X=360){return n._Revolve(this._ToPolygons(),F,X)},n.CrossSection.prototype.add=function(F){return this._add(Rt(F))},n.CrossSection.prototype.subtract=function(F){return this._subtract(Rt(F))},n.CrossSection.prototype.intersect=function(F){return this._intersect(Rt(F))},n.CrossSection.prototype.toPolygons=function(){const F=this._ToPolygons(),X=w(F,lt=>[lt.x,lt.y]);return F.delete(),X},n.Manifold.prototype.smoothOut=function(F=60,X=0){return this._SmoothOut(F,X)},n.Manifold.prototype.warp=function(F){const X=Ir(function(jt){const Te=G(jt,"double"),Ce=G(jt+8,"double"),cn=G(jt+16,"double"),$e=[Te,Ce,cn];F($e),at(jt,$e[0],"double"),at(jt+8,$e[1],"double"),at(jt+16,$e[2],"double")},"vi"),lt=this._Warp(X);Ur(X);const yt=lt.status();if(yt.value!==0)throw new n.ManifoldError(yt.value);return lt},n.Manifold.prototype.calculateNormals=function(F,X=60){return this._CalculateNormals(F,X)},n.Manifold.prototype.setProperties=function(F,X){const lt=this.numProp(),yt=Ir(function(Te,Ce,cn){const $e=[];for(let Pe=0;Pe<F;++Pe)$e[Pe]=G(Te+8*Pe,"double");const Ki=[];for(let Pe=0;Pe<3;++Pe)Ki[Pe]=G(Ce+8*Pe,"double");const Zi=[];for(let Pe=0;Pe<lt;++Pe)Zi[Pe]=G(cn+8*Pe,"double");X($e,Ki,Zi);for(let Pe=0;Pe<F;++Pe)at(Te+8*Pe,$e[Pe],"double")},"viii"),jt=this._SetProperties(F,yt);return Ur(yt),jt},n.Manifold.prototype.translate=function(...F){return this._Translate(ut(F))},n.Manifold.prototype.rotate=function(F,X,lt){return Array.isArray(F)?this._Rotate(...F):this._Rotate(F,X||0,lt||0)},n.Manifold.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F,z:F}):this._Scale(ut([F]))},n.Manifold.prototype.mirror=function(F){return this._Mirror(ut([F]))},n.Manifold.prototype.trimByPlane=function(F,X=0){return this._TrimByPlane(ut([F]),X)},n.Manifold.prototype.slice=function(F=0){const X=this._Slice(F),lt=new xt(X,nt("Positive"));return V(X),lt},n.Manifold.prototype.project=function(){const F=this._Project(),X=new xt(F,nt("Positive"));return V(F),X},n.Manifold.prototype.split=function(F){const X=this._Split(F),lt=v(X);return X.delete(),lt},n.Manifold.prototype.splitByPlane=function(F,X=0){const lt=this._SplitByPlane(ut([F]),X),yt=v(lt);return lt.delete(),yt},n.Manifold.prototype.decompose=function(){const F=this._Decompose(),X=v(F);return F.delete(),X},n.Manifold.prototype.boundingBox=function(){const F=this._boundingBox();return{min:["x","y","z"].map(X=>F.min[X]),max:["x","y","z"].map(X=>F.max[X])}};class Zt{constructor({numProp:X=3,triVerts:lt=new Uint32Array,vertProperties:yt=new Float32Array,mergeFromVert:jt,mergeToVert:Te,runIndex:Ce,runOriginalID:cn,faceID:$e,halfedgeTangent:Ki,runTransform:Zi}={}){this.numProp=X,this.triVerts=lt,this.vertProperties=yt,this.mergeFromVert=jt,this.mergeToVert=Te,this.runIndex=Ce,this.runOriginalID=cn,this.faceID=$e,this.halfedgeTangent=Ki,this.runTransform=Zi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:X,mesh:lt}=n._Merge(this);return Object.assign(this,{...lt}),X}verts(X){return this.triVerts.subarray(3*X,3*(X+1))}position(X){return this.vertProperties.subarray(this.numProp*X,this.numProp*X+3)}extras(X){return this.vertProperties.subarray(this.numProp*X+3,this.numProp*(X+1))}tangent(X){return this.halfedgeTangent.subarray(4*X,4*(X+1))}transform(X){const lt=new Array(16);for(const yt of[0,1,2,3])for(const jt of[0,1,2])lt[4*yt+jt]=this.runTransform[12*X+3*yt+jt];return lt[15]=1,lt}}n.Mesh=Zt,n.Manifold.prototype.getMesh=function(F=-1){return new Zt(this._GetMeshJS(F))},n.ManifoldError=function(X,...lt){let yt="Unknown error";switch(X){case n.status.NonFiniteVertex.value:yt="Non-finite vertex";break;case n.status.NotManifold.value:yt="Not manifold";break;case n.status.VertexOutOfBounds.value:yt="Vertex index out of bounds";break;case n.status.PropertiesWrongLength.value:yt="Properties have wrong length";break;case n.status.MissingPositionProperties.value:yt="Less than three properties";break;case n.status.MergeVectorsDifferentLengths.value:yt="Merge vectors have different lengths";break;case n.status.MergeIndexOutOfBounds.value:yt="Merge index out of bounds";break;case n.status.TransformWrongLength.value:yt="Transform vector has wrong length";break;case n.status.RunIndexWrongLength.value:yt="Run index vector has wrong length";break;case n.status.FaceIDWrongLength.value:yt="Face ID vector has wrong length";case n.status.InvalidConstruction.value:yt="Manifold constructed with invalid parameters"}const jt=Error.apply(this,[yt,...lt]);jt.name=this.name="ManifoldError",this.message=jt.message,this.stack=jt.stack,this.code=X},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(F,X="Positive"){const lt=L(F),yt=new xt(lt,nt(X));return V(lt),yt},n.CrossSection.ofPolygons=function(F,X="Positive"){return new n.CrossSection(F,X)},n.CrossSection.square=function(...F){let X;F.length==0?X={x:1,y:1}:typeof F[0]=="number"?X={x:F[0],y:F[0]}:X=Q(F);const lt=F[1]||!1;return n._Square(X,lt)},n.CrossSection.circle=function(F,X=0){return n._Circle(F,X)};function me(F){return function(...X){X.length==1&&(X=X[0]);const lt=new n.Vector_crossSection;for(const jt of X)lt.push_back(Rt(jt));const yt=n["_crossSection"+F](lt);return lt.delete(),yt}}n.CrossSection.compose=me("Compose"),n.CrossSection.union=me("UnionN"),n.CrossSection.difference=me("DifferenceN"),n.CrossSection.intersection=me("IntersectionN");function Ue(F,X){m(F,X,lt=>lt instanceof Array?{x:lt[0],y:lt[1]}:lt)}n.CrossSection.hull=function(...F){F.length==1&&(F=F[0]);let X=new n.Vector_vec2;for(const yt of F)if(yt instanceof xt)n._crossSectionCollectVertices(X,yt);else if(yt instanceof Array&&yt.length==2&&typeof yt[0]=="number")X.push_back({x:yt[0],y:yt[1]});else if(yt.x)X.push_back(yt);else{const Te=yt[0].length==2&&typeof yt[0][0]=="number"||yt[0].x?[yt]:yt;for(const Ce of Te)Ue(X,Ce)}const lt=n._crossSectionHullPoints(X);return X.delete(),lt},n.CrossSection.prototype=Object.create(xt.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>F=>F instanceof xt});const we=n.Manifold;n.Manifold=function(F){const X=new we(F),lt=X.status();if(lt.value!==0)throw new n.ManifoldError(lt.value);return X},n.Manifold.ofMesh=function(F){return new n.Manifold(F)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...F){let X;F.length==0?X={x:1,y:1,z:1}:typeof F[0]=="number"?X={x:F[0],y:F[0],z:F[0]}:X=ut(F);const lt=F[1]||!1;return n._Cube(X,lt)},n.Manifold.cylinder=function(F,X,lt=-1,yt=0,jt=!1){return n._Cylinder(F,X,lt,yt,jt)},n.Manifold.sphere=function(F,X=0){return n._Sphere(F,X)},n.Manifold.smooth=function(F,X=[]){const lt=new n.Vector_smoothness;m(lt,X);const yt=n._Smooth(F,lt);return lt.delete(),yt},n.Manifold.extrude=function(F,X,lt=0,yt=0,jt=[1,1],Te=!1){return(F instanceof xt?F:n.CrossSection(F,"Positive")).extrude(X,lt,yt,jt,Te)},n.Manifold.revolve=function(F,X=0,lt=360){return(F instanceof xt?F:n.CrossSection(F,"Positive")).revolve(X,lt)},n.Manifold.reserveIDs=function(F){return n._ReserveIDs(F)},n.Manifold.compose=function(F){const X=new n.Vector_manifold;m(X,F);const lt=n._manifoldCompose(X);return X.delete(),lt};function xn(F){return function(...X){X.length==1&&(X=X[0]);const lt=new n.Vector_manifold;for(const jt of X)lt.push_back(jt);const yt=n["_manifold"+F+"N"](lt);return lt.delete(),yt}}n.Manifold.union=xn("Union"),n.Manifold.difference=xn("Difference"),n.Manifold.intersection=xn("Intersection"),n.Manifold.levelSet=function(F,X,lt,yt=0,jt=-1){const Te={min:{x:X.min[0],y:X.min[1],z:X.min[2]},max:{x:X.max[0],y:X.max[1],z:X.max[2]}},Ce=Ir(function($e){const Ki=G($e,"double"),Zi=G($e+8,"double"),Pe=G($e+16,"double");return F([Ki,Zi,Pe])},"di"),cn=n._LevelSet(Ce,Te,lt,yt,jt);return Ur(Ce),cn};function yn(F,X){m(F,X,lt=>lt instanceof Array?{x:lt[0],y:lt[1],z:lt[2]}:lt)}n.Manifold.hull=function(...F){F.length==1&&(F=F[0]);let X=new n.Vector_vec3;for(const yt of F)yt instanceof we?n._manifoldCollectVertices(X,yt):yt instanceof Array&&yt.length==3&&typeof yt[0]=="number"?X.push_back({x:yt[0],y:yt[1],z:yt[2]}):yt.x?X.push_back(yt):yn(X,yt);const lt=n._manifoldHullPoints(X);return X.delete(),lt},n.Manifold.prototype=Object.create(we.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>F=>F instanceof we}),n.triangulate=function(F,X=-1){const lt=L(F),yt=v(n._Triangulate(lt,X),jt=>[jt[0],jt[1],jt[2]]);return V(lt),yt}};var u=Object.assign({},n),p="";function _(m){return n.locateFile?n.locateFile(m,p):p+m}var x,h;if(c){var g=d("fs"),b=d("path");p=d("url").fileURLToPath(new URL(""+new URL("manifold-BrJGmODQ.js",import.meta.url).href,import.meta.url)),h=m=>{m=Qt(m)?new URL(m):b.normalize(m);var v=g.readFileSync(m);return v},x=(m,v=!0)=>(m=Qt(m)?new URL(m):b.normalize(m),new Promise((w,L)=>{g.readFile(m,v?void 0:"utf8",(V,Q)=>{V?L(V):w(v?Q.buffer:Q)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),i&&(p=i),p.startsWith("blob:")?p="":p=p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(h=m=>{var v=new XMLHttpRequest;return v.open("GET",m,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),x=m=>Qt(m)?new Promise((v,w)=>{var L=new XMLHttpRequest;L.open("GET",m,!0),L.responseType="arraybuffer",L.onload=()=>{(L.status==200||L.status==0&&L.response)&&w(L.response),v(L.status)},L.onerror=v,L.send(null)}):fetch(m,{credentials:"same-origin"}).then(v=>v.ok?v.arrayBuffer():Promise.reject(new Error(v.status+" : "+v.url))));n.print||console.log.bind(console);var y=n.printErr||console.error.bind(console);Object.assign(n,u),u=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var T;n.wasmBinary&&(T=n.wasmBinary);var D,P=!1,C,I,st,M,S,W,j,rt;function pt(){var m=D.buffer;n.HEAP8=C=new Int8Array(m),n.HEAP16=st=new Int16Array(m),n.HEAPU8=I=new Uint8Array(m),n.HEAPU16=M=new Uint16Array(m),n.HEAP32=S=new Int32Array(m),n.HEAPU32=W=new Uint32Array(m),n.HEAPF32=j=new Float32Array(m),n.HEAPF64=rt=new Float64Array(m)}var J=[],vt=[],et=[];function Dt(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)se(n.preRun.shift());E(J)}function Mt(){E(vt)}function _t(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)it(n.postRun.shift());E(et)}function se(m){J.unshift(m)}function ce(m){vt.unshift(m)}function it(m){et.unshift(m)}var dt=0,It=null;function Ut(m){dt++,n.monitorRunDependencies?.(dt)}function qt(m){if(dt--,n.monitorRunDependencies?.(dt),dt==0&&It){var v=It;It=null,v()}}function zt(m){n.onAbort?.(m),m="Aborted("+m+")",y(m),P=!0,m+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(m);throw s(v),v}var ee="data:application/octet-stream;base64,",ae=m=>m.startsWith(ee),Qt=m=>m.startsWith("file://");function U(){if(n.locateFile){var m="manifold.wasm";return ae(m)?m:_(m)}return new URL(""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,import.meta.url).href}var xe;function Gt(m){if(m==xe&&T)return new Uint8Array(T);if(h)return h(m);throw"both async and sync fetching of the wasm failed"}function re(m){return T?Promise.resolve().then(()=>Gt(m)):x(m).then(v=>new Uint8Array(v),()=>Gt(m))}function Ot(m,v,w){return re(m).then(L=>WebAssembly.instantiate(L,v)).then(w,L=>{y(`failed to asynchronously prepare wasm: ${L}`),zt(L)})}function fe(m,v,w,L){return!m&&typeof WebAssembly.instantiateStreaming=="function"&&!ae(v)&&!Qt(v)&&!c&&typeof fetch=="function"?fetch(v,{credentials:"same-origin"}).then(V=>{var Q=WebAssembly.instantiateStreaming(V,w);return Q.then(L,function(ut){return y(`wasm streaming compile failed: ${ut}`),y("falling back to ArrayBuffer instantiation"),Ot(v,w,L)})}):Ot(v,w,L)}function $t(){return{a:nd}}function R(){var m=$t();function v(L,V){return vn=L.exports,vn=id(vn),D=vn.J,pt(),Ie=vn.M,ce(vn.K),qt(),vn}Ut();function w(L){v(L.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(m,v)}catch(L){y(`Module.instantiateWasm callback failed with error: ${L}`),s(L)}return xe||(xe=U()),fe(T,xe,m,w).catch(s),{}}var E=m=>{for(;m.length>0;)m.shift()(n)};function G(m,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":return C[m>>>0];case"i8":return C[m>>>0];case"i16":return st[m>>>1>>>0];case"i32":return S[m>>>2>>>0];case"i64":zt("to do getValue(i64) use WASM_BIGINT");case"float":return j[m>>>2>>>0];case"double":return rt[m>>>3>>>0];case"*":return W[m>>>2>>>0];default:zt(`invalid type for getValue: ${v}`)}}n.noExitRuntime;function at(m,v,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":C[m>>>0]=v;break;case"i8":C[m>>>0]=v;break;case"i16":st[m>>>1>>>0]=v;break;case"i32":S[m>>>2>>>0]=v;break;case"i64":zt("to do setValue(i64) use WASM_BIGINT");case"float":j[m>>>2>>>0]=v;break;case"double":rt[m>>>3>>>0]=v;break;case"*":W[m>>>2>>>0]=v;break;default:zt(`invalid type for setValue: ${w}`)}}class mt{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){W[this.ptr+4>>>2>>>0]=v}get_type(){return W[this.ptr+4>>>2>>>0]}set_destructor(v){W[this.ptr+8>>>2>>>0]=v}get_destructor(){return W[this.ptr+8>>>2>>>0]}set_caught(v){v=v?1:0,C[this.ptr+12>>>0]=v}get_caught(){return C[this.ptr+12>>>0]!=0}set_rethrown(v){v=v?1:0,C[this.ptr+13>>>0]=v}get_rethrown(){return C[this.ptr+13>>>0]!=0}init(v,w){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(w)}set_adjusted_ptr(v){W[this.ptr+16>>>2>>>0]=v}get_adjusted_ptr(){return W[this.ptr+16>>>2>>>0]}get_exception_ptr(){var v=Ul(this.get_type());if(v)return W[this.excPtr>>>2>>>0];var w=this.get_adjusted_ptr();return w!==0?w:this.excPtr}}var z=0;function Et(m,v,w){m>>>=0,v>>>=0,w>>>=0;var L=new mt(m);throw L.init(v,w),z=m,z}var bt=()=>{zt("")},ct={},Lt=m=>{for(;m.length;){var v=m.pop(),w=m.pop();w(v)}};function K(m){return this.fromWireType(W[m>>>2>>>0])}var gt={},At={},kt={},Tt,Ft=m=>{throw new Tt(m)},wt=(m,v,w)=>{m.forEach(function(nt){kt[nt]=v});function L(nt){var ft=w(nt);ft.length!==m.length&&Ft("Mismatched type converter count");for(var xt=0;xt<m.length;++xt)Kt(m[xt],ft[xt])}var V=new Array(v.length),Q=[],ut=0;v.forEach((nt,ft)=>{At.hasOwnProperty(nt)?V[ft]=At[nt]:(Q.push(nt),gt.hasOwnProperty(nt)||(gt[nt]=[]),gt[nt].push(()=>{V[ft]=At[nt],++ut,ut===Q.length&&L(V)}))}),Q.length===0&&L(V)},le=function(m){m>>>=0;var v=ct[m];delete ct[m];var w=v.rawConstructor,L=v.rawDestructor,V=v.fields,Q=V.map(ut=>ut.getterReturnType).concat(V.map(ut=>ut.setterArgumentType));wt([m],Q,ut=>{var nt={};return V.forEach((ft,xt)=>{var Rt=ft.fieldName,Zt=ut[xt],me=ft.getter,Ue=ft.getterContext,we=ut[xt+V.length],xn=ft.setter,yn=ft.setterContext;nt[Rt]={read:F=>Zt.fromWireType(me(Ue,F)),write:(F,X)=>{var lt=[];xn(yn,F,we.toWireType(lt,X)),Lt(lt)}}}),[{name:v.name,fromWireType:ft=>{var xt={};for(var Rt in nt)xt[Rt]=nt[Rt].read(ft);return L(ft),xt},toWireType:(ft,xt)=>{for(var Rt in nt)if(!(Rt in xt))throw new TypeError(`Missing field: "${Rt}"`);var Zt=w();for(Rt in nt)nt[Rt].write(Zt,xt[Rt]);return ft!==null&&ft.push(L,Zt),Zt},argPackAdvance:he,readValueFromPointer:K,destructorFunction:L}]})};function N(m,v,w,L,V){}var ht=()=>{for(var m=new Array(256),v=0;v<256;++v)m[v]=String.fromCharCode(v);Z=m},Z,O=m=>{for(var v="",w=m;I[w>>>0];)v+=Z[I[w++>>>0]];return v},ot,tt=m=>{throw new ot(m)};function Wt(m,v,w={}){var L=v.name;if(m||tt(`type "${L}" must have a positive integer typeid pointer`),At.hasOwnProperty(m)){if(w.ignoreDuplicateRegistrations)return;tt(`Cannot register type '${L}' twice`)}if(At[m]=v,delete kt[m],gt.hasOwnProperty(m)){var V=gt[m];delete gt[m],V.forEach(Q=>Q())}}function Kt(m,v,w={}){if(!("argPackAdvance"in v))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Wt(m,v,w)}var he=8;function oe(m,v,w,L){m>>>=0,v>>>=0,v=O(v),Kt(m,{name:v,fromWireType:function(V){return!!V},toWireType:function(V,Q){return Q?w:L},argPackAdvance:he,readValueFromPointer:function(V){return this.fromWireType(I[V>>>0])},destructorFunction:null})}var De=m=>({count:m.count,deleteScheduled:m.deleteScheduled,preservePointerOnDelete:m.preservePointerOnDelete,ptr:m.ptr,ptrType:m.ptrType,smartPtr:m.smartPtr,smartPtrType:m.smartPtrType}),Ye=m=>{function v(w){return w.$$.ptrType.registeredClass.name}tt(v(m)+" instance already deleted")},Wi=!1,Pr=m=>{},Bn=m=>{m.smartPtr?m.smartPtrType.rawDestructor(m.smartPtr):m.ptrType.registeredClass.rawDestructor(m.ptr)},Xi=m=>{m.count.value-=1;var v=m.count.value===0;v&&Bn(m)},Lr=(m,v,w)=>{if(v===w)return m;if(w.baseClass===void 0)return null;var L=Lr(m,v,w.baseClass);return L===null?null:w.downcast(L)},Dr={},qi=()=>Object.keys(yi).length,rs=()=>{var m=[];for(var v in yi)yi.hasOwnProperty(v)&&m.push(yi[v]);return m},Rn=[],Yi=()=>{for(;Rn.length;){var m=Rn.pop();m.$$.deleteScheduled=!1,m.delete()}},Qn,xo=m=>{Qn=m,Rn.length&&Qn&&Qn(Yi)},yo=()=>{n.getInheritedInstanceCount=qi,n.getLiveInheritedInstances=rs,n.flushPendingDeletes=Yi,n.setDelayFunction=xo},yi={},A=(m,v)=>{for(v===void 0&&tt("ptr should not be undefined");m.baseClass;)v=m.upcast(v),m=m.baseClass;return v},k=(m,v)=>(v=A(m,v),yi[v]),q=(m,v)=>{(!v.ptrType||!v.ptr)&&Ft("makeClassHandle requires ptr and ptrType");var w=!!v.smartPtrType,L=!!v.smartPtr;return w!==L&&Ft("Both smartPtrType and smartPtr must be specified"),v.count={value:1},B(Object.create(m,{$$:{value:v,writable:!0}}))};function Y(m){var v=this.getPointee(m);if(!v)return this.destructor(m),null;var w=k(this.registeredClass,v);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=v,w.$$.smartPtr=m,w.clone();var L=w.clone();return this.destructor(m),L}function V(){return this.isSmartPointer?q(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:m}):q(this.registeredClass.instancePrototype,{ptrType:this,ptr:m})}var Q=this.registeredClass.getActualType(v),ut=Dr[Q];if(!ut)return V.call(this);var nt;this.isConst?nt=ut.constPointerType:nt=ut.pointerType;var ft=Lr(v,this.registeredClass,nt.registeredClass);return ft===null?V.call(this):this.isSmartPointer?q(nt.registeredClass.instancePrototype,{ptrType:nt,ptr:ft,smartPtrType:this,smartPtr:m}):q(nt.registeredClass.instancePrototype,{ptrType:nt,ptr:ft})}var B=m=>typeof FinalizationRegistry>"u"?(B=v=>v,m):(Wi=new FinalizationRegistry(v=>{Xi(v.$$)}),B=v=>{var w=v.$$,L=!!w.smartPtr;if(L){var V={$$:w};Wi.register(v,V,v)}return v},Pr=v=>Wi.unregister(v),B(m)),St=()=>{Object.assign(Pt.prototype,{isAliasOf(m){if(!(this instanceof Pt)||!(m instanceof Pt))return!1;var v=this.$$.ptrType.registeredClass,w=this.$$.ptr;m.$$=m.$$;for(var L=m.$$.ptrType.registeredClass,V=m.$$.ptr;v.baseClass;)w=v.upcast(w),v=v.baseClass;for(;L.baseClass;)V=L.upcast(V),L=L.baseClass;return v===L&&w===V},clone(){if(this.$$.ptr||Ye(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var m=B(Object.create(Object.getPrototypeOf(this),{$$:{value:De(this.$$)}}));return m.$$.count.value+=1,m.$$.deleteScheduled=!1,m},delete(){this.$$.ptr||Ye(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),Pr(this),Xi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ye(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),Rn.push(this),Rn.length===1&&Qn&&Qn(Yi),this.$$.deleteScheduled=!0,this}})};function Pt(){}var Nt=(m,v)=>Object.defineProperty(v,"name",{value:m}),Bt=(m,v,w)=>{if(m[v].overloadTable===void 0){var L=m[v];m[v]=function(...V){return m[v].overloadTable.hasOwnProperty(V.length)||tt(`Function '${w}' called with an invalid number of arguments (${V.length}) - expects one of (${m[v].overloadTable})!`),m[v].overloadTable[V.length].apply(this,V)},m[v].overloadTable=[],m[v].overloadTable[L.argCount]=L}},Xt=(m,v,w)=>{n.hasOwnProperty(m)?((w===void 0||n[m].overloadTable!==void 0&&n[m].overloadTable[w]!==void 0)&&tt(`Cannot register public name '${m}' twice`),Bt(n,m,m),n.hasOwnProperty(w)&&tt(`Cannot register multiple overloads of a function with the same number of arguments (${w})!`),n[m].overloadTable[w]=v):(n[m]=v,w!==void 0&&(n[m].numArguments=w))},Yt=48,Ht=57,ge=m=>{if(m===void 0)return"_unknown";m=m.replace(/[^a-zA-Z0-9_]/g,"$");var v=m.charCodeAt(0);return v>=Yt&&v<=Ht?`_${m}`:m};function ye(m,v,w,L,V,Q,ut,nt){this.name=m,this.constructor=v,this.instancePrototype=w,this.rawDestructor=L,this.baseClass=V,this.getActualType=Q,this.upcast=ut,this.downcast=nt,this.pureVirtualFunctions=[]}var Me=(m,v,w)=>{for(;v!==w;)v.upcast||tt(`Expected null or instance of ${w.name}, got an instance of ${v.name}`),m=v.upcast(m),v=v.baseClass;return m};function Ze(m,v){if(v===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;v.$$||tt(`Cannot pass "${To(v)}" as a ${this.name}`),v.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`);var w=v.$$.ptrType.registeredClass,L=Me(v.$$.ptr,w,this.registeredClass);return L}function pe(m,v){var w;if(v===null)return this.isReference&&tt(`null is not a valid ${this.name}`),this.isSmartPointer?(w=this.rawConstructor(),m!==null&&m.push(this.rawDestructor,w),w):0;(!v||!v.$$)&&tt(`Cannot pass "${To(v)}" as a ${this.name}`),v.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var L=v.$$.ptrType.registeredClass;if(w=Me(v.$$.ptr,L,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&tt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?w=v.$$.smartPtr:tt(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:w=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)w=v.$$.smartPtr;else{var V=v.clone();w=this.rawShare(w,Ge.toHandle(()=>V.delete())),m!==null&&m.push(this.rawDestructor,w)}break;default:tt("Unsupporting sharing policy")}return w}function Vt(m,v){if(v===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;v.$$||tt(`Cannot pass "${To(v)}" as a ${this.name}`),v.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var w=v.$$.ptrType.registeredClass,L=Me(v.$$.ptr,w,this.registeredClass);return L}var ke=()=>{Object.assign(ue.prototype,{getPointee(m){return this.rawGetPointee&&(m=this.rawGetPointee(m)),m},destructor(m){this.rawDestructor?.(m)},argPackAdvance:he,readValueFromPointer:K,fromWireType:Y})};function ue(m,v,w,L,V,Q,ut,nt,ft,xt,Rt){this.name=m,this.registeredClass=v,this.isReference=w,this.isConst=L,this.isSmartPointer=V,this.pointeeType=Q,this.sharingPolicy=ut,this.rawGetPointee=nt,this.rawConstructor=ft,this.rawShare=xt,this.rawDestructor=Rt,!V&&v.baseClass===void 0?L?(this.toWireType=Ze,this.destructorFunction=null):(this.toWireType=Vt,this.destructorFunction=null):this.toWireType=pe}var nn=(m,v,w)=>{n.hasOwnProperty(m)||Ft("Replacing nonexistent public symbol"),n[m].overloadTable!==void 0&&w!==void 0?n[m].overloadTable[w]=v:(n[m]=v,n[m].argCount=w)},ti=(m,v,w)=>{m=m.replace(/p/g,"i");var L=n["dynCall_"+m];return L(v,...w)},Ie,ei=m=>Ie.get(m),Ee=(m,v,w=[])=>{if(m.includes("j"))return ti(m,v,w);var L=ei(v)(...w);return m[0]=="p"?L>>>0:L},_n=(m,v)=>(...w)=>Ee(m,v,w),Je=(m,v)=>{m=O(m);function w(){return m.includes("j")||m.includes("p")?_n(m,v):ei(v)}var L=w();return typeof L!="function"&&tt(`unknown function pointer with signature ${m}: ${v}`),L},rn=(m,v)=>{var w=Nt(v,function(L){this.name=v,this.message=L;var V=new Error(L).stack;V!==void 0&&(this.stack=this.toString()+`
`+V.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(m.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},w},ji,ss=m=>{var v=Il(m),w=O(v);return Hn(v),w},Mi=(m,v)=>{var w=[],L={};function V(Q){if(!L[Q]&&!At[Q]){if(kt[Q]){kt[Q].forEach(V);return}w.push(Q),L[Q]=!0}}throw v.forEach(V),new ji(`${m}: `+w.map(ss).join([", "]))};function Qu(m,v,w,L,V,Q,ut,nt,ft,xt,Rt,Zt,me){m>>>=0,v>>>=0,w>>>=0,L>>>=0,V>>>=0,Q>>>=0,ut>>>=0,nt>>>=0,ft>>>=0,xt>>>=0,Rt>>>=0,Zt>>>=0,me>>>=0,Rt=O(Rt),Q=Je(V,Q),nt&&=Je(ut,nt),xt&&=Je(ft,xt),me=Je(Zt,me);var Ue=ge(Rt);Xt(Ue,function(){Mi(`Cannot construct ${Rt} due to unbound types`,[L])}),wt([m,v,w],L?[L]:[],we=>{we=we[0];var xn,yn;L?(xn=we.registeredClass,yn=xn.instancePrototype):yn=Pt.prototype;var F=Nt(Rt,function(...Ce){if(Object.getPrototypeOf(this)!==X)throw new ot("Use 'new' to construct "+Rt);if(lt.constructor_body===void 0)throw new ot(Rt+" has no accessible constructor");var cn=lt.constructor_body[Ce.length];if(cn===void 0)throw new ot(`Tried to invoke ctor of ${Rt} with invalid number of parameters (${Ce.length}) - expected (${Object.keys(lt.constructor_body).toString()}) parameters instead!`);return cn.apply(this,Ce)}),X=Object.create(yn,{constructor:{value:F}});F.prototype=X;var lt=new ye(Rt,F,X,me,xn,Q,nt,xt);lt.baseClass&&(lt.baseClass.__derivedClasses??=[],lt.baseClass.__derivedClasses.push(lt));var yt=new ue(Rt,lt,!0,!1,!1),jt=new ue(Rt+"*",lt,!1,!1,!1),Te=new ue(Rt+" const*",lt,!1,!0,!1);return Dr[m]={pointerType:jt,constPointerType:Te},nn(Ue,F),[yt,jt,Te]})}var Mo=(m,v)=>{for(var w=[],L=0;L<m;L++)w.push(W[v+L*4>>>2>>>0]);return w};function El(m){for(var v=1;v<m.length;++v)if(m[v]!==null&&m[v].destructorFunction===void 0)return!0;return!1}function Tl(m,v){if(!(m instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof m} which is not a function`);var w=Nt(m.name||"unknownFunctionName",function(){});w.prototype=m.prototype;var L=new w,V=m.apply(L,v);return V instanceof Object?V:L}function th(m,v,w,L){for(var V=El(m),Q=m.length,ut="",nt="",ft=0;ft<Q-2;++ft)ut+=(ft!==0?", ":"")+"arg"+ft,nt+=(ft!==0?", ":"")+"arg"+ft+"Wired";var xt=`
        return function (${ut}) {
        if (arguments.length !== ${Q-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${Q-2}');
        }`;V&&(xt+=`var destructors = [];
`);var Rt=V?"destructors":"null",Zt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];v&&(xt+="var thisWired = classParam['toWireType']("+Rt+`, this);
`);for(var ft=0;ft<Q-2;++ft)xt+="var arg"+ft+"Wired = argType"+ft+"['toWireType']("+Rt+", arg"+ft+`);
`,Zt.push("argType"+ft);if(v&&(nt="thisWired"+(nt.length>0?", ":"")+nt),xt+=(w||L?"var rv = ":"")+"invoker(fn"+(nt.length>0?", ":"")+nt+`);
`,V)xt+=`runDestructors(destructors);
`;else for(var ft=v?1:2;ft<m.length;++ft){var me=ft===1?"thisWired":"arg"+(ft-2)+"Wired";m[ft].destructorFunction!==null&&(xt+=`${me}_dtor(${me});
`,Zt.push(`${me}_dtor`))}return w&&(xt+=`var ret = retType['fromWireType'](rv);
return ret;
`),xt+=`}
`,[Zt,xt]}function bo(m,v,w,L,V,Q){var ut=v.length;ut<2&&tt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var nt=v[1]!==null&&w!==null,ft=El(v),xt=v[0].name!=="void",Rt=[m,tt,L,V,Lt,v[0],v[1]],Zt=0;Zt<ut-2;++Zt)Rt.push(v[Zt+2]);if(!ft)for(var Zt=nt?1:2;Zt<v.length;++Zt)v[Zt].destructorFunction!==null&&Rt.push(v[Zt].destructorFunction);let[me,Ue]=th(v,nt,xt,Q);me.push(Ue);var we=Tl(Function,me)(...Rt);return Nt(m,we)}var eh=function(m,v,w,L,V,Q){m>>>=0,w>>>=0,L>>>=0,V>>>=0,Q>>>=0;var ut=Mo(v,w);V=Je(L,V),wt([],[m],nt=>{nt=nt[0];var ft=`constructor ${nt.name}`;if(nt.registeredClass.constructor_body===void 0&&(nt.registeredClass.constructor_body=[]),nt.registeredClass.constructor_body[v-1]!==void 0)throw new ot(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${nt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return nt.registeredClass.constructor_body[v-1]=()=>{Mi(`Cannot construct ${nt.name} due to unbound types`,ut)},wt([],ut,xt=>(xt.splice(1,0,null),nt.registeredClass.constructor_body[v-1]=bo(ft,xt,null,V,Q),[])),[]})},Al=m=>{m=m.trim();const v=m.indexOf("(");return v!==-1?m.substr(0,v):m},nh=function(m,v,w,L,V,Q,ut,nt,ft){m>>>=0,v>>>=0,L>>>=0,V>>>=0,Q>>>=0,ut>>>=0;var xt=Mo(w,L);v=O(v),v=Al(v),Q=Je(V,Q),wt([],[m],Rt=>{Rt=Rt[0];var Zt=`${Rt.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),nt&&Rt.registeredClass.pureVirtualFunctions.push(v);function me(){Mi(`Cannot call ${Zt} due to unbound types`,xt)}var Ue=Rt.registeredClass.instancePrototype,we=Ue[v];return we===void 0||we.overloadTable===void 0&&we.className!==Rt.name&&we.argCount===w-2?(me.argCount=w-2,me.className=Rt.name,Ue[v]=me):(Bt(Ue,v,Zt),Ue[v].overloadTable[w-2]=me),wt([],xt,xn=>{var yn=bo(Zt,xn,Rt,Q,ut,ft);return Ue[v].overloadTable===void 0?(yn.argCount=w-2,Ue[v]=yn):Ue[v].overloadTable[w-2]=yn,[]}),[]})},So=[],zn=[];function Eo(m){m>>>=0,m>9&&--zn[m+1]===0&&(zn[m]=void 0,So.push(m))}var ih=()=>zn.length/2-5-So.length,rh=()=>{zn.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=ih},Ge={toValue:m=>(m||tt("Cannot use deleted val. handle = "+m),zn[m]),toHandle:m=>{switch(m){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=So.pop()||zn.length;return zn[v]=m,zn[v+1]=1,v}}}},sh={name:"emscripten::val",fromWireType:m=>{var v=Ge.toValue(m);return Eo(m),v},toWireType:(m,v)=>Ge.toHandle(v),argPackAdvance:he,readValueFromPointer:K,destructorFunction:null};function wl(m){return m>>>=0,Kt(m,sh)}var oh=(m,v,w)=>{switch(v){case 1:return w?function(L){return this.fromWireType(C[L>>>0])}:function(L){return this.fromWireType(I[L>>>0])};case 2:return w?function(L){return this.fromWireType(st[L>>>1>>>0])}:function(L){return this.fromWireType(M[L>>>1>>>0])};case 4:return w?function(L){return this.fromWireType(S[L>>>2>>>0])}:function(L){return this.fromWireType(W[L>>>2>>>0])};default:throw new TypeError(`invalid integer width (${v}): ${m}`)}};function ah(m,v,w,L){m>>>=0,v>>>=0,w>>>=0,v=O(v);function V(){}V.values={},Kt(m,{name:v,constructor:V,fromWireType:function(Q){return this.constructor.values[Q]},toWireType:(Q,ut)=>ut.value,argPackAdvance:he,readValueFromPointer:oh(v,w,L),destructorFunction:null}),Xt(v,V)}var os=(m,v)=>{var w=At[m];return w===void 0&&tt(`${v} has unknown type ${ss(m)}`),w};function lh(m,v,w){m>>>=0,v>>>=0;var L=os(m,"enum");v=O(v);var V=L.constructor,Q=Object.create(L.constructor.prototype,{value:{value:w},constructor:{value:Nt(`${L.name}_${v}`,function(){})}});V.values[w]=Q,V[v]=Q}var To=m=>{if(m===null)return"null";var v=typeof m;return v==="object"||v==="array"||v==="function"?m.toString():""+m},ch=(m,v)=>{switch(v){case 4:return function(w){return this.fromWireType(j[w>>>2>>>0])};case 8:return function(w){return this.fromWireType(rt[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${v}): ${m}`)}},uh=function(m,v,w){m>>>=0,v>>>=0,w>>>=0,v=O(v),Kt(m,{name:v,fromWireType:L=>L,toWireType:(L,V)=>V,argPackAdvance:he,readValueFromPointer:ch(v,w),destructorFunction:null})};function hh(m,v,w,L,V,Q,ut){m>>>=0,w>>>=0,L>>>=0,V>>>=0,Q>>>=0;var nt=Mo(v,w);m=O(m),m=Al(m),V=Je(L,V),Xt(m,function(){Mi(`Cannot call ${m} due to unbound types`,nt)},v-1),wt([],nt,ft=>{var xt=[ft[0],null].concat(ft.slice(1));return nn(m,bo(m,xt,null,V,Q,ut),v-1),[]})}var dh=(m,v,w)=>{switch(v){case 1:return w?L=>C[L>>>0]:L=>I[L>>>0];case 2:return w?L=>st[L>>>1>>>0]:L=>M[L>>>1>>>0];case 4:return w?L=>S[L>>>2>>>0]:L=>W[L>>>2>>>0];default:throw new TypeError(`invalid integer width (${v}): ${m}`)}};function fh(m,v,w,L,V){m>>>=0,v>>>=0,w>>>=0,v=O(v);var Q=Rt=>Rt;if(L===0){var ut=32-8*w;Q=Rt=>Rt<<ut>>>ut}var nt=v.includes("unsigned"),ft=(Rt,Zt)=>{},xt;nt?xt=function(Rt,Zt){return ft(Zt,this.name),Zt>>>0}:xt=function(Rt,Zt){return ft(Zt,this.name),Zt},Kt(m,{name:v,fromWireType:Q,toWireType:xt,argPackAdvance:he,readValueFromPointer:dh(v,w,L!==0),destructorFunction:null})}function ph(m,v,w){m>>>=0,w>>>=0;var L=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],V=L[v];function Q(ut){var nt=W[ut>>>2>>>0],ft=W[ut+4>>>2>>>0];return new V(C.buffer,ft,nt)}w=O(w),Kt(m,{name:w,fromWireType:Q,argPackAdvance:he,readValueFromPointer:Q},{ignoreDuplicateRegistrations:!0})}function mh(m,v){m>>>=0,wl(m)}var gh=(m,v,w,L)=>{if(w>>>=0,!(L>0))return 0;for(var V=w,Q=w+L-1,ut=0;ut<m.length;++ut){var nt=m.charCodeAt(ut);if(nt>=55296&&nt<=57343){var ft=m.charCodeAt(++ut);nt=65536+((nt&1023)<<10)|ft&1023}if(nt<=127){if(w>=Q)break;v[w++>>>0]=nt}else if(nt<=2047){if(w+1>=Q)break;v[w++>>>0]=192|nt>>6,v[w++>>>0]=128|nt&63}else if(nt<=65535){if(w+2>=Q)break;v[w++>>>0]=224|nt>>12,v[w++>>>0]=128|nt>>6&63,v[w++>>>0]=128|nt&63}else{if(w+3>=Q)break;v[w++>>>0]=240|nt>>18,v[w++>>>0]=128|nt>>12&63,v[w++>>>0]=128|nt>>6&63,v[w++>>>0]=128|nt&63}}return v[w>>>0]=0,w-V},_h=(m,v,w)=>gh(m,I,v,w),vh=m=>{for(var v=0,w=0;w<m.length;++w){var L=m.charCodeAt(w);L<=127?v++:L<=2047?v+=2:L>=55296&&L<=57343?(v+=4,++w):v+=3}return v},Rl=typeof TextDecoder<"u"?new TextDecoder:void 0,xh=(m,v,w)=>{v>>>=0;for(var L=v+w,V=v;m[V]&&!(V>=L);)++V;if(V-v>16&&m.buffer&&Rl)return Rl.decode(m.subarray(v,V));for(var Q="";v<V;){var ut=m[v++];if(!(ut&128)){Q+=String.fromCharCode(ut);continue}var nt=m[v++]&63;if((ut&224)==192){Q+=String.fromCharCode((ut&31)<<6|nt);continue}var ft=m[v++]&63;if((ut&240)==224?ut=(ut&15)<<12|nt<<6|ft:ut=(ut&7)<<18|nt<<12|ft<<6|m[v++]&63,ut<65536)Q+=String.fromCharCode(ut);else{var xt=ut-65536;Q+=String.fromCharCode(55296|xt>>10,56320|xt&1023)}}return Q},yh=(m,v)=>(m>>>=0,m?xh(I,m,v):"");function Mh(m,v){m>>>=0,v>>>=0,v=O(v);var w=v==="std::string";Kt(m,{name:v,fromWireType(L){var V=W[L>>>2>>>0],Q=L+4,ut;if(w)for(var nt=Q,ft=0;ft<=V;++ft){var xt=Q+ft;if(ft==V||I[xt>>>0]==0){var Rt=xt-nt,Zt=yh(nt,Rt);ut===void 0?ut=Zt:(ut+="\0",ut+=Zt),nt=xt+1}}else{for(var me=new Array(V),ft=0;ft<V;++ft)me[ft]=String.fromCharCode(I[Q+ft>>>0]);ut=me.join("")}return Hn(L),ut},toWireType(L,V){V instanceof ArrayBuffer&&(V=new Uint8Array(V));var Q,ut=typeof V=="string";ut||V instanceof Uint8Array||V instanceof Uint8ClampedArray||V instanceof Int8Array||tt("Cannot pass non-string to std::string"),w&&ut?Q=vh(V):Q=V.length;var nt=Co(4+Q+1),ft=nt+4;if(W[nt>>>2>>>0]=Q,w&&ut)_h(V,ft,Q+1);else if(ut)for(var xt=0;xt<Q;++xt){var Rt=V.charCodeAt(xt);Rt>255&&(Hn(ft),tt("String has UTF-16 code units that do not fit in 8 bits")),I[ft+xt>>>0]=Rt}else for(var xt=0;xt<Q;++xt)I[ft+xt>>>0]=V[xt];return L!==null&&L.push(Hn,nt),nt},argPackAdvance:he,readValueFromPointer:K,destructorFunction(L){Hn(L)}})}var Cl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,bh=(m,v)=>{for(var w=m,L=w>>1,V=L+v/2;!(L>=V)&&M[L>>>0];)++L;if(w=L<<1,w-m>32&&Cl)return Cl.decode(I.subarray(m>>>0,w>>>0));for(var Q="",ut=0;!(ut>=v/2);++ut){var nt=st[m+ut*2>>>1>>>0];if(nt==0)break;Q+=String.fromCharCode(nt)}return Q},Sh=(m,v,w)=>{if(w??=2147483647,w<2)return 0;w-=2;for(var L=v,V=w<m.length*2?w/2:m.length,Q=0;Q<V;++Q){var ut=m.charCodeAt(Q);st[v>>>1>>>0]=ut,v+=2}return st[v>>>1>>>0]=0,v-L},Eh=m=>m.length*2,Th=(m,v)=>{for(var w=0,L="";!(w>=v/4);){var V=S[m+w*4>>>2>>>0];if(V==0)break;if(++w,V>=65536){var Q=V-65536;L+=String.fromCharCode(55296|Q>>10,56320|Q&1023)}else L+=String.fromCharCode(V)}return L},Ah=(m,v,w)=>{if(v>>>=0,w??=2147483647,w<4)return 0;for(var L=v,V=L+w-4,Q=0;Q<m.length;++Q){var ut=m.charCodeAt(Q);if(ut>=55296&&ut<=57343){var nt=m.charCodeAt(++Q);ut=65536+((ut&1023)<<10)|nt&1023}if(S[v>>>2>>>0]=ut,v+=4,v+4>V)break}return S[v>>>2>>>0]=0,v-L},wh=m=>{for(var v=0,w=0;w<m.length;++w){var L=m.charCodeAt(w);L>=55296&&L<=57343&&++w,v+=4}return v},Rh=function(m,v,w){m>>>=0,v>>>=0,w>>>=0,w=O(w);var L,V,Q,ut;v===2?(L=bh,V=Sh,ut=Eh,Q=nt=>M[nt>>>1>>>0]):v===4&&(L=Th,V=Ah,ut=wh,Q=nt=>W[nt>>>2>>>0]),Kt(m,{name:w,fromWireType:nt=>{for(var ft=W[nt>>>2>>>0],xt,Rt=nt+4,Zt=0;Zt<=ft;++Zt){var me=nt+4+Zt*v;if(Zt==ft||Q(me)==0){var Ue=me-Rt,we=L(Rt,Ue);xt===void 0?xt=we:(xt+="\0",xt+=we),Rt=me+v}}return Hn(nt),xt},toWireType:(nt,ft)=>{typeof ft!="string"&&tt(`Cannot pass non-string to C++ string type ${w}`);var xt=ut(ft),Rt=Co(4+xt+v);return W[Rt>>>2>>>0]=xt/v,V(ft,Rt+4,xt+v),nt!==null&&nt.push(Hn,Rt),Rt},argPackAdvance:he,readValueFromPointer:K,destructorFunction(nt){Hn(nt)}})};function Ch(m,v,w,L,V,Q){m>>>=0,v>>>=0,w>>>=0,L>>>=0,V>>>=0,Q>>>=0,ct[m]={name:O(v),rawConstructor:Je(w,L),rawDestructor:Je(V,Q),fields:[]}}function Ph(m,v,w,L,V,Q,ut,nt,ft,xt){m>>>=0,v>>>=0,w>>>=0,L>>>=0,V>>>=0,Q>>>=0,ut>>>=0,nt>>>=0,ft>>>=0,xt>>>=0,ct[m].fields.push({fieldName:O(v),getterReturnType:w,getter:Je(L,V),getterContext:Q,setterArgumentType:ut,setter:Je(nt,ft),setterContext:xt})}var Lh=function(m,v){m>>>=0,v>>>=0,v=O(v),Kt(m,{isVoid:!0,name:v,argPackAdvance:0,fromWireType:()=>{},toWireType:(w,L)=>{}})};function Dh(m,v,w){return m>>>=0,v>>>=0,w>>>=0,I.copyWithin(m>>>0,v>>>0,v+w>>>0)}var Pl=(m,v,w)=>{var L=[],V=m.toWireType(L,w);return L.length&&(W[v>>>2>>>0]=Ge.toHandle(L)),V};function Ih(m,v,w){return m>>>=0,v>>>=0,w>>>=0,m=Ge.toValue(m),v=os(v,"emval::as"),Pl(v,w,m)}var Uh={},Ll=m=>{var v=Uh[m];return v===void 0?O(m):v},Ao=[];function Nh(m,v,w,L,V){return m>>>=0,v>>>=0,w>>>=0,L>>>=0,V>>>=0,m=Ao[m],v=Ge.toValue(v),w=Ll(w),m(v,v[w],L,V)}function Fh(m,v){return m>>>=0,v>>>=0,m=Ge.toValue(m),v=Ge.toValue(v),m==v}var Oh=m=>{var v=Ao.length;return Ao.push(m),v},kh=(m,v)=>{for(var w=new Array(m),L=0;L<m;++L)w[L]=os(W[v+L*4>>>2>>>0],"parameter "+L);return w};function Bh(m,v,w){v>>>=0;var L=kh(m,v),V=L.shift();m--;var Q=`return function (obj, func, destructorsRef, args) {
`,ut=0,nt=[];w===0&&nt.push("obj");for(var ft=["retType"],xt=[V],Rt=0;Rt<m;++Rt)nt.push("arg"+Rt),ft.push("argType"+Rt),xt.push(L[Rt]),Q+=`  var arg${Rt} = argType${Rt}.readValueFromPointer(args${ut?"+"+ut:""});
`,ut+=L[Rt].argPackAdvance;var Zt=w===1?"new func":"func.call";Q+=`  var rv = ${Zt}(${nt.join(", ")});
`,V.isVoid||(ft.push("emval_returnValue"),xt.push(Pl),Q+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Q+=`};
`,ft.push(Q);var me=Tl(Function,ft)(...xt),Ue=`methodCaller<(${L.map(we=>we.name).join(", ")}) => ${V.name}>`;return Oh(Nt(Ue,me))}function zh(m,v){return m>>>=0,v>>>=0,m=Ge.toValue(m),v=Ge.toValue(v),Ge.toHandle(m[v])}function Hh(m){m>>>=0,m>9&&(zn[m+1]+=1)}function Vh(m){return m>>>=0,Ge.toHandle(Ll(m))}function Gh(){return Ge.toHandle({})}function $h(m){m>>>=0;var v=Ge.toValue(m);Lt(v),Eo(m)}function Wh(m,v,w){m>>>=0,v>>>=0,w>>>=0,m=Ge.toValue(m),v=Ge.toValue(v),w=Ge.toValue(w),m[v]=w}function Xh(m,v){m>>>=0,v>>>=0,m=os(m,"_emval_take_value");var w=m.readValueFromPointer(v);return Ge.toHandle(w)}var qh=()=>4294901760,Yh=m=>{var v=D.buffer,w=(m-v.byteLength+65535)/65536;try{return D.grow(w),pt(),1}catch{}};function jh(m){m>>>=0;var v=I.length,w=qh();if(m>w)return!1;for(var L=(ft,xt)=>ft+(xt-ft%xt)%xt,V=1;V<=4;V*=2){var Q=v*(1+.2/V);Q=Math.min(Q,m+100663296);var ut=Math.min(w,L(Math.max(m,Q),65536)),nt=Yh(ut);if(nt)return!0}return!1}var Dl=(m,v)=>{m<128?v.push(m):v.push(m%128|128,m>>7)},Kh=m=>{for(var v={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},w={parameters:[],results:m[0]=="v"?[]:[v[m[0]]]},L=1;L<m.length;++L)w.parameters.push(v[m[L]]);return w},Zh=(m,v)=>{var w=m.slice(0,1),L=m.slice(1),V={i:127,p:127,j:126,f:125,d:124,e:111};v.push(96),Dl(L.length,v);for(var Q=0;Q<L.length;++Q)v.push(V[L[Q]]);w=="v"?v.push(0):v.push(1,V[w])},Jh=(m,v)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Kh(v),m);var w=[1];Zh(v,w);var L=[0,97,115,109,1,0,0,0,1];Dl(w.length,L),L.push(...w),L.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var V=new WebAssembly.Module(new Uint8Array(L)),Q=new WebAssembly.Instance(V,{e:{f:m}}),ut=Q.exports.f;return ut},Qh=(m,v)=>{if(bi)for(var w=m;w<m+v;w++){var L=ei(w);L&&bi.set(L,w)}},bi,td=m=>(bi||(bi=new WeakMap,Qh(0,Ie.length)),bi.get(m)||0),wo=[],ed=()=>{if(wo.length)return wo.pop();try{Ie.grow(1)}catch(m){throw m instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":m}return Ie.length-1},Ro=(m,v)=>Ie.set(m,v),Ir=(m,v)=>{var w=td(m);if(w)return w;var L=ed();try{Ro(L,m)}catch(Q){if(!(Q instanceof TypeError))throw Q;var V=Jh(m,v);Ro(L,V)}return bi.set(m,L),L},Ur=m=>{bi.delete(ei(m)),Ro(m,null),wo.push(m)};Tt=n.InternalError=class extends Error{constructor(v){super(v),this.name="InternalError"}},ht(),ot=n.BindingError=class extends Error{constructor(v){super(v),this.name="BindingError"}},St(),yo(),ke(),ji=n.UnboundTypeError=rn(Error,"UnboundTypeError"),rh();var nd={i:Et,D:bt,n:le,C:N,H:oe,h:Qu,g:eh,a:nh,G:wl,t:ah,f:lh,x:uh,c:hh,j:fh,e:ph,k:mh,w:Mh,s:Rh,o:Ch,l:Ph,I:Lh,F:Dh,v:Ih,z:Nh,b:Eo,m:Fh,y:Bh,B:zh,u:Hh,q:Vh,A:Gh,p:$h,r:Wh,d:Xh,E:jh},vn=R(),Il=m=>(Il=vn.L)(m),Hn=m=>(Hn=vn.N)(m),Co=m=>(Co=vn.O)(m),Ul=m=>(Ul=vn.P)(m);function id(m){m=Object.assign({},m);var v=L=>V=>L(V)>>>0,w=L=>()=>L()>>>0;return m.L=v(m.L),m.O=v(m.O),m._emscripten_stack_alloc=v(m._emscripten_stack_alloc),m.emscripten_stack_get_current=w(m.emscripten_stack_get_current),m}n.addFunction=Ir,n.removeFunction=Ur;var as;It=function m(){as||Nl(),as||(It=m)};function Nl(){if(dt>0||(Dt(),dt>0))return;function m(){as||(as=!0,n.calledRun=!0,!P&&(Mt(),r(n),n.onRuntimeInitialized?.(),_t()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),m()},1)):m()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Nl(),e=a,e}})();const vv=""+new URL("manifold-CUOyaTWM.wasm",import.meta.url).href,ze=1;function xv(i,t,e=256){const{Manifold:n,CrossSection:r}=i,s=t.body,a=c=>r.circle(c,e),o=(c,d)=>n.cylinder(c,d,d,e);let l;if(s.type==="prism"){const c=s.segs[s.segs.length-1].x1,d=[[0,0],[c,0]];for(let u=s.segs.length-1;u>=0;u--)d.push([s.segs[u].x1,s.segs[u].h],[s.segs[u].x0,s.segs[u].h]);let f=new r([d],"Positive");for(const u of s.fillets||[]){const p=u.dir>0?u.xb:u.xb-u.r,_=r.square([u.r,u.r]).translate([p,u.z]),x=u.dir>0?u.xb+u.r:u.xb-u.r;f=f.add(_.subtract(a(u.r).translate([x,u.z+u.r])))}if(l=f.extrude(s.W).rotate([90,0,0]).translate([0,s.W,0]),s.corner){const u=s.corner.size,p=s.segs[0].h,_=s.W;let x;s.corner.kind==="round"?x=r.square([u,u]).subtract(a(u).translate([u,u])):x=new r([[[0,0],[u,0],[0,u]]],"Positive");const h=[x,x.mirror([1,0]).translate([c,0]),x.mirror([0,1]).translate([0,_]),x.mirror([1,0]).mirror([0,1]).translate([c,_])];for(const g of h)l=l.subtract(g.extrude(p+2*ze).translate([0,0,-ze]))}for(const u of t.features)l=l.subtract(Gc(i,t,u,e))}else{const c=s.chamfer||0,d=[[0,0],[s.R,0]];c>0?d.push([s.R,s.t-c],[s.R-c,s.t]):d.push([s.R,s.t]),s.hubR>0?d.push([s.hubR,s.t],[s.hubR,s.t+s.hubH],[0,s.t+s.hubH]):d.push([0,s.t]),l=n.revolve(new r([d],"Positive"),e);const f=s.t+(s.hubR>0?s.hubH:0);l=l.subtract(o(f+2*ze,s.boreD/2).translate([0,0,-ze]));for(const u of t.features)l=l.subtract(Gc(i,t,u,e))}return l}function Gc(i,t,e,n){const{Manifold:r,CrossSection:s}=i,a=(o,l)=>r.cylinder(o,l,l,n);switch(e.kind){case"zhole":{let o=a(e.depth+ze,e.d/2).translate([e.x,e.y,e.top-e.depth]);return e.thru&&(o=a(e.depth+2*ze,e.d/2).translate([e.x,e.y,-ze])),e.cb&&(o=o.add(a(e.cb.depth+ze,e.cb.d/2).translate([e.x,e.y,e.top-e.cb.depth]))),o}case"yhole":return a(t.body.W+2*ze,e.d/2).rotate([-90,0,0]).translate([e.x,-ze,e.z]);case"xhole":return a(e.x1-e.x0+2*ze,e.d/2).rotate([0,90,0]).translate([e.x0-ze,e.y,e.z]);case"slot":{const o=(e.len-e.w)/2,l=s.circle(e.w/2,n),c=e.dir==="x"?s.hull([l.translate([-o,0]),l.translate([o,0])]):s.hull([l.translate([0,-o]),l.translate([0,o])]),d=e.thru?-ze:e.top-e.depth,f=e.thru?e.depth+2*ze:e.depth+ze;return c.extrude(f).translate([e.x,e.y,d])}case"pocket":{const o=e.x1-e.x0,l=e.y1-e.y0,c=e.r,d=s.circle(c,n);return s.hull([d.translate([c,c]),d.translate([o-c,c]),d.translate([c,l-c]),d.translate([o-c,l-c])]).extrude(e.depth+ze).translate([e.x0,e.y0,e.top-e.depth])}case"bolts":{let o=null;const l=t.body.t;for(let c=0;c<e.n;c++){const d=((e.startDeg||0)+360*c/e.n)*Math.PI/180,f=e.bc/2*Math.cos(d),u=e.bc/2*Math.sin(d);let p=a(l+2*ze,e.d/2).translate([f,u,-ze]);e.cb&&(p=p.add(a(e.cb.depth+ze,e.cb.d/2).translate([f,u,l-e.cb.depth]))),o=o?o.add(p):p}return o}}throw new Error("unknown feature "+e.kind)}let da=null;function yv(){return da||(da=_v({locateFile:()=>vv}).then(i=>(i.setup(),i))),da}const fa=new Map;async function Wu(i,t=96){const e=i.id+":"+t;if(fa.has(e))return fa.get(e);const n=await yv(),r=xv(n,i,t),s=r.getMesh(),a=new kn;a.setAttribute("position",new gn(new Float32Array(s.vertProperties),s.numProp)),a.setIndex(new gn(new Uint32Array(s.triVerts),1));const o=a.toNonIndexed();o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere();const l=new Y_(o,28),c=r.volume();r.delete&&r.delete();const d={geo:o,edges:l,volume:c};return fa.set(e,d),d}const $c={dark:{body:10135220,edge:724498},light:{body:13226458,edge:1711910}};function Xu(i,t){const e=$c[t]||$c.dark,n=new W_,r=new j_({color:e.body,metalness:.15,roughness:.55,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});n.add(new Un(i.geo,r)),n.add(new q_(i.edges,new Vu({color:e.edge}))),n.add(new K_(16777215,4478310,1.6));const s=new kc(16777215,1.6);s.position.set(.6,-1,1.4),n.add(s);const a=new kc(16777215,.5);return a.position.set(-1,.6,.4),n.add(a),n}function qu(i,t){const e=i.geo.boundingBox,n=new $;e.getCenter(n);const r=i.geo.boundingSphere.radius,s=new xl(-r*t,r*t,r,-r,.1,r*20);return s.up.set(0,0,1),s.position.copy(n).add(new $(1,-1,1).normalize().multiplyScalar(r*6)),s.lookAt(n),s.zoom=1.05,s.updateProjectionMatrix(),{cam:s,center:n,r}}let Ci=null;async function Yr(i,t="dark",e=640,n=520,r=96){const s=await Wu(i,r);Ci||(Ci=new Hu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ci.setPixelRatio(1)),Ci.setSize(e,n,!1),Ci.setClearColor(0,0);const a=Xu(s,t),{cam:o}=qu(s,e/n);return Ci.render(a,o),Ci.domElement.toDataURL("image/png")}async function Mv(i,t,e="dark"){const n=await Wu(t,96),r=new Hu({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),i.innerHTML="",i.appendChild(r.domElement);const s=Xu(n,e);let{cam:a,center:o,r:l}=qu(n,1);const c=new ev(a,r.domElement);c.target.copy(o),c.enableDamping=!0,c.update();let d=0;const f=()=>{r.render(s,a)},u=()=>{const x=i.clientWidth||300,h=i.clientHeight||240;r.setSize(x,h,!1);const g=x/h;a.left=-l*g,a.right=l*g,a.top=l,a.bottom=-l,a.updateProjectionMatrix(),f()},p=()=>{d=requestAnimationFrame(p),c.update()&&f()};c.addEventListener("change",f);const _=new ResizeObserver(u);return _.observe(i),u(),p(),()=>{cancelAnimationFrame(d),_.disconnect(),c.dispose(),r.dispose(),i.innerHTML=""}}const bv="10076389",Sv="undodiligence",so=297,oo=210,Pi=8,Ev=27,Tv=2.8,Wc=2.4,Fe=Math.PI/180;function Av(){const s=.14705882352941177,a=2.4*Math.sqrt(1+s*s),o=c=>37.5+s*c-a,l=(c,d,f)=>Math.PI*f*(c*c+c*d+d*d)/3;return l(37.5,50,85)-l(o(3),o(85),82)-6*Math.PI*16*3}function wv(){const i=Math.sin(70*Fe);return(80*5+5*10+90*(5/i))*70-Math.PI*7.5*7.5*5}function Rv(i=15,t=25,e=2,n=5,r=4){return 87*36*30-e*n*Math.PI*(i/2)**2*t-4*(1-Math.PI/4)*r*r*30}const Xc=(i,t)=>Math.sqrt(3)/2*i*i-6*t*t*(Math.tan(30*Fe)-Math.PI/6);function Cv(i=70,t=100,e=6,n=2.4){return Xc(i,e)*t-Xc(i-2*n,Math.max(e-n,0))*(t-n)}const jr=[{id:"P-1",pack:"R1",title:"Plant pot",label:"Plant pot with drainage holes",difficulty:"easy",material:"pla",skills:["Revolution","Polar Pattern","Parallel + distance"],stl:"stl/undo-diligence-plant-pot.stl",iso:"iso/undo-diligence-plant-pot.png",volume:Av(),blurb:"A tapered pot with a 3 mm floor and six drainage holes. One half-profile, one spin, one pattern.",hints:[[82.707,"Close: it looks like only one drainage hole was cut. Did the Polar Pattern run with 6 occurrences?"],[82.894,"Close: the six drainage holes look missing."],[81.087,"Close: check the wall. 2.4 is measured square to the wall (a distance between the two parallel lines), not straight across."]]},{id:"P-2",pack:"R2",title:"Phone stand",label:"Phone stand with cable hole",difficulty:"easy",material:"pla",skills:["Angles","Parallel + distance","Symmetric pad","Sketch on a slanted face"],stl:"stl/undo-diligence-phone-stand.stl",iso:"iso/undo-diligence-phone-stand.png",volume:wv(),blurb:"A 70° phone stand with a front lip and a cable hole. One side profile, padded symmetric, plus one hole on the slanted face.",hints:[[80.627,"Close: the cable hole looks missing."],[77.024,"Close: check the backrest. 5 thick is measured square to the slanted face, not straight across."],[39.218,"About half the mass: the stand is 70 wide in total. Did the pad go only 35?"]]},{id:"P-3",pack:"R3",title:"AA battery holder",label:"AA battery holder (10 cells)",difficulty:"easy",material:"pla",skills:["Rectangle","Equal","Linear Pattern","Fillet"],stl:"stl/undo-diligence-aa-battery-holder.stl",iso:"iso/undo-diligence-aa-battery-holder.png",volume:Rv(),blurb:"Holds ten AA cells upright. The holes are 15 across so a 14.5 mm AA slides in: get them wrong and the batteries don’t fit.",hints:[[64.809,"Close: those holes look 14.5 across, the size of the battery itself. The drawing says Ø15 so the cells have room to slide in."],[50.262,"Too light: the holes look like they go all the way through. They stop 25 deep and leave a 5 floor, or the batteries fall out."],[105.043,"Much too heavy: only one pair of holes was cut. Did the Linear Pattern run with 5 occurrences, 17 apart?"],[88.609,"Too heavy: one row of holes is missing. There are two rows of five, 17 apart."],[61.729,"Close: the four rounded corners look missing (Fillet, R4, on the vertical edges)."]]},{id:"P-4",pack:"R4",title:"Hex pencil cup",label:"Hexagon pencil cup",difficulty:"easy",material:"pla",skills:["Hexagon","Distance between lines","Fillet","Thickness"],stl:"stl/undo-diligence-hex-pencil-cup.stl",iso:"iso/undo-diligence-hex-pencil-cup.png",volume:Cv(),blurb:"A six-sided pencil cup with rounded corners. One hexagon, one pad, one fillet, then Thickness hollows it out in a single click.",hints:[[87.225,"Too heavy: the Thickness grew outward. The 70 is the outside; the 2.4 wall goes inward. Tick “Make thickness inwards”."],[80.646,"Close: the six rounded corners look missing (Fillet, R6, on the vertical edges)."],[68.769,"Too light: the floor looks missing. Only the top face is removed; the bottom stays as a 2.4 floor."],[67.119,"Too light: it looks like 70 was measured across the corners. On a hexagon, 70 is across the flat sides."],[66.962,"Too light: the wall looks 2 thick instead of 2.4."]]}],Pv=i=>jr.find(t=>t.id===i);function go(i){const t=[],e=(s,a,o,l)=>{const c=Math.hypot(o,l)||1,d=o/c,f=l/c,u=s-d*Wc,p=a-f*Wc,_=.75;return`<path class="arr" d="M${H(s)} ${H(a)}L${H(u-f*_)} ${H(p+d*_)}L${H(u+f*_)} ${H(p-d*_)}Z"/>`},n=(s,a,o,l="dim",c="middle",d=0)=>t.push(`<text class="${l}" x="${H(s)}" y="${H(a)}" text-anchor="${c}"${d?` transform="rotate(${d} ${H(s)} ${H(a)})"`:""}>${ui(o)}</text>`),r={out:t,line:(s,a,o="vis")=>t.push(`<line class="${o}" x1="${H(s[0])}" y1="${H(s[1])}" x2="${H(a[0])}" y2="${H(a[1])}"/>`),poly:(s,a="vis",o=!0)=>t.push(`<${o?"polygon":"polyline"} class="${a}" points="${s.map(l=>l.map(H).join(",")).join(" ")}"/>`),circle:(s,a,o="vis")=>t.push(`<circle class="${o}" cx="${H(s[0])}" cy="${H(s[1])}" r="${H(a)}"/>`),ellipse:(s,a,o,l="vis")=>t.push(`<ellipse class="${l}" cx="${H(s[0])}" cy="${H(s[1])}" rx="${H(a)}" ry="${H(o)}"/>`),text:n,dimH(s,a,o,l,c,d){const f=o<c?-1:1;if(r.line([s,c+f*1.2],[s,o+f*1.5],"ext"),r.line([a,(d??c)+f*1.2],[a,o+f*1.5],"ext"),Math.abs(a-s)>l.length*1.9+7)r.line([s,o],[a,o],"dimln"),t.push(e(s,o,-Math.sign(a-s),0),e(a,o,Math.sign(a-s),0)),n((s+a)/2,o-.9,l);else{const u=Math.min(s,a),p=Math.max(s,a);r.line([u-5,o],[p+5,o],"dimln"),t.push(e(u,o,1,0),e(p,o,-1,0)),n(p+5.5,o+1.05,l,"dim","start")}},dimV(s,a,o,l,c,d,f="left"){const u=o<c?-1:1;if(r.line([c+u*1.2,s],[o+u*1.5,s],"ext"),r.line([(d??c)+u*1.2,a],[o+u*1.5,a],"ext"),Math.abs(s-a)>l.length*1.9+7)r.line([o,s],[o,a],"dimln"),t.push(e(o,s,0,Math.sign(s-a)),e(o,a,0,Math.sign(a-s))),n(o-.9,(s+a)/2,l,"dim","middle",-90);else{const p=Math.max(s,a),_=Math.min(s,a);r.line([o,p+5],[o,_-5],"dimln"),t.push(e(o,p,0,-1),e(o,_,0,1)),n(o+(f==="left"?-1.2:1.2),(p+_)/2+1.05,l,"dim",f==="left"?"end":"start")}},callout(s,a,o,l){const c=a-2.5,d=o-1;t.push(`<polyline class="leader" points="${H(s[0])},${H(s[1])} ${H(c)},${H(d)} ${H(a-.8)},${H(d)}"/>`),t.push(e(s[0],s[1],s[0]-c,s[1]-d)),l.forEach((f,u)=>n(a,o+u*(Tv+.9),f,"call","start"))},angle(s,a,o,l){const c=-a*Fe,d=[s[0]+o,s[1]],f=[s[0]+o*Math.cos(c),s[1]+o*Math.sin(c)];t.push(`<path class="dimln" d="M${H(d[0])} ${H(d[1])}A${H(o)} ${H(o)} 0 0 0 ${H(f[0])} ${H(f[1])}"/>`),t.push(e(d[0],d[1],0,1),e(f[0],f[1],-Math.sin(-c),-Math.cos(-c)));const u=c/2;n(s[0]+(o+4.5)*Math.cos(u),s[1]+(o+4.5)*Math.sin(u)+1,l,"dim","start")},vlabel:(s,a,o)=>n(s,a,o,"vlabel","middle"),ctrH:(s,a,o)=>r.line([a-2,s],[o+2,s],"ctr"),ctrV:(s,a,o)=>r.line([s,a-2],[s,o+2],"ctr")};return r}function Lv(i,t,e,n,r,s){const a=[],l=Ev-2,c=so-Pi-150,d=oo-Pi-l;a.push(`<rect class="frame" x="${Pi}" y="${Pi}" width="${so-2*Pi}" height="${oo-2*Pi}"/>`),a.push(`<rect class="frame" x="${c}" y="${d}" width="150" height="${l}"/>`);const f=c+52,u=c+104,p=l/2;a.push(`<line class="frame thin" x1="${f}" y1="${d}" x2="${f}" y2="${d+l}"/><line class="frame thin" x1="${u}" y1="${d}" x2="${u}" y2="${d+l}"/><line class="frame thin" x1="${c}" y1="${d+p}" x2="${c+150}" y2="${d+p}"/>`);const _=(T,D,P,C,I)=>`<text class="tbl" x="${T+2}" y="${D+3.6}">${P}</text><text class="${I?"tbv big":"tbv"}" x="${T+2}" y="${D+9.6}">${ui(C)}</text>`;a.push(_(c,d,"PRACTICE DRILL","UNDO DILIGENCE",!0)),a.push(_(f,d,"DRILL",`${i.id} · REAL PART`,!0)),a.push(_(u,d,"PART",i.title.toUpperCase())),a.push(_(c,d+p,"MATERIAL","PLA · 1.24 g/cm³ (SOLID)")),a.push(_(f,d+p,"UNITS · SCALE",`MM · ${t}`)),a.push(`<text class="tbl" x="${u+2}" y="${d+p+3.6}">PROJECTION</text>${ru(u+30,d+p+7.6)}<text class="tbv" x="${u+2}" y="${d+p+9.6}">3RD ANGLE</text>`),["NOTES","1. ALL DIMENSIONS IN MILLIMETRES. DO NOT SCALE THE DRAWING.",...s,"4. TASK: MODEL THE PART, APPLY PLA (1.24 g/cm³, 100% INFILL) AND REPORT ITS MASS IN GRAMS."].forEach((T,D)=>a.push(`<text class="${D?"note":"note b"}" x="${Pi+3}" y="${d+3.6+D*4.6}">${ui(T)}</text>`));const[h,g,b,y]=r;return n?a.push(`<image href="${n}" x="${h}" y="${g}" width="${b}" height="${y}" preserveAspectRatio="xMidYMid meet"/>`):a.push(`<rect class="isobox" x="${h}" y="${g}" width="${b}" height="${y}" rx="2"/>`),a.push(`<text class="vlabel" x="${H(h+b/2)}" y="${H(g+y+3.6)}" text-anchor="middle">ISOMETRIC (REFERENCE ONLY)</text>`),a.join("")}function _o(i,t,e,n,r,s){const a=n.theme||"light";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${so} ${oo}" width="${n.width||"100%"}" ${n.height?`height="${n.height}"`:""} class="sheet" font-family="Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"><style>${su(a)}</style><rect class="paper" x="0" y="0" width="${so}" height="${oo}"/>${Lv(i,e,a,n.isoHref,r,s)}${t}</svg>`}function Dv(i,t){const e=go(t.theme),n=.5,r=37.5,s=50,a=85,o=2.4,l=3,c=(s-r)/a,d=o*Math.sqrt(1+c*c),f=y=>r+c*y-d,u=72,p=14+s*n,_=(y,T)=>[u+y*n,p-T*n];e.circle(_(0,0),s*n),e.circle(_(0,0),f(a)*n),e.circle(_(0,0),f(l)*n),e.circle(_(0,0),25*n,"ctr");for(let y=0;y<6;y++){const T=y*60*Fe;e.circle(_(25*Math.cos(T),25*Math.sin(T)),4*n)}e.ctrH(p,u-s*n,u+s*n),e.ctrV(u,p-s*n,p+s*n),e.vlabel(u,p+s*n+5.5,"TOP");const x=p+s*n+22+a*n,h=(y,T)=>[u+y*n,x-T*n];e.poly([h(-r,0),h(r,0),h(s,a),h(-s,a)]),e.line(h(-f(l),l),h(-f(a),a),"hid"),e.line(h(f(l),l),h(f(a),a),"hid"),e.line(h(-f(l),l),h(f(l),l),"hid");for(const y of[-25,25])e.line(h(y-4,0),h(y-4,l),"hid"),e.line(h(y+4,0),h(y+4,l),"hid");e.ctrV(u,x-a*n,x),e.vlabel(u,x+15,"FRONT"),e.dimH(h(-s,a)[0],h(s,a)[0],h(0,a)[1]-7,"Ø100",h(0,a)[1]),e.dimH(h(-r,0)[0],h(r,0)[0],x+8,"Ø75",x),e.dimV(x,x-a*n,h(s,0)[0]+8,"85",h(r,0)[0],h(s,a)[0]);const g=u+s*n+20;e.callout(_(25*Math.cos(60*Fe)+4*.7,25*Math.sin(60*Fe)+4*.7),g,p-18,["6× Ø8 THRU THE FLOOR","EQ. SPACED ON Ø50 B.C."]),e.callout(h(f(48)+(r+c*48-f(48))/2,48),g+10,x-40,["WALL 2.4 THICK","(MEASURED SQUARE TO THE WALL)"]),e.callout(h(-10,l/2),g+10,x-12,["FLOOR 3 THICK"]);const b=[178,14,104,88];return _o(i,e.out.join(""),"1:2",t,b,["2. ROUND PART: DIAMETERS (Ø) ARE MEASURED ACROSS THE CENTRE.","3. INSIDE WALL IS PARALLEL TO THE OUTSIDE WALL. HOLES ARE ON THE X AXIS AND EVERY 60°."])}function Iv(i,t){const e=go(t.theme),n=.5,r=Math.sin(70*Fe),s=Math.cos(70*Fe),a=[[0,0],[80,0],[80,5],[20+5/r,5],[20+90*s/r+5/r,95],[20+90*s/r,95],[20,5],[5,5],[5,15],[0,15]],o=48,l=150,c=(b,y)=>[o+b*n,l-y*n];e.poly(a.map(b=>c(...b))),e.vlabel(o+40*n,l+20,"FRONT"),e.dimH(c(0,0)[0],c(80,0)[0],l+13,"80",l),e.dimH(c(0,0)[0],c(20,0)[0],l+6,"20",l,c(20,5)[1]),e.dimV(l,c(0,95)[1],o-14,"95",o,c(a[5][0],95)[0]),e.dimV(l,c(0,15)[1],o-6,"15",o),e.dimV(l,c(0,5)[1],c(80,0)[0]+7,"5",c(80,0)[0],c(80,5)[0],"right"),e.dimH(c(0,15)[0],c(5,15)[0],c(0,15)[1]-5,"5",c(0,15)[1]),e.angle(c(20,5),70,13,"70°"),e.callout(c(a[5][0]+2.5/r*.9,70),c(80,0)[0]+6,c(0,82)[1],["BACKREST 5 THICK","(SQUARE TO THE FACE)"]);const d=l-95*n-22-35*n,f=(b,y)=>[o+b*n,d-y*n];e.poly([f(0,-35),f(80,-35),f(80,35),f(0,35)]);for(const b of[5,20,a[5][0],a[4][0]])e.line(f(b,-35),f(b,35));e.line(f(a[3][0],-35),f(a[3][0],35),"hid");const u=[25.13,0];e.ellipse(f(...u),7.5*s*n,7.5*n),e.ctrH(d,o,o+80*n),e.vlabel(o+40*n,d+35*n+5.5,"TOP"),e.dimV(f(0,-35)[1],f(0,35)[1],o-8,"70",o),e.callout(f(u[0]+7.5*s*.7,7.5*.7),o+80*n+16,d-12,["Ø15 THRU THE BACKREST,","CENTRED ACROSS THE WIDTH,","15 FROM THE FACE’S BOTTOM EDGE","(MEASURED ALONG THE FACE)"]);const p=o+80*n+48,_=l,x=(b,y)=>[p+(b+35)*n,_-y*n];e.poly([x(-35,0),x(35,0),x(35,95),x(-35,95)]),e.line(x(-35,5),x(35,5));const h=19.0954-5*s;e.ellipse(x(0,h),7.5*n,7.5*r*n),e.ctrV(x(0,0)[0],x(0,95)[1],_),e.vlabel(x(0,0)[0],_+16,"RIGHT"),e.dimH(x(-35,0)[0],x(35,0)[0],_+9,"70",_);const g=[178,14,104,88];return _o(i,e.out.join(""),"1:2",t,g,["2. ONE SIDE PROFILE, 70 WIDE. THE BACKREST LEANS BACK 70° FROM THE BASE.","3. THE SEAT (WHERE THE PHONE STANDS) IS LEVEL WITH THE TOP OF THE BASE."])}function Uv(i,t){const e=go(t.theme),n=1,r=87,s=36,a=30,o=4,l=7.5,c=(T,D,P,C,I)=>e.out.push(`<path class="vis" d="M${H(T+I)} ${H(D)}H${H(P-I)}A${H(I)} ${H(I)} 0 0 1 ${H(P)} ${H(D+I)}V${H(C-I)}A${H(I)} ${H(I)} 0 0 1 ${H(P-I)} ${H(C)}H${H(T+I)}A${H(I)} ${H(I)} 0 0 1 ${H(T)} ${H(C-I)}V${H(D+I)}A${H(I)} ${H(I)} 0 0 1 ${H(T+I)} ${H(D)}Z"/>`),d=[0,1,2,3,4].map(T=>9.5+17*T),f=[9.5,26.5],u=36,p=66,_=(T,D)=>[u+T*n,p-D*n];c(_(0,s)[0],_(0,s)[1],_(r,0)[0],_(r,0)[1],o*n);for(const T of d)for(const D of f)e.circle(_(T,D),l*n),e.line(_(T-l-1.5,D),_(T+l+1.5,D),"ctr"),e.line(_(T,D-l-1.5),_(T,D+l+1.5),"ctr");e.vlabel(u+r*n/2,p+15,"TOP"),e.dimH(_(0,s)[0],_(r,s)[0],_(0,s)[1]-7,"87",_(0,s)[1]),e.dimV(p,_(0,s)[1],u-17,"36",u),e.dimH(u,_(d[0],0)[0],p+14,"9.5",p,_(d[0],f[0]-l)[1]),e.dimH(_(d[0],0)[0],_(d[1],0)[0],p+7,"17",_(d[0],f[0]-l)[1],_(d[1],f[0]-l)[1]),e.dimV(p,_(0,f[0])[1],u-7,"9.5",u,_(d[0]-l,f[0])[0]),e.dimV(_(0,f[0])[1],_(0,f[1])[1],u-7,"17",_(d[0]-l,f[0])[0],_(d[0]-l,f[1])[0]),e.callout(_(d[4]+l*.7,f[1]+l*.7),u+r*n+24,p-s*n-2,["10× Ø15 ↧ 25 DEEP","2 ROWS OF 5, 17 APART"]),e.callout(_(r-o*.3,o*.3),u+r*n+24,p+4,["4× R4","(THE VERTICAL CORNERS)"]);const x=p+26+a*n,h=(T,D)=>[u+T*n,x-D*n];e.poly([h(0,0),h(r,0),h(r,a),h(0,a)]),e.line(h(o,0),h(o,a)),e.line(h(r-o,0),h(r-o,a));for(const T of d)e.line(h(T-l,a-25),h(T-l,a),"hid"),e.line(h(T+l,a-25),h(T+l,a),"hid"),e.line(h(T-l,a-25),h(T+l,a-25),"hid");e.vlabel(u+r*n/2,x+15,"FRONT"),e.dimV(x,h(0,a)[1],u-8,"30",u),e.dimV(x,h(0,a-25)[1],h(r,0)[0]+7,"5",h(r,0)[0],h(d[4]+l,5)[0],"right");const g=u+r*n+34,b=(T,D)=>[g+T*n,x-D*n];e.poly([b(0,0),b(s,0),b(s,a),b(0,a)]),e.line(b(o,0),b(o,a)),e.line(b(s-o,0),b(s-o,a));for(const T of f)e.line(b(T-l,a-25),b(T-l,a),"hid"),e.line(b(T+l,a-25),b(T+l,a),"hid"),e.line(b(T-l,a-25),b(T+l,a-25),"hid");e.vlabel(g+s*n/2,x+15,"RIGHT"),e.dimH(b(0,0)[0],b(s,0)[0],x+8,"36",x);const y=[178,14,104,88];return _o(i,e.out.join(""),"1:1",t,y,["2. HOLES ARE BLIND: 25 DEEP, LEAVING A 5 FLOOR.","3. AA CELLS ARE Ø14.5, SO THE Ø15 HOLES GIVE 0.5 CLEARANCE."])}function qc(i,t,e){const n=t/Math.sqrt(3),r=e*Math.tan(30*Fe),s=[0,1,2,3,4,5].map(l=>[n*Math.cos(l*60*Fe),n*Math.sin(l*60*Fe)]),a=(l,c,d)=>{const f=Math.hypot(c[0]-l[0],c[1]-l[1]);return[l[0]+(c[0]-l[0])*d/f,l[1]+(c[1]-l[1])*d/f]};let o="";return s.forEach((l,c)=>{const d=a(l,s[(c+5)%6],r),f=a(l,s[(c+1)%6],r),u=i(...d),p=i(...f);o+=`${c?"L":"M"}${H(u[0])} ${H(u[1])}A${H(e*.5)} ${H(e*.5)} 0 0 0 ${H(p[0])} ${H(p[1])}`}),o+"Z"}function Nv(i,t){const e=go(t.theme),n=.5,r=70,s=100,a=6,o=2.4,l=r/Math.sqrt(3),c=l-a/Math.sin(60*Fe)+a,d=(r-2*o)/Math.sqrt(3),f=a-o,u=d-f/Math.sin(60*Fe)+f,p=r/2*Math.tan(30*Fe)-a*Math.tan(30*Fe),_=70,x=16+r/2*n,h=(D,P)=>[_+D*n,x-P*n];e.out.push(`<path class="vis" d="${qc(h,r,a)}"/>`),e.out.push(`<path class="vis" d="${qc(h,r-2*o,f)}"/>`),e.ctrH(x,_-c*n,_+c*n),e.ctrV(_,x-r/2*n,x+r/2*n),e.vlabel(_,x+r/2*n+6,"TOP"),e.dimV(h(0,-r/2)[1],h(0,r/2)[1],_-c*n-8,"70",h(-p,0)[0]);const g=l-a/Math.sin(60*Fe);e.callout(h(g*Math.cos(60*Fe)+a*Math.cos(60*Fe),g*Math.sin(60*Fe)+a*Math.sin(60*Fe)),_+c*n+18,x-14,["6× R6 OUTSIDE CORNERS","(THE VERTICAL EDGES)"]),e.callout(h(u-.3,0),_+c*n+18,x+6,["WALL 2.4 THICK","(INSIDE CORNERS END UP R3.6)"]);const b=x+r/2*n+22+s*n,y=(D,P)=>[_+D*n,b-P*n];e.poly([y(-c,0),y(c,0),y(c,s),y(-c,s)]),e.line(y(-p,0),y(-p,s)),e.line(y(p,0),y(p,s)),e.line(y(-u,o),y(-u,s),"hid"),e.line(y(u,o),y(u,s),"hid"),e.line(y(-u,o),y(u,o),"hid"),e.ctrV(_,b-s*n,b),e.vlabel(_,b+8,"FRONT"),e.dimV(b,b-s*n,y(c,0)[0]+8,"100",y(c,0)[0],y(c,s)[0],"right"),e.callout(y(0,o/2),_+c*n+18,b-6,["FLOOR 2.4 THICK","OPEN AT THE TOP"]);const T=[178,14,104,88];return _o(i,e.out.join(""),"1:2",t,T,["2. HEXAGON: 70 ACROSS THE FLAT SIDES, NOT THE CORNERS.","3. WALLS AND FLOOR ARE 2.4 THICK. THE TOP IS OPEN."])}function Fv(i,t={}){const e={"P-1":Dv,"P-2":Iv,"P-3":Uv,"P-4":Nv}[i.id];return{svg:e(i,t)}}function Ov(i,t,e,n=.005){const r=Number(String(t).trim().replace(",",".")),s=i.volume/1e3*e;if(!isFinite(r)||r<=0)return{correct:!1,expected:s,errorPct:null,hint:"Enter the mass in grams as a positive number, e.g. 81.8"};const a=(r-s)/s*100;if(Math.abs(r-s)<=s*n)return{correct:!0,expected:s,errorPct:a,hint:null};const o=(d,f)=>Math.abs(d-f)<=Math.abs(f)*.004,l=i.volume;let c;if(o(r,l))c="That number matches the volume in mm³. Convert to mass: grams = mm³ ÷ 1000 × density.";else if(o(r,l/1e3))c="That matches the volume in cm³. Multiply by the density to get grams.";else if(o(r,s/1e3))c="Looks like kilograms. The answer is in grams.";else if(o(r,s*1e3))c="Off by exactly 1000×. Check your mm³ → cm³ conversion (1 cm³ = 1000 mm³).";else{if(i.hints){let d=null;for(const[f,u]of i.hints){const p=Math.abs(r-f/1.24*e)/r;p<.0015&&(!d||p<d[0])&&(d=[p,u])}d&&(c=d[1])}if(!c)for(const d of[2.7,7.85,8,8.5,1.04,1.24,1])Math.abs(d-e)/e>.03&&o(r,l/1e3*d)&&(c=`Your geometry looks right, but that mass matches a density of ${d} g/cm³. This drill uses ${e} g/cm³.`);c||(c=a>0?`${Math.abs(a).toFixed(1)}% too heavy. A cut is missing or too small, or a wall is too thick. Compare each view with your model.`:`${Math.abs(a).toFixed(1)}% too light. Something is cut too deep or too big, or a wall is too thin. Compare each view with your model.`)}return{correct:!1,expected:s,errorPct:a,hint:c}}{window.goatcounter={no_onload:!0};const i=document.createElement("script");i.async=!0,i.src="https://gc.zgo.at/count.js",i.dataset.goatcounter=`https://${Sv}.goatcounter.com/count`,i.onload=()=>Yu(),document.head.appendChild(i)}function Yu(){try{window.goatcounter?.count?.({path:location.pathname+(location.hash||"#/").replace(/^#\/d\/.*/,"#/d")})}catch{}}function kv(i,t){const e=new FormData;return e.append("email_address",i),fetch(`https://app.kit.com/forms/${bv}/subscriptions`,{method:"POST",body:e,headers:{Accept:"application/json"}}).then(n=>n.json()).then(n=>n.status==="success"||n.status==="quarantined",()=>!1)}const Bv=7,zv=document.getElementById("app"),Hv=document.getElementById("print-root"),Se=vi();let ao=[];const Oe=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),mi=()=>document.documentElement.dataset.theme||"dark",bl=i=>Tn.drills.find(t=>t.id===i),Sl=i=>bl(i)?.spec||Ks(i),lo=i=>{const t=Math.abs(i)<.005?0:i;return`${t>0?"+":""}${t.toFixed(2)}%`},ol=i=>i>=1e3?i.toFixed(1):i.toFixed(2),qs=i=>{const t=Math.floor(i/1e3);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},wr=i=>`<span class="pill ${i}">${i[0].toUpperCase()+i.slice(1)}</span>`;function Hi(i){const t=Jr(i);return t==="solved"?'<span class="pill solved">✓ Solved</span>':t==="tried"?'<span class="pill tried">Tried</span>':'<span class="pill new">New</span>'}const yr={sun:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',moon:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/></svg>',close:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',back:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',mark:'<svg width="18" height="18" viewBox="0 0 32 32"><path d="M11 9 5.5 14.5 11 20" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 14.5H19a7 7 0 0 1 0 14h-5" fill="none" stroke="var(--accent)" stroke-width="2.8" stroke-linecap="round"/></svg>'},pa=new Map;let Yc=Promise.resolve();function ju(i,t){const e=i.id+mi();if(pa.has(e)){t.src=pa.get(e);return}Yc=Yc.then(async()=>{if(document.body.contains(t))try{const n=await Yr(i,mi(),520,360,64);pa.set(e,n),t.src=n}catch(n){console.warn("thumb failed",n)}})}function $i(i,t){const n=[["#/","Drill pack","home"],["#/generate","Generator","generate"],["#/progress","Progress","progress"],["#/print","Print pack","print"]].map(([r,s,a])=>`<a href="${r}" class="${i===a?"on":""}">${s}</a>`).join("");zv.innerHTML=`
  <header class="topbar">
    <a class="brand" href="#/"><span class="brand-mark">${yr.mark}</span>Undo Diligence <small>Beta</small></a>
    <nav class="nav">${n}</nav>
    <div class="top-right">
      <button class="icon-btn" id="themeBtn" title="Toggle light / dark" aria-label="Toggle light or dark theme">${mi()==="dark"?yr.sun:yr.moon}</button>
      <button class="btn gold-outline sm" data-upgrade="topbar">Founding member<span class="long">&nbsp;· free to join</span></button>
    </div>
  </header>
  <nav class="mobile-nav">${n}</nav>
  <main class="page">${t}</main>
  <footer class="footer">
    <span>Local prototype · nothing you type leaves this browser</span>
    <a href="#/stats">Test dashboard</a>
    <span>Works with FreeCAD, Onshape, Fusion, SOLIDWORKS: mass is the same in every CAD program.</span>
  </footer>`,document.getElementById("themeBtn").onclick=()=>{const r=mi()==="dark"?"light":"dark";document.documentElement.dataset.theme=r,Se.theme=r,Vi(),vo()}}document.addEventListener("click",i=>{const t=i.target.closest("[data-upgrade]");t&&(i.preventDefault(),qv(t.dataset.upgrade))});function Vv(){const i=Tn.drills.filter(n=>Jr(n.id)==="solved").length,t=Tn.drills.find(n=>Jr(n.id)!=="solved")||Tn.drills[0],e=["easy","medium","hard"].map(n=>{const r=Tn.drills.filter(o=>o.spec.difficulty===n),s=r.map(o=>`
      <a class="card" href="#/d/${o.id}">
        <div class="thumb"><img alt="" data-thumb="${o.id}"/></div>
        <div class="card-body">
          <div class="card-top"><span class="num">#${String(o.pack).padStart(2,"0")}</span>${Hi(o.id)}</div>
          <div class="card-title">${Oe(o.label)}</div>
          <div class="meta">${Oe(o.spec.title)} · ${o.id}</div>
        </div>
      </a>`).join(""),a={easy:"Extrudes and holes. Start here.",medium:"Counterbores, slots, pockets, fillets, steps.",hard:"Several features, half-millimetre sizes, chamfers."}[n];return`<div class="section-head">${wr(n)}<h2>${r.length} ${n} drills</h2><p>${a}</p></div><div class="grid">${s}</div>`}).join("");$i("home",`
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
      <div class="hero-card"><img alt="Isometric view of drill #01" data-thumb="${Tn.drills[0].id}"/></div>
    </section>
    <section class="stats">
      <div class="stat"><b>${i}/20</b><span>pack drills solved</span></div>
      <div class="stat"><b>${lu()}</b><span>day streak</span></div>
      <div class="stat"><b>${Object.keys(Se.solved).length}</b><span>drills solved in total</span></div>
      <div class="stat"><b>±${co*100}%</b><span>grading tolerance</span></div>
    </section>
    <div class="section-head"><span class="pill new">New</span><h2>Real parts you can print</h2><p>Model it from the drawing, then check the grams. Get it wrong and the checker names the usual mistake. The grams are the solid PLA weight: the most filament it could take.</p></div>
    <div class="grid">${jr.map(n=>`
      <a class="card" href="#/p/${n.id}">
        <div class="thumb"><img alt="" src="${n.iso}"/></div>
        <div class="card-body">
          <div class="card-top"><span class="num">${n.id}</span>${Hi(n.id)}</div>
          <div class="card-title">${Oe(n.label)}</div>
          <div class="meta">${n.skills.map(Oe).join(" · ")}</div>
        </div>
      </a>`).join("")}</div>
    ${e}
    <section class="section-head" style="margin-top:34px"><h2>New drill packs by email</h2></section>
    <div class="panel pad upsell" style="max-width:720px">
      <p class="small" style="margin:0 0 12px">Get a fresh printable pack of drills now and then. (Prototype: your email is saved only in this browser and is not sent anywhere.)</p>
      ${Ku("home")}
    </div>`),document.querySelectorAll("img[data-thumb]").forEach(n=>ju(Sl(n.dataset.thumb),n)),Zu()}function Ku(i){return`<form class="row waitlist" data-source="${i}" novalidate>
      <input class="input" type="email" name="email" placeholder="you@example.com" autocomplete="email" style="flex:1;min-width:200px" aria-label="Email address"/>
      <button class="btn primary" type="submit">Join the list</button>
    </form><div class="small waitlist-msg" style="margin-top:8px"></div>`}function Zu(){document.querySelectorAll("form.waitlist").forEach(i=>{i.onsubmit=t=>{t.preventDefault();const e=i.email.value.trim(),n=i.parentElement.querySelector(".waitlist-msg");if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)){n.textContent="Please enter a valid email address.";return}Hd(e,i.dataset.source),qe("waitlist_submit",{source:i.dataset.source}),i.reset(),n.textContent="Adding you…",kv(e,i.dataset.source).then(r=>{n.textContent=r?"You're on the list! If a confirmation email shows up, it may be in spam.":"Something went wrong. Please try again in a minute."})}})}function Gv(i){let t;try{t=Sl(i)}catch{return Ju(i)}const e=bl(i),n=e?e.pack-1:-1,r=n>0?Tn.drills[n-1]:null,s=n>=0&&n<19?Tn.drills[n+1]:null,a=li(Se.material);qe("view_drill",{id:i});const o=e?`#${String(e.pack).padStart(2,"0")} · ${Oe(e.label)}`:`Generated drill · ${Oe(t.title)}`;$i(e?"home":"generate",`
    <div class="drill-head">
      <a class="back" href="${e?"#/":"#/generate"}">${yr.back}${e?"Drill pack":"Generator"}</a>
    </div>
    <div class="drill-head">
      <h1>${o}</h1>${wr(t.difficulty)}<span id="statusPill">${Hi(i)}</span>
      <span class="meta">${Oe(al[t.family])} · code <span class="kbd">${t.id}</span></span>
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
            <select id="matSel" aria-label="Material">${Zr.map(P=>`<option value="${P.id}" ${P.id===a.id?"selected":""}>${P.label} · ${P.density} g/cm³</option>`).join("")}</select>
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
          <p class="small" style="margin:6px 0 12px">Founding members get more real-life projects like this, endless generated drills and printable packs. Joining is free: nothing is for sale yet.</p>
          <button class="btn gold-outline" data-upgrade="drill-panel" style="width:100%">Become a founding member</button>
        </div>
      </aside>
    </div>`);const l=document.getElementById("sheetWrap");let c=1,d=null;const f=()=>{const P=li(Se.material);l.innerHTML=Xr(t,{theme:mi()==="dark"?"dark":"light",material:P,isoHref:d}).svg},u=()=>{l.style.width=`${c*100}%`,document.getElementById("zLbl").textContent=`${Math.round(c*100)}%`};f(),u(),Yr(t,mi(),760,620).then(P=>{d=P,f()}).catch(P=>console.warn(P)),document.getElementById("zIn").onclick=()=>{c=Math.min(4,c*1.25),u()},document.getElementById("zOut").onclick=()=>{c=Math.max(1,c/1.25),u()},document.getElementById("zFit").onclick=()=>{c=1,u()};const p=document.getElementById("matSel");p.onchange=()=>{Se.material=p.value,Vi(),f(),g()};const _=document.getElementById("massIn"),x=document.getElementById("result"),h=(P,C)=>{x.className=`result show ${P}`,x.innerHTML=C},g=()=>{const P=(Se.attempts[i]||[]).slice(-5).reverse();document.getElementById("attempts").innerHTML=P.map(C=>`<li><span>${C.correct?"✓":"✗"} ${Oe(C.value)} g</span><span>${C.density} g/cm³ · ${new Date(C.t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></li>`).join("")};g();const b=()=>{const P=_.value.trim().replace(",","."),C=li(Se.material),I=kd(t,P,C.density);if(I.errorPct==null){h("info",Oe(I.hint));return}const st=y.running||y.acc?y.value():null;au(i,Number(P),C.density,I.correct,I.correct?st:null),qe("check",{id:i,correct:I.correct}),I.correct?(qe("solve",{id:i}),y.stop(),h("ok",`<strong>Correct!</strong> ${ol(I.expected)} g (${lo(I.errorPct)}).${st?` Time ${qs(st)}.`:""}${s?` <a href="#/d/${s.id}" style="text-decoration:underline">Next drill →</a>`:""}`),document.getElementById("statusPill").innerHTML=Hi(i),T()):h("bad",`<strong>Not quite</strong> (${lo(I.errorPct)}).<br/>${Oe(I.hint)}`),g()};document.getElementById("checkBtn").onclick=b,_.onkeydown=P=>{P.key==="Enter"&&b()},document.getElementById("revealBtn").onclick=()=>{if((Se.attempts[i]||[]).length<2&&!confirm("Reveal the answer? Try at least twice first - the hints get specific."))return;const C=li(Se.material),I=Kc(t);qe("reveal",{id:i}),h("info",`Answer: <strong>${ol(Ys(I,C.density))} g</strong> in ${Oe(C.label)}.<br/>Volume ${(I/1e3).toFixed(3)} cm³ (${I.toFixed(1)} mm³).`)};const y={running:!1,start:0,acc:0,raf:0,value(){return this.acc+(this.running?Date.now()-this.start:0)},tick(){document.getElementById("tVal").textContent=qs(this.value()),this.running&&(this.raf=setTimeout(()=>this.tick(),250))},go(){if(this.running)return this.stop();this.running=!0,this.start=Date.now(),document.getElementById("tGo").textContent="Pause",this.tick()},stop(){this.running&&(this.acc+=Date.now()-this.start,this.running=!1,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick())},reset(){this.running=!1,this.acc=0,clearTimeout(this.raf),document.getElementById("tGo").textContent="Start",this.tick()}};document.getElementById("tGo").onclick=()=>y.go(),document.getElementById("tReset").onclick=()=>y.reset();const T=()=>{const P=Se.solved[i];document.getElementById("bestTime").textContent=P?`Solved${P.timeMs?` · best time ${qs(P.timeMs)}`:""} · ${P.attempts} attempt${P.attempts>1?"s":""}`:"Start the timer, model the part, then check your mass."};T(),ao.push(()=>clearTimeout(y.raf));let D=null;document.getElementById("peek").addEventListener("toggle",async P=>{P.target.open&&!D&&(qe("peek_3d",{id:i}),D=await Mv(document.getElementById("viewer"),t,mi()))}),ao.push(()=>D&&D()),document.getElementById("pngBtn").onclick=async()=>{qe("export_png",{id:i});const P=await Yr(t,"light",760,620),C=Xr(t,{theme:"print",material:li(Se.material),isoHref:P,width:3508,height:2480}).svg,I=new Image,st=URL.createObjectURL(new Blob([C],{type:"image/svg+xml"}));I.onload=()=>{const M=document.createElement("canvas");M.width=3508,M.height=2480;const S=M.getContext("2d");S.fillStyle="#fff",S.fillRect(0,0,M.width,M.height),S.drawImage(I,0,0,M.width,M.height),URL.revokeObjectURL(st),M.toBlob(W=>{const j=document.createElement("a");j.href=URL.createObjectURL(W),j.download=`cad-drill-${t.id}.png`,j.click(),setTimeout(()=>URL.revokeObjectURL(j.href),2e3)},"image/png")},I.src=st},document.getElementById("printBtn").onclick=async()=>{qe("print",{id:i});const P=await Yr(t,"light",760,620);Hv.innerHTML=`<div class="print-page">${Xr(t,{theme:"print",material:li(Se.material),isoHref:P}).svg}</div>`,document.body.classList.add("printing-one");const C=()=>{document.body.classList.remove("printing-one"),window.removeEventListener("afterprint",C)};window.addEventListener("afterprint",C),setTimeout(()=>window.print(),50)}}function Ju(i){$i("",`<div class="panel pad"><h2>No drill called “${Oe(i)}”</h2><p class="small">Drill codes look like E-12, M-450 or H-9001.</p><a class="btn" href="#/generate">Open the generator</a></div>`)}function $v(){const i={diff:sessionStorage.getItem("gen.diff")||"medium",family:sessionStorage.getItem("gen.family")||"any"},t=[["any","Any shape"],...Object.entries(al)].map(([c,d])=>`<option value="${c}" ${i.family===c?"selected":""}>${d}</option>`).join("");$i("generate",`
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
    </div>`);const e=document.getElementById("diffSeg");e.onclick=c=>{const d=c.target.closest("button");d&&(i.diff=d.dataset.d,sessionStorage.setItem("gen.diff",i.diff),e.querySelectorAll("button").forEach(f=>f.classList.toggle("on",f===d)))};const n=document.getElementById("famSel");n.onchange=()=>{i.family=n.value,sessionStorage.setItem("gen.family",i.family)};const r=c=>{const d=md(i.diff,c,i.family),f=JSON.parse(sessionStorage.getItem("gen.recent")||"[]").filter(u=>u!==d.id);f.unshift(d.id),sessionStorage.setItem("gen.recent",JSON.stringify(f.slice(0,6))),qe("generate",{id:d.id}),location.hash=`#/d/${d.id}`},s=()=>1+Math.floor(Math.random()*999999);document.getElementById("genBtn").onclick=()=>{const c=document.getElementById("seedIn").value.trim();r(c&&/^\d{1,9}$/.test(c)?Number(c):s())},document.getElementById("luckyBtn").onclick=()=>{i.diff=["easy","medium","hard"][Math.floor(Math.random()*3)],i.family="any",r(s())};const a=()=>{const c=document.getElementById("codeIn").value.trim().toUpperCase();if(!Qc(c)){document.getElementById("genMsg").textContent="Codes look like E-12, M-450 or H-9001.";return}location.hash=`#/d/${c}`};document.getElementById("codeBtn").onclick=a,document.getElementById("codeIn").onkeydown=c=>{c.key==="Enter"&&a()};const o=JSON.parse(sessionStorage.getItem("gen.recent")||"[]"),l=document.getElementById("recent");l.innerHTML=o.length?o.map(c=>{const d=Ks(c);return`<a class="card" href="#/d/${c}"><div class="thumb"><img alt="" data-thumb="${c}"/></div><div class="card-body"><div class="card-top">${wr(d.difficulty)}${Hi(c)}</div><div class="meta">${Oe(d.title)} · ${c}</div></div></a>`}).join(""):'<div class="empty">Nothing yet. Generate your first drill.</div>',l.querySelectorAll("img[data-thumb]").forEach(c=>ju(Ks(c.dataset.thumb),c))}function Wv(){const i={easy:[0,0],medium:[0,0],hard:[0,0]};for(const s of Tn.drills)i[s.spec.difficulty][1]++,Jr(s.id)==="solved"&&i[s.spec.difficulty][0]++;const e=[...new Set([...Object.keys(Se.attempts)])].map(s=>{let a;try{a=Sl(s)}catch{return""}const o=Se.attempts[s]||[],l=Se.solved[s],c=bl(s);return`<tr><td><a href="#/d/${s}" style="text-decoration:underline">${c?"#"+String(c.pack).padStart(2,"0")+" · ":""}${s}</a></td><td>${wr(a.difficulty)}</td><td>${o.length}</td><td>${l?'<span class="pill solved">✓ Solved</span>':'<span class="pill tried">Open</span>'}</td><td>${l&&l.timeMs?qs(l.timeMs):"–"}</td></tr>`}).join(""),n=Object.values(Se.solved).filter(s=>s.attempts===1).length,r=Object.values(Se.attempts).reduce((s,a)=>s+a.length,0);$i("progress",`
    <div class="section-head" style="margin-top:0"><h2>Your progress</h2><p>Stored in this browser only.</p></div>
    <section class="stats">
      <div class="stat"><b>${Object.keys(Se.solved).length}</b><span>drills solved</span></div>
      <div class="stat"><b>${lu()}</b><span>day streak</span></div>
      <div class="stat"><b>${n}</b><span>first-try solves</span></div>
      <div class="stat"><b>${r}</b><span>answers checked</span></div>
    </section>
    <div class="two-col">
      <div class="panel pad">
        <span class="label">Drill pack</span>
        ${Object.entries(i).map(([s,[a,o]])=>`<div style="margin:12px 0"><div class="row" style="justify-content:space-between;margin-bottom:6px">${wr(s)}<span class="small">${a} / ${o}</span></div><div class="bar"><i style="width:${a/o*100}%"></i></div></div>`).join("")}
      </div>
      <div class="panel pad">
        <span class="label">Data</span>
        <p class="small">Progress, attempts and settings live in this browser's local storage. Clearing site data removes them.</p>
        <button class="btn" id="resetBtn">Reset progress</button>
      </div>
    </div>
    <div class="section-head"><h2>Attempted drills</h2></div>
    <div class="panel table-scroll">${e?`<table><thead><tr><th>Drill</th><th>Level</th><th>Checks</th><th>Status</th><th>Best time</th></tr></thead><tbody>${e}</tbody></table>`:'<div class="empty">No attempts yet. <a href="#/" style="text-decoration:underline">Pick a drill</a>.</div>'}</div>`),document.getElementById("resetBtn").onclick=()=>{confirm("Erase all local progress, attempts and test data?")&&(zd(),Object.assign(Se,vi()),vo())}}function Xv(){/[?&]pdf=1/.test(location.search)&&document.body.classList.add("printing-pack"),$i("print",`
    <div class="no-print">
      <div class="section-head" style="margin-top:0"><h2>Printable drill pack</h2><p>All 20 drills as A4 landscape sheets: the free PDF for the video description.</p></div>
      <div class="row" style="margin-bottom:16px">
        <button class="btn primary" id="printAll">Print / Save as PDF</button>
        <span class="small">Use “Save as PDF”, A4 landscape, margins none. Answers are not printed: people check them here.</span>
      </div>
    </div>
    <div class="print-pages" id="pages">${Tn.drills.map(i=>`<div class="print-page" data-id="${i.id}">${Xr(i.spec,{theme:"print"}).svg}</div>`).join("")}</div>`),(async()=>{for(const i of Tn.drills){const t=document.querySelector(`.print-page[data-id="${i.id}"]`);if(!t)return;try{const e=await Yr(i.spec,"light",760,620);t.innerHTML=Xr(i.spec,{theme:"print",isoHref:e}).svg}catch(e){console.warn(e)}}document.body.dataset.packReady="1"})(),document.getElementById("printAll").onclick=()=>{qe("print_pack"),document.body.classList.add("printing-pack");const i=()=>{document.body.classList.remove("printing-pack"),window.removeEventListener("afterprint",i)};window.addEventListener("afterprint",i),window.print()}}function qv(i){qe("upgrade_open",{source:i});const t=document.createElement("div");t.className="overlay",t.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="fmTitle">
      <button class="icon-btn close" aria-label="Close">${yr.close}</button>
      <div class="eyebrow">Founding members</div>
      <h2 id="fmTitle">Unlimited CAD drills</h2>
      <div class="price">Free<small> to join. No card, nothing for sale yet</small></div>
      <ul class="ticks">
        <li>A fresh generated drill every day, at the level you choose, plus endless practice</li>
        <li>More real-life, printable projects like the pot and the phone stand</li>
        <li>Printable PDF packs for classes and clubs</li>
        <li>Works with FreeCAD, Onshape, Fusion and SOLIDWORKS</li>
      </ul>
      <div id="fmBody">
        <button class="btn primary" id="fmYes" style="width:100%;height:46px">Count me in</button>
        <p class="small" style="margin:10px 0 0;text-align:center">If it opens, the plan is $${Bv}/month, locked in for founding members, and you can say no then. Clicking now just tells me to build it.</p>
      </div>
    </div>`,document.body.appendChild(t);const e=()=>{t.remove(),document.removeEventListener("keydown",n)},n=r=>{r.key==="Escape"&&e()};document.addEventListener("keydown",n),t.addEventListener("mousedown",r=>{r.target===t&&e()}),t.querySelector(".close").onclick=e,t.querySelector("#fmYes").onclick=()=>{qe("upgrade_click",{source:i}),t.querySelector("#fmBody").innerHTML=`
      <div class="result show info" style="margin:0 0 12px"><strong>Thanks, that's counted.</strong> Nothing was charged. Leave your email and you'll hear first when founding spots open.</div>
      ${Ku("founding-"+i)}`,Zu()}}function Yv(i){const t=Pv(i);if(!t)return Ju(i);Zr.find(h=>h.id===Se.realMaterial)||(Se.realMaterial="pla");const e=li(Se.realMaterial),n=jr.indexOf(t),r=jr[n-1],s=jr[n+1];qe("view_drill",{id:i}),$i("home",`
    <div class="drill-head"><a class="back" href="#/">${yr.back}Drill pack</a></div>
    <div class="drill-head">
      <h1>${Oe(t.id)} · ${Oe(t.label)}</h1>${wr(t.difficulty)}<span id="statusPill">${Hi(i)}</span>
      <span class="meta">Real part · ${t.skills.map(Oe).join(" · ")}</span>
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
            <select id="matSel" aria-label="Material">${Zr.map(h=>`<option value="${h.id}" ${h.id===e.id?"selected":""}>${h.label} · ${h.density} g/cm³</option>`).join("")}</select>
          </div>
          <div class="field"><div class="input-wrap"><input class="input" id="massIn" inputmode="decimal" autocomplete="off" placeholder="Mass" aria-label="Mass in grams"/><span class="unit">g</span></div></div>
          <button class="btn primary" id="checkBtn" style="width:100%">Check mass</button>
          <div class="result" id="result" role="status" aria-live="polite"></div>
          <ul class="attempts" id="attempts"></ul>
          <p class="small" style="margin:12px 0 0">Same grams means your model matches the drawing. Graded within ±${co*100}%; if you're off, it names the likely mistake.</p>
        </div>
        <div class="panel">
          <span class="label">Print it</span>
          <p class="small" style="margin:6px 0 12px">${Oe(t.blurb)}</p>
          <a class="btn" id="stlBtn" href="${t.stl}" download>Download STL</a>
          <p class="small" style="margin:10px 0 0">Your slicer's filament estimate will be lower than the solid weight if you print with less than 100% infill.</p>
        </div>
        <div class="panel upsell">
          <h3>Want more projects like this?</h3>
          <p class="small" style="margin:6px 0 12px">Founding members get more printable projects like this one, plus endless generated drills. Joining is free: nothing is for sale yet.</p>
          <button class="btn gold-outline" data-upgrade="real-panel" style="width:100%">Become a founding member</button>
        </div>
      </aside>
    </div>`);const a=document.getElementById("sheetWrap");let o=1;const l=()=>{a.innerHTML=Fv(t,{theme:mi()==="dark"?"dark":"light",isoHref:t.iso}).svg},c=()=>{a.style.width=`${o*100}%`,document.getElementById("zLbl").textContent=`${Math.round(o*100)}%`};l(),c(),document.getElementById("zIn").onclick=()=>{o=Math.min(4,o*1.25),c()},document.getElementById("zOut").onclick=()=>{o=Math.max(1,o/1.25),c()},document.getElementById("zFit").onclick=()=>{o=1,c()},document.getElementById("printBtn").onclick=()=>{qe("print_real",{id:i}),window.print()};const d=document.getElementById("matSel");d.onchange=()=>{Se.realMaterial=d.value,Vi()};const f=document.getElementById("massIn"),u=document.getElementById("result"),p=(h,g)=>{u.className=`result show ${h}`,u.innerHTML=g},_=()=>{const h=(Se.attempts[i]||[]).slice(-5).reverse();document.getElementById("attempts").innerHTML=h.map(g=>`<li><span>${g.correct?"✓":"✗"} ${Oe(g.value)} g</span><span>${g.density} g/cm³ · ${new Date(g.t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></li>`).join("")};_();const x=()=>{const h=f.value.trim().replace(",","."),g=li(Se.realMaterial),b=Ov(t,h,g.density);if(b.errorPct==null){p("info",Oe(b.hint));return}au(i,Number(h),g.density,b.correct,null),qe("check",{id:i,correct:b.correct}),b.correct?(qe("solve",{id:i}),p("ok",`<strong>Correct!</strong> ${ol(b.expected)} g (${lo(b.errorPct)}).${s?` <a href="#/p/${s.id}" style="text-decoration:underline">Next part →</a>`:""}`),document.getElementById("statusPill").innerHTML=Hi(i)):p("bad",`<strong>Not quite</strong> (${lo(b.errorPct)}).<br/>${Oe(b.hint)}`),_()};document.getElementById("checkBtn").onclick=x,f.onkeydown=h=>{h.key==="Enter"&&x()},document.getElementById("stlBtn").onclick=()=>qe("stl_download",{id:i,solved:Jr(i)==="solved"})}function vo(){ao.forEach(n=>{try{n()}catch{}}),ao=[],document.querySelectorAll(".overlay").forEach(n=>n.remove());const i=location.hash||"#/",t=/^#\/d\/([A-Za-z]-\d+)$/.exec(i),e=/^#\/p\/(P-\d+)$/i.exec(i);e?Yv(e[1].toUpperCase()):t?Gv(t[1].toUpperCase()):i==="#/generate"?$v():i==="#/progress"?Wv():i==="#/print"?Xv():Vv(),window.scrollTo(0,0)}window.addEventListener("hashchange",()=>{vo(),Yu()});vo();
