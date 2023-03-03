import{ad as o,H as i,I as c,F as e,U as n,O as s,ae as t,X as l}from"./framework-0d2eacdd.js";const d={},r=t('<blockquote><p>开源工具、效率方法、心理学探索的自我提升笔记</p></blockquote><a href="https://discord.gg/PZTQfJ4GjX"><img src="http://tc.seoipo.com/2022-12-04-11-56-44.svg" alt="Discord"></a><a href="mailto:learndata@newzone.top"><img src="http://tc.seoipo.com/2022-12-04-11-58-19.svg" alt="Mail"></a><h2 id="✨-初衷" tabindex="-1"><a class="header-anchor" href="#✨-初衷" aria-hidden="true">#</a> ✨ 初衷</h2><p>曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。</p><p>更重要的是，<strong>笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。</strong></p><p>因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。</p><figure><img src="http://tc.seoipo.com/2022-08-22-19-28-25.png?imageMogr2/thumbnail/!80p" alt="" tabindex="0" loading="lazy"><figcaption>笔记 + 文章 = LearnData 知识库</figcaption></figure><figure><img src="http://tc.seoipo.com/2022-08-24-19-14-59.png" alt="" tabindex="0" loading="lazy"><figcaption>笔记/博客自动化发布</figcaption></figure><h2 id="🧱-笔记结构" tabindex="-1"><a class="header-anchor" href="#🧱-笔记结构" aria-hidden="true">#</a> 🧱 笔记结构</h2><ul><li>置顶：日常习惯、健身、阅读；</li><li>代码：常用代码的学习和使用笔记；</li><li>软件应用：常用应用、Chrome 扩展和相关教程；</li><li>页面开发：页面插件和框架生成工具；</li><li>网站部署：网站相关的工具和知识收集；</li><li>Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；</li><li>系统问题：Windows 系统优化和相关问题；</li><li>生活区：说明书、生活记录和小技巧；</li><li>博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。</li></ul><h2 id="🍥-搭建-learndata" tabindex="-1"><a class="header-anchor" href="#🍥-搭建-learndata" aria-hidden="true">#</a> 🍥 搭建 LearnData</h2>',12),p={href:"https://github.com/rockbenben/LearnData",target:"_blank",rel:"noopener noreferrer"},u=e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-08-10-19-32-05.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),h=e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-08-10-19-34-13.png?imageMogr2/thumbnail/!60p",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=t('<li><p>复制完成后，GitHub 会自动搭建网站，大约需要 3 分钟的时间。</p></li><li><p>点击 <code>Setting</code>, 修改 <code>Repository name</code> 为 <code>xxx.github.io</code>, <code>xxx</code> 是你的 GitHub 用户名。如果该项名称已被占据，GitHub Pages 无法正常显示，则查看页面底部的常见问题。</p><figure><img src="http://tc.seoipo.com/20180505202201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>同一页面选择「Code and automation」&gt;「Pages」&gt;「Build and deployment」&gt;「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 <code>/(root)</code>。设置完成后，点击「Save」。如果没找到 gh-page branch，可以在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。</p><figure><img src="http://tc.seoipo.com/2022-08-10-19-39-15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>设置成功后，页面会提示访问链接：<code>https://xxx.github.io/</code>，知识库搭建完毕。</p><p>如果未出现访问链接提示或不能打开 GitHub Pages，则删除 <code>docs/_posts</code> 路径下的 <code>2017-04-22-rss_feed43_feedex.md</code> 文件，GitHub Pages 有时会对这篇旧文章里的代码报错。</p></li>',4),g=t(`<h2 id="🔣-配置-learndata" tabindex="-1"><a class="header-anchor" href="#🔣-配置-learndata" aria-hidden="true">#</a> 🔣 配置 LearnData</h2><h3 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构" aria-hidden="true">#</a> 文档结构</h3><p>LearnData 的网站配置和文本存放在 <code>docs</code> 文件夹下，文章与页面配置可参考主目录下的 <code>samplepage.md</code>。</p><p>docs 目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docs
<span class="token operator">|</span>── .vuepress               <span class="token comment"># 网站配置</span>
│   ├── config.ts           <span class="token comment"># 网站环境依赖和网站属性</span>
│   ├── sidebar.ts          <span class="token comment"># 侧边栏</span>
│   ├── navbar.ts           <span class="token comment"># 导航栏</span>
│   ├── theme.ts            <span class="token comment"># 主题和插件</span>
│   └── templateBuild.html  <span class="token comment"># 网页模板，网站关键词和统计</span>
<span class="token operator">|</span>── _posts                  <span class="token comment"># 博客文章目录</span>
├── _temp                   <span class="token comment"># 草稿箱</span>
├── reading                 <span class="token comment"># 读书笔记</span>
├── anyname                 <span class="token comment"># 自定义笔记</span>
├── blog.md                 <span class="token comment"># 博客页面</span>
└── intro.md                <span class="token comment"># 博主个人介绍</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b=e("code",null,"docs/.vuepress",-1),_={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"docs/.vuepress/sidebar.ts",-1),k=e("code",null,"docs/.vuepress/theme.ts",-1),f={href:"https://newzone.top/web/Comments.html",target:"_blank",rel:"noopener noreferrer"},y=t('<p>注意：</p><ul><li><code>docs/_temp</code> 默认不同步到 GitHub。你需要手动在本地建立 <code>_temp</code> 文件夹，用来存放草稿。</li><li>VuePress2 从 beta.54 开始忽略文件夹名的前缀 <code>_</code>，比如博客路径为 <code>/_posts/</code>，转为网页后链接路径会是 <code>/posts/</code>。</li><li>LearnData 默认使用了 algolia 全文搜索。如果你没使用 algolia 爬虫，则删除 <code>docs/.vuepress/config.ts</code> 中 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。</li></ul><h3 id="看板娘" tabindex="-1"><a class="header-anchor" href="#看板娘" aria-hidden="true">#</a> 看板娘</h3>',3),x={href:"https://github.com/stevenjoezhang/live2d-widget",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"docs\\.vuepress\\public",-1),w=e("code",null,"docs\\.vuepress\\public\\live2d-widget\\autoload.js",-1),G=e("code",null,'apiPath: "https://newzone.top/live2d-widget/live2d_api/"',-1),L=e("code",null,'cdnPath: live2d_path + "live2d_api/"',-1),D={href:"https://github.com/fghrsh/live2d_api",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>如果网站部署在子页面 <code>https://xxx.github.io/yyy</code>，则需将子页面路径 yyy 加入到以下两个文件：</p><ul><li>将 <code>docs\\.vuepress\\public\\live2d-widget\\autoload.js</code> 文件第三行的 <code>const live2d_path = &quot;/live2d-widget/&quot;</code> 修改为 <code>const live2d_path = &quot;/yyy/live2d-widget/&quot;</code>。</li><li>将 <code>docs\\.vuepress\\templateBuild.html</code> 文件中看板娘区块代码 <code>&lt;script src=&quot;/live2d-widget/autoload.js&quot;&gt;</code> 修改为 <code>&lt;script src=&quot;/yyy/live2d-widget/autoload.js&quot;&gt;</code>。</li></ul><h3 id="读书笔记" tabindex="-1"><a class="header-anchor" href="#读书笔记" aria-hidden="true">#</a> 读书笔记</h3><p>读书笔记中会有大量原文引用，这与 LearnData 将知识点精简化的初衷并不相符。为了避免增加知识点的使用难度，我们使用 docsify 来构建读书笔记，并将其放置于 <code>docs\\reading</code> 目录下。该路径下的文件不会被转换为 HTML 文件，而是在静态页面生成完毕后，被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。</p><p>如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 <code>docs\\reading\\index.html</code> 中的 Waline 区块。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">waline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&quot;https://waline.newzone.top&quot;</span><span class="token punctuation">,</span>
   <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地图片引用" tabindex="-1"><a class="header-anchor" href="#本地图片引用" aria-hidden="true">#</a> 本地图片引用</h3><p>本地图片必须保存在 <code>docs/.vuepress/public</code> 目录中，否则在生成静态页面时会报错 <code>Rollup failed to resolve import</code>。假设图片名为 <code>1.png</code>，将其保存在 <code>docs/.vuepress/public/imgs</code> 中，则该图片的引用链接为 <code>/imgs/1.png</code>，或使用 Markdown 图片链接：<code>![](/imgs/1.png)</code>。</p><h2 id="🖥️-网站部署" tabindex="-1"><a class="header-anchor" href="#🖥️-网站部署" aria-hidden="true">#</a> 🖥️ 网站部署</h2><p>LearnData 推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定。为了确保网站能被正常访问，建议增加国内的访问节点。</p><p>很多人选择 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，必须实名验证，免费版无法自定义域名，更别提近期的下架风波。因此，我没有选择 Gitee，而是把文档同步到国内服务器（域名需备案）或 Vercel（国外服务永远不知什么时候会断）。</p><h3 id="同步到服务器" tabindex="-1"><a class="header-anchor" href="#同步到服务器" aria-hidden="true">#</a> 同步到服务器</h3><p>项目搭建好后，出现了红色叉叉，这是 GitHub Actions 同步服务器的失败提示，需要进入 GitHub 仓库「Setting」&gt;「Secrets」&gt;「Action」，添加 <code>FTP_HOST</code>、<code>FTP_PORT</code>、<code>FTP_USERNAME</code> 和 <code>FTP_PASSWORD</code> 的密钥。之后，GitHub Actions 在文件发生变动时，会将修改推送到服务器 FTP。</p>`,13),V={href:"https://newzone.top/deploy/Static.html#%E5%90%8C%E6%AD%A5%E5%88%B0-oss",target:"_blank",rel:"noopener noreferrer"},H=e("h3",{id:"部署到-vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署到-vercel","aria-hidden":"true"},"#"),n(" 部署到 Vercel")],-1),A=e("p",null,"Vercel 的速度比 GitHub Pages 稳定些，不过「*.vercel.app」域名已经被 DNS 污染，国内使用建议绑定自定义域名。",-1),S=e("p",null,"Vercel 部署步骤如下：",-1),F={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:"https://vercel.com/button",alt:"Vercel",loading:"lazy"},null,-1),z=e("code",null,"https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages",-1),N=e("code",null,"rockbenben/LearnData",-1),O=e("code",null,"你的用户名/仓库名",-1),R=t('<li><p>输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 <code>Create</code>。</p><figure><img src="http://tc.seoipo.com/2022-08-24-17-24-16.png" alt="" tabindex="0" loading="lazy"><figcaption>创建 Vercel 项目</figcaption></figure></li><li><p>接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 <code>Go to Dashboard</code> 跳转到应用的控制台。</p><figure><img src="http://tc.seoipo.com/2022-08-24-17-21-58.png" alt="" tabindex="0" loading="lazy"><figcaption>Vercel 部署成功提示</figcaption></figure></li>',2),q=e("p",null,[n("为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 "),e("code",null,"PERSONAL_TOKEN"),n(" 和 GitHub Actions。")],-1),j={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,"在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。",-1),B=e("li",null,[n("将下方代码编辑到 "),e("code",null,".github/workflows/main.yml"),n(" 文件末尾，注意修改 "),e("code",null,"dst_owner"),n(" 和 "),e("code",null,"dst_repo_name"),n("。")],-1),M=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 将页面更新到 Vercel</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file to Vercel
  <span class="token key atrule">if</span><span class="token punctuation">:</span> always()
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> /.
    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /
    <span class="token comment"># 你的用户名</span>
    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben
    <span class="token comment"># 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库</span>
    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData<span class="token punctuation">-</span>Vercel
    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main
    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
    <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W=t('<h2 id="🤔-常见问题" tabindex="-1"><a class="header-anchor" href="#🤔-常见问题" aria-hidden="true">#</a> 🤔 常见问题</h2><h3 id="failed-with-exit-code-128" tabindex="-1"><a class="header-anchor" href="#failed-with-exit-code-128" aria-hidden="true">#</a> failed with exit code 128</h3><p>GitHub Page 部署报错 <code>failed with exit code 128</code>，这是由于 repo 权限不足导致的。进入项目仓库的「Settings」&gt;「Code and automation」&gt;「Actions」&gt;「General」，选中底部 Workflow permissions 中的 <code>Read and write permissions</code>，点击保存后重新部署即可。</p><h3 id="网页显示异常" tabindex="-1"><a class="header-anchor" href="#网页显示异常" aria-hidden="true">#</a> 网页显示异常</h3><p>网站只显示文字，不能正常显示网页，这是网站路径不正确导致的页面样式错误。</p><p>如果 GitHub Page 提示访问链接 <code>https://xxx.github.io/yyy</code>，则需要将 <code>docs/.vuepress/config.ts</code> 中的 base 改为 <code>/yyy</code>，其默认值为 <code>/</code>。</p><h3 id="同步服务器报错" tabindex="-1"><a class="header-anchor" href="#同步服务器报错" aria-hidden="true">#</a> 同步服务器报错</h3><ul><li><p><code>Error: Input required and not supplied: server</code> 是配置服务器错误的提示，需要按照上方的网站部署步骤配置。如果不需将文件同步到服务器，建议删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码，以避免出现错误。</p></li><li><p><code>FTPError: 530 Login authentication failed</code> 指 FTP 密码错误或账号不存在，需要使用 FileZilla 来测试 FTP 的有效性。</p></li><li><p><code>Error: Timeout (control socket)</code> 是指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。</p></li></ul><h3 id="err-module" tabindex="-1"><a class="header-anchor" href="#err-module" aria-hidden="true">#</a> ERR_MODULE</h3><p>生成静态网页时，如果出现 <code>Error [ERR_MODULE_NOT_FOUND]: Cannot find module</code> 的保存，可能是第三方插件或 pacakge.json 环境依赖未正确配置。该报错出现几率极低，如果遇到，可用最新版本的 <code>package.json</code> 和 <code>pnpm-lock.yaml</code> 来覆盖本地设置。如果你已经修改了环境依赖，可以删除主目录下的 <code>.npmrc</code> 文件。</p><h3 id="静态文件名字总变" tabindex="-1"><a class="header-anchor" href="#静态文件名字总变" aria-hidden="true">#</a> 静态文件名字总变</h3><p>VuePress 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改，即使没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 10 分钟，期间打开网站就会出错。</p>',12),U={href:"https://github.com/rockbenben/LearnData/tree/nohashname",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"本地运行-learndata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地运行-learndata","aria-hidden":"true"},"#"),n(" 本地运行 LearnData")],-1),K={href:"https://newzone.top/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},X=e("li",null,[n("下载 LearnData 项目到本地，在目录下运行终端，输入命令 "),e("code",null,"pnpm i && pnpm up"),n("。")],-1),Z=e("li",null,[n("完成前两步后，终端中输入 "),e("code",null,"pnpm docs:dev"),n("，成功后会提示访问链接，默认为 "),e("code",null,"http://localhost:8080/"),n("。")],-1),J=e("p",null,[n("运行本地服务器后，修改文件时预览页面也会同步更新。若要停止本地服务器，在终端中按下 "),e("code",null,"Ctrl + C"),n("。")],-1);function Q($,Y){const a=l("ExternalLinkIcon");return i(),c("div",null,[r,e("ol",null,[e("li",null,[e("p",null,[n("进入 "),e("a",p,[n("LearnData"),s(a)]),n(" 项目页，点击「Use this template」，复制该模板文件。")]),u,h]),m]),g,e("p",null,[b,n(" 路径下是网站的配置文件，我在上面添加了详细的注释。你可以参考注释和 "),e("a",_,[n("vuepress-theme-hope 配置案例"),s(a)]),n("来调整配置。修改 "),v,n(" 中的文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。"),k,n(" 中配置了"),e("a",f,[n("评论插件"),s(a)]),n("。")]),y,e("p",null,[n("LearnData 集成了看板娘 "),e("a",x,[n("Live2D Widget"),s(a)]),n("，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 "),P,n(" 下的 live2d-widget 文件夹。")]),e("p",null,[n("要启用看板娘模型，需要修改 "),w,n(" 文件，将其中的 "),G,n(" 替换为 "),L,n("。如果未正确配置，看板娘会出现跨域报错，只显示文字而不显示图片。如果使用服务器自建 "),e("a",D,[n("live2d api"),s(a)]),n(" 的话，可以修改看板娘模型。")]),E,e("p",null,[n("如果你不需要同步到服务器 FTP，建议按常见问题中的操作删除对应代码，或者按照 "),e("a",V,[n("GitHub 同步到 OSS"),s(a)]),n(" 步骤将网页部署到云存储上。")]),H,A,S,e("ol",null,[e("li",null,[e("p",null,[n("点击 "),e("a",F,[T,s(a)]),n(" 或将 "),z,n(" 中的 "),N,n(" 改为 "),O,n("，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。")])]),R,e("li",null,[q,e("ul",null,[e("li",null,[n("新建 "),e("a",j,[n("Personal access tokens"),s(a)]),n("，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。")]),C,B]),M])]),W,e("p",null,[n("如果不想每次构建都重命名文件，可以复制「"),e("a",U,[n("nohashname"),s(a)]),n("」branch。我把 nohashname 分支的打包工具换成了 Webpack，并用 chainWebpack 设置文件命名规则，避免文件不必要的重命名。")]),I,e("ol",null,[e("li",null,[n("安装环境 npm 和 pnpm，可参考"),e("a",K,[n("环境部署教程"),s(a)]),n("。")]),X,Z]),J])}const ne=o(d,[["render",Q],["__file","index.html.vue"]]);export{ne as default};
