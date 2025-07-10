<template>
  <div class="content-wrapper">
    <HeadersHeader16 />
    <HomesHome15Hero
      data-aos="fade-up"
      v-if="getSection('heroSection')"
      :content="getSection('heroSection')"
    />
    <HomesHome15Testimonials
      data-aos="fade-up"
      v-if="getSection('welcomeSection')"
      :content="getSection('welcomeSection')"
    />
    <section class="wrapper bg-light angled lower-end">
      <div class="container py-14 py-md-16">
        <HomesHome15Features
          data-aos="fade-up"
          v-if="getSection('whoWeAreSection')"
          :content="getSection('whoWeAreSection')"
        />
        <HomesHome15Steps
          data-aos="fade-up"
          v-if="getSection('serviceSection')"
          :content="getSection('serviceSection')"
        />
      </div>
    </section>
    <HomesHome15Team
      data-aos="fade-up"
      v-if="getSection('gallerySection')"
      :content="getSection('gallerySection')"
    />
    <HomesHome15Contact
      data-aos="fade-up"
      v-if="getSection('contactSection')"
      :content="getSection('contactSection')"
    />
  </div>
  <FootersFooter25 data-aos="fade-up" />
</template>

<script setup>
import { homePageQuery } from "@/sanity/queries/homePageQuery";
import { client } from "@/sanity/sanityClient";
import { ref, onMounted } from "vue";

const homeContent = ref(null);

onMounted(async () => {
  const data = await client.fetch(homePageQuery);
  console.log({ data });
  homeContent.value = data.Sections || [];
});

const getSection = (type) =>
  homeContent.value?.find((section) => section._type === type);
</script>

<style lang="scss" scoped></style>
