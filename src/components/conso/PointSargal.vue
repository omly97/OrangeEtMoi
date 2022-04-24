<template>
    <v-card flat color="grey darken-4">
        <v-img :src="images.backgroundSargal">
            <v-list-item two-line>
                <v-list-item-avatar tile>
                    <v-img :src="images.pointsSargal"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text font-weight-medium">Sargal</v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                        <span class="text-h4">{{ data.totalPoints }}</span>
                        <span class="ml-3 text-body-1">Pts</span>
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action class="pa-0 ma-0">
                    <v-btn text small color="white" @click="fetchData" :loading="loading">
                        <v-icon>mdi-reload</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-img>
    </v-card>
</template>

<script>
import backgroundSargal from '../../assets/icons/sargal-background.svg'
import pointsSargal from '../../assets/icons/sargal-points.svg'

export default {
    name: 'PointSargal',
    data() {
        return {
            loading: false,
            data: {},
            images: {
                backgroundSargal: backgroundSargal,
                pointsSargal: pointsSargal
            }
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true
            this.$api.getPointSargal(this.$store.state.auth.mobile)
                .then(response => {
                    this.data = response;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false
                })
        },
    }
}
</script>
