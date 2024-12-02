export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/index.vue"),
    meta: { title: "Home | RCCG City of David" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about/index.vue"),
    meta: {
      title: "About | RCCG City of David",
    },
  },
  {
    path: "/about/leadership",
    name: "about-leadership",
    component: () => import("@/pages/about/leadership.vue"),
    meta: {
      title: "Leadership | RCCG City of David",
    },
  },
  {
    path: "/about/our-beliefs",
    name: "about-our-beliefs",
    component: () => import("@/pages/about/beliefs.vue"),
    meta: {
      title: "Our Beliefs | RCCG City of David",
    },
  },
  {
    path: "/about/ministries",
    name: "about-ministries",
    component: () => import("@/pages/about/ministries.vue"),
    meta: {
      title: "Ministries | RCCG City of David",
    },
  },
  {
    path: "/media",
    name: "Media",
    component: () => import("@/pages/media/index.vue"),
    meta: {
      title: "Media | RCCG City of David",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/contact2/index.vue"),
    meta: {
      title: "Contact || Sandbox - Modern & Multipurpose Vue 3 Template",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/404/index.vue"),
    meta: {
      title: "Page Not Found || Sandbox - Modern & Multipurpose Vue 3 Template",
    },
  },
];
