<template>
  <q-layout class="wrapper">
    <div class="flex w-full flex-col items-end justify-center h-full gap-3 px-3">
      <q-btn class="w-12 h-12 mt-2 mr-2 bg-block float-right rounded-xl text-center flex items-center justify-center">
        <span class="close" @click="goToHomePage">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </span>
      </q-btn>
      <div class="flex items-center w-full bg-block block-plates justify-evenly rounded-xl py-12 mb-2">
        <div class="wrapper_range" ref="rangeWrapper">
          <q-slider
            v-model="intervalValue"
            :min="0"
            :max="10000"
            :step="1000"
            vertical
            label
            reverse
            track-color="teal-3"
            color="teal-9"
            markers= true
            class="volume-rangers"
          />
        </div>
        <div>
          <div class="circle bg-aqua" ref="circle">
            <div class="inner-circle text-black" ref="innerCircle"></div>
            <div class="circle-quarter quarter-1"></div>
            <div class="circle-quarter quarter-2"></div>
            <div class="circle-quarter quarter-3"></div>
            <div class="circle-quarter quarter-4"></div>
            <!-- Текст в каждом углу -->
            <span class="text text-1">A</span>
            <span class="text text-2">B</span>
            <span class="text text-3">C</span>
            <span class="text text-4">D</span>
          </div>
            <div class="mt-20">
              <div class="flex flex-col items-center mt-3 arrayValues" v-for="(value, index) in displayedValues" :key="index">
                {{ value }}
              </div>
              <transition-group name="fade">
                <div v-if="newItem" class="arrayValues">{{ newItem }}</div>
              </transition-group>
          </div>
        </div>
        <div>
          <button class="button" @click="toggleAnimation"></button>
        </div> <!-- Кнопка старт/пауза -->
      </div>
    </div>
  </q-layout>
  <div class="absolute flex bottom-0 inset-x-0 bg-block h-12 w-screen items-center justify-evenly mobile-only">
    <div class="volume-container">
      <!-- Иконка кнопки регулировки громкости -->
      <button @click="toggleVolume" class="volume-icon-button">
        <i class="fas fa-volume-up"></i>
      </button>
      <!-- Вертикальный range с регулировкой громкости -->
      <transition name="slide-fade">
        <div v-if="showVolumeSlider" class="volume-slider-container">
          <q-slider
            v-model="volume"
            :min="0"
            :max="100"
            vertical
            label
            reverse
            track-color="teal-3"
            color="teal-9"
            class="volume-slider"
          />
        </div>
      </transition>
    </div>
    <div>
      <button class="rounded-full w-10 h-10 mb-1 plate" @click="chooseMusic" :class="{ 'rotate-animation': isRotating }"></button>
    </div> <!-- Кнопка выбора музыки -->
    <div>
      <button @click="toggleEqualizer" class="equalizer-icon-button w-10 h-10">
        <i class="fas fa-bullseye"></i>
      </button>
    </div>
  </div>

  <div class="absolute flex bottom-0 inset-x-0 bg-block h-24 gap-2 w-screen items-center justify-evenly desktop-only">
      <!-- Вертикальный range с регулировкой громкости -->
      <div class="flex items-center gap-2">
          <i class="fas fa-volume-up"></i>
          <q-slider
            v-model="volume"
            :min="0"
            :max="100"
            label
            track-color="teal-3"
            color="teal-9"
            class="w-36"
          />
      </div>
    <div>
      <button class="absolute bottom-0 rounded-full w-20 h-20 mb-1 plate" @click="chooseMusic" :class="{ 'rotate-animation': isRotating }"></button>
    </div> <!-- Кнопка выбора музыки -->
    <div>
      <button @click="toggleEqualizer" class="equalizer-icon-button w-20 h-20">
        <i class="fas fa-bullseye"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const circle = ref(null);
const rangeWrapper = ref(null);
const innerCircle = ref(null);
const values = ref(["A1", "B2", "C3", "D4", "A11", "B22", "C33", "D44"]);
let currentIndex = 0;
let intervalId = null;
const isRunning = ref(false);
const intervalValue = ref(5000); // Значение по умолчанию 5000 мс
const showVolumeSlider = ref(false);
const isRotating = ref(false);
const newItem = ref(null);
const volume = ref(50);

const startUpdate = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    intervalId = setInterval(updateValues, intervalValue.value);
  }
};

const toggleRotation = () => {
  isRotating.value = !isRotating.value; // Инвертирование состояния анимации при каждом нажатии на кнопку
}

