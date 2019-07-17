<template>
  <form>
    <md-card>
      <md-card-header>
        <div class="md-title">Add contact from GitHub</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete v-model="selectedGithubUser" :md-options="users">
          <label>GitHub Username</label>
        </md-autocomplete>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: 'AddFromGithub',
  data() {
    return {
      selectedGithubUser: null,
      users: ['Ricsi', 'Feri', 'Tomi', 'Norbi', 'Roli']
    };
  }
};
</script>

<style scoped></style>
