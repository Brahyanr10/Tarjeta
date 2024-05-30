<script setup>
import WellcomeModal from './components/WellcomeModal.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>

<template class="template">
  <WellcomeModal></WellcomeModal>
</template>

<style scoped>
.template {
  @apply w-full h-full border border-y-black;
  background-color: #fef7f9;
}
</style>