const updateValues = () => {
  // Обновление значений внутри круга
  innerCircle.value.textContent = values.value[currentIndex];
  const index = values.value[currentIndex].charCodeAt(0) - 65;

  // Удаление класса activetext у всех текстовых элементов
  document.querySelectorAll('.text').forEach((text) => {
    text.classList.remove('activetext');
  });

  // Добавление класса activetext к нужному текстовому элементу
  const activeText = circle.value.querySelector(`.text-${index + 1}`);
  if (activeText) {
    activeText.classList.add('activetext');
  }

  // Установка активности для соответствующего квадранта круга
  document.querySelectorAll('.circle-quarter').forEach((quarter) => {
    quarter.classList.remove('active');
  });
  circle.value.querySelector(`.circle-quarter.quarter-${index + 1}`).classList.add('active');

  currentIndex = (currentIndex + 1) % values.value.length;
  
  showNextValues();
  
  // Проверяем, прошли ли все объекты в массиве values
  if (currentIndex === 0) {
    pauseUpdate(); // Вызываем функцию pauseUpdate, если все объекты пройдены
    isRunning.value = true;
    toggleAnimation();
  }
};

const pauseUpdate = () => {
  isRunning.value = false;
  clearInterval(intervalId);
};

const defaultValues = () => {
  innerCircle.value.textContent = values.value[currentIndex];
}

const toggleAnimation = () => {
  if (isRunning.value) {
    pauseUpdate();
    const btn = document.querySelector(".button");
    btn.classList.toggle("paused");
    toggleRotation();
  } else {
    startUpdate();
    const btn = document.querySelector(".button");
    btn.classList.toggle("paused");
    toggleRotation();
  }
};

const toggleVolume = () => {
  showVolumeSlider.value = !showVolumeSlider.value;
}

watch(intervalValue, (newValue) => {
  pauseUpdate();
});

const displayedValues = ref(values.value.slice(0, 3));

const showNextValues = () => {
  displayedValues.value.shift(); // Удаляем первый элемент
  if (currentIndex < values.value.length) {
    // Добавляем следующее значение из values, если currentIndex не на последнем элементе
    displayedValues.value.push(values.value[currentIndex + 2]);
  }
};

const addNewValue = (newValue) => {
  newItem.value = newValue;
  setTimeout(() => {
    displayedValues.value.push(newValue);
    newItem.value = null;
  }, 300); // Задержка должна быть равной продолжительности анимации
};

onMounted(() => {
  defaultValues(); // Установка значений по умолчанию
});

</script>
  
<style scoped>
.button {
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 74px;
  border-color: transparent transparent transparent #202020;
  transition: 100ms all ease;
  cursor: pointer;
  border-style: solid;
  border-width: 37px 0 37px 60px;
}

.paused {
  border-style: double;
  border-width: 0px 0 0px 60px;
}

.button:hover {
  border-color: transparent transparent transparent #404040;
}

.volume-icon-button {
  border: none;
  background: none;
  cursor: pointer;
  width:50px;
}

/* Стили для контейнера слайдера */
.volume-slider-container {
  position: absolute;
  left: calc(100% + (50 / 5)); /* Центрирование контейнера относительно иконки */
  bottom: 0; /* Начальное положение сверху */
  transform: translate(0%, -50%); /* Перемещение контейнера вверх на высоту слайдера */
}

/* Стили для самого слайдера */
.volume-slider {
  width: 20px;
  height: 150px;
  -webkit-appearance: slider-vertical;
  appearance: slider-vertical;
}

/* Анимация */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  transform: translateY(-50%);
}

.slide-fade-enter-from {
  transition: all 0.3s ease-out;
  transform: translateY(0);
}

.plate{
  background-image: url('../assets/images/plate.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  left: 47%
}

.rotate-animation {
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.circle {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    position: absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    font-size:24px;
    z-index: 2;
  }

  .circle-quarter {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: transparent;
  }

  .quarter-1 {
    top: 0;
    left: 0;
    border-radius: 100% 0% 0% 0%;
    z-index: 1;
  }

  .quarter-2 {
    top: 0;
    right: 0;
    border-radius: 0% 100% 0% 0%;
    z-index: 1;
  }

  .quarter-3 {
    bottom: 0;
    left: 0;
    border-radius: 0% 0% 0% 100%;
    z-index: 1;
  }

  .quarter-4 {
    bottom: 0;
    right: 0;
    border-radius: 0% 0% 100% 0%;
    z-index: 1;
  }

  .text {
    position: absolute;
    font-size: 36px;
    color: white;
  }

  /* Указываем позиции текста */
  .text-1 {
    top: 5px;
    left: 5px;
  }

  .text-2 {
    top: 5px;
    right: 5px;
  }

  .text-3 {
    bottom: 5px;
    left: 5px;
  }

  .text-4 {
    bottom: 5px;
    right: 5px;
  }

  .active { background-color: black; transition: ease-in-out 0.3s}

  .activetext { color: rgb(16, 17, 109); font-size: 28px; transition: ease-in-out 0.3s}

  .arrayValues{
    font-size:24px;
    color:#ABD5D6;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active в более новых версиях Vue */ {
    opacity: 0;
  }

  .block-plates{
    min-height: 560px;
  }

  @media screen and (max-width:768px) {
    .circle{
      width:200px;
      height: 200px;
    }

    .text{
      font-size: 12px;
    }

    .circle-quarter{
      width:100px;
      height:100px;
    }

    .button{
      border-width:37px 0 37px 30px;
      height:24px;
    }
  }

</style>
