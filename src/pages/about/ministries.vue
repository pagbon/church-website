<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      title="Ministries"
      description="Welcome to RCCG City of David, Calgary"
    />
  </div>

  <section id="snippet-3" class="wrapper bg-light wrapper-border">
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
            v-for="(service, i) in services"
            :key="service.id"
            class="col-md-6 col-xl-6 d-flex align-items-stretch"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <img style="object-fit: contain;"
                  :src="service.iconSrc"
                  class="icon-svg icon-svg-md"
                  :class="service.iconColorClass"
                  alt=""
                />
                <h4 class="text-purple fw-bolder fs-22">{{ service.title }}</h4>
                <div
                  class="fs-14"
                  v-if="service.typeHtml"
                  v-html="service.description"
                ></div>
                <p v-else class="fs-14">{{ service.description }}</p>
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
</script>

<style lang="scss" scoped></style>
