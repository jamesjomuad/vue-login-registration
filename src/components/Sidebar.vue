<template>
    <div>
        <v-navigation-drawer permanent app dark>
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Jane jomuad</v-list-item-title>
                    <v-list-item-subtitle>Status: Active</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
        
            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link @click="$router.push({ path: item.path })">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-toolbar-title>
                <v-icon>mdi-electron-framework</v-icon> &nbsp; {{pageTitle}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="logout()" :loading="loading">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    data () {
      return {
        pageTitle: this.$route.meta.title,
        loading: false,
        items: [
            { title: "Inbox", icon: 'mdi-email' },
            { title: "Sent", icon: 'mdi-send' },
            { title: "Spam", icon: 'mdi-email-alert' },
            { title: "Trash", icon: 'mdi-trash-can' },
        ],
        right: null,
      }
    },
    methods:{
        logout(){
            this.loading = true;
            this.$parent.logout()
            .then(() => {
                this.loading = false;
            })  

            // this.loading = true;
            // window.setTimeout(() => { 
            //     this.loading = false;
                
            // }, 2000)
        }
    }
}
</script>

