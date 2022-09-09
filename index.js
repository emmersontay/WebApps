var app = new Vue ({
    el: '#app',
    data: {
        template: `

        <form class="form" @submit.prevent="onSubmit">
                
        <p>
            <label for="email">Email:</label>
            <textarea id="email" v-model="email"></textarea>
        </p>

        <p>
            <label for="password">Password:</label>
            <textarea id="password" v-model="password"></textarea>
        </p>

        <p>
            <input type="submit" value="Submit">
        </p>

        </form>

        `,
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
            onSubmit() {
                if (this.email && this.password) {
                    let form = {
                        email: this.email,
                        password: this.password
                    }
                    this.$emit('form-submitted', form)
                    this.email = null
                    this.password = null
                }
            }
        }
    }
})


