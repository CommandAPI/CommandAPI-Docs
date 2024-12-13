import{_ as i,c as s,G as a,w as n,a as o,am as c,B as d,o as m,f as r}from"./chunks/framework.COPtEDDn.js";const g=JSON.parse('{"title":"Project Structure","description":"","frontmatter":{"order":2,"authors":["JorelAli"]},"headers":[],"relativePath":"contribution/project-structure.md","filePath":"en/contribution/project-structure.md","lastUpdated":1734097591000}'),l={name:"contribution/project-structure.md"};function p(h,e,u,f,P,I){const t=d("TitleAnchor");return m(),s("div",null,[a(t,{anchor:"project-structure"},{default:n(()=>e[0]||(e[0]=[o("h1",{id:"project-structure",tabindex:"-1"},[r("Project Structure "),o("a",{class:"header-anchor",href:"#project-structure","aria-label":'Permalink to "Project Structure"'},"​")],-1)])),_:1}),e[2]||(e[2]=o("p",null,"The CommandAPI is a relatively large project (especially from the standpoint of one guy, because the CommandAPI was written by just one guy in their spare time!) and trying to figure out what everything does is a nightmare without any guidance. I've always felt that other community project structures aren't well documented and contributing to them can be daunting. Here's the CommandAPI's project structure for you!",-1)),a(t,{anchor:"command-api-submodule-folders"},{default:n(()=>e[1]||(e[1]=[o("h2",{id:"command-api-submodule-folders",tabindex:"-1"},[r("CommandAPI submodule folders "),o("a",{class:"header-anchor",href:"#command-api-submodule-folders","aria-label":'Permalink to "CommandAPI submodule folders"'},"​")],-1)])),_:1}),e[3]||(e[3]=c("<p>This is where all of the code is for the CommandAPI. The CommandAPI is a Maven project with multiple modules which each serves a different purpose:</p><ul><li><p><code>commandapi-preprocessor</code> - The CommandAPI uses a bit of reflection to perform things which could not normally be done (for example, allowing custom commands in datapacks). Reflection is inherently unsafe and can lead to runtime errors if specific fields or methods are not present. The CommandAPI preprocessor project is a source annotation processor that checks all declared reflection calls and looks up at compile-time whether those calls are possible - if not, it prevents the CommandAPI from building. In short, it&#39;s a compile-time reflection checker.</p></li><li><p><code>commandapi-x.x.x</code> - The CommandAPI needs to access various NMS methods in order to operate. These are implemented for the specific version given by <code>x.x.x</code>. For example, to support Minecraft <code>1.16.5</code>, the project is <code>commandapi-1.16.5</code>. The <code>NMS</code> class implementation is done in these version-specific files.</p></li><li><p><code>commandapi-core</code> - The main brains of the CommandAPI. This includes both the code that makes the CommandAPI run, as well as the API which developers can use.</p></li><li><p><code>commandapi-vh</code> - The CommandAPI version handler. This is a super tiny project which simply links up all of the NMS version-specific files into the CommandAPI. This is only used for the actual running of the CommandAPI (e.g., the CommandAPI plugin or shading the CommandAPI). This ensures proper compile-time safety of NMS implementations.</p></li><li><p><code>commandapi-plugin</code> - It&#39;s the CommandAPI plugin! This is the project which is used for releases to both GitHub and Spigot. It&#39;s the CommandAPI all in one neat package, with a few extra features such as config-based command conversion for server owners (or other non-developers)</p></li><li><p><code>commandapi-shade</code> - It&#39;s the CommandAPI, but in shade-able format. It has none of the features of the CommandAPI plugin variant and can be shaded into your own plugins. Effectively, it&#39;s <code>commandapi-core</code> + <code>commandapi-vh</code> with all of the <code>commandapi-x.x.x</code> NMS implementations included.</p></li><li><p><code>commandapi-annotations</code> - The CommandAPI annotations project is a small compile-time annotation processor that writes CommandAPI code for you. Using a compile-time annotation processor makes the server run so much faster than using a runtime-annotation processor, because annotation processing requires reflection to inspect class metadata.</p></li></ul>",2))])}const A=i(l,[["render",p]]);export{g as __pageData,A as default};
