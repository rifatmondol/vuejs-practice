var app = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
            fullName: ""
        }
    },
    // Computed property
    computed: {
        // fullName() {
        //     return this.firstName + " " + this.lastName;
        // }
    },

    // Watcher property
    watch: {
        firstName(newValue) {
            this.fullName = newValue + " " + this.lastName;
        },
        lastName(newValue) {
            this.fullName = this.firstName + " " + newValue;
        }
    },
    methods: {
        // fullName() {
        //     return this.firstName + " " + this.lastName;
        // }
    },
})

app.mount("#app")