<template>
  <section class="youtube-session bg-light py-10">
    <div class="container text-center">
      <h2 class="text-purple fw-bolder mb-4">{{ content.title }}</h2>
      <p class="mb-6 fs-16">{{ content.description }}</p>
      <div
        v-if="content.isLive"
        class="ratio ratio-16x9 mx-auto"
        style="max-width: 800px"
      >
        <iframe
          :src="content.videoUrl.replace('watch?v=', 'embed/')"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else class="fallback text-center mx-auto" style="max-width: 800px">
        <div v-if="content.date" class="mb-6">
          <h3 class="text-purple fw-bold mb-4">Going Live Soon 🎥</h3>
          <div class="timer d-flex justify-content-center gap-3">
            <div>
              <h2>{{ timeLeft.hours }}</h2>
              <small>Hours</small>
            </div>
            <div>
              <h2>{{ timeLeft.minutes }}</h2>
              <small>Minutes</small>
            </div>
            <div>
              <h2>{{ timeLeft.seconds }}</h2>
              <small>Seconds</small>
            </div>
          </div>
        </div>
        <img
          :src="content.thumbnail?.asset?.url"
          alt="No live session currently"
          class="rounded-3 shadow-sm w-100"
        />
        <!-- <p class="mt-3 text-muted">
          No live session right now — check back soon!
        </p> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  content: Object,
});

const timeLeft = ref({ total: 0, hours: 0, minutes: 0, seconds: 0 });

const calculateTimeLeft = () => {
  const now = new Date();
  const target = new Date(props.content.date).getTime();
  const diff = target - now;

  if (diff > 0) {
    timeLeft.value = {
      total: diff,
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  } else {
    timeLeft.value.total = 0;
  }
};

let timer;
onMounted(() => {
  calculateTimeLeft();
  timer = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.youtube-session {
  background: #fafafa;
}
</style>
