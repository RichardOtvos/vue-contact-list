<template>
  <div class="add-contact">
    <form action="">
      <md-card>
        <md-card-header>
          <div class="md-title">Add a new card</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Name</label>
            <md-input v-model="contactName" required />
          </md-field>
          <md-field>
            <label>Email</label>
            <md-input v-model="contactEmail" />
          </md-field>
          <md-field>
            <label>Avatar URL</label>
            <md-input v-model="contactAvatarUrl" />
          </md-field>
          <md-field>
            <label>Bio</label>
            <md-textarea v-model="contactBio"></md-textarea>
          </md-field>
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
  width: 600px;
  margin: auto;
}
</style>
