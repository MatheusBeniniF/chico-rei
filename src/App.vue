<script setup>
import { faker } from "@faker-js/faker";
import { computed } from "vue";

const products = computed(() =>
  Array.from({ length: 10 }, (_, index) => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: require(`./assets/chico-rei-${index + 1}.jpeg`),
    price: faker.commerce.price(),
  }))
);
</script>


<template>
  <div class="container">
    <h1>Camisetas</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        <div class="content">
          <img :src="product.img" alt="product" class="image" />
          <div class="info">
            <h2>{{ product.name }}</h2>
            <span>{{ product.description }}</span>
            <p>R$ {{ product.price.replace(".", ",") }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
