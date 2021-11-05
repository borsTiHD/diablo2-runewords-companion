<template>
    <v-tooltip left>
        <template #activator="{ on, attrs }">
            <v-fab-transition>
                <v-btn
                    v-show="show"
                    :top="top"
                    :bottom="bottom"
                    :right="right"
                    :left="left"
                    class="mb-10 mr-5"
                    color="primary"
                    dark
                    fixed
                    fab
                    v-bind="attrs"
                    v-on="on"
                    @click="handleClick"
                >
                    <v-icon>{{ $icons.mdiChevronUp }}</v-icon>
                </v-btn>
            </v-fab-transition>
        </template>
        <span>Back to top</span>
    </v-tooltip>
</template>

<script>
export default {
    name: 'BackToTop',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        top: {
            type: Boolean,
            default: false
        },
        bottom: {
            type: Boolean,
            default: true
        },
        right: {
            type: Boolean,
            default: true
        },
        left: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>
