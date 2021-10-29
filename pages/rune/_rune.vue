<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex flex-column">
            <rune :rune="runeObject" :details-link="false" />
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Rune from '~/components/display/Rune.vue'

export default {
    name: 'RuneId',
    components: {
        Rune
    },
    data() {
        return {
            runeName: null,
            runeObject: null
        }
    },
    computed: {
        ...mapGetters({
            getRune: 'runes/getRune'
        })
    },
    created() {
        this.runeName = this.$route.params.rune
        this.runeObject = this.getRune(this.runeName)
    }
}
</script>

<style scoped>
</style>
