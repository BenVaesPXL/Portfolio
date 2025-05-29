<template>
  <div class="flex flex-wrap justify-center gap-4 mb-8">
    <button
      @click="handleCategorySelect('all')"
      :class="[
        'px-4 py-2 rounded-lg font-medium transition-colors',
        modelValue === 'all'
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600',
      ]"
    >
      {{ allCategoriesLabel }}
    </button>
    <button
      v-for="category in categories"
      :key="category"
      @click="handleCategorySelect(category)"
      :class="[
        'px-4 py-2 rounded-lg font-medium transition-colors',
        modelValue === category
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600',
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryFilter",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "all",
    },
    allCategoriesLabel: {
      type: String,
      default: "All Categories",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleCategorySelect(category) {
      this.$emit("update:modelValue", category);
    },
  },
};
</script>

<style scoped>
/* Additional hover effects for better UX */
button {
  position: relative;
  overflow: hidden;
}

button:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s;
}

button:hover:before {
  left: 100%;
}
</style>
