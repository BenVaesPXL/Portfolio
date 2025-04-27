<!-- src/views/HomeView.vue -->
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Main Content -->
    <main class="py-10">
      <section id="about" class="max-w-7xl mx-auto px-4 mb-12">
        <h2 class="text-3xl font-semibold mb-4">{{ title }}</h2>
        <p class="text-lg">{{ description }}</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: "Welcome to My Portfolio",
      description: "Hi, I am Ben Vaes, a frontend developer...",
    };
  },
};
</script>
