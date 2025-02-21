<template>
    <div>
      <h3>Informações de contato</h3>
      <input v-model="form.email" placeholder="E-mail" />
      <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
  
      <input v-model="form.phone" placeholder="Telefone" />
      <span class="error" v-if="errors.phone">{{ errors.phone[0] }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps(["form", "errors"]);
  </script>
  