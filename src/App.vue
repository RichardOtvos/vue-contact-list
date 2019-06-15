<template>
  <div id="app">
    <ContactCard></ContactCard>
  </div>
</template>

<script>
import ContactCard from './components/ContactCard.vue';

export default {
  name: 'app',
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

  .contact-card{
    margin: auto;
  }
</style>
