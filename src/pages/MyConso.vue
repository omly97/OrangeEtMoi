<template>
    <div>
        <div class="text-h5 mb-5">Mon suivi conso</div>
        <v-row>
            <v-col cols="12" xl="6" lg="6" md="6">
                <point-sargal></point-sargal>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6">
                <credit-global></credit-global>
            </v-col>

            <v-col cols="12" xl="12" lg="12" md="12">
                <suivi-conso></suivi-conso>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PointSargal from '@/components/conso/PointSargal.vue'
import CreditGlobal from '@/components/conso/CreditGlobal.vue'
import SuiviConso from '@/components/conso/SuiviConso.vue'

export default {
    name: 'MyConso',
    components: { PointSargal, CreditGlobal, SuiviConso },
}
</script>
