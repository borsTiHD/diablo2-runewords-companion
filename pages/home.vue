<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card :elevation="getElevation" :outlined="getOutlined">
                <v-card-title class="headline">Welcome to {{ appName }}</v-card-title>
                <v-card-text>
                    <p>
                        {{ appName }} is a small companion App for Diablo 2 Resurrected.
                        It was designed to help with building runewords, as well as get information about all runes.
                    </p>
                    <p>
                        For more information on {{ appName }}, check out the
                        <a :href="repoUrl" target="_blank" rel="noopener noreferrer">github repository</a>.
                    </p>
                    <p>
                        Found a bug or have a question? Report it on the github
                        <a
                            :href="`${repoUrl}/issues`"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="contribute"
                        >issue board</a>.
                    </p>
                    <p>
                        Thank you for trying {{ appName }} and I look forward to bringing more exciting features in
                        the future.
                    </p>
                    <div class="text-xs-right">
                        <em><small>&mdash; {{ appAuthor }}</small></em>
                    </div>
                    <hr class="my-3">
                    <a :href="repoUrl" target="_blank" rel="noopener noreferrer">
                        {{ appName }} GitHub
                    </a>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" nuxt :to="continueRoute">Continue</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import pkg from 'projRoot/package.json'

export default {
    name: 'HomePage',
    auth: false,
    data() {
        return {
            continueRoute: '/runewords'
        }
    },
    head() {
        return {
            title: `${this.$options.name} | ${this.headTitle()}`
        }
    },
    computed: {
        ...mapGetters({
            getElevation: 'settings/getElevation',
            getOutlined: 'settings/getOutlined'
        }),
        repoUrl() {
            return pkg.repository.url
        },
        appName() {
            return pkg.productName
        },
        appAuthor() {
            return pkg.author
        }
    }
}
</script>
