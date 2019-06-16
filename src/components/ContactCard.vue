<template>
    <div class="contact-card">
        <img src="../assets/logo.png" :alt="`The profile picture of ${name}`" :title="`The profile picture of ${name}`">
        <div class="contact-details">
            <p><span class="label">Name:</span> {{name}}</p>
            <p><span class="label">Email:</span> {{email}}</p>
            <p><span class="label">Bio:</span>{{bio}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactCard",
        props: ['name', 'email', 'bio']
    }
</script>

<style scoped>
    .contact-card {
        width: 35em;
        display: flex;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    }

    img {
        width: 15em;
        min-height: 15em;
        flex: none;
    }

    .contact-details {
        text-align: left;
        margin-left: 20px;
    }

    .label {
        font-weight: bold;
    }
</style>
