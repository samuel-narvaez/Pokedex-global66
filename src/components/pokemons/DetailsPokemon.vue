<script setup>
import { computed, defineProps, defineEmits, ref } from 'vue'
import Button from '../menu/ButtonMenu.vue'

const props = defineProps({
    pokemon: Object
})

const emit = defineEmits(['click'])

const textToCopy = ref('');

const url = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`
);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const copyToClipboard = async () => {
  try {
    const name = props.pokemon.name;
    const attr = props.pokemon.types.map(t => t.type.name).join(', ');
    const text = `Name : ${name} - Atributos : ${attr}`;
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error al copiar:", err);
  }finally {
    Toast.fire({
        icon: "success",
        title: "Listo Para Compartir"
    });
  }
};



</script>

<template>
    <div class="flex flex-col justify-center items-start">
        <div class="relative w-full flex flex-col items-center">

            <img class="w-full h-[15rem] object-cover rounded-t-lg" src="/img/background-detail.png"
                alt="background-detail">

            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img class="w-[40vw] max-w-[200px] h-auto object-cover"
                    :src="url" alt="pokemon">
            </div>

            <button class="absolute top-4 right-4 md:top-6 md:right-8 
               p-2 transition" type="button" @click="emit('click')">
                <img src="/img/close.png" alt="Cerrar" class="w-6 h-6">
            </button>
        </div>

        <div class="py-4 px-4 w-full">
            <div class="w-full flex border-b border-gray-300 pb-2">
                <span class="font-medium px-1">Name:</span>
                <span class="capitalize">{{ props.pokemon.name }}</span>
            </div>
        </div>
        <div class="px-4 w-full">
            <div class="w-full flex border-b border-gray-300 pb-2">
                <span class="font-medium px-1">Weight:</span>
                <span class="capitalize">{{ props.pokemon.weight }}</span>
            </div>
        </div>
        <div class="py-4 px-4 w-full">
            <div class="w-full flex border-b border-gray-300 pb-2">
                <span class="font-medium px-1">Height:</span>
                <span class="capitalize">{{ props.pokemon.height }}</span>
            </div>
        </div>
        <div class="px-4 w-full">
            <div class="w-full flex border-b border-gray-300 pb-2">
                <span class="font-medium px-1">Types:</span>
                <span class="capitalize">{{props.pokemon.types.map(t => t.type.name).join(', ')}}</span>
            </div>
        </div>
        <div class="p-6 w-full flex justify-between">
            <Button name="Share to my friends" page="" icon="" width="15" :isActive="true" @click="copyToClipboard()" />
            <button type="button" @click="stateFavorite(pokemon)">
                <i class="fa-solid fa-star fa-lg"
                    :style="{ color: props.pokemon.favorite ? '#ECA539' : '#BFBFBF' }"></i>
            </button>
        </div>
    </div>
</template>