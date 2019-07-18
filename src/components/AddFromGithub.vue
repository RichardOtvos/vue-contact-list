<template>
  <form>
    <md-card>
      <md-card-header>
        <div class="md-title">Add contact from GitHub</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
          v-model="selectedGithubUser"
          md-highlight-text="true"
          :md-options="users"
          :md-open-on-focus="false"
        >
          <label>GitHub Username</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }">
            <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
          </template>
          <template slot="md-autocomplete-empty">
            No one was found with that name!
          </template>
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
