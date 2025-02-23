<script setup>
import chicoRei1 from "../assets/chico-rei-1.jpeg";
import chicoRei3 from "../assets/chico-rei-3.jpeg";
import chicoRei5 from "../assets/chico-rei-5.jpeg";
import chicoRei9 from "../assets/chico-rei-9.jpeg";
import CamisetasComponent from "@/components/CamisetasComponent.vue";

const images = [
  chicoRei1,
  chicoRei3,
  chicoRei5,
  chicoRei9,
];

</script>

<template>
  <CamisetasComponent :images="images" />
</template>
<style lang="less" src="@/styles/home.less"></style>
