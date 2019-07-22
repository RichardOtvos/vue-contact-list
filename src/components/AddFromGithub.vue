<template>
  <form>
    <md-card>
      <md-card-header>
        <div class="md-title">Add contact from GitHub</div>
      </md-card-header>
      <md-card-content>
        <autocomplete
          placeholder="Search For GitHub Usernames"
          source="https://api.github.com/search/users?q="
          results-property="items"
          :results-display="formatDisplay"
          @selected="selectGhUser"
        >
        </autocomplete>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary" @click.prevent="addContact">
          Create contact
        </md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete';

export default {
  name: 'AddFromGithub',
  components: {
    Autocomplete
  },
  data() {
    return {
      selectedGithubUser: null,
      debouncedGhSearch: null
    };
  },
  methods: {
    async selectGhUser({ selectedObject: ghUser }) {
      let stream = await fetch(ghUser.url);
      this.selectedGithubUser = await stream.json();
    },
    formatDisplay(result) {
      return result.login;
    },
    addContact() {
      const newContact = {
        id: this.selectedGithubUser.id,
        name: this.selectedGithubUser.name,
        email: this.selectedGithubUser.email,
        bio: this.selectedGithubUser.bio,
        avatarUrl: this.selectedGithubUser.avatar_url
      };

      this.$emit('on-add-contact', newContact);
    }
  }
};
</script>

<style scoped></style>
