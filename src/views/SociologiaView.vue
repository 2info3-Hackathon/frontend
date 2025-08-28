<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/')
}
</script>

<template>
  <img src="/public/imagem/banner.png" alt="banner" height="600" width="100%">

  <div class="fundo">
    <h1>Grupo de Estudos de Sociologia</h1>

      <div class="informacoes">
        <h2>
          Monitor Responsável:
        </h2>
        <p>Nome: ??</p>
        <p>Sala: ??</p>
        <p>Horário disponível:??</p>

        <h2>
          Horário:
        </h2>
        <p>??</p>

        <h2>
          Sala:
        </h2>
        <p>??</p>
    </div>

    <button @click="voltar">Voltar</button>
  </div>
</template>

<style scoped>
button{
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  margin: 50px 150px 50px 150px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.fundo button:hover {
  background: linear-gradient(135deg, #1565c0, #1e88e5);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  transform: scale(1.05);
}

.fundo h1{
  color: #1C72D3;
  text-align: center;
  padding: 30px 60px 30px 60px;
  margin: 0 150px 50px 150px;
  font-size: 45px;
  font-weight: bolder;
}

.informacoes{
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  margin: 50px 150px 50px 150px;
  padding: 70px 10px 50px 10px;
  border-radius: 20px;
}

.informacoes h2{
  color: #c5dafa;
  font-size: 35px;
  font-weight:bolder;
  margin: 0 50px 0 150px;
}

.informacoes p{
  font-size: 25px;
  font-weight: 500;
  margin: 30px 0 30px 200px;
  color: white;
}
</style>
