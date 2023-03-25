<script setup>
import { ref, onMounted } from "vue";
import api from '@/api'

const posts = ref([]);

onMounted(async () => {

	const { data } = await api.blog.getPosts()

	posts.value = data
});
</script>

<template>
	<v-container>
		<v-row>
			<v-col v-for="post in posts" :key="post.id" cols="12" sm="6" md="4" lg="3">
				<v-card
					:title="post.title"
					:subtitle="post.author"
					:text="post.description"
				></v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
