<template>
    <v-card flat color="#50BE87">
        <v-list-item two-line>
            <v-list-item-avatar tile size="40">
                <v-icon size="40" color="white">mdi-phone-forward</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="white--text font-weight-medium">Crédit global</v-list-item-title>
                <v-list-item-subtitle class="white--text">
                    <span class="text-h4">{{ data.montantRestantBrut }}</span>
                    <span class="ml-3 text-body-1">FCFA</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-caption white--text font-weight-medium">{{ `Expire le: ${data.dateExpiration}` }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="pa-0 ma-0">
                <v-btn text small color="white" @click="fetchData" :loading="loading">
                    <v-icon>mdi-reload</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name: 'CreditGlobal',
    data() {
        return {
            loading: false,
            data: {},
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true
            this.$api.getCreditGlobal(this.$store.state.auth.mobile)
                .then(response => {
                    this.data = response[0];
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
