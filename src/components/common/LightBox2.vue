<template>
  <!-- type: 'fraction', -->
  <div
    id="myModal"
    :class="`modalcustom ${activeLightBox ? 'activeImageLightBox' : ''}`"
  >
    <div
      class="close cursor"
      style="z-index: 1000"
      @click="setActiveLightBoxFunc(false)"
    >
      <span>&times;</span>
    </div>
    <div class="modal-contentcustom">
      <div class="numbertext">
        {{ currentSlideIndex + 1 }} / {{ items.length }}
      </div>
      <div
        v-for="(elm, i) in items"
        :key="i"
        class="mySlides"
        :class="{ fadein: currentSlideIndex === i }"
        :style="{
          display: currentSlideIndex === i ? 'flex' : 'none',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <img
          v-if="elm.type == 'image'"
          :src="elm.src"
          style="
            max-height: calc(100vh - 100px);
            width: 100%;
            object-fit: contain;
            margin: auto auto;
            margin-top: 3vh;
          "
          alt="image"
        />
        <div
          v-if="elm.type == 'video'"
          style="
            max-height: calc(100vh - 100px);
            width: 100%;
            margin-top: 40px;

            position: relative;

            max-width: 840px;
          "
        >
          <div
            class="gvideo-wrapper local-video gvideo"
            data-id="gvideo5"
            data-index="5"
            style="padding: 0"
          >
            <div
              class="player"
              data-plyr-provider="vimeo"
              data-plyr-embed-id="15801179"
            ></div>
          </div>
        </div>
        <div
          v-if="elm.videoSrc"
          style="
            max-height: calc(100vh - 100px);
            width: 100%;
            margin-top: 40px;

            position: relative;

            max-width: 840px;
          "
        >
          <video class="player" playsinline controls preload="none">
            <source src="/assets/media/movie.mp4" type="video/mp4" />
          </video>
        </div>

        <h3 class="text-white" v-if="elm.caption?.title">
          {{ elm?.caption?.title }}
        </h3>
        <h5 class="text-white" v-if="elm.caption?.description">
          {{ elm?.caption?.description }}
        </h5>
      </div>

      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { computed, ref, watch } from "vue";

const props = defineProps(["items", "activeLightBox", "firstSlideIndex"]);
const emits = defineEmits(["setActiveLightBox"]);
const currentSlideIndex = ref();
const index = computed(() => props.firstSlideIndex);

watch(index, () => {
  currentSlideIndex.value = index.value;
});

const prevSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === 0
      ? props.items.length - 1
      : currentSlideIndex.value - 1;
};

const nextSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === props.items.length - 1
      ? 0
      : currentSlideIndex.value + 1;
};
const setActiveLightBoxFunc = (value) => {
  emits("setActiveLightBox", value);
};
</script>

<style lang="scss"></style>
