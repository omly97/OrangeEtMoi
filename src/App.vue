<template>
    <div>
        <template v-if="$vuetify.breakpoint.mobile">
            <mobile-layout></mobile-layout>
        </template>

        <template v-else>
            <web-layout></web-layout>
        </template>
    </div>
</template>

<script>
import MobileLayout from './layouts/MobileLayout.vue'
import WebLayout from './layouts/WebLayout.vue'

export default {
    name: 'App',
    components: { WebLayout, MobileLayout },
    data() {
        return {
            //
        }
    }
}
</script>

<style>
.oem-text {
    color: #FF7900;
}
</style>
