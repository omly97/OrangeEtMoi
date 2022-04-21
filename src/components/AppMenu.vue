<template>
    <v-list>
        <!-- User Infos -->
        <v-list-item>
            <v-list-item-avatar rounded size="60">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-subtitle>Bienvenue</v-list-item-subtitle>
                <v-list-item-title class="font-weight-medium">Monsieur Macaron</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-2 my-3"></v-divider>

        <!-- Menu 1 -->
        <v-list-item v-for="(item, i) in menu1" :key="i" link>
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-2 my-3"></v-divider>

        <!-- Menu 2 -->
        <v-list-item v-for="(item, i) in menu2" :key="i+10" link>
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'AppMenu',
    data() {
        return {
            menu1: [
                {
                    title: 'Mon suivi Conso',
                    routeName: 'Dashboard',
                    icon: 'mdi-circle-slice-6'
                },
                {
                    title: 'Ma formule',
                    routeName: 'Dashboard',
                    icon: 'mdi-tag-text-outline'
                },
            ],
            menu2: [
                {
                    title: 'Mon compte',
                    subtitle: 'Modifier mes infos perssonnelles',
                    routeName: 'Dashboard',
                    icon: 'mdi-account-tie'
                },
                {
                    title: "Besoin d'aide",
                    subtitle: 'Communauté',
                    routeName: 'Dashboard',
                    icon: 'mdi-face-agent'
                },
                {
                    title: 'Assistance',
                    subtitle: ' Vous avez des soucis ?',
                    routeName: 'Dashboard',
                    icon: 'mdi-help-circle-outline'
                }
            ],
        }
    }
}
</script>
