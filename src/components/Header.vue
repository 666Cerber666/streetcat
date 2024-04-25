<template>
  <div>
    <Disclosure as="nav" class="bg-aqua relative z-50 rounded-tl-lg" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" :class="{'border-green-aqua rounded-tl-lg' : open}">
        <div class="relative flex h-16 items-center">
          <div class="sm:items-stretch sm:justify-start flex items-center">
            <router-link to="/profile">
              <div class="item-center flex">
                <img v-if="!open" src="../assets/logo/logo.svg" alt="LOGO" class="h-8 w-auto scale-150">
                <p v-if="open" class="ml-3 text-3xl font-normal font-sans">Меню</p>
              </div>
            </router-link>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" @click="handleNavigation(item)" 
                  class="textcolor hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer font-sans" 
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                </a>
              </div>
            </div>
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden w-12 h-12 mt-2">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex bg-button items-center justify-center rounded-md p-2 text-gray-400 hover:text-white" :class="{'bg-button-menu': open }">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Открыть главное меню</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6 rounded-lg" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6 rounded-lg" aria-hidden="true" :class="{'textcolor': open }" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden fixed inset-0 right-0 overflow-y-auto z-40 bg-aqua mt-16 transition-all duration-300 ease-out transform"
                       :class="{'-translate-x-full': !open, 'translate-x-0 rounded-bl-lg border-green-aqua overflow-y-none': open }"
                       v-bind:class="{ 'overflow-hidden': open }">
        <div class="h-full flex flex-col">
          <div class="space-y-1 px-2 pb-3 pt-2 gap-10">
            <template v-for="(item, index) in navigation" :key="item.name">
              <a @click="handleNavigation(item)" 
                class="textcolor hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-2xl font-normal cursor-pointer font-sans"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              <!-- Проверяем, является ли текущий элемент последним в массиве -->
              <template v-if="index !== navigation.length - 1">
                <div class="mobile-menu-link mt-3"></div>
              </template>
            </template>
          </div>
          <div class="w-full flex flex-col items-center">
            <div class="flex items-center">
              <img src="/src/assets/icons/mobile.svg" alt="Mobile Icon"><p class="ml-5 font-bold text-2xl font-sans">+ 7 777 777 77 77</p>
            </div>
            <div class="bg-button mt-5">
              <button class="px-5 font-normal">ЗАКАЗАТЬ</button>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigation = [
  { name: 'Главная', current: true },
  { name: 'Товары', current: false },
  { name: 'Генерация', current: false },
  { name: 'Отзывы', current: false },
  { name: 'Контакты', current: false }
];

const handleNavigation = (item) => {
  emits('navigate', item) // передаем объект item вместо его имени
}

const logout = () => {
  localStorage.clear();
  router.push('/');
}
</script>

<style scoped>
.mobile-menu-link {
  border-bottom: 1px solid #254446;
}

.overflow-hidden {
  overflow-y: hidden;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.sm\\:hidden {
  display: none;
}

.sm\\:block {
  display: block;
}
</style>
