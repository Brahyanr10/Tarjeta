<script setup>
import assitancepopups from '../components/assistancePopUp.vue';
import { ref } from 'vue';

const checkAssitance = ref(false);
</script>
<template>
  <div class="content-popup">
    <div class="content-line-ceremony-md">
      <img
        decoding="async"
        class="w-full z-10"
        src="https://www.fixdate.io/modelo-invitacion/71/img/lineas01.svg"
        alt=""
        loading=""
      />
    </div>
    <div class="content-line-flower">
      <img
        decoding="async"
        class="w-full z-10"
        src="https://www.fixdate.io/modelo-invitacion/71/img/flores_Grupo04.png"
        alt=""
        loading=""
      />
    </div>

    <h1 class="text-confirmation">Confirma tu asistencia!</h1>
    <p class="text-subconfirmation"></p>
    <div class="content-grid">
      <div class="content-ceremony">
        <div class="content-title">
          <div class="subcontent-lazos">
            <img
              decoding="async"
              class="w-auto z-50"
              src="https://www.fixdate.io/modelo-invitacion/71/img/img_cinta01.svg"
              alt=""
              loading=""
            />
          </div>
          <p class="text-title">Ceremonia</p>
          <div class="subcontent-lazos">
            <img
              decoding="async"
              class="w-auto z-50"
              src="https://www.fixdate.io/modelo-invitacion/71/img/img_cinta02.svg"
              alt=""
              loading=""
            />
          </div>
        </div>
        <div class="content-gif-ceremony">
          <img
            decoding="async"
            class="w-auto z-50"
            src="../assets/Svg/ceremonywhite.svg"
            alt=""
            loading=""
          />
        </div>
      </div>

      <div class="content-celebration">
        <div class="content-title">
          <div class="subcontent-lazos">
            <img
              decoding="async"
              class="w-auto z-50"
              src="https://www.fixdate.io/modelo-invitacion/71/img/img_cinta01.svg"
              alt=""
              loading=""
            />
          </div>
          <p class="text-title">Celebración</p>
          <div class="subcontent-lazos">
            <img
              decoding="async"
              class="w-auto z-50"
              src="https://www.fixdate.io/modelo-invitacion/71/img/img_cinta02.svg"
              alt=""
              loading=""
            />
          </div>
        </div>
        <div class="content-gif-ceremony">
          <img
            decoding="async"
            class="w-auto z-50"
            src="../assets/Svg/celebrationwhite.svg"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
    <button class="button-confirmation" @click="checkAssitance = true">
      <p class="text-button">Confirmar asistencia</p>
    </button>
  </div>
  <div class="popupassistance" v-if="checkAssitance == true">
    <assitancepopups />
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center pt-10 pb-10;
  }
  .content-line-ceremony-md {
    @apply w-full flex z-20;
  }
  .content-line-flower {
    @apply w-[60%] -mt-16 z-50;
  }
  .text-confirmation {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center font-bold text-[25px] text-[#D0888E] pt-10;
  }
  .text-subconfirmation {
    font-family: 'Playfair Display', Serif;
    @apply w-9/0 flex flex-col justify-center items-center text-center text-[14px] text-[#9A8479];
  }
  .content-grid {
    background-color: #fef7f9;
    @apply w-full grid grid-cols-2 justify-center items-center pt-5;
  }
  .content-ceremony {
    @apply w-full flex flex-col justify-center items-center pt-0;
  }
  .content-gif-ceremony {
    @apply w-[80%] flex flex-col justify-center items-center cursor-pointer z-10;
  }
  .content-line-ceremony {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center -mb-[30%];
  }
  .content-title {
    @apply w-full flex flex-row justify-center items-center pt-5 pb-5;
  }
  .subcontent-lazos {
    @apply w-[8px] h-[50%] flex flex-col justify-center items-center;
  }
  .text-title {
    font-family: 'Playfair Display', Serif;
    @apply w-auto flex flex-col justify-center items-center font-bold text-white text-[17px] bg-[#9A8479] py-1 px-4 z-50;
  }
  .button-confirmation {
    @apply w-auto text-[18px] text-white bg-[#D0888E] rounded-full py-[10px] px-12 shadow-md cursor-pointer hover:bg-[#c47f85] mt-10;
  }
  .text-button {
    font-family: 'Quicksand', Sans-Serif;
  }
  .content-celebration {
    @apply w-full flex flex-col justify-center items-center pt-0;
  }
  .popupassistance {
    @apply w-full;
  }
}
@media (min-width: 375px) {
  .subcontent-lazos {
    @apply w-[9px];
  }
  .content-title {
    @apply py-5;
  }
  .text-title {
    @apply text-[19px];
  }
}
@media (min-width: 425px) {
  .subcontent-lazos {
    @apply w-[10px];
  }
  .text-title {
    @apply text-[22px];
  }
  .text-confirmation {
    @apply text-[35px];
  }
  .text-subconfirmation {
    @apply text-[16px];
  }
}

@media (min-width: 768px) {
  .content-popup {
    @apply pt-32;
  }
  .content-grid {
    @apply w-full grid grid-cols-2;
  }
  .content-line-ceremony {
    @apply hidden;
  }
  .content-ceremony {
    @apply pt-0;
  }
  .content-celebration {
    @apply pt-0;
  }
  .content-line-ceremony-md {
    @apply w-full flex flex-col justify-center items-center -mb-[175px];
  }
}
</style>
