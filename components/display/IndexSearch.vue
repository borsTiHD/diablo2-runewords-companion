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
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'IndexSearch',
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
            getSearch: 'indexSearch/getSearch',
            getRunewordList: 'runewords/getRunewordList',
            getRuneList: 'runes/getRuneList',
            getGemList: 'gems/getGemList'
        }),
        searchItem: {
            get() {
                return this.getSearch
            },
            set(value) {
                this.setSearch(value)
            }
        },
        itemList() {
            // Making a custom list of items
            let list = []

            // Adding runewords as { name: 'Insight', type: 'runeword' }
            list = list.concat(this.getRunewordList.map((item) => {
                return {
                    text: item.name,
                    type: 'runeword'
                }
            }))

            // Adding runes as { name: 'El', type: 'rune' }
            list = list.concat(this.getRuneList.map((item) => {
                return {
                    text: item.name,
                    type: 'rune'
                }
            }))

            // Adding gems as { name: 'Topaz', type: 'gem' }
            list = list.concat(this.getGemList.map((item) => {
                return {
                    text: item.name,
                    type: 'gem'
                }
            }))

            return list
        }
    },
    methods: {
        ...mapActions({
            setSearch: 'indexSearch/setSearch'
        }),
        selectedSearch(item) {
            // If an item was selected in the search bar, we check what type of item was selected and do different things with it :)
            // For example push to another route to display a rune, or gem...
            if (item) {
                switch (item.type) {
                    case 'rune':
                        this.$router.push(`/rune/${item.text}`)
                        break

                    case 'runeword':
                        this.$router.push(`/runeword/${item.text}`)
                        break

                    case 'gem':
                        this.$router.push(`/gem/${item.text}`)
                        break

                    default:
                        break
                }
            }
        }
    }
}
</script>
