<template>  
    <q-layout class="wrapper">
      <Header />
      <div class="flex items-center w-full p-5">
        <h2 class="mb-2 textblock">Товары Street Cat</h2>
        <div class="w-full flex flex-col items-center justify-center text-center py-7">
            <q-btn-dropdown color="" label="Все" class="w-full bg-block rounded-md">
                <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label>Photos</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label>Videos</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label>Articles</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>
          </div>
        <div class="flex flex-col gap-5 w-full mt-4 gap-5 mobile-only">
            <template v-for="index in 7" :key="index">
                <div class="image"></div>
                <div><p>Картина 50x50</p></div>
            </template>
        </div>
        <div class="grid grid-cols-3 gap-5 w-full mt-4 gap-5 desktop-only">
            <template v-for="index in 9" :key="index">
              <div class="flex flex-col gap-3">
                <div class="image w-80"></div>
                <div><p>Картина 50x50</p></div>
              </div>
            </template>
        </div>
      </div>
      <Footer class="desktop-only"/>
    </q-layout>
  </template>
    
  <script setup lang="ts">
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  const onItemClick = () => {
        // console.log('Clicked on an Item')
    }
  
  </script>
  
  <style scoped>
  .image {
    background-image: url('../assets/images/image2.png');
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    border-radius: 18px;
  }

  .colorsbread{
    color:#254446;
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

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    color: #1A3A27;
  }

  .bg-image{
    background-repeat: no-repeat;
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),
        url('../assets/images/image1.png');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }

  .textblock{
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 50.4px;
  text-align: left;
}

  .butGenerate{
    background-color: #FFFFFFAD !important;
  }
  .textGenerate{
    text-shadow: 0px 4px 4px 4px #000000A6; 
    color:white;
  }
  </style>
  