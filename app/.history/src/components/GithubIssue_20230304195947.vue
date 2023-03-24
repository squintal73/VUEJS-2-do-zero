<template>
  <div id="app">
    <b-container style="margin-top: 20px">
      <b-form>
        <b-row>
          <b-col cols="12" md="6" sm="12">
            <b-form-group label="Nome de Usuário">
              <b-form-input
                v-model="nome"
                placeholder="Digite seu nome completo"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" sm="12">
            <b-form-group label="Repositório">
              <b-form-input
                v-model="repository"
                type="text"
                placeholder="Digite Repositório"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row><br><br>
        <b-button type="submit" variant="primary" class="mr-3">Buscar</b-button>&nbsp;
        <b-button type="reset" variant="danger">Resetar</b-button>
      </b-form>
    </b-container>
  </div>
 </template>

<script>
// eslint-disable-next-line
 export default {
  // eslint-disable-next-line
  name: "GithubIssue",
  data() {
    return {
      nome: null,
      repository: null,
    };
  },
  methods: {
    cadastrar() {
      console.log('Método para cadastrar o formulário');
    },
    reset() {
      this.nome = null;
      this.repository = null;
    },
  },
};
</script>
