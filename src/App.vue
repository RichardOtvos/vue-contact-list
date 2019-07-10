<template>
  <div id="app">
    <md-app>
      <md-app-drawer md-fixed md-permanent="full">
        <ContactList />
      </md-app-drawer>
      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList';
export default {
  name: 'App',
  components: {
    ContactList
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.md-app {
  height: 100vw;
}

#app .md-app-drawer {
  max-width: 230px;
}
</style>
