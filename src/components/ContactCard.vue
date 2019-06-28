<template>
  <div class="contact-card">
    <img :src="getAvatarUrl" :alt="`The profile picture of ${name}`" />
    <div class="contact-details">
      <p><span class="label">Name:</span> {{ name }}</p>
      <p>
        <span class="label">Email:</span>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
      <p><span class="label">Bio:</span>{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    id: String,
    name: String,
    email: String,
    bio: String,
    avatarUrl: String
  },
  computed: {
    getAvatarUrl() {
      if (this.avatarUrl) {
        return this.avatarUrl;
      }
      return require('@/assets/logo.png');
    }
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
