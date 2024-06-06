<script setup></script>
<template>
  <div class="content-popup">
    <div class="content-grid">
      <!-- Content Left -->
      <div class="content-left">
        <!-- Background img -->
        <div class="content-image-bg-md"></div>
        <!-- Image mobile -->
        <div class="content-image-mobile">
          <img
            decoding="async"
            class="w-full z-10"
            src="../assets/weading/DSC_0450.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="content-separator-mobile">
          <img
            decoding="async"
            class="w-full z-50"
            src="https://www.fixdate.io/modelo-invitacion/71/img/curva_mobile.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <!-- Separator -->
      <div class="content-separator-vert">
        <img
          decoding="async"
          class="w-full z-50"
          src="https://www.fixdate.io/modelo-invitacion/71/img/curva_portada_VERTICAL.svg"
          alt=""
          loading="lazy"
        />
      </div>
      <!-- Content Right -->
      <div class="content-right">
        <div class="content-image-top-md">
          <img
            decoding="async"
            class="w-full"
            src="../assets/Flowers/Flower_1.png"
            alt=""
            loading="lazy"
          />
        </div>
        <p class="dateText">16.11.2024</p>
        <div class="content-names">
          <h1 class="textNameBr">Brahyan</h1>
          <span class="w-full flex justify-center items-center text-[#9a8479]"
            >——————
            <p class="textY">&</p>
            ——————</span
          >
          <h1 class="textNameXm">Ximena</h1>
        </div>
        <div class="content-message">
          <div class="w-full flex flex-col justify-center items-center">
            <img
              decoding="async"
              class="w-1/0"
              src="https://www.fixdate.io/modelo-invitacion/71/img/comilla-apertura.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <p class="text-message">
            Hoy empieza nuestra vida con la bendición de Dios y la Virgen.
            Escribiremos un libro lleno de historias y aventuras donde seremos
            una sola carne, un solo ser.
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
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-grid {
    @apply w-full  grid grid-cols-1 border border-black overflow-hidden;
  }
  /* Left Content */
  .content-left {
    @apply w-full flex flex-col justify-start items-start;
  }
  .content-image-bg-md {
    @apply hidden;
  }
  .content-image-mobile {
    @apply w-full flex flex-col opacity-80 -mb-[82px] z-10;
  }
  .content-separator-mobile {
    @apply w-full flex flex-col h-auto opacity-100 z-50;
  }
  /* Separator Vert */
  .content-separator-vert {
    @apply hidden;
  }
  /* Right Content */
  .content-right {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-start items-center z-50;
  }

  .content-image-top-md {
    @apply hidden;
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
  .textY {
    font-family: 'Playfair Display', Serif;
    @apply w-auto text-[40px] rounded-full px-[14px] border border-[#D0888E] bg-[#D0888E] text-white mx-[6px];
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
  .content-message {
    @apply w-9/0 flex flex-col justify-center items-center py-5;
  }
  .text-message {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-full flex flex-col justify-center items-center text-[20px] text-[#716558] text-center py-5 font-light;
  }
}
@media (min-width: 400px) {
  .content-image-mobile {
    @apply -mb-[110px];
  }
}
@media (min-width: 480px) {
  .content-image-mobile {
    @apply -mb-[105px];
  }
}
@media (min-width: 768px) {
  .content-grid {
    @apply h-auto flex flex-row;
  }
  .content-image-mobile {
    @apply hidden;
  }
  .content-separator-mobile {
    @apply hidden;
  }
  .content-image-bg-md {
    @apply w-[230%] h-full flex justify-start items-start bg-cover opacity-90 overflow-y-hidden;
    background-image: url('../assets/weading/prueba.jpg');
  }
  .content-separator-vert {
    @apply w-[40%] h-auto flex justify-center items-center z-0;
  }
  .content-image-top-md {
    @apply w-7/0 flex flex-col justify-center items-center pb-10 -mt-[25px];
  }
  .text-message {
    @apply text-[18px];
  }
}
@media (min-width: 1024px) {
  .content-image-bg-md {
    @apply w-[230%] h-full flex justify-start items-start bg-cover opacity-90 overflow-y-hidden;
    background-image: url('../assets/weading/prueba.jpg');
  }
  .textNameBr {
    @apply text-[70px];
  }
  .textNameXm {
    @apply text-[70px];
  }
}
</style>
