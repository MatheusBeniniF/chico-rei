<script setup>
import App from "@/assets/app.png";
import ChatIcon from "@/svgs/chat.svg";
import GroupIcon from "@/svgs/group.svg";
import BrowserIcon from "@/svgs/browser.svg";
import DesignIcon from "@/svgs/design.svg";
import PhoneIcon from "@/svgs/phone.svg";
import RetinaIcon from "@/svgs/retina.svg";
</script>
<template>
  <div class="container-desafio">
    <div class="content-desafio">
      <h4>APP FEATURES</h4>
      <h7>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit <br />
        vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
        tincidunt rhoncus, <br />
        ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,
        feugiat.
      </h7>
    </div>

    <div class="content-desafio top-info">
      <img :src="ChatIcon" alt="Ícone de Chat" class="svg" />
      <h5>FULL FREE CHAT</h5>
      <h7>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit.
      </h7>
    </div>
    <div class="content-desafio-img">
      <div class="content-desafio-side">
        <div>
          <div>
            <img :src="BrowserIcon" alt="Ícone de Navegador" class="svg" />
          </div>
          <h5 class="right-position">UNLIMITER FEATURES</h5>
          <h7 class="right-position">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.</h7>
        </div>
        <div>
          <div>
            <img :src="DesignIcon" alt="Ícone de Design" class="svg" />
          </div>
          <h5 class="right-position">AWESOME UI DESIGN</h5>
          <h7 class="right-position">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.</h7>
        </div>
      </div>

      <img class="app" :src="App" alt="Imagem de fundo" />

      <div class="content-desafio-side">
        <div>
          <img :src="PhoneIcon" alt="Ícone de Telefone" class="svg" />
          <h5>ISO & ANDROID VERSION</h5>
          <h7>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.</h7>
        </div>
        <div>
          <img :src="RetinaIcon" alt="Ícone de Retina" class="svg" />
          <h5>RETINA READY GRAPHICS</h5>
          <h7>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.</h7>
        </div>
      </div>
    </div>

    <div class="content-desafio">
      <img :src="GroupIcon" alt="Ícone de Grupo" class="svg" />
      <h4>24/7 SUPPORT BY REAL PEOPLE</h4>
      <h7>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h7>
    </div>
  </div>
</template>

<style lang="less" src="@/styles/desafio.less"></style>
