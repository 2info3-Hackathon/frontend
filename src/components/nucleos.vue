<script>
import App from '@/App.vue';
export default {
   data() {
    return {
        nucleos: {
        title: "Núcleos",
        content: " -NEABI\n -NAPNE\n -NAG\n -NEGES"
      },
        comissao:{
         title: "Comissão",
        content: " -Comissão de Eventos\n  -Comissão Interna de Supervisão–CIS\n-Comissão Própria de Avaliação–CPA" },
        comite: {
            title: "Cômite", 
            content: " -Comitê de Ética em Pesquisas com Seres  Humanos-CEPSH,   -Comitê de Ética no Uso de Animais-CEUA "},
      activeIndex: null, // Indica qual aba está aberta
    };
  },
  methods: {
    // Alterna o estado de abrir/fechar a aba
    toggle(index) {
      // Se a aba já estiver aberta, a fechamos. Caso contrário, abrimos ela.
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    // Verifica se a aba está aberta
    isOpen(index) {
      return this.activeIndex === index;
    },
    // Substitui \n por <br> para renderizar quebras de linha
    convertNewlinesToBr(content) {
      return content.replace(/\n/g, '<br>');
    }
  }
};
</script>

<template>
<header>

</header>
<section class="corpo">
    <img src="/public/imagem/study.jpg" alt="livro" width="1330" height="600">
   <div class="accordion">
    <!-- Renderiza cada aba (Núcleos, Comissão, Cômite) -->
    <div v-for="(item, index) in [nucleos, comissao, comite]" :key="index" class="accordion-item">
      <button @click="toggle(index)" class="accordion-header">
        {{ item.title }}
      </button>
      <div v-show="isOpen(index)" class="accordion-content">
        <p v-html="convertNewlinesToBr(item.content)"></p>
      </div>
    </div>
  </div>
    </section>
    <section class="informacao">
        <img src="" alt="">
        <h1>Cordenador</h1>
        <ul>
            <li>
                Nome : 
            </li>
            <li>
                E-mail : 
            </li>
            <li>
                Sala : 
            </li>
        
        </ul>
        </section>
</template>
<style scoped>
section.corpo{
  background-color: rgba(91, 163, 207, 1);
}
section.corpo img {
     align-items: center;
}

</style>