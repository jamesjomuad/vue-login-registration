<template>
    <v-row class="mt-n12">
        <v-col cols="12" sm="4">

        </v-col>
        <v-col cols="12" sm="4">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="username" :counter="10" label="Username" required></v-text-field>
                <v-text-field v-model="password" label="Password" required></v-text-field>
                <v-btn :disabled="!valid" color="dark" class="mr-4" @click="login">Login</v-btn>
            </v-form>
            <br>
            <br>
            <v-alert v-show="error" color="red" dark transition="fade-transition">
                {{errorMessage}}
            </v-alert>
            <br>
            <br>
            <p class="mt-15">
                user: Freddy22 <br>
                pass: demo
            </p>

            
        </v-col>
        <v-col cols="12" sm="4">

        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return {
            valid: false,
            username: null,
            password: null,
            errorMessage: "User not found!",
            error: false
        }
    },
    watch:{
        username(){
            this.isValid()
        },
        password(){
            this.isValid()
        }
    },
    methods: {
        login (){
            if(this.username=="Freddy22" && this.password=="demo"){
                this.$router.push('dashboard')
            }
            else{
                this.error = true;
                window.setInterval(() => { this.error = false; }, 3000)   
            }

        },
        isValid(){
            if(this.username!=null && this.password!=null){
                this.valid = true;
            }
        }
    }
}
</script>