// Root Store
export const state = () => ({
    // Credits: List parsed from https://www.windowscentral.com/diablo-2-resurrected-runes-runewords
    runeList: [
        {
            name: 'El',
            level: 11,
            effects: {
                weapon: [
                    '+50 attack rating',
                    '+1 light radius'
                ],
                armor: [
                    '+15 defense',
                    '+1 light radius'
                ]
            },
            upgradeRecipe: {
                runes: null,
                gems: null
            }
        },
        {
            name: 'Eld',
            level: 11,
            effects: {
                weapon: [
                    '+75% damage to undead',
                    '+50 attack rating against undead'
                ],
                armor: [
                    '15% slower stamina drain',
                    '+7% chance to block (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['El', 'El', 'El'],
                gems: null
            }
        },
        {
            name: 'Tir',
            level: 13,
            effects: {
                weapon: [
                    '+2 mana after each kill'
                ],
                armor: [
                    '+2 mana after each kill'
                ]
            },
            upgradeRecipe: {
                runes: ['Eld', 'Eld', 'Eld'],
                gems: null
            }
        },
        {
            name: 'Nef',
            level: 13,
            effects: {
                weapon: [
                    'Knockback'
                ],
                armor: [
                    '+30 missile defense'
                ]
            },
            upgradeRecipe: {
                runes: ['Tir', 'Tir', 'Tir'],
                gems: null
            }
        },
        {
            name: 'Eth',
            level: 15,
            effects: {
                weapon: [
                    '-25% target defense'
                ],
                armor: [
                    '+15% mana regeneration'
                ]
            },
            upgradeRecipe: {
                runes: ['Nef', 'Nef', 'Nef'],
                gems: null
            }
        },
        {
            name: 'Ith',
            level: 15,
            effects: {
                weapon: [
                    '+9 maximum damage'
                ],
                armor: [
                    '15% damage taken goes to mana'
                ]
            },
            upgradeRecipe: {
                runes: ['Eth', 'Eth', 'Eth'],
                gems: null
            }
        },
        {
            name: 'Tal',
            level: 17,
            effects: {
                weapon: [
                    '+75 poison damage over 5 seconds'
                ],
                armor: [
                    '+30% poison resist',
                    '+35% poison resist (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Ith', 'Ith', 'Ith'],
                gems: null
            }
        },
        {
            name: 'Ral',
            level: 19,
            effects: {
                weapon: [
                    'Add 5-30 fire damage'
                ],
                armor: [
                    '+30% fire resist',
                    '+35% fire resist (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Tal', 'Tal', 'Tal'],
                gems: null
            }
        },
        {
            name: 'Ort',
            level: 21,
            effects: {
                weapon: [
                    'Add 1-50 lightning damage'
                ],
                armor: [
                    '+30% lightning resist',
                    '+35% lightning resist (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Ral', 'Ral', 'Ral'],
                gems: null
            }
        },
        {
            name: 'Thul',
            level: 23,
            effects: {
                weapon: [
                    'Add 3-14 cold damage (3 seconds)'
                ],
                armor: [
                    '+30% cold resist',
                    '+35% cold resist (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Ort', 'Ort', 'Ort'],
                gems: null
            }
        },
        {
            name: 'Amn',
            level: 25,
            effects: {
                weapon: [
                    '7% life stolen per hit'
                ],
                armor: [
                    'Attacker takes damage of 14'
                ]
            },
            upgradeRecipe: {
                runes: ['Thul', 'Thul', 'Thul'],
                gems: ['Chipped Topaz']
            }
        },
        {
            name: 'Sol',
            level: 27,
            effects: {
                weapon: [
                    '+9 minimum damage'
                ],
                armor: [
                    'Damage reduced by 7'
                ]
            },
            upgradeRecipe: {
                runes: ['Amn', 'Amn', 'Amn'],
                gems: ['Chipped Amethyst']
            }
        },
        {
            name: 'Shael',
            level: 29,
            effects: {
                weapon: [
                    '20% increased attack speed'
                ],
                armor: [
                    '20% faster hit recovery',
                    '20% faster block rate (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Sol', 'Sol', 'Sol'],
                gems: ['Chipped Sapphire']
            }
        },
        {
            name: 'Dol',
            level: 31,
            effects: {
                weapon: [
                    'Hit causes monster to flee (25%)'
                ],
                armor: [
                    '+7 replenish life'
                ]
            },
            upgradeRecipe: {
                runes: ['Shael', 'Shael', 'Shael'],
                gems: ['Chipped Ruby']
            }
        },
        {
            name: 'Hel',
            level: 0,
            effects: {
                weapon: [
                    '-20% requirements'
                ],
                armor: [
                    '-15% requirements'
                ]
            },
            upgradeRecipe: {
                runes: ['Dol', 'Dol', 'Dol'],
                gems: ['Chipped Emerald']
            }
        },
        {
            name: 'Io',
            level: 35,
            effects: {
                weapon: [
                    '+10 vitality'
                ],
                armor: [
                    '+10 vitality'
                ]
            },
            upgradeRecipe: {
                runes: ['Hel', 'Hel', 'Hel'],
                gems: ['Chipped Diamond']
            }
        },
        {
            name: 'Lum',
            level: 37,
            effects: {
                weapon: [
                    '+10 energy'
                ],
                armor: [
                    '+10 energy'
                ]
            },
            upgradeRecipe: {
                runes: ['Io', 'Io', 'Io'],
                gems: ['Flawed Topaz']
            }
        },
        {
            name: 'Ko',
            level: 39,
            effects: {
                weapon: [
                    '+10 dexterity'
                ],
                armor: [
                    '+10 dexterity'
                ]
            },
            upgradeRecipe: {
                runes: ['Lum', 'Lum', 'Lum'],
                gems: ['Flawed Amethyst']
            }
        },
        {
            name: 'Fal',
            level: 41,
            effects: {
                weapon: [
                    '+10 strength'
                ],
                armor: [
                    '+10 strength'
                ]
            },
            upgradeRecipe: {
                runes: ['Ko', 'Ko', 'Ko'],
                gems: ['Flawed Sapphire']
            }
        },
        {
            name: 'Lem',
            level: 43,
            effects: {
                weapon: [
                    '75% extra gold from monsters'
                ],
                armor: [
                    '50% extra gold from monsters'
                ]
            },
            upgradeRecipe: {
                runes: ['Fal', 'Fal', 'Fal'],
                gems: ['Flawed Ruby']
            }
        },
        {
            name: 'Pul',
            level: 45,
            effects: {
                weapon: [
                    '+75% damage to demons',
                    '+100 attack rating against demons'
                ],
                armor: [
                    '+30% enhanced defense'
                ]
            },
            upgradeRecipe: {
                runes: ['Lem', 'Lem', 'Lem'],
                gems: ['Flawed Emerald']
            }
        },
        {
            name: 'Um',
            level: 47,
            effects: {
                weapon: [
                    '25% chance of open wounds'
                ],
                armor: [
                    '+15 all resistances',
                    '+22 all resistances (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Pul', 'Pul'],
                gems: ['Flawed Diamond']
            }
        },
        {
            name: 'Mal',
            level: 49,
            effects: {
                weapon: [
                    'Prevent monster heal'
                ],
                armor: [
                    'Magic damage reduced by 7'
                ]
            },
            upgradeRecipe: {
                runes: ['Um', 'Um'],
                gems: ['Topaz']
            }
        },
        {
            name: 'Ist',
            level: 51,
            effects: {
                weapon: [
                    '+30% better magic find'
                ],
                armor: [
                    '+25% better magic find'
                ]
            },
            upgradeRecipe: {
                runes: ['Mal', 'Mal'],
                gems: ['Amethyst']
            }
        },
        {
            name: 'Gul',
            level: 53,
            effects: {
                weapon: [
                    '+20% bonus to attack rating'
                ],
                armor: [
                    '+5% to maximum poison resist'
                ]
            },
            upgradeRecipe: {
                runes: ['Ist', 'Ist'],
                gems: ['Sapphire']
            }
        },
        {
            name: 'Vex',
            level: 55,
            effects: {
                weapon: [
                    '7% mana stolen per hit'
                ],
                armor: [
                    '+5% to maximum fire resist'
                ]
            },
            upgradeRecipe: {
                runes: ['Gul', 'Gul'],
                gems: ['Ruby']
            }
        },
        {
            name: 'Ohm',
            level: 57,
            effects: {
                weapon: [
                    '+50% enhanced damage'
                ],
                armor: [
                    '+5% to maximum cold resist'
                ]
            },
            upgradeRecipe: {
                runes: ['Vex', 'Vex'],
                gems: ['Emerald']
            }
        },
        {
            name: 'Lo',
            level: 59,
            effects: {
                weapon: [
                    '+20% deadly strike'
                ],
                armor: [
                    '+5% to maximum lightning resist'
                ]
            },
            upgradeRecipe: {
                runes: ['Ohm', 'Ohm'],
                gems: ['Diamond']
            }
        },
        {
            name: 'Sur',
            level: 61,
            effects: {
                weapon: [
                    'Hit blinds target'
                ],
                armor: [
                    '+5% maximum mana',
                    '+50 mana (shields)'
                ]
            },
            upgradeRecipe: {
                runes: ['Lo', 'Lo'],
                gems: ['Flawless Topaz']
            }
        },
        {
            name: 'Ber',
            level: 63,
            effects: {
                weapon: [
                    '+20% chance of crushing blow'
                ],
                armor: [
                    'Damage reduced by 8%'
                ]
            },
            upgradeRecipe: {
                runes: ['Sur', 'Sur'],
                gems: ['Flawless Amethyst']
            }
        },
        {
            name: 'Jah',
            level: 65,
            effects: {
                weapon: [
                    'Ignore target\'s defense'
                ],
                armor: [
                    '+5% maximum life',
                    '+50 life (shield)'
                ]
            },
            upgradeRecipe: {
                runes: ['Ber', 'Ber'],
                gems: ['Flawless Sapphire']
            }
        },
        {
            name: 'Cham',
            level: 67,
            effects: {
                weapon: [
                    'Freeze target +3'
                ],
                armor: [
                    'Cannot be frozen'
                ]
            },
            upgradeRecipe: {
                runes: ['Jah', 'Jah'],
                gems: ['Flawless Ruby']
            }
        },
        {
            name: 'Zod',
            level: 69,
            effects: {
                weapon: [
                    'Indestructible'
                ],
                armor: [
                    'Indestructible'
                ]
            },
            upgradeRecipe: {
                runes: ['Cham', 'Cham'],
                gems: ['Flawless Emerald']
            }
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
    getRuneList(state) {
        // Returns all runes
        return state.runeList
    },
    getRune: (state) => (name) => {
        // Returns Rune object with the given name
        return state.runeList.find((rune) => rune.name === name)
    },
    getRuneRecipe: (state) => (name) => {
        // Returns Rune Recipe with the given name
        return state.runeList.find((rune) => rune.name === name).upgradeRecipe
    }
}
