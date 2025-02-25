<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Lista from './AllList.vue'
import Favoritos from './Favorite.vue'
import Menu from '../../components/menu/Menu.vue'


const store = useStore()
const currentView = computed(() => store.state.MenuModule.page)

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex-1 overflow-auto">
            <Lista v-if="currentView === 'all-list'" />
            <Favoritos v-if="currentView === 'favorites'" />
        </div>

        <div class="fixed bottom-0 left-0 w-full bg-white p-4  flex justify-around shadow-md">
            <Menu />
        </div>
    </div>
</template>
