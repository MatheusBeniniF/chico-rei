<script setup>
import chicoRei1 from "../assets/chico-rei-1.jpeg";

defineProps({
  product: {
    type: Object,
    required: true,
  },
  updateQuantity: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <div class="cart-container">
    <h3>Sua sacola</h3>
    <div class="cart-item">
      <img 
        :src="chicoRei1"
        alt="Produto"
      >
      <div class="cart-info">
        <div>
          <p>{{ product.name }}</p>
          <p>R$ {{ product.price.toFixed(2).replace(".", ",") }}</p>
        </div>
        <div>
        <label class="label-quantity">Quantidade</label>
        <div class="quantity">
          <button 
            class="change-quantity"
            type="button"
            @click="updateQuantity(product.quantity - 1)"
          >
            -
          </button>
          <input 
            :value="product.quantity" 
            @change="(e) => updateQuantity(e.target.value)"
          >
          <button 
            class="change-quantity" 
            type="button"
            @click="updateQuantity(product.quantity + 1)"
          >
            +
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

