<template>
  <div class="add-contact">
    <form action="">
      <div>
        <label for="contact-name">Name</label>
        <input id="contact-name" type="text" v-model="contactName" />
      </div>
      <div>
        <label for="contact-email">Email</label>
        <input id="contact-email" type="text" v-model="contactEmail" />
      </div>
      <div>
        <label for="contact-avatar-url">Avatar URL</label>
        <input id="contact-avatar-url" type="text" v-model="contactAvatarUrl" />
      </div>
      <div>
        <label for="contact-bio">Bio</label>
        <textarea id="contact-bio" v-model="contactBio"></textarea>
      </div>
      <div class="button-holder">
        <router-link to="details">Cancel</router-link>
        <a href="" @click.prevent="onNewContactClick">Create</a>
      </div>
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
          id: btoa(this.contactName),
          name: this.contactName,
          email: this.contactEmail,
          bio: this.contactBio,
          avatarUrl: this.contactAvatarUrl
      };
      console.log('new contact', newContact);
    }
  }
};
</script>

<style scoped>
form {
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

form > div {
  display: flex;
  justify-content: space-around;
}
</style>
