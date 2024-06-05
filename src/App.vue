<script setup>
import initModal from './components/initModal.vue';
import card from './components/card.vue';
import timeModal from './components/timeModal.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { ref } from 'vue';

const isView = ref(true);

const changeModalState = (value) => {
  isView.value = value;
};
</script>

<template>
  <div class="content-main">
    <initModal v-if="isView" :setOpen="changeModalState" />
    <div v-else class="content-main">
      <card />
      <timeModal />
    </div>
  </div>
</template>

<style scoped>
.content-main {
  background-color: #fef7f9;
  @apply w-full flex flex-col justify-center items-center;
}
</style>
