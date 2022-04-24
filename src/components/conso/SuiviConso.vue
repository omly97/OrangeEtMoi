<template>
    <v-card flat color="transparent">
        <!-- Loader -->
        <template v-if="loading">
            <v-skeleton-loader v-for="i in 3" :key="i" type="image" height="100%" class="mb-5"></v-skeleton-loader>
        </template>

        <!-- Print Data -->
        <template v-else>
            <div v-for="item in dataComputed" :key="item.title" class="mb-5">
                <v-list subheader>
                    <v-subheader class="font-weight-bold text-uppercase">{{ item.title }}</v-subheader>

                    <v-list-item v-for="(subitem, i) in item.data" :key="i">
                        <v-list-item-content>
                            <v-list-item-title v-text="subitem.name"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content>
                            <v-list-item-title v-text="subitem.montantRestant"></v-list-item-title>
                            <v-list-item-subtitle v-text="`Expire le ${subitem.dateExpiration}`"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
        </template>
    </v-card>
</template>

<script>
const COMPTEUR_INTERNET = 'INTERNET';
const COMPTEUR_APPEL = 'APPEL';
const COMPTEUR_SMS = 'SMS';

export default {
    name: 'SuiviConso',
    data() {
        return {
            loading: false,
            data: [],
        }
    },
    created() {
        this.fetchData();
    },
    computed: {
        dataComputed() {
            return [
                { title: 'Crédit Appel', data: this.filterCompteur(COMPTEUR_APPEL) },
                { title: 'INTERNET', data: this.filterCompteur(COMPTEUR_INTERNET) },
                { title: 'SMS', data: this.filterCompteur(COMPTEUR_SMS) },
            ]
        }
    },
    methods: {
        fetchData() {
            this.loading = true
            this.$api.getSuiviConso(this.$store.state.auth.mobile)
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
        filterCompteur(compteur) {
            return this.data.filter(item => item.typeCompteur == compteur);
        }
    }
}
</script>
