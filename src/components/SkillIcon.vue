<template>
  <div class="group relative w-16 h-16 flex items-center justify-center">
    <img
      :src="icon"
      :alt="name"
      class="w-10 h-10 grayscale group-hover:grayscale-0 transition"
    />
    <div
      class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
    >
      {{ tooltip }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      required: true,
    },
  },
};
</script>
