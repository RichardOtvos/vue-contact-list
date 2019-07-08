<template>
  <div id="new-contact-page">
    <add-contact @on-add-contact="onNewContact"></add-contact>
  </div>
</template>

<script>
import AddContact from '@/components/AddContact';
import { ADD_CONTACT } from '@/store';
import { mapActions } from 'vuex';

export default {
  name: 'New',
  methods: {
    onNewContact(contact) {
      this.addContact(contact);
      this.$router.push({
        name: 'details',
        params: { selectedId: contact.id }
      });
    },
    ...mapActions({ addContact: ADD_CONTACT })
  },
  components: {
    AddContact
  }
};
</script>

<style scoped>
#new-contact-page {
  margin: auto;
  text-align: center;
}
</style>
