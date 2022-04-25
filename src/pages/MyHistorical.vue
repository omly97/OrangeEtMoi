<template>
    <div>
        <div class="text-h5 mb-5">Détail des consommations</div>
        <suivi-conso-by-days></suivi-conso-by-days>
    </div>
</template>

<script>
import SuiviConsoByDays from '@/components/conso/SuiviConsoByDays.vue'

export default {
    name: 'MyHistorical',
    components: { SuiviConsoByDays },
}
</script>
