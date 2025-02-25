<script setup>
import { useRouter } from 'vue-router'
import Button from '../menu/ButtonMenu.vue'

const router = useRouter()

const goToHome = () => {
    router.push({ path: '/' })
}
</script>

<template>
    <div class="flex flex-col items-center justify-center h-[50vh]">
        <h1 class="text-lg mb-2 font-bold text-[36px]">Uh-oh!</h1>
        <p class="mb-5 text-[#5E5E5E] text-[20px]">You look lost on your journey!</p>
        <Button name="Go back Home" page="" icon="" width="12" :isActive="true" @click="goToHome" />
    </div>
</template>