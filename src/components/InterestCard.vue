<template>
  <div class="text-center group">
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
      :class="backgroundClasses"
    >
      <svg
        class="w-8 h-8 transition-colors duration-300"
        :class="iconClasses"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="iconPath"
        ></path>
      </svg>
    </div>
    <h3
      class="text-xl font-semibold mb-2 transition-colors duration-300"
      :class="titleClasses"
    >
      {{ title }}
    </h3>
    <p
      class="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InterestCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: "indigo",
      validator: (value) =>
        ["indigo", "purple", "green", "blue", "red", "yellow"].includes(value),
    },
  },
  computed: {
    backgroundClasses() {
      const colorMap = {
        indigo:
          "bg-indigo-100 dark:bg-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800",
        purple:
          "bg-purple-100 dark:bg-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
        green:
          "bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800",
        blue: "bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
        red: "bg-red-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800",
        yellow:
          "bg-yellow-100 dark:bg-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800",
      };
      return colorMap[this.colorTheme] || colorMap.indigo;
    },
    iconClasses() {
      const colorMap = {
        indigo: "text-indigo-600 group-hover:text-indigo-700",
        purple: "text-purple-600 group-hover:text-purple-700",
        green: "text-green-600 group-hover:text-green-700",
        blue: "text-blue-600 group-hover:text-blue-700",
        red: "text-red-600 group-hover:text-red-700",
        yellow: "text-yellow-600 group-hover:text-yellow-700",
      };
      return colorMap[this.colorTheme] || colorMap.indigo;
    },
    titleClasses() {
      const colorMap = {
        indigo: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
        purple: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
        green: "group-hover:text-green-600 dark:group-hover:text-green-400",
        blue: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
        red: "group-hover:text-red-600 dark:group-hover:text-red-400",
        yellow: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
      };
      return colorMap[this.colorTheme] || colorMap.indigo;
    },
  },
};
</script>

<style scoped>
/* Hover effects for enhanced visual feedback */
.group:hover .w-16 {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
