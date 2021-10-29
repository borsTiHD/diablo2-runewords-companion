<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6" lg="4" xl="3">
                <v-alert
                    text
                    type="info"
                >
                    Gems are <strong>not</strong> implemented right now.
                </v-alert>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex flex-column">
                <v-chip
                    color="secondary"
                    label
                >
                    {{ gemName }}
                </v-chip>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'GemId',
    data() {
        return {
            gemName: null
        }
    },
    created() {
        this.gemName = this.$route.params.gem
    }
}
</script>

<style scoped>
</style>
