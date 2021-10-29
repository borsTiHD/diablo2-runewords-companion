<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-text>
                    <v-skeleton-loader
                        type="table-heading, paragraph, table-row-divider, sentences, button, table-tfoot"
                    />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined'
        })
    }
}
</script>
