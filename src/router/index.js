import { createRouter, createMemoryHistory } from 'vue-router';

import Welcome from '../views/pokemons/Welcome.vue';
import AllListPokemons from '../views/pokemons/AllList.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/all-list', component: AllListPokemons },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;