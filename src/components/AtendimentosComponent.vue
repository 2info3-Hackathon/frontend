<script setup>
</script>

<template>

    <section>


            <h1>Atendimentos</h1>



        <div class="listas">

<ul class="esquerda">

<li><a href="">Alessandra Klug</a></li>

<li><a href="">Daniel dos Santos Jr.</a></li>

<li><a href="">Denise Moreira Gasparotto</a></li>

<li><a href="">Eduardo da Silva</a></li>

<li><a href="">Edvanderson Ramalho dos Santos</a></li>

<li><a href="">Élder Mantovani Lopes</a></li>

<li><a href="">Fábio Longo de Moura</a></li>

<li><a href="">Gilian Evaristo França Silva</a></li>

</ul>

<ul class="direita">

<li><a href="">Greice Ane Barbieri</a></li>

<li><a href="">Ivo Marcos Riegel</a></li>

<li><a href="">Jonathan Ache Dias</a></li>

<li><a href="">Katia Hardt Siewert</a></li>

<li><a href="">Marco Antonio Torrez Rojas</a></li>

<li><a href="">Raffael Marcos Tófoli</a></li>

<li><a href="">Rafaela Moraes dos Santos Francisco</a></li>

<li><a href="">Suelen Cristine Fruneaux</a></li>

</ul>

        </div>


    </section>

</template>

<style scoped>
section {
    max-width: 800px;
    background: linear-gradient(45deg, #358CFF, #2569C2);
    border-radius: 1rem;
    padding: 30px;
    margin: 0 auto;
    text-align: center;
}

section h1{

    color: white;
    text-align: center;
    font-size: 2.5vw;
    padding: 4vw 0 0 0;
}

div{

    color: white;
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
}
a{

    text-decoration: none;
    color: white;
    font-size: 1.6rem;
}

section div ul.esquerda{

    border-right: solid 1px white;
    width: 50%;
    text-align: left;
    list-style-type: disc;
    padding-left: 20px;
}
section div ul.direita{
    width: 50%;
    text-align: left;
    list-style-type: disc;
    padding-left: 20px;
}

/*
.container {
  background: linear-gradient(to bottom, #3498db, #1f5fa0);
  color: white;
  padding: 30px;
  border-radius: 15px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.listas {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
}

.lista {
  list-style-type: disc;
  text-align: left;
  padding: 0 20px;
}

.lista.esquerda {
  border-right: 1px solid white;
  padding-right: 40px;
  margin-right: 40px;
}
*/

</style>