<script setup>

import ButtonMenu from './ButtonMenu.vue'

</script>

<template>
    <div class="relative mt-2 w-full bg-white shadow-2xl p-2 md:p-5 lg:p-2">
        <div class="flex justify-center gap-4 p-2">
            <ButtonMenu name="All" page="all-list" icon="fa-list" />
            <ButtonMenu name="Favorites" page="favorites" icon="fa-star" />
        </div>
    </div>
</template>