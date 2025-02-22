<script setup>
import { faker } from "@faker-js/faker";
import { computed } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { useRouter } from "vue-router";
import { useIsMobile } from "@/hooks/useIsMobile";
import chicoRei2 from "../assets/chico-rei-2.jpeg";
import chicoRei4 from "../assets/chico-rei-4.jpeg";
import chicoRei6 from "../assets/chico-rei-6.jpeg";
import chicoRei7 from "../assets/chico-rei-7.jpeg";
import chicoRei8 from "../assets/chico-rei-8.jpeg";
import chicoRei10 from "../assets/chico-rei-10.jpeg";
import FilterComponent from "@/components/FilterComponent.vue";

const router = useRouter();
const { isMobile } = useIsMobile();

const images = [
  chicoRei2,
  chicoRei4,
  chicoRei6,
  chicoRei7,
  chicoRei8,
  chicoRei10,
];

const products = computed(() =>
  Array.from({ length: 6 }, (_, index) => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: images[index],
    price: faker.commerce.price(),
  }))
);

const goToCheckout = () => {
  router.push("/checkout");
};
</script>

<template>
  <div class="container">
    <div class="header">
      <MenuComponent />
      <h1>Camisetas</h1>
      <button 
        class="cart-button" 
        @click="goToCheckout"
      >
        🛒 {{ isMobile ? "" : "Ir para o Carrinho" }}
      </button>
    </div>
    <FilterComponent />
    <ul>
      <li 
        v-for="product in products" 
        :key="product.name"
      >
        <div class="content">
          <img
            :src="product.img" 
            alt="product"
            class="image"
          >
          <div class="info">
            <h2>{{ product.name }}</h2>
            <p class="description">
              {{ product.description }}
            </p>
            <p>R$ {{ product.price.replace(".", ",") }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" src="@/styles/home.less"></style>
