<template>
  <div>
    <h3>Informações de entrega</h3>
    <div class="cep-container">
      <input
        v-model="localForm.cep"
        placeholder="CEP"
        @blur="fetchAddress"
      >
      <button
        :disabled="loadingCep"
        @click="fetchAddress"
      >
        🔍
      </button>
    </div>
    <span
      v-if="errors.cep"
      class="error"
    >{{ errors.cep[0] }}</span>

    <input
      v-model="localForm.street"
      placeholder="Rua"
    >
    <span
      v-if="errors.street"
      class="error"
    >{{ errors.street[0] }}</span>

    <input
      v-model="localForm.neighborhood"
      placeholder="Bairro"
    >
    <span
      v-if="errors.neighborhood"
      class="error"
    >{{ errors.neighborhood[0] }}</span>

    <input
      v-model="localForm.city"
      placeholder="Cidade"
    >
    <span
      v-if="errors.city"
      class="error"
    >{{ errors.city[0] }}</span>

    <input
      v-model="localForm.state"
      placeholder="Estado"
    >
    <span
      v-if="errors.state"
      class="error"
    >{{ errors.state[0] }}</span>

    <input
      v-model="localForm.number"
      placeholder="Número"
    >
    <span
      v-if="errors.number"
      class="error"
    >{{ errors.number[0] }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
    required: true,
  },
  fetchAddress: {
    type: Function,
    required: true,
  },
  loadingCep: {
    type: Boolean,
    required: true,
  }
});

const localForm = ref({ ...props.form });

const emit = defineEmits(["update:form"]);

watch(
  localForm,
  (newValue) => {
    emit("update:form", newValue);
  },
  { deep: true }
);
</script>