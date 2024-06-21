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
const confirm1 = ref(false);
console.log(confirm1);
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
    <form class="form-content">
      <div class="content-form">
        <div class="content-check">
          <p class="text-subtitle">Asistentes</p>
          <div class="content-confirm">
            <p class="text-subtitle-check">Sí</p>
            <p class="text-subtitle-check">No</p>
          </div>
        </div>
        <div class="content-family-info">
          <div class="content-check" v-if="dataFamily.name1">
            <p class="text-radio-button">
              {{ dataFamily.name1 }}
            </p>
            <div class="content-radio">
              <div class="subcontent-radio-button">
                <input
                  @click="confirm1 = true"
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio1"
                  class="radio-button-confirm"
                />
              </div>
              <div class="subcontent-radio-button">
                <input
                  @click="confirm1 = false"
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio1"
                  class="radio-button-noconfirm"
                />
              </div>
            </div>
          </div>
          <div class="content-check" v-if="dataFamily.name2">
            <p class="text-radio-button">
              {{ dataFamily.name2 }}
            </p>
            <div class="content-radio">
              <div class="subcontent-radio-button">
                <input
                  id="default-radio-3"
                  type="radio"
                  value=""
                  name="default-radio2"
                  class="radio-button-confirm"
                />
              </div>
              <div class="subcontent-radio-button">
                <input
                  checked
                  id="default-radio-4"
                  type="radio"
                  value=""
                  name="default-radio2"
                  class="radio-button-noconfirm"
                />
              </div>
            </div>
          </div>
          <div class="content-check" v-if="dataFamily.hijo1">
            <p class="text-radio-button">
              {{ dataFamily.hijo1 }}
            </p>
            <div class="content-radio">
              <div class="subcontent-radio-button">
                <input
                  id="default-radio-5"
                  type="radio"
                  value=""
                  name="default-radio3"
                  class="radio-button-confirm"
                />
              </div>
              <div class="subcontent-radio-button">
                <input
                  checked
                  id="default-radio-6"
                  type="radio"
                  value=""
                  name="default-radio3"
                  class="radio-button-noconfirm"
                />
              </div>
            </div>
          </div>
          <div class="content-check" v-if="dataFamily.hijo2">
            <p class="text-radio-button">
              {{ dataFamily.hijo2 }}
            </p>
            <div class="content-radio">
              <div class="subcontent-radio-button">
                <input
                  id="default-radio-7"
                  type="radio"
                  value=""
                  name="default-radio4"
                  class="radio-button-confirm"
                />
              </div>
              <div class="subcontent-radio-button">
                <input
                  checked
                  id="default-radio-8"
                  type="radio"
                  value=""
                  name="default-radio4"
                  class="radio-button-noconfirm"
                />
              </div>
            </div>
          </div>
          <div class="content-check" v-if="dataFamily.hijo3">
            <p class="text-radio-button">
              {{ dataFamily.hijo3 }}
            </p>
            <div class="content-radio">
              <div class="subcontent-radio-button">
                <input
                  id="default-radio-9"
                  type="radio"
                  value=""
                  name="default-radio5"
                  class="radio-button-confirm"
                />
              </div>
              <div class="subcontent-radio-button">
                <input
                  checked
                  id="default-radio-10"
                  type="radio"
                  value=""
                  name="default-radio5"
                  class="radio-button-noconfirm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="button-submit">Confirmar</button>
    </form>
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
