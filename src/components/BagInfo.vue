<template>
  <div class="cart-container">
    <h3>Sua sacola</h3>
    <div class="cart-item">
      <img 
        :src="product.img"
        alt="Produto"
      >
      <div class="cart-info">
        <p>{{ product.name }}</p>
        <p>R$ {{ product.price.toFixed(2).replace(".", ",") }}</p>
        <label class="label-quantity">Quantidade</label>
        <div class="quantity">
          <button 
            class="change-quantity" 
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
            @click="updateQuantity(product.quantity + 1)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
