
## 项目结构

```
│
├─build                             /* webpack的配置目录 */
│     ├─config.js                   /* 公共常量，用于配置文件 */
│     ├─utils.js                    /* 工具函数，用于配置文件 */
│     ├─webpack.base.conf.js        /* 公共配置文件 */
│     ├─webpack.dev.conf.js         /* 开发环境配置文件 */
│     └─webpack.prod.conf.js        /* 生产环境配置文件 */
│
├──mock                             /* mock服务和mock数据 */
│    ├─api                          /* 存放mock数据 */
│    └─mock-server.js               /* mock服务 */
│
├──src                              /* 项目源码 */
│    │
│    ├─api                          /* 所有后端接口 */
│    │  ├──index.js
│    │  └──product.js
│    │
│    ├─assets                       /* 公共的静态文件 */
│    │  ├─fonts
│    │  ├─img
│    │  └─style
│    │
│    ├─utils                        /* 业务无关的工具函数 */
│    │
│    ├─common                       /* 业务相关的公共函数 */
│    │      config.js
│    │      http.js
│    │
│    ├─components                   /* 公共组件, 如Dialog、Loading等 */
│    │  └─navbar
│    │
│    ├─pages                        /*  页面
│    │  │
│    │  ├─index/                        每个页面一个文件夹，当前页面的样式、图片、子组件都存放在自已的文件夹下。
│    │  │                               为了项目结构清晰，一级目录以模块划分，二级目录则为页面目录。
│    │  ├─my/                       */
│    │  │  └─order/
│    │  │
│    │  ├─product/
│    │  │   └─list/
│    │  │
│    │  ├─App.vue                   /* 多页应用的公共入口页面 */
│    │  │
│    │  └─main.js                   /* 多页应用的公共入口函数 */
│    │
│    ├─router                       /* 路由配置 */
│    │      router.js
│    │
│    └─store                        /* 状态管理 */
│       │  actions.js
│       │  getters.js
│       │  index.js
│       │  mutation-types.js
│       │  mutations.js
│       │
│       └─modules
│
├─── .babelrc                       /* babel配置 */
├─── .editorconfig                  /* 开发工具配置 */
├─── index.html                     /* 公共模板文件 */
├─── package.json                   /* 包描述文件 */
└─── postcss.config.js              /* postcss相关插件配置 */
```




## 项目简介

一个集 **多页应用 + 单页应用** 的混合项目框架。

适用于主要入口页面生成多页，子页面和次要页面使用单页形式的项目。



## 技术栈
- ES6+
- Vue2.0
- Vuex
- Vue-Router
- Axios
- Webpack4


&nbsp;

## 项目打包说明
- npm模块(vue、vuex之类)打包成一个单独的js文件
- 公共组件和公共函数打包成一个单独的js文件
- 单页和多页，都按页面打包，即每个页面组件都打包成单独的js文件，按需加载
- 公共样式和各页面样式均各自打包成单独的css文件



## 如何配置多页?

"多页面"根据添加一个简单的入口文件(entry.js)即可自动生成html页面。

打包时，自动遍历"/src/pages/"目录，查找所有目录下的"entry.js"文件，

每个"entry.js"文件都作为一个单独的打包入口，每个入口生成单独的.html文件


### 多入口配置

在需要生成单独html页面的目录下新建一个`entry.js`文件，并引入一个公共的入口js文件 `/src/pages/main.js`，

给公共入口函数传递一个当前html页面默认要展示的页面组件。


### 入口示例

entry.js 入口文件，只需要修改要加载的页面组件即可，比如此例中的 `./list.vue`

```js
//导入公共入口文件 (必须)
import main from '@/pages/main'

//默认加载的页面组件 (必须)
import List from './list.vue'

//传递一个要展示的页面组件给公共入口函数 (必须)
main.init(List)
```



&nbsp;

### html模板

一个打包入口对应一个html模板。

所有页面默认使用项目根目录下的 `/index.html` 作为模板。

如果某个页面需要单独的html模板，可在其目录下新建名为 `entry.html` 的文件，打包时会自动将其识别为当前页面的模板。

> 注:只有在有入口文件(entry.js)的目录下添加单独的html模板，才有效。





&nbsp;

## 单页配置

根据 vue-router 插件的路由配置 `(./router/router.js)` 来生成单页js文件。

每个html页面都是共用的同一个路由配置 `(router.js文件)` ，因此单页的页面组件可渲染在任意一个html中。



&nbsp;

## 插件说明

此示例中没有使用 `Generator函数` 和 `async/await`，所以排除了对应的babel插件，打包文件也小了20几Kb，

如果你需要它们，可以在 `.babelrc` 文件中去掉排除项。


**（所用插件在package.json文件中可查看，具体插件功能及配置可到插件的npm包主页查看）**


&nbsp;

## mock数据
[查看 ./mock/README.md](./mock/README.md "查看mock服务的使用说明")


&nbsp;

## 安装插件

```js
npm install
or
yarn install
```



## 开发&打包

执行以下命令预览非常简单的demo

```js
//启动开发环境预览
npm start

//构建生产文件
npm run build
```
