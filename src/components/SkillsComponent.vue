<template>
  <section
    class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4"
  >
    <div class="max-w-5xl mx-auto text-center">
      <h2
        class="text-3xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"
      >
        My Tech Stack
      </h2>

      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center"
      >
        <SkillIcon
          name="Vue.js"
          icon="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg
          "
          tooltip="Used in all my projects"
        />
        <SkillIcon
          name="JavaScript"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          tooltip="4+ years of use"
        />
        <SkillIcon
          name="Tailwind CSS"
          icon="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg
          "
          tooltip="Used for styling this site"
        />
        <SkillIcon
          name="SCSS"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
          tooltip="Styled with Bootstrap & SCSS"
        />
        <SkillIcon
          name="HTML5"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          tooltip="Semantic & accessible markup"
        />
        <SkillIcon
          name="GitHub"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
          tooltip="Version control and hosting"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from "./SkillIcon.vue";
</script>
