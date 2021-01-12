<template>
	<v-row class="mt-15">
		<v-col cols="12" sm="3">

		</v-col>
		<v-col cols="12" sm="6">

			<v-card elevation="2" class="mt-16" :loading="loading">
				<v-card-title>
					<h1>Login</h1>
				</v-card-title>
				<v-card-text>
					<v-form ref="form" v-model="valid" lazy-validation background-color="light-blue">
						<v-text-field v-model="username" :counter="10" label="Username" required></v-text-field>
						<v-text-field v-model="password" label="Password" required></v-text-field>
					</v-form>
				</v-card-text>
				<v-card-actions class="mx-6">
					<v-btn large block :disabled="!valid" color="success" class="m-10 mb-6" @click="login" :loading="loading">Login</v-btn>
				</v-card-actions>
			</v-card>

			<br>
			<v-alert v-show="error" color="red" dark transition="fade-transition">
				{{errorMessage}}
			</v-alert>
			<p class="mt-8">
				user: demo <br>
				pass: demo
			</p>
		</v-col>
		<v-col cols="12" sm="3">

		</v-col>
	</v-row>
</template>

<script>
// import store from '../store'

export default {
	data(){
		return {
			loading: false,
			valid: false,
			username: "demo",
			password: "demo",
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
		async login (){
			const { username, password } = this;
      
			this.loading = true; 
			this.$store.dispatch('login', { username, password }).then(() => {
				this.loading = false;
				this.$router.push({name:'Dashboard'})
			})
		}
	},
	mounted(){
		// console.log(store.getters.auth.loggedIn)
	}
}
</script>