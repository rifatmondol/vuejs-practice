<template>
    <div class="contact-details">
        <h1 class="contact-heading">Contact Details</h1>
        <p><strong>Name: </strong> {{name}}</p>
        <p><strong>Mobile: </strong> {{mobile}}</p>
        <p><strong>Address: </strong> {{address}}</p>
    </div>
</template>

<script>
export default {
    // props: ["name", "mobile", "address"],
    props: {
        "name": {
            type: String,
            required: true
        },
        "mobile": {
            type: String,
            required: false,
            default: "+8801546343336"
        },
        "address": {
            type: String,
            required: true
        }
    },
    data() {
        return {
            
        };
    }
}
</script>

<style scoped>

.contact-details{
    border: 1px solid #000;
    margin: 11px 22px;
    padding: 20px;
}
.contact-heading{
    color: #173d4d;
}
</style>