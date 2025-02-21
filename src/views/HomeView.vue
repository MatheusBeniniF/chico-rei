<script setup>
import { faker } from "@faker-js/faker";
import { computed } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { useRouter } from "vue-router";
import { useIsMobile } from "@/hooks/useIsMobile";

const router = useRouter();
const { isMobile } = useIsMobile();

const products = computed(() =>
  Array.from({ length: 10 }, (_, index) => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: require(`../assets/chico-rei-${index + 1}.jpeg`),
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
      <button class="cart-button" @click="goToCheckout">
        🛒 {{ isMobile ? "" : "Ir para o Carrinho" }}
      </button>
    </div>
    <ul>
      <li v-for="product in products" :key="product.name">
        <div class="content">
          <img :src="product.img" alt="product" class="image" />
          <div class="info">
            <h2>{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
            <p>R$ {{ product.price.replace(".", ",") }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
