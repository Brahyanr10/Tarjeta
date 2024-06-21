<script setup>
const props = defineProps({
  setOpen: {
    type: Function,
    required: true,
  },
});
const pathname = window.location;
const search = pathname.search.split('?');
const id = search[1];
</script>

<template>
  <div class="content-popup">
    <div class="w-full flex flex-col justify-center items-center">
      <img
        decoding="async"
        class="image"
        src="https://www.fixdate.io/modelo-invitacion/71/img/adorno-modal-musica.png"
        alt=""
        loading="lazy"
      />
    </div>
    <h2 class="text-wellcome">Bienvenidos a la invitación de</h2>
    <h1 class="text-names">Brahyan & Ximena</h1>
    <button class="button-in" v-if="id" @click="setOpen(false)">
      Ingresar
    </button>
    <p v-else class="text-wellcome">Por favor ingresa con el link enviado</p>
  </div>
</template>

<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full min-h-screen flex flex-col justify-center items-center;
  }
  .image {
    @apply w-8/0;
  }
  .text-wellcome {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-9/0 flex flex-col justify-center items-center text-[#9a8479] text-[100%] leading-[30px];
  }
  .text-names {
    font-family: 'Playfair Display', Serif;
    @apply w-9/0 flex flex-col justify-center items-center text-[#D0888E] text-[28px] leading-[70px] mb-[20px] font-bold;
  }
  .button-in {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-auto py-[2%] px-[10%] rounded-full bg-[#D0888E] text-white shadow-md cursor-pointer hover:bg-[#c47f85];
  }
  .separator {
    @apply w-full;
  }
}
@media (min-width: 325px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center;
  }
  .image {
    @apply w-8/0;
  }
  .text-wellcome {
    @apply text-[100%] pt-5;
  }
  .text-names {
    @apply text-[30px];
  }
  .button-in {
    @apply py-[3%] px-[10%];
  }
  .separator {
    @apply w-full pt-[40px];
  }
}
@media (min-width: 425px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-full flex flex-col justify-center items-center;
  }
  .image {
    @apply w-8/0;
  }
  .text-wellcome {
    @apply text-[20px] leading-[30px];
  }
  .text-names {
    @apply text-[40px] leading-[70px] mb-[20px] font-bold;
  }
  .button-in {
    @apply py-2 px-10;
  }
  .separator {
    @apply w-full;
  }
}
@media (min-width: 768px) {
  .image {
    @apply w-[450px];
  }
}
@media (min-width: 1200px) {
  .image {
    @apply w-[600px];
  }
  .text-wellcome {
    @apply text-[20px] leading-[30px];
  }
  .text-names {
    @apply text-[40px] leading-[70px] mb-[20px];
  }
  .button-in {
    @apply py-2 px-10;
  }
}
</style>
