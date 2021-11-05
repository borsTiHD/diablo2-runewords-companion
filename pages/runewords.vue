<template>
    <v-row>
        <v-col cols="12" sm="12" md="3" lg="2">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-title>
                    Inventory
                    <v-spacer />
                    <v-btn
                        class="mx-2"
                        fab
                        small
                        color="primary"
                        @click="showList = !showList"
                    >
                        <v-icon>
                            {{ showList ? $icons.mdiArrowCollapseUp : $icons.mdiArrowExpandDown }}
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-actions>
                    <v-btn
                        block
                        @click="deleteAll"
                    >
                        Delete All
                    </v-btn>
                </v-card-actions>
                <v-card-text :class="showList ? '' : 'hide'">
                    <v-row>
                        <v-col v-for="(rune, index) in getRuneList" :key="index" cols="12" sm="4" md="12">
                            <rune-inventory :rune="rune.name" />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="10" sm="12" md="9" lg="10">
            <v-row justify="center">
                <v-col v-for="(runeword, index) in getRunewordList" :key="index" :class="showRuneword(runeword.name) ? '' : 'hide'" cols="12" sm="8" md="8" lg="4" xl="3" class="mx-2 d-flex flex-column">
                    <runeword-display :runeword="runeword" />
                </v-col>
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
            showList: true
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
            getItem: 'inventory/getItem',
            getRunewordList: 'runewords/getRunewordList',
            getRuneList: 'runes/getRuneList'
        }),
        calculatedRunewordList() {
            // Reducing item stock and calculates how many items the user has
            // Returns array of runeword names, that can be build with the stock
            // https://stackoverflow.com/a/6300596/7625095
            const itemsInStock = this.getInventory.reduce((acc, obj) => { return acc + obj.value }, 0)
            if (itemsInStock <= 0) {
                // Returning complete list with names, if the user dont have any item in stock
                return this.getRunewordList.map((runeword) => runeword.name)
            }

            // List with possible runewords later on
            const possibleRunewords = []
            this.getRunewordList.forEach(({ name, recipe }) => {
                let valid = true // Validation check
                const currentStock = JSON.parse(JSON.stringify(this.getInventory)) // Getting clone of current stock from the inventory - important so the clone could be manipulated without changing the real inventory
                // Looping through every rune the runeword needs
                recipe.forEach((rune) => {
                    // Checking if the needed rune is in our inventory and if the value is greater than 1...
                    // We will reduce on stock value - important, because some runewords have more than one of the same rune (eg. 'Ko, Ko, Mal' -> 'Sanctuary')
                    const stockItem = currentStock.find((runeObj) => runeObj.name === rune)
                    if (stockItem && stockItem.value > 0) {
                        stockItem.value-- // Reduce stock value by one
                    } else {
                        // The needed rune is not in the current stock
                        // TODO -> Check if the needed rune could be made by an upgrade with other runes (need to check rune recipes)
                        valid = false // -> validation failed
                    }
                })

                // Pushes valid runeword name
                if (valid) { possibleRunewords.push(name) }
            })

            return possibleRunewords
        }
    },
    methods: {
        ...mapActions({
            clearInventory: 'inventory/clearInventory'
        }),
        async deleteAll() {
            this.clearInventory()
        },
        showRuneword(name) {
            return this.calculatedRunewordList.includes(name)
        }
    }
}
</script>

<style scoped>
/* Workaround -> 'v-show' is not working because it misses the '!important' */
.hide {
    display: none !important;
}
</style>
