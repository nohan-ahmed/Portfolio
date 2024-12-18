<template>
  <Default>
    <template #default>
      <Stars>
        <template #content>
          <!-- Main Section -->
          <div class="flex flex-col lg:flex-row flex-1">
            <!-- Left Section: Sidebar -->
            <aside
              class="w-full lg:w-3/12 bg-slate-300 dark:bg-gray-800 shadow-md p-6 lg:sticky lg:top-0 rounded-2xl"
            >
              <div class="text-center z-20">
                <!-- Profile Image -->
                <img
                  src="https://mixdesign.club/themeforest/braxton/img/avatars/1024x1024_a04.webp"
                  alt="Profile"
                  class="w-h-36 h-36 mx-auto rounded-full border-1 border-blue-500 shadow-lg"
                />
                <h2 class="text-2xl font-bold mt-4">John Doe</h2>
                <p class="text-blue-500 font-medium mb-4">Software Developer</p>
              </div>

              <!-- Bio -->
              <p
                class="text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Passionate full-stack developer with expertise in Python,
                Django, DRF, Vue.js, Tailwind CSS, and building modern, scalable
                web applications. Skilled in SQL, PostgreSQL, Redis, Appwrite,
                AWS, and Docker for robust backend solutions and seamless
                deployments.
              </p>

              <!-- Origin -->
              <div
                class="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 my-10"
              >
                <i class="pi pi-home"></i>
                <span>New York, USA</span>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center space-x-4 mt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  class="text-gray-600 hover:text-gray-800 dark:hover:text-white"
                >
                  <i class="pi pi-github text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-400"
                >
                  <i class="pi pi-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  class="text-blue-400 hover:text-blue-300"
                >
                  <i class="pi pi-twitter text-2xl"></i>
                </a>
              </div>
            </aside>

            <!-- Right Section: Main Content -->
            <main class="w-full lg:w-9/12 p-6 ml-5 overflow-y-auto">
              <div class="mb-6">
                <h1 class="mb-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl">
                  I'm a professional <br>
                  <TypingEffect
                    :strings="[
                      'Software Developer.',
                      'Ethical hacker',
                    ]"
                    :typeSpeed="100"
                    :backSpeed="50"
                    :loop="true"
                    class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 inline-block"
                  />
                </h1>
                <!-- <p class="text-gray-600 dark:text-gray-400 mt-2">
                  Explore my work, experience, and services.
                </p> -->
              </div>

              <!-- Example Content -->
              <section>
                <h2 class="text-2xl font-semibold mb-4">About Me</h2>
                <p
                  class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                >
                  I am a software developer with 5 years of experience building
                  scalable and responsive web applications. I specialize in
                  Vue.js, TailwindCSS, and PrimeVue.
                </p>

                <!-- optional section -->
                <!-- <h2 class="text-2xl font-semibold mb-4">My Work</h2>
                <ul class="space-y-4">
                  <li class="p-4 bg-white dark:bg-gray-800 shadow rounded-md">
                    <h3 class="text-lg font-bold">Project 1</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      A Vue.js project showcasing user authentication and
                      dynamic components.
                    </p>
                  </li>
                  <li class="p-4 bg-white dark:bg-gray-800 shadow rounded-md">
                    <h3 class="text-lg font-bold">Project 2</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      A responsive e-commerce website built with TailwindCSS and
                      PrimeVue.
                    </p>
                  </li>
                </ul> -->
              </section>
            </main>
          </div>
        </template>
      </Stars>
    </template>
  </Default>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Stars from "./components/Stars.vue";
import TypingEffect from "./components/TypingEffect.vue";
import Default from "./Layouts/Default.vue";
import { PrimeIcons } from "@primevue/core/api";
</script>

<style scoped></style>
