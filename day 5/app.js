var app = Vue.createApp({
    data() {
        return {

        }
    }
});

app.component("contact-details", {
    data() {
        return {
            name: ""
        };
    },
    template: `
        <h1>Contact Details</h1>
        <p><strong>Name:</strong> Rifat Mondol</p>
        <p><strong>Mobile:</strong> 01782287426</p>
    `
});


app.mount("#app")