<script setup></script>

<template>
  <div class="content-popup">
    <div
      class="w-9/0 flex flex-col justify-center items-center separator-content z-0"
    >
      <img
        decoding="async"
        class="separator z-50"
        src="https://www.fixdate.io/modelo-invitacion/71/img/contador.png"
        alt=""
        loading=""
      />
      <p class="text-time-title">Falta</p>
      <p class="text-time">10 | 20 | 15 | 35</p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center py-[20%];
  }
  .text-time-title {
    @apply w-auto z-50 -mt-[200px];
  }
  .text-time {
    @apply w-auto z-50;
  }
}
@media (min-width: 320px) {
}
@media (min-width: 425px) {
}
</style>
