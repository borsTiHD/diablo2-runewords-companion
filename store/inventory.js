// Root Store
export const state = () => ({
    inventory: [
        /*
        {
            name: 'Nef', // Itemname
            value: 2 // Item stock value
        }
        */
    ]
})

// Sync functions for setting data
export const mutations = {
    clearInventory(state, payload) {
        // DONT USE THIS MUTATION - USE THE ACTIONS FOR 'clearInventory' INSTEAD
        state.inventory = [] // Clears hole inventory
    },
    addItem(state, payload) {
        // DONT USE THIS MUTATION - USE THE ACTIONS FOR SETSTOCK/INCREMENTING/DECREMENTING INSTEAD

        // Payload:
        // {
        //     name: itemName,
        //     value: 1
        // }

        // Adding new item if it doesn't exist, or manipulate the stock value
        const item = state.inventory.find((data) => data.name === payload.name)
        if (!item) {
            state.inventory.push({
                name: payload.name,
                value: parseInt(payload.value)
            })
        } else {
            item.value = parseInt(payload.value)
        }
    },
    incrementItem(state, payload) {
        // Increment item by one
        // DONT USE THIS MUTATION - USE THE ACTION INSTEAD
        const itemName = payload
        const item = state.inventory.find((data) => data.name === itemName)
        if (item) {
            item.value++
        }
    },
    decrementItem(state, payload) {
        // Decrement item by one
        // DONT USE THIS MUTATION - USE THE ACTION INSTEAD
        const itemName = payload
        const item = state.inventory.find((data) => data.name === itemName)
        if (item && item.value >= 1) { // prevents a value below 0
            item.value--
        }
    }
}

// Async functions for setting data and calling mutations
export const actions = {
    async clearInventory({ commit }, payload) {
        commit('clearInventory', payload)
    },
    setStock({ commit }, payload) {
        commit('addItem', payload)
    },
    incrementItem({ commit, getters }, payload) {
        const itemName = payload
        const item = getters.getItem(itemName)

        // If item exists in inventory, item stock value will be incremented..
        // If not, item will be added with 1 stock value
        if (item) {
            commit('incrementItem', itemName)
        } else {
            commit('addItem', {
                name: itemName,
                value: 1
            })
        }
    },
    decrementItem({ commit, getters }, payload) {
        const itemName = payload
        const item = getters.getItem(itemName)

        // If item exists in inventory, item stock value will be decremented..
        // If not, item will be added with 0 stock value
        if (item) {
            commit('decrementItem', itemName)
        } else {
            commit('addItem', {
                name: itemName,
                value: 0
            })
        }
    }
}

// Getting computed data
export const getters = {
    getInventory(state) {
        return state.inventory
    },
    getItem: (state) => (name) => {
        // Returns item object by given name
        return state.inventory.find((data) => data.name === name)
    }
}
