var app = Vue.createApp({
    data() {
        return {
            count1: 0,
            count2: 0,
            tutorialiInfo: {
                name: "VueJs 3",
                githubLink: "https://www.github.com",
                htmlCode: ' <h3> My name is Rifat </h3>'
            }
        }
    },

    methods: {
        getCurrentTime() {
            let ct = new Date();
            return new Date();
        },
        increase(amount) {
            this.count2 = this.count2 + amount;
        },
        decrease(amount) {
            this.count2 = this.count2 - amount;
        },
        test(ev) {
            console.log(ev);
        }

    },

    mounted() {
        setInterval(() => {
            this.count1++;
        }, 1000);
    }


})

app.mount("#app")