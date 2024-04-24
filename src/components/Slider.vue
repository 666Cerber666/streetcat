<template>
    <div class="slider-wrapper p-4 relative">
      <Swiper class="swiper-container" :options="swiperOptions">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="`./src/assets/images/${image}`" :alt="`Artwork ${index + 1}`" class="w-full h-full object-cover" />
        </SwiperSlide>
        <div class="swiper-content">
            
        </div>
        <div class="swiper-pagination-bars mx-auto absolute bottom-1 left-1/2 transform -translate-x-1/2 flex z-10">
            <div v-for="(image, index) in images" :key="index" class="w-2 h-2 mx-1 rounded-full bg-gray-300"></div>
        </div>
      </Swiper>
    </div>
  </template>
  
  <script setup>
  import 'swiper/swiper-bundle.css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  const images = [
    'image1.png',
    'image1.png',
    'image1.png',
    'image1.png',
    'image1.png',
  ];
  
  const swiperOptions = {
    pagination: {
      el: '.swiper-pagination',
    },
  };
  </script>
  
  <style>
  .slider-wrapper {
    @apply max-w-4xl mx-auto;
  }
  .swiper-container {
    @apply w-full h-96 relative; /* Добавили relative здесь */
  }
  .swiper-pagination-bars {
    @apply w-full;
  }
  </style>
  