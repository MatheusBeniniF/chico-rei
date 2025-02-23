<script setup>
import chicoRei1 from "../assets/chico-rei-1.jpeg";
import chicoRei2 from "../assets/chico-rei-2.jpeg";
import chicoRei3 from "../assets/chico-rei-3.jpeg";
import chicoRei4 from "../assets/chico-rei-4.jpeg";
import chicoRei5 from "../assets/chico-rei-5.jpeg";
import chicoRei6 from "../assets/chico-rei-6.jpeg";
import chicoRei7 from "../assets/chico-rei-7.jpeg";
import chicoRei8 from "../assets/chico-rei-8.jpeg";
import chicoRei9 from "../assets/chico-rei-9.jpeg";
import chicoRei10 from "../assets/chico-rei-10.jpeg";
import CamisetasComponent from "@/components/CamisetasComponent.vue";

const images = [
  chicoRei1,
  chicoRei2,
  chicoRei3,
  chicoRei4,
  chicoRei5,
  chicoRei6,
  chicoRei7,
  chicoRei8,
  chicoRei9,
  chicoRei10,
];
</script>

<template>
  <CamisetasComponent :images="images" />
</template>
<style lang="less" src="@/styles/home.less"></style>
