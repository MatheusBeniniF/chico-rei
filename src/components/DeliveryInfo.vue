<template>
  <div class="container">
    <h3>Informações de entrega</h3>
    <div>
      <label for="cep">CEP</label>
      <div class="cep-container">
        <input v-model="localForm.cep">
        <button :disabled="loadingCep" @click="fetchAddress(localForm.cep)" type="button">
  🔍
        </button>
      </div>
    </div>
    <span v-if="errors.cep" class="error">{{ errors.cep[0] }}</span>

    <div>

      <label for="street">Rua</label>
      <input v-model="localForm.street">
      <span v-if="errors.street" class="error">{{ errors.street[0] }}</span>
    </div>

    <div class="side-by-side">
      <div class="side-1">
        <label for="city">Cidade</label>
        <input v-model="localForm.city">
        <span v-if="errors.city" class="error">{{ errors.city[0] }}</span>
      </div>
      <div class="side-2">
        <label for="neighborhood">Bairro</label>
        <input v-model="localForm.neighborhood">
        <span v-if="errors.neighborhood" class="error">{{ errors.neighborhood[0] }}</span>
      </div>
    </div>
    <div class="side-by-side">
      <div class="side-2">
        <label for="number">Número</label>
        <input v-model="localForm.number">
        <span v-if="errors.number" class="error">{{ errors.number[0] }}</span>

      </div>
      <div class="side-1">
        <label for="state">Estado</label>
        <input v-model="localForm.state">
        <span v-if="errors.state" class="error">{{ errors.state[0] }}</span>
      </div>
    </div>
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