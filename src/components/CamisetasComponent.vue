<script setup>
import { faker } from "@faker-js/faker";
import { computed } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { useRouter } from "vue-router";
import { useIsMobile } from "@/hooks/useIsMobile";
import FilterComponent from "@/components/FilterComponent.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const router = useRouter();
const { isMobile } = useIsMobile();

const products = computed(() =>
  Array.from({ length: props.images.length }, (_, index) => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: props.images[index],
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
    <FilterComponent />
    <ul>
      <li v-for="product in products" :key="product.name">
        <div class="content">
          <img :src="product.img" alt="product" class="image" />
          <div class="info">
            <div class="product-info">
              <h2>{{ product.name }}</h2>
              <p class="description">
                {{ product.description }}
              </p>
            </div>
            <p>R$ {{ product.price.replace(".", ",") }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" src="@/styles/home.less"></style>
