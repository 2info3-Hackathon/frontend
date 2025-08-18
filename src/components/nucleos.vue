<script setup>
import App from '@/App.vue';
import { useRouter } from 'vue-router'

const router = useRouter()


function irParaComissao(){
  router.push('/comissao')
}
</script>

<template>
  <section class="img">
    <img src="/public/imagem/Rectangle 43.png" alt="imagem-if" height="900" width="1500">
  </section>
  <section>
    <div>
      <h1>Conheça nosso Núcleos</h1>
       <button class="comissao" @click="irParaComissao">Comissão</button>
    </div>
  </section>

</template>

<style scoped>


</style>