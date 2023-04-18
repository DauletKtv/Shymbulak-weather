<script setup>
import TheHeader from './components/TheHeader.vue'
import TheBody from './components/TheBody.vue'
import TheFooter from './components/TheFooter.vue'
import TheSideBar from './components/TheSideBar.vue'
import { onMounted, reactive, ref } from 'vue'
import getWeather from './service/getWeather'
import getTodayWeather from './service/getTodayWeather'

// onMounted(async () => {
//   getWeather()
// })
const isOpen = ref(false)
function toogleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <main class="2xl:flex overflow-hidden">
    <Transition name="fade">
      <TheSideBar v-if="isOpen" :close-menu="toogleOpen" />
    </Transition>
    <div class="2xl:flex-1 transition-all" :class="isOpen ? '2xl:w-[85%]' : ''">
      <TheHeader :open-menu="toogleOpen" class="mb-4" :isOpen="isOpen" />
      <TheBody />
      <TheFooter />
    </div>
  </main>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100%);
  /* @apply -translate-x-full 2xl:translate-x-0; */
}
</style>
