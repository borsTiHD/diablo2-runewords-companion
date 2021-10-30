// Root Store
export const state = () => ({
    // Credits: List parsed from http://classic.battle.net/diablo2exp/items/gems.shtml
    gemList: [
        {
            name: 'Chipped Amethyst',
            level: 1,
            effects: {
                weapon: [
                    '+40 to Attack Rating'
                ],
                shield: [
                    '+8 Defense'
                ],
                armor: [
                    '+3 to Strength'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Amethyst',
            level: 5,
            effects: {
                weapon: [
                    '+60 to Attack Rating'
                ],
                shield: [
                    '+12 Defense'
                ],
                armor: [
                    '+4 to Strength'
                ]
            },
            upgradeRecipe: ['Chipped Amethyst', 'Chipped Amethyst', 'Chipped Amethyst']
        },
        {
            name: 'Amethyst',
            level: 12,
            effects: {
                weapon: [
                    '+80 to Attack Rating'
                ],
                shield: [
                    '+18 Defense'
                ],
                armor: [
                    '+6 to Strength'
                ]
            },
            upgradeRecipe: ['Flawed Amethyst', 'Flawed Amethyst', 'Flawed Amethyst']
        },
        {
            name: 'Flawless Amethyst',
            level: 15,
            effects: {
                weapon: [
                    '+100 to Attack Rating'
                ],
                shield: [
                    '+24 Defense'
                ],
                armor: [
                    '+8 to Strength'
                ]
            },
            upgradeRecipe: ['Amethyst', 'Amethyst', 'Amethyst']
        },
        {
            name: 'Perfect Amethyst',
            level: 18,
            effects: {
                weapon: [
                    '+150 to Attack Rating'
                ],
                shield: [
                    '+30 Defense'
                ],
                armor: [
                    '+10 to Strength'
                ]
            },
            upgradeRecipe: ['Flawless Amethyst', 'Flawless Amethyst', 'Flawless Amethyst']
        },
        {
            name: 'Chipped Sapphire',
            level: 1,
            effects: {
                weapon: [
                    '1-3 Cold Damage - 1.0 sec Duration'
                ],
                shield: [
                    '12% Resist Cold'
                ],
                armor: [
                    '+10 Max Mana'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Sapphire',
            level: 5,
            effects: {
                weapon: [
                    '3-5 Cold Damage - 1.4 sec Duration'
                ],
                shield: [
                    '16% Resist Cold'
                ],
                armor: [
                    '+17 Max Mana'
                ]
            },
            upgradeRecipe: ['Chipped Sapphire', 'Chipped Sapphire', 'Chipped Sapphire']
        },
        {
            name: 'Sapphire',
            level: 12,
            effects: {
                weapon: [
                    '4-7 Cold Damage - 2.0 sec Duration'
                ],
                shield: [
                    '22% Resist Cold'
                ],
                armor: [
                    '+24 Max Mana'
                ]
            },
            upgradeRecipe: ['Flawed Sapphire', 'Flawed Sapphire', 'Flawed Sapphire']
        },
        {
            name: 'Flawless Sapphire',
            level: 15,
            effects: {
                weapon: [
                    '6-10 Cold Damage - 2.4 sec Duration'
                ],
                shield: [
                    '28% Resist Cold'
                ],
                armor: [
                    '+31 Max Mana'
                ]
            },
            upgradeRecipe: ['Sapphire', 'Sapphire', 'Sapphire']
        },
        {
            name: 'Perfect Sapphire',
            level: 18,
            effects: {
                weapon: [
                    '10-14 Cold Damage - 3.0 sec Duration'
                ],
                shield: [
                    '40% Resist Cold'
                ],
                armor: [
                    '+38 Max Mana'
                ]
            },
            upgradeRecipe: ['Flawless Sapphire', 'Flawless Sapphire', 'Flawless Sapphire']
        },
        {
            name: 'Chipped Emerald',
            level: 1,
            effects: {
                weapon: [
                    '+10 Poison Damage over 3 Seconds'
                ],
                shield: [
                    '12% Resist Poison'
                ],
                armor: [
                    '+3 to Dexterity'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Emerald',
            level: 5,
            effects: {
                weapon: [
                    '+20 Poison Damage over 4 Seconds'
                ],
                shield: [
                    '16% Resist Poison'
                ],
                armor: [
                    '+4 to Dexterity'
                ]
            },
            upgradeRecipe: ['Chipped Emerald', 'Chipped Emerald', 'Chipped Emerald']
        },
        {
            name: 'Emerald',
            level: 12,
            effects: {
                weapon: [
                    '+40 Poison Damage over 5 Seconds'
                ],
                shield: [
                    '22% Resist Poison'
                ],
                armor: [
                    '+6 to Dexterity'
                ]
            },
            upgradeRecipe: ['Flawed Emerald', 'Flawed Emerald', 'Flawed Emerald']
        },
        {
            name: 'Flawless Emerald',
            level: 15,
            effects: {
                weapon: [
                    '+60 Poison Damage over 6 Seconds'
                ],
                shield: [
                    '28% Resist Poison'
                ],
                armor: [
                    '+8 to Dexterity'
                ]
            },
            upgradeRecipe: ['Emerald', 'Emerald', 'Emerald']
        },
        {
            name: 'Perfect Emerald',
            level: 18,
            effects: {
                weapon: [
                    '+100 Poison Damage over 7 Seconds'
                ],
                shield: [
                    '40% Resist Poison'
                ],
                armor: [
                    '+10 to Dexterity'
                ]
            },
            upgradeRecipe: ['Flawless Emerald', 'Flawless Emerald', 'Flawless Emerald']
        },
        {
            name: 'Chipped Ruby',
            level: 1,
            effects: {
                weapon: [
                    '3-4 Fire Damage'
                ],
                shield: [
                    '12% Resist Fire'
                ],
                armor: [
                    '+10 to Life'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Ruby',
            level: 5,
            effects: {
                weapon: [
                    '5-8 Fire Damage'
                ],
                shield: [
                    '16% Resist Fire'
                ],
                armor: [
                    '+17 to Life'
                ]
            },
            upgradeRecipe: ['Chipped Ruby', 'Chipped Ruby', 'Chipped Ruby']
        },
        {
            name: 'Ruby',
            level: 12,
            effects: {
                weapon: [
                    '8-12 Fire Damage'
                ],
                shield: [
                    '22% Resist Fire'
                ],
                armor: [
                    '+24 to Life'
                ]
            },
            upgradeRecipe: ['Flawed Ruby', 'Flawed Ruby', 'Flawed Ruby']
        },
        {
            name: 'Flawless Ruby',
            level: 15,
            effects: {
                weapon: [
                    '10-16 Fire Damage'
                ],
                shield: [
                    '28% Resist Fire'
                ],
                armor: [
                    '+31 to Life'
                ]
            },
            upgradeRecipe: ['Ruby', 'Ruby', 'Ruby']
        },
        {
            name: 'Perfect Ruby',
            level: 18,
            effects: {
                weapon: [
                    '15-20 Fire Damage'
                ],
                shield: [
                    '40% Resist Fire'
                ],
                armor: [
                    '+38 to Life'
                ]
            },
            upgradeRecipe: ['Flawless Ruby', 'Flawless Ruby', 'Flawless Ruby']
        },
        {
            name: 'Chipped Diamond',
            level: 1,
            effects: {
                weapon: [
                    '+28% Damage vs. Undead'
                ],
                shield: [
                    'All Resistances +6%'
                ],
                armor: [
                    '+20 to attack Rating'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Diamond',
            level: 5,
            effects: {
                weapon: [
                    '+34% Damage vs. Undead'
                ],
                shield: [
                    'All Resistances +8%'
                ],
                armor: [
                    '+40 to attack Rating'
                ]
            },
            upgradeRecipe: ['Chipped Diamond', 'Chipped Diamond', 'Chipped Diamond']
        },
        {
            name: 'Diamond',
            level: 12,
            effects: {
                weapon: [
                    '+44% Damage vs. Undead'
                ],
                shield: [
                    'All Resistances +11%'
                ],
                armor: [
                    '+60 to attack Rating'
                ]
            },
            upgradeRecipe: ['Flawed Diamond', 'Flawed Diamond', 'Flawed Diamond']
        },
        {
            name: 'Flawless Diamond',
            level: 15,
            effects: {
                weapon: [
                    '+54% Damage vs. Undead'
                ],
                shield: [
                    'All Resistances +14%'
                ],
                armor: [
                    '+80 to attack Rating'
                ]
            },
            upgradeRecipe: ['Diamond', 'Diamond', 'Diamond']
        },
        {
            name: 'Perfect Diamond',
            level: 18,
            effects: {
                weapon: [
                    '+68% Damage vs. Undead'
                ],
                shield: [
                    'All Resistances +19%'
                ],
                armor: [
                    '+100 to attack Rating'
                ]
            },
            upgradeRecipe: ['Flawless Diamond', 'Flawless Diamond', 'Flawless Diamond']
        },
        {
            name: 'Chipped Topaz',
            level: 1,
            effects: {
                weapon: [
                    '1-8 Lightning Damage'
                ],
                shield: [
                    '12% Resist Lightning'
                ],
                armor: [
                    '+9% Chance to Find Magic Items'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Topaz',
            level: 5,
            effects: {
                weapon: [
                    '1-14 Lightning Damage'
                ],
                shield: [
                    '16% Resist Lightning'
                ],
                armor: [
                    '+13% Chance to Find Magic Items'
                ]
            },
            upgradeRecipe: ['Chipped Topaz', 'Chipped Topaz', 'Chipped Topaz']
        },
        {
            name: 'Topaz',
            level: 12,
            effects: {
                weapon: [
                    '1-22 Lightning Damage'
                ],
                shield: [
                    '22% Resist Lightning'
                ],
                armor: [
                    '+16% Chance to Find Magic Items'
                ]
            },
            upgradeRecipe: ['Flawed Topaz', 'Flawed Topaz', 'Flawed Topaz']
        },
        {
            name: 'Flawless Topaz',
            level: 15,
            effects: {
                weapon: [
                    '1-30 Lightning Damage'
                ],
                shield: [
                    '28% Resist Lightning'
                ],
                armor: [
                    '+20% Chance to Find Magic Items'
                ]
            },
            upgradeRecipe: ['Topaz', 'Topaz', 'Topaz']
        },
        {
            name: 'Perfect Topaz',
            level: 18,
            effects: {
                weapon: [
                    '1-40 Lightning Damage'
                ],
                shield: [
                    '40% Resist Lightning'
                ],
                armor: [
                    '+24% Chance to Find Magic Items'
                ]
            },
            upgradeRecipe: ['Flawless Topaz', 'Flawless Topaz', 'Flawless Topaz']
        },
        {
            name: 'Chipped Skull',
            level: 1,
            effects: {
                weapon: [
                    'Steals 2% life, 1% Mana'
                ],
                shield: [
                    'Attacker Takes Damage of 4'
                ],
                armor: [
                    'Replenish Life +2',
                    'Regenerate Mana 8%'
                ]
            },
            upgradeRecipe: null
        },
        {
            name: 'Flawed Skull',
            level: 5,
            effects: {
                weapon: [
                    'Steals 2% life, 2% Mana'
                ],
                shield: [
                    'Attacker Takes Damage of 8'
                ],
                armor: [
                    'Replenish Life +3',
                    'Regenerate Mana 8%'
                ]
            },
            upgradeRecipe: ['Chipped Skull', 'Chipped Skull', 'Chipped Skull']
        },
        {
            name: 'Skull',
            level: 12,
            effects: {
                weapon: [
                    'Steals 3% life, 2% Mana'
                ],
                shield: [
                    'Attacker Takes Damage of 12'
                ],
                armor: [
                    'Replenish Life +3',
                    'Regenerate Mana 12%'
                ]
            },
            upgradeRecipe: ['Flawed Skull', 'Flawed Skull', 'Flawed Skull']
        },
        {
            name: 'Flawless Skull',
            level: 15,
            effects: {
                weapon: [
                    'Steals 3% life, 3% Mana'
                ],
                shield: [
                    'Attacker Takes Damage of 16'
                ],
                armor: [
                    'Replenish Life +4',
                    'Regenerate Mana 12%'
                ]
            },
            upgradeRecipe: ['Skull', 'Skull', 'Skull']
        },
        {
            name: 'Perfect Skull',
            level: 18,
            effects: {
                weapon: [
                    'Steals 4% life, 3% Mana'
                ],
                shield: [
                    'Attacker Takes Damage of 20'
                ],
                armor: [
                    'Replenish Life +5',
                    'Regenerate Mana 19%'
                ]
            },
            upgradeRecipe: ['Flawless Skull', 'Flawless Skull', 'Flawless Skull']
        }
    ]
})

// Sync functions for setting data
export const mutations = {
    /*
    setXyz(state, payload) {
        state.setXyz = payload
    }
    */
}

// Async functions for setting data and calling mutations
export const actions = {
    /*
    setXyz({ commit }, payload) {
        commit('setXyz', payload)
    }
    */
}

// Getting computed data
export const getters = {
    getGemList(state) {
        // Returns all gems
        return state.gemList
    },
    getGem: (state) => (name) => {
        // Returns Gem object with the given name
        return state.gemList.find((gem) => gem.name === name)
    },
    getGemRecipe: (state) => (name) => {
        // Returns Gem Recipe with the given name
        return state.gemList.find((gem) => gem.name === name).upgradeRecipe
    }
}
