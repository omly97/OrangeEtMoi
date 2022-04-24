<template>
    <v-list>
        <!-- account Infos -->
        <v-list-item>
            <template v-if="loading" >
                <v-list-item-content>
                    <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
                </v-list-item-content>
            </template>

            <template v-else>
                <v-list-item-avatar rounded size="60">
                    <v-img :src="account.imageProfil == null ? userImg : account.imageProfil"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-subtitle>Bienvenue</v-list-item-subtitle>
                    <v-list-item-title class="font-weight-medium">{{ `${account.firstName} ${account.lastName}` }}</v-list-item-title>
                </v-list-item-content>
            </template>
        </v-list-item>

        <v-divider class="mx-2 my-3"></v-divider>

        <!-- Menu 1 -->
        <v-list-item v-for="(item, i) in menu1" :key="i" link :to="{ name: item.routeName }">
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-2 my-3"></v-divider>

        <!-- Menu 2 -->
        <v-list-item v-for="(item, i) in menu2" :key="i+10" link :to="{ name: item.routeName }">
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-2 my-3"></v-divider>

        <!-- Logout -->
        <v-list-item @click="logout">
            <v-list-item-icon>
                <v-icon color="#FF7900">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold oem-text">Je me deconnecte</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import userImg from '../assets/img/user.png';

export default {
    name: 'AppMenu',
    data() {
        return {
            loading: false,
            account: {},
            userImg: userImg,
            menu1: [
                {
                    title: 'Mon suivi Conso',
                    routeName: 'MyConso',
                    icon: 'mdi-circle-slice-6'
                },
                {
                    title: 'Mon Historiqe',
                    routeName: 'MyHistorical',
                    icon: 'mdi-clipboard-text-clock-outline'
                },
                {
                    title: 'Ma formule',
                    routeName: 'MyFormule',
                    icon: 'mdi-tag-text-outline'
                },
            ],
            menu2: [
                {
                    title: 'Mon compte',
                    subtitle: 'Modifier mes infos perssonnelles',
                    routeName: 'MyAccount',
                    icon: 'mdi-account-tie'
                },
                /* {
                    title: "Besoin d'aide",
                    subtitle: 'Communauté',
                    routeName: 'Dashboard',
                    icon: 'mdi-face-agent'
                }, */
                {
                    title: 'Assistance',
                    subtitle: ' Vous avez des soucis ?',
                    routeName: 'MyEmergencies',
                    icon: 'mdi-help-circle-outline'
                }
            ],
        }
    },
    created() {
        this.fetchAccount();
    },
    methods: {
        fetchAccount() {
            this.loading = true
            this.$api.getAccount(this.$store.state.auth.mobile)
                .then(response => {
                    this.account = response;
                    this.$store.commit('account/setAccount', response);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false
                })
        },
        logout() {
            this.loading = true;
            this.$api.logout()
                .then(() => {
                    this.$store.dispatch('auth/logout');
                    this.$router.push({ name: 'login' });
                    this.$vuetify.theme.dark = false;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false
                })
        }
    },
}
</script>
