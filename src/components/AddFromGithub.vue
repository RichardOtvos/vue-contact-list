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
          :md-options="githubSearchResults"
          :md-open-on-focus="false"
          @md-changed="debouncedGhSearch"
        >
          <label>GitHub Username</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }">
            <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
          </template>
          <template slot="md-autocomplete-empty">
            <br>
          </template>
        </md-autocomplete>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'AddFromGithub',
  data() {
    return {
      selectedGithubUser: null,
      fakeUserList: ['Ricsi', 'Feri', 'Tomi', 'Norbi', 'Roli'],
      githubSearchResults: [],
      debouncedGhSearch: null
    };
  },
  methods: {
    searchForGitHubUsers(searchTerm) {
      this.githubSearchResults = new Promise((resolve, reject) => {
        setTimeout(() => resolve([]), 1000);
      });
    }
  },
  created() {
    this.debouncedGhSearch = _.debounce(this.searchForGitHubUsers, 1000);
  }
};
</script>

<style scoped></style>
