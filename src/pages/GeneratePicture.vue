<template>  
    <q-layout class="wrapper">
      <Header />
      <div class="flex w-full flex-col items-center w-full mt-3">

        <div class="flex flex-col w-full desktop-only mobile-hide">
          <div class="flex flex-nowrap justify-between">
            <p class="mb-4 textblock">Генерация картины по фото</p>
              <div class="flex flex-nowrap gap-3">
                <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </q-btn>

                <q-btn flat round dense class="text-gray-500 w-14 h-14 bg-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </q-btn>
              </div>
          </div>
        
              <div class="w-full flex flex-nowrap gap-5 mt-5">
                <div class="w-1/3 flex flex-col items-center bg-button justify-center text-center py-7 px-5 ">
                  <div class="w-full bg-image h-40 flex justify-center items-center"><button class="w-4/5 h-12 butGenerate rounded-3xl" @click="showModal = true"><p class="textGenerate">ВСТАВЬТЕ ФОТО</p></button></div>
                    <p class="text-white font-bold textgenerateblock">Вставьте своё фото для генерации</p>
                    <p class="text-white text-start">Ваши предыдущие генерации доступны ниже</p>
                </div>
                <div class="w-2/3 flex flex-col items-center justify-center block-wait">
                  <div class="bg-white/70 w-3/4 h-12 rounded-3xl textwaiting flex justify-center text-white">ЗАГРУЗКА...</div>
                </div>
              </div>
        </div>

          <div class="w-full ml-0 pr-10 mobile-only desktop-hide">
              <p class="mb-4">Генерация картины по фото</p>
              <div class="w-full flex flex-col items-center bg-button justify-center text-center py-7 px-5 mt-3">
                  <div class="w-full bg-image h-40 flex justify-center items-center">
                    <button class="w-4/5 h-12 butGenerate rounded-3xl" @click="showModal = true"><p class="textGenerate">ВСТАВЬТЕ ФОТО</p></button>
                  </div>
                    <p class="text-white font-bold">Вставьте своё фото для генерации</p>
                    <p class="text-white text-start">Ваши предыдущие генерации доступны ниже</p>
                </div>
          </div>     

        <div class="flex flex-col mt-4 p-5">
          <div>
            <div class="flex flex-nowrap justify-between w-full">
              <p class="mb-4 textblock">Ваши генерации</p>
                <div class="flex flex-nowrap gap-3 desktop-only">
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

            <div class="w-screen overflow-x-hidden mobile-only">
              <div class="section">
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
              </div>
            </div>

            <div class="w-full desktop-only mt-5">
              <div class="section">
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
                <div class="section__item">
                  <q-img src="../assets/images/image1.png" class="w-72 h-48">
                    <div class="absolute-bottom text-subtitle1 text-center textopengen">
                      ОТКРЫТЬ
                    </div>
                  </q-img>
                </div>
              </div>
            </div>


          </div>
  

        </div>
      </div>
      <Footer class="desktop-only"/>
      <transition><Modal v-if="showModal" @close="showModal = false" /></transition>
    </q-layout>
  </template>
    
  <script setup lang="ts">
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Modal from '../components/Modal.vue';
  import { ref } from 'vue';

  let showModal = ref(false);

  </script>
  
  <style scoped>
  .image {
    height: 320px;
    border-radius: 10px;
  }

  .textgenerateblock{
    font-family: 'Open Sans', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 39.2px;
    text-align: center;
  }

  .textopengen{
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    box-shadow: 0px 4px 4px 0px #000000A6;
  }

  .block-wait{
    background-image: url('../assets/images/waiting.png');
    background-position: contain;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  .section {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  scroll-snap-type: x mandatory;
  padding-right:25px;
}

.textblock{
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 50.4px;
  text-align: left;
}

.section__item {
  scroll-snap-align: start;
}

.section:last-child {
scroll-snap-align: end;
}

.textwaiting{
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 50.4px;
  text-align: left;
  text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
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
    text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
    color:white;
  }
  </style>
  