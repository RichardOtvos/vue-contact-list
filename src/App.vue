<template>
  <div id="app">
    <md-app class="md-layout">
      <md-app-drawer
        class="md-layout-item md-size-15"
        md-fixed
        md-permanent="full"
      >
        <ContactList />
      </md-app-drawer>
      <md-app-content class="md-layout-item md-size-100">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
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
  height: 100vh;
}

.md-app-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

/*Fade animation*/
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
