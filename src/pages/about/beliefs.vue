<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      v-if="getSection('sharedHeroSection')"
      :title="getSection('sharedHeroSection').heroTitle"
      :description="getSection('sharedHeroSection').heroText"
    />
  </div>

  <section id="snippet-2" class="wrapper wrapper-border">
    <div class="container py-15">
      <!-- /.row -->
      <div class="row gx-md-8 gy-8">
        <div
          data-aos="fade-up"
          :data-aos-delay="index * 20"
          v-for="(feature, index) in getSection('beliefsSection')?.items"
          :key="index"
          class="col-md-6 col-lg-6 align-items-stretch d-flex"
        >
          <div class="border border-1 p-2 rounded shadow">
            <div :class="features5[index].iconClass || feature.iconColor">
              <i :class="features5[index].icon || feature.icon"></i>
            </div>
            <h4 class="text-purple fs-25 fw-bolder text-capitalize">
              {{ feature.title }}
            </h4>

            <PortableText :value="feature.description" />
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <FootersFooter25 />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { features5 } from "@/data/features";
import { beliefPageQuery } from "@/sanity/queries/beliefPageQuery";
import { client } from "@/sanity/sanityClient";
const beliefContent = ref([]);
import { PortableText } from "@portabletext/vue";

onMounted(async () => {
  const data = await client.fetch(beliefPageQuery);
  console.log({ data });
  beliefContent.value = data.sections;
});

const getSection = (type) =>
  beliefContent.value?.find((section) => section._type === type);
</script>

<style lang="scss" scoped></style>
