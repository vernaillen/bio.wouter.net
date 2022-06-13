import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/links",
      name: "links",
      component: () => import("../views/LinksView.vue"),
    },
  ],
});

export default router;
