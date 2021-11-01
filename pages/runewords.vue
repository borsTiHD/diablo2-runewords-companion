<template>
    <v-row justify="center">
        <template v-for="(runeword, index) in getRunewordList">
            <v-col :key="index" cols="12" sm="8" md="6" lg="4" xl="3" class="ma-4 d-flex flex-column">
                <runeword-display :runeword="runeword" />
            </v-col>
        </template>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import RunewordDisplay from '~/components/display/RunewordDisplay.vue'

export default {
    name: 'Runewords',
    components: {
        RunewordDisplay
    },
    head() {
        return {
            title: `${this.$options.name} | ${this.headTitle()}`
        }
    },
    computed: {
        ...mapGetters({
            getRunewordList: 'runewords/getRunewordList'
        })
    }
}
</script>
