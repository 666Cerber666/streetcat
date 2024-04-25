<template>  
  <q-layout>
    <Header />
    <div class="flex items-center w-full mt-8 p-5">
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
  </q-layout>
</template>
  
<script setup lang="ts">
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
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

.blockcard {
  padding: 20px;
  border-radius: 10px;
  background-color: #F6F6F6;
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
