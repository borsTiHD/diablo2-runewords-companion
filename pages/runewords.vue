<template>
    <v-row>
        <v-col cols="12" sm="12" md="3" lg="2">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-title>
                    Inventory
                    <v-spacer />
                    <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                            <v-btn
                                class="mx-2"
                                fab
                                small
                                color="primary"
                                v-bind="attrs"
                                v-on="on"
                                @click="showList = !showList"
                            >
                                <v-icon>
                                    {{ showList ? $icons.mdiArrowCollapseUp : $icons.mdiArrowExpandDown }}
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>{{ showList ? 'Hide inventory' : 'Show inventory' }}</span>
                    </v-tooltip>
                </v-card-title>
                <v-card-actions :class="showList ? '' : 'hide'">
                    <v-autocomplete
                        v-model="searchedRunes"
                        :search-input.sync="searchRuneInput"
                        :items="getRuneList"
                        label="filter runes..."
                        item-text="name"
                        deletable-chips
                        return-object
                        hide-details
                        small-chips
                        clearable
                        multiple
                        chips
                        solo
                        @input="searchChanged"
                    />
                </v-card-actions>
                <v-card-text :class="showList ? '' : 'hide'">
                    <v-row>
                        <v-col v-for="(rune, index) in searchedRunes.length > 0 ? searchedRunes : getRuneList" :key="index" cols="12" sm="4" md="12">
                            <rune-inventory :rune="rune.name" />
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                            <v-btn
                                block
                                v-bind="attrs"
                                v-on="on"
                                @click="deleteAll"
                            >
                                Delete All
                            </v-btn>
                        </template>
                        <span>Delete all items</span>
                    </v-tooltip>
                </v-card-actions>
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
            showList: true,
            searchRuneInput: '',
            searchedRunes: []
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
        },
        searchChanged(val) {
            // Event is triggered when a rune is added to the search...
            // We use this event to clear the user input for a new search
            this.searchRuneInput = ''
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
