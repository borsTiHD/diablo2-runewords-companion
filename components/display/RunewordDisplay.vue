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
                        @click="openRuneword(runeword.name)"
                    >
                        {{ runeword.name }}
                    </v-chip>
                </template>
                <span>Open runeword</span>
            </v-tooltip>

            <v-tooltip v-if="!detailsLink" bottom>
                <template #activator="{ on }">
                    <v-btn
                        class="mx-4"
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

        <v-divider class="mx-4" />

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-col cols="4" class="d-flex flex-wrap justify-center">
                    <v-tooltip
                        v-for="(rune, index) in runeword.recipe"
                        :key="index"
                        bottom
                    >
                        <template #activator="{ on }">
                            <v-avatar
                                class="mx-1"
                                size="40"
                                rounded
                                v-on="on"
                                @click="openRune(rune)"
                            >
                                <img
                                    :src="runeIcon(rune)"
                                    :alt="rune"
                                >
                            </v-avatar>
                        </template>
                        <span
                            text-color="orange lighten-1"
                        >
                            {{ rune }}
                        </span>
                    </v-tooltip>
                </v-col>
                <v-col>
                    <v-list-item
                        v-for="(item, index) in runeword.allowedItems"
                        :key="index"
                        class="allowed-items-dense"
                    >
                        <v-list-item-subtitle>{{ runeword.recipe.length }} Socket <a href="#" class="text-decoration-none">{{ item }}</a></v-list-item-subtitle>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider class="mx-4 mb-2" />

        <v-list-item v-for="(effect, name, index) in runeword.effects" :key="index">
            <template v-if="name === 'weapons' || name === 'shields' || name === 'helms' || name === 'armor'">
                <v-list-item-content>
                    <v-list-item-title>{{ capitalize(name) }}:</v-list-item-title>
                    <v-list-item-content class="blue--text">
                        <span v-for="(item, i) in effect" :key="i">- {{ item }}</span>
                    </v-list-item-content>
                </v-list-item-content>
            </template>
            <template v-else>
                <v-list-item-content class="py-0 blue--text">- {{ effect }}</v-list-item-content>
            </template>
        </v-list-item>

        <v-divider class="mx-4 mt-2" />

        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Rune Order:</v-list-item-title>
                    <v-list-item-subtitle>
                        <template v-for="(rune, index) in runeword.recipe">
                            <v-tooltip :key="index" bottom>
                                <template #activator="{ on }">
                                    <v-chip
                                        class="mr-1"
                                        text-color="orange lighten-1"
                                        dark
                                        small
                                        v-on="on"
                                        @click="openRune(rune)"
                                    >
                                        {{ rune }}
                                    </v-chip>
                                </template>
                                <span>Open rune</span>
                            </v-tooltip>
                        </template>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
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
        })
    },
    methods: {
        capitalize(s) {
            return (s && s[0].toUpperCase() + s.slice(1)) || ''
        },
        openRuneword(name) {
            this.$router.push(`/runeword/${name}`)
        },
        showAll() {
            this.$router.push('/runewords')
        },
        openRune(name) {
            this.$router.push(`/rune/${name}`)
        },
        runeIcon(rune) {
            // Returning rune image URL from battle.net
            let runeName = rune
            if (runeName === 'undefined') {
                return false
            } else if (runeName === 'Jah') {
                runeName = 'Jo'
            } else if (runeName === 'Shael') {
                runeName = 'Shae'
            }
            return `http://classic.battle.net/images/battle/diablo2exp/images/runes/rune${runeName}.gif`
        }
    }
}
</script>

<style scoped>
.v-avatar {
    cursor: pointer;
}
.v-list-item, .v-list .v-list-item.allowed-items-dense {
    min-height: 10px;
}
</style>
