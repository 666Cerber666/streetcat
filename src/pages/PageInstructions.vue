<template>
  <q-layout class="wrapper">
    <div class="flex w-full flex-col items-center justify-center w-full h-screen">
      <div class="flex items-center w-full justify-evenly">
        <div class="wrapper_range">
          <input type="range" class="volume-rangers" v-model="intervalValue" min="0" max="10000" default="5000" step="1000" />
        </div>
        <div>
          <div class="circle" ref="circle">
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
              <div class="flex flex-col items-center mt-3" v-for="(value, index) in displayedValues" :key="index">
              {{ value }}
            </div>
          </div>
        </div>
        <div>
          <button class="button" @click="toggleAnimation"></button>
        </div> <!-- Кнопка старт/пауза -->
      </div>
    </div>
  </q-layout>
  <div class="absolute flex bottom-0 inset-x-0 bg-block h-12 w-screen items-center justify-evenly">
    <div class="volume-container">
      <!-- Иконка кнопки регулировки громкости -->
      <button @click="toggleVolume" class="volume-icon-button">
        <i class="fas fa-volume-up"></i>
      </button>
      <!-- Вертикальный range с регулировкой громкости -->
      <transition name="slide-fade">
        <input v-if="showVolumeSlider" type="range" class="volume-slider" min="0" max="100" v-model="volume" @input="adjustVolume" key="volume-slider">
      </transition>
    </div>
    <div>
      <button class="bg-aqua rounded-full w-10 h-10 mt-1" @click="chooseMusic"></button>
    </div> <!-- Кнопка выбора музыки -->
    <div>
      <button @click="toggleEqualizer" class="equalizer-icon-button w-10 h-10">
        <i class="fas fa-bullseye"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const circle = ref(null);
const innerCircle = ref(null);
const values = ref(["A1", "B2", "C3", "D4", "A11", "B22", "C33", "D44"]);
let currentIndex = 0;
let intervalId = null;
const isRunning = ref(false);
const intervalValue = ref(5000); // Значение по умолчанию 5000 мс

const startUpdate = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    intervalId = setInterval(updateValues, intervalValue.value);
  }
};

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
  const btn = document.querySelector(".button");
  btn.classList.remove("paused");
};

const defaultValues = () => {
  innerCircle.value.textContent = values.value[currentIndex];
}

const toggleAnimation = () => {
  if (isRunning.value) {
    pauseUpdate();
  } else {
    startUpdate();
  }
  const btn = document.querySelector(".button");
  btn.classList.toggle("paused");
};

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

onMounted(() => {
  defaultValues(); // Установка значений по умолчанию
});

</script>



<style scoped lang="scss">
  @import 'range.scss'
</style>
  
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

/* Стили для иконки кнопки регулировки громкости и вертикального range */
.volume-container {
  position: relative; /* Добавлено */
  display: inline-block;
  margin-left: 20px; /* Расстояние между кнопкой и вертикальным range */
}

.volume-icon-button {
  border: none;
  background: none;
  cursor: pointer;
}

.volume-slider {
  position: absolute;
  left: 50%; /* Центрирование range относительно иконки */
  bottom: 0; /* Начальное положение сверху */
  transform: translateX(-50%); /* Центрирование range относительно иконки */
  width: 20px;
  height: 150px;
  margin-bottom:50px;
  -webkit-appearance: slider-vertical;
  appearance: slider-vertical;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  transform: translateY(-100%); /* Конечное положение (выезжание сверху вниз) */
}

.slide-fade-enter-from {
    transition: all 0.3s ease-out;
  transform: translateY(0); /* Начальное положение (скрытый снизу) */
}

.circle {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: lightgray;
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
    width: 100px;
    height: 100px;
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
    font-size: 24px;
    color: black;
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

</style>
