<script setup></script>

<template>
  <div class="content-popup">
    <div class="content-grid">
      <div
        class="left-content w-full flex flex-col justify-center items-center"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center opacity-80 z-0 object object-cover"
        >
          <img
            decoding="async"
            class="w-full"
            src="../assets/weading/DSC_0450.jpg"
            alt=""
            loading="lazy"
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
            loading="lazy"
          />
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center z-50">
        <div
          class="right-content w-9/0 flex flex-col justify-center items-center z-50"
        >
          <p class="dateText">16.11.2024</p>
          <div class="content-names">
            <p class="textNameBr">Brahyan</p>
            <span class="w-full flex justify-center items-center text-[#9a8479]"
              >——————
              <p class="textY">&</p>
              ——————</span
            >
            <p class="textNameXm">Ximena</p>
          </div>
          <div class="content-phrs">
            <div class="w-full flex flex-col justify-center items-center">
              <img
                decoding="async"
                class="w-1/0"
                src="https://www.fixdate.io/modelo-invitacion/71/img/comilla-apertura.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <p class="text-phrs">
              Aunque uno pueda ser vencido, dos pueden resistir. !La cuerda de
              tres hilos no se rompe facilmente!
            </p>
            <div class="w-full flex flex-col justify-center items-center">
              <img
                decoding="async"
                class="w-1/0"
                src="https://www.fixdate.io/modelo-invitacion/71/img/comilla-cierre.svg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
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
  .content-grid {
    @apply w-full;
  }
  /* .parallax-content {
    @apply w-full;
    background-image: url('../assets/weading/DSC_0450.jpg');
  } */
  .separator {
    @apply w-full;
  }
  .separator-content {
    @apply -mt-[98px];
  }
  .dateText {
    font-family: 'Playfair Display', Serif;
    @apply w-auto border-[#716558] border-[1.6px] text-[#716558] text-[25px] py-[1px] px-[30px] mt-4;
  }
  .content-names {
    @apply w-full flex flex-col justify-center items-center;
  }
  .textNameBr {
    font-family: 'Playfair Display', Serif;
    color: transparent;
    background: linear-gradient(
      90deg,
      rgba(230, 198, 163, 1) 0%,
      rgba(223, 194, 162, 1) 35%,
      rgba(176, 134, 103, 1) 100%
    );
    -webkit-background-clip: text;
    @apply w-full flex flex-col justify-center items-center  text-[60px] font-bold mt-10;
  }
  .textNameXm {
    font-family: 'Playfair Display', Serif;
    color: transparent;
    background: linear-gradient(
      90deg,
      rgba(230, 198, 163, 1) 0%,
      rgba(223, 194, 162, 1) 35%,
      rgba(176, 134, 103, 1) 100%
    );
    -webkit-background-clip: text;
    @apply w-auto flex flex-col justify-center items-center text-[60px] font-bold;
  }
  .textY {
    font-family: 'Playfair Display', Serif;
    @apply w-auto text-[40px] rounded-full px-[14px] border border-[#D0888E] bg-[#D0888E] text-white mx-[6px];
  }
  .content-phrs {
    @apply w-full flex flex-col justify-center items-center py-10;
  }
  .text-phrs {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-full flex flex-col justify-center items-center text-[20px] text-[#716558] text-center py-5 font-light;
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
    /* @apply -mt-[80px]; */
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
    /* @apply -mt-[90px]; */
  }
}
</style>
