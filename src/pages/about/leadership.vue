<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      data-aos="fade-up"
      v-if="getSection('sharedHeroSection')"
      :title="getSection('sharedHeroSection').heroTitle"
      :description="getSection('sharedHeroSection').heroText"
    />

    <section
      id="snippet-8"
      class="wrapper wrapper-border"
      v-if="getSection('leadershipGridSection')"
    >
      <div class="container py-15">
        <!-- /.row -->
        <div class="grid grid-view projects-masonry">
          <div class="row gx-md-8 gy-10 gy-md-13 isotope">
            <div
              data-aos="fade-up"
              :data-aos-delay="i * 50"
              v-for="(project, i) in getSection('leadershipGridSection')
                .leaders"
              :key="i"
              class="project item col-md-6 col-xl-3"
            >
              <figure class="rounded mb-6">
                <img
                  style="object-fit: contain"
                  :src="project.image.asset.url"
                  :alt="project.image.alt || 'photo'"
                  class="img-thumbnail"
                />
              </figure>
              <div
                class="project-details d-flex justify-content-center flex-column"
              >
                <div class="post-header">
                  <h2 class="post-title text-purple h3 fs-20 my-0">
                    {{ project.name }}
                  </h2>
                  <div
                    v-for="(item, index) in project.roles"
                    class="my-1 py-0"
                    :key="index"
                  >
                    <p
                      class="py-0 my-0 text-ash"
                      style="margin: 0 !important; padding: 0 !important"
                    >
                      {{ item.position }}
                    </p>
                    <a
                      style="margin: 0 !important; padding: 0 !important"
                      :href="`mailto:${item.email}`"
                      class="my-0 py-0 text-ash fs-12"
                    >
                      <i>{{ item.email }}</i>
                    </a>
                  </div>
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
import Lightbox from "@/components/common/Lightbox.vue";
import { client } from "@/sanity/sanityClient";
import { leadershipPageQuery } from "@/sanity/queries/leadershipPageQuery";

const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects6.map((elm) => elm.fullImage);
});

const leadershipContent = ref([]);

onMounted(async () => {
  const data = await client.fetch(leadershipPageQuery);
  console.log({ data });
  leadershipContent.value = data.sections;
});

const getSection = (type) =>
  leadershipContent.value?.find((section) => section._type === type);

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
</script>

<style lang="scss" scoped></style>
