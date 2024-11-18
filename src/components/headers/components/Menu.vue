<template>
  <li class="nav-item">
    <router-link
      :class="`nav-link ${isActiveMenu(pages, '/') ? 'active' : ''}`"
      to="/"
      >Home</router-link
    >
  </li>
  <li class="nav-item dropdown">
    <a
      :class="`nav-link dropdown-toggle ${
        isActiveMenu(aboutPages) ? 'active' : ''
      }`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Who We Are</a
    >
    <ul class="dropdown-menu">
      <li
        v-for="item in aboutPages"
        :key="item.id"
        :class="`${
          item.submenu ? 'dropdown dropdown-submenu dropend' : 'nav-item'
        }`"
      >
        <a
          :class="`dropdown-item dropdown-toggle  ${
            isActiveMenu(item.submenu ? item.submenu : [], item.route)
              ? 'active'
              : ''
          }`"
          v-if="item.submenu"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          href="#"
          >{{ item.label }}</a
        >
        <router-link
          v-else
          :class="`dropdown-item   ${
            isActiveMenu([], item.route) ? 'active' : ''
          }`"
          :to="item.route"
          >{{ item.label }}</router-link
        >
        <ul class="dropdown-menu">
          <li
            class="nav-item"
            v-for="submenuItem in item.submenu"
            :key="submenuItem.id"
          >
            <router-link
              :class="`dropdown-item ${
                isActiveMenu([], submenuItem.route) ? 'active' : ''
              }`"
              :to="submenuItem.route"
              >{{ submenuItem.label }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="nav-item">
    <router-link
      :class="`nav-link ${isActiveMenu(pages, '/media') ? 'active' : ''}`"
      to="/media"
      >Media</router-link
    >
  </li>
  <li class="nav-item">
    <router-link
      :class="`nav-link ${isActiveMenu(pages, '/contact') ? 'active' : ''}`"
      to="/contact"
      >Contact</router-link
    >
  </li>
  <!-- <li class="nav-item d-flex align-items-center">
    <router-link
      class="rounded-pill border border-2 py-1 px-2"
      :class="`nav-link ${isActiveMenu(pages, '/give-online') ? 'active' : ''}`"
      to="/give-online"
    >
      Give Online
    </router-link>
  </li> -->
</template>

<script setup>
import { pages, aboutPages } from "@/data/menu";
import { useRoute } from "vue-router";

const route = useRoute();
const pathName = route.path;

const isActiveMenu = (menu, menuItem) => {
  let isActive = false;

  if (typeof menu != "string" && menu.length) {
    menu?.forEach((elm) => {
      if (menuItem == pathName) {
        isActive = true;
      }
      if (elm.submenu) {
        elm.submenu.forEach((elm2) => {
          if (elm2.route == pathName) {
            isActive = true;
          }
        });
      }
    });
  } else {
    return menuItem == pathName;
  }

  return isActive;
};
</script>

<style lang="scss" scoped></style>
