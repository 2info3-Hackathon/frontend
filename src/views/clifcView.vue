<script setup>
</script>

<template>
    <div class="ondas"></div>
<section>

<h1>CLIFC - Centro de Línguas</h1>

<p>Escaneie o QRCode e tire suas dúvidas:</p>

<img src="/imagens/QrCode-CLIFC.png" alt="QrCode-CLIFC">

<p class="email">clifc.araquari@ifc.edu.br</p>

</section>
<div class="girada"></div>
</template>

<style scoped>
.ondas {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 102%;
  height: 60vh;
  background-color: #1c7ed4;
  display: block;
  margin-left: -20px;
  margin-top: -30px;
}

section{
    background: linear-gradient(135deg, #1c7ed4, #42a5f5);
    margin: 0vw 15vw 6vw 15vw;
    border-radius: 20px;
}

section h1{
    color: white;
    text-align: center;
    font-size: 2.5rem;
    padding: 4vw 0 0 0;
}

section p{
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 2vw 0 1.5vw 0;
}

section img {
    width: 20%;
    margin: 2vw;
    display: block;
    margin: 0 auto;
}

section p.email{
    padding: 0.2vw 0vw 5vw 0vw;
    cursor: pointer;
    font-weight: bold;
}

p.email:hover{
     text-decoration: underline;
}

.girada {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 102%;
  height: 60vh;
  background-color: #1c7ed4;
  display: block;
  margin-left: -20px;
  margin-bottom: -80px;
  transform: rotate(180deg);
  margin-top: -100px;
}
</style>