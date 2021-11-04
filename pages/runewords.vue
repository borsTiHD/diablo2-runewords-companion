<template>
    <v-row>
        <v-col cols="2" sm="12" md="3" lg="2">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-actions>
                    <v-btn
                        block
                        @click="clearInventory"
                    >
                        Delete All
                    </v-btn>
                </v-card-actions>
                <v-card-text>
                    <rune-inventory v-for="(rune, index) in getRuneList" :key="index" :rune="rune.name" />
                </v-card-text>
            </v-card>
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
import { mapGetters, mapActions } from 'vuex'
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
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined',
            getRunewordList: 'runewords/getRunewordList',
            getRuneList: 'runes/getRuneList'
        })
    },
    methods: {
        ...mapActions({
            clearInventory: 'inventory/clearInventory'
        })
    }
}
</script>

<style scoped>
</style>
