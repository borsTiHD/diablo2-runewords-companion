<template>
    <v-card :elevation="getElevation" :outlined="getOutlined" class="flex d-flex flex-column">
        <v-card-title>
            {{ rune.name }}

            <v-avatar class="ml-2" rounded>
                <img
                    :src="runeIcon"
                    :alt="rune.name"
                >
            </v-avatar>

            <v-spacer />

            <v-chip
                class="ma-2"
                small
            >
                level: {{ rune.level }}
            </v-chip>
        </v-card-title>

        <v-divider class="mx-4" />

        <v-card-text>
            <v-row>
                <v-col v-for="(type, name) in rune.effects" :key="name" col="12" sm="12" md="12">
                    <v-list class="transparent">
                        <v-list-item>
                            <v-list-item-title>{{ capitalize(name) }}:</v-list-item-title>
                            <v-list-item-subtitle class="flex d-flex flex-column text-right">
                                <span v-for="(effect, index) in type" :key="index">
                                    {{ effect }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider class="mx-4" />

        <v-list class="transparent">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Upgrade Recipe:</v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                        <v-chip-group column>
                            <template v-for="(item, key, index) in rune.upgradeRecipe">
                                <v-chip :key="index">
                                    {{ item }}
                                </v-chip>
                            </template>
                        </v-chip-group>
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
                    name: 'default',
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
        }),
        runeIcon() {
            // Returning rune image URL from battle.net
            let runeName = this.rune.name
            if (runeName === 'Jah') {
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
        }
    }
}
</script>
