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

<template>
  <div class="container">
    <h3>Informações de pagamento</h3>

    <div>
      <label for="cardNumber">Número do cartão</label>
      <input v-model="localForm.cardNumber" type="number" />
      <span v-if="errors.cardNumber" class="error">
        {{ errors.cardNumber[0] }}
      </span>
    </div>

    <div>
      <label for="cardHolder">Titular do cartão</label>
      <input v-model="localForm.cardHolder" />
      <span v-if="errors.cardHolder" class="error">
        {{ errors.cardHolder[0] }}
      </span>
    </div>
      
    <div class="side-by-side">
      <div class="side-2">
        <label for="expiration">Data de vencimento</label>
        <input v-model="localForm.expiration" />
        <span v-if="errors.expiration" class="error">
          {{ errors.expiration[0] }}
        </span>
      </div>
      <div class="side-1">
        <label for="cvc">CVC</label>
        <input v-model="localForm.cvc" type="number" />
        <span v-if="errors.cvc" class="error">{{ errors.cvc[0] }}</span>
      </div>
    </div>
  </div>
</template>
