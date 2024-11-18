<template>
  <header :class="`wrapper ${bg ? bg : 'bg-soft-primary'}`">
    <nav
      :class="`navbar navbar-expand-lg center-nav transparent navbar-light ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? ' navbar-stick' : ' navbar-unstick'} `"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <router-link to="/">
            <img
              src="/assets/img/logo.png"
              srcset="/assets/img/logo@2x.png 2x"
              alt="photo"
            />
          </router-link>
        </div>
        <div
          id="ofCanvasBody"
          class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        >
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">
              <router-link to="/">
                <img
                  class="logo-dark"
                  src="/assets/img/logo.png"
                  srcset="/assets/img/logo@2x.png 2x"
                  alt="photo"
                />
              </router-link>
            </h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              @click="menuClose"
              ofCanvasToggle="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <Menu />
            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer d-lg-none">
              <div>
                <a href="mailto:info@rccgcityofdavid.com" class="link-inverse">
                  info@rccgcityofdavid.com
                </a>
                <br />
                1-403-401-5671
                <br />
                <nav class="nav social social-white mt-4">
                  <HeadersComponentsSocials />
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other w-100 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item d-md-block">
              <router-link
                to="/give-online"
                class="btn btn-sm btn-purple rounded-pill"
                >Give Online</router-link
              >
            </li>
            <li class="nav-item d-lg-none" ofCanvasToggle2="offcanvas2">
              <button @click="menuOpen" class="hamburger offcanvas-nav-btn">
                <span>{{}}</span>
              </button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>

        <!-- /.navbar-other -->
        <div
          id="offcanvasBackdrop"
          @click="menuClose"
          class="offcanvas-backdrop fade"
          style="display: none"
        ></div>
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
defineProps(["bg"]);
import Menu from "./components/Menu.vue";

import HeadersComponentsSocials from "@/components/headers/components/Socials.vue";

const menuOpen = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").style.display = "block";
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
};

const menuClose = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("offcanvasBackdrop").style.display = "none";
  }, 300);
};

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
