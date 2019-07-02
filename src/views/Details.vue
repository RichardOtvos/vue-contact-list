<template>
  <div class="contact-details-page">
    <ContactList
      :contactList="contactList"
      :selectedId="selectedContactId"
    ></ContactList>
    <div class="card-holder">
      <ContactCard
        v-if="selectedContactId"
        :id="selectedContact.id"
        :name="selectedContact.name"
        :email="selectedContact.email"
        :bio="selectedContact.bio"
        :avatar-url="selectedContact.avatarUrl"
      ></ContactCard>
      <div class="empty-contact" v-else>
        <h1>Select a contact!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';
import ContactList from '@/components/ContactList.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
import { SELECT_CONTACT } from '../store';

export default {
  name: 'ContactDetails',
  props: { selectedId: String, default: null },
  computed: {
    ...mapState(['contactList', 'selectedContactId']),
    ...mapGetters({
      selectedContact: 'currentlySelectedContact'
    })
  },
  methods: {
    ...mapActions({ selectContact: SELECT_CONTACT })
  },
  watch: {
    selectedId(newId) {
      this.selectContact(newId);
    }
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
