<template>
    <v-row class="mt-10">
        <v-col cols="6" offset-md="3">
            <v-card elevation="2" class="mt-16" :loading="loading">
                <v-card-title>
                    <h1>Registration</h1>
                </v-card-title>
                <v-card-text>
                    <form @submit.prevent="submit">
                        <v-text-field v-model="uname" label="Username" required></v-text-field>
                        <v-text-field v-model="fname" label="First Name" required></v-text-field>
                        <v-text-field v-model="lname" label="Last Name" required></v-text-field>
                        <v-text-field v-model="phone" label="Phone Number" required></v-text-field>
                        <v-text-field v-model="email" label="E-mail" required></v-text-field>
                        <v-btn class="mr-4" type="submit" :disabled="invalid">
                            submit
                        </v-btn>
                        <v-btn @click="clear">
                            clear
                        </v-btn>
                    </form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return {
            invalid: true,
            uname: '',
            fname: '',
            lname: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        clear(){
            this.uname = ''
            this.fname = ''
            this.lname = ''
            this.phone = ''
            this.email = ''
        }
    },
}
</script>