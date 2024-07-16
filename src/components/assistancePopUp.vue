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
  <div class="content-popup">
    <div class="content-gif-ceremony">
      <img
        decoding="async"
        class="flowers"
        src="https://www.fixdate.io/modelo-invitacion/71/img/flores_Grupo04.png"
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
      :src="dataFamily.url"
      width="90%"
      height="600"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Cargando…</iframe
    >
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    @apply w-full  min-h-full flex flex-col justify-center items-center bg-[#FEF7F9] shadow-md rounded-[40px] border z-[9999];
  }
  .content-close {
    @apply w-9/5  absolute flex flex-col justify-center items-end -mt-[50px];
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
  .content-radio-form {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-selection {
    @apply w-full flex flex-row justify-center items-center pb-10;
  }
  .text-title {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[20px] text-[#D0888E] font-medium;
  }
  .text-title-selection {
    font-family: 'Playfair Display', Serif;
    @apply w-full font-medium flex flex-col justify-center items-center text-[20px] text-[#9A8479];
  }
  .text-selection {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[18px] text-[#D0888E];
  }
  .content-radio {
    @apply w-full grid grid-cols-2 justify-center items-center;
  }
  .subcontent-radio-button {
    @apply w-full flex flex-row justify-center items-center;
  }
  .radio-button-confirm {
    @apply w-[16px] h-[16px] text-[#D0888E] focus:ring-[#D0888E];
  }
  .radio-button-noconfirm {
    @apply w-[16px] h-[16px] text-[#D0888E] focus:ring-[#D0888E];
  }
  .text-radio-button {
    font-family: 'Quicksand', Sans-Serif;
    @apply ms-2 text-sm font-semibold text-[#9A8479] text-[14px];
  }
  .form-content {
    @apply w-9/0 flex flex-col justify-center items-center pt-10;
  }
  .content-form {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-family-info {
    @apply w-full flex flex-col justify-center items-start;
  }
  .content-check {
    @apply w-full grid grid-cols-2 justify-center items-center pb-1;
  }
  .text-subtitle {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-start pb-3 text-[18px] text-[#D0888E] font-medium;
  }
  .text-subtitle-check {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[18px] text-[#D0888E] font-medium;
  }
  .content-confirm {
    @apply w-full flex flex-row justify-center items-center;
  }
  .text-input-form {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-full border-transparent border-b-[#FDCED8] bg-transparent text-center outline-none;
  }
  .button-submit {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-auto text-[18px] text-white bg-[#D0888E] rounded-full py-[10px] px-12 shadow-md cursor-pointer hover:bg-[#c47f85] my-10;
  }
}
@media (min-width: 375px) {
  .text-title {
    @apply text-[22px];
  }
  .text-radio-button {
    @apply text-[18px];
  }
  .text-input-form {
    @apply w-full;
  }
  .button-submit {
    @apply text-[18px];
  }
}
</style>
