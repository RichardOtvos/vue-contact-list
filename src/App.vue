<template>
  <div id="app">
    <router-view @on-new-contact="addContact" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contactList: [
        {
          id: '1',
          name: 'Joe Pizza',
          email: 'joseph@pizza.test',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime ' +
            'natus tempora temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus ' +
            'possimus praesentium quisratione sapiente tenetur.',
          avatarUrl:
            'http://tarpizza.com/wp-content/uploads/2016/10/napolyi-3.jpg'
        },
        {
          id: '2',
          name: 'Finom Zoldseg',
          email: 'finom@zoldseg.test',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime ' +
            'natus tempora temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus ' +
            'possimus praesentium quisratione sapiente tenetur.',
          avatarUrl:
            'https://reluctantentertainer.com/wp-content/uploads/2015/04/7-Tips-to-a-Delicious-Crudit%C3%A9s-Platter-3-700x1049.jpg'
        }
      ]
    };
  },
  methods: {
    addContact(contact) {
      this.contactList.push(contact);
      this.$router.push({
        name: 'details',
        params: { selectedId: contact.id }
      });
    }
  }
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
}
</style>
