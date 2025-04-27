<template>
  <NavComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Optional: you can leave this empty for now */
</style>
