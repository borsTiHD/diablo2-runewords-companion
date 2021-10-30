<template>
    <v-navigation-drawer
        v-model="drawer"
        :floating="!getOutlined"
        temporary
        absolute
        clipped
        app
    >
        <!-- Sidebar -->
        <v-list
            class="d-flex flex-column fill-height"
            nav
        >
            <!-- Header copy -->
            <v-toolbar-title class="ma-3 text-center" v-text="title" />
            <v-divider class="pa-1" />

            <!-- Sidebar Navigation -->
            <v-list-item-group
                v-model="selectedItem"
            >
                <!-- Pages -->
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact nuxt>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            <v-divider class="pa-1 mt-3" />

            <!-- Sidebar Quick Settings -->
            <div>
                <!-- Darkmode Setting -->
                <v-list-item dense>
                    <v-switch
                        class="v-input--reverse"
                        :value="darkMode"
                        :input-value="darkMode"
                        dense
                        @change="changeDarkMode($event !== null, $event)"
                    >
                        <template #label>
                            <v-icon class="mr-8">{{ $icons.mdiThemeLightDark }}</v-icon>
                            Dark Mode
                        </template>
                    </v-switch>
                </v-list-item>

                <!-- Font Setting -->
                <v-list-item dense>
                    <v-switch
                        class="v-input--reverse"
                        :value="getDiabloFont"
                        :input-value="getDiabloFont"
                        dense
                        @change="changeFontMode($event !== null, $event)"
                    >
                        <template #label>
                            <v-icon class="mr-8">{{ $icons.mdiFormatFont }}</v-icon>
                            Diablo Font
                        </template>
                    </v-switch>
                </v-list-item>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pkg from 'projRoot/package.json'

export default {
    name: 'Sidebar',
    data: () => ({
        title: `${pkg.productName}`,
        selectedItem: 1
    }),
    computed: {
        ...mapGetters({
            getOutlined: 'settings/getOutlined',
            getDrawer: 'settings/getDrawer',
            getDiabloFont: 'settings/getDiabloFont'
        }),
        items() {
            return [
                {
                    icon: this.$icons.mdiEmoticonDevilOutline,
                    title: 'Home',
                    to: '/home'
                },
                {
                    icon: this.$icons.mdiAbugidaThai,
                    title: 'Runes',
                    to: '/runes'
                },
                {
                    icon: this.$icons.mdiClipboardListOutline,
                    title: 'Runewords',
                    to: '/runewords'
                },
                {
                    icon: this.$icons.mdiDiamondStone,
                    title: 'Gems',
                    to: '/gems'
                }
            ]
        },
        darkMode() {
            return this.$vuetify.theme.dark
        },
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
            setDrawer: 'settings/setDrawer',
            setDarkMode: 'settings/setDarkMode',
            setDiabloFont: 'settings/setDiabloFont'
        }),
        changeDarkMode() {
            const newMode = !this.darkMode
            this.setDarkMode(newMode)
            this.$vuetify.theme.dark = newMode
        },
        changeFontMode() {
            const newMode = !this.getDiabloFont
            this.setDiabloFont(newMode)
        }
    }
}
</script>

<style>
/*****************************************************\
// Reversed input variant
\*****************************************************/
.v-input--reverse .v-input__slot {
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-right: 8px;
}
</style>
