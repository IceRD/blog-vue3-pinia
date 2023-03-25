import { useUserStore } from '@/stores/user'
import { RouteNames } from '@/router/types'

export default async function AuthMiddleware(to, from, next) {
    const userStore = useUserStore()

    if (to.name !== RouteNames.login && !userStore.login) {
        next({ name: RouteNames.login })
    } else {
        next()
    }
}
