import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import Wpl1View from "@/views/Wpl1View.vue";
import Wpl2View from "@/views/Wpl2View.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectsDetailView from "@/views/ProjectsDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/contact", component: ContactView },
    { path: "/projects", component: ProjectsView },
    { path: "/projects/:id", component: ProjectsDetailView },
    { path: "/wpl1", component: Wpl1View },
    { path: "/wpl2", component: Wpl2View },
    { path: "/:notFound(.*)", component: NotFoundView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      // If there's a saved position (like when using browser back/forward), use it
      return savedPosition;
    } else {
      // Otherwise, scroll to top
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
