<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const router = useRouter()
const senhaVisivel = ref(false)
const token = localStorage.getItem('auth_token')
const tiposUsuarios = ref([])
const tipo = ref('não logado')
const mostrarCampoSenha = ref(false)

const tiposUsuariosFiltrados = computed(() =>
  tiposUsuarios.value.filter(t => t.descricao !== 'Admin' && t.descricao !== 'Professor')
)

const form = reactive({
  first_name: '',
  last_name: '',
  telefone: '',
  email: '',
  data_nascimento: '',
  username: '',
  tipo_user: '',
  senha: ''
})

const nomeCompleto = computed(() => `${form.first_name} ${form.last_name}`.trim())

if (typeof token === 'string' && token.length > 0) {
  try {
    const decoded_token = jwtDecode(token)
    tipo.value = decoded_token.tipo
  } catch (error) {
    console.error('Erro ao decodificar token:', error)
    router.push('/login')
  }
} else {
  console.warn('Token inválido ou não encontrado')
  router.push('/login')
}

async function carregarTiposUsuario() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/tipo_usuario/')
    tiposUsuarios.value = response.data
  } catch (error) {
    console.error('Erro ao carregar tipos de usuário:', error)
  }
}

onMounted(async () => {
  if (!token && router.currentRoute.value.name !== 'Login') {
    router.push('/login')
    return
  }

  try {
    const resposta = await fetch("http://127.0.0.1:8000/api/usuario/me/", {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!resposta.ok) {
      router.push('/login')
      return
    }

    const user = await resposta.json()

    if (user.nome) {
      const [first, ...rest] = user.nome.split(' ')
      form.first_name = first
      form.last_name = rest.join(' ')
    }

    form.telefone = user.telefone || ''
    form.email = user.email || ''
    form.data_nascimento = user.data_nascimento || ''
    form.username = user.username || ''
    form.tipo_user = user.tipo_user || ''
  } catch (erro) {
    console.error("Erro na requisição:", erro)
  }

  await carregarTiposUsuario()
})

function logout() {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user_info')
  router.push('/')
}

function toggleSenha() {
  senhaVisivel.value = !senhaVisivel.value
}

async function atualizar() {
  try {
    const body = {
      nome: nomeCompleto.value,
      telefone: form.telefone,
      email: form.email,
      data_nascimento: form.data_nascimento,
      username: form.username,
      tipo_user: form.tipo_user || undefined,
      senha: form.senha || undefined
    }

    const resp = await fetch("http://127.0.0.1:8000/api/usuario/me/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })

    if (resp.ok) {
      alert("Informações atualizadas com sucesso!")
    } else {
      const data = await resp.json().catch(() => ({}))
      alert(data.detail || "Erro ao atualizar informações.")
    }
  } catch (erro) {
    console.error("Erro ao atualizar:", erro)
  }
}
</script>

<template>
    <section>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/" class="link">Inicio</RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-evento" class="link">Adicionar Evento</RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-grupo" class="link">Adicionar Grupo de Estudo</RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="link">Adicionar Núcleo</RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="link">Adicionar Comitê</RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="link">Adicionar Comissão</RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-venda" class="link">Adicionar Venda</RouterLink>
                </li>
                <li>
                    <RouterLink to="/reservados" class="link">Verificar Reservas</RouterLink>
                </li>
            </ul>
        </nav>

        <div>
            <button @click="logout">Deslogar</button>
        </div>
    </section>
    <section>
        <form @submit.prevent="atualizar" method="post">
            <label for="first_name">Nome:</label>
            <input type="text" id="first_name" v-model="form.first_name">

            <label for="last_name">Sobrenome:</label>
            <input type="text" id="last_name" v-model="form.last_name">

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" v-model="form.telefone">

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email">

            <label for="data_nascimento">Data de Nascimento:</label>
            <input type="date" id="data_nascimento" v-model="form.data_nascimento">

            <label for="username">Nome de Login:</label>
            <input type="text" id="username" v-model="form.username">

            <select name="tipo_user" id="tipo_user" v-model="form.tipo_user">
                <option disabled value="">
                    Selecione o seu tipo de usuário
                </option>
                <option v-for="tipo in tiposUsuariosFiltrados" :key="tipo.id" :value="tipo.id">
                    {{ tipo.descricao }}
                </option>


            </select>


            <div>
                <button type="button" @click="mostrarCampoSenha = !mostrarCampoSenha">
                    {{ mostrarCampoSenha ? 'Cancelar alteração de senha' : 'Alterar senha' }}
                </button>
            </div>

            <div v-if="mostrarCampoSenha">
                <label for="senha">Nova Senha:</label>
                <div class="campo-senha">
                    <input :type="senhaVisivel ? 'text' : 'password'" id="senha" v-model="form.senha"
                        placeholder="Informe sua nova senha">
                    <span class="olho" @click="toggleSenha">
                        {{ senhaVisivel ? '🙈' : '👁' }}
                    </span>
                </div>
            </div>

            <div class="botoes">
                <button type="reset">Limpar</button>
                <button type="submit">Atualizar</button>
            </div>
        </form>
    </section>
</template>

<style scoped></style>