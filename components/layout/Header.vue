<template>
    <v-app-bar
        scroll-target="#container"
        elevate-on-scroll
        clipped-left
        app
    >
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" v-text="title" />

        <v-spacer />
        <app-search v-if="!$vuetify.breakpoint.mobile" />

        <v-menu
            v-else
            offset-y
            :close-on-content-click="false"
        >
            <template #activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    class="mx-2"
                    fab
                    small
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark>
                        {{ $icons.mdiMagnify }}
                    </v-icon>
                </v-btn>
            </template>
            <app-search />
        </v-menu>
        <v-spacer />

        <app-pwa-chip />
        <donate-chip />
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pkg from 'projRoot/package.json'

import AppSearch from '~/components/display/AppSearch.vue'
import AppPwaChip from '~/components/display/AppPwaChip.vue'
import DonateChip from '~/components/display/DonateChip.vue'

export default {
    name: 'Header',
    components: {
        AppSearch,
        AppPwaChip,
        DonateChip
    },
    data() {
        return {
            title: `${pkg.productName}`,
            searchItem: null
        }
    },
    computed: {
        ...mapGetters({
            getDrawer: 'settings/getDrawer'
        }),
        drawer: {
            get() {
                return this.getDrawer
            },
            set(value) {
                this.setDrawer(value)
            }
        }
    },
    methods: {
        ...mapActions({
            setDrawer: 'settings/setDrawer'
        })
    }
}
</script>
