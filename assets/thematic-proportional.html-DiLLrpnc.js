import{_ as e,c as l,b as s,a as c,w as o,r as a,o as i}from"./app-BqUsP7s4.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),l("div",null,[s(t,null,{default:o(()=>[s(p,{name:"thematic-proportional","is-code-view":!1})]),_:1}),n[0]||(n[0]=c(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-map</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/constant&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">GRAY</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">107.744809</span><span class="token punctuation">,</span> <span class="token number">30.180706</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// const MAX_R = 15 // 最大半径</span></span>
<span class="line">  <span class="token comment">// const MIN_R = 5 // 最小半径</span></span>
<span class="line">  <span class="token comment">// const MAX_V = 10 // 字段最大值</span></span>
<span class="line">  <span class="token comment">// const MIN_V = 0 // 字段最小值</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;proportion-source&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;geojson&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">withBase</span><span class="token punctuation">(</span><span class="token string">&#39;/data/point.geojson&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;proportion-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;proportion-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// &#39;circle-radius&#39;: (MAX_R - MIN_R) / (MAX_V - MIN_V) * (V - MIN_V) + MIN_R,</span></span>
<span class="line">      <span class="token comment">// &#39;circle-radius&#39;: [</span></span>
<span class="line">      <span class="token comment">//   &#39;+&#39;,</span></span>
<span class="line">      <span class="token comment">//   [&#39;*&#39;,</span></span>
<span class="line">      <span class="token comment">//     [</span></span>
<span class="line">      <span class="token comment">//       &#39;/&#39;,</span></span>
<span class="line">      <span class="token comment">//       [&#39;-&#39;, MAX_R, MIN_R],</span></span>
<span class="line">      <span class="token comment">//       [&#39;-&#39;, MAX_V, MIN_V]</span></span>
<span class="line">      <span class="token comment">//     ],</span></span>
<span class="line">      <span class="token comment">//     [&#39;-&#39;, [&#39;get&#39;, &#39;v1&#39;], MIN_V]</span></span>
<span class="line">      <span class="token comment">//   ],</span></span>
<span class="line">      <span class="token comment">//   MIN_R</span></span>
<span class="line">      <span class="token comment">// ],</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-color&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#FFD273&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">2.5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#E86D68&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#A880FF&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">7.5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#68E0E8&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#9BFF69&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-width&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r]]),v=JSON.parse('{"path":"/example/thematic-proportional.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1669447413000,"contributors":[{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":2,"url":"https://github.com/huangli"},{"name":"黄俐","username":"","email":"li.huangli@qq.com","commits":1}],"changelog":[{"hash":"7cbafead4a4947c3f0310ca1798faeec70cebacc","time":1669447413000,"email":"naivemap@163.com","author":"huangli","message":"ts lang (#16)"},{"hash":"b1b689a83a6fd54ce02da4ef833162bd960f5425","time":1631424814000,"email":"li.huangli@qq.com","author":"黄俐","message":"2.0.0"},{"hash":"0d8c195f6ebc6bbddb1f94c3d2f4dd5dded28e34","time":1574848879000,"email":"849151701@qq.com","author":"huangli","message":"add echart-pie"}]},"filePathRelative":"example/thematic-proportional.md"}');export{m as comp,v as data};
