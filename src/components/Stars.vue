<template>
  <div class="stars-container z-10 h-full lg:h-screen">
    <!-- Background Sky -->
    <div class="sky">
      <!-- Centered Text -->
      <div class="content-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <slot name="content"> </slot>
      </div>

      <!-- Stars Layers -->
      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>

      <!-- Shooting Stars -->
      <div class="shooting-stars"></div>
    </div>
  </div>
</template>

<script setup>
// No JavaScript logic is needed for this component
</script>

<style lang="scss" scoped>
$starFieldWidth: 2560;
$starFieldHeight: 2560;
$starStartOffset: 600px;

$starOneScrollDuration: 100s;
$starTwoScrollDuration: 125s;
$starThreeScrollDuration: 175s;

$numStarOneStars: 1700;
$numStarTwoStars: 700;
$numStarThreeStars: 200;
$numShootingStars: 10;

// General Page Style

// Container Setup
.stars-container {
  display: block;
  position: relative;
  width: 100%;
  // height: 94vh; // Full viewport height
  background: linear-gradient(to bottom, #020107 0%, #201b46 100%);

  // .content-container {
  //   color: #fff;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   font-size: 20px;
  //   font-family: sans-serif;
  //   font-weight: bold;
  // }
}

// Function to Generate Star Positions
@function create-stars($n) {
  $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";

  @for $i from 2 through $n {
    $stars: "#{$stars}, #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
  }

  @return unquote($stars);
}

// Star Mixin
@mixin star-template($numStars, $starSize, $scrollSpeed) {
  z-index: 10;
  width: $starSize;
  height: $starSize;
  border-radius: 50%;
  background: transparent;
  box-shadow: create-stars($numStars);
  animation: animStar $scrollSpeed linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: -$starStartOffset;
    width: $starSize;
    height: $starSize;
    border-radius: 50%;
    background: transparent;
    box-shadow: create-stars($numStars);
  }
}

// Shooting Star Mixin
@mixin shooting-star-template($numStars, $starSize, $speed) {
  z-index: 10;
  width: $starSize;
  height: $starSize + 80px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  animation: animShootingStar $speed linear infinite;
}

// Stars Layers
.stars {
  @include star-template($numStarOneStars, 1px, $starOneScrollDuration);
}
.stars1 {
  @include star-template($numStarTwoStars, 2px, $starTwoScrollDuration);
}
.stars2 {
  @include star-template($numStarThreeStars, 3px, $starThreeScrollDuration);
}
.shooting-stars {
  @include shooting-star-template($numShootingStars, 5px, 10s);
}

// Star Animation
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-#{$starFieldHeight}px)
      translateX(-#{$starFieldWidth}px);
  }
}

// Shooting Star Animation
@keyframes animShootingStar {
  from {
    transform: translateY(0px) translateX(0px) rotate(-45deg);
    opacity: 1;
    height: 5px;
  }
  to {
    transform: translateY(-#{$starFieldHeight}px)
      translateX(-#{$starFieldWidth}px) rotate(-45deg);
    opacity: 1;
    height: 800px;
  }
}
</style>
