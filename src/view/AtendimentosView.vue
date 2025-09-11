<script setup>
</script>


<template>
<body>
    <div class="ondas"></div>


   <section>
           <h1>Atendimentos</h1>
       <div class="listas">
<ul class="esquerda">

<li><a href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=0#gid=0">Alessandra Klug</a></li>

<li><a href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=609294266#gid=609294266">Daniel dos Santos Jr.</a></li>

<li><a href="">Denise Moreira Gasparotto</a></li>

<li><a href="">Eduardo da Silva</a></li>

<li><a href="">Edvanderson Ramalho dos Santos</a></li>

<li><a href="">Élder Mantovani Lopes</a></li>

<li><a href="">Fábio Longo de Moura</a></li>

<li><a href="">Gilian Evaristo França Silva</a></li>

</ul>
<ul class="direita">

<li><a href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=898234625#gid=898234625">Greice Ane Barbieri</a></li>

<li><a href="">Ivo Marcos Riegel</a></li>

<li><a href="">Jonathan Ache Dias</a></li>

<li><a href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=1464446756#gid=1464446756">Katia Hardt Siewert</a></li>

<li><a href="">Marco Antonio Torrez Rojas</a></li>

<li><a href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=946501609#gid=946501609">Raffael Marcos Tófoli</a></li>

<li><a href="">Rafaela Moraes dos Santos Francisco</a></li>

<li><a href="">Suelen Cristine Fruneaux</a></li>

</ul>
       </div>
       <p>
         Marcar atendimento pelo email que constar na página do respectivo professor(a)!
       </p>
 </section>
  <div class="girada"></div>
</body>
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
section {
   max-width: 80%;
   background: linear-gradient(135deg, #1f68c7, #42a5f5);
   border-radius: 1rem;
   padding: 30px;
   margin: 0 auto;
   text-align: center
}
section h1{
   color: white;
   text-align: center;
   font-size: 2.5vw;
   padding: 4vw 2vw 0 0;
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
   font-size: 1.5rem;
}


section div ul.esquerda{
   border-right: solid 1px white;
   width: 30%;
   text-align: left;
   list-style-type: disc;
   padding-left: 2%;
   font-size:1.5em ;
}
section div ul.direita{
   width: 30%;
   text-align: left;
   list-style-type: disc;
   padding-left: 4%;
}
section p{
 color: white;
 font-size: 1.5rem;
 justify-content: center;
 padding: 2vw 1vw 3.5vw 0;
}

section div.listas ul li a{
   cursor: pointer;
   transition: all 0.3 ease;
   color: white;
}
section div.listas ul li a:hover{
   transform: scale(1.2);
      color: #184374;
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

