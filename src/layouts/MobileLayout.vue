<template>
    <v-app>
        <!-- Main -->
        <v-main>
            <v-card flat :color="$vuetify.theme.dark ? 'transparent' : '#F3F3F8'" height="100%">
                <router-view></router-view>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'MobileLayout',
}
</script>
