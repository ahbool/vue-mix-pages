
export default {
    //单页应用的路由模式
    vueRouterMode: 'history',

    //接口地址
    apiBaseURL: process.env.NODE_ENV === 'production'
        ? 'https://api.github.com/'
        : ''
}
