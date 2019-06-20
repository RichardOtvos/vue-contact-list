<template>
  <div id="app">
    <ContactList :contactList="contactList"></ContactList>
    <div class="card-holder">
      <ContactCard
        :name="selectedContact.name"
        :email="selectedContact.email"
        :bio="selectedContact.bio"
        :avatar-url="selectedContact.avatarUrl"
      ></ContactCard>
    </div>
  </div>
</template>

<script>
import ContactCard from './components/ContactCard.vue';
import ContactList from './components/ContactList';

export default {
  name: 'app',
  data: function() {
    return {
      currentContactId: 1,
      contactList: [
        {
          name: 'Joe Pizza',
          email: 'joseph@pizza.test',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime ' +
            'natus tempora temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus ' +
            'possimus praesentium quisratione sapiente tenetur.',
          avatarUrl:
            'http://tarpizza.com/wp-content/uploads/2016/10/napolyi-3.jpg',
        },
        {
          name: 'Finom Zoldseg',
          email: 'finom@zoldseg.test',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime ' +
            'natus tempora temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus ' +
            'possimus praesentium quisratione sapiente tenetur.',
          avatarUrl:
            'https://reluctantentertainer.com/wp-content/uploads/2015/04/7-Tips-to-a-Delicious-Crudit%C3%A9s-Platter-3-700x1049.jpg',
        },
      ],
    };
  },
  computed: {
    selectedContact() {
      return this.contactList[this.currentContactId];
    },
  },
  components: {
    ContactList,
    ContactCard,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
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
