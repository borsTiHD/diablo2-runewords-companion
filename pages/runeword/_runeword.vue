<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex flex-column">
            <runeword-display :runeword="runewordObject" :details-link="false" />
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import RunewordDisplay from '~/components/display/RunewordDisplay.vue'

export default {
    name: 'RunewordId',
    components: {
        RunewordDisplay
    },
    data() {
        return {
            runewordName: null,
            runewordObject: null
        }
    },
    head() {
        return {
            title: `${this.runewordName} | ${this.headTitle()}`
        }
    },
    computed: {
        ...mapGetters({
            getRuneword: 'runewords/getRuneword'
        })
    },
    created() {
        this.runewordName = this.$route.params.runeword
        this.runewordObject = this.getRuneword(this.runewordName)
    }
}
</script>

<style scoped>
</style>
