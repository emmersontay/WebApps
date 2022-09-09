var app = new Vue({
    el: '#app',
    data: {
        heading: "<h2> Emotional Diary </h2>",
        p: "<p> Choose a feeling below and talk about your day today:</p>",
        img1: "<img src='https://images.squarespace-cdn.com/content/v1/5b7c56e255b02c683659fe43/1626637056364-57AM8Y955ASO40TCXTO0/MCC-Empathy-2-feelings.png?format=1500w'>",
        template: `
        <form class="entry-form" @submit.prevent="onSubmit">

        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
        </p>
            
        <p>
            <label for="email">Email:</label>
            <textarea id="email" v-model="email"></textarea>
        </p>

        <p>
            <label for="entry">Entry:</label>
            <textarea id="entry" v-model="entry"></textarea>
        </p>

        <p>
            <input type="submit" value="Submit">
        </p>

    </form>
        `,
        data() {
            return {
                name: null,
                email: null,
                entry: null
            }
        },
        methods: {
            onSubmit() {
                let appEntry = {
                    name: this.name,
                    email: this.email,
                    entry: this.entry
                }
                this.$emit('entry-submitted', appEntry)
                this.name =  null
                this.email = null
                this.entry = null
            }
        }
    }
})
