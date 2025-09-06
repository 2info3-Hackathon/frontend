<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'

const produtosStore = useProdutosStore()
const produtosAgro3 = produtosStore.getProdutosAgro3

const router = useRouter()

function voltar() {
    router.push('/')
}
</script>
<template>

    <ul>
        <li v-for="produto in produtosAgro3" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtoAgro3" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in produtoAgro3" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>

        </li>
      </ul>
   <button class="turmas" @click="voltar">Voltar</button>
</template>
