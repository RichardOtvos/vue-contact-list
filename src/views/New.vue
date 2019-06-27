<template>
  <div id="new-contact-page">
    <h1>New Contact</h1>
    <add-contact></add-contact>
  </div>
</template>

<script>

import AddContact from '../components/AddContact';

export default {
  name: 'New',
  components:{
    AddContact
  }
};
</script>

<style scoped>
#new-contact-page {
  margin: auto;
  text-align: center;
}
</style>
