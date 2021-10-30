<template>
    <v-app-bar
        scroll-target="#container"
        elevate-on-scroll
        clipped-left
        app
    >
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" v-text="title" />

        <v-spacer />
        <v-autocomplete
            v-if="!$vuetify.breakpoint.mobile"
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

        <v-menu
            v-else
            offset-y
            :close-on-content-click="false"
        >
            <template #activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    class="mx-2"
                    fab
                    small
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark>
                        {{ $icons.mdiMagnify }}
                    </v-icon>
                </v-btn>
            </template>
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
        </v-menu>
        <v-spacer />

        <app-pwa-chip />
        <donate-chip />
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pkg from 'projRoot/package.json'
import AppPwaChip from '~/components/display/AppPwaChip.vue'
import DonateChip from '~/components/display/DonateChip.vue'

export default {
    name: 'Header',
    components: {
        AppPwaChip,
        DonateChip
    },
    data() {
        return {
            title: `${pkg.productName}`,
            searchItem: null
        }
    },
    computed: {
        ...mapGetters({
            getDrawer: 'settings/getDrawer',
            getRuneList: 'runes/getRuneList',
            getGemList: 'gems/getGemList'
        }),
        drawer: {
            get() {
                return this.getDrawer
            },
            set(value) {
                this.setDrawer(value)
            }
        },
        itemList() {
            // Making a custom list of items
            let list = []

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
            setDrawer: 'settings/setDrawer'
        }),
        selectedSearch(item) {
            // If an item was selected in the search bar, we check what type of item was selected and do different things with it :)
            // For example push to another route to display a rune, or gem...
            if (item) {
                switch (item.type) {
                    case 'rune':
                        this.$router.push(`/rune/${item.text}`)
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
