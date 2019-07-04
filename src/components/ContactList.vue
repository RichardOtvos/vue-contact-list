<template>
  <div class="contact-list">
    <h2>Contacts</h2>
    <ul>
      <router-link
        v-for="contact in contactList"
        :key="contact.id"
        tag="li"
        :class="{ active: contact.id === selectedContactId }"
        :to="{ name: 'details', params: { selectedId: contact.id } }"
      >
        {{ contact.name }}
      </router-link>
    </ul>
    <router-link tag="span" class="add-new-link" :to="{ name: 'newContact' }">
      Add new</router-link
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ContactList',
  computed: {
    ...mapState(['contactList', 'selectedContactId'])
  }
};
</script>

<style scoped>
.contact-list {
  width: 200px;
  height: 100vh;
  padding: 10px 20px;
  background: #6cb289;
  color: white;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.3);
}

li {
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
}

.active {
  font-weight: bold;
}

.add-new-link {
  cursor: pointer;
}
</style>
