<template>
  <HeadersHeader1 bg="bg-light" />
  <div class="content-wrapper">
    <section class="wrapper bg-light">
      <div class="container pb-14 pb-md-16" data-aos="fade-up">
        <div class="row">
          <!-- /column -->
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <img style="object-fit: contain;"
              style="width: 500px"
              class="img-fluid"
              src="/assets/img/illustrations/404.jpg"
              alt="photo"
            />
            <h1 class="mb-3">Oops! Page Not Found.</h1>
            <p class="lead mb-7 px-md-12 px-lg-5 px-xl-7">
              The page you are looking for is not available or has been moved.
              Try a different page or go to homepage with the button below.
            </p>
            <router-link to="/" class="btn btn-primary rounded-pill"
              >Go to Homepage</router-link
            >
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
  </div>
  <FootersFooter25 data-aos="fade-up" />
</template>

<script setup></script>

<style lang="scss" scoped></style>
