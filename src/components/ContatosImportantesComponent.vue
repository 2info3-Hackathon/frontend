<script setup>
/* COLOCAR NO PATH DO INDEX.JS "contatosImportantes.vue"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
</script>

<template>

    <section>

        <h1>Contatos Importantes</h1>

        <ul>
            <li>
                <p>
                    Curso Técnico em Informática para Internet Integrado ao Ensino Médio <br>
                     Email: <span>informatica.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Daniel dos Santos Jr.
                </p>
            </li>
            <li>
                <p>
                    Curso Técnico em Agropecuária Integrado ao Ensino Médio <br>
                     Email: <span>agropecuaria.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Nelson Jorge da Silva.
                </p>
            </li>
            <li>
                <p>
                    Curso Técnico em Química Integrado ao Ensino Médio <br>
                     Email: <span>quimica.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Mateus Santos Carapiá.
                </p>
            </li>
        </ul>

    </section>

</template>

<style scoped>

section h1 {
    padding: 2vw 0 0 0;
    color: black;
    display: flex;
    justify-content: center;
    font-size: 2vw;

}

section ul {

    padding: 0.8vw 1.3vw 0 35vw;
    line-height: 1.7vw;
    font-size: 1vw;
    
}
section li{

    color: #2D86FB;
}

section ul li p {

    color: black;

}

section ul li p span{

        color: #2D86FB;
}

</style>