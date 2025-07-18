<template>
<body>
    <main>
        <h1>Sumário</h1>
        <ul>
            <li> <RouterLink to="/contatosImportantes">Contatos Importantes</RouterLink></li>
            <li> <RouterLink to="/AtestadosDeclaracoes">Atestados e Declarações</RouterLink></li>
            <li> Atendimentos</li>
            <li> CLIFC</li>
        </ul>
        <RouterView />
    </main>
</body>
</template>