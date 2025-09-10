<script setup>
/*
import { ref } from 'vue'
import { useProdutosStore } from '@/stores/produtosStore'

const produtosStore = useProdutosStore()

const nome = ref('')
const preco = ref('')
const categoria = ref('agro1') // default

function enviarProduto() {
  const produto = {
    nome: nome.value,
    preco: parseFloat(preco.value)
  }

  produtosStore.adicionarProduto(produto, categoria.value)

  // Limpar formulário
  nome.value = ''
  preco.value = ''
  categoria.value = 'agro1'
}
</script>

<template>
  <div>
    <h2>Adicionar Produto</h2>
    <form @submit.prevent="enviarProduto">
      <label>
        Nome:
        <input v-model="nome" required />
      </label>
      <br /><br />

      <label>
        Preço:
        <input type="number" v-model="preco" required />
      </label>
      <br /><br />

      <label>
        Categoria:
        <select v-model="categoria">
          <option value="agro1">Agro 1</option>
          <option value="agro2">Agro 2</option>
          <option value="agro3">Agro3</option>
        </select>
      </label>
      <br /><br />

      <button type="submit">Adicionar</button>
    </form>

    <h3>Debug Arrays:</h3>
    <pre>{{ produtosStore.$state }}</pre>
  </div>*/
</template>