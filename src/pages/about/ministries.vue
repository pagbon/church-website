<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      v-if="getSection('sharedHeroSection')"
      :title="getSection('sharedHeroSection').heroTitle"
      :description="getSection('sharedHeroSection').heroText"
    />
  </div>

  <section
    id="snippet-3"
    class="wrapper bg-light wrapper-border"
    v-if="getSection('ministriesSection')"
  >
    <div class="container py-15">
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-blue rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: -0.5rem; right: -2.2rem; z-index: 0"
        ></div>
        <div
          class="shape bg-dot purple rellax w-16 h-17"
          data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0"
        ></div>
        <div class="row gx-md-2 gy-3">
          <div
            data-aos="fade-up"
            :data-aos-delay="i * 50"
            v-for="(service, i) in getSection('ministriesSection').ministries"
            :key="service.id"
            class="col-md-6 col-xl-6 d-flex align-items-stretch"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <img
                  style="object-fit: contain"
                  :src="services[i].iconSrc"
                  class="icon-svg icon-svg-md"
                  :class="services[i].iconColorClass"
                  alt=""
                />
                <h4 class="text-purple fw-bolder fs-22">{{ service.title }}</h4>

                <PortableText :value="service.description" />
                <!-- Skipping link property -->
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <FootersFooter25 />
</template>

<script setup>
import { services } from "@/data/features";
import { ministriesPageQuery } from "@/sanity/queries/ministriesPageQuery";
import { client } from "@/sanity/sanityClient";
import { PortableText } from "@portabletext/vue";
import { ref, onMounted } from "vue";

const servicesContent = ref([]);

onMounted(async () => {
  const data = await client.fetch(ministriesPageQuery);
  console.log({ data });

  servicesContent.value = data?.sections || [];
});

const getSection = (type) =>
  servicesContent.value?.find((section) => section._type === type);
</script>

<style lang="scss" scoped></style>
