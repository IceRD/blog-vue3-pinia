<script setup>
import { ref } from 'vue'
import { useLifecycleLogger } from "@/hooks/lifecycleLogger";
import { RouteNames } from '@/router/types'


useLifecycleLogger({name: 'Admin Layout'});

const links = ref( [
	{ title: 'blog', name: RouteNames.blog },
]);
</script>

<template>
    <v-app id="inspire">
        <v-app-bar flat density="compact">
            <v-container class="fill-height d-flex align-center">
                <v-btn
                    v-for="{title, name} in links"
                    :key="title"
                    variant="text"
                    :to="{name}"
                    exact
                    class="mr-2"
                >
                    {{ title }}
                </v-btn>

                <v-spacer />

                <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
            </v-container>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">
                            <v-list rounded="lg">
                                <v-list-item v-for="n in 5" :key="n" link>
                                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                                </v-list-item>

                                <v-divider class="my-2"></v-divider>

                                <v-list-item link color="grey-lighten-4">
                                    <v-list-item-title> Refresh </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">
                            <!--  -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
