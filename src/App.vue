<template>
    <div id="app">
        <ContactCard
                :name="contact.name"
                :email="contact.email"
                :bio="contact.bio"
        ></ContactCard>
    </div>
</template>

<script>
    import ContactCard from './components/ContactCard.vue';

    export default {
        name: 'app',
        data: function () {
            return {
                contact: {
                    name: 'Joe Pizza',
                    email: 'joseph@pizza.test',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime ' +
                        'natus tempora temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus ' +
                        'possimus praesentium quisratione sapiente tenetur.'
                }
            }
        },
        components: {
            ContactCard
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px;
    }

    .contact-card {
        margin: auto;
    }
</style>
