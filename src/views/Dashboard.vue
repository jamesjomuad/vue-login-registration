<template>
    <div>
        <Sidebar/>

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
}
</script>