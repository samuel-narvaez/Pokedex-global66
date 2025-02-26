<script setup>
import { useRouter } from 'vue-router'
import { defineProps, computed, defineEmits  } from 'vue'

const router = useRouter()


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  width: {
    type: [Number, String],
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  return `
    flex justify-center items-center
    gap-2
    w-[${props.width}rem]
    lg:w-[15rem]
    px-6 py-2
    rounded-full font-medium shadow-md
    transition-all duration-300 ease-in-out
    font-[Lato]
    ${props.isActive ? 'bg-[#F22539] text-white' : 'bg-[#BFBFBF] text-white'}
  `
})



</script>

<template>
  <div>
    <button 
      type="button"
      @click="emit('click', page)"
      :class="buttonClasses"
    >
      <i :class="['fa-solid', props.icon]" style="color: #ffffff;"></i>
      {{ props.name }}
    </button>
  </div>
</template>