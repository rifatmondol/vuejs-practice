<template>
    <div class="the-card">
        <div class="the-card-title">
            {{ cardContent }}
        </div>
        <div class="the-card-body">
            <slot>Default slot goes here</slot>
        </div>
        <div class="the-card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.footer)
    },
    props: ["cardContent"]
}
</script>

<style>
img{
    width: 111px;
}
p,ul{
    padding: 0;
    margin: 0;
}
.the-card{
    width: 200px;
    border: 1px solid rgb(148, 189, 241);
    margin: 20px auto;
    min-height: 100px;
}
.the-card-title{
    background: rgb(72, 111, 236);
    padding: 5px 11px;
    color: #fff;
    padding: 10px;
}
.the-card-body{
    padding: 10px;
}
.the-card-footer{
    background: #ddd;
    padding: 5px;
    text-align: center;
}
</style>