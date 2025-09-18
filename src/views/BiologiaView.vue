<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/grupo-estudos')
}
</script>

<template>
 <body>
   <img src="/imagem/banner.png" alt="banner" height="600" width="100%">

  <div class="fundo">
    <h1>Grupo de Estudos de Biologia</h1>

    <div class="informacoes">
        <h2>
          Monitor Responsável:
        </h2>
        <p><span>Nome:</span><br>- Raissa; <br>- Maria Eduarda; <br>- Christiny; <br>- Betina; <br>- Giulia; <br>- Gianluca.</p>

        <p><span>Email:</span> comitedeensino.memoria.araquari@ifc.edu.br</p>

        <p><span>Horário disponível:</span><br>- Segunda de manhã;<br>- Segunda à tarde; <br>- Terça de manhã, Quarta à tarde, Sexta à tarde;<br>- Terça de manhã, Sexta à tarde;<br>- Terça de manhã; <br>- Quarta à tarde, Sexta à tarde.</p>

        <h2>
          Localização:
        </h2>
        <p>Grupo de Estudos, Bloco C</p>
    </div>

    <button @click="voltar">← Voltar</button>
  </div>
 </body>
</template>

<style scoped>
body{
  margin-bottom: -15vw;
}
button{
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 10px 30px;
  font-size: calc(1.2rem);
  margin-left: 3vw;
  margin-top: 5vw;
}

.fundo button:hover {
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
  word-spacing: 7px;
  line-height: 1.3;
}

span{
  font-weight: bolder;
  padding: 0 2px 0 0;
  line-height: 2;
}
</style>
