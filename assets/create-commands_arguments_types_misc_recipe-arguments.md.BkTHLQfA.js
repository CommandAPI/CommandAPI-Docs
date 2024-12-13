import{_ as p,c as r,G as e,w as l,a as i,f as s,am as E,B as k,o as d}from"./chunks/framework.COPtEDDn.js";const g="/images/arguments/recipe.png",f=JSON.parse('{"title":"Recipe arguments","description":"","frontmatter":{"order":12,"authors":["DerEchtePilz","JorelAli","willkroboth"]},"headers":[],"relativePath":"create-commands/arguments/types/misc/recipe-arguments.md","filePath":"en/create-commands/arguments/types/misc/recipe-arguments.md","lastUpdated":1734097591000}'),y={name:"create-commands/arguments/types/misc/recipe-arguments.md"},c={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},o={class:"tip custom-block"},F={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},m={class:"tip custom-block"};function u(C,a,B,v,b,A){const h=k("TitleAnchor"),t=k("PluginTabsTab"),n=k("PluginTabs");return d(),r("div",null,[e(h,{anchor:"recipe-arguments"},{default:l(()=>a[0]||(a[0]=[i("h1",{id:"recipe-arguments",tabindex:"-1"},[s("Recipe arguments "),i("a",{class:"header-anchor",href:"#recipe-arguments","aria-label":'Permalink to "Recipe arguments"'},"​")],-1)])),_:1}),a[11]||(a[11]=i("p",null,[i("img",{src:g,alt:"A recipe argument command with the suggestions for Minecraft items"})],-1)),a[12]||(a[12]=i("p",null,[s("The "),i("code",null,"RecipeArgument"),s(" class lets you retrieve Bukkit's "),i("code",null,"ComplexRecipe"),s(" object.")],-1)),i("div",c,[e(h,{anchor:"example-giving-a-player-the-result-of-a-recipe"},{default:l(()=>a[1]||(a[1]=[i("h3",{id:"example-giving-a-player-the-result-of-a-recipe",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[s("Example - Giving a player the result of a recipe "),i("a",{class:"header-anchor",href:"#example-giving-a-player-the-result-of-a-recipe"},"​")],-1)])),_:1})]),i("div",o,[a[5]||(a[5]=E('<p class="custom-block-title">Example - Giving a player the result of a recipe</p><p>Say we want to give yourself the result of a specific recipe. Since Bukkit&#39;s <code>Recipe</code> class contains the <code>getResult()</code> method, we will use that in our example. We want to create the following command:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">giverecipe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;recipe&gt;</span></span></code></pre></div><p>As such, we easily implement it by specifying the <code>RecipeArgument</code>, casting it and adding it to the player&#39;s inventory:</p>',4)),e(n,{sharedStateKey:"tabs-3"},{default:l(()=>[e(t,{label:"Java"},{default:l(()=>a[2]||(a[2]=[i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"giverecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," RecipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executesPlayer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((player, args) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ComplexRecipe recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (ComplexRecipe) args."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        player."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getInventory"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getResult"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),e(t,{label:"Kotlin"},{default:l(()=>a[3]||(a[3]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"giverecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RecipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executesPlayer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"PlayerCommandExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { player, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ComplexRecipe")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        player.inventory."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe.result)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),e(t,{label:"Kotlin DSL"},{default:l(()=>a[4]||(a[4]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"giverecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    recipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    playerExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { player, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ComplexRecipe")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        player.inventory."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe.result)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})]),i("div",F,[e(h,{anchor:"example-unlocking-a-recipe-for-a-player"},{default:l(()=>a[6]||(a[6]=[i("h3",{id:"example-unlocking-a-recipe-for-a-player",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[s("Example - Unlocking a recipe for a player "),i("a",{class:"header-anchor",href:"#example-unlocking-a-recipe-for-a-player"},"​")],-1)])),_:1})]),i("div",m,[a[10]||(a[10]=E('<p class="custom-block-title">Example - Unlocking a recipe for a player</p><p>In this example, we&#39;ll use the <code>ComplexRecipe</code>&#39;s <code>getKey()</code> method to write an example to unlock a recipe for a player. For this command, we&#39;ll use the following syntax:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unlockrecipe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;player&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;recipe&gt;</span></span></code></pre></div><p>This is then implemented trivially as follows:</p>',4)),e(n,{sharedStateKey:"tabs-3"},{default:l(()=>[e(t,{label:"Java"},{default:l(()=>a[7]||(a[7]=[i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unlockrecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," PlayerArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," RecipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((sender, args) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Player target "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (Player) args."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ComplexRecipe recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (ComplexRecipe) args."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        target."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"discoverRecipe"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),e(t,{label:"Kotlin"},{default:l(()=>a[8]||(a[8]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unlockrecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"PlayerArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RecipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," target "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Player")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ComplexRecipe")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        target."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"discoverRecipe"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe.key)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),e(t,{label:"Kotlin DSL"},{default:l(()=>a[9]||(a[9]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unlockrecipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    playerArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    recipeArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    anyExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," target "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"player"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Player")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," recipe "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"recipe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ComplexRecipe")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        target."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"discoverRecipe"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(recipe.key)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})])])}const D=p(y,[["render",u]]);export{f as __pageData,D as default};