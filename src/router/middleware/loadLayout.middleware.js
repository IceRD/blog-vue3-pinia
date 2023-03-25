import { LayoutToFileMap } from '@/layouts/types'

export default async function loadLayoutMiddleware(route) {
    const { layout } = route.meta
    const normalizedLayoutName = layout || LayoutToFileMap.guest
    const fileName = LayoutToFileMap[normalizedLayoutName]
    const fileNameWithoutExtension = fileName.split('.vue')[0]

    const component = await import(
        `../../layouts/${fileNameWithoutExtension}/${fileNameWithoutExtension}.vue`
    )

    route.meta.layoutComponent = component.default
}
