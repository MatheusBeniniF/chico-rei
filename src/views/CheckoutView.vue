<script setup>
import { ref } from "vue";
import cep from "cep-promise";
import { z } from "zod";
import ContactInfo from "@/components/ContactInfo.vue";
import DeliveryInfo from "@/components/DeliveryInfo.vue";
import PaymentInfo from "@/components/PaymentInfo.vue";
import BagInfo from "@/components/BagInfo.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push("/");
};

const product = ref({
  name: "Produto Lorem",
  price: 19.9,
  quantity: 2,
  img: "https://via.placeholder.com/80",
});

const form = ref({
  email: "",
  phone: "",
  cep: "",
  street: "",
  neighborhood: "",
  city: "",
  state: "",
  number: "",
  cardNumber: "",
  cardHolder: "",
  expiration: "",
  cvc: "",
});

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  street: z.string().min(1, "Campo obrigatório"),
  neighborhood: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
  state: z.string().min(1, "Campo obrigatório"),
  number: z.string().min(1, "Campo obrigatório"),
  cardNumber: z.string().regex(/^\d{16}$/, "Número do cartão inválido"),
  cardHolder: z.string().min(1, "Campo obrigatório"),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, "Formato inválido (MM/AA)"),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC inválido"),
});

const errors = ref({});
const loadingCep = ref(false);
const successMessage = ref(false);

const fetchAddress = async () => {
  if (!form.value.cep.match(/^\d{5}-\d{3}$/)) return;
  loadingCep.value = true;

  setTimeout(async () => {
    try {
      const data = await cep(form.value.cep.replace("-", ""));
      form.value.street = data.street;
      form.value.city = data.city;
      form.value.state = data.state;
      form.value.neighborhood = data.neighborhood;
    } catch (error) {
      console.error(error);
    } finally {
      loadingCep.value = false;
    }
  }, 3000);
};

const updateQuantity = (value) => {
  if (product.value.quantity === 0 && value < 0) return;
  product.value.quantity = value;
};

const submitOrder = () => {
  const result = schema.safeParse(form.value);
  if (!result.success) {
    errors.value = result.error.flatten().fieldErrors;
    return;
  }
  successMessage.value = true;
};
</script>

<template>
  <button
    class="submit-btn"
    @click="goToHome"
  >
    Voltar para a home
  </button>
  <div class="checkout-container">
    <div
      v-if="loadingCep"
      class="loading-overlay"
    >
      <div class="spinner" />
    </div>

    <div class="form-container">
      <h2>Finalização do pedido</h2>

      <ContactInfo
        :form="form"
        :errors="errors" 
      />
      <DeliveryInfo
        :form="form"
        :errors="errors" 
        :fetch-address="fetchAddress"
        :loading-cep="loadingCep" 
      />
      <PaymentInfo
        :form="form"
        :errors="errors" 
      />

      <button
        class="submit-btn"
        @click="submitOrder"
      >
        Fechar pedido
      </button>

      <div 
        v-if="successMessage" 
        class="success-message"
      >
        Pedido finalizado com sucesso!
      </div>
    </div>

    <BagInfo
      :product="product"
      :update-quantity="updateQuantity" 
    />
  </div>
</template>

<style lang="less" src="@/styles/checkout.less"></style>

