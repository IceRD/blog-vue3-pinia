import { onMounted, onUnmounted } from 'vue'

export function useLifecycleLogger(payload) {
	onMounted(() => {
		console.log(payload.name, 'mounted')
	})

	onUnmounted(() => {
		console.log(payload.name, 'unmounted')
	})
}
