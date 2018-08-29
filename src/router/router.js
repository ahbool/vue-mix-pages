
export default [
    {
        path: '/my',
        component: r => require.ensure([], () => r(require('@/pages/my/index/index')), 'my.index')
    },
    {
        path: '/product/detail',
        component: r => require.ensure([], () => r(require('@/pages/product/detail/detail')), 'product.detail')
    }
]
