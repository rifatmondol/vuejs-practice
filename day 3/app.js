var app = Vue.createApp({
    data() {
        return {
            skills: [
                { name: "Html", experience: 15 },
                { name: "Css", experience: 5 },
                { name: "Js", experience: 10 },
                { name: "Python", experience: 2 },
                { name: "Django", experience: 1 },
            ],
            newSkill: { name: "", experience: "" },
            aboutMe: {
                name: "Md. Rifat Mondol",
                nickName: "Rifat",
                website: "https://www.rifatml.com"
            },
            show: false,
            review: "",
            mobile: "",
            name2: {
                firstName: "",
                lastName: ""
            }
        }
    },
    // Computed property
    computed: {
        countskill1() {
            console.log("Counted from computed property");
            return this.skills.length
        },
        experiencedSkills() {
            let es = this.skills.filter(item => {
                return item.experience >= 10;
            })
            return es;
        }
    },

    // Watcher property
    watch: {
        mobile(newValue, oldValue) {
            console.log(newValue);
            if (isNaN(newValue)) {
                alert("Enter valid mobile number");
                this.mobile = oldValue;
            } else if (this.mobile.length == 11) {
                alert("An OTP has been sent to your number");
                this.mobile = "";
            }
        },
        // 'name2.firstName': function(newValue, oldValue) {
        //     console.log(newValue, oldValue)
        // },

        name2: {
            deep: true,
            handler: function(newValue) {
                console.log(newValue)
            }
        }

    },
    methods: {
        // List rendering

        addSkill() {
            this.skills.push(this.newSkill);
            this.newSkill = {};
        },
        removeSkill(i) {
            this.skills.splice(i, 1);
        },

        // Condition rendering
        toggle() {
            this.show = !this.show;

        },
        // countskill() {
        //     console.log("Counted from method");
        //     return this.skills.length
        // }
    },
})

app.mount("#app")