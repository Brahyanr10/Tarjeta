<script setup></script>
<template>
  <div class="content-paralax">
    <img
      decoding="async"
      class="parallaxx-img"
      src="../assets/svgs/curva04.svg"
      alt=""
      loading="lazy"
    />
    <div class="subcontent-paralaxx-sm"></div>
    <div class="subcontent-paralaxx-md"></div>
    <div class="subcontent-paralaxx-lg"></div>
    <img
      decoding="async"
      class="parallaxx-img-2"
      src="../assets/svgs/curva05.svg"
      alt=""
      loading="lazy"
    />
    <img
      decoding="async"
      class="parallaxx-img-3"
      src="../assets/svgs/lineas02.svg"
      alt=""
      loading="lazy"
    />
  </div>
</template>
<style scoped>
@media (min-width: 0px) {
  .content-paralax {
    @apply w-full flex flex-col justify-center items-center;
  }
  .subcontent-paralaxx-sm {
    background-image: url('../assets/weading/anillo2.jpg');
    @apply w-full flex flex-col justify-center items-center bg-fixed bg-cover h-max py-[300px];
  }
  .parallaxx-img {
    @apply -mb-[30px] z-50;
  }
  .parallaxx-img-2 {
    @apply -mt-[80px] z-50;
  }
  .parallaxx-img-3 {
    @apply -mt-[50px] z-50;
  }
}
@media (min-width: 768px) {
  .subcontent-paralaxx-sm {
    @apply hidden;
  }
  .subcontent-paralaxx-md {
    background-image: url('../assets/weading/anillo3.jpg');
    @apply w-full flex flex-col justify-center items-center bg-fixed bg-cover h-max py-[300px];
  }
  .parallaxx-img {
    @apply -mb-[60px];
  }
  .parallaxx-img-2 {
    @apply -mt-[60px];
  }
}
@media (min-width: 1024px) {
  .subcontent-paralaxx-sm {
    @apply hidden;
  }
  .subcontent-paralaxx-md {
    @apply hidden;
  }
  .subcontent-paralaxx-lg {
    background-image: url('../assets/weading/anillo.jpg');
    @apply w-full flex flex-col justify-center items-center bg-fixed bg-cover h-max py-[300px];
  }
  .parallaxx-img {
    @apply -mb-[80px];
  }
  .parallaxx-img-2 {
    @apply -mt-[80px];
  }
  .parallaxx-img-3 {
    @apply -mt-[120px];
  }
}
</style>
