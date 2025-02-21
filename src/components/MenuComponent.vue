<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div>
    <div class="menu-icon" @click="toggleMenu">
      <span v-if="!isMenuOpen">&#9776;</span>
    </div>

    <div :class="['menu', { 'menu-open': isMenuOpen }]">
      <div class="menu-header">
        <span>Menu</span>
        <span v-if="isMenuOpen" class="close-icon" @click="toggleMenu"
          >&#10006;</span
        >
      </div>
      <div class="menu-content"></div>
    </div>
  </div>
</template>

<style lang="less" src="@/styles/menu.less"></style>
