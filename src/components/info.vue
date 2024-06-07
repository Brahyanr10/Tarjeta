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
            href="https://maps.app.goo.gl/GABukPdXuCTyQwBF6?g_st=ic"
          >
            <p class="text-button">Como llegar</p>
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.527577943897!2d-73.6043372!3d4.1160232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2ef5d7886593%3A0xe6ddce79c3e51f!2sNuestra%20Se%C3%B1ora%20de%20Lourdes!5e0!3m2!1ses-419!2sco!4v1717803716004!5m2!1ses-419!2sco"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
