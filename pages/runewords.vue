<template>
    <v-row>
        <v-col cols="2" sm="12" md="3" lg="2">
            <rune-inventory />
        </v-col>
        <v-col cols="10" sm="12" md="9" lg="10">
            <v-row justify="center">
                <template v-for="(runeword, index) in getRunewordList">
                    <v-col :key="index" cols="12" sm="8" md="8" lg="4" xl="3" class="mx-2 d-flex flex-column">
                        <runeword-display :runeword="runeword" />
                    </v-col>
                </template>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import RuneInventory from '~/components/runewords/RuneInventory.vue'
import RunewordDisplay from '~/components/display/RunewordDisplay.vue'

export default {
    name: 'RunewordsPage',
    components: {
        RuneInventory,
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

<style scoped>
</style>
