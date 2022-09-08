<template>
    <header>
        <h1>{{msg}}</h1>
    </header>
    <div>
        <h4>My Rating: {{ myRating }}</h4>
        <the-rating v-model="myRating"></the-rating>
    </div>

</template>

<script>
import TheRating from './TheRating.vue';


export default {
    data() {
        return {
            msg: "Welcome to first Vue Vite project",
            myRating: 4,
        }
    },
    methods: {
        
    },
    components: {
        TheRating
    }
}

</script>

<style scoped>
h1{
    text-align: center;
    background: green;
    color: #fff;
}
</style>