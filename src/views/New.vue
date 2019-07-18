<template>
  <div class="md-layout md-alignment-top-center">
    <add-from-github class="md-layout-item md-size-50"></add-from-github>

    <div class="md-layout-item md-size-100 card-divider">
      <span class="md-subheading">OR</span>
    </div>

    <add-contact
      class="md-layout-item md-size-50"
      @on-add-contact="onNewContact"
    ></add-contact>
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

<style scoped>
.card-divider {
  text-align: center;
  padding: 10px 0;
}
</style>
