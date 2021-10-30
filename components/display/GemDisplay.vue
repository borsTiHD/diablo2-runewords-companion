<template>
    <v-card :elevation="getElevation" :outlined="getOutlined" class="flex d-flex flex-column">
        <v-card-title>
            <v-tooltip bottom>
                <template #activator="{ on }">
                    <v-chip
                        color="secondary"
                        label
                        v-on="on"
                        @click="openGem(gem.name)"
                    >
                        {{ gem.name }}
                    </v-chip>
                </template>
                <span>Open gem</span>
            </v-tooltip>

            <v-avatar v-if="gemIcon" class="mx-4" rounded>
                <img
                    :src="gemIcon"
                    :alt="gem.name"
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
                <span>Show all gems</span>
            </v-tooltip>

            <v-spacer />

            <v-chip
                class="ma-2"
                small
            >
                level: {{ gem.level }}
            </v-chip>
        </v-card-title>

        <v-divider class="mx-4" />

        <v-list-item v-for="(type, name) in gem.effects" :key="name" two-line>
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
                        <template v-for="(item, key, index) in gem.upgradeRecipe">
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
    name: 'Gem',
    props: {
        gem: {
            type: Object,
            required: true,
            default: () => {
                return {
                    name: 'undefined',
                    level: 0,
                    effects: {
                        weapon: [],
                        shield: [],
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
        gemIcon() {
            // Returning gem image URL from battle.net
            let gemName = this.gem.name.toLowerCase().replace(' ', '')

            // Name fix for 'sapphires', blizzard images are written with only one 'p'
            if (gemName.includes('sapphire')) {
                gemName = gemName.replace('sapphire', 'saphire')
            }

            return `http://classic.battle.net/images/battle/diablo2exp/images/gems/${gemName}.gif`
        }
    },
    methods: {
        capitalize(s) {
            return (s && s[0].toUpperCase() + s.slice(1)) || ''
        },
        openGem(name) {
            this.$router.push(`/gem/${name}`)
        },
        showAll() {
            this.$router.push('/gems')
        }
    }
}
</script>
