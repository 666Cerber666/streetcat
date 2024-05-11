<template>  
  <q-layout class="wrapper">
    <div class="flex flex-col text-black items-center justify-center h-screen">
      <span class="time mobile-only mt-20">{{ minutes }}:{{ seconds }}</span>
      <div class="relative">
        <div class="spinner mt-20"></div>
        <div class="absolute inset-0 flex items-center text-center text-black justify-center transition-opacity duration-1000 ease-in-out">
            <span class="time desktop-only mobile-hide">{{ minutes }}:{{ seconds }} </span>
        </div>
      </div>
      <div class="mt-20 px-5"><span class="text-black text-3xl text-wrap">{{ currentMessage }}</span></div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  data() {
    return {
      countdown: 180, // 3 минуты в секундах
      messages: [
        'Делаем вашу картину...',
        'Подождите еще немного...',
        'Собираем нитки...',
        'Выстраиваем композицию...'
      ],
      currentMessageIndex: 0
    };
  },
  computed: {
    minutes() {
      return Math.floor(this.countdown / 60);
    },
    seconds() {
      return this.countdown % 60;
    },
    currentMessage() {
      return this.messages[this.currentMessageIndex];
    }
  },
  mounted() {
    const intervalId = setInterval(() => {
      this.countdown -= 1;
      if (this.countdown === 0) {
        clearInterval(intervalId); // Остановка интервала
        // Переход на страницу GeneratePicture
        this.$router.push({ name: 'GeneratePicture' });
      }
      // Переключаем сообщения с анимацией каждые 5 секунд
      if (this.countdown % 5 === 0) {
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
      }
    }, 1000); // Обновляем каждую секунду
  },
}
</script>

<style scoped>
.time{
  margin-top:25%;
  font-size: 118px;
}
.spinner {
  border: 10px solid rgba(0, 0, 0, 0.1);
  border-left-color: black;
  animation: spin 1s linear infinite;
  border-radius: 50%;
  width: 20vw; /* Адаптивная ширина относительно ширины экрана */
  height: 20vw; /* Адаптивная высота относительно ширины экрана */
  max-width: 500px; /* Максимальная ширина для больших экранов */
  max-height: 500px; /* Максимальная высота для больших экранов */
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.transition-opacity {
  transition-property: opacity;
}
</style>
