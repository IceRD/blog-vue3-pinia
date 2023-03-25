<script setup>
import { ref } from 'vue'
import { useLifecycleLogger } from "@/hooks/lifecycleLogger";
import { RouteNames } from '@/router/types'
import { useUserStore } from '@/stores/user'
import { useRouter } from "vue-router";

const userStore = useUserStore()
const router = useRouter()

useLifecycleLogger({name: 'User Layout'});

const links = ref([
    { title: 'blog', name: RouteNames.blog },
    { title: 'about', name: RouteNames.about },
]);

const logout = () => {
    userStore.clearUser()
    router.push({ name: RouteNames.login, replace: true })
};
</script>

<template>
	<v-app id="inspire">
		<v-app-bar color="white" flat density="compact">
			<v-container class="fill-height d-flex align-center">
				<v-tabs centered color="primary" fixed-tabs>
					<v-tab v-for="{title, name} in links" :key="title" :to="{name}" exact>
						{{ title }}
					</v-tab>
				</v-tabs>

				<v-spacer />

				<v-btn variant="text" :to="{name: RouteNames.dashboard}" exact class="mr-2">
					dashboard
				</v-btn>

				<v-menu min-width="200px" rounded>
					<template #activator="{ props }">
						<v-btn icon v-bind="props" height="32" variant="text" width="32">
							<v-avatar color="grey-darken-1" size="32">
								<span>{{ userStore.login.charAt(0).toUpperCase() }}</span>
							</v-avatar>
						</v-btn>
					</template>
					<v-card>
						<v-card-text>
							<div class="mx-auto text-center">
								<h3>{{ userStore.login }}</h3>
								<v-divider class="my-3"></v-divider>
								<v-btn rounded variant="text" @click="logout">
									{{ $t('exit')  }}
								</v-btn>
							</div>
						</v-card-text>
					</v-card>
				</v-menu>
			</v-container>
		</v-app-bar>

		<v-main class="bg-grey-lighten-3">
			<v-container>
				<slot />
			</v-container>
		</v-main>
	</v-app>
</template>
