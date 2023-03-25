<script setup>
import { useLifecycleLogger } from "@/hooks/lifecycleLogger";

useLifecycleLogger({name: 'Guest Layout'});
</script>

<template>
	<v-app id="inspire" class="bg-guestBackground">
		<v-main>
			<slot />
		</v-main>
	</v-app>
</template>
