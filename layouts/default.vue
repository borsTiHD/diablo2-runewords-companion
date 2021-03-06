<template>
    <v-app
        v-resize="onResize"
        :style="{ background: $vuetify.theme.themes[theme].background }"
        :class="font"
    >
        <app-header />
        <app-sidebar />

        <v-main>
            <v-container id="container" fluid :style="`height: ${containerHeight}px;`" @scroll.passive="handleScroll">
                <nuxt keep-alive />
            </v-container>
        </v-main>

        <app-back-to-top :show="showBackToTop" @click="scrollToTop" />
        <app-footer id="footer" />
    </v-app>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import AppHeader from '~/components/layout/Header.vue'
import AppSidebar from '~/components/layout/Sidebar.vue'
import AppFooter from '~/components/layout/Footer.vue'
import AppBackToTop from '@/components/layout/BackToTop.vue'

// Import global mixin's
import titleMixin from '~/mixins/titleMixin.js'
Vue.mixin(titleMixin)

export default {
    name: 'Default',
    components: {
        AppHeader,
        AppSidebar,
        AppFooter,
        AppBackToTop
    },
    data() {
        return {
            containerHeight: 0,
            showBackToTop: false
        }
    },
    computed: {
        ...mapGetters({
            getActiveSkin: 'settings/getActiveSkin',
            getDarkMode: 'settings/getDarkMode',
            getDiabloFont: 'settings/getDiabloFont'
        }),
        theme() {
            return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        },
        font() {
            // Setting Font Class depending on the current mode
            const diabloFontMode = this.getDiabloFont
            if (diabloFontMode) {
                return 'app--font--diablo'
            }
            return 'app--font--roboto'
        }
    },
    async created() {
        // Clientside Init
        if (process.client) {
            // Getting 'darkmode' setting from persisted vuex-store
            this.$vuetify.theme.dark = this.getDarkMode // Set vuetify mode

            // Setting container height
            setImmediate(() => {
                this.$design.changeTheme(this.getActiveSkin) // Changing theme with plugin
                this.onResize()
            })
        }
    },
    methods: {
        onResize() {
            // Setting container height for footer
            const container = document.getElementById('container')
            const footer = document.getElementById('footer')
            this.containerHeight = window.innerHeight - this.getOffset(container).top - this.getOffset(footer).height
        },
        getOffset(el) {
            /**
             * getOffset() - Ermittelt die X/Y Position eines HTML Elements
             *             -> // https://stackoverflow.com/a/28222246
             * @param   {string}    el  -> HTML Element
             * @returns {object}        -> Returns X/Y Koordinaten in 'px'
             */
            const rect = el.getBoundingClientRect()
            return {
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY,
                height: rect.height,
                width: rect.width
            }
        },
        handleScroll(event) {
            // Ermittelt aktuelle Scrollposition des Container Elements...
            // Zeigt ab einer gewissen Scrollhöhe den BackToTop Button an...
            const container = document.getElementById('container').scrollTop
            if (container >= 500) {
                this.showBackToTop = true
            } else {
                this.showBackToTop = false
            }
        },
        scrollToTop() {
            const container = document.getElementById('container')
            container.scrollTop = 0
        }
    }
}
</script>

<style>
/*****************************************************\
No Scollbar on Page
\*****************************************************/
html {
    overflow-y: hidden !important;
}
#container {
    height: 100vh;
    overflow-y: auto;
}

/*****************************************************\
Scrollbar
\*****************************************************/
::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
}

/*****************************************************\
Unselectable Elements
\*****************************************************/
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.selectable {
    -webkit-touch-callout: text !important;
    -webkit-user-select: text !important;
    -khtml-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
}

/*****************************************************\
Font Family
\*****************************************************/
.app--font--diablo {
    font-family: "Exocet Light", Helvetica, sans-serif;
}
.app--font--roboto {
    font-family: Roboto, Helvetica, sans-serif;
}

/*****************************************************\
Backgrounds: Settings Colors from theme
\*****************************************************/
.v-app-bar {
    background-color: var(--v-systemBarBackground-base) !important;
}
.v-footer {
    background-color: var(--v-footerBackground-base) !important;
}
.v-navigation-drawer__content, .v-navigation-drawer__content .v-list {
    background-color: var(--v-sidebarBackground-base) !important;
}
.v-card, .v-list, .v-tabs-bar {
    background-color: var(--v-cardBackground-base) !important;
}
.v-data-table, .v-data-table .v-row-group__header {
    background-color: var(--v-cardBackground-base) !important;
}
</style>
