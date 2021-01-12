<template>
    <div>
        <Sidebar/>
        <v-container fluid>
            <!-- <h1 class="text-left">Statistics</h1> -->
            <v-row>
                <v-col cols="">
                    <h2 class="text-left">Sparkline</h2>
                    <v-sparkline
                        :value="sparkline.value"
                        :gradient="sparkline.gradient"
                        :smooth="sparkline.radius || false"
                        :padding="sparkline.padding"
                        :line-width="sparkline.width"
                        :stroke-linecap="sparkline.lineCap"
                        :gradient-direction="sparkline.gradientDirection"
                        :fill="sparkline.fill"
                        :type="sparkline.type"
                        :auto-line-width="sparkline.autoLineWidth"
                        auto-draw
                    ></v-sparkline>
                </v-col>
                <v-col cols="">
                    <h2 class="text-left">Heart Rate</h2>
                </v-col>
            </v-row>
        </v-container>

        <v-footer app>
            <!-- -->
        </v-footer>
    </div>
</template>

<script>
const sparkline = {
    gradients: [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ],
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: ['#f72047', '#ffd200', '#1feaea'],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    fill: false,
    type: 'trend',
    autoLineWidth: false,
}

export default {
    data: () => ({
        sparkline
    }),
    components: {
        Sidebar: () => import('../components/Sidebar')
    },
    methods:{
        async logout(){
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/login')
            })  
        }
    }
}
</script>