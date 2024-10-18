<script setup>
import { ref } from 'vue';
const checkInfo = ref(false);
const checkMore = ref(false);
</script>
<template>
  <div class="content-separator">
    <img
      decoding="async"
      class="w-full z-10"
      src="../assets/svgs/curva02.svg"
      alt=""
      loading="lazy"
    />
  </div>
  <div class="content-popup">
    <h1 class="text-confirmation">Fiesta</h1>
    <p class="text-subconfirmation">
      Aquí algunos detalles para tener en cuenta
    </p>
    <div class="content-grid">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="content-left" v-if="checkMore == false">
          <p class="text-card">CÓDIGO DE VESTIMENTA</p>
          <img
            decoding="async"
            class="corbatin"
            src="../assets/Svg/corbatin.svg"
            alt=""
            loading="lazy"
          />

          <button class="button-confirmation" @click="checkMore = true">
            <p class="text-button">Ver más</p>
          </button>
        </div>
        <div class="content-left" v-if="checkMore == true">
          <p class="text-card">CÓDIGO DE VESTIMENTA</p>
          <div class="content-reserve">
            <div class="content-dressCoded">
              <div class="modal-info">
                <p class="text-modal">Hombres</p>
                <p class="text-submodal">(Traje Formal)</p>
                <img
                  decoding="async"
                  class="traje-img"
                  src="../assets/svgs/traje.png"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div class="modal-info">
                <p class="text-modal">Mujeres</p>
                <p class="text-submodal">(Vestido Elegante)</p>
                <img
                  decoding="async"
                  class="traje-img"
                  src="../assets/svgs/vestido.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div class="content-reserve-text">
              <p class="text-submodal-color">Colores Reservados</p>
              <p class="text-sub-submodal">Blanco para la novia</p>
              <p class="text-sub-submodal">Azul para el novio</p>
            </div>
          </div>

          <button class="button-confirmation" @click="checkMore = false">
            <p class="text-button">Volver</p>
          </button>
        </div>
      </div>
      <div class="content-hiden"></div>
      <div class="content-right">
        <p class="text-card">TIPS Y NOTAS</p>
        <img
          decoding="async"
          class="note"
          src="../assets/Svg/note.svg"
          alt=""
          loading="lazy"
        />
        <button class="button-confirmation" @click="checkInfo = true">
          <p class="text-button">+ Info</p>
        </button>
        <div class="popupassistance" v-if="checkInfo == true">
          <div class="content-close">
            <button class="closePopUp" @click="checkInfo = false">X</button>
          </div>
          <assistancePopups :data-family="dataFamily" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center pt-5 pb-10;
  }
  .content-separator {
    background-color: #fef7f9;
    @apply w-full flex z-20 pt-10;
  }
  .text-confirmation {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center font-bold text-[45px] text-[#D0888E] pt-5 pb-5;
  }
  .text-subconfirmation {
    font-family: 'Playfair Display', Serif;
    @apply w-9/0 flex flex-col justify-center items-center text-center text-[16px] text-[#9A8479];
  }
  .content-grid {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center py-5;
  }
  .content-grid {
    @apply w-9/0 flex flex-col justify-center items-center;
  }
  .text-card {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#716558] text-[20px] font-bold;
  }
  .content-left {
    box-shadow: 0px 0px 15px 0px #fdced8;
    @apply w-full flex flex-col justify-center items-center py-16 rounded-[20px] bg-[#FEF7F9];
  }
  .corbatin {
    @apply w-3/0 py-6;
  }
  .button-confirmation {
    @apply w-7/0 text-[18px] text-white bg-[#D0888E] rounded-full py-[10px] px-12 shadow-md cursor-pointer hover:bg-[#c47f85];
  }
  .text-button {
    font-family: 'Quicksand', Sans-Serif;
  }
  .content-hiden {
    @apply h-10;
  }
  .content-dressCoded {
    @apply w-full grid grid-cols-2 justify-items-center items-center pt-10 pb-5;
  }
  .modal-info {
    @apply w-full flex flex-col justify-center items-center;
  }
  .traje-img {
    @apply w-5/0 py-3;
  }
  .text-modal {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#716558] text-[22px] font-medium;
  }
  .content-reserve {
    @apply w-full flex flex-col justify-center items-center pb-5;
  }
  .text-submodal {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#716558] text-[15px] font-medium;
  }
  .text-submodal-color {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#716558] text-[15px] font-bold;
  }
  .text-sub-submodal {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#716558] text-[15px] font-medium;
  }
  .content-reserve-text {
    @apply w-full flex flex-col justify-center items-center pb-5;
  }
  .content-right {
    box-shadow: 0px 0px 15px 0px #fdced8;
    @apply w-full p-10 grid grid-rows-3 justify-items-center items-center rounded-[20px] bg-[#FEF7F9];
  }
}
@media (min-width: 375px) {
}
@media (min-width: 425px) {
  .text-card {
    @apply text-[22px];
  }
  .text-submodal {
    @apply text-[16px];
  }
  .text-submodal-color {
    @apply text-[16px];
  }
  .text-sub-submodal {
    @apply text-[16px];
  }
}
@media (min-width: 768px) {
  .text-card {
    @apply text-[18px];
  }

  .note {
    @apply w-[25%];
  }
  .content-hiden {
    @apply w-80;
  }
}
@media (min-width: 1024px) {
  .note {
    @apply w-[auto];
  }
  .text-card {
    @apply text-[22px];
  }
  .text-confirmation {
    @apply text-[50px];
  }
  .text-subconfirmation {
    @apply text-[20px];
  }
  .content-grid {
    @apply w-9/0 flex flex-row justify-center items-center py-14;
  }
}
</style>
