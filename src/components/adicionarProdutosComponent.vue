<script setup>
/*
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'
import { ref } from 'vue'

const produtosStore = useProdutosStore()

const produtosAgro1 = [];
const produtosAgro2 = [];
const produtosAgro3 = [];
const produtosInfo1 = [];
const produtosInfo2 = [];
const produtosInfo3 = [];
const produtosQuimi = [];

 const form = document.getElementById("formProduto")
    const saida = document.getElementById("saida")

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const nome = document.getElementById("nome").value
      const preco = parseFloat(document.getElementById("preco").value)
      const local = document.getElementById("local").value
      const vendedor = document.getElementById("vendedor").value

       const produto = { nome, preco, local, vendedor }

      if (categoria === "agro1") {
        produtosAgro1.push(produto)
      } else if (categoria === "agro2") {
        produtosAgro2.push(produto)
      } else if (categoria === "agro3") {
        produtosAgro3.push(produto)
      } else if (categoria === "info1") {
        produtosInfo1.push(produto)
      } else if (categoria === "info2") {
        produtosInfo2.push(produto)
      } else if (categoria === "info3") {
        produtosInfo3.push(produto)
      } else if (categoria === "quimi") {
        produtosQuimi.push(produto)
      }

      // Exibir arrays no HTML
      saida.textContent = JSON.stringify({
        produtosAgro1,
        produtosAgro2,
        produtosAgro3,
        produtosInfo1,
        produtosInfo2,
        produtosInfo3,
        produtosQuimi,
      }, null, 2)

      form.reset()
    })

</script>

<template>
  <form id="formProduto">
    <label>Nome: <input type="text" id="nome" required></label><br><br>
    <label>Preço: <input type="number" id="preco" required></label><br><br>
     <label>Local: <input type="text" id="local" required></label><br><br>
      <label>Vendedor: <input type="text" id="vendedor" required></label><br><br></br>

    <!-- Select para escolher o array -->
    <label>Categoria:
      <select id="categoria">
        <option value="agro1">Agro 1</option>
        <option value="agro2">Agro 2</option>
        <option value="agro3">Agro 3</option>
        <option value="info1">Info 1</option>
        <option value="info2">Info 2</option>
        <option value="info3">Info 3</option>
        <option value="Quimi">Quimi</option>
      </select>
    </label><br><br>

    <button type="submit">Adicionar</button>
  </form>

  <h3>Arrays</h3>
  <pre id="saida"></pre>

</template>

<style scoped>
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    color: white;
    font-size: calc(1.75vw + 0.390625vw);

    & .local-vendedor{
        display: flex;
        justify-content: space-between;
        padding: 2vw 0;
        width: 70%;
    }

    & input{
        font-size: calc(1.75vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 0 0 0 1vw;
        padding: 10px;
    }

    & textarea{
        font-size: calc(1.75vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 2vw 0;
    }

    & .final {

        text-align: center;

        & input{
            font-size: calc(1.75vw + 0.390625vw);
            border-radius: 5px;
            border: solid black ;
            color: #1B5299;
            margin: 0 3vw 0 0 ;
            padding: 1vw;

            &:last-child{
                margin: 0 0 0 3vw;
            }
        }

    }
}*/
</style>
