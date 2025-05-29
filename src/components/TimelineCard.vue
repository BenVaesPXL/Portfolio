<template>
  <div class="relative flex items-start md:items-center timeline-item">
    <div
      class="absolute left-2 md:left-6 top-2 md:top-auto w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
      :class="dotColorClass"
    ></div>
    <div
      class="ml-12 md:ml-16 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div class="text-sm font-medium" :class="dateColorClass">
        {{ date }}
      </div>
      <h3 class="text-lg md:text-xl font-semibold mt-1">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineCard",
  props: {
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: "indigo",
      validator: (value) =>
        ["indigo", "purple", "green", "blue", "red"].includes(value),
    },
  },
  computed: {
    dotColorClass() {
      const colorMap = {
        indigo: "bg-indigo-500",
        purple: "bg-purple-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
      };
      return colorMap[this.colorTheme] || colorMap.indigo;
    },
    dateColorClass() {
      const colorMap = {
        indigo: "text-indigo-600",
        purple: "text-purple-600",
        green: "text-green-600",
        blue: "text-blue-600",
        red: "text-red-600",
      };
      return colorMap[this.colorTheme] || colorMap.indigo;
    },
  },
};
</script>

<style scoped>
/* Timeline item specific styles */
.timeline-item {
  position: relative;
}
</style>
