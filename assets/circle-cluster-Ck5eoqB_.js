import{_ as c,S as r}from"./base-map.vue_vue_type_style_index_0_lang-B5pwQwMc.js";import{f as s,g as i,o as n,k as a}from"./app-BqUsP7s4.js";const f=s({__name:"circle-cluster",setup(u){const e={style:r.DARK,center:[107.744809,30.180706],zoom:6,minZoom:4},o=t=>{t.addSource("points",{type:"geojson",data:a("/data/point.geojson"),cluster:!0,clusterMaxZoom:10,clusterRadius:50,clusterProperties:{sum:[["+",["accumulated"],["get","sum"]],["to-number",["get","v1"]]]}}),t.addLayer({id:"clusters",type:"circle",source:"points",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",5,"#f1f075",10,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,5,30,10,40]}}),t.addLayer({id:"cluster-count",type:"symbol",source:"points",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}}),t.addLayer({id:"unclustered-point",type:"circle",source:"points",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}})};return(t,l)=>(n(),i(c,{"map-options":e,onLoad:o}))}});export{f as default};
