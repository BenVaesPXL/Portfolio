<template>
  <section
    class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-6 w-full"
  >
    <div
      class="max-w-full mx-auto text-center px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24"
    >
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center"
      >
        <SkillIcon
          name="Vue.js"
          icon="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg
          "
          tooltip="Used most in my projects"
        />
        <SkillIcon
          name="JavaScript"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          tooltip="Used in frontend and backend"
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
          tooltip="Bootstrap & SCSS"
        />
        <SkillIcon
          name="HTML5"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          tooltip="Semantic HTML"
        />
        <SkillIcon
          name="GitHub"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
          tooltip="Version control"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from "./SkillIcon.vue";
</script>
