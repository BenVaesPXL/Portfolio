<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4"
  >
    <div class="text-7xl mb-6">🚫</div>
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p
      class="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md"
    >
      Oops! The page you are looking for doesn't exist or has been moved.<br />
      Please check the URL or return to the homepage.
    </p>
    <router-link
      to="/"
      class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Go to Homepage
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
/* Center content and add smooth transitions */
.text-7xl {
  font-size: 5rem;
}
</style>
