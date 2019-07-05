<template>
  <div class="contact-card">
    <img :src="getAvatarUrl" :alt="`The profile picture of ${contact.name}`" />
    <div class="contact-details">
      <p><span class="label">Name:</span> {{ contact.name }}</p>
      <p>
        <span class="label">Email:</span>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>
      <p><span class="label">Bio:</span>{{ contact.bio }}</p>
    </div>
  </div>
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

<style scoped>
.contact-card {
  width: 40em;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}

img {
  width: 15em;
  height: 15em;
  flex: none;
  object-fit: cover;
}

.contact-details {
  text-align: left;
  margin-left: 20px;
}

.label {
  font-weight: bold;
}
</style>
