<template>
  <md-card class="contact-card md-elevation-4">
    <md-card-media md-medium>
      <img
        :src="getAvatarUrl"
        :alt="`The profile picture of ${contact.name}`"
      />
    </md-card-media>
    <md-card-content>
      <div class="md-title">{{ contact.name }}</div>
      <div class="md-subhead">
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </div>
      <p class="md-body-1">
        {{ contact.bio }}
      </p>
    </md-card-content>
  </md-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContactCard',
  computed: {
    getAvatarUrl() {
      if (this.contact.avatarUrl) {
        return this.contact.avatarUrl;
      }
      return require('@/assets/logo.png');
    },
    ...mapGetters({
      contact: 'currentlySelectedContact'
    })
  }
};
</script>

<style scoped lang="scss">
.md-card {
  width: 40em;
  display: flex;

  .contact-details {
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
  }

  .md-card-media img {
    width: auto;
    max-width: 200px;
  }

  .label {
    font-weight: bold;
  }
}
</style>
