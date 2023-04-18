<template>
  <nav
    class="fixed z-50 top-0 left-0 bg-white w-screen h-screen 2xl:relative 2xl:w-[15%] 2xl:flex-shrink-0 2xl:border-r 2xl:border-r-[#DAE9F4]"
  >
    <div class="px-[40px] flex justify-between py-5">
      <WrapIcons @click="closeMenu">
        <iconXmarkVue />
      </WrapIcons>
      <img class="h-[40px] w-[25px] mx-auto 2xl:hidden" src="/Logo.png" />
      <WrapIcons class="2xl:hidden">
        <iconMan />
      </WrapIcons>
    </div>

    <ul class="pl-[40px]">
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconHome /></div>
        <p>Главная</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconTickets /></div>
        <p>Билеты</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconGlass /></div>
        <p>Прокат</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconSchool /></div>
        <p>Школа</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconStar /></div>
        <p>Развлечения</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconHotel /></div>
        <p>Отели</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconRestaurant /></div>
        <p>Рестораны</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconShop /></div>
        <p>Магазин</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconBaby /></div>
        <p>Детям</p>
      </li>
      <li class="flex items-center gap-3 pl-[8px]">
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconParking /></div>
        <p>Паркинг</p>
      </li>
      <li
        class="flex items-center gap-3 bg-[#75B6F2] text-white w-[136px] rounded-[12px] pl-[8px] mt-4"
      >
        <div class="w-[48[px] h-[48px] flex justify-center items-center"><iconAlert /></div>
        <p>Инфо</p>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import iconHome from './icons/iconHome.vue'
import iconBaby from './icons/iconBaby.vue'
import iconStar from './icons/iconStar.vue'
import iconSchool from './icons/iconSchool.vue'
import iconHotel from './icons/iconHotel.vue'
import iconRestaurant from './icons/iconRestaurant.vue'
import iconShop from './icons/iconShop.vue'
import iconParking from './icons/iconParking.vue'
import iconTickets from './icons/iconTickets.vue'
import iconAlert from './icons/iconAlert.vue'
import iconGlass from './icons/iconGlass.vue'
import WrapIcons from './WrapIcons.vue'
import iconXmarkVue from './icons/iconXmark.vue'
import iconMan from './icons/iconMan.vue'

defineProps({
  closeMenu: { type: Function, requierd: true }
})
</script>
