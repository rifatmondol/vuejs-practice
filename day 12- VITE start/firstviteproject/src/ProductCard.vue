<template>
    <div class="product-card">
        <div class="product-card-title">
            <div>{{ product.name }}</div>
            <img src="/img/star.png" v-if="product.addedToFavourite" alt="" @click="toggleBookmark">
            <img src="/img/un-star.png" v-else alt="" @click="toggleBookmark">
        </div>
        <div class="product-card-body">
            <img :src="product.thumbnail" alt="">
            <p>{{ product.price }}</p>
        </div>
        <div class="product-card-footer">
            <button @click="handleAddToCartClicks">Add to Cart</button>
            <button @click="handlebuyClicks">Buy Now</button>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.footer)
    },
    emits: {
        "buy-now-clicked" : function (data) {
            if (!data) {
                console.error("Data missing for buy now clicked")
                return false;
            }
            return true;
        }
    },
    props: { product: { type: Object, default: () => ({}) } },
    methods: {
        handlebuyClicks() {
            this.$emit("buy-now-clicked", this.product);
        },
        handleAddToCartClicks() {
            this.$emit("add-to-cart-clicked", this.product);
        },
        toggleBookmark() {
            this.$emit("toggle-bookmark", this.product);
        }
    },
}
</script>

<style>
.product-card-body img{
    width: 111px;
    margin: 5px;
}
.product-card-title img {
    width: 25px;
}
p,ul{
    padding: 0;
    margin: 0;
}
.product-card{
    width: 400px;
    border: 1px solid rgb(148, 189, 241);
    margin: 20px auto;
    min-height: 200px;
}
.product-card-title {
    background: rgb(72, 111, 236);
    padding: 5px 11px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product-card-body{
    padding: 20px;
    text-align: center;
}
.product-card-footer{
    background: #ddd;
    padding: 5px;
    text-align: center;
}
button {
    padding: 5px 15px;
    margin: 5px;
    font-size: 15px;
}
</style>