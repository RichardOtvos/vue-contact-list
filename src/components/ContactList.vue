<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">Contacts</span>
    </md-toolbar>
    <md-list class="md-dense">
      <md-list-item
        v-for="contact in contactList"
        :key="contact.id"
        tag="li"
        :class="{ active: contact.id === selectedContactId }"
        :to="{ name: 'details', params: { selectedId: contact.id } }"
      >
        <span class="md-list-item-text">{{ contact.name }}</span>
      </md-list-item>
      <md-divider></md-divider>
      <md-button tag="span" class="add-new-link" :to="{ name: 'newContact' }">
        + Add new
      </md-button>
    </md-list>
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

<style scoped></style>
