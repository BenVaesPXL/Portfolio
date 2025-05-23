import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import Wpl2View from "@/views/Wpl2View.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/contact", component: ContactView },
    { path: "/projects/:id", component: ProjectsView },
    { path: "/wpl2", component: Wpl2View },
    { path: "/:notFound(.*)", component: NotFoundView },
  ],
});

export default router;
