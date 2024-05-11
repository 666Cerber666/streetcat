<template>
    <div class="modal" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <span class="close" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </span>
        <form class="flex flex-col items-center justify-center w-full" @submit.prevent="redirectToPageLoader">
          <label class="label">ID картины</label>
          <input type="text" maxlength="6" class="input" inputmode="numeric" pattern="[0-9]*" v-model="textInput">
          <label v-if="textInput.length === 6" class="label">Загрузите картинку</label>
          <input type="file" v-if="textInput.length === 6" class="file-input" required>
          <input type="submit" v-if="textInput.length === 6" value="СГЕНЕРИРОВАТЬ" class="submit-btn">
        </form>
      </div>
    </div>
</template>

  <script>
  export default {
    name: 'Modal',
    data() {
      return {
        textInput: ''
      };
    },
    methods: {
    redirectToPageLoader() {
      // Перенаправление на страницу PageLoader
      this.$router.push('/Loading');
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

  label{
    color:black;
  }
  
  .submit-btn:hover {
    background-color:#2e6468;
  }
  </style>
  