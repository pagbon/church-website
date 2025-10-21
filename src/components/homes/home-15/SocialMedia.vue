<template>
  <section
    class="youtube-session bg-light py-10"
  >
    <div class="container text-center">
      <h2 class="text-purple fw-bolder mb-4">{{ content.title }}</h2>
      <p class="mb-6 fs-16">{{ content.description }}</p>
      <div class="ratio ratio-16x9 mx-auto" style="max-width: 800px">
        <iframe
          :src="content.videoUrl.replace('watch?v=', 'embed/')"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: Object,
});
</script>

<style scoped>
.youtube-session {
  background: #fafafa;
}
</style>
