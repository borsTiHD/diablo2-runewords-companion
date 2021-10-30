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
                        @click="openRune(rune.name)"
                    >
                        {{ rune.name }}
                    </v-chip>
                </template>
                <span>Open rune</span>
            </v-tooltip>

            <v-avatar v-if="runeIcon" class="mx-4" rounded>
                <img
                    :src="runeIcon"
                    :alt="rune.name"
                >
            </v-avatar>

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
                <span>Show all runes</span>
            </v-tooltip>

            <v-spacer />

            <v-chip
                class="ma-2"
                small
            >
                level: {{ rune.level }}
            </v-chip>
        </v-card-title>

        <v-divider class="mx-4" />

        <v-list-item v-for="(type, name) in rune.effects" :key="name" two-line>
            <v-list-item-content>
                <v-list-item-title>{{ capitalize(name) }}:</v-list-item-title>
                <v-list-item-subtitle class="flex d-flex flex-column flex-wrap">
                    <span v-for="(effect, index) in type" :key="index" class="blue--text">
                        {{ effect }}
                    </span>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-4" />

        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Upgrade Recipe:</v-list-item-title>
                    <v-list-item-subtitle>
                        <template v-for="(item, key, index) in rune.upgradeRecipe.runes">
                            <v-tooltip :key="index" bottom>
                                <template #activator="{ on }">
                                    <v-chip
                                        class="mr-1"
                                        text-color="orange lighten-1"
                                        dark
                                        small
                                        v-on="on"
                                        @click="openRune(item)"
                                    >
                                        {{ item }}
                                    </v-chip>
                                </template>
                                <span>Open rune</span>
                            </v-tooltip>
                        </template>
                        <template v-for="(item, key, index) in rune.upgradeRecipe.gems">
                            <v-tooltip :key="index" bottom>
                                <template #activator="{ on }">
                                    <v-chip
                                        class="mr-1"
                                        dark
                                        small
                                        v-on="on"
                                        @click="openGem(item)"
                                    >
                                        {{ item }}
                                    </v-chip>
                                </template>
                                <span>Open gem</span>
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
    name: 'Rune',
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
        openGem(name) {
            this.$router.push(`/gem/${name}`)
        },
        showAll() {
            this.$router.push('/runes')
        }
    }
}
</script>
