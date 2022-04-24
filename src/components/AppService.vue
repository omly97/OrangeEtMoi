<template>
    <v-card flat color="transparent">
        <div v-for="itemComputed in menuComputed" :key="itemComputed.title" class="mb-3">
            <div class="font-weight-medium mb-1">{{ itemComputed.title }}</div>

            <v-list>
                <v-list-item v-for="(item, j) in itemComputed.menu" :key="j" link>
                    <v-list-item-avatar rounded size="30">
                        <v-img :src="item.icon"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
    </v-card>
</template>

<script>
import achatCreditIcon from "../assets/icons/achat-credit.svg";
import achatIllimixIcon from "../assets/icons/achat-pass-illimix.svg";
import achatInternetIcon from "../assets/icons/achat-pass-internet.svg";
import sosIcon from "../assets/icons/sos.svg";
import illustrationIcon from "../assets/icons/illustration.svg";

import orangeIcon from "../assets//img/logo-orange.png";
import rapidoIcon from "../assets//img/logo-rapido.png";
import sonatelIcon from "../assets//img/logo-sonatel.png";
import woyofalIcon from "../assets//img/logo-woyofal.png";

const TAG_ACHAT = 'achat';
const TAG_TRANSFERT = 'transfert';
const TAG_FACTURE = 'facture';
const TAG_SARGAL = 'sargal';
const TAG_AUTRE = 'autre';

export default {
    name: 'AppService',
    data() {
        return {
            menu: [
                // 01 Menu Achat
                {
                    title: 'Pass Internet',
                    icon: achatInternetIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Pass Illiflex',
                    icon: illustrationIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Pass Illimix',
                    icon: achatIllimixIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Pass International',
                    icon: illustrationIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Recharge Crédit',
                    icon: achatCreditIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Activer Dalal',
                    icon: illustrationIcon,
                    tag: TAG_ACHAT,
                    routeName: 'Dashboard'
                },

                // 02 Menu Transfert
                {
                    title: 'Argent',
                    icon: illustrationIcon,
                    tag: TAG_TRANSFERT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Crédit',
                    icon: illustrationIcon,
                    tag: TAG_TRANSFERT,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Bonus',
                    icon: illustrationIcon,
                    tag: TAG_TRANSFERT,
                    routeName: 'Dashboard'
                },

                // 03 Menu Facture
                {
                    title: 'Woyofal',
                    icon: woyofalIcon,
                    tag: TAG_FACTURE,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Sonatel',
                    icon: sonatelIcon,
                    tag: TAG_FACTURE,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Rapido',
                    icon: rapidoIcon,
                    tag: TAG_FACTURE,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Orange',
                    icon: orangeIcon,
                    tag: TAG_FACTURE,
                    routeName: 'Dashboard'
                },

                // 04 Menu Sargal
                {
                    title: "Minutes d'appels",
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Pass  Internet',
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Pass Illimix',
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },
                {
                    title: 'SMS',
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Numéro illimité',
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },
                {
                    title: "Bon d'achat",
                    icon: illustrationIcon,
                    tag: TAG_SARGAL,
                    routeName: 'Dashboard'
                },

                // 05 Menu
                {
                    title: 'Paiement marchand',
                    icon: illustrationIcon,
                    tag: TAG_AUTRE,
                    routeName: 'Dashboard'
                },
                {
                    title: 'Demander SOS',
                    icon: sosIcon,
                    tag: TAG_AUTRE,
                    routeName: 'Dashboard'
                },
            ],
        }
    },
    computed: {
        menuComputed() {
            return [
                { title: 'Achat', menu: this.filterMenu(TAG_ACHAT) },
                { title: 'Transfert', menu: this.filterMenu(TAG_TRANSFERT) },
                { title: 'Facture', menu: this.filterMenu(TAG_FACTURE) },
                { title: 'Sargal', menu: this.filterMenu(TAG_SARGAL) },
                { title: 'Autres services', menu: this.filterMenu(TAG_AUTRE) }
            ]
        }
    },
    methods: {
        filterMenu(tag) {
            return this.menu.filter(item => item.tag == tag);
        }
    }
}
</script>
