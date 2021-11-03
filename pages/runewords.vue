<template>
    <v-row>
        <v-col cols="2" sm="12" md="12" lg="2" class="scrolling-section">
            <rune-inventory />
        </v-col>
        <v-col cols="2" sm="12" md="12" lg="2" />
        <v-col cols="10" sm="12" md="12" lg="10">
            <v-row justify="center">
                <template v-for="(runeword, index) in getRunewordList">
                    <v-col :key="index" cols="12" sm="8" md="6" lg="4" xl="3" class="ma-4 d-flex flex-column">
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
.scrolling-section {
    position: fixed;
    width: 30%;
    left: 8px;
}
</style>
