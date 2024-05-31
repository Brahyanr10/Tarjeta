<script setup></script>

<template>
  <div class="content-popup">
    <div class="content-grid">
      <div
        class="left-content w-full flex flex-col justify-center items-center"
      >
        <div
          class="parallax-content w-full flex flex-col justify-center items-center opacity-80 z-0"
        >
          <img
            decoding="async"
            class="w-full z-0"
            src="../assets/weading/DSC_0450.jpg"
            alt=""
            loading=""
          />
        </div>
        <div
          class="w-full flex flex-col justify-center items-center separator-content z-50"
        >
          <img
            decoding="async"
            class="separator z-50"
            src="https://www.fixdate.io/modelo-invitacion/71/img/curva_mobile.png"
            alt=""
            loading=""
          />
        </div>
      </div>
      <div
        class="right-content w-full flex flex-col justify-center items-center"
      >
        <p class="dateText">09.11.2024</p>
        <div class="content-names">
          <p class="textNameBr">Brahyan</p>
          <span class="w-full flex justify-center items-center"
            >——————
            <p class="text&">&</p>
            ——————</span
          >
          <p class="textNameXm">Ximena</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center;
  }
  .parallax-content {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    @apply h-full;
  }
  .separator {
    @apply w-full;
  }
  .separator-content {
    @apply -mt-[68px];
  }
  .dateText {
    font-family: 'Playfair Display', Serif;
    @apply w-auto border border-[#716558] border-[1.6px] text-[#716558] text-[25px] py-[1px] px-[30px] mt-4;
  }
  .content-names {
    @apply w-full flex flex-col justify-center items-center;
  }
  .textNameBr {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#E6C6A3] text-[60px] font-bold mt-10;
  }
  .textNameXm {
    font-family: 'Playfair Display', Serif;
    @apply w-full flex flex-col justify-center items-center text-[#E6C6A3] text-[60px] font-bold;
  }
}
@media (min-width: 320px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center;
  }
  .separator {
    @apply w-full;
  }
  .separator-content {
    @apply -mt-[80px];
  }
}
@media (min-width: 425px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center;
  }
  .separator {
    @apply w-full;
  }
  .separator-content {
    @apply -mt-[90px];
  }
}
</style>
