<template>
    <q-layout class="wrapper">
      <div class="flex w-full flex-col items-center w-full mt-3">
        <div class="flex">
          <div></div>
          <div></div>
          <div><button class="button" @click="toggleAnimation"></button></div> <!-- Кнопка старт/пауза -->
        </div>
        <div class="absolute flex bottom-1">
          <div class="volume-container">
            <!-- Иконка кнопки регулировки громкости -->
            <button @click="toggleVolume" class="volume-icon-button">
              <i class="fas fa-volume-up"></i> <!-- Пример иконки из Font Awesome -->
            </button>
            <!-- Вертикальный range с регулировкой громкости -->
            <transition name="slide-fade">
              <input v-if="showVolumeSlider" type="range" orient="vertical" class="volume-slider" min="0" max="100" v-model="volume" @input="adjustVolume" key="volume-slider">
            </transition>
          </div>
          <div><button @click="chooseMusic"></button> </div> <!-- Кнопка выбора музыки -->
          <div><button @click="toggleEqualizer"></button> </div> <!-- Кнопка эквалайзера -->
        </div>
      </div>
    </q-layout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showVolumeSlider: false, // Показывать ли вертикальный range для регулировки громкости
        volume: 50 // Начальное значение громкости
      };
    },
    methods: {
      goToPageInstructions() {
        this.$router.push('/PageInstruction');
      },
      toggleAnimation() {
        const btn = document.querySelector(".button");
        btn.classList.toggle("paused");
      },
      toggleVolume() {
        this.showVolumeSlider = !this.showVolumeSlider;
      },
      adjustVolume() {
        // Обработчик изменения значения громкости
        // Вы можете добавить здесь логику для регулировки громкости в вашем приложении
      },
      chooseMusic() {
        // Реализация функционала для кнопки выбора музыки
      },
      toggleEqualizer() {
        // Реализация функционала для кнопки эквалайзера
      }
    }
  }
  </script>
  
  <style scoped>
/* Стили для кнопки и ее анимации */
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
</style>
