<script setup>
defineProps({
  ceremony: false,
  celebration: false,
});
</script>
<template>
  <div class="content-popup">
    <div class="content-gif-ceremony">
      <img
        decoding="async"
        class="flowers"
        src="https://www.fixdate.io/modelo-invitacion/71/img/flores_Grupo04.png"
        alt=""
        loading=""
      />
    </div>
    <div class="content-gif-ceremony">
      <img
        decoding="async"
        class="svg-celebration"
        src="../assets/Svg/celebration.svg"
        alt=""
        loading=""
      />
    </div>
    <div class="content-radio-form">
      <p class="text-title">¡Confirma tu Asistencia!</p>
      <div
        class="w-full flex flex-col justify-center items-center"
        v-if="ceremony == true || celebration == true"
      >
        <p class="text-title-selection">Escogiste</p>
        <div class="content-selection">
          <p class="text-selection" v-if="ceremony == true">Ceremonia</p>
          <p class="text-selection" v-if="celebration == true">Celebración</p>
        </div>
      </div>
      <div class="content-radio">
        <div class="subcontent-radio-button">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="radio-button-confirm"
          />
          <label for="default-radio-1" class="text-radio-button"
            >¡Si, Confirmo!</label
          >
        </div>
        <div class="subcontent-radio-button">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="radio-button-noconfirm"
          />
          <label for="default-radio-2" class="text-radio-button"
            >No, Confirmo</label
          >
        </div>
      </div>
    </div>

    <form class="form-content">
      <div class="content-form">
        <input
          type="text"
          id="first_name"
          class="text-input-form"
          placeholder="Ingresa tu nombre"
          required
        />

        <button type="submit" class="button-submit">Confirmar</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    @apply w-full flex flex-col justify-center items-center bg-[#FEF7F9] shadow-md rounded-[40px] border;
  }
  .content-gif-ceremony {
    @apply w-full flex flex-col justify-center items-center -mt-[20px];
  }
  .flowers {
    @apply w-7/0 z-10 absolute;
  }
  .svg-celebration {
    @apply w-3/7 z-30 -mt-[10px];
  }
  .content-radio-form {
    @apply w-full flex flex-col justify-center items-center pt-2;
  }
  .content-selection {
    @apply w-full flex flex-row justify-center items-center pb-10;
  }
  .text-title {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[20px] text-[#D0888E] font-medium pb-10;
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
    @apply w-[12px] h-[12px] text-[#D0888E] focus:ring-[#D0888E];
  }
  .radio-button-noconfirm {
    @apply w-[12px] h-[12px] text-[#D0888E] focus:ring-[#D0888E];
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
