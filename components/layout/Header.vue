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

        <app-pwa-chip />
        <donate-chip />
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pkg from 'projRoot/package.json'
import AppPwaChip from '~/components/display/AppPwaChip.vue'
import DonateChip from '~/components/display/DonateChip.vue'

export default {
    name: 'Header',
    components: {
        AppPwaChip,
        DonateChip
    },
    data() {
        return {
            title: `${pkg.productName}`
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
