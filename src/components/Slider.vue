<template>
  <div class="h-full">
    <q-carousel
      animated
      v-model="slide"
      infinite
      class="rounded-3xl carousel-container"
    >
      <q-carousel-slide :name="1" img-src="../assets/images/image1.png" class="flex items-center">
        <div class="slide-content flex flex-cols items-center ">
          <h1 class="text-white font-normal mb-4">Картины из ниток по фото</h1>
          <p>Погрузитесь в мир творчества с нашей уникальной картиной из нитей в стиле String Art.</p>
          <button class="bg-button w-full mt-7">Заказать картину</button>
        </div>
        <div class="custom-navigation">
          <button @click="slide = 1" :class="{ active: slide === 1 }"></button>
          <button @click="slide = 2" :class="{ active: slide === 2 }"></button>
          <button @click="slide = 3" :class="{ active: slide === 3 }"></button>
          <button @click="slide = 4" :class="{ active: slide === 4 }"></button>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="../assets/images/image2.png" class="flex items-center">
        <div class="slide-content flex flex-cols items-center ">
          <h1 class="text-white font-normal mb-4">Картины из ниток по фото</h1>
          <p>Погрузитесь в мир творчества с нашей уникальной картиной из нитей в стиле String Art.</p>
          <button class="bg-button w-full mt-7">Заказать картину</button>
        </div>
        <div class="custom-navigation">
          <button @click="slide = 1" :class="{ active: slide === 1 }"></button>
          <button @click="slide = 2" :class="{ active: slide === 2 }"></button>
          <button @click="slide = 3" :class="{ active: slide === 3 }"></button>
          <button @click="slide = 4" :class="{ active: slide === 4 }"></button>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" class="flex items-center">
        <div class="slide-content flex flex-cols items-center ">
          <h1 class="text-white font-normal mb-4">Картины из ниток по фото</h1>
          <p>Погрузитесь в мир творчества с нашей уникальной картиной из нитей в стиле String Art.</p>
          <button class="bg-button w-full mt-7">Заказать картину</button>
        </div>
        <div class="custom-navigation">
          <button @click="slide = 1" :class="{ active: slide === 1 }"></button>
          <button @click="slide = 2" :class="{ active: slide === 2 }"></button>
          <button @click="slide = 3" :class="{ active: slide === 3 }"></button>
          <button @click="slide = 4" :class="{ active: slide === 4 }"></button>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" class="flex items-center">
        <div class="slide-content flex flex-cols items-center ">
          <h1 class="text-white font-normal mb-4">Картины из ниток по фото</h1>
          <p>Погрузитесь в мир творчества с нашей уникальной картиной из нитей в стиле String Art.</p>
          <button class="bg-button w-full mt-7">Заказать картину</button>
        </div>
        <div class="custom-navigation">
          <button @click="slide = 1" :class="{ active: slide === 1 }"></button>
          <button @click="slide = 2" :class="{ active: slide === 2 }"></button>
          <button @click="slide = 3" :class="{ active: slide === 3 }"></button>
          <button @click="slide = 4" :class="{ active: slide === 4 }"></button>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const slide = ref(1)

// Функция для переключения слайдов
const switchSlide = () => {
  // Увеличиваем значение slide
  slide.value = slide.value === 4 ? 1 : slide.value + 1

  // Устанавливаем задержку перед следующим переключением слайда
  setTimeout(switchSlide, 3000)
}

// Вызываем функцию для начала переключения слайдов
switchSlide()

// Следим за изменениями slide и останавливаем переключение слайдов при изменении пользователем
watch(slide, () => {
  clearTimeout()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.custom-navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.custom-navigation button {
  margin: 0 3px;
  padding: 2px 10px;
  width: 3px;
  height: 1px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
}

.custom-navigation button.active {
  background-color: #818181; /* Цвет для активного элемента */
  color: #fff;
  width: 40px; /* Ширина активной кнопки */
}

h1{
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  box-shadow: 0px 4px 4px 0px #000000A6;
  text-shadow: 0px 4px 4px 0px #000000A6;
}

p{
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: #fff;
}

.carousel-container{
  height:450px;
}
</style>