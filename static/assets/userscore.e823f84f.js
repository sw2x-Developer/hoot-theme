import{d as u,c}from"./index.b7b700e1.js";import{c as m,m as h}from"./index.7276ae65.js";function y(l,a,p,d,i){let e={title:{left:"center",text:"Score over Time"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:0,data:[a]},toolbox:{feature:{saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const n=[],r=[],o=p.concat(d);o.sort((t,s)=>new Date(t.date)-new Date(s.date));for(let t=0;t<o.length;t++){const s=u(o[t].date);n.push(s.toDate());try{r.push(o[t].challenge.value)}catch{r.push(o[t].value)}}return n.forEach(t=>{e.xAxis[0].data.push(t)}),e.series.push({name:a,type:"line",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{color:c(a+l)}},itemStyle:{normal:{color:c(a+l)}},data:m(r)}),i&&(e=h(e,i)),e}export{y as g};
