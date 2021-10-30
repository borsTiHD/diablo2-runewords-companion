<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex flex-column">
            <gem-display :gem="gemObject" :details-link="false" />
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import GemDisplay from '~/components/display/GemDisplay.vue'

export default {
    name: 'GemId',
    components: {
        GemDisplay
    },
    data() {
        return {
            gemName: null,
            gemObject: null
        }
    },
    head() {
        return {
            title: `${this.gemName} | ${this.headTitle()}`
        }
    },
    computed: {
        ...mapGetters({
            getGem: 'gems/getGem'
        })
    },
    created() {
        this.gemName = this.$route.params.gem
        this.gemObject = this.getGem(this.gemName)
    }
}
</script>

<style scoped>
</style>
