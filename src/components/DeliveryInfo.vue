<template>
    <div>
      <h3>Informações de entrega</h3>
      <div class="cep-container">
        <input v-model="form.cep" placeholder="CEP" @blur="fetchAddress" />
        <button @click="fetchAddress" :disabled="loadingCep">🔍</button>
      </div>
      <span class="error" v-if="errors.cep">{{ errors.cep[0] }}</span>
  
      <input v-model="form.street" placeholder="Rua" />
      <span class="error" v-if="errors.street">{{ errors.street[0] }}</span>
  
      <input v-model="form.neighborhood" placeholder="Bairro" />
      <span class="error" v-if="errors.neighborhood">{{ errors.neighborhood[0] }}</span>
  
      <input v-model="form.city" placeholder="Cidade" />
      <span class="error" v-if="errors.city">{{ errors.city[0] }}</span>
  
      <input v-model="form.state" placeholder="Estado" />
      <span class="error" v-if="errors.state">{{ errors.state[0] }}</span>
  
      <input v-model="form.number" placeholder="Número" />
      <span class="error" v-if="errors.number">{{ errors.number[0] }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps(["form", "errors", "fetchAddress", "loadingCep"]);
  </script>
  