<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'

const produtosStore = useProdutosStore()

const produtosAgro1 = produtosStore.getProdutosAgro1
const produtosAgro2 = produtosStore.getProdutosAgro2

const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})

function decrementProdutoToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  if (existingProduto.quantity === 1) {
    cart.value.items = cart.value.items.filter((item) => item.id !== produto.id)
  } else {
    existingProduto.quantity--
  }
  cart.value.total -= produto.preco
}

function incrementProdutoToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  existingProduto.quantity++
  cart.value.total += produto.preco
}

function addToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  if (existingProduto) {
    existingProduto.quantity++
  } else {
    cart.value.items.push({ ...produto, quantity: 1 })
  }
  cart.value.total += produto.preco
  alert(`Adicionado ${produto.nome} ao carrinho!`)
}

const router = useRouter()

function irPara3Agro1(){
    router.push('/3Agro1')
}
function irPara3Agro2(){
    router.push('/3Agro2')
}
function irPara3Agro3(){
    router.push('/3Agro3')
}
function irPara3Info1(){
    router.push('/3Info1')
}
function irPara3Info2(){
    router.push('/3Info2')
}
function irPara3Info3(){
    router.push('/3Info3')
}
function irPara3Quimi(){
    router.push('/3Quimi')
}

</script>

<template>
    <div class="tudo">
    <h2>
        Turmas
    </h2>
    <section class="turmas">

        <div class="agro">
            <button @click="irPara3Agro1"> 3Agro1 </button>
            <button @click="irPara3Agro2"> 3Agro2 </button>
            <button @click="irPara3Agro3"> 3Agro3 </button>

        </div>
        <div class="info">
            <button @click="irPara3Info1"> 3Info1 </button>
            <button @click="irPara3Info2"> 3Info2 </button>
            <button @click="irPara3Info3"> 3Info3 </button>
        </div>

    </section>
     <div class="quimi">
             <button @click="irPara3Quimi"> 3Quimi </button>
        </div>
        </div>
 
        <li @click="showCart = !showCart"><span class="mdi mdi-cart"></span></li>

    <main v-if="showCart">
    <section class="cartCompras">
      <h2>Carrinho</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Quantidade</th>
            <th>Subtotal</th>

          </tr>
        </thead>
        <tbody>

          <tr v-for="produto in cart.items" :key="produto.id">
            <td class="cart-item">
              <img :src="produto.local" :alt="produto.nome" />
              <div>
                <p>{{ produto.nome }}</p>
                <p>{{ produto.vendedor }}</p>
                <p>R$ {{ produto.preco.toFixed(2) }}</p>
              </div>
            </td>
            <td>

              <div>
                <button @click="decrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-minus" />
                </button>
                {{ produto.quantity }}
                <button @click="incrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-plus" />
                </button>
              </div>

            </td>
            <td class="cart-item-subtotal">R$ {{ produto.preco * produto.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="showCart = false" class="outlined">Voltar para loja</button>
      <div class="cart-summary">
        <div class="summary">
          <h2>Total da Compra</h2>
          <div class="summary-items">
            <span>Produtos</span> <span>R$ {{ cart.total.toFixed(2) }}</span> <span>Frete</span>
            <span> Grátis</span> <span>Total</span> <span>R$ {{ cart.total.toFixed(2) }}</span>
          </div>
          <button>Ir para pagamento</button>
        </div>
      </div>
    </section>
    </main>

     <main v-else>
    <ul>
        <li v-for="produto in produtosAgro1" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtoAgro1" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in produtoAgro1" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button @click="addToCart(produto)"><span class="mdi mdi-cart"></span>Comprar</button>
        </li>
        </ul>

      <ul>
        <li v-for="produto in produtosAgro2" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtoAgro2" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in produtoAgro2" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button @click="addToCart(produto)"><span class="mdi mdi-cart"></span>Comprar</button>
        </li>
        </ul>
        </main>

      
        

       







</template>
<style scoped>
h2 {
    display: flex;
    justify-content: center;
    margin: 0 33vw 0 33vw;
    background-color: white;
    padding: 10px 10px 10px 10px;
    border-radius: 60px;
    font-size: 30px;
    color: black;
}
div.tudo {
    background:  linear-gradient(135deg, #1e88e5, #42a5f5);
    margin: 4vw 10vw 4vw 10vw;
    padding: 2vw 0 3vw 0;
    border-radius: 7vw;
}
section.turmas {
    margin: 50px 300px 50px 150px;
    padding: 0 150px 0 150px;
    display: flex;


}
section.turmas button {
    padding: 14px 60px 14px 60px;
    margin: 40px 120px 40px 120px;
    background-color: white;
    color: black;
    border: 2px solid #1e88e5;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;

}
section.turmas button:hover {
    background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
    color: white;

}
section.turmas div.agro {
    background-color: white;
    margin: 0 30px 0 0;
    border-radius: 60px;
}
section.turmas div.info {
    background-color: white;
    margin: 0 0 0 30px;
    border-radius: 60px;
}
div.quimi {
    text-align: center;
    background-color: white;
    border-radius: 60px;
    font-size: 30px;
    margin: 0 30vw 0 30vw;

}
div.quimi button {
    padding: 14px 60px 14px 60px;
    margin: 20px 40px 20px 40px;
    background-color: white;
    color: black;
    border: 2px solid #1e88e5;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}
div.quimi button:hover {
    background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
    color: white;

}

/*===============================================================================================================================================================*/

section.lista ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2vw;
}

section.lista li {
  box-sizing: border-box;
  width: 20%;
  margin: 6vw 1vw 0 0;
  padding: 0 1vw;
  white-space: nowrap;
  list-style: none;
}
section.lista div p.nome {
  margin: 0 0 0.2vw 0;
  font-family: bold;
  font-size: 1.6vw;
}
section.lista div p.local {
  font-family: bold;
  font-size: 1.4vw;
}
section.lista div p.preco {
  font-family: bold;
  font-size: 1.2vw;
}
section.lista div button.comprar {
  font-size: 1vw;
  font-weight: bold;
  color: white;
  margin: 0.6vw 0 0 0;
  padding: 1vw 4vw 1vw 4vw;
  background-color: #5BA3CF;
  border-color: #5BA3CF;
  border-radius: 0.4vw;
  cursor: pointer;
  transition: all 0.3s ease;
}
section.lista div button.comprar:hover {
  background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
}
hr {
  margin: 2vw 0 0 0;
  height: 0.2vw;
  background-color: #5BA3CF;
}

</style>
