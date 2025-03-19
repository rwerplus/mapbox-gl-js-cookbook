import{_ as i,c as p,a as c,b as n,d as e,w as l,e as o,r,o as h}from"./app-BqUsP7s4.js";const m={};function d(u,a){const s=r("common-code-view"),t=r("ClientOnly");return h(),p("div",null,[a[0]||(a[0]=c(`<h1 id="echartslayer" tabindex="-1"><a class="header-anchor" href="#echartslayer"><span>EChartsLayer</span></a></h1><p><a href="https://www.npmjs.com/package/@naivemap/mapbox-gl-echarts-layer" target="_blank" rel="noopener noreferrer">@naivemap/mapbox-gl-echarts-layer</a> 可直接在 Mapbox GL JS 中使用 Apache ECharts 的 <a href="https://echarts.apache.org/zh/option.html#series-scatter" target="_blank" rel="noopener noreferrer">scatter</a>、<a href="https://echarts.apache.org/zh/option.html#series-effectScatter" target="_blank" rel="noopener noreferrer">effectScatter</a> 和 <a href="https://echarts.apache.org/zh/option.html#series-lines" target="_blank" rel="noopener noreferrer">lines</a>。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># yarn</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @naivemap/mapbox-gl-echarts-layer echarts</span>
<span class="line"><span class="token comment"># 或 npm</span></span>
<span class="line"><span class="token function">npm</span> i @naivemap/mapbox-gl-echarts-layer echarts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> EchartsLayer <span class="token keyword">from</span> <span class="token string">&#39;@naivemap/mapbox-gl-echarts-layer&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EchartsLayer</span><span class="token punctuation">(</span><span class="token string">&#39;layer-id&#39;</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="散点图" tabindex="-1"><a class="header-anchor" href="#散点图"><span>散点图</span></a></h2>`,5)),n(t,null,{default:l(()=>[n(s,{name:"plugins-echarts-scatter"})]),_:1}),a[1]||(a[1]=e("blockquote",null,[e("p",null,[o("参考："),e("a",{href:"https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap",target:"_blank",rel:"noopener noreferrer"},"全国主要城市空气质量 - 百度地图")])],-1)),a[2]||(a[2]=e("h2",{id:"路径图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#路径图"},[e("span",null,"路径图")])],-1)),n(t,null,{default:l(()=>[n(s,{name:"plugins-echarts-lines"})]),_:1})])}const b=i(m,[["render",d]]),f=JSON.parse('{"path":"/plugins/echarts-layer.html","title":"EChartsLayer","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"散点图","slug":"散点图","link":"#散点图","children":[]},{"level":2,"title":"路径图","slug":"路径图","link":"#路径图","children":[]}],"git":{"updatedTime":1700142895000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":3,"url":"https://github.com/huanglii"},{"name":"huangli","username":"huangli","email":"naivemap@163.com","commits":1,"url":"https://github.com/huangli"}],"changelog":[{"hash":"de56f439644b31a25f379340c53acf88220971d8","time":1700142895000,"email":"naivemap@163.com","author":"huanglii","message":"Update"},{"hash":"460ec4fe6c86fa0ca77ea05498d5d5f3d4058ea1","time":1678601485000,"email":"naivemap@163.com","author":"huanglii","message":"update"},{"hash":"67df14b519058b136bf34bdf33bb25858b51d6fd","time":1678520011000,"email":"naivemap@163.com","author":"huangli","message":"feat: polygon-morpher (#19)"},{"hash":"102b6c3a0fb730dfe559bcc4a8d2b196fb6274c1","time":1662556077000,"email":"li.huangli@qq.com","author":"huanglii","message":"add plugins"}]},"filePathRelative":"plugins/echarts-layer.md"}');export{b as comp,f as data};
