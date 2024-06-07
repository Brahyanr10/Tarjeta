<script setup></script>
<template>
  <div class="content-popup">
    <div class="content-grid">
      <div class="content-ceremony">
        <div class="content-line-ceremony">
          <img
            decoding="async"
            class="w-full z-10"
            src="https://www.fixdate.io/modelo-invitacion/71/img/lineas01.svg"
            alt=""
            loading=""
          />
        </div>
        <div class="content-gif-ceremony">
          <img
            decoding="async"
            class="w-full z-50"
            src="../assets/Svg/ceremony.svg"
            alt=""
            loading=""
          />
        </div>

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
        <div class="content-dates">
          <h3 class="text-date">DÍA</h3>
          <p class="subtext-date">
            Sábado 16 de Noviembre <br />
            Hora - 4:00 p.m.
          </p>
        </div>
        <div class="content-dates">
          <h3 class="text-date">LUGAR</h3>
          <p class="subtext-date pb-8">
            Parroquia<br />Nuestra Señora de Lourdes
          </p>

          <a
            class="button-dates"
            target="_blank"
            href="https://maps.app.goo.gl/Ah64FzGoQ3FA3soR6"
          >
            <p class="text-button">Como llegar</p>
          </a>
        </div>
      </div>

      <div class="content-celebration"></div>
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
    background-color: #fef7f9;
    @apply w-full grid grid-cols-1 justify-center items-center;
  }
  .content-ceremony {
    @apply w-full flex flex-col justify-center items-center pt-20;
  }
  .content-gif-ceremony {
    @apply w-[50%] flex flex-col justify-center items-center;
  }
  .content-line-ceremony {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center -mb-[30%];
  }
  .content-title {
    @apply w-full flex flex-row justify-center items-center py-10;
  }
  .subcontent-lazos {
    @apply w-[13px] h-[50%] flex flex-col justify-center items-center;
  }
  .text-title {
    font-family: 'Playfair Display', Serif;
    @apply w-auto flex flex-col justify-center items-center font-bold text-white text-[30px] bg-[#9A8479] py-1 px-8 z-50;
  }
  .content-dates {
    @apply w-full flex flex-col justify-center items-center pb-10;
  }
  .text-date {
    font-family: 'Playfair Display', Serif;
    @apply w-auto text-[25px] text-[#9A8479] font-bold pb-5;
  }
  .subtext-date {
    font-family: 'Quicksand', Sans-Serif;
    @apply w-auto flex flex-col text-[18px] text-[#716558] text-center;
  }
  .button-dates {
    @apply w-auto text-[18px] text-white bg-[#D0888E] rounded-full py-[10px] px-12 shadow-md cursor-pointer hover:bg-[#c47f85];
  }
  .text-button {
    font-family: 'Quicksand', Sans-Serif;
  }
}
@media (min-width: 375px) {
  .subcontent-lazos {
    @apply w-[13px];
  }
}
@media (min-width: 425px) {
  .subcontent-lazos {
    @apply w-[13px];
  }
  .text-title {
    @apply text-[35px];
  }
}
@media (min-width: 768px) {
}
@media (min-width: 768px) {
  .content-grid {
    @apply w-full grid grid-cols-2;
  }
}
</style>
