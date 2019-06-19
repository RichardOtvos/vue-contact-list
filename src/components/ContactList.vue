<template>
  <div class="contact-list">
    <h2>Contacts</h2>
    <ul>
      <li v-for="contact in contactList">{{ contact.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactList",
  props: {
    contactList: Array
  }
};
</script>

<style scoped>
.contact-list {
  width: 200px;
  height: 100vh;
  padding: 10px 20px;
  background: #6cb289;
  color: white;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.3);
}

li {
  cursor: pointer;
}

li:hover {
  font-weight: bold;
}
</style>
