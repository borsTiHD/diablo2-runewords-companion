<template>
    <v-row>
        <v-col cols="4">
            <span class="mr-2 orange--text text--lighten-1">{{ rune }}</span>
        </v-col>
        <v-col cols="8">
            <v-text-field
                v-model="stock"
                class="ml-1"
                dense
                :rules="[numberValidation]"
            >
                <template #prepend>
                    <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="decrementItem(rune)"
                            >
                                {{ $icons.mdiMinus }}
                            </v-icon>
                        </template>
                        <span>Decrement Item</span>
                    </v-tooltip>
                </template>
                <template #append-outer>
                    <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="incrementItem(rune)"
                            >
                                {{ $icons.mdiPlus }}
                            </v-icon>
                        </template>
                        <span>Increment Item</span>
                    </v-tooltip>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'RuneInventory',
    props: {
        rune: {
            type: String,
            required: true,
            default: 'undefined'
        }
    },
    computed: {
        ...mapGetters({
            getItem: 'inventory/getItem'
        }),
        stock: {
            get() {
                const item = this.getItem(this.rune)
                return item?.value || 0
            },
            set(val) {
                if (/^\d+$/.test(val)) {
                    // Set new stock value for the rune
                    this.setStock({ name: this.rune, value: val })
                }
            }
        }
    },
    methods: {
        ...mapActions({
            setStock: 'inventory/setStock',
            incrementItem: 'inventory/incrementItem',
            decrementItem: 'inventory/decrementItem'
        }),
        numberValidation(val) {
            if (/^\d+$/.test(val)) {
                return true
            }
            return 'only numbers'
        }
    }
}
</script>
