<script setup>
</script>

<template>

    <body>
        <section>
            <div>
                <ul>
                    <li>
                        <RouterLink to="/" class="link">
                            Inicio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adicionar-evento" class="link">
                            Adicionar Evento
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adicionar-grupo" class="link">
                            Adicionar Grupo de Estudo
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adicionar-nucleo" class="link">
                            Adicionar Núcleo
                        </RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink to="/adicionar-comite" class="link">
                            Adicionar Comite
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adicionar-comissao" class="link">
                            Adicionar Comissao
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adicionar-venda" class="link">
                            Adicionar Venda
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/reservador" class="link">
                            Verificar Reservas
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </section>
    </body>
</template>

<style scoped>
body {
    margin-bottom: -39vw;
}

div{
    display: flex;
    justify-content: space-between;
}

h1 {
    text-align: center;
    color: #1C72D3;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 8vw;
}

ul {
    color: #1C72D3;
    margin: 6vw 14vw 0 14vw;
    margin-bottom: 4vw;
}

ul ::marker {
    font-size: 1.3em;
}

li {
    margin: 3vw 3vw 0 3vw;
    font-size: 1.5rem;
    cursor: pointer;
}

.link {
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
}

.link:hover {
    text-decoration: underline;
    color: #2c71c0;
}
</style>