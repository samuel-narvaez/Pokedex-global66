<script setup>
import { useStore } from 'vuex'
import { computed } from "vue";
import ButtonMenu from './ButtonMenu.vue'

const store = useStore()

const currentPage = computed(() => store.state.MenuModule.page)

const menuButtons = [
  { name: 'All', page: 'all-list', icon: 'fa-list', width: 10 },
  { name: 'Favorites', page: 'favorites', icon: 'fa-star', width: 10 }
]

const setActive = (page) => {
  store.commit('MenuModule/SET_PAGE', page);
}

</script>

<template>  
  <div class="flex justify-center gap-4 p-2">
      <ButtonMenu 
        v-for="button in menuButtons"
        :key="button.page"
        :name="button.name"
        :page="button.page"
        :icon="button.icon"
        :width="button.width"
        :is-active="button.page === currentPage"
        @click="setActive(button.page)"
      />
  </div>
</template>