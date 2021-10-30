// Root Store
export const state = () => ({
    drawer: false,
    design: {
        skin: 'Default',
        darkMode: true,
        elevation: 0,
        outlined: false,
        diabloFont: true
    }
})

// Sync functions for setting data
export const mutations = {
    setDrawer(state, payload) {
        state.drawer = payload
    },
    setDarkMode(state, payload) {
        state.design.darkMode = payload
    },
    setElevation(state, payload) {
        state.design.elevation = payload
    },
    setOutlined(state, payload) {
        state.design.outlined = payload
    },
    setActiveSkin(state, payload) {
        state.design.skin = payload
    },
    setDiabloFont(state, payload) {
        state.design.diabloFont = payload
    }
}

// Async functions for setting data and calling mutations
export const actions = {
    setDrawer({ commit }, payload) {
        commit('setDrawer', payload)
    },
    setDarkMode({ commit }, payload) {
        commit('setDarkMode', payload)
    },
    setElevation({ commit }, payload) {
        commit('setElevation', payload)
    },
    setOutlined({ commit }, payload) {
        commit('setOutlined', payload)
    },
    setActiveSkin({ commit }, payload) {
        commit('setActiveSkin', payload)
    },
    setDiabloFont({ commit }, payload) {
        commit('setDiabloFont', payload)
    }
}

// Getting computed data
export const getters = {
    getDrawer(state) {
        return state.drawer
    },
    getDarkMode(state) {
        return state.design.darkMode
    },
    getElevation(state) {
        return state.design.elevation
    },
    getOutlined(state) {
        return state.design.outlined
    },
    getActiveSkin(state) {
        return state.design.skin
    },
    getDiabloFont(state) {
        return state.design.diabloFont
    }
}
