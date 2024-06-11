<script setup></script>
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
        <div class="content-information">
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
              href="https://maps.app.goo.gl/GABukPdXuCTyQwBF6?g_st=ic"
            >
              <p class="text-button">Como llegar</p>
            </a>
          </div>
        </div>
      </div>
      <!-- Right -->
      <div class="content-celebration">
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
            class="w-full z-10"
            src="../assets/Svg/celebration.svg"
            alt=""
            loading=""
          />
        </div>
        <div class="content-information">
          <div class="content-title">
            <div class="subcontent-lazos">
              <img
                decoding="async"
                class="w-auto z-40"
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
          <div class="content-dates">
            <h3 class="text-date">DÍA</h3>
            <p class="subtext-date">
              Sábado 16 de Noviembre <br />
              Hora - 7:00 p.m.
            </p>
          </div>
          <div class="content-dates">
            <h3 class="text-date">LUGAR</h3>
            <p class="subtext-date pb-8">
              Finca La Esmeralda<br />Vereda La Llanerita
            </p>

            <a class="button-dates" target="_blank" href="">
              <p class="text-button">Como llegar</p>
            </a>
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
    @apply w-full flex flex-col justify-center items-center pt-10;
  }
  .content-line-ceremony-md {
    @apply hidden;
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
  .content-information {
    @apply w-full flex flex-col justify-center items-center;
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
  .content-celebration {
    @apply w-full flex flex-col justify-center items-center pt-24;
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
  .content-popup {
    @apply pt-60;
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
