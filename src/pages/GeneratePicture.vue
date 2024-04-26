<template>  
    <q-layout>
      <Header />
      <div class="flex items-center w-full p-5">
        <h2 class="mb-2">Генерация картины</h2>
        <div class="w-full flex flex-col items-center bg-button justify-center text-center py-7 px-5 ">
              <div class="w-full bg-image h-40 flex justify-center items-center"><button class="w-4/5 h-12 butGenerate rounded-3xl"><p class="textGenerate">ВСТАВЬТЕ ФОТО</p></button></div>
                <p class="text-white font-bold">Вставьте своё фото для генерации</p>
                <p class="text-white text-start">Ваши предыдущие генерации доступны ниже</p>
          </div>
        <div class="flex flex-col mt-4">
          <div>
            <p class="mb-4">Ваши генерации</p>

            <div class="w-screen overflow-x-hidden">
              <div class="section">
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center">
                      Открыть
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center">
                      Открыть
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center">
                      Открыть
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center">
                      Открыть
                    </div>
                  </q-img>
                </div>
              </div>
            </div>


          </div>
  

        </div>
      </div>
    </q-layout>
  </template>
    
  <script setup lang="ts">
  import Header from '../components/Header.vue';

  </script>
  
  <style scoped>
  .image {
    height: 320px;
    border-radius: 10px;
  }

  .section {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  scroll-snap-type: x mandatory;
  padding-right:25px;
}

.section__item {
  scroll-snap-align: start;
}

.section:last-child {
scroll-snap-align: end;
}

  .galleryimages{
    width:278px; 
    height:200px;
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

  .butGenerate{
    background-color: #FFFFFFAD !important;
  }
  .textGenerate{
    text-shadow: 0px 4px 4px 4px #000000A6; 
    color:white;
  }
  </style>
  