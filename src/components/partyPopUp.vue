<script setup>
// import Family from '../assets/Assistants/Assistants.js';
import { ref } from 'vue';

const props = defineProps({
  // ceremony: false,
  // celebration: false,
  checkAssitances: false,
  dataFamily: {
    type: Object,
    required: true,
  },
});

// urlForm = props.dataFamily.url;
</script>
<template>
  <div class="content-popupAssis">
    <div class="content-gif-ceremony">
      <img
        decoding="async"
        class="flowers"
        src="../assets/svgs/flores_Grupo04.webp"
        alt=""
        loading="lazy"
      />
    </div>
    <div class="content-gif-ceremony">
      <img
        decoding="async"
        class="svg-celebration"
        src="../assets/Svg/celebration.svg"
        alt=""
        loading="lazy"
      />
    </div>
    <p class="text-title">¿Asistes a la celebración?</p>
    <iframe
      class="iframeForm"
      :src="dataFamily.url"
      width="90%"
      height="550"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Cargando…</iframe
    >
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popupAssis {
    @apply w-full min-h-full flex flex-col justify-center items-center bg-[#FEF7F9] shadow-md rounded-[40px] border z-[9999];
  }
  .content-close {
    @apply w-9/5 absolute flex flex-col justify-center items-end -mt-[50px];
  }
  .closePopUp {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-auto flex flex-col justify-center items-center px-[10px] rounded-[50%] bg-[#D0888E] text-white z-50 text-[24px] font-medium;
  }
  .content-gif-ceremony {
    @apply w-full flex flex-col justify-center items-center -mt-[30px];
  }
  .flowers {
    @apply w-7/0 z-10 absolute;
  }
  .svg-celebration {
    @apply w-3/7 z-30 -mt-[5px];
  }
  .text-title {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[20px] text-[#D0888E] font-medium;
  }
}
@media (min-width: 375px) {
  .text-title {
    @apply text-[22px];
  }
  .text-radio-button {
    @apply text-[18px];
  }
}
@media (min-width: 425px) {
  .content-gif-ceremony {
    @apply w-[330px] flex flex-col justify-center items-center -mt-[30px];
  }
  .flowers {
    @apply w-[330px] z-10 absolute;
  }
}
@media (min-width: 768px) {
  .content-popupAssis {
    @apply w-[768px];
  }
  .content-gif-ceremony {
    @apply w-[370px];
  }
  .flowers {
    @apply w-[370px];
  }
}
@media (min-width: 1024px) {
  .content-popupAssis {
    @apply w-[1024px];
  }

  .text-title {
    @apply text-[30px];
  }
}
</style>
