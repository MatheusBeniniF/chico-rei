<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedOption = ref("all");

const onClick = () => {
  router.push(`/${selectedOption.value === "home" ? "" : selectedOption.value}`);
};
</script>

<template>
  <div class="filter">
    <select v-model="selectedOption" @change="onClick">
      <option :value="'home'">Todas as camisetas</option>
      <option :value="'camisetas-claras'">Camisetas claras</option>
      <option :value="'camisetas-escuras'">Camisetas escuras</option>
    </select>
  </div>
</template>

<style lang="less" src="@/styles/filter.less"></style>
