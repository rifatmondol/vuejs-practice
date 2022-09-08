<template>
  <div class="the-comment">
    
    <textarea 
        :value="modelValue" 
        @input="handleInput"
        v-bind="$attrs"
    > 
    </textarea>

    <div class="text-right">
        <button @click="handleButton" :value="modelValue">{{buttonText}}</button>
    </div>

  </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        buttonText: {
            type: String,
            default: "Ok"
        }
    },
    inheritAttrs: false,
    created() {
        // console.log(this.$attrs)
    },
    methods: {
        handleInput(e) {
            this.$emit("update:modelValue", e.target.value)
        },
        handleButton(e) {
            this.$emit("update:modelValue", ""),
            console.log(e.target.value)
        }
    },
    
}
</script>

<style scoped>

.the-comment {
    width: 290px;
    border: 1px solid gray;
    padding: 22px;
    border-radius: 5px;
    background: rgb(229 229 229);
    color: rgb(82, 82, 82);
    min-height: 110px;
}
.text-right{
    text-align: right;
}
textarea{
    padding: 7px  9px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 100%;
    max-width: 270px;
    border: 1px solid gray;
    resize: none;
}

</style>