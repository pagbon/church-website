<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      data-aos="fade-up"
      v-if="getSection('sharedHeroSection')"
      :title="getSection('sharedHeroSection').heroTitle"
      :description="getSection('sharedHeroSection').heroText"
    />
    <ContactContact2ContactInfo
      data-aos="fade-up"
      v-if="getSection('contactInfoSection')"
      :content="getSection('contactInfoSection')"
    />
  </div>
  <FootersFooter25 data-aos="fade-up" />
</template>

<script setup>
import PageHeader from "@/components/common/PageHeader.vue";
import { contactUsQuery } from "@/sanity/queries/contactUsQuery";
import { client } from "@/sanity/sanityClient";
import { ref, onMounted } from "vue";

const contactContent = ref(null);

onMounted(async () => {
  const data = await client.fetch(contactUsQuery);
  console.log({ data });
  contactContent.value = data.sections || [];
});

const getSection = (type) =>
  contactContent.value?.find((section) => section._type === type);
</script>

<style lang="scss" scoped></style>
