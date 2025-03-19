import{_ as e,c as l,b as s,a as o,w as c,r as a,o as i}from"./app-BqUsP7s4.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),l("div",null,[s(t,null,{default:c(()=>[s(p,{name:"thematic-contours","is-code-view":!1})]),_:1}),n[0]||(n[0]=o(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-map</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">107.781722</span><span class="token punctuation">,</span> <span class="token number">30.194068</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;contours-source&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;vector&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;mapbox://mapbox.mapbox-terrain-v2&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;contours-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;contours-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;source-layer&#39;</span><span class="token operator">:</span> <span class="token string">&#39;contour&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;line-join&#39;</span><span class="token operator">:</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;line-cap&#39;</span><span class="token operator">:</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;line-color&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ele&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;#FEF3E0&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;#FFBD9F&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;#F07E5C&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;#BA1929&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;#900502&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;line-width&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;case&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ele&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;poi-label&#39;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r]]),v=JSON.parse('{"path":"/example/thematic-contours.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1669447413000,"contributors":[{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":2,"url":"https://github.com/huangli"},{"name":"黄俐","username":"","email":"li.huangli@qq.com","commits":1}],"changelog":[{"hash":"7cbafead4a4947c3f0310ca1798faeec70cebacc","time":1669447413000,"email":"naivemap@163.com","author":"huangli","message":"ts lang (#16)"},{"hash":"b1b689a83a6fd54ce02da4ef833162bd960f5425","time":1631424814000,"email":"li.huangli@qq.com","author":"黄俐","message":"2.0.0"},{"hash":"0d8c195f6ebc6bbddb1f94c3d2f4dd5dded28e34","time":1574848879000,"email":"849151701@qq.com","author":"huangli","message":"add echart-pie"}]},"filePathRelative":"example/thematic-contours.md"}');export{m as comp,v as data};
