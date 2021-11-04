<template>
    <v-card :elevation="getElevation" :outlined="getOutlined">
        <v-card-title>
            <v-row v-for="(rune, index) in getRuneList" :key="index">
                <v-col cols="4">
                    <span class="mr-2 orange--text text--lighten-1">{{ rune.name }}</span>
                </v-col>
                <v-col cols="8">
                    <v-text-field
                        v-model="slider"
                        class="ml-1"
                        dense
                        :rules="[numberValidation]"
                    >
                        <template #prepend>
                            <v-icon
                                @click="slider--"
                            >
                                {{ $icons.mdiMinus }}
                            </v-icon>
                        </template>
                        <template #append-outer>
                            <v-icon
                                @click="slider++"
                            >
                                {{ $icons.mdiPlus }}
                            </v-icon>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-title>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RuneInventory',
    data() {
        return {
            min: 0,
            max: 100,
            slider: 40
        }
    },
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined',
            getRuneList: 'runes/getRuneList'
        })
    },
    methods: {
        numberValidation(val) {
            console.log(val, /^\d+$/.test(val))
            if (/^\d+$/.test(val)) {
                return true
            }
            return 'only numbers'
        }
    }
}
</script>
