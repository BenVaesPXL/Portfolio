<template>
  <div
    class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ description }}
    </p>
    <p
      v-if="callToAction"
      class="text-gray-600 dark:text-gray-300 mb-4 text-sm italic"
    >
      {{ callToAction }}
    </p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="skill in skills"
        :key="skill.name"
        :class="`px-2 py-1 ${skill.bgColor} ${skill.textColor} text-xs rounded`"
      >
        {{ skill.name }}
      </span>
    </div>
    <!-- Multiple PDF links for POP Sessions -->
    <div v-if="popPdfs && popPdfs.length" class="flex flex-col gap-2 mt-4">
      <a
        v-for="(pdf, idx) in popPdfs"
        :key="idx"
        :href="pdf.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
      >
        <svg
          class="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {{ pdf.text }}
      </a>
    </div>
    <a
      v-else-if="downloadLink"
      :href="downloadLink.url"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
    >
      <svg
        class="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {{ downloadLink.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "AssignmentCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    callToAction: {
      type: String,
      default: "",
    },
    skills: {
      type: Array,
      required: true,
      validator: (skills) =>
        skills.every((skill) => skill.name && skill.bgColor && skill.textColor),
    },
    downloadLink: {
      type: Object,
      default: null,
      validator: (link) => !link || (link.url && link.text),
    },
    popPdfs: {
      type: Array,
      default: null,
      validator: (arr) => !arr || arr.every((pdf) => pdf.url && pdf.text),
    },
  },
};
</script>
