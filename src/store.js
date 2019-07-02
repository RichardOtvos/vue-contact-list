import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const ADD_CONTACT = 'ADD_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export const contactStore = new Vuex.Store({
  state: {
    selectedContactId: null,
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
  },
  getters: {
    currentlySelectedContact(state) {
      if (state.selectedContactId) {
        return state.contactList.find(
          contact => contact.id === state.selectedContactId
        );
      }
      return null;
    }
  },
  mutations: {
    [ADD_CONTACT](state, contact) {
      state.contactList.push(contact);
    },
    [SELECT_CONTACT](state, contactId) {
      state.selectedContactId = contactId;
    }
  },
  actions: {
    [ADD_CONTACT]({ commit }, contact) {
      commit(ADD_CONTACT, contact);
    },
    [SELECT_CONTACT]({ commit }, contactId) {
      commit(SELECT_CONTACT, contactId);
    }
  }
});
