<script setup>
import { ref } from "vue";
import cep from "cep-promise";
import { z } from "zod";
import { useRouter } from "vue-router";
import BagInfo from "@/components/BagInfo.vue";

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
  phone: z.string().regex(/^\d{10,11}$/, "Telefone inválido"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  street: z.string().min(1, "Campo obrigatório"),
  neighborhood: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
  state: z.string().min(1, "Campo obrigatório"),
  number: z.string().min(1, "Campo obrigatório"),
  cardNumber: z.string().regex(/^\d{16}$/, "Número do cartão inválido"),
  cardHolder: z.string().min(1, "Campo obrigatório"),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, "Formato inválido (MM/AA)"),
  cvc: z.number(/^\d{3,4}$/, "CVC inválido"),
});

const errors = ref({});
const loadingCep = ref(false);
const successMessage = ref(false);

const fetchAddress = async (cepValue) => {
  loadingCep.value = true;

  setTimeout(async () => {
    try {
      const data = await cep(cepValue.replace("-", ""));
      form.value.street = data.street;
      form.value.city = data.city;
      form.value.state = data.state;
      form.value.neighborhood = data.neighborhood;
    } catch (error) {
      console.error(error);
    } finally {
      loadingCep.value = false;
    }
  }, 2000);
};

const updateQuantity = (value) => {
  if (product.value.quantity === 0 && value < 0) return;
  product.value.quantity = value;
};

const verifyCardDate = () => {
  const now = new Date();
  const expirationDate = new Date(form.value.expiration);
  if (expirationDate < now) {
    errors.value.expiration = ["Data de vencimento inválida"];
  } else {
    errors.value.expiration = undefined;
  }
};

const submitOrder = (e) => {  
  e.preventDefault();
  
  const result = schema.safeParse(form.value);
  if (!result.success) {
    errors.value = result.error.flatten().fieldErrors;
    return;
  }
  successMessage.value = true;
};
</script>

<template>
  <form @submit="submitOrder">
    <button class="back-home" @click="goToHome">
      Voltar para a home
    </button>
    <div class="checkout-container">
      <div v-if="loadingCep" class="loading-overlay">
        <div class="spinner"></div>
      </div>
      <div class="form-container">
        <div v-if="successMessage" class="success-message">
            Pedido finalizado com sucesso!
        </div>
        <h2>Finalização do pedido</h2>

        <!-- Informações de Contato -->
        <h3>Informações de contato</h3>
        <div>
          <label for="email">E-mail</label>
          <input v-model="form.email">
          <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
        </div>
        <div>
          <label for="phone">Telefone</label>
          <input v-model="form.phone">
          <span v-if="errors.phone" class="error">{{ errors.phone[0] }}</span>
        </div>

        <!-- Informações de Entrega -->
        <h3>Informações de entrega</h3>
        <div>
          <label for="cep">CEP</label>
          <div class="cep-container">
            <input v-model="form.cep">
            <button :disabled="loadingCep" @click="fetchAddress(form.cep)" type="button">🔍</button>
          </div>
        </div>
        <span v-if="errors.cep" class="error">{{ errors.cep[0] }}</span>

        <div>
          <label for="street">Rua</label>
          <input v-model="form.street">
          <span v-if="errors.street" class="error">{{ errors.street[0] }}</span>
        </div>

        <div class="side-by-side">
          <div class="side-1">
            <label for="city">Cidade</label>
            <input v-model="form.city">
            <span v-if="errors.city" class="error">{{ errors.city[0] }}</span>
          </div>
          <div class="side-2">
            <label for="neighborhood">Bairro</label>
            <input v-model="form.neighborhood">
            <span v-if="errors.neighborhood" class="error">{{ errors.neighborhood[0] }}</span>
          </div>
        </div>

        <div class="side-by-side">
          <div class="side-2">
            <label for="number">Número</label>
            <input v-model="form.number">
            <span v-if="errors.number" class="error">{{ errors.number[0] }}</span>
          </div>
          <div class="side-1">
            <label for="state">Estado</label>
            <input v-model="form.state">
            <span v-if="errors.state" class="error">{{ errors.state[0] }}</span>
          </div>
        </div>

        <!-- Informações de Pagamento -->
        <h3>Informações de pagamento</h3>
        <div>
          <label for="cardNumber">Número do cartão</label>
          <input v-model="form.cardNumber" />
          <span v-if="errors.cardNumber" class="error">
            {{ errors.cardNumber[0] }}
          </span>
        </div>

        <div>
          <label for="cardHolder">Titular do cartão</label>
          <input v-model="form.cardHolder" />
          <span v-if="errors.cardHolder" class="error">
            {{ errors.cardHolder[0] }}
          </span>
        </div>
        
        <div class="side-by-side">
          <div class="side-2">
            <label for="expiration">Data de vencimento</label>
            <input v-model="form.expiration" @change="verifyCardDate" />
            <span v-if="errors.expiration" class="error">
              {{ errors.expiration[0] }}
            </span>
          </div>
          <div class="side-1">
            <label for="cvc">CVC</label>
            <input v-model="form.cvc" type="number" pattern="[1-9]{3}" maxlength="3" />
            <span v-if="errors.cvc" class="error">{{ errors.cvc[0] }}</span>
          </div>
        </div>

        <button class="submit-btn" type="submit">
          Fechar pedido
        </button>
      </div>

      <BagInfo :product="product" :update-quantity="updateQuantity" />
    </div>
  </form>
</template>

<style lang="less" src="@/styles/checkout.less"></style>
