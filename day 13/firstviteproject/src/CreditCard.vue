<template>
  <div class="credit-card">
    <label>Name on Card</label>
    <input type="text" 
    :value="nameOnCard" 
    @input="handleInput('update:nameOnCard', $event)"
    >
    <br>

    <label>Card Number</label>
    <input type="text" 
    :value="cardNumber" 
    @input="handleInput('update:cardNumber', $event)"
    >
    <br>

    <div class="row">
        <div class="col-6">
            <label>Expiry </label>
            <input type="text" 
                placeholder="MM/DD"
                :value="expiry" 
                @input="handleInput('update:expiry', $event)"
            >
            <br>
        </div>
        <div class="col-6">
            <label>CVV</label>
            <input type="text" 
                :value="cvv" 
                @input="handleInput('update:cvv', $event)"
            >
            <br>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
        nameOnCard: {
            type: String,
            default: ""
        },
        cardNumber: {
            type: String,
            default: ""
        },
        expiry: {
            type: String,
            default: ""
        },
        cvv: {
            type: String,
            default: ""
        },
    },
    methods: {
        handleInput(eventName, e) {
            this.$emit(eventName, e.target.value)
        }
    },
    watch: {
        expiry(newValue) {
            console.log(newValue)

            if (newValue.length == 2) {
                this.$emit("update:expiry", newValue + '/');
            }
           
            
        }
    },
}
</script>

<style>
label{
    margin-bottom: 10px;
    display: block;
}
.credit-card {
    width: 290px;
    border: 1px solid gray;
    padding: 22px;
    border-radius: 5px;
    background: rgb(238, 227, 227);
    color: rgb(82, 82, 82);
    min-height: 110px;
}
input{
    padding: 7px  0px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 100%;
    border: 1px solid gray;
    text-indent: 4px;
}
.row{
    display: flex;
}
.col-6{
    flex: 1;
    padding: 0px 2px;
}
</style>