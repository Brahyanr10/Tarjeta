<script setup>
import initModal from './components/initModal.vue';
import card from './components/card.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>

<template>
  <!-- <initModal class="w-full" /> -->
  <card class="w-full" />
  <initModal class="w-full" />
</template>

<style></style>
