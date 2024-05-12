<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <span class="close" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </span>
      <form class="flex flex-col items-center justify-center w-full" @submit.prevent="redirectToPageLoader">
        <label class="label">Введите код для генерации</label>
        <div class="flex otp-container">
          <div class="flex items-center otp-input-wrapper" v-for="(index, i) in 6" :key="index">
            <input v-model="otp[i]" @input="focusNextInput(i)" ref="otpInput" type="text" inputmode="numeric" min="0" max="9" maxlength="1" pattern="[0-9]" class="otp-input">
          </div>
        </div>
        <div v-if="isOtpInputFilled">
          <label class="label">Загрузите вашу фотографию для генерации</label>
          <input type="file" @change="previewImage" accept="image/*" class="file-input" required>

          <label class="label">Какой размер сделаем картинке?</label>
          <div class="flex w-full gap-3">
            <label v-for="size in imageSizes" :key="size" class="radio-label cursor-pointer">
              <input type="radio" name="imageSize" :value="size" class="radio-btn">
              {{ size }}
            </label>
          </div>
          <div class="w-full flex flex-col items-center">
            <img v-if="imagePreview" :src="imagePreview" alt="Preview" class="preview-image">
            <input type="range" min="0" max="100" v-model="imageSlider" v-if="imagePreview" class="w-2/5" @input="changeImagePreview">
          </div>
          <input type="submit" value="СГЕНЕРИРОВАТЬ" class="submit-btn">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otp: ['', '', '', '', '', ''],
      imagePreview: '',
      imageNextPreview: '../assets/images/image1.png',
      imageSlider: 0,
      imageSizes: ['250x250', '300x300', '400x400', '500x500', '600x600']
    };
  },
  computed: {
    isOtpInputFilled() {
      return this.otp.every(input => input !== '');
    }
  },
  methods: {
    redirectToPageLoader() {
      // Логика перенаправления на страницу PageLoader
    },
    focusNextInput(index) {
      if (this.otp[index] && index < this.otp.length - 1) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    changeImagePreview() {
      // Обновление пути к следующему изображению в зависимости от значения ползунка
      const nextImageIndex = this.imageSlider + 1;
      if (nextImageIndex < this.imageSizes.length) {
        // Здесь можно добавить логику для загрузки нового изображения
        // Например, если у вас есть список изображений, вы можете выбрать следующее изображение по индексу
        this.imageNextPreview = `../assets/images/image${nextImageIndex + 1}.png`;
      }
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

input{
  background-color: white;
  color:black;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}

.label {
  font-size: 18px;
  margin-bottom: 10px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: none;
  border-radius: 5px;
}

.file-input {
  width: 100%;
  margin-top: 10px;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  background-color:#254446;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn-width {
  width: 25%;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  background-color:#254446;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

label{
  color:black;
}

.submit-btn:hover {
  background-color:#2e6468;
}

.otp-container {
  display: flex;
  justify-content: center;
}

.otp-input-wrapper {
  display: flex;
  align-items: center;
  margin: 0 5px; /* Регулируйте расстояние между input'ами */
}

.otp-input {
  width: 30px; /* Регулируйте ширину input'а */
  height: 30px; /* Регулируйте высоту input'а */
  font-size: 16px; /* Регулируйте размер шрифта */
  text-align: center; /* Выравнивание текста по центру */
  border: 1px solid #ccc; /* Стилизуйте границу */
  border-radius: 5px; /* Скругление углов */
}

/* Пример стилей при фокусе */
.otp-input:focus {
  outline: none; /* Убираем стандартный контур при фокусе */
  border-color: #2e6468; /* Стилизуем цвет границы при фокусе */
  box-shadow: 0 0 5px rgba(10, 67, 71, 0.5); /* Добавляем тень при фокусе */
}

.radio-label {
  display: flex;
  align-items: center;
}

.radio-btn {
  margin-right: 8px; /* Расстояние между радиокнопкой и текстом */
  cursor: pointer; /* Показывает, что радиокнопка кликабельна */
}

.radio-label:hover {
  color: #2e6468; /* Изменение цвета текста при наведении */
}

.preview-image, .next-preview-image {
  border: 2px solid #2e6468;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin-top: 20px; /* Добавляем отступ между текущим и следующим изображением */
}
</style>
