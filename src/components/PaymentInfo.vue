<template>
    <div>
      <h3>Informações de pagamento</h3>
      <input v-model="form.cardNumber" placeholder="Número do cartão" />
      <span class="error" v-if="errors.cardNumber">{{ errors.cardNumber[0] }}</span>
  
      <input v-model="form.cardHolder" placeholder="Titular do cartão" />
      <span class="error" v-if="errors.cardHolder">{{ errors.cardHolder[0] }}</span>
  
      <input v-model="form.expiration" placeholder="Data de vencimento (MM/AA)" />
      <span class="error" v-if="errors.expiration">{{ errors.expiration[0] }}</span>
  
      <input v-model="form.cvc" placeholder="CVC" />
      <span class="error" v-if="errors.cvc">{{ errors.cvc[0] }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps(["form", "errors"]);
  </script>
  