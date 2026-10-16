# 拾分 · 技术阅读社区

一个围绕「可用时间与阅读目标」设计的技术博客作品。用 React 构建阅读与写作界面，使用 Supabase 提供邮箱账号认证与文章持久化。

- [在线体验](https://shifen-ivory.vercel.app/)
- [备用访问](https://goslingw.github.io/shifen-blog-pages/)

两个站点均部署于境外，实际访问情况受所在网络影响。

## 功能与设计

- 阅读规划：按可用时间、分类、阅读目标筛选文章，支持关键词搜索与排序。
- 阅读详情：Markdown 正文、代码高亮、目录跳转、阅读进度、阅读收获卡及相关推荐。
- 账号：邮箱注册、密码登录、登录状态恢复、退出登录。
- 写作：Markdown 编辑与实时预览，在线发布、作者编辑和删除文章。
- 数据权限：文章公开可读；数据库 RLS 将修改和删除限制为文章作者。
- 响应式布局：适配桌面与窄屏阅读。

关注、点赞、收藏、评论目前保存在当前浏览器 localStorage，属于本地演示，尚未跨账号或设备同步。首页读取最新 100 篇线上文章，并保留 8 篇内置学习示例。阅读时长按字数估算，练习时间是建议值。

## 技术栈

React 17、React Router 5（HashRouter）、Create React App 3 / react-app-rewired、React Markdown、Supabase Auth REST API、PostgREST、PostgreSQL RLS。原工程中保留了 Redux、Immutable.js 和 styled-components 等依赖与旧页面。

## 下载与本地运行

在 GitHub 点击 **Code → Download ZIP** 并解压，或克隆本仓库。进入包含 `package.json` 的目录执行：

```sh
npm ci --legacy-peer-deps
```

旧版 Webpack 在较新的 Node.js 上需要兼容参数。本项目曾在 Node.js 24.14.1 下成功构建。

Windows PowerShell：

```powershell
$env:NODE_OPTIONS='--openssl-legacy-provider'
npm.cmd start
```

Windows CMD：

```bat
set "NODE_OPTIONS=--openssl-legacy-provider"
npm.cmd start
```

macOS / Linux：

```sh
NODE_OPTIONS=--openssl-legacy-provider npm start
```

打开 http://localhost:3000 。未配置 Supabase 时，可以浏览内置示例文章，真实账号和线上文章功能不可用。

## 配置自己的后端

1. 创建自己的 Supabase 项目，开启邮箱密码认证。
2. 复制 `.env.example` 为 `.env.local`，填写自己的 Project URL 和公开 publishable / anon key。
3. 在 Supabase SQL Editor 运行 [supabase/schema.sql](supabase/schema.sql)。脚本创建文章表并设置访问权限。
4. 在 Authentication → URL Configuration 设置正式站点地址，并将本地及正式地址加入重定向允许列表。
5. 重启开发服务。邮箱验证完成后，回到登录页登录。

环境变量会在构建时嵌入前端；只使用公开密钥，不能填写 secret / service_role key。注册邮件面向外部用户发送时，应检查 Supabase 邮件服务配置与发送限制。

## 构建与部署

设置上述 Node 兼容参数后，运行 `npm run build`，生成 `build` 目录。Vercel 站点根路径部署可直接使用此目录。

GitHub Pages 若部署到项目子路径，需要在构建前设置 `PUBLIC_URL`，例如 PowerShell：

```powershell
$env:NODE_OPTIONS='--openssl-legacy-provider'
$env:PUBLIC_URL='/shifen-blog-pages'
npm.cmd run build
```

将 `build` 内的内容发布到 Pages，并在发布目录加入 `.nojekyll`。构建产物、依赖和个人环境配置不包含在此源码包中。

## 目录

```text
src/reading/       首页、筛选、文章详情及本地互动
src/auth/          认证上下文、注册登录页面
src/posts/         在线文章接口、编辑器及作者操作
src/pages/         原工程保留页面
public/            静态资源及旧演示数据
supabase/schema.sql 数据库结构与 RLS 权限
```

## 验证与后续计划

生产构建已通过；线上首页和 Pages 部署已检查。账号登录已由项目使用者验证。完整多账号权限验收尚未形成自动化报告；旧 Jest 在当前 Windows 沙盒遇到临时目录 EPERM，不能视为测试通过。

后续计划：同步评论与关注、分页与个人文章管理、草稿保存、完善自动化测试，以及升级旧版构建工具与依赖。

## 项目来源

本项目在 [oyishyi/oyishyi-blog](https://github.com/oyishyi/oyishyi-blog) 的基础上进行二次开发。新增工作集中在阅读规划、页面布局、详情阅读体验、Supabase 认证、文章 CRUD 与数据库权限等方面。原始介绍保留在 [docs/UPSTREAM_README.md](docs/UPSTREAM_README.md)。

当前下载的上游源码未附 LICENSE；本仓库不擅自为上游代码追加 MIT 等许可证。第三方代码和素材的权利归各自权利人所有。
