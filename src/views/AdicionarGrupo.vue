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
    <h1>Adicionar Grupo de Estudos</h1>

    <div class="informacoes">

      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="materia">Matéria:</label>
        <input type="text" id="materia" name="mateira" required>

        <label for="sala">Sala de Encontro:</label>
        <input type="text" name="sala" rows="5" required>

        <label for="data"><Datalist></Datalist> de Encontro:</label>
        <input type="date" name="data" required>

        <label for="horario">Horário de Encontro:</label>
        <input type="time" name="horario" required>

        <button type="submit">Enviar</button>
      </form>
    </div>

    <button @click="voltar">Voltar</button>
  </div>
</template>

<style scoped>
button{
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  font-size: 20px;
  padding: 15px 30px;
  margin: 0 150px 50px 212px;
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
  margin: 100px 220px 150px 220px;
  border-radius: 20px;
}

.informacoes{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  background: white;
  padding: 35px 95px 35px 95px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input{
  width: 100%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button{
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  margin: 50px 150px 50px 220px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}
</style>
