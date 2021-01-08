<template>
    <div class="mt-5">
        <h1>Registration</h1>
        <form @submit.prevent="submit">
            <v-text-field v-model="uname" :counter="10" label="Username" required></v-text-field>
            <v-text-field v-model="fname" :counter="10" label="First Name" required></v-text-field>
            <v-text-field v-model="lname" :counter="10" label="Last Name" required></v-text-field>
            <v-text-field v-model="phone" :counter="7" label="Phone Number" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
        </form>
    </div>
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