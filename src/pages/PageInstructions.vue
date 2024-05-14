<template>
    <q-layout class="wrapper">
      <div class="flex w-full flex-col items-center w-full mt-3">
        <div class="flex items-center w-full justify-evenly">
          <div class="wrapper_range"><input type="range" min="0" max="100" value="50" step="12.5" /></div>
          <div class="circle">
            <div class="inner-circle"></div>
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
          <div><button class="button" @click="toggleAnimation"></button></div> <!-- Кнопка старт/пауза -->
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
              <input v-if="showVolumeSlider" type="range" orient="vertical" class="volume-slider" min="0" max="100" v-model="volume" @input="adjustVolume" key="volume-slider">
            </transition>
          </div>
          <div><button class="bg-aqua rounded-full w-10 h-10" @click="chooseMusic"></button> </div> <!-- Кнопка выбора музыки -->
          <div>
            <button @click="toggleEqualizer" class="equalizer-icon-button w-10 h-10">
                <i class="fas fa-bullseye"></i> 
              </button>
          </div> 
        </div>
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

  <style lang="scss">
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
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
  }

  .circle-quarter {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: transparent;
    border-radius: 50%;
  }

  .quarter-1 {
    top: 0;
    left: 0;
  }

  .quarter-2 {
    top: 0;
    right: 0;
  }

  .quarter-3 {
    bottom: 0;
    left: 0;
  }

  .quarter-4 {
    bottom: 0;
    right: 0;
  }

  .text {
    position: absolute;
    font-size: 36px;
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

</style>
