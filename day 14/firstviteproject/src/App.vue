<template>
    <header>
        <h1>{{msg}}</h1>
    </header>
    <div class="container">
        <the-comment 
            v-model="myComment" 
            buttonText="Continue" 
            placeholder="Enter your comment..."
        >
        </the-comment>
        <br>
        <hr>
        <br>

        <p>
            Typing: {{ myComment }}
        </p>

    </div>

</template>

<script>
import TheComment from './TheComment.vue';


export default {
    data() {
        return {
            msg: "Welcome to first Vue Vite project",
            myComment: ""
        }
    },
    components: {
        TheComment
    },
    methods: {},
    beforeCreate() {
        console.log("beforeCreate");
        console.log(this.msg)
    },
    created() {
        console.log("created");
        console.log(this.msg)
    },
    beforeMount() {
        console.log("beforeMount");
        console.log(this.msg)
    },
    mounted() {
        console.log("mounted");
        console.log(this.msg)
    }

    
}

</script>

<style>

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
.box-shadow{
    box-shadow: 0px 0px 10px 0px #000;
}
</style>