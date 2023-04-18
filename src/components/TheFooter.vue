<template>
  <footer class="w-full bg-[#212225] p-[16px] md:px-6 2xl:px-40">
    <div class="mb-[32px]">
      <img src="/bigLogoFooter.png" alt="bigLogoFooter" />
    </div>
    <div class="md:flex md:justify-between">
      <div class="pb-[20px] md:pt-[0px] border-b border-b-[#2C2C2C]">
        <p class="text-white pb-[20px]">Курорт</p>
        <div class="text-[#A0A7AF] flex flex-wrap md:flex-nowrap md:flex-col md:gap-6">
          <a class="w-[48%] md:w-[80%]" href="#">Отели</a>
          <a class="w-[48%] md:w-[80%]" href="#">Магазин</a>
          <a class="w-[48%] md:w-[80%]" href="#">Рестораны</a>
          <a class="w-[48%] md:w-[80%]" href="#">Детям</a>
          <a class="w-[48%] md:w-[80%]" href="#">Развлечения</a>
        </div>
      </div>
      <div class="pt-[20px] md:pt-[0px] border-b border-b-[#2C2C2C]">
        <p class="text-white pb-[20px]">Катания</p>
        <div class="text-[#A0A7AF] flex flex-wrap md:flex-nowrap md:flex-col md:gap-6">
          <a class="w-[48%] md:w-[80%]" href="#">Билеты</a>
          <a class="w-[48%] md:w-[80%]" href="#">Школа</a>
          <a class="w-[48%] md:w-[80%]" href="#">Прокат</a>
          <a class="w-[48%] md:w-[80%]" href="#">Паркинг</a>
        </div>
      </div>
      <div class="pt-[20px] md:pt-[0px] border-b border-b-[#2C2C2C]">
        <p class="text-white pb-[20px]">Инфо</p>
        <div class="text-[#A0A7AF] flex flex-wrap md:flex-nowrap md:flex-col md:gap-6">
          <a class="w-[48%] md:w-[80%]" href="#">Правила курорта</a>
          <a class="w-[48%] md:w-[80%]" href="#">Новости</a>
          <a class="w-[48%] md:w-[80%]" href="#">Как добраться</a>
          <a class="w-[48%] md:w-[80%]" href="#">Техническая поддержка</a>
        </div>
      </div>
      <div class="pt-[20px] md:pt-[0px]">
        <p class="text-white pb-[20px]">Контакты</p>
        <div class="flex flex-col gap-6">
          <div class="flex gap-4">
            <div class="bg-white rounded-[50%]">
              <iconFaceBook class="bg-black rounded-[50%]" />
            </div>
            <div class="bg-white rounded-[50%]">
              <iconYoutube class="bg-black rounded-[50%]" />
            </div>
            <div class="bg-white rounded-[50%]">
              <iconInstagram class="bg-black rounded-[50%]" />
            </div>
            <div class="bg-white rounded-[50%]">
              <iconVk class="bg-black rounded-[50%]" />
            </div>
          </div>
          <div><p class="text-[#A0A7AF]">info@shymbulak.com</p></div>
          <div><p class="text-[#A0A7AF]">+7 727 331 77 77</p></div>
        </div>
      </div>
    </div>
    <div class="hidden md:flex md:gap-5"><iconGooglePlay /> <iconApplePlay /></div>
  </footer>
</template>

<script setup>
import iconFaceBook from './icons/iconFaceBook.vue'
import iconYoutube from './icons/iconYoutube.vue'
import iconInstagram from './icons/iconInstagram.vue'
import iconVk from './icons/iconVk.vue'
import iconGooglePlay from './icons/iconGooglePlay.vue'
import iconApplePlay from './icons/iconApplePlay.vue'
</script>
