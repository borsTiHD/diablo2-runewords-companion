<template>
    <v-card :elevation="getElevation" :outlined="getOutlined" class="flex d-flex flex-column">
        <v-card-title>
            <v-tooltip bottom>
                <template #activator="{ on }">
                    <v-chip
                        color="secondary"
                        text-color="orange lighten-1"
                        label
                        v-on="on"
                        @click="openRune(runeword.name)"
                    >
                        {{ runeword.name }}
                    </v-chip>
                </template>
                <span>Open runeword</span>
            </v-tooltip>

            <v-tooltip v-if="!detailsLink" bottom>
                <template #activator="{ on }">
                    <v-btn
                        color="secondary"
                        small
                        v-on="on"
                        @click="showAll"
                    >
                        Show All
                    </v-btn>
                </template>
                <span>Show all runewords</span>
            </v-tooltip>

            <v-spacer />

            <v-chip
                class="ma-2"
                small
            >
                level: {{ runeword.level }}
            </v-chip>
        </v-card-title>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RunewordDisplay',
    props: {
        runeword: {
            type: Object,
            required: true,
            default: () => {
                return {
                    name: 'undefined',
                    level: 0,
                    recipe: [],
                    allowedItems: [],
                    effects: [] || {}
                }
            }
        },
        detailsLink: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined'
        }),
        runeIcon() {
            // Returning rune image URL from battle.net
            let runeName = this.rune.name
            if (runeName === 'undefined') {
                return false
            } else if (runeName === 'Jah') {
                runeName = 'Jo'
            } else if (runeName === 'Shael') {
                runeName = 'Shae'
            }
            return `http://classic.battle.net/images/battle/diablo2exp/images/runes/rune${runeName}.gif`
        }
    },
    methods: {
        capitalize(s) {
            return (s && s[0].toUpperCase() + s.slice(1)) || ''
        },
        openRune(name) {
            this.$router.push(`/rune/${name}`)
        },
        showAll() {
            this.$router.push('/runewords')
        }
    }
}
</script>
