<template>
  <section class="wrapper bg-light">
    <div class="container pb-13 pb-md-15">
      <div class="row">
        <div
          class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center"
        >
          <h2 class="fs-15 text-uppercase text-muted mb-3">
            Why Choose Sandbox?
          </h2>
          <h3 class="display-4 mb-10 px-xl-10 px-xxl-15">
            Here are a few reasons why our customers choose Sandbox.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <ul
        class="nav nav-tabs nav-tabs-bg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li
          v-for="item in tabItems"
          @click="currentTab = item.id"
          :key="item.id"
          class="nav-item"
        >
          <a
            :class="[
              'nav-link',
              'd-flex',
              'flex-row',
              { active: item.id === currentTab },
            ]"
            :data-bs-toggle="item.id === 1 ? 'tab' : ''"
            :href="'#' + item.tabId"
          >
            <div>
              <img style="object-fit: contain;"
                :src="item.iconSrc"
                class="icon-svg icon-svg-md me-4"
                :class="item.iconColorClass"
                alt="photo"
              />
            </div>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- /.nav-tabs -->
      <div class="tab-content mt-6 mt-lg-8">
        <div
          :class="`tab-pane fade  ${currentTab == 1 ? 'show active' : ''}`"
          id="tab2-1"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <div class="row gx-md-5 gy-5 align-items-center">
                <div class="col-6">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex ms-auto"
                    src="/assets/img/photos/sa13.jpg"
                    srcset="/assets/img/photos/sa13@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-6">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa14.jpg"
                    srcset="/assets/img/photos/sa14@2x.jpg 2x"
                    alt="photo"
                  />
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa15.jpg"
                    srcset="/assets/img/photos/sa15@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Easy Usage</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-yellow">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-yellow mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div
          :class="`tab-pane fade ${currentTab == 2 ? 'show active' : ''}`"
          id="tab2-2"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="row gx-md-5 gy-5">
                <div class="col-5">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    src="/assets/img/photos/sa9.jpg"
                    srcset="/assets/img/photos/sa9@2x.jpg 2x"
                    alt="photo"
                  />
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa10.jpg"
                    srcset="/assets/img/photos/sa10@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-7">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa11.jpg"
                    srcset="/assets/img/photos/sa11@2x.jpg 2x"
                    alt="photo"
                  />
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex col-11"
                    src="/assets/img/photos/sa12.jpg"
                    srcset="/assets/img/photos/sa12@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Fast Transactions</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-green">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-green mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div
          :class="`tab-pane fade ${currentTab == 3 ? 'show active' : ''}`"
          id="tab2-3"
        >
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-6">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa5.jpg"
                    srcset="/assets/img/photos/sa5@2x.jpg 2x"
                    alt="photo"
                  />
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa6.jpg"
                    srcset="/assets/img/photos/sa6@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
                <div class="col-6">
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg my-5"
                    src="/assets/img/photos/sa7.jpg"
                    srcset="/assets/img/photos/sa7@2x.jpg 2x"
                    alt="photo"
                  />
                  <img style="object-fit: contain;"
                    class="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa8.jpg"
                    srcset="/assets/img/photos/sa8@2x.jpg 2x"
                    alt="photo"
                  />
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Secure Payments</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-red">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-red mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { checklistItems, tabItems } from "@/data/features";
import { ref } from "vue";
const currentTab = ref(1);
</script>

<style lang="scss" scoped></style>
