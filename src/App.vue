<script setup>
import initModal from './components/initModal.vue';
import card from './components/card.vue';
import timeModal from './components/timeModal.vue';
import info from './components/info.vue';
import assistance from './components/assistance.vue';
import { ref } from 'vue';

const isView = ref(true);

const pathname = window.location;
const search = pathname.search.split('?');
const id = search[1];
console.log('id: ', id);

const changeModalState = (value) => {
  isView.value = value;
};
</script>

<template>
  <div class="content-main">
    <initModal v-if="isView" :setOpen="changeModalState" />
    <div v-else class="subcontent-main">
      <card class="z-10" />
      <timeModal class="z-50 time" />
      <info />
      <assistance />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap');
.content-main {
  /* background-color: #fef7f9; */
  @apply w-full flex flex-col justify-center items-center;
}
.subcontent-main {
  @apply w-full flex flex-col justify-center items-center;
}
@media (min-width: 480px) {
  .subcontent-main {
    @apply w-[480px];
  }
}
@media (min-width: 768px) {
  .subcontent-main {
    @apply w-[768px];
  }
}
@media (min-width: 1024px) {
  .subcontent-main {
    @apply w-[1024px];
  }
}
</style>
