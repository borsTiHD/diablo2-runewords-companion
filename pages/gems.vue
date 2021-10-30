<template>
    <v-row justify="center">
        <template v-for="(gem, index) in getGemList">
            <v-col :key="index" cols="12" sm="8" md="6" lg="4" xl="3" class="ma-4 d-flex flex-column">
                <gem-display :gem="gem" />
            </v-col>
        </template>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import GemDisplay from '~/components/display/GemDisplay.vue'

export default {
    name: 'Gems',
    components: {
        GemDisplay
    },
    head() {
        return {
            title: `${this.$options.name} | ${this.headTitle()}`
        }
    },
    computed: {
        ...mapGetters({
            getGemList: 'gems/getGemList'
        })
    }
}
</script>
