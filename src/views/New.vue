<template>
  <div class="md-layout md-alignment-top-center">
    <add-contact
      class="md-layout-item md-size-50"
      @on-add-contact="onNewContact"
    ></add-contact>
    <!--    <add-from-github class="md-layout-item md-size-50"></add-from-github>-->
  </div>
</template>

<script>
import AddContact from '@/components/AddContact';
import { ADD_CONTACT } from '@/store';
import { mapActions } from 'vuex';
import AddFromGithub from '../components/AddFromGithub';

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
    AddFromGithub,
    AddContact
  }
};
</script>

<style scoped></style>
