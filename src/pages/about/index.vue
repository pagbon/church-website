<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      v-if="getSection('sharedHeroSection')"
      :title="getSection('sharedHeroSection')?.heroTitle"
      :description="getSection('sharedHeroSection')?.heroText"
      data-aos="fade-up"
    />
    <BlocksAboutFeatures6
      v-if="getSection('whoAreWeSection') && getSection('infoCardsSection')"
      :content="getSection('whoAreWeSection')"
      :infoCard="getSection('infoCardsSection')"
      data-aos="fade-up"
    />
    <Features5
      v-if="getSection('moreAboutUsSection')"
      :content="getSection('moreAboutUsSection')"
      data-aos="fade-up"
    />
    <AboutAbout2Team
      v-if="getSection('moreAboutUsSection')"
      :content="getSection('moreAboutUsSection')"
      data-aos="fade-up"
    />
    <AboutAbout2Contact
      v-if="getSection('getInTouchSection')"
      :content="getSection('getInTouchSection')"
      data-aos="fade-up"
    />
  </div>
  <FootersFooter25 data-aos="fade-up" />
</template>

<script setup>
import { ref, onMounted } from "vue";

import Features5 from "@/components/blocks/about/Features5.vue";
import { client } from "@/sanity/sanityClient";
import { aboutPageQuery } from "@/sanity/queries/aboutUsQuery";
const aboutContent = ref([]);

onMounted(async () => {
  const data = await client.fetch(aboutPageQuery);
  console.log({ data });

  aboutContent.value = data.sections;
});

const getSection = (type) => {
  return aboutContent.value?.find((section) => section._type === type);
};
</script>

<style lang="scss" scoped></style>
