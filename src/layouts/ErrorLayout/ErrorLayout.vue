<script setup>
import { useLifecycleLogger } from "@/hooks/lifecycleLogger";

useLifecycleLogger({name: 'Error Layout'});
</script>

<template>
	<div>
		<slot />
	</div>
</template>
