<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaDiscente(){
  router.push('/cadastro-discente')
}

function irParaDocente(){
  router.push('/cadastro-docente')
}

function irParaTerceirao(){
  router.push('/cadastro-terceirao')
}

function toggleSenha() {
    const senha = document.getElementById("senha");
    senha.type = senha.type === "password" ? "text" : "password";
}

function irParaPaginaInicial(){
  router.push('/pag-inicial')
}
</script>

<template>
  <section>
    <div class="principal">
      <form>
        <div class="icone">
          <img src="/public/imagem/Group 71.png" alt="avatar">
        </div>

        <label for="user">Usuário:</label>
        <input type="text" id="user" name="user" required>

        <label for="senha">Senha:</label>
        <div class="campo-senha">
          <input :type="senhaVisivel ? 'text' : 'password'" id="senha" name="senha" required>
          <span class="olho" @click="toggleSenha">
          {{ senhaVisivel ? '🙈' : '👁' }}
          </span>
          </div>
        <button type="submit" @click="irParaPaginaInicial">Enviar</button>
      </form>
    </div>
  </section>

  <section class="cadastros">
    <div>
      <h2>Docente:</h2>
      <p>
        caso ainda não possua cadastro, clique no link abaixo.
      </p>
      <a @click="irParaDocente">Cadastre-se</a>
    </div>

    <div>
      <h2>Discente:</h2>
      <p>
        caso ainda não possua cadastro, clique no link abaixo.
      </p>
      <a @click="irParaDiscente">Cadastre-se</a>
    </div>

    <div>
      <h2>Terceirão Vendas:</h2>
      <p>
        caso ainda não possua cadastro, clique no link abaixo.
      </p>
      <a @click="irParaTerceirao">Cadastre-se</a>
    </div>
  </section>
</template>

<style scoped>

.principal{
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  margin: 50px 150px 50px 150px;
  padding: 150px 140px 140px 140px;
  border-radius: 20px;
}

form {
  background: white;
  padding: 85px 105px 35px 105px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;              
  flex-direction: column;     
  align-items: center;
}

h2 {
  font-weight: bolder;
  font-size: calc(1.3rem);
  padding: 15px 5px 15px 0;
  text-align: center;
}

label {
  font-size: calc(1.5rem);
  display: block;
  margin-top: 10px;
  font-weight: bold;
  margin: 2vw 0 0.5vw -27vw ;
}

input {
  font-size: calc(1.3rem);
  width: 80%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.campo-senha {
  position: relative;
  width: 80%;
}

.campo-senha input {
  font-size: calc(1.5rem);
  width: 100%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.campo-senha .olho {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.3rem;
  user-select: none;
}

form button {
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  color: white;
  font-size: calc(1.3rem);
  padding: 10px 25px 10px 25px;
  margin: 60px 150px 30px 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.cadastros{
  display: flex;
  text-align: justify;
}

.cadastros div{
  margin: 0 9.5vw 5vw 9.5vw;
}

.cadastros p{
  font-size: 1.2rem;
  padding: 10px 0px 10px 0;
  margin: 0 0 0 0.5vw;
}

.cadastros a{
  margin: 0 0 0 3.7vw;
  font-size: calc(1.2rem);
  color:#338ff8;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

a:hover{
  color: #063770;
  text-decoration: underline;
}

.icone {
  position: absolute;
  top: -90px; /* sobe a imagem */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  padding: 8px;

}

.icone img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
