<template>
    <v-row class="mt-10">
        <v-col cols="6" offset-md="3">
            <v-card elevation="2" class="mt-16" :loading="loading">
                <v-card-title>
                    <h1>Registration</h1>
                </v-card-title>
                <v-card-text>
                    <form @submit.prevent="submit">
                        <v-text-field v-model="form.uname" label="Username" required></v-text-field>
                        <v-text-field v-model="form.fname" label="First Name" required></v-text-field>
                        <v-text-field v-model="form.lname" label="Last Name" required></v-text-field>
                        <v-text-field v-model="form.phone" label="Phone Number" required></v-text-field>
                        <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
                        <v-btn class="mr-4" type="submit" :disabled="invalid">
                            Register
                        </v-btn>
                        <v-btn @click="clear">
                            Clear
                        </v-btn>
                    </form>
                </v-card-text>
            </v-card>
            <v-btn class="mt-10" color="success" @click="$router.push({ path: '/login' })">
                Back to Login
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import mixin from '../plugins/mixin' 

export default {
    name: "Registration",
    mixins: [mixin],
    data(){
        return {
            loading: false,
            invalid: false,
            form: {
                uname: '',
                fname: '',
                lname: '',
                phone: '',
                email: ''
            }
        }
    },
    methods: {
        submit(){
            console.log(this.clearObject({name:"james jomuad"}))
        },
        clear(){
            this.form = {}
        }
    },
}
</script>