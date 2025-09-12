<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/')
}
</script>

<template>
  <img src="/public//imagem/banner.png" alt="banner" height="600" width="100%">

  <div class="fundo">
    <h1>Grupo de Estudos de Matemática</h1>

    <div class="informacoes">
        <h2>
          Monitor Responsável:
        </h2>
        <p><span>Nome:</span> <br>- </p>
        <p><span>Email:</span> comitedeensino.memoria.araquari@ifc.edu.br</p>
        <p><span>Horário disponível:</span> ??</p>

        <h2>
          Localização:
        </h2>
        <p>Grupo de Estudos, Bloco C</p>
    </div>

    <button @click="voltar">← Voltar</button>
  </div>
</template>

<style scoped>
button{
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  font-size: calc(1.2rem);
  margin-left: 2vw;
}

.fundo button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  transform: scale(1.05);
}

.fundo h1{
  color: #1C72D3;
  text-align: center;
  margin-top: 3vw;
  font-size: calc(2.5rem);
  margin-bottom: 3vw;
  font-weight: bolder;
}

.informacoes{
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  margin: 50px 150px 50px 150px;
  padding: 70px 10px 50px 10px;
  border-radius: 20px;
}

.informacoes h2{
  color: #c5dafa;
  font-size: calc(2rem);
  font-weight:bolder;
  margin: 0 50px 0 220px;
}

.informacoes p{
  font-size: calc(1.5rem);
  font-weight: 500;
  margin: 30px 0 30px 280px;
  color: white;
}

span{
  font-weight: bolder;
  padding: 0 5px 0 0;
}
</style>
