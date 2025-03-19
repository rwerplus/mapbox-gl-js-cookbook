import{_ as e,c as o,b as s,a as l,w as c,r as a,o as i}from"./app-BqUsP7s4.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),o("div",null,[s(t,null,{default:c(()=>[s(p,{name:"custom-source","is-code-view":!1})]),_:1}),n[0]||(n[0]=l(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> mapboxgl <span class="token keyword">from</span> <span class="token string">&#39;mapbox-gl&#39;</span></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">source</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>CustomSourceInterface<span class="token operator">&lt;</span>ImageData<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;custom-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;raster&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tileSize</span><span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">loadTile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> z<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> tileSize <span class="token operator">=</span> <span class="token number">256</span></span>
<span class="line">      <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> tileSize</span>
<span class="line">      <span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#74a9cf&#39;</span></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> tileSize<span class="token punctuation">,</span> tileSize<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&#39;18px serif&#39;</span></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;white&#39;</span></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span></span>
<span class="line">      context<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>z<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> tileSize <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> tileSize <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> tileSize<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">const</span> imageData <span class="token operator">=</span> context<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> tileSize<span class="token punctuation">,</span> tileSize<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> imageData</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">hasTile</span><span class="token punctuation">(</span><span class="token parameter">tile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">(</span>tile<span class="token punctuation">.</span>x <span class="token operator">+</span> tile<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;custom-source&#39;</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;custom-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;raster&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;custom-source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;raster-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;raster-fade-duration&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r]]),v=JSON.parse('{"path":"/example/custom-source.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1652368682000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/huanglii"}],"changelog":[{"hash":"e466e38e9481064a2a488331037e6396f1bf8533","time":1652368682000,"email":"li.huangli@qq.com","author":"huanglii","message":"doc: update"}]},"filePathRelative":"example/custom-source.md"}');export{m as comp,v as data};
