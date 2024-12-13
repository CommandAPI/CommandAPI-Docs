import{_ as r,c as d,G as i,w as n,a,f as e,am as o,B as h,o as l}from"./chunks/framework.COPtEDDn.js";const f=JSON.parse('{"title":"FAQ","description":"","frontmatter":{"order":14,"authors":["JorelAli"]},"headers":[],"relativePath":"faq.md","filePath":"en/faq.md","lastUpdated":1734097591000}'),m={name:"faq.md"};function g(p,s,u,c,k,E){const t=h("TitleAnchor");return l(),d("div",null,[i(t,{anchor:"faq"},{default:n(()=>s[0]||(s[0]=[a("h1",{id:"faq",tabindex:"-1"},[e("FAQ "),a("a",{class:"header-anchor",href:"#faq","aria-label":'Permalink to "FAQ"'},"​")],-1)])),_:1}),s[9]||(s[9]=a("p",null,"Here's a list of questions that have come up time and time again which all have the same answer.",-1)),i(t,{anchor:"how-do-i-use-insert-feature-here-in-the-command-api"},{default:n(()=>s[1]||(s[1]=[a("h2",{id:"how-do-i-use-insert-feature-here-in-the-command-api",tabindex:"-1"},[e("How do I use (insert feature here) in the CommandAPI? "),a("a",{class:"header-anchor",href:"#how-do-i-use-insert-feature-here-in-the-command-api","aria-label":'Permalink to "How do I use (insert feature here) in the CommandAPI?"'},"​")],-1)])),_:1}),s[10]||(s[10]=a("p",null,[e("The CommandAPI's documentation is the place to search for anything! In the top left corner of this documentation, you can find this "),a("i",{class:"fas fa-search"}),e(" icon. You can pretty much search for anything - it'll find it!")],-1)),i(t,{anchor:"does-the-command-api-support-reloading-via-reload"},{default:n(()=>s[2]||(s[2]=[a("h2",{id:"does-the-command-api-support-reloading-via-reload",tabindex:"-1"},[e("Does the CommandAPI support reloading via "),a("code",null,"/reload"),e("? "),a("a",{class:"header-anchor",href:"#does-the-command-api-support-reloading-via-reload","aria-label":'Permalink to "Does the CommandAPI support reloading via `/reload`?"'},"​")],-1)])),_:1}),s[11]||(s[11]=a("p",null,[e("Formally, no. If you are encountering issues with "),a("code",null,"/reload"),e(", consider not using "),a("code",null,"/reload"),e(". More information about reloading can be found in "),a("a",{href:"./utils/reload"},"Plugin reloading"),e(".")],-1)),i(t,{anchor:"does-the-command-api-support-optional-arguments"},{default:n(()=>s[3]||(s[3]=[a("h2",{id:"does-the-command-api-support-optional-arguments",tabindex:"-1"},[e("Does the CommandAPI support optional arguments? "),a("a",{class:"header-anchor",href:"#does-the-command-api-support-optional-arguments","aria-label":'Permalink to "Does the CommandAPI support optional arguments?"'},"​")],-1)])),_:1}),s[12]||(s[12]=a("p",null,[e("As of 9.0.0, yes! Please view information on optional arguments in "),a("a",{href:"./create-commands/arguments/optional-arguments"},"Optional arguments"),e(".")],-1)),i(t,{anchor:"does-the-command-api-support-suggestions-in-the-annotation-system"},{default:n(()=>s[4]||(s[4]=[a("h2",{id:"does-the-command-api-support-suggestions-in-the-annotation-system",tabindex:"-1"},[e("Does the CommandAPI support suggestions in the annotation system? "),a("a",{class:"header-anchor",href:"#does-the-command-api-support-suggestions-in-the-annotation-system","aria-label":'Permalink to "Does the CommandAPI support suggestions in the annotation system?"'},"​")],-1)])),_:1}),s[13]||(s[13]=a("p",null,[e("Not yet. The CommandAPI's annotation system was actually originally a little test on writing a compile-time annotation system which actually worked out much better than I had intended. I plan to rewrite the CommandAPI's annotation system to make it much more powerful (and support suggestions!). This is stated in the "),a("a",{href:"https://github.com/CommandAPI/CommandAPI#future-project-plans--timeline",target:"_blank",rel:"noreferrer"},"project roadmap")],-1)),i(t,{anchor:"can-you-add-tooltips-to-literal-multiliteral-arguments"},{default:n(()=>s[5]||(s[5]=[a("h2",{id:"can-you-add-tooltips-to-literal-multiliteral-arguments",tabindex:"-1"},[e("Can you add tooltips to literal/multiliteral arguments? "),a("a",{class:"header-anchor",href:"#can-you-add-tooltips-to-literal-multiliteral-arguments","aria-label":'Permalink to "Can you add tooltips to literal/multiliteral arguments?"'},"​")],-1)])),_:1}),s[14]||(s[14]=o('<p>No. This is a Brigadier limitation.</p><div class="info custom-block"><p class="custom-block-title">Technical reason that this is a limitation of Brigadier</p><p>Brigadier&#39;s code has two classes for arguments, <a href="https://github.com/Mojang/brigadier/blob/master/src/main/java/com/mojang/brigadier/tree/LiteralCommandNode.java" target="_blank" rel="noreferrer"><code>LiteralCommandNode</code></a> and <a href="https://github.com/Mojang/brigadier/blob/master/src/main/java/com/mojang/brigadier/tree/ArgumentCommandNode.java" target="_blank" rel="noreferrer"><code>ArgumentCommandNode</code></a>. The <code>ArgumentCommandNode</code> class contains a field <code>customSuggestions</code> of type <code>SuggestionProvider&lt;S&gt;</code> which is used to handle suggestions - this field is not present inside <code>LiteralCommandNode</code>, meaning that LiteralArguments cannot provide suggestions to users.</p><p>We need suggestions to provide tooltips. This is because <a href="https://github.com/Mojang/brigadier/blob/master/src/main/java/com/mojang/brigadier/suggestion/SuggestionProvider.java#L13" target="_blank" rel="noreferrer"><code>SuggestionProvider</code> provides us with an instance of <code>SuggestionsBuilder</code></a>, <a href="https://github.com/Mojang/brigadier/blob/cf754c4ef654160dca946889c11941634c5db3d5/src/main/java/com/mojang/brigadier/suggestion/SuggestionsBuilder.java#L20" target="_blank" rel="noreferrer"><code>SuggestionsBuilder</code> contains a <code>List&lt;Suggestion&gt;</code></a> and the <a href="https://github.com/Mojang/brigadier/blob/cf754c4ef654160dca946889c11941634c5db3d5/src/main/java/com/mojang/brigadier/suggestion/Suggestion.java#L14" target="_blank" rel="noreferrer"><code>Suggestion</code> class contains <code>Message</code></a>. This <code>Message</code> class is what is needed to display a tooltip to users.</p></div>',2)),i(t,{anchor:"can-i-change-the-message-that-is-sent-to-the-user-when-they-dont-have-permission-to-run-a-command"},{default:n(()=>s[6]||(s[6]=[a("h2",{id:"can-i-change-the-message-that-is-sent-to-the-user-when-they-dont-have-permission-to-run-a-command",tabindex:"-1"},[e("Can I change the message that is sent to the user when they don't have permission to run a command? "),a("a",{class:"header-anchor",href:"#can-i-change-the-message-that-is-sent-to-the-user-when-they-dont-have-permission-to-run-a-command","aria-label":`Permalink to "Can I change the message that is sent to the user when they don't have permission to run a command?"`},"​")],-1)])),_:1}),s[15]||(s[15]=o(`<p>No. That message is handled client-side and isn&#39;t controlled by the CommandAPI. An alternative solution is to perform permission checking <em>inside</em> the command and return a custom message if it&#39;s not satisfied:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CommandAPICommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mycommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;some.permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">executes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((sender, args) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sender.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;some.permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) { </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">failWithString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;You don&#39;t have permission to run /mycommand!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sender.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,2)),i(t,{anchor:"can-i-change-the-message-that-is-sent-to-the-user-when-an-argument-isnt-valid"},{default:n(()=>s[7]||(s[7]=[a("h2",{id:"can-i-change-the-message-that-is-sent-to-the-user-when-an-argument-isnt-valid",tabindex:"-1"},[e("Can I change the message that is sent to the user when an argument isn't valid? "),a("a",{class:"header-anchor",href:"#can-i-change-the-message-that-is-sent-to-the-user-when-an-argument-isnt-valid","aria-label":`Permalink to "Can I change the message that is sent to the user when an argument isn't valid?"`},"​")],-1)])),_:1}),s[16]||(s[16]=a("p",null,"No. That message is handled client-side and isn't controlled by the CommandAPI.",-1)),i(t,{anchor:"my-suggestions-on-my-arguments-are-empty-or-dont-update-how-do-i-make-dynamic-suggestions"},{default:n(()=>s[8]||(s[8]=[a("h2",{id:"my-suggestions-on-my-arguments-are-empty-or-dont-update-how-do-i-make-dynamic-suggestions",tabindex:"-1"},[e("My suggestions on my arguments are empty or don't update. How do I make dynamic suggestions? "),a("a",{class:"header-anchor",href:"#my-suggestions-on-my-arguments-are-empty-or-dont-update-how-do-i-make-dynamic-suggestions","aria-label":`Permalink to "My suggestions on my arguments are empty or don't update. How do I make dynamic suggestions?"`},"​")],-1)])),_:1}),s[17]||(s[17]=o(`<p>Arguments with suggestions provided using <code>ArgumentSuggestions.strings(String...)</code> are calculated <em>when the command is registered</em>. In order to have argument suggestions calculated <em>when the command is being typed</em>, you need to use the lambda-variant of the <code>ArgumentSuggestions.strings(Function&lt;SuggestionInfo, String[]&gt; suggestions)</code> method instead. More information about the different methods can be found <a href="./create-commands/arguments/suggestions/suggestions#the-argumentsuggestions-interface">here</a>.</p><p>The easiest way to do this is to add <code>info -&gt;</code> at the start of your array:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SomeClass.someArray); </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(info </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SomeClass.someArray); </span></span></code></pre></div>`,3))])}const b=r(m,[["render",g]]);export{f as __pageData,b as default};
