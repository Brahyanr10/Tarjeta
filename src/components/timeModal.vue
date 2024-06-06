<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const timeDifference = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// Fecha fija: 16 de noviembre del 2024 a las 5:30 PM
const fixedDate = new Date('2024-11-16T17:00:00');

function getTimeDifference(date) {
  const now = new Date();
  const targetDate = new Date(date);
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function updateDifference() {
  timeDifference.value = getTimeDifference(fixedDate);
}

const daysStyle = computed(() => `--value: ${timeDifference.value.days}`);
const hoursStyle = computed(() => `--value: ${timeDifference.value.hours}`);
const minutesStyle = computed(() => `--value: ${timeDifference.value.minutes}`);
const secondsStyle = computed(() => `--value: ${timeDifference.value.seconds}`);

let intervalId;
onMounted(() => {
  updateDifference();
  intervalId = setInterval(updateDifference, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

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
      <div class="grid grid-flow-col gap-x-3 text-center auto-cols-max z-50">
        <div class="flex flex-col border-r border-[#D0888E] pr-3">
          <span class="countdown font-mono text-xl lg:text-5xl text-[#D0888E]">
            <span :style="daysStyle"></span>
          </span>
          <span class="text-[#716558]">Días</span>
        </div>

        <div class="flex flex-col border-r border-[#D0888E] pr-3">
          <span class="countdown font-mono text-xl lg:text-5xl text-[#D0888E]">
            <span :style="hoursStyle"></span>
          </span>
          <span class="text-[#716558]">Hs</span>
        </div>
        <div class="flex flex-col border-r border-[#D0888E] pr-3">
          <span class="countdown font-mono text-xl lg:text-5xl text-[#D0888E]">
            <span :style="minutesStyle"></span>
          </span>
          <span class="text-[#716558]">Min</span>
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-xl lg:text-5xl text-[#D0888E]">
            <span :style="secondsStyle"></span>
          </span>
          <span class="text-[#716558]">Seg</span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38 32"
        preserveAspectRatio="xMidYMid meet"
        class="z-50 mt-6 animate-pulse"
        style="width: 38px; height: 32px; transform: translate3d(0px, 0px, 0px)"
      >
        <defs>
          <clipPath id="__lottie_element_130">
            <rect width="38" height="32" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clip-path="url(#__lottie_element_130)">
          <g
            transform="matrix(0.9865000247955322,0,0,0.9865000247955322,0.28017616271972656,0.15089035034179688)"
            opacity="1"
            style="display: block"
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"
            >
              <path
                fill="rgb(208,136,142)"
                fill-opacity="1"
                d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 1s infinite;
}
@media (min-width: 0px) {
  .content-popup {
    background-color: #fef7f9;
    @apply w-full h-max flex flex-col justify-center items-center pt-[5%] pb-[20%];
  }
  .text-time-title {
    @apply w-auto z-50 -mt-[240px]  text-[#D0888E] text-4xl mb-6 font-semibold;
  }
  .text-time {
    @apply w-auto z-50;
  }
}
@media (min-width: 320px) {
}
@media (min-width: 425px) {
}
@media (min-width: 768px) {
  .content-popup {
    background-color: #fef7f9;
    @apply pt-[0%] pb-[0%];
  }
  .text-time-title {
    @apply mt-[0px];
  }
}
</style>
