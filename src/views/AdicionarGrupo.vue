<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const mostrarAviso = ref(false);

function enviarFormulario() {
  mostrarAviso.value = true;

  setTimeout(() => {
    mostrarAviso.value = false;
  }, 3000);
}

function voltar() {
  router.push('/')
}
</script>

<template>
  <img src="/public//imagem/banner.png" alt="banner" height="600" width="100%">

  <div class="fundo">
    <h1>Adicionar Grupo de Estudos</h1>

    <div class="informacoes">

      <form id="meuFormulario" @submit.prevent="enviarFormulario">
        <h2>
          Grupo de Estudos
        </h2>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="materia">Matéria:</label>
        <input type="text" id="materia" name="mateira" required>

        <label for="sala">Localização de Encontros:</label>
        <input type="text" name="sala" rows="5" required>

        <h2>
          Monitor Responsável
        </h2>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="materia">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="sala">Horário Disponível:</label>
        <input type="text" name="sala" rows="5" required>

        <button type="submit">Enviar</button>
      </form>

      <div v-if="mostrarAviso" class="aviso">
        ✅ Formulário enviado para revisão com sucesso!
      </div>
    </div>

    <button @click="voltar">Voltar</button>
  </div>
</template>

<style scoped>
button {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  font-size: 1.2rem;
  margin-left: 2vw;
}

.fundo button:hover {
  background: linear-gradient(135deg, #1565c0, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.fundo h1 {
  color: #1C72D3;
  text-align: center;
  margin-top: 3vw;
  font-size: 2rem;
  margin-bottom: 2vw;
  font-weight: bolder;
}

.informacoes {
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  margin: 50px 200px 150px 220px;
  border-radius: 20px;
}

.informacoes {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 108vh;
}

form {
  background: white;
  padding: 35px 95px 35px 95px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-weight: bolder;
  font-size: 20px;
  padding: 15px 5px 15px 0;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input {
  font-size: 15px;
  width: 100%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  margin: 50px 150px 50px 320px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.aviso {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: aparecer 0.3s ease;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
