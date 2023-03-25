import { createRouter, createWebHistory } from 'vue-router'
import loadLayoutMiddleware from '@/router/middleware/loadLayout.middleware'
import AuthMiddleware from '@/router/middleware/auth.middleware'
import { LayoutsTypes } from '@/layouts/types'
import { RouteNames } from '@/router/types'

const routes = [
    {
        path: '/login',
        name: RouteNames.login,
        component: () => import('@/pages/Login'),
        meta: {
            layout: LayoutsTypes.guest,
        },
    },
    {
        path: '/',
        name: RouteNames.blog,
        component: () => import('@/pages/Blog'),
        meta: {
            layout: LayoutsTypes.user,
        },
    },
    {
        path: '/about',
        name: RouteNames.about,
        component: () => import('@/pages/About'),
        meta: {
            layout: LayoutsTypes.user,
        },
    },
    {
        path: '/dashboard',
        name: RouteNames.dashboard,
        component: () => import('@/pages/Dashboard'),
        meta: {
            layout: LayoutsTypes.admin,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(AuthMiddleware)
router.beforeEach(loadLayoutMiddleware)

export default router
