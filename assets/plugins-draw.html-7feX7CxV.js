import{_ as e,c as o,b as s,a as l,w as c,r as a,o as i}from"./app-BqUsP7s4.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),o("div",null,[s(t,null,{default:c(()=>[s(p,{name:"plugins-draw","is-code-view":!1})]),_:1}),n[0]||(n[0]=l(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-clickable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> MapboxDraw <span class="token keyword">from</span> <span class="token string">&quot;@mapbox/mapbox-gl-draw&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">107.744809</span><span class="token punctuation">,</span> <span class="token number">30.180706</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> draw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MapboxDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span>draw<span class="token punctuation">,</span> <span class="token string">&#39;top-left&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r]]),v=JSON.parse('{"path":"/example/plugins-draw.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1695215746000,"contributors":[{"name":"huanglii","username":"huanglii","email":"naivemap@163.com","commits":1,"url":"https://github.com/huanglii"}],"changelog":[{"hash":"498bfefbe80c5bd3ff479741a5356da564f56d95","time":1695215746000,"email":"naivemap@163.com","author":"huanglii","message":"darw"}]},"filePathRelative":"example/plugins-draw.md"}');export{m as comp,v as data};
