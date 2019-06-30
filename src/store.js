import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  }
});
