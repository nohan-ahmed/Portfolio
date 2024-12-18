<template>
  <div class="typed-container">
    <span ref="typedElement" class="typed-text"></span>
    <span class="typed-cursor">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Typed from 'typed.js';

// Props
const props = defineProps({
  strings: {
    type: Array,
    required: true,
  },
  typeSpeed: {
    type: Number,
    default: 50,
  },
  backSpeed: {
    type: Number,
    default: 25,
  },
  loop: {
    type: Boolean,
    default: true,
  },
});

const typedElement = ref(null);
let typedInstance;

// Initialize Typed.js
const initializeTyped = () => {
  if (typedInstance) {
    typedInstance.destroy(); // Clean up existing instance if re-initialized
  }

  typedInstance = new Typed(typedElement.value, {
    strings: props.strings,
    typeSpeed: props.typeSpeed,
    backSpeed: props.backSpeed,
    loop: props.loop,
    cursorChar: '', // Disable the default cursor
  });
};

// Lifecycle Hooks
onMounted(() => {
  initializeTyped();
});

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy(); // Clean up Typed.js instance on unmount
  }
});

// Watch for changes in `strings` to reinitialize
watch(() => props.strings, () => {
  initializeTyped();
});
</script>

<style scoped>

.typed-cursor {
  /* font-size: 1.5rem; */
  font-weight: bold;
  color: #fff;
  animation: blink 0.7s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
