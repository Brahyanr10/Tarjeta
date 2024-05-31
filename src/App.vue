<script setup>
import initModal from './components/initModal.vue';
import card from './components/card.vue';
import timeModal from './components/timeModal.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>

<template>
  <!-- <initModal /> -->
  <div class="content-main">
    <card />
    <timeModal />
    <initModal />
  </div>
</template>

<style scoped>
.content-main {
  background-color: #fef7f9;
  @apply w-full flex flex-col justify-center items-center;
}
</style>
