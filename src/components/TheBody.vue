<template>
  <main class="px-4 flex flex-col gap-6 mb-4 md:px-6 md:mb-12 2xl:px-40 2xl:pt-4">
    <h1 class="font-semibold text-[24px]">Погода</h1>
    <div class="md:flex md:flex-wrap md:justify-between">
      <div
        class="bg-[#75B6F2] rounded-[16px] h-[170px] w-full flex items-center text-white gap-[30px] justify-center md:w-[48%] lg:justify-start lg:"
      >
        <div>
          <p class="text-[14px] font-light hidden lg:block lg:text-center lg:mb-2">Сейчас</p>
          <img class="h-[130px] w-[130px]" :src="todayImage" alt="" />
        </div>

        <div>
          <p class="pt-[6px] text-[21px] hidden lg:block">{{ todayDesc }}</p>
          <h2 class="text-[48px] font-bold">{{ todayTemp }}<sup>o</sup>C</h2>
          <div class="">
            <p class="pt-[6px] text-[21px] lg:hidden">{{ todayDesc }}</p>
            <p class="text-[14px] font-light lg:hidden">Сейчас</p>
          </div>
          <div class="hidden lg:flex lg:gap-5">
            <div class="flex gap-1">
              <iconWind class="h-[16px] w-[20px]" /> <span> 3.89 м/c</span>
            </div>
            <div class="flex gap-1">
              <iconWater class="h-[16px] w-[20px]" /> <span> 0.0 см </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="pt-[16px] pl-[16px] w-full relative md:w-[48%] border border-[#DAE9F4] rounded-3xl"
      >
        <div class="flex pb-[12px] border-b border-b-[#E1E7EE] mb-3 items-center">
          <IconCLock class="w-[14px] h-[14px] mr-[8px]" />
          <p class="text-[14px]">Погода в течении дня</p>
        </div>
        <div class="flex gap-1">
          <button class="px-1 flex items-center" @click="slider.prev()">
            <iconArrow />
          </button>

          <div class="keen-slider overflow-hidden" ref="container">
            <div
              v-for="hour in getDayInfo"
              :key="hour.time"
              class="keen-slider__slide min-w-[66px] flex flex-col items-center px-[13px]"
            >
              <div class="text-[#6D7784] text-center">{{ hour.time }}</div>
              <img :src="hour.img" alt="" class="w-[26px] h-[26px] mt-[13px] mb-[10px]" />
              <div class="text-[#4F5864] text-center">{{ hour.temp }}<sup>o</sup></div>
            </div>
          </div>
          <button v-if="slider" class="rotate-180 flex items-center px-1" @click="slider.next()">
            <iconArrow class="" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full p-4 bg-[#F4F8FD] rounded-[16px]">
      <div class="flex h-[45px] items-center">
        <IconCalendar />
        <p class="pl-[8px]">Погода на 5 дней</p>
      </div>
      <div class="md:flex-row md:justify-around md:flex md:pl-[30px]">
        <div
          v-for="day in getFiveDayInfo"
          :key="day.min"
          class="flex items-center gap-5 border-t border-t-[#E1E7EE] md:flex-col md:w-[20%] md:gap-2 md:items-start"
        >
          <p class="min-w-[70px] text-center md:text-start">{{ day.date }}</p>
          <div class="flex flex-col my-[9px] items-center">
            <img :src="day.img" alt="" class="w-[22px] h-[22px]" />
          </div>
          <div class="text-[#4F5864] font-medium">
            <span class="text-[#6D7784] font-normal">мин.</span> {{ day.min }}<sup>o</sup>
          </div>
          <div class="text-[#4F5864] font-medium">
            <span class="text-[#6D7784] font-normal">макс.</span> {{ day.max }}<sup>o</sup>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from 'vue'
import IconCLock from './icons/iconCLock.vue'
import IconCalendar from './icons/iconCalendar.vue'
import getTodayWeather from '../service/getTodayWeather'
import getWeather from '../service/getWeather'
import { mainToImg } from '../helpers/index'
import { useKeenSlider } from 'keen-slider/vue'
import iconArrow from './icons/iconArrow.vue'
import iconWind from './icons/iconWind.vue'
import iconWater from './icons/iconWater.vue'

const weather = reactive({
  today: null,
  fiveDay: null
})
const current = ref(0)
const [container, slider] = useKeenSlider({
  mode: 'free',
  slides: {
    perView: 'auto'
    // spacing: 25
  },
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel
  }
})

const weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
const todayTemp = computed(() => {
  if (weather.today) {
    return Math.floor(weather.today.main.temp - 273.15)
  }
  return 10
})
const todayImage = computed(() => {
  if (weather.today) {
    return mainToImg[weather.today.weather[0].main].img
  }
})
const todayDesc = computed(() => {
  if (weather.today) {
    return mainToImg[weather.today.weather[0].main].desc
  }
})

const getFiveDayInfo = computed(() => {
  if (weather.fiveDay) {
    let arr = []
    for (let i = 0; i < weather.fiveDay.list.length; i += 8) {
      arr.push({
        img: mainToImg[weather.fiveDay.list[i].weather[0].main].img,
        min: Math.floor(weather.fiveDay.list[i].main.temp_min - 273.15),
        max: Math.floor(weather.fiveDay.list[i].main.temp_max - 273.15),
        date: i == 0 ? 'Сегодня' : weekDay[new Date(weather.fiveDay.list[i].dt_txt).getDay()]
      })
    }
    return arr
  }
  return []
})

const getDayInfo = computed(() => {
  if (weather.fiveDay) {
    let arr = []
    let someTime = 0
    for (let i = 0; i < 8; i++) {
      arr.push({
        img: mainToImg[weather.fiveDay.list[i].weather[0].main].img,
        temp: Math.floor(weather.fiveDay.list[i].main.temp - 273.15),
        time: someTime++
      })
      arr.push({
        img: mainToImg[weather.fiveDay.list[i].weather[0].main].img,
        temp: Math.floor(weather.fiveDay.list[i].main.temp - 273.15),
        time: someTime++
      })
      arr.push({
        img: mainToImg[weather.fiveDay.list[i].weather[0].main].img,
        temp: Math.floor(weather.fiveDay.list[i].main.temp - 273.15),
        time: someTime++
      })
    }
    return arr
  }
  return []
})

onMounted(async () => {
  weather.today = await getTodayWeather()
  // console.log(mainToImg)
  weather.fiveDay = await getWeather()
})
</script>

<style scoped>
@import url('keen-slider/keen-slider.css');
</style>
