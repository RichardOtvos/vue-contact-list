<template>
  <div class="add-contact">
    <form action="">
      <md-card>
        <md-card-header>
          <div class="md-title">Add a new card</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label for="contact-name">Name</label>
            <md-input id="contact-name" v-model="contactName" required />
          </md-field>
          <md-field>
            <label for="contact-email">Email</label>
            <md-input id="contact-email" v-model="contactEmail" />
          </md-field>
          <div>
            <label for="contact-avatar-url">Avatar URL</label>
            <input
              id="contact-avatar-url"
              type="text"
              v-model="contactAvatarUrl"
            />
          </div>
          <div>
            <label for="contact-bio">Bio</label>
            <textarea id="contact-bio" v-model="contactBio"></textarea>
          </div>
          <md-card-actions>
            <md-button :to="{ name: 'details', params: { selectedId: null } }">
              Cancel
            </md-button>
            <md-button class="md-primary" @click.prevent="onNewContactClick">
              Create
            </md-button>
          </md-card-actions>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddContact',
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactAvatarUrl: '',
      contactBio: ''
    };
  },
  methods: {
    onNewContactClick() {
      if (!this.contactName) {
        throw new Error('No Contact Name provided!');
      }

      const newContact = {
        id: btoa(this.contactName).slice(0, -2),
        name: this.contactName,
        email: this.contactEmail,
        bio: this.contactBio,
        avatarUrl: this.contactAvatarUrl
      };

      this.$emit('on-add-contact', newContact);
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
</style>
