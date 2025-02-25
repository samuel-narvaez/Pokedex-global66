import { createRouter, createWebHistory } from 'vue-router';

import Welcome from '../views/pokemons/Welcome.vue';
import AllListPokemons from '../views/pokemons/AllList.vue'
import FavoritesPokemons from '../views/pokemons/Favorite.vue'
import Home from '../views/pokemons/Home.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/all-list', component: AllListPokemons },
    { path: '/favorites', component: FavoritesPokemons },
    { path: '/home', component: Home },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;