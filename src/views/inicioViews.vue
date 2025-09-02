<script setup>
import { ref} from 'vue'
import { useRoute } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()

</script>

<template>
        <div>
            <main v-if="showSummary">
                <h1>Sumário</h1>
                <div class="menu">
                    <ul>
                        <li>
                            <RouterLink to="/comissao" class="link">
                               Comissão
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/nucleos" class="link">
                              Núcleo
                            </RouterLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <RouterLink to="/comite" class="link">
                                Comitê
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
</template>