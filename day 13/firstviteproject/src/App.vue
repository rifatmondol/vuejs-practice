<template>
    <header>
        <h1>{{msg}}</h1>
    </header>
    <div class="container">
        <credit-card 
        v-model:nameOnCard = "nameOnCard"
        v-model:cardNumber = "cardNumber"
        v-model:expiry = "expiry"
        v-model:cvv = "cvv"
        ></credit-card>
        <br>
        <hr>
        <br>

        <p>
            Name: {{nameOnCard}} <br>
            Card Number: {{cardNumber}} <br>
            Expiry: {{expiry}} <br>
            Cvv: {{cvv}} <br>
        </p>

    </div>

</template>

<script>
import CreditCard from './CreditCard.vue';


export default {
    data() {
        return {
            msg: "Welcome to first Vue Vite project",
            nameOnCard: "",
            cardNumber: "",
            expiry: "",
            cvv: ""
        }
    },
    methods: {
        
    },
    
    components: {
        CreditCard
    }
}

</script>

<style scoped>

.container{
    padding: 22px;
}
h1 {
    text-align: center;
    background: green;
    color: #fff;
    margin: 0;
    padding: 20px 0px;
}
p{
    line-height: 1.8;
}
</style>