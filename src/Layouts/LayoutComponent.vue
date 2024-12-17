<template>
    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <!-- Top Navbar -->
      <header>
        <NavBar /> <!-- Replace with your existing Navbar component -->
      </header>
  
      <!-- Main Section -->
      <div class="flex flex-col lg:flex-row flex-1">
        <!-- Left Section: Sidebar -->
        <aside
          class="w-full lg:w-1/3 bg-white dark:bg-gray-800 shadow-md p-6 lg:sticky lg:top-0"
        >
          <div class="text-center">
            <!-- Profile Image -->
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              class="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h2 class="text-2xl font-bold mt-4">John Doe</h2>
            <p class="text-blue-500 font-medium mb-4">Software Developer</p>
          </div>
  
          <!-- Bio -->
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Passionate developer with expertise in Vue.js, Tailwind CSS, and building modern web applications.
          </p>
  
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
        <main class="w-full lg:w-2/3 p-6 overflow-y-auto">
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-blue-500">Welcome to My Portfolio</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
              Explore my work, experience, and services.
            </p>
          </div>
  
          <!-- Example Content -->
          <section>
            <h2 class="text-2xl font-semibold mb-4">About Me</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a software developer with 5 years of experience building scalable and responsive web applications. I specialize in Vue.js, TailwindCSS, and PrimeVue.
            </p>
  
            <h2 class="text-2xl font-semibold mb-4">My Work</h2>
            <ul class="space-y-4">
              <li class="p-4 bg-white dark:bg-gray-800 shadow rounded-md">
                <h3 class="text-lg font-bold">Project 1</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  A Vue.js project showcasing user authentication and dynamic components.
                </p>
              </li>
              <li class="p-4 bg-white dark:bg-gray-800 shadow rounded-md">
                <h3 class="text-lg font-bold">Project 2</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  A responsive e-commerce website built with TailwindCSS and PrimeVue.
                </p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import your Navbar component
  import NavBar from "@/components/NavBar.vue";
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  