<template>
  <div class="contact-details-page">
    <ContactList
      :contactList="contactList"
      :selectedId="selectedId"
    ></ContactList>
    <div class="card-holder">
      <ContactCard
        v-if="selectedId"
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
import { mapState } from 'vuex';

export default {
  name: 'ContactDetails',
  props: { selectedId: String, default: null },
  computed: {
    selectedContact() {
      return this.contactList.find(contact => contact.id === this.selectedId);
    },
    ...mapState(['contactList'])
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
