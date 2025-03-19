import{_ as e,c as o,b as s,a as l,w as c,r as a,o as i}from"./app-BqUsP7s4.js";const r={};function u(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),o("div",null,[s(t,null,{default:c(()=>[s(p,{name:"data-circle","is-code-view":!1})]),_:1}),n[0]||(n[0]=l(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>220<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> point <span class="token keyword">as</span> pointHelper<span class="token punctuation">,</span> featureCollection <span class="token keyword">as</span> featureCollectionHelper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@turf/helpers&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">76.534</span><span class="token punctuation">,</span> <span class="token number">39.1817</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> point1 <span class="token operator">=</span> <span class="token function">pointHelper</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">76.536</span><span class="token punctuation">,</span> <span class="token number">39.1817</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">fid</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> point2 <span class="token operator">=</span> <span class="token function">pointHelper</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">76.534</span><span class="token punctuation">,</span> <span class="token number">39.1817</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">fid</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> point3 <span class="token operator">=</span> <span class="token function">pointHelper</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">76.532</span><span class="token punctuation">,</span> <span class="token number">39.1817</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">fid</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> fc <span class="token operator">=</span> <span class="token function">featureCollectionHelper</span><span class="token punctuation">(</span><span class="token punctuation">[</span>point1<span class="token punctuation">,</span> point2<span class="token punctuation">,</span> point3<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;points&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;geojson&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> fc<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;circle-layer-1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;points&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#DA4949&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.65</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-width&#39;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#DA4949&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fid&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;circle-layer-2&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;points&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#DA4949&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-blur&#39;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fid&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;circle-layer-3&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;points&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-width&#39;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#DA4949&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;circle-stroke-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fid&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(r,[["render",u]]),v=JSON.parse('{"path":"/example/data-circle.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1664527067000,"contributors":[{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":1,"url":"https://github.com/huangli"},{"name":"黄俐","username":"","email":"li.huangli@qq.com","commits":1},{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/huanglii"}],"changelog":[{"hash":"86a95a0a873d49a3dd6866e65cb505649ddffaf7","time":1664527067000,"email":"li.huangli@qq.com","author":"huanglii","message":"update"},{"hash":"b1b689a83a6fd54ce02da4ef833162bd960f5425","time":1631424814000,"email":"li.huangli@qq.com","author":"黄俐","message":"2.0.0"},{"hash":"0d8c195f6ebc6bbddb1f94c3d2f4dd5dded28e34","time":1574848879000,"email":"849151701@qq.com","author":"huangli","message":"add echart-pie"}]},"filePathRelative":"example/data-circle.md"}');export{m as comp,v as data};
