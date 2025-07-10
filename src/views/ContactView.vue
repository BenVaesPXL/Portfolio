<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
  >
    <!-- Hero Section -->
    <section
      class="py-16 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Let's <span class="text-indigo-600">Connect</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Ready to bring your next project to life? I'd love to hear from you!
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="pb-16">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
              <div
                class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
              >
                <div class="flex items-center">
                  <div
                    class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"
                  ></div>
                  <span class="text-green-700 dark:text-green-400 font-medium"
                    >Available for opportunities</span
                  >
                </div>
                <p class="text-green-600 dark:text-green-300 text-sm mt-1">
                  Currently seeking internships (available from 19 November 2025
                  <br />
                  to 29 May 2026)
                </p>
              </div>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <a
                    href="mailto:bvaes@icloud.com"
                    class="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    bvaes@icloud.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Phone</h3>
                  <a
                    href="tel:+32475619395"
                    class="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +32 475 61 93 95
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Location</h3>
                  <p class="text-gray-600 dark:text-gray-400">Belgium</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="font-semibold mb-4">Find me online</h3>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/BenVaesPXL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ben-vaes-192821357"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Availability Status -->
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-6">Send me a message</h3>

            <form
              action="https://formspree.io/f/mblonnrd"
              method="POST"
              @submit.prevent="submitForm"
              class="space-y-6"
            >
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-medium mb-2"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="form.name"
                  required
                  :class="[
                    'w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-colors',
                    'border border-gray-300 dark:border-gray-600 focus:ring-indigo-500',
                  ]"
                  placeholder="Your full name"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-medium mb-2"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="form.email"
                  required
                  :class="[
                    'w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-colors',
                    'border border-gray-300 dark:border-gray-600 focus:ring-indigo-500',
                  ]"
                  placeholder="your.email@example.com"
                />
              </div>

              <!-- Subject Field -->
              <div>
                <label for="subject" class="block text-sm font-medium mb-2"
                  >Subject</label
                >
                <select
                  id="subject"
                  name="subject"
                  v-model="form.subject"
                  required
                  :class="[
                    'w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-colors',
                    'border border-gray-300 dark:border-gray-600 focus:ring-indigo-500',
                  ]"
                >
                  <option value="">Select a subject</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="project">Project Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-medium mb-2"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  rows="5"
                  required
                  :class="[
                    'w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-vertical',
                    'border border-gray-300 dark:border-gray-600 focus:ring-indigo-500',
                  ]"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800"
              >
                <span class="flex items-center justify-center">
                  <svg
                    v-if="!isSubmitting"
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-5 h-5 mr-2 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ isSubmitting ? "Sending..." : "Send Message" }}
                </span>
              </button>

              <!-- Success Message -->
              <div
                v-if="showSuccessMessage"
                class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
              >
                <div class="flex items-center">
                  <svg
                    class="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-green-700 dark:text-green-400 font-medium"
                    >Message sent successfully!</span
                  >
                </div>
                <p class="text-green-600 dark:text-green-300 text-sm mt-1">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      // Form data
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      // UI state
      isSubmitting: false,
      showSuccessMessage: false,
      fieldErrors: {},
      touchedFields: {},
    };
  },
  methods: {
    // Form validation
    isFieldValid(fieldName) {
      return !this.fieldErrors[fieldName] && this.form[fieldName];
    },

    // Form submission
    async submitForm() {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.fieldErrors = {};
      try {
        // Build FormData for Formspree
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("subject", this.form.subject);
        formData.append("message", this.form.message);

        // Send to Formspree endpoint
        const response = await fetch("https://formspree.io/f/mblonnrd", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          this.showSuccessMessage = true;
          Object.keys(this.form).forEach((key) => {
            this.form[key] = "";
          });
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        } else {
          const data = await response.json();
          if (data.errors) {
            data.errors.forEach((err) => {
              this.fieldErrors[err.field] = err.message;
            });
          }
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
/* Responsive styles handled by Tailwind classes */
</style>
