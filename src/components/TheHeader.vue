<template>
  <header
    class="flex px-[16px] py-3 gap-3 md:px-6 overflow-hidden 2xl:px-16 2xl:w-[99vw] xl:w-[100vw]"
  >
    <WrapIcons @click="openMenu" v-if="!isOpen">
      <IconBurger class="h-[16px] w-[20px]"></IconBurger>
    </WrapIcons>
    <img class="h-[40px] w-[25px] mx-6 hidden 2xl:block" src="/Logo.png" />
    <WrapIcons class="hidden 2xl:flex 2xl:gap-2 2xl:w-[90px]">
      <img class="h-[20px] w-[20px]" src="/live.png" />
      <span class="text-[#6D7784]">Live</span>
    </WrapIcons>
    <WrapIcons class="hidden 2xl:flex 2xl:gap-2 2xl:w-auto 2xl:px-2">
      <img class="h-[16px] w-[20px]" src="/sun.png" />
      <span class="flex text-[#6D7784]">12</span>
    </WrapIcons>
    <WrapIcons class="mr-auto">
      <IconLoup class="h-[16px] w-[20px]" />
    </WrapIcons>
    <img class="h-[40px] w-[25px] mx-auto 2xl:hidden" src="/Logo.png" />
    <WrapIcons class="ml-auto">
      <IconMan class="h-[16px] w-[20px]" />
    </WrapIcons>
    <WrapIcons class="hidden md:flex">
      <iconHeart class="h-[16px] w-[20px]" />
    </WrapIcons>
    <WrapIcons>
      <IconBucker class="h-[16px] w-[20px]" />
    </WrapIcons>
  </header>
</template>

<script setup>
import IconBucker from './icons/iconBucker.vue'
import IconBurger from './icons/iconBurger.vue'
import iconHeart from './icons/iconHeart.vue'
import IconLoup from './icons/iconLoup.vue'
import IconMan from './icons/iconMan.vue'
// import iconLive from './icons/IconLive.vue'
import IconShop from './icons/iconShop.vue'
import WrapIcons from './WrapIcons.vue'

defineProps({
  openMenu: Function,
  isOpen: Boolean
})
</script>

<style></style>
