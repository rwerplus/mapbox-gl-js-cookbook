import{_ as e,c as o,b as n,a as l,w as c,r as a,o as i}from"./app-BqUsP7s4.js";const r={};function u(k,s){const p=a("common-code-view"),t=a("ClientOnly");return i(),o("div",null,[n(t,null,{default:c(()=>[n(p,{name:"thematic-dot","is-code-view":!1})]),_:1}),s[0]||(s[0]=l(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-map</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/constant&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">GRAY</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.3162548</span><span class="token punctuation">,</span> <span class="token number">36.9017491</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;dot-source&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;vector&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;mapbox://huanglii.d41k5fmy&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;dot-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;dot-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;source-layer&#39;</span><span class="token operator">:</span> <span class="token string">&#39;earthquakes-cs3906&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-color&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;step&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;#0098A3&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;#00CA8D&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;#37C508&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;#98F300&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;#EFFF85&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;poi-label&#39;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(r,[["render",u]]),v=JSON.parse('{"path":"/example/thematic-dot.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1669447413000,"contributors":[{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":2,"url":"https://github.com/huangli"},{"name":"黄俐","username":"","email":"li.huangli@qq.com","commits":1}],"changelog":[{"hash":"7cbafead4a4947c3f0310ca1798faeec70cebacc","time":1669447413000,"email":"naivemap@163.com","author":"huangli","message":"ts lang (#16)"},{"hash":"b1b689a83a6fd54ce02da4ef833162bd960f5425","time":1631424814000,"email":"li.huangli@qq.com","author":"黄俐","message":"2.0.0"},{"hash":"0d8c195f6ebc6bbddb1f94c3d2f4dd5dded28e34","time":1574848879000,"email":"849151701@qq.com","author":"huangli","message":"add echart-pie"}]},"filePathRelative":"example/thematic-dot.md"}');export{m as comp,v as data};
