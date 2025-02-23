<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const selectedOption = ref(route.query.filter || "home");

const onClick = () => {
  router.push({
    path: `/${selectedOption.value === "home" ? "" : selectedOption.value}`,
    query: { filter: selectedOption.value },
  });
};

watch(
  () => route.query.filter,
  (newFilter) => {
    if (newFilter) {
      selectedOption.value = newFilter;
    }
  }
);
</script>

<template>
  <div class="filter">
    <select v-model="selectedOption" @change="onClick">
      <option value="home">Todas as camisetas</option>
      <option value="camisetas-claras">Camisetas claras</option>
      <option value="camisetas-escuras">Camisetas escuras</option>
    </select>
  </div>
</template>

<style lang="less" src="@/styles/filter.less"></style>
