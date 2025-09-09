<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaDiscente(){
  router.push('/DiscenteView')
}

function irParaDocente(){
  router.push('/DocenteView')
}

function irParaTerceirao(){
  router.push('/TerceiraoView')
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
        <input type="password" id="senha" name="senha" required>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>

  <section class="cadastros">
    <div>
      <h2>Docente:</h2>
      <p>
        caso ainda não possua cadastro,<br> clique no link abaixo.
      </p>
      <a @click="irParaDocente">Cadastre-se</a>
    </div>

    <div>
      <h2>Discente:</h2>
      <p>
        caso ainda não possua cadastro,<br> clique no link abaixo.
      </p>
      <a @click="irParaDiscente">Cadastre-se</a>
    </div>

    <div>
      <h2>Terceirão Vendas:</h2>
      <p>
        caso ainda não possua cadastro,<br> clique no link abaixo.
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
  padding: 85px 105px 35px 295px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

h2 {
  font-weight: bolder;
  font-size: 20px;
  padding: 15px 5px 15px 0;
}

label {
  font-size: 20px;
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input {
  font-size: 15px;
  width: 80%;
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
  margin: 60px 150px 30px 290px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  background: linear-gradient(135deg, #1565c0, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.cadastros{
  display: flex;
}

.cadastros div{
  text-align: center;
  margin: 0 7vw 5vw 9.5vw;
}

.cadastros p{
  font-size: 18px;
  padding: 10px 0 10px 0;
}

.cadastros a{
  font-size: 18px;
  color:#338ff8;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

a:hover{
  color: #0b4f9c;
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
