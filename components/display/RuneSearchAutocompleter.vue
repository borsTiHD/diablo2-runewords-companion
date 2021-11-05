<template>
    <v-autocomplete
        v-model="searchItem"
        :items="itemList"
        label="Search for a rune, or runeword..."
        clearable
        hide-details
        return-object
        chips
        solo
        @input="selectedSearch"
    />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RuneSearchAutocompleter',
    props: {
        rune: {
            type: Object,
            required: true,
            default: () => {
                return {
                    name: 'undefined',
                    level: 0,
                    effects: {
                        weapon: [],
                        armor: []
                    },
                    upgradeRecipe: []
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined'
        })
    }
}
</script>
