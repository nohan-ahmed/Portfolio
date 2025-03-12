<template>
  <Default>
    <template #default>
      <!-- Full Container -->
      <div
        class="min-h-screen bg-gradient-to-br from-black to-gray-900 text-gray-100 flex pt-52 justify-center px-4"
      >
        <div class="w-full max-w-6xl mx-auto">
          <div
            class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
          >
            <!-- Left Section: Professional Image with Decorations -->
            <div
              class="relative w-full lg:w-1/2 flex justify-center items-center"
            >
              <div
                class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl"
              >
                <!-- Profile Image -->
                <img
                  src="https://mixdesign.club/themeforest/braxton/img/avatars/1024x1024_a04.webp"
                  alt="Profile"
                  class="w-full h-full object-cover"
                />
                <!-- Decorative Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                ></div>
              </div>

              <!-- Decorative Shapes -->
              <div
                class="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-yellow-400 opacity-60 rotate-12"
              ></div>
              <div
                class="absolute bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500 opacity-30 animate-pulse"
              ></div>
            </div>

            <!-- Right Section: Text and Stats -->
            <div class="w-full lg:w-1/2">
              <!-- Heading -->
              <div class="text-left mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold mb-4">About me</h1>
                <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
                  With over 12 years of dedicated focus on designing products
                  that achieve business goals, I have established myself as a
                  trusted professional in the industry.
                </p>
              </div>

              <!-- Stats Section -->
              <div
                class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 text-center"
              >
                <!-- Years of Experience -->
                <div>
                  <h2
                    class="text-3xl sm:text-4xl font-extrabold text-yellow-400"
                  >
                    8+
                  </h2>
                  <p class="text-gray-400 mt-2 text-sm">Years of Experience</p>
                </div>

                <!-- Complete Projects -->
                <div>
                  <h2
                    class="text-3xl sm:text-4xl font-extrabold text-yellow-400"
                  >
                    10k
                  </h2>
                  <p class="text-gray-400 mt-2 text-sm">Complete Projects</p>
                </div>

                <!-- Client Satisfactions -->
                <div>
                  <h2
                    class="text-3xl sm:text-4xl font-extrabold text-yellow-400"
                  >
                    20+
                  </h2>
                  <p class="text-gray-400 mt-2 text-sm">Client Satisfactions</p>
                </div>

                <!-- Cups of Coffee -->
                <div>
                  <h2
                    class="text-3xl sm:text-4xl font-extrabold text-yellow-400"
                  >
                    6+
                  </h2>
                  <p class="text-gray-400 mt-2 text-sm">Cups of Coffee</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Resume Section -->
          <div class="text-center mt-24">
            <h2 class="text-5xl font-bold text-gray-100 relative inline-block">
              <span class="text-yellow-400">Resume</span>
              <span
                class="absolute -bottom-1 left-0 h-1 w-full bg-yellow-500"
              ></span>
            </h2>
          </div>

          <!-- Resume Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <!-- Education Section -->
            <div>
              <h3 class="text-3xl font-semibold mb-6 flex items-center">
                <i class="pi pi-briefcase text-yellow-400 mr-2"></i>
                Education
              </h3>
              <div class="space-y-8 border-l-2 border-gray-700 pl-6">
                <div>
                  <h4 class="text-xl font-semibold text-yellow-400">
                    Master of Computer Science
                  </h4>
                  <span class="text-sm text-gray-400">2015 - 2016</span>
                  <p class="text-gray-300 font-semibold mt-1">
                    University of XYZ
                  </p>
                  <p class="text-gray-400 text-sm mt-2">
                    Specialized in advanced algorithms, data science, and
                    AI-driven UX design.
                  </p>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-yellow-400">
                    Bachelor of Computer Science
                  </h4>
                  <span class="text-sm text-gray-400">2010 - 2014</span>
                  <p class="text-gray-300 font-semibold mt-1">
                    University of ABC
                  </p>
                  <p class="text-gray-400 text-sm mt-2">
                    Focused on software engineering, UI/UX principles, and
                    business applications.
                  </p>
                </div>
              </div>
            </div>

            <!-- Experience Section -->
            <div>
              <h3 class="text-3xl font-semibold mb-6 flex items-center">
                <i class="pi pi-id-card text-yellow-400 mr-2"></i>
                Experience
              </h3>
              <div class="space-y-8 border-l-2 border-gray-700 pl-6">
                <div>
                  <h4 class="text-xl font-semibold text-yellow-400">
                    Senior UX/UI Designer
                  </h4>
                  <span class="text-sm text-gray-400">Jan 2020 - Present</span>
                  <p class="text-gray-300 font-semibold mt-1">
                    Bergnaum, Hills and Howe
                  </p>
                  <p class="text-gray-400 text-sm mt-2">
                    Led the UX team, driving innovative product experiences and
                    **user engagement**.
                  </p>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-yellow-400">
                    Product Designer
                  </h4>
                  <span class="text-sm text-gray-400">Jan 2016 - Dec 2019</span>
                  <p class="text-gray-300 font-semibold mt-1">
                    Langosh, Sipes and Raynor
                  </p>
                  <p class="text-gray-400 text-sm mt-2">
                    Designed **award-winning** products that transformed user
                    experiences across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Default>
</template>

<script setup>
import Default from "@/Layouts/Default.vue";

/* Composition API - No logic needed here for static content */
</script>

<style scoped>
/* Tailwind handles styling; scoped CSS is not required */
</style>
