<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'
import { useCartStore } from '@/stores/cartStore'
import { useEventStore } from '@/stores/event'
import Cart from '@/components/cart.vue'


const store = useEventStore();

const events = store.events

console.log('Eventos carregados:', events);

const produtosStore = useProdutosStore()
const cartStore = useCartStore()
const produtosAgro1 = produtosStore.getProdutosAgro1

const router = useRouter()


//function fecharCarrinho() {
  //cartStore.toggleCart()
//}

function voltar() {
    router.push('/')
}


</script>

<template>
  <li @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
  </li>

  <Cart v-if="cartStore.showCart"

  />


  <section v-else>
    <ul>
      <li v-for="produto in produtosAgro1" :key="produto.id">
        <p><img :src="produto.imagem" alt="" width="200" height="200" /></p>
        <p class="nome">{{ produto.nome }}</p>
        <p class="preco">R${{ produto.preco }}</p>
        <p class="local">{{ produto.local }}</p>
        <p class="vendedor">{{ produto.vendedor }}</p>

        <button class="reservar" @click="cartStore.addToCart(produto)">
          <span class="mdi mdi-cart"></span> Reservar
        </button>
      </li>
    </ul>
    <button class="turmas" @click="voltar">Voltar</button>
  </section>

 <div v-if=" !produtos_A || produtos_A.length === 0">Nenhum evento encontrado.</div>

        <article v-for="evento in produtos_A" :key="evento.id">
            <div class="produtosA">
                <h2 class="name">
                    {{ evento.nomeEvento }}
                </h2>
                <ul>
                  <li>
                        <p>
                          {{ evento.preco }}
                        </p>
                        <p>
                          {{ evento.local }}
                        </p>
                        <p>
                            {{ evento.hora }}
                        </p>
                        </li>
                    <li>
                        <p>
                            {{ evento.data }}
                        </p>
                    </li>
                </ul>
                <div>

                    <p>
                        {{ evento.descricao }}
                    </p>
                </div>
            </div>
        </article>

</template>
<style scoped>


</style>
