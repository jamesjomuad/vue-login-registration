<template>
    <div>
        <Sidebar/>

        <v-app-bar app>
            <v-toolbar-title>
                <v-icon>mdi-electron-framework</v-icon> &nbsp; {{pageTitle}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <h1 class="text-left">Statistics</h1>
                <!-- If using vue-router -->
            </v-container>

        <v-footer app>
            <!-- -->
        </v-footer>
    </div>
</template>

<script>
export default {
    components: {
        Sidebar: () => import('../components/Sidebar')
    },
    data(){
        return {
            pageTitle: "Dashboard"
        }
    }
}
</script>