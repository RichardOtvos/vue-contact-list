<template>
    <div class="contact-details">
        <ContactList
                :contactList="contactList"
                :selectedId="currentContactId"
                @on-list-item-click="changeToContact"
        ></ContactList>
        <div class="card-holder">
            <ContactCard
                    :id="selectedContact.id"
                    :name="selectedContact.name"
                    :email="selectedContact.email"
                    :bio="selectedContact.bio"
                    :avatar-url="selectedContact.avatarUrl"
            ></ContactCard>
        </div>
    </div>
</template>

<script>
    import ContactCard from './ContactCard.vue';
    import ContactList from './ContactList';

    export default {
        name: 'ContactDetails',
        data() {
            return {
                currentContactId: '2',
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
                            'http://tarpizza.com/wp-content/uploads/2016/10/napolyi-3.jpg',
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
                            'https://reluctantentertainer.com/wp-content/uploads/2015/04/7-Tips-to-a-Delicious-Crudit%C3%A9s-Platter-3-700x1049.jpg',
                    },
                ],
            };
        },
        computed: {
            selectedContact() {
                return this.contactList.find(
                    contact => contact.id === this.currentContactId
                );
            },
        },
        methods: {
            changeToContact(newId) {
                this.currentContactId = newId;
            },
        },
        components: {
            ContactList,
            ContactCard,
        },
    };
</script>

<style scoped>
    .contact-details{
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
