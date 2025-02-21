<template>
  <div>
    <h3>Informações de contato</h3>
    <input
      v-model="localForm.email"
      placeholder="E-mail"
    >
    <span
      v-if="errors.email"
      class="error"
    >{{ errors.email[0] }}</span>

    <input
      v-model="localForm.phone"
      placeholder="Telefone"
    >
    <span
      v-if="errors.phone"
      class="error"
    >{{ errors.phone[0] }}</span>
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