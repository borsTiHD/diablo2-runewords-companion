// Root Store
export const state = () => ({
    search: null
})

// Sync functions for setting data
export const mutations = {
    setSearch(state, payload) {
        state.search = payload
    }
}

// Async functions for setting data and calling mutations
export const actions = {
    setSearch({ commit }, payload) {
        commit('setSearch', payload)
    }
}

// Getting computed data
export const getters = {
    getSearch(state) {
        return state.search
    }
}
