<template>
  <section>
    <div class="principal">
       <h1>Cadastro de Docentes</h1>

      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">Email Institucional:</label>
        <input type="email" id="email" name="email" required>

        <label for="telefone">Telefone:</label>
        <input type="number" id="telefone" name="telefone" required>

        <label for="nascimento">Data de Nascimento:</label>
        <input type="date" id="nascimento" name="nascimento" required>

        <label for="login">Nome de Login:</label>
        <input type="text" id="login" name="login" required>

        <label for="senha">Senha de Login:</label>
        <input type="password" id="senha" name="senha" required>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.principal{
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  margin: 50px 150px 50px 150px;
  padding: 70px 140px 140px 140px;
  border-radius: 20px;
}

h1{
  color: white;
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 3.5vw;
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
</style>
