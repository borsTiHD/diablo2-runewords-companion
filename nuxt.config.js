import path from 'path'
import fs from 'fs-extra'

// Development
const isDev = process.env.NODE_ENV !== 'production'

// Path CONST
const PROJECT_ROOT = process.cwd()
const PKG_FILE = path.join(PROJECT_ROOT, 'package.json')

// Package.json
const pkg = JSON.parse(fs.readFileSync(PKG_FILE)) // import pkg from '../../package.json'

// Webpage title, also used in global "titleMixin"
const headTitle = isDev ? `${pkg.productName.replace(' 😈', '')} - DEV` : pkg.productName.replace(' 😈', '')

// Alias
const alias = {
    alias: {
        projRoot: PROJECT_ROOT
    }
}

export default {
    // Adding path alias
    ...alias,

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Serving on network
    server: {
        host: '0.0.0.0' // default: localhost
    },

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s',
        title: headTitle,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { mode: 'client', src: '@/plugins/vuetify-icons.js' },
        { mode: 'client', src: '@/plugins/change-theme.js' },
        { mode: 'client', src: '@/plugins/persistedState.client.js' },
        { mode: 'client', src: '@/plugins/pwa.client.js' },
        { mode: 'client', src: '@/plugins/pwa-update.client.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        defaultAssets: false,
        icons: {
            iconfont: 'mdiSvg'
        },
        theme: {
            themes: {
                light: {},
                dark: {}
            },
            options: { customProperties: true }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
