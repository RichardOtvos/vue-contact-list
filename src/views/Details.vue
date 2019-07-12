<template>
  <div class="contact-details-page">
    <div class="card-holder">
      <transition name="fade" mode="out-in">
        <ContactCard v-if="selectedContactId" />
        <div class="empty-contact" v-else>
          <md-empty-state
            md-label="No contact selected"
            md-description="Choose a contact to see it's details!"
          >
          </md-empty-state>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';
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
