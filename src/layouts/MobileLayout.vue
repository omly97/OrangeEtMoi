<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="sidebar" app>
            <app-menu></app-menu>

            <template v-slot:append>
                <div class="d-flex justify-center">
                    <switch-theme></switch-theme>
                </div>
            </template>
        </v-navigation-drawer>

        <!-- App Bar -->
        <v-app-bar app elevate-on-scroll>
            <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            <v-app-bar-title>Orange et Moi</v-app-bar-title>
        </v-app-bar>

        <!-- Main -->
        <v-main>
            <v-card flat :color="$vuetify.theme.dark ? 'transparent' : '#F3F3F8'" height="100%">
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-card>
        </v-main>

        <!-- Bottom navigation -->
        <v-bottom-navigation v-model="bottonNav" app grow :hide-on-scroll="false" color="#FF7900">
            <v-btn v-for="menu in menuItems" :key="menu.routeName" link :to="{ name: menu.routeName }">
                <span>{{ menu.title }}</span>
                <v-icon>{{ menu.icon }}</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
import SwitchTheme from '@/components/SwitchTheme.vue'

export default {
    name: 'MobileLayout',
    components: { AppMenu, SwitchTheme },
    data() {
        return {
            sidebar: false,
            bottonNav: 0,
            menuItems: [
                { title: 'Conso', routeName: 'MyConso', icon: 'mdi-circle-slice-6' },
                { title: 'Historique', routeName: 'MyHistorical', icon: 'mdi-clipboard-text-clock-outline' }
            ]
        }
    }
}
</script>
