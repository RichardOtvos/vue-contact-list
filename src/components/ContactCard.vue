<template>
    <div class="contact-card">
        <img src="../assets/logo.png" alt="The profile picture">
        <div class="contact-details">
            <p><span class="label">Name:</span> {{name}}</p>
            <p><span class="label">Email:</span> alma@korte.com</p>
            <p><span class="label">Bio:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ipsum maxime natus tempora
                temporibus. Accusamus ad atque ea explicabo, ipsam maiores minima minus possimus praesentium quis
                ratione sapiente tenetur.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactCard",
        data: function () {
            return {
                name: "Ricsi"
            }
        }
    }
</script>

<style scoped>
    .contact-card{
        width: 35em;
        display: flex;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    }

    img{
        width: 15em;
        min-height: 15em;
        flex: none;
    }

    .contact-details{
        text-align: left;
        margin-left: 20px;
    }

    .label{
        font-weight: bold;
    }
</style>
