var app = Vue.createApp({
    data() {
        return {
            name: "",
            number: "",
            result: "",
            activeClass: "red",
            bgColor: "green",
            textColor: "black",
            skills: [
                { name: "Html", experience: 5 },
                { name: "Css", experience: 10 },
                { name: "Js", experience: 15 },
            ],
            newSkill: { name: "", experience: 0 }
        }
    },
    methods: {
        // Event modifier

        handleCardClicked() {
            console.log("Card clicked!");
        },
        handleViewClicked(e) {
            //e.stopPropagation();
            console.log("View clicked")
        },
        handlekeyup(e) {
            this.name = e.target.value;
        },
        handleFormClick(e) {
            //e.preventDefault();
            console.log("Form submitted!");
        },

        // Two way binding and modifier

        getDouble() {
            this.result = this.number * 2;
        },
        getSquare() {
            this.result = this.number * this.number;
        },
        addTwenty() {
            this.result = this.number + 20;
        },
        reset() {
            this.result = '';
            this.number = '';
        },

        // Class binding & attribute binding

        setClass(className) {
            this.activeClass = className;
        },

        // List rendering

        addSkill() {
            this.skills.push(this.newSkill);
            this.newSkill = {};
        },
        removeSkill(i) {
            this.skills.splice(i, 1);
        }
    },
})

app.mount("#app")