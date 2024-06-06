<script setup></script>
<template>
  <div class="content-popup">
    <div class="content-ceremony">
      <div class="content-gif-ceremony">
        <img
          decoding="async"
          class="w-full z-50"
          src="../assets/Svg/ceremony.svg"
          alt=""
          loading=""
        />
      </div>
      <div class="content-line-ceremony">
        <img
          decoding="async"
          class="w-full z-50"
          src="https://www.fixdate.io/modelo-invitacion/71/img/lineas01.svg"
          alt=""
          loading=""
        />
      </div>
    </div>
    <div class="content-celebration"></div>
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-gif-ceremony {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-line-ceremony {
    background-color: #fef7f9;
    @apply w-full;
  }
}
</style>
