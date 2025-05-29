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
          icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmNGYyZWQiIHJ4PSI2MCIvPjxwYXRoIGZpbGw9IiMxNjE2MTQiIGQ9Ik0xMjguMDAxIDMwQzcyLjc3OSAzMCAyOCA3NC43NyAyOCAxMzAuMDAxYzAgNDQuMTgzIDI4LjY1MyA4MS42NjcgNjguMzg3IDk0Ljg5YzQuOTk3LjkyNiA2LjgzMi0yLjE2OSA2LjgzMi00LjgxYzAtMi4zODUtLjA5My0xMC4yNjItLjEzNi0xOC42MThjLTI3LjgyIDYuMDQ5LTMzLjY5LTExLjc5OS0zMy42OS0xMS43OTljLTQuNTUtMTEuNTU5LTExLjEwNC0xNC42MzItMTEuMTA0LTE0LjYzMmMtOS4wNzMtNi4yMDcuNjg0LTYuMDc5LjY4NC02LjA3OWMxMC4wNDIuNzA1IDE1LjMzIDEwLjMwNSAxNS4zMyAxMC4zMDVjOC45MTkgMTUuMjg4IDIzLjM5NCAxMC44NjggMjkuMSA4LjMxM2MuODk4LTYuNDY0IDMuNDg5LTEwLjg3NSA2LjM0OS0xMy4zNzJjLTIyLjIxMS0yLjUyOS00NS41Ni0xMS4xMDQtNDUuNTYtNDkuNDIxYzAtMTAuOTE4IDMuOTA2LTE5LjgzOSAxMC4zMDMtMjYuODQyYy0xLjAzOS0yLjUxOS00LjQ2Mi0xMi42OS45NjgtMjYuNDY0YzAgMCA4LjM5OC0yLjY4NyAyNy41MDggMTAuMjVjNy45NzctMi4yMTUgMTYuNTMxLTMuMzI2IDI1LjAzLTMuMzY0YzguNDk4LjAzOCAxNy4wNiAxLjE0OSAyNS4wNTEgMy4zNjVjMTkuMDg3LTEyLjkzOSAyNy40NzMtMTAuMjUgMjcuNDczLTEwLjI1YzUuNDQzIDEzLjc3MyAyLjAxOSAyMy45NDUuOTggMjYuNDYzYzYuNDEyIDcuMDAzIDEwLjI5MiAxNS45MjQgMTAuMjkyIDI2Ljg0MmMwIDM4LjQwOS0yMy4zOTQgNDYuODY2LTQ1LjY2MiA0OS4zNDFjMy41ODcgMy4xMDQgNi43ODMgOS4xODkgNi43ODMgMTguNTE5YzAgMTMuMzgtLjExNiAyNC4xNDktLjExNiAyNy40NDNjMCAyLjY2MSAxLjggNS43NzkgNi44NjkgNC43OTdDMTk5LjM4MyAyMTEuNjQgMjI4IDE3NC4xNjkgMjI4IDEzMC4wMDFDMjI4IDc0Ljc3MSAxODMuMjI3IDMwIDEyOC4wMDEgMzBNNjUuNDU0IDE3Mi40NTNjLS4yMi40OTctMS4wMDIuNjQ2LTEuNzE0LjMwNWMtLjcyNi0uMzI2LTEuMTMzLTEuMDA0LS44OTgtMS41MDJjLjIxNS0uNTEyLjk5OS0uNjU0IDEuNzIyLS4zMTFjLjcyNy4zMjYgMS4xNDEgMS4wMS44OSAxLjUwOG00LjkxOSA0LjM4OWMtLjQ3Ny40NDMtMS40MS4yMzctMi4wNDItLjQ2MmMtLjY1NC0uNjk3LS43NzctMS42MjktLjI5My0yLjA3OGMuNDkxLS40NDIgMS4zOTYtLjIzNSAyLjA1MS40NjJjLjY1NC43MDYuNzgyIDEuNjMxLjI4NCAyLjA3OG0zLjM3NCA1LjYxNmMtLjYxMy40MjYtMS42MTUuMDI3LTIuMjM0LS44NjNjLS42MTMtLjg4OS0uNjEzLTEuOTU1LjAxMy0yLjM4M2MuNjIxLS40MjcgMS42MDgtLjA0MyAyLjIzNi44NGMuNjExLjkwNC42MTEgMS45NzEtLjAxNSAyLjQwNm01LjcwNyA2LjUwNGMtLjU0OC42MDQtMS43MTUuNDQyLTIuNTctLjM4M2MtLjg3NC0uODA2LTEuMTE4LTEuOTUtLjU2OC0yLjU1NWMuNTU1LS42MDYgMS43MjktLjQzNSAyLjU5LjM4M2MuODY4LjgwNCAxLjEzMyAxLjk1Ny41NDggMi41NTVtNy4zNzYgMi4xOTVjLS4yNDIuNzg0LTEuMzY2IDEuMTQtMi40OTkuODA3Yy0xLjEzLS4zNDMtMS44NzEtMS4yNi0xLjY0Mi0yLjA1MmMuMjM1LS43ODggMS4zNjQtMS4xNTkgMi41MDUtLjgwM2MxLjEzLjM0MSAxLjg3MSAxLjI1MiAxLjYzNiAyLjA0OG04LjM5NC45MzJjLjAyOC44MjQtLjkzMiAxLjUwOC0yLjEyMSAxLjUyM2MtMS4xOTYuMDI3LTIuMTYzLS42NDEtMi4xNzYtMS40NTJjMC0uODMzLjkzOS0xLjUxIDIuMTM0LTEuNTNjMS4xOS0uMDIzIDIuMTYzLjYzOSAyLjE2MyAxLjQ1OW04LjI0Ni0uMzE2Yy4xNDMuODA0LS42ODMgMS42MzEtMS44NjQgMS44NTFjLTEuMTYxLjIxMi0yLjIzNi0uMjg1LTIuMzgzLTEuMDgzYy0uMTQ0LS44MjUuNjk3LTEuNjUxIDEuODU2LTEuODY1YzEuMTgzLS4yMDUgMi4yNDEuMjc5IDIuMzkxIDEuMDk3Ii8+PC9nPjwvc3ZnPg=="
          tooltip="Version control"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from "./SkillIcon.vue";
</script>
