<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
	<!-- <div>
		<router-link to="/">blog</router-link>
	</div>
	<div>
		<router-link to="/login">login</router-link>
	</div>
	<div>
		<router-link to="/dashboard">dashboard</router-link>
	</div> -->

	<component :is="route.meta.layoutComponent">
		<router-view />
	</component>
</template>
