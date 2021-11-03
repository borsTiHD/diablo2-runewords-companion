<template>
    <v-card :elevation="getElevation" :outlined="getOutlined">
        <v-card-title>
            <v-row>
                <v-col v-for="(rune, index) in getRuneList" :key="index" cols="auto">
                    <v-card elevation="4">
                        {{ rune.name }}
                    </v-card>
                </v-col>
            </v-row>
        </v-card-title>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RuneInventory',
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined',
            getRuneList: 'runes/getRuneList'
        })
    }
}
</script>
