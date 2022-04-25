<template>
    <v-card flat>
        <!-- Loader -->
        <v-skeleton-loader v-if="loading" type="table" height="100%"></v-skeleton-loader>

        <!-- Print Data -->
        <template v-if="!loading && data.length">
            <v-card-actions class="d-flex justify-end ml-auto">
                <v-spacer></v-spacer>
                <!-- Select categorie -->
                <v-select
                    :items="categoriesItems"
                    item-text="text"
                    item-value="value"
                    label="Compteur"
                    outlined
                    dense
                    v-model="categorie"
                />
                <div class="mx-2"></div>
                <!-- Select day -->
                <v-select
                    :items="daysItems"
                    item-text="text"
                    item-value="value"
                    label="Compteur"
                    outlined
                    dense
                    v-model="days"
                    @change="fetchData"
                />
            </v-card-actions>

            <v-simple-table class="transparent">
                <template v-slot:default>
                    <tbody>
                        <tr v-for="(item, i) in dataComputed" :key="i">
                            <td>
                                <div class="d-flex flex-row">
                                    <v-avatar class="my-2 mr-2" size="40">
                                        <v-img :src="item.categorie == 'APPEL' ? images.appelIcon : images.smsIcon"></v-img>
                                    </v-avatar>
                                    <div class="align-self-center">
                                        <div class="">{{ item.categorie }}</div>
                                        <div class="font-weight-bold">{{ item.calledNumber }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-column">
                                    <div class="font-weight-bold" v-if="item.categorie == 'APPEL'">{{ secondsToDuration(item.duration )}}</div>
                                    <div class="text-caption">{{ item.date }}</div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-column">
                                    <div class="font-weight-bold">{{ `${item.charge1} FCFA` }}</div>
                                    <div class="">{{ item.chargeType1 }}</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </template>
    </v-card>
</template>

<script>
import appelIcon from '../../assets/icons/appel.svg';
import smsIcon from '../../assets/icons/sms.svg';

const LAST_2_DAYS = 2;
const LAST_3_DAYS = 3;
const LAST_5_DAYS = 5;
const LAST_7_DAYS = 7;

const CATEGORIE_APPEL = 'APPEL';
const CATEGORIE_SMS = 'SMS';
const CATEGORIE_TOUT = 'TOUT';

export default {
    name: 'SuiviConsoByDays',
    data() {
        return {
            loading: false,
            days: LAST_2_DAYS,
            categorie: CATEGORIE_TOUT,
            daysItems: [
                { value: LAST_2_DAYS, text: "2 derniers jours" },
                { value: LAST_3_DAYS, text: "3 derniers jours" },
                { value: LAST_5_DAYS, text: "5 derniers jours" },
                { value: LAST_7_DAYS, text: "7 derniers jours" },
            ],
            categoriesItems: [
                { value: CATEGORIE_TOUT, text: "SMS et APPELS" },
                { value: CATEGORIE_APPEL, text: "APPEL" },
                { value: CATEGORIE_SMS, text: "SMS" },
            ],
            images: {
                appelIcon: appelIcon,
                smsIcon: smsIcon,
            },
            data: [],
        }
    },
    created() {
        this.fetchData();
    },
    computed: {
        dataComputed() {
            if (this.categorie == CATEGORIE_TOUT) {
                return this.data
            } else {
                return this.data.filter(item => item.categorie == this.categorie)
            }
        }
    },
    methods: {
        fetchData() {
            this.loading = true
            this.$api.getSuiviConsoByDays(this.$store.state.auth.mobile, this.days)
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
        secondsToDuration(seconds) {
            return this.$moment.duration(seconds, 'seconds').format("hh [h] mm [min] ss [s]");
        }
    }
}
</script>
