<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


const props = defineProps({
  name: String,
  page: String,
  icon: String
})

const goTo = () => {
  router.push({ path: props.page.value })
}

</script>

<template>
    <div>
        <button class="flex justify-center items-center gap-2 w-[9rem] lg:w-[15rem] bg-red-500 text-white px-6 py-2 rounded-full font-medium shadow-md">
            <i :class="['fa-solid', props.icon]" style="color: #ffffff;"></i>
            {{ props.name }}
        </button>
    </div>
</template>