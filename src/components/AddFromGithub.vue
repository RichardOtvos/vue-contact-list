<template>
  <form>
    <md-card>
      <md-card-header>
        <div class="md-title">Add contact from GitHub</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
          :value="selectedGithubUserName"
          md-highlight-text="true"
          :md-options="githubSearchResults"
          :md-open-on-focus="false"
          @md-changed="debouncedGhSearch"
          @md-selected="selectGhUser"
        >
          <label>GitHub Username</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }"
            >{{ item.login }}
          </template>
          <template slot="md-autocomplete-empty">
            <br />
          </template>
        </md-autocomplete>
      </md-card-content>
      <md-button @click="addContact">send</md-button>
    </md-card>
  </form>
</template>

<script>
import _ from 'lodash';

let mockUsers = [
  {
    login: 'richardsondx',
    id: 812376,
    avatar_url: 'https://avatars0.githubusercontent.com/u/812376?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/richardsondx'
  },
  {
    login: 'richarddurbin',
    id: 3431398,
    avatar_url: 'https://avatars3.githubusercontent.com/u/3431398?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/richarddurbin'
  },
  {
    login: 'RichardKelley',
    id: 833810,
    avatar_url: 'https://avatars3.githubusercontent.com/u/833810?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/RichardKelley'
  },
  {
    login: 'RichardBray',
    id: 1377253,
    avatar_url: 'https://avatars2.githubusercontent.com/u/1377253?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/RichardBray'
  },
  {
    login: 'd6y',
    id: 102661,
    node_id: 'MDQ6VXNlcjEwMjY2MQ==',
    avatar_url: 'https://avatars3.githubusercontent.com/u/102661?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/d6y'
  }
];

export default {
  name: 'AddFromGithub',
  data() {
    return {
      selectedGithubUser: null,
      selectedGithubUserName: '',
      githubSearchResults: [],
      debouncedGhSearch: null
    };
  },
  methods: {
    searchForGitHubUsers(searchTerm) {
      this.githubSearchResults = new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockUsers), 1000);
      });
    },
    selectGhUser(selectedUser) {
      this.selectedGithubUser = selectedUser;
      this.selectedGithubUserName = selectedUser.login;
    },
    addContact() {
      console.log(this.selectedGithubUser);
    }
  },
  created() {
    this.debouncedGhSearch = _.debounce(this.searchForGitHubUsers, 1000);
  }
};
</script>

<style scoped></style>
