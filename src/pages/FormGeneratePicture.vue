<template>
  <q-layout class="wrapper flex flex-col justify-center items-end px-2">
    <q-btn class="w-12 h-12 mt-2 mr-2 bg-block float-right rounded-xl text-center flex items-center justify-center">
      <span class="close" @click="goToHomePage">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </span>
    </q-btn>
    
      <form class="flex flex-col items-center justify-center w-full px-3 bg-block mt-20 rounded-xl py-3" @submit.prevent="redirectToPageLoader">
        <!-- Раздел для ввода кода для генерации -->
        <div class="flex flex-col items-center justify-center w-full" v-if="modalPage === 0">
          <label class="label">Введите код для генерации</label>
          <div class="flex otp-container">
            <div class="flex items-center otp-input-wrapper" v-for="(index, i) in 6" :key="index">
              <input v-model="otp[i]" @input="focusNextInput(i)" ref="otpInput" type="text" inputmode="numeric" min="0" max="9" maxlength="1" pattern="[0-9]" class="otp-input" required>
            </div>
          </div>
        </div>

        <!-- Раздел для выбора размера изображения -->
        <div v-if="modalPage === 1">
          <label class="label">Какой размер сделаем картинке?</label>
          <div class="flex flex-col w-full gap-3 mt-20">
            <div v-for="(size, index) in imageSizes" :key="size" class="flex w-full h-14 items-center justify-between border-4 border-teal-700 px-2">
              <label class="radio-label cursor-pointer text-white">
                {{ size }}
              </label>
              <label class="toggler-wrapper style-3">
                <input type="radio" name="imageSize" v-model="selectedSize" :value="size" required>
                <div class="toggler-slider">
                  <div class="toggler-knob"></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Раздел для загрузки фотографии для генерации -->
        <div v-if="modalPage === 2" class="flex flex-col items-center w-full px-3">
          <label class="label">Загрузите вашу фотографию для генерации</label>
          <input type="file" @change="handleFileUpload" accept="image/*" class="file-input">
          <cropper
            class="cropper w-full px-3"
            :stencil-component="$options.components.CircleStencil"
            :src="img"
            :canvas="{
              height: 256,
              width: 256
            }"
            :stencil-props="{
              aspectRatio: 10/12,
              resizable: true,
            }"
            @change="change"
            ref="cropper"
          />
          <input type="submit" value="СГЕНЕРИРОВАТЬ" class="submit-btn w-full" :disabled="!isFormValid">

          <div v-if="showGeneratedImage">
            <div class="container">
              <img :src="generatedImageURL" alt="Generated Image">
              <a :href="generatedImageURL" download="generated_image.png">Скачать изображение</a>
            </div>
          </div>
        </div>

        <!-- Нижние кнопки для навигации между страницами модального окна -->
        <div class="flex justify-between mt-20 w-full">
          <div><q-btn class="text-white bg-aqua h-10 w-28" @click="modalPage = modalPage - 1" v-show="modalPage > 0">Отмена</q-btn></div>
          <q-btn class="text-white bg-aqua h-10 w-28" @click="modalPage = modalPage + 1" v-show="modalPage < 2 && isFormValid">Далее</q-btn>
        </div>
      </form>
  </q-layout>
</template>


<script>
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  data() {
    return {
      otp: ['', '', '', '', '', ''],
      imagePreview: '',
      imageNextPreview: '../assets/images/image1.png',
      imageSlider: 0,
      modalPage: 0,
      imageSizes: ['Набор из пинов 200', 'Набор из пинов 220', 'Набор из пинов 240', 'Набор из пинов 260', 'Набор из пинов 280'],
      selectedSize: null,
      selection: null,
      selecting: false,
      startX: 0,
      startY: 0,
      img: null,
      router: useRouter(),
      selectedFile: null,
      generatedImage: null,
      showGeneratedImage: false
    };
  },
  computed: {
    isOtpInputFilled() {
      return this.otp.every(input => input !== '');
  },
    generatedImageURL() {
    if (this.generatedImage) {
      return URL.createObjectURL(this.generatedImage);
    } else {
      return null;
    }
  },
    isFormValid() {
        if (this.modalPage === 0) {
          return this.isOtpInputFilled;
        } else if (this.modalPage === 1) {
          return this.selectedSize !== null;
        } else if (this.modalPage === 2) {
          return this.img !== null;
        }
        return false;
  }
  },
  components: {
    Cropper, CircleStencil
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
    redirectToPageLoader() {
      this.$router.push({name: 'Loading...'});
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
    nextModalPage() {
      this.modalPage += 1;  
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.img = reader.result;
          this.$refs.cropper.setImage(reader.result); // Установка изображения в cropper
        };
        this.selectedFile = file;
        reader.readAsDataURL(file);
      }
    },
    change(/*croppedImage*/) {
      // Здесь вы можете использовать обрезанное изображение
    },
    startSelection(event) {
      this.selecting = true;
      this.startX = event.offsetX;
      this.startY = event.offsetY;
    },
    moveSelection(event) {
      if (this.selecting) {
        const width = Math.abs(event.offsetX - this.startX);
        const height = Math.abs(event.offsetY - this.startY);
        const left = Math.min(event.offsetX, this.startX);
        const top = Math.min(event.offsetY, this.startY);
        this.selection = { width, height, left, top };
      }
    },
    endSelection() {
      this.selecting = false;
    },
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
  color: white;
}

.label {
  font-size: 24px;
  margin-bottom: 10px;
  margin-top:20px;
  color:white;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: none;
  border-radius: 5px;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  color: white;
  background-color:#ABD5D6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn-width {
  width: 25%;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  background-color:#ABD5D6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  transition: ease-in-out 0.2s;
  background-color:#62a9aa;
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
  width: 40px; /* Регулируйте ширину input'а */
  height: 40px; /* Регулируйте высоту input'а */
  font-size: 16px; /* Регулируйте размер шрифта */
  text-align: center; /* Выравнивание текста по центру */
  border: 1px solid #ccc; /* Стилизуйте границу */
  border-radius: 5px; /* Скругление углов */
}

a {
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
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


/* Пример стилей при фокусе */
.otp-input:focus {
  outline: none; /* Убираем стандартный контур при фокусе */
  border-color: #2e6468; /* Стилизуем цвет границы при фокусе */
  box-shadow: 0 0 5px rgba(10, 67, 71, 0.5); /* Добавляем тень при фокусе */
}

.file-input {
  border: none;
  margin-bottom:15px;
  position: relative;
}

.file-input input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.preview-image {
  width: 100%;
  height: auto;
}

.selection-box {
  position: absolute;
  border: 2px solid #2e6468;
  border-radius: 50%;
  pointer-events: none;
}

.toggler-wrapper.style-3 input[type="radio"]:checked+.toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
}

.toggler-wrapper.style-3 .toggler-knob {
  width: calc(25px + 6px);
  height: calc(25px + 6px);
  border-radius: 50%;
  left: -3px;
  top: -3px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 6px rgba(153, 153, 153, 0.75);
  box-shadow: 0 2px 6px rgba(153, 153, 153, 0.75);
}

.toggler-wrapper {
  display: block;
  width: 45px;
  height: 25px;
  cursor: pointer;
  position: relative;
}

.toggler-wrapper input[type="radio"] {
  display: none;
}

.toggler-wrapper input[type="radio"]:checked+.toggler-slider {
  background-color: rgb(26, 95, 104);
}

.toggler-wrapper .toggler-slider {
  background-color: #ccc;
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.cropper {
	height: 400px;
  width: 100%;
	background: #DDD;
}
</style>
