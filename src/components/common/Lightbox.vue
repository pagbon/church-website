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
        {{ currentSlideIndex + 1 }} / {{ images.length }}
      </div>
      <div
        v-for="(elm, i) in images"
        :key="i"
        class="mySlides"
        :class="{ fadein: currentSlideIndex === i }"
        :style="{
          display: currentSlideIndex === i ? 'block' : 'none',
          height: '100%',
        }"
      >
        <img
          :src="elm"
          style="
            height: 94vh;
            width: 100%;
            object-fit: contain;
            margin: auto auto;
            margin-top: 3vh;
          "
          alt="image"
        />
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

const props = defineProps(["images", "activeLightBox", "firstSlideIndex"]);
const emits = defineEmits(["setActiveLightBox"]);
const currentSlideIndex = ref();
const index = computed(() => props.firstSlideIndex);

watch(index, () => {
  currentSlideIndex.value = index.value;
});

const prevSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === 0
      ? props.images.length - 1
      : currentSlideIndex.value - 1;
};

const nextSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === props.images.length - 1
      ? 0
      : currentSlideIndex.value + 1;
};
const setActiveLightBoxFunc = (value) => {
  emits("setActiveLightBox", value);
};
</script>

<style lang="scss"></style>
