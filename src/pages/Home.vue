<template>  
  <q-layout class="wrapper">
    <Header />
    <div class="flex items-center w-full mt-8 p-5 mobile-only">
      <Slider />
      <div class="flex flex-col gap-5 w-full mt-4">
        <div>
          <p class="mb-4">Варианты картин</p>
          <img class="image w-full" src="../assets/images/image2.png">
        </div>

        <div class="flex flex-col gap-5">
          <div v-for="(card, index) in TextInCard" :key="index" class="blockcard w-full h-36 gap-2">
            <div class="icon bg-aqua mb-2"><img :src="card.icon" alt="Card Icon"></div>
            <p class="description">{{ card.description }}</p>
          </div>
        </div>

        <div class="w-full flex flex-col items-center bg-button justify-center text-center p-5">
            <div class="w-full bg-image h-40"></div>
              <p class="text-white">Сгенерируй картинку со своим изображением</p>
              <button class="w-full h-12 bg-white textcolor rounded-2xl description">СГЕНЕРИРОВАТЬ</button>
        </div>
      </div>
    </div>


    <!-- Desktop Only -->

    <div class="flex items-center w-full mt-8 p-5 desktop-only">
      <Slider />
      <div class="flex flex-col gap-5 w-full mt-4">
        <div class="flex flex-nowrap justify-between w-full">
          <p class="mb-4">Отзывы наших покупателей</p>
          <div class="flex flex-nowrap gap-3">
            <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button" @click="scrollLeft"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-btn>

            <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button" @click="scrollRight"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </q-btn>
          </div>

        </div>

          <div class="grid grid-cols-3 gap-5">

                <div class="grid grid-rows-2 w-full gap-5">

                  <div class="grid grid-cols-2 w-full gap-5">
                    <div class="imagevar w-full h-60"></div>
                    <div class="imagevar w-full h-60"></div>
                  </div>

                    <div class="imagevar w-full h-60"></div>

                </div>

                <div class="imagevar w-full h-full"></div>

                <div class="grid grid-rows-2 w-full gap-5">
                  <div class="imagevar w-full h-60"></div>

                  <div class="grid grid-cols-2 w-full gap-5">
                    <div class="imagevar w-full h-60"></div>
                    <div class="imagevar w-full h-60"></div>
                  </div>

                </div>
              
          </div>

        <div class="flex w-full flex-col gap-5 desktop-only">
            <!-- Первый блок с двумя элементами -->
            <div class="flex flex-row flex-nowrap gap-5">
              <div v-for="(card, index) in TextInCard.slice(0, 2)" :key="index" 
                  :class="index === 0 ? 'w-2/5' : 'w-3/5'" class="blockcard h-36 gap-2">
                <div class="icon bg-aqua mb-2"><img :src="card.icon" alt="Card Icon"></div>
                <p class="description">{{ card.description }}</p>
              </div>
            </div>

            <!-- Второй блок с тремя элементами -->
            <div class="flex flex-nowrap gap-5">
              <div v-for="(card, index) in TextInCard.slice(2)" :key="index" 
                  :class="index === 1 ? 'w-2/4' : 'w-1/4'" class="blockcard h-36 gap-2">
                <div class="icon bg-aqua mb-2"><img :src="card.icon" alt="Card Icon"></div>
                <p class="description">{{ card.description }}</p>
              </div>
            </div>
        </div>

        <div class="w-full flex flex-nowrap items-center justify-between bg-button-desktop bg-asset p-5 desktop-only">
            <div class="w-1/4 bg-image py-10 h-40"></div>
              <p class="text-white">Сгенерируй картинку со своим изображением</p>
              <button class="w-1/4 h-12 bg-white textcolor rounded-2xl description">СГЕНЕРИРОВАТЬ</button>
        </div>
      </div>

      <div class="flex flex-col gap-5 w-full mt-4">
        <div class="flex flex-nowrap justify-between w-full">
          <p class="mb-4">Отзывы наших покупателей</p>
          <div class="flex flex-nowrap gap-3">
            <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button" @click="scrollLeft"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-btn>

            <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button" @click="scrollRight"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </q-btn>
          </div>

        </div>
          
          <div class="w-full flex flex-nowrap gap-5">

                <div class="w-1/2 gap-5 bg-white rounded-2xl">
                  <div class="block-head flex items-center flex-nowrap p-5 gap-5"><div class="logo-user w-14 h-14"></div><div class="text-grey">99.99.2024 <br> <p>Анна Семенова</p></div></div>
                  <div class="block-content text-black p-5">Этот товар просто потрясающий! Я влюбилась в уникальный дизайн и красочные цвета. Картинка в стиле String Art выглядит очень стильно и оригинально. Рекомендую всем, кто ценит красоту и оригинальность!</div>
                </div>

                <div class="w-1/2 gap-5 bg-white rounded-2xl">
                  <div class="block-head flex items-center flex-nowrap p-5 gap-5"><div class="logo-user w-14 h-14"></div><div class="text-grey">99.99.2024 <br> <p>Анна Семенова</p></div></div>
                  <div class="block-content text-black p-5">Этот товар просто потрясающий! Я влюбилась в уникальный дизайн и красочные цвета. Картинка в стиле String Art выглядит очень стильно и оригинально. Рекомендую всем, кто ценит красоту и оригинальность!</div>
                </div>
              
          </div>

          <!-- Footer -->
            <Footer/>
          
        </div>
    </div>

  </q-layout>
</template>
  
<script setup lang="ts">
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Footer from '../components/Footer.vue';
import { defineComponent } from 'vue';

const TextInCard = [
  {
    icon: "src/assets/icons/iconsBlock/1.png",
    description: "Отлично подходит для подарка",
  },
  {
    icon: "src/assets/icons/iconsBlock/2.png",
    description: "Создает атмосферу уюта и элегантности",
  },
  {
    icon: "src/assets/icons/iconsBlock/3.png",
    description: "Простые в сборке",
  },
  {
    icon: "src/assets/icons/iconsBlock/4.png",
    description: "Ежедневная тех. поддержка",
  },
  {
    icon: "src/assets/icons/iconsBlock/5.png",
    description: "Приемлимые цены",
  },
];

defineComponent({
  name: 'Home',
});
</script>

<style scoped>
.image {
  height: 320px;
  border-radius: 10px;
}

.imagevar{
  background-image: url('../assets/images/image2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size:150%;
}

.logo-user{
  background-image: url('../assets/images/logo-user.png');
  background-position: center;
  border-radius: 20%;
}

.bg-button-desktop{
  background-color:#254446;
  color: #fff;
  min-width: 48px;
  min-height: 48px;
  gap: 10px;
  border-radius: 10px;
  opacity: 0px;
}

.blockcard {
  padding: 20px;
  border-radius: 10px;
  background-color: #F6F6F6;
}

.bg-asset{
  background-image: url('../assets/images/background.png');
}

.icon {
  width: 50px; /* Ширина иконки */
  height: 50px; /* Высота иконки */
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.description {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #1A3A27;
}

p {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #1A3A27;
}

.bg-image{
  background-image: url('../assets/images/image2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border-radius: 10px;
}
</style>
