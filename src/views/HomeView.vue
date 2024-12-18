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
              v-motion
              :initial="{
                opacity: 0,
                x: -100,
              }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: '100',
                  delay: 100,
                },
              }"
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
            <main
              class="w-full lg:w-9/12 p-6 ml-5 overflow-y-auto flex flex-col justify-center"
              preset="slideVisibleLeft"
              :duration="600"
            >
              <div class="mb-4">
                <button
                  class="p-3 text-slate-200 font-serif text-sm bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg mb-10"
                >
                  Hi there! My self Nohan
                </button>
                <h1
                  v-motion
                  :initial="{ opacity: 0, y: -50 }"
                  :enter="{ opacity: 1, y: 0 }"
                  :transition="{ duration: 10, easing: 'ease-in-out' }"
                  class="mb-4 text-lg font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl"
                >
                  I'm a professional <br />
                  <TypingEffect
                    :strings="['Software Developer.', 'Ethical hacker']"
                    :typeSpeed="100"
                    :backSpeed="50"
                    :loop="true"
                    class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 inline-block"
                  />
                </h1>
                <!-- <p class="text-gray-600 dark:text-gray-400 mt-5">
                  As a highly skilled and creative full-stack software
                  developer,
                </p> -->
              </div>

              <!-- About Section -->
              <section class="mb-8">
                <h2
                  class="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
                >
                  Vision Statement
                </h2>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a highly skilled and creative full-stack software
                  developer, my vision is to revolutionize the digital landscape
                  by building innovative, world-changing solutions. With a
                  passion for creativity and a talent for problem-solving, I aim
                  to craft software products that inspire, empower, and drive
                  progress. My mission is to bring groundbreaking product ideas
                  to life and deliver tailored software solutions that address
                  real-world challenges, making a meaningful and lasting impact
                  on the global community.
                </p>
              </section>

              <!-- Buttons Section -->
              <section
                class="flex justify-start space-x-4 mb-8"
                v-motion
                :initial="{
                  y: 100,
                  opacity: 0,
                }"
                :enter="{
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: {
                      delay: 200,
                    },
                    opacity: {
                      duration: 3000,
                    },
                  },
                }"
              >
                <Button
                  as="router-link"
                  label="My Works"
                  to="/"
                  icon="pi pi-objects-column"
                  rounded
                  class="text-lg text-gray-600 hover:text-gray-800 dark:text-white px-8 bg-transparent border-2 border-slate-400"
                />

                <Button
                  type="button"
                  label="Download CV"
                  icon="pi pi-download"
                  rounded
                  class="text-lg text-gray-600 hover:text-gray-800 dark:text-white px-8 bg-transparent border-2 border-slate-400"
                />
              </section>
            </main>
          </div>
        </template>
      </Stars>
    </template>
  </Default>
</template>

<script setup>
import Stars from "@/components/Stars.vue";
import TypingEffect from "@/components/TypingEffect.vue";
import Default from "@/Layouts/Default.vue";
import { Button } from "primevue";
</script>

<style scoped></style>
