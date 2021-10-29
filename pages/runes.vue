<template>
    <v-row justify="center">
        <template v-for="(rune, index) in getRuneList">
            <v-col :key="index" cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex flex-column">
                <rune :rune="rune" />
            </v-col>
        </template>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Rune from '~/components/display/Rune.vue'

export default {
    name: 'Runes',
    components: {
        Rune
    },
    computed: {
        ...mapGetters({
            getRuneList: 'runes/getRuneList'
        })
    }
}
</script>
