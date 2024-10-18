<script setup></script>
<template>
  <div class="content-separator">
    <img
      decoding="async"
      class="w-full z-50"
      src="../assets/svgs/curva01.svg"
      alt=""
      loading="lazy"
    />
  </div>
  <div class="content-line">
    <img
      decoding="async"
      class="w-full z-30"
      src="../assets/svgs/lineas01.svg"
      alt=""
      loading="lazy"
    />
  </div>
  <div class="content-names">
    <h1 class="textNameBr">Brahyan</h1>
    <span class="w-full flex justify-center items-center text-[#9a8479]">
      <p class="textY">&</p>
    </span>
    <h1 class="textNameXm">Ximena</h1>
  </div>
  <div class="content-Footer">
    <p class="text-button">Hecho con ❤</p>
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-separator {
    background-color: #fef7f9;
    @apply w-full flex z-20 pt-10;
  }
  .content-line {
    @apply w-full flex flex-col justify-center items-center -mt-[60px] bg-[#fef7f9];
  }
  .content-names {
    @apply w-full flex flex-col justify-center items-center bg-[#fef7f9] pb-20 pt-8;
  }
  .textNameBr {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center  text-[60px] font-bold mt-10 text-[#D0888E];
  }
  .textY {
    font-family: 'Playfair Display', Serif;
    @apply w-auto text-[40px] rounded-full px-[14px] border border-[#FDCED8] bg-[#FDCED8] text-white mx-[6px];
  }
  .textNameXm {
    font-family: 'Playfair Display', Serif;
    @apply w-auto flex flex-col justify-center items-center text-[60px] font-bold text-[#D0888E];
  }
  .text-footer {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#D0888E] text-[50px];
  }
  .content-Footer {
    @apply w-full flex flex-col justify-center items-center bg-[#ffc4d0] py-1;
  }
  .text-button {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-full flex flex-col justify-center items-center text-[white] font-medium;
  }
}
@media (min-width: 768px) {
  .content-line {
    @apply -mt-[120px];
  }
}
@media (min-width: 1024px) {
  .content-line {
    @apply -mt-[160px];
  }
}
</style>
