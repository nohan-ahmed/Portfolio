<template>
  <div class="">
    <header>
      <slot name="header">
        <NavBar />
      </slot>
    </header>
    <main>
      <slot> </slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
// Import your Navbar component
import NavBar from "@/components/NavBar.vue";
</script>

<style>
/* Add any custom styles if needed */
</style>
