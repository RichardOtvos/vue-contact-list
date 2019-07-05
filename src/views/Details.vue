<template>
  <div class="contact-details-page">
    <ContactList />
    <div class="card-holder">
      <ContactCard v-if="selectedContactId" />
      <div class="empty-contact" v-else>
        <h1>Select a contact!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';
import ContactList from '@/components/ContactList.vue';
import { mapState, mapActions } from 'vuex';
import { SELECT_CONTACT } from '../store';

export default {
  name: 'ContactDetails',
  computed: {
    ...mapState(['contactList', 'selectedContactId'])
  },
  methods: {
    ...mapActions({ selectContact: SELECT_CONTACT })
  },
  components: {
    ContactList,
    ContactCard
  }
};
</script>

<style scoped>
.empty-contact {
  width: 40em;
  text-align: center;
}

.empty-contact h1 {
  font-size: 48px;
}
.contact-details-page {
  display: flex;
}
.card-holder {
  margin: auto;
}

.contact-card {
  margin: auto;
  margin-bottom: 25px;
  text-align: center;
}
</style>
