<template>
    <q-layout class="wrapper">
        <div class="flex w-full flex-col items-center w-full mt-3">
            <h1 class="text-black">Ваш результат:</h1>
            <div class="done_image">

            </div>
            <div class="flex gap-5">
                <q-btn class="bg-block">Сохранить картинку</q-btn>
                <q-btn class="bg-block">Скачать инструкцию</q-btn>
                <q-btn class="bg-block" @click="goToPageInstructions">Приступить к сборке</q-btn>
            </div>
        </div>
    </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    methods: {
        goToPageInstructions() {
        this.$router.push('/PageInstructions');
        },
    }
}
</script>
