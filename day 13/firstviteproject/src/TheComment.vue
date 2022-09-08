<template>
  <div class="the-comment">
    
    <textarea 
        :value="modelValue" 
        @input="handleInput"
    > 
    </textarea>

    <div class="text-right">
        <button>{{buttonText}}</button>
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
    methods: {
        handleInput(e) {
            this.$emit("update:modelValue", e.target.value)
        }
    },
}
</script>

<style>

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
    padding: 7px  0px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 100%;
    border: 1px solid gray;
    text-indent: 4px;
    resize: none;
}
</style>