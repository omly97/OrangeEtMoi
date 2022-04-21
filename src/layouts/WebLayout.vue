<template>
    <v-app>
        <!-- Main -->
        <v-main>
            <v-card flat :color="$vuetify.theme.dark ? 'transparent' : '#F3F3F8'" height="100%">
                <v-container>
                    <v-row justify="center">
                        <!-- Menu -->
                        <v-col cols="12" xl="3" lg="3" md="3">
                            <div class="sticky-top">
                                <app-menu></app-menu>
                            </div>
                        </v-col>

                        <!-- App -->
                        <v-col cols="12" xl="6" lg="6" md="6">
                            <router-view></router-view>
                        </v-col>

                        <!-- Services -->
                        <v-col cols="12" xl="3" lg="3" md="3">
                            <div class="sticky-top">
                                <app-service></app-service>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
import AppService from '@/components/AppService.vue'

export default {
    name: 'WebLayout',
    components: { AppMenu, AppService },
}
</script>

<style scoped>
.sticky-top {
    position: sticky;
    top: 0;
}
</style>
