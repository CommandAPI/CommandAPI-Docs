import{_ as l,c as h,G as e,w as n,am as r,a,f as i,B as p,o as k}from"./chunks/framework.COPtEDDn.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading-parts/9.0.3-to-9.1.0.md","filePath":"en/upgrading-parts/9.0.3-to-9.1.0.md","lastUpdated":1734097591000}'),d={name:"upgrading-parts/9.0.3-to-9.1.0.md"};function o(g,s,u,E,m,c){const t=p("TitleAnchor");return k(),h("div",null,[e(t,{anchor:"multi-literal-argument-changes"},{default:n(()=>s[0]||(s[0]=[a("h3",{id:"multi-literal-argument-changes",tabindex:"-1"},[i("MultiLiteralArgument changes "),a("a",{class:"header-anchor",href:"#multi-literal-argument-changes","aria-label":'Permalink to "MultiLiteralArgument changes"'},"​")],-1)])),_:1}),s[2]||(s[2]=r(`<p>All <code>MultiLiteralArgument</code> constructors have been deprecated in 9.1.0! Instead, the new <code>MultiLiteralArgument</code> constructor should be used:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withArguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MultiLiteralArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gamemodes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, List.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;survival&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;creative&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adventure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))) </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withArguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MultiLiteralArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gamemodes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;survival&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;creative&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adventure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span></span></code></pre></div>`,2)),e(t,{anchor:"command-arguments-changes"},{default:n(()=>s[1]||(s[1]=[a("h3",{id:"command-arguments-changes",tabindex:"-1"},[i("CommandArguments changes "),a("a",{class:"header-anchor",href:"#command-arguments-changes","aria-label":'Permalink to "CommandArguments changes"'},"​")],-1)])),_:1}),s[3]||(s[3]=a("p",null,[i("For 9.1.0 all deprecated methods are no longer deprecated. To learn about all the methods now available, refer to the "),a("a",{href:"./../create-commands/arguments/command-arguments"},"CommandArguments"),i(" page.")],-1))])}const f=l(d,[["render",o]]);export{y as __pageData,f as default};
