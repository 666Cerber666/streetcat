<template>
    <Header/>
    <div>
      <Slider/>
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '../components/Header.vue';
  import Slider from '../components/Slider.vue';
  import { defineComponent } from 'vue';
  
  defineComponent({
    name: 'Home',
  });
  </script>
  