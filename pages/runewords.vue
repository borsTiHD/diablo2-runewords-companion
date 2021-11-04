<template>
    <v-row>
        <v-col cols="2" sm="12" md="3" lg="2">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-actions>
                    <v-btn
                        block
                        :disabled="deleteBtnLoading"
                        :loading="deleteBtnLoading"
                        @click="deleteAll"
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
                <template v-for="(runeword, index) in runewordList">
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
    data() {
        return {
            deleteBtnLoading: false
        }
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
            getInventory: 'inventory/getInventory',
            getRunewordList: 'runewords/getRunewordList',
            getRuneList: 'runes/getRuneList'
        }),
        runewordList() {
            // Reducing stock and calculates how many items the user has
            // https://stackoverflow.com/a/6300596/7625095
            const itemsInStock = this.getInventory.reduce((acc, obj) => { return acc + obj.value }, 0)
            if (itemsInStock <= 0) {
                return this.getRunewordList
            }
            return []
        }
    },
    methods: {
        ...mapActions({
            clearInventory: 'inventory/clearInventory'
        }),
        async deleteAll() {
            this.deleteBtnLoading = true
            // Workaround, so the see a loading animation/disabling the button
            setTimeout(() => {
                this.clearInventory()
                this.deleteBtnLoading = false
            }, 100)
        }
    }
}
</script>

<style scoped>
</style>
