<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import api from '@/api'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const route = useRouter();

const user = reactive({
    login: '',
    password: '',
})
let currentUserItem = ref(null)
let isError = ref(false)

const exempleUserItems = ref([
    { login: 'admin', password: '123456789' },
    { login: 'user', password: '123456789' }
])

watch(currentUserItem, (obj) => {
    if(obj) {
        user.login = obj.login
        user.password = obj.password
    }
})

watch([user], ([user]) => {

    const isExempleUserItems = exempleUserItems.value.find(v => (user.login === v.login && user.password === v.password))

    if(isExempleUserItems === undefined) {
        currentUserItem.value = null
    }

    isError.value = false
})

const auth = async () => {
    const { data } = await api.auth.signIn(user)

    if(Array.isArray(data) && data.length) {
        const { login, role } = data[0]

        userStore.setUser({ login, role })

        return route.push({ name: 'blog' });
    }

    isError.value = true
};
</script>

<template>
    <v-container fluid class="fill-height d-flex align-center justify-center">
        <div class="text-center">
            <h2 class="mb-4">{{ $t('authorization') }}</h2>
            <v-sheet class="auth-wrapper rounded-lg elevation-1 pa-6">
                <div v-if="isError" class="mb-4 text-error">
                    {{ $t('errors.auth') }}
                </div>
                <v-form @submit.prevent="auth">
                    <v-select
                        v-model="currentUserItem"
                        :label="$t('example')"
                        variant="outlined"
                        color="primary"
                        density="comfortable"
                        :items="exempleUserItems"
                        item-title="login"
                        return-object
                        prepend-inner-icon="mdi-account-circle-outline"
                    />
                    <v-text-field
                        v-model="user.login"
                        :label="$t('login')"
                        variant="outlined"
                        color="primary"
                        density="comfortable"
                    />
                    <v-text-field
                        v-model="user.password"
                        type="password"
                        :label="$t('password')"
                        variant="outlined"
                        color="primary"
                        density="comfortable"
                    />
                    <v-btn variant="flat" color="primary" type="submit">
                        {{ $t('enter')}}
                    </v-btn>
                </v-form>
            </v-sheet>
        </div>
    </v-container>
</template>

<style scoped>
.auth-wrapper {
    width: 400px;
}
</style>
