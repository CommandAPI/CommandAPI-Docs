import{_ as l,c as p,G as t,w as e,am as n,B as k,o as d,a as i,f as h}from"./chunks/framework.COPtEDDn.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading-parts/8.5.1-to-8.6.0.md","filePath":"en/upgrading-parts/8.5.1-to-8.6.0.md","lastUpdated":1734097591000}'),r={name:"upgrading-parts/8.5.1-to-8.6.0.md"};function o(E,s,g,c,y,u){const a=k("TitleAnchor");return d(),p("div",null,[t(a,{anchor:"sound-arguments"},{default:e(()=>s[0]||(s[0]=[i("h3",{id:"sound-arguments",tabindex:"-1"},[h("Sound arguments "),i("a",{class:"header-anchor",href:"#sound-arguments","aria-label":'Permalink to "Sound arguments"'},"​")],-1)])),_:1}),s[4]||(s[4]=n(`<p>In 8.6.0, the <code>SoundArgument</code> now supports returning a <code>Sound</code> or <code>NamespacedKey</code> object. More information on how to use this can be found in the <a href="./../create-commands/arguments/types/misc/sound-arguments">Sound arguments</a> page. <code>SoundArgument</code> objects now require a generic type parameter to specify what the return type will be (either <code>Sound</code> or <code>NamespacedKey</code>). For the default behavior, use <code>Sound</code> as the generic type parameter:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SoundArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SoundArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div>`,2)),t(a,{anchor:"tooltips"},{default:e(()=>s[1]||(s[1]=[i("h3",{id:"tooltips",tabindex:"-1"},[h("Tooltips "),i("a",{class:"header-anchor",href:"#tooltips","aria-label":'Permalink to "Tooltips"'},"​")],-1)])),_:1}),s[5]||(s[5]=n(`<p>In 8.6.0, tooltips have been reworked to provide support for Spigot&#39;s <code>BaseComponent[]</code>s, and Adventure&#39;s <code>Component</code>s. As a result, the default method <code>StringTooltip.of()</code> and <code>Tooltip.of()</code> have been deprecated in favour of the better named <code>StringTooltip.ofString()</code> and <code>Tooltip.ofString()</code> methods:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StringTooltip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Waves at a player&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tooltip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSpawnLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;World spawn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StringTooltip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Waves at a player&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tooltip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSpawnLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;World spawn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div><p>Additionally, the <code>IStringTooltip</code> interface&#39;s <code>getTooltip</code> method was changed to return a Brigadier <code>Message</code> object instead of a <code>String</code>. To use the <code>IStringTooltip</code> directly, you now have to add Brigadier to your project&#39;s dependencies (info on how to do that can be found <a href="https://github.com/Mojang/brigadier#installation" target="_blank" rel="noreferrer">here</a>).</p><p>You can use the <code>Tooltip.messageFromString(String)</code> to easily upgrade to the new <code>Message</code> return type:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.itemstack.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItemMeta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tooltip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">messageFromString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.itemstack.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItemMeta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5)),t(a,{anchor:"command-failures"},{default:e(()=>s[2]||(s[2]=[i("h3",{id:"command-failures",tabindex:"-1"},[h("Command failures "),i("a",{class:"header-anchor",href:"#command-failures","aria-label":'Permalink to "Command failures"'},"​")],-1)])),_:1}),s[6]||(s[6]=n(`<p>To support Spigot&#39;s <code>BaseComponent[]</code>s and Adventure&#39;s <code>Component</code>s, the <code>CommandAPI.fail()</code> method has now been deprecated in favour of the better named <code>CommandAPI.failWithString()</code> method:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">failWithString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div>`,2)),t(a,{anchor:"list-arguments"},{default:e(()=>s[3]||(s[3]=[i("h3",{id:"list-arguments",tabindex:"-1"},[h("List arguments "),i("a",{class:"header-anchor",href:"#list-arguments","aria-label":'Permalink to "List arguments"'},"​")],-1)])),_:1}),s[7]||(s[7]=n(`<p>List arguments can now be implemented using an underlying text argument, instead of requiring it to be a greedy string. This allows you to use multiple lists in a command, in any position. As such, the <code>ListArgumentBuilder.build()</code> method has been deprecated and replaced with <code>ListArgumentBuilder.buildGreedy()</code> instead:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ListArgumentBuilder&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;materials&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(List.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Material.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(material </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> material.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">buildGreedy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span></code></pre></div>`,2))])}const f=l(r,[["render",o]]);export{F as __pageData,f as default};
