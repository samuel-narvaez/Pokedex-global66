<script setup>
import { ref, onMounted } from 'vue';

const bounceCount = ref(0);
const showOpenPokeball = ref(false);

onMounted(() => {
    const bounceInterval = setInterval(() => {
        bounceCount.value++;

        if (bounceCount.value >= 3) {
            showOpenPokeball.value = true;
            setTimeout(() => {
                showOpenPokeball.value = false;
                bounceCount.value = 0; // Reiniciar el ciclo
            }, 400); // Mostrar la pokebola abierta
        }
    }, 500); // Cada rebote dura 0.5s

    // Detener el intervalo después de 3 rebotes y reiniciar
    return () => clearInterval(bounceInterval);
});
</script>

<template>
    <div class="flex justify-center items-center min-h-[75vh]">
        <img 
            v-if="!showOpenPokeball" 
            class="w-[17rem]" 
            src="/img/pokebola.png" 
            alt="pokebola"
            :class="bounceCount < 3 ? 'motion-safe:animate-bounce' : ''"
        >

        <img 
            v-if="showOpenPokeball" 
            class="w-[10rem]" 
            src="/img/pokebola-open.png" 
            alt="pokebola"
        >
    </div>
</template>
