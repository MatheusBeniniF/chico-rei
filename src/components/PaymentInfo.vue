<template>
  <div>
    <h3>Informações de pagamento</h3>
    <input
      v-model="localForm.cardNumber"
      placeholder="Número do cartão"
    >
    <span
      v-if="errors.cardNumber"
      class="error"
    >{{
      errors.cardNumber[0]
    }}</span>

    <input
      v-model="localForm.cardHolder"
      placeholder="Titular do cartão"
    >
    <span
      v-if="errors.cardHolder"
      class="error"
    >{{
      errors.cardHolder[0]
    }}</span>

    <input
      v-model="localForm.expiration"
      placeholder="Data de vencimento (MM/AA)"
    >
    <span
      v-if="errors.expiration"
      class="error"
    >{{
      errors.expiration[0]
    }}</span>

    <input
      v-model="localForm.cvc"
      placeholder="CVC"
    >
    <span
      v-if="errors.cvc"
      class="error"
    >{{ errors.cvc[0] }}</span>
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
