<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      data-aos="fade-up"
      title="Leadership"
      description="At RCCG City of David, we believe that we are better together. Our staff has a blast serving Jesus, His people, and each other. Let us know how we can help you grow in your relationships, develop your gifts, and find success in your life."
    />

    <section id="snippet-8" class="wrapper wrapper-border">
      <div class="container py-15">
        <!-- /.row -->
        <div class="grid grid-view projects-masonry">
          <div class="row gx-md-8 gy-10 gy-md-13 isotope">
            <div
              data-aos="fade-up"
              :data-aos-delay="i * 50"
              v-for="(project, i) in teamMembers3"
              :key="project.id"
              class="project item col-md-6 col-xl-4"
            >
              <figure class="rounded mb-6">
                <img
                  :src="project.avatarSrc"
                  alt="photo"
                  class="img-thumbnail"
                />
                <!-- <div
                  class="item-link cursor-pointer"
                  @click="() => setActiveLightBox(true, i)"
                >
                  <i class="uil uil-focus-add"></i>
                </div> -->
              </figure>
              <div
                class="project-details d-flex justify-content-center flex-column"
              >
                <div class="post-header">
                  <h2 class="post-title text-purple h3 fs-20 my-0">
                    {{ project.name }}
                  </h2>
                  <p class="post-category my-0 text-ash">
                    {{ project.position }}
                  </p>
                  <a
                    :href="`mailto:${item.link}`"
                    v-for="(item, index) in project.socialLinks"
                    :key="index"
                    class="my-0 text-ash fs-13"
                  >
                    {{ item.link }}
                  </a>
                </div>
                <!-- /.post-header -->
              </div>
              <!-- /.project-details -->
            </div>
            <!-- /.item -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.grid -->
      </div>
    </section>
    <Lightbox
      :images="images"
      :activeLightBox="activeLightBox"
      :firstSlideIndex="currentSlideIndex"
      @setActiveLightBox="setActiveLightBox"
    />
  </div>
  <FootersFooter25 />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { projects6 } from "@/data/projects";
import { teamMembers3 } from "@/data/team";

const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects6.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "@/components/common/Lightbox.vue";
</script>

<style lang="scss" scoped></style>
