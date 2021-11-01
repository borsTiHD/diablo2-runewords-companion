// Root Store
export const state = () => ({
    // Credits: List parsed from https://diablo2.wiki.fextralife.com/Runewords
    runewords: [
        {
            name: 'Ancient\'s Pledge',
            level: 21,
            recipe: ['Ral', 'Ort', 'Tal'],
            allowedItems: [
                'Shields'
            ],
            effects: [
                '+50% Enhanced Defense',
                'Cold Resistance +43%',
                'Fire Resistance +48%',
                'Lightning Resistance +48%',
                'Poison Resistance +48%',
                '10% Damage Goes To Mana'
            ]
        },
        {
            name: 'Black',
            level: 35,
            recipe: ['Thul', 'Io', 'Nef'],
            allowedItems: [
                'Clubs',
                'Hammers',
                'Maces'
            ],
            effects: [
                '+120% Enhanced Damage',
                '40% Chance Of Crushing Blow',
                '+200 To Attack Rating',
                'Adds 3-14 Cold Damage - Cold Duration 3 Seconds',
                '+10 To Vitality',
                '15% Increased Attack Speed',
                'Knockback',
                'Magic Damage Reduced By 2',
                'Level 4 Corpse Explosion (12 Charges)'
            ]
        },
        {
            name: 'Fury',
            level: 65,
            recipe: ['Jah', 'Gul', 'Eth'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                '+209% Enhanced Damage',
                '40% Increased Attack Speed',
                'Prevent Monster Heal',
                '66% Chance Of Open Wounds',
                '33% Deadly Strike',
                'Ignore Target\'s Defense',
                '-25% Target Defense',
                '20% Bonus To Attack Rating',
                '6% Life Stolen Per Hit',
                '+5 To Frenzy (Barbarian Only)'
            ]
        },
        {
            name: 'Holy Thunder',
            level: 21,
            recipe: ['Eth', 'Ral', 'Ort', 'Tal'],
            allowedItems: [
                'Scepters'
            ],
            effects: [
                '+60% Enhanced Damage',
                '-25% Target Defense',
                'Adds 5-30 Fire Damage',
                'Adds 21-110 Lightning Damage',
                '+75 Poison Damage Over 5 Seconds',
                '+10 To Maximum Damage',
                'Lightning Resistance +60%',
                '+5 To Maximum Lightning Resistance',
                '+3 To Holy Shock (Paladin Only)',
                'Level 7 Chain Lightning (60 Charges)'
            ]
        },
        {
            name: 'Honor',
            level: 27,
            recipe: ['Amn', 'El', 'Ith', 'Tir', 'Sol'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                '+160% Enhanced Damage',
                '+9 To Minimum Damage',
                '+9 To Maximum Damage',
                '25% Deadly Strike',
                '+250 To Attack Rating',
                '+1 to All Skills',
                '7% Life Stolen Per Hit',
                'Replenish Life +10',
                '+10 To Strength',
                '+1 To Light Radius',
                '+2 To Mana After Each Kill'
            ]
        },
        {
            name: 'King\'s Grace',
            level: 25,
            recipe: ['Amn', 'Ral', 'Thul'],
            allowedItems: [
                'Swords',
                'Scepters'
            ],
            effects: [
                '+100% Enhanced Damage',
                '+100% Damage To Demons',
                '+50% Damage To Undead',
                'Adds 5-30 Fire Damage',
                'Adds 3-14 Cold Damage - 3 Second Duration',
                '+150 To Attack Rating',
                '+100 To Attack Rating Against Demons',
                '+100 To Attack Rating Against Undead',
                '7% Life Stolen Per Hit'
            ]
        },
        {
            name: 'Leaf',
            level: 19,
            recipe: ['Tir', 'Ral'],
            allowedItems: [
                'Staves'
            ],
            effects: [
                'Adds 5-30 Fire Damage',
                '+3 To Fire Skills',
                '+3 To Fire Bolt (Sorceress Only)',
                '+3 To Inferno (Sorceress Only)',
                '+3 To Warmth (Sorceress Only)',
                '+2 To Mana After Each Kill',
                '+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)',
                'Cold Resistance +33%'
            ]
        },
        {
            name: 'Lionheart',
            level: 41,
            recipe: ['Hel', 'Lum', 'Fal'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+20% Enhanced Damage',
                'Requirements -15%',
                '+25 To Strength',
                '+10 To Energy',
                '+20 To Vitality',
                '+15 To Dexterity',
                '+50 To Life',
                'All Resistances +30'
            ]
        },
        {
            name: 'Lore',
            level: 27,
            recipe: ['Ort', 'Sol'],
            allowedItems: [
                'Helms'
            ],
            effects: [
                '+1 To All Skill Levels',
                '+10 To Energy',
                '+2 To Mana After Each Kill',
                'Lightning Resistance+30%',
                'Damage Reduced By 7',
                '+2 To Light Radius'
            ]
        },
        {
            name: 'Malice',
            level: 15,
            recipe: ['Ith', 'El', 'Eth'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                '+33% Enhanced Damage',
                '+9 To Maximum Damage',
                '100% Chance Of Open Wounds',
                '-25% Target Defense',
                '-100 To Monster Defense Per Hit',
                'Prevent Monster Heal',
                '+50 To Attack Rating',
                'Drain Life -5'
            ]
        },
        {
            name: 'Melody',
            level: 39,
            recipe: ['Shael', 'Ko', 'Nef'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                '+50% Enhanced Damage',
                '+300% Damage To Undead',
                '+3 To Bow and Crossbow Skills (Amazon Only)',
                '+3 To Critical Strike (Amazon Only)',
                '+3 To Dodge (Amazon Only)',
                '+3 To Slow Missiles (Amazon Only)',
                '20% Increased Attack Speed',
                '+10 To Dexterity',
                'Knockback'
            ]
        },
        {
            name: 'Memory',
            level: 37,
            recipe: ['Lum', 'Io', 'Sol', 'Eth'],
            allowedItems: [
                'Staves'
            ],
            effects: [
                '+3 to Sorceress Skill Levels',
                '33% Faster Cast Rate',
                'Increase Maximum Mana 20%',
                '+3 Energy Shield (Sorceress Only)',
                '+2 Static Field (Sorceress Only)',
                '+10 To Energy',
                '+10 To Vitality',
                '+9 To Minimum Damage',
                '-25% Target Defense',
                'Magic Damage Reduced By 7',
                '+50% Enhanced Defense'
            ]
        },
        {
            name: 'Nadir',
            level: 13,
            recipe: ['Nef', 'Tir'],
            allowedItems: [
                'Helms'
            ],
            effects: [
                '+50% Enhanced Defense',
                '+10 Defense',
                '+30 Defense vs. Missile',
                'Level 13 Cloak of Shadows (9 Charges)',
                '+2 To Mana After Each Kill',
                '+5 To Strength',
                '-33% Extra Gold From Monsters',
                '-3 To Light Radius'
            ]
        },
        {
            name: 'Radiance',
            level: 27,
            recipe: ['Nef', 'Sol', 'Ith'],
            allowedItems: [
                'Helms'
            ],
            effects: [
                '+75% Enhanced Defense',
                '+30 Defense Vs. Missile',
                '+10 To Energy',
                '+10 To Vitality',
                '15% Damage Goes To Mana',
                'Magic Damage Reduced By 3',
                '+33 To Mana',
                'Damage Reduced By 7',
                '+5 To Light Radius'
            ]
        },
        {
            name: 'Rhyme',
            level: 29,
            recipe: ['Shael', 'Eth'],
            allowedItems: [
                'Shields'
            ],
            effects: [
                '20% Increased Chance of Blocking',
                '40% Faster Block Rate',
                'All Resistances +25',
                'Regenerate Mana 15%',
                'Cannot Be Frozen',
                '50% Extra Gold From Monsters',
                '25% Better Chance Of Getting Magic Items'
            ]
        },
        {
            name: 'Silence',
            level: 55,
            recipe: ['Dol', 'Eld', 'Hel', 'Ist', 'Tir', 'Vex'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                '200% Enhanced Damage',
                '+75% Damage To Undead',
                'Requirements -20%',
                '20% Increased Attack Speed',
                '+50 To Attack Rating Against Undead',
                '+2 To All Skills',
                'All Resistances +75',
                '20% Faster Hit Recovery',
                '11% Mana Stolen Per Hit',
                'Hit Causes Monster To Flee 25%',
                'Hit Blinds Target +33',
                '+2 To Mana After Each Kill',
                '30% Better Chance Of Getting Magic Items'
            ]
        },
        {
            name: 'Smoke',
            level: 37,
            recipe: ['Nef', 'Lum'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+75% Enhanced Defense',
                '+280 Defense Vs. Missile',
                'All Resistances +50',
                '20% Faster Hit Recovery',
                'Level 6 Weaken (18 Charges)',
                '+10 To Energy',
                '-1 To Light Radius'
            ]
        },
        {
            name: 'Stealth',
            level: 17,
            recipe: ['Tal', 'Eth'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                'Magic Damage Reduced By 3',
                '+6 To Dexterity',
                '+15 To Maximum Stamina',
                'Poison Resistance +30%',
                'Regenerate Mana 15%',
                '25% Faster Run Walk',
                '25% Faster Cast Rate',
                '25% Faster Hit Recovery'
            ]
        },
        {
            name: 'Steel',
            level: 13,
            recipe: ['Tir', 'El'],
            allowedItems: [
                'Swords',
                'Axes',
                'Maces'
            ],
            effects: [
                '20% Enhanced Damage',
                '+3 To Minimum Damage',
                '+3 To Maximum Damage',
                '+50 To Attack Rating',
                '50% Chance Of Open Wounds',
                '25% Increased Attack Speed',
                '+2 To Mana After Each Kill',
                '+1 To Light Radius'
            ]
        },
        {
            name: 'Strength',
            level: 25,
            recipe: ['Amn', 'Tir'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                '35% Enhanced Damage',
                '25% Chance Of Crushing Blow',
                '7% Life Stolen Per Hit',
                '+2 To Mana After Each Kill',
                '+20 To Strength',
                '+10 To Vitality'
            ]
        },
        {
            name: 'Venom',
            level: 49,
            recipe: ['Tal', 'Dol', 'Mal'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                'Hit Causes Monster To Flee 25%',
                'Prevent Monster Heal',
                'Ignore Target\'s Defense',
                '7% Mana Stolen Per Hit',
                'Level 15 Poison Explosion (27 Charges)',
                'Level 13 Poison Nova (11 Charges)',
                '+273 Poison Damage Over 6 seconds'
            ]
        },
        {
            name: 'Wealth',
            level: 43,
            recipe: ['Lem', 'Ko', 'Tir'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '300% Extra Gold From Monsters',
                '100% Better Chance Of Getting Magic Items',
                '+2 To Mana After Each Kill',
                '+10 To Dexterity'
            ]
        },
        {
            name: 'White',
            level: 35,
            recipe: ['Dol', 'Io'],
            allowedItems: [
                'Wand'
            ],
            effects: [
                'Hit Causes Monster To Flee 25%',
                '+10 To Vitality',
                '+3 To Poison And Bone Spells (Necromancer Only)',
                '+3 To Bone Armor (Necromancer Only)',
                '+2 To Bone Spear (Necromancer Only)',
                '+4 To Skeleton Mastery (Necromancer Only)',
                'Magic Damage Reduced By 4',
                '20% Faster Cast Rate',
                '+13 To Mana'
            ]
        },
        {
            name: 'Zephyr',
            level: 21,
            recipe: ['Ort', 'Eth'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                '+33% Enhanced Damage',
                '+66 To Attack Rating',
                'Adds 1-50 Lightning Damage',
                '-25% Target Defense',
                '+25 Defense',
                '25% Faster Run/Walk',
                '25% Increased Attack Speed',
                '7% Chance To Cast Level 1 Twister When Struck'
            ]
        },
        {
            name: 'Beast',
            level: 63,
            recipe: ['Ber', 'Tir', 'Um', 'Mal', 'Lum'],
            allowedItems: [
                'Axes',
                'Scepters',
                'Hammers'
            ],
            effects: [
                'Level 9 Fanaticism Aura When Equipped',
                '+40% Increased Attack Speed',
                '+240-270% Enhanced Damage',
                '20% Chance of Crushing Blow',
                '25% Chance of Open Wounds',
                '+3 To Werebear',
                '+3 To Lycanthropy',
                'Prevent Monster Heal',
                '+25-40 To Strength',
                '+10 To Energy',
                '+2 To Mana After Each Kill',
                'Level 13 Summon Grizzly (5 Charges)'
            ]
        },
        {
            name: 'Bramble',
            level: 61,
            recipe: ['Ral', 'Ohm', 'Sur', 'Eth'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                'Level 15-21 Thorns Aura When Equipped',
                '+50% Faster Hit Recovery',
                '+25-50% To Poison Skill Damage',
                '+300 Defense',
                'Increase Maximum Mana 5%',
                'Regenerate Mana 15%',
                '+5% To Maximum Cold Resistance',
                'Fire Resistance +30%',
                'Poison Resistance +100%',
                '+13 Life After Each Kill',
                'Level 13 Spirit of Barbs (33 Charges)'
            ]
        },
        {
            name: 'Breath of the Dying',
            level: 69,
            recipe: ['Vex', 'Hel', 'El', 'Eld', 'Zod', 'Eth'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                '50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy',
                'Indestructible',
                '+60% Increased Attack Speed',
                '+350-400% Enhanced Damage',
                '+200% Damage To Undead',
                '-25% Target Defense',
                '+50 To Attack Rating',
                '+50 To Attack Rating Against Undead',
                '7% Mana Stolen Per Hit',
                '12-15% Life Stolen Per Hit',
                'Prevent Monster Heal',
                '+30 To All Attributes',
                '+1 To Light Radius',
                'Requirements -20%'
            ]
        },
        {
            name: 'Call to Arms',
            level: 57,
            recipe: ['Amn', 'Ral', 'Mal', 'Ist', 'Ohm'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                '+1 To All Skills',
                '+40% Increased Attack Speed',
                '+250-290% Enhanced Damage',
                'Adds 5-30 Fire Damage',
                '7% Life Stolen Per Hit',
                '+2-6 To Battle Command',
                '+1-6 To Battle Orders',
                '+1-4 To Battle Cry',
                'Prevent Monster Heal',
                'Replenish Life +12',
                '30% Better Chance of Getting Magic Items'
            ]
        },
        {
            name: 'Chains of Honor',
            level: 63,
            recipe: ['Dol', 'Um', 'Ber', 'Ist'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+2 To All Skills',
                '+200% Damage To Demons',
                '+100% Damage To Undead',
                '8% Life Stolen Per Hit',
                '+70% Enhanced Defense',
                '+20 To Strength',
                'Replenish Life +7',
                'All Resistances +65',
                'Damage Reduced By 8%',
                '25% Better Chance of Getting Magic Items'
            ]
        },
        {
            name: 'Chaos',
            level: 57,
            recipe: ['Fal', 'Ohm', 'Um'],
            allowedItems: [
                'Claws'
            ],
            effects: [
                '9% Chance To Cast Level 11 Frozen Orb On Striking',
                '11% Chance To Cast Level 9 Charged Bolt On Striking',
                '+35% Increased Attack Speed',
                '+290-340% Enhanced Damage',
                'Adds 216-471 Magic Damage',
                '25% Chance of Open Wounds',
                '+1 To Whirlwind',
                '+10 To Strength',
                '+15 Life After Each Demon Kill'
            ]
        },
        {
            name: 'Crescent Moon',
            level: 47,
            recipe: ['Shael', 'Um', 'Tir'],
            allowedItems: [
                'Axes',
                'Swords',
                'Polearms'
            ],
            effects: [
                '10% Chance To Cast Level 17 Chain Lightning On Striking',
                '7% Chance To Cast Level 13 Static Field On Striking',
                '+20% Increased Attack Speed',
                '+180-220% Enhanced Damage',
                'Ignore Target\'s Defense',
                '-35% To Enemy Lightning Resistance',
                '25% Chance of Open Wounds',
                '+9-11 Magic Absorb',
                '+2 To Mana After Each Kill',
                'Level 18 Summon Spirit Wolf (30 Charges)'
            ]
        },
        {
            name: 'Delirium',
            level: 51,
            recipe: ['Lem', 'Ist', 'Io'],
            allowedItems: [
                'Helm'
            ],
            effects: [
                '1% Chance To Cast Level 50 Delirium (morph) When Struck',
                '6% Chance To Cast Level 14 Mind Blast When Struck',
                '14% Chance To Cast Level 13 Terror When Struck',
                '11% Chance To Cast Level 18 Confuse On Striking',
                '+2 To All Skills',
                '+261 Defense',
                '+10 To Vitality',
                '50% Extra Gold From Monsters',
                '25% Better Chance of Getting Magic Items',
                'Level 17 Attract (60 Charges)'
            ]
        },
        {
            name: 'Doom',
            level: 67,
            recipe: ['Hel', 'Ohm', 'Um', 'Lo', 'Cham'],
            allowedItems: [
                'Axes',
                'Polearms',
                'Hammers'
            ],
            effects: [
                '5% Chance To Cast Level 18 Volcano On Striking',
                'Level 12 Holy Freeze Aura When Equipped',
                '+2 To All Skills',
                '+45% Increased Attack Speed',
                '+330-370% Enhanced Damage',
                '-(40-60)% To Enemy Cold Resistance',
                '20% Deadly Strike',
                '25% Chance of Open Wounds',
                'Prevent Monster Heal',
                'Freezes Target +3',
                'Requirements -20%'
            ]
        },
        {
            name: 'Duress',
            level: 47,
            recipe: ['Shael', 'Um', 'Thul'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+40% Faster Hit Recovery',
                '+10-20% Enhanced Damage',
                'Adds 37-133 Cold Damage 2 sec. Duration (Normal)',
                '15% Chance of Crushing Blow',
                '33% Chance of Open Wounds',
                '+150-200% Enhanced Defense',
                '-20% Slower Stamina Drain',
                'Cold Resistance +45%',
                'Lightning Resistance +15%',
                'Fire Resistance +15%',
                'Poison Resistance +15%'
            ]
        },
        {
            name: 'Enigma',
            level: 65,
            recipe: ['Jah', 'Ith', 'Ber'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+2 To All Skills',
                '+45% Faster Run Walk',
                '+1 To Teleport',
                '+750-775 Defense',
                '+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)',
                'Increase Maximum Life 5%',
                'Damage Reduced By 8%',
                '+14 Life After Each Kill',
                '15% Damage Taken Goes To Mana',
                '+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)'
            ]
        },
        {
            name: 'Eternity',
            level: 63,
            recipe: ['Amn', 'Ber', 'Ist', 'Sol', 'Sur'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                'Indestructible',
                '+260-310% Enhanced Damage',
                '+9 To Minimum Damage',
                '7% Life Stolen Per Hit',
                '20% Chance of Crushing Blow',
                'Hit Blinds Target',
                'Slows Target By 33%',
                'Regenerate Mana 16%',
                'Replenish Life +16',
                'Cannot Be Frozen',
                '30% Better Chance Of Getting Magic Items',
                'Level 8 Revive (88 Charges)'
            ]
        },
        {
            name: 'Exile',
            level: 57,
            recipe: ['Vex', 'Ohm', 'Ist', 'Dol'],
            allowedItems: [
                'Paladin Shields'
            ],
            effects: [
                '15% Chance To Cast Level 5 Life Tap On Striking',
                'Level 13-16 Defiance Aura When Equipped',
                '+2 To Offensive Auras (Paladin Only)',
                '+30% Faster Block Rate',
                'Freezes Target',
                '+220-260% Enhanced Defense',
                'Replenish Life +7',
                '+5% To Maximum Cold Resistance',
                '+5% To Maximum Fire Resistance',
                '25% Better Chance Of Getting Magic Items',
                'Repairs 1 Durability in 4 Seconds'
            ]
        },
        {
            name: 'Famine',
            level: 65,
            recipe: ['Fal', 'Ohm', 'Ort', 'Jah'],
            allowedItems: [
                'Axes',
                'Hammers'
            ],
            effects: [
                '+30% Increased Attack Speed',
                '+320-370% Enhanced Damage',
                'Ignore Target\'s Defense',
                'Adds 180-200 Magic Damage',
                'Adds 50-200 Fire Damage',
                'Adds 51-250 Lightning Damage',
                'Adds 50-200 Cold Damage',
                '12% Life Stolen Per Hit',
                'Prevent Monster Heal',
                '+10 To Strength'
            ]
        },
        {
            name: 'Gloom',
            level: 47,
            recipe: ['Fal', 'Um', 'Pul'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '15% Chance To Cast Level 3 Dim Vision When Struck',
                '+10% Faster Hit Recovery',
                '+200-260% Enhanced Defense',
                '+10 To Strength',
                'All Resistances +45',
                'Half Freeze Duration',
                '5% Damage Taken Goes To Mana',
                '-3 To Light Radius'
            ]
        },
        {
            name: 'Hand of Justice',
            level: 67,
            recipe: ['Sur', 'Cham', 'Amn', 'Lo'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                '100% Chance To Cast Level 36 Blaze When You Level-Up',
                '100% Chance To Cast Level 48 Meteor When You Die',
                'Level 16 Holy Fire Aura When Equipped',
                '+33% Increased Attack Speed',
                '+280-330% Enhanced Damage',
                'Ignore Target\'s Defense',
                '7% Life Stolen Per Hit',
                '-20% To Enemy Fire Resistance',
                '20% Deadly Strike',
                'Hit Blinds Target',
                'Freezes Target +3'
            ]
        },
        {
            name: 'Heart of the Oak',
            level: 55,
            recipe: ['Ko', 'Vex', 'Pul', 'Thul'],
            allowedItems: [
                'Staves',
                'Maces'
            ],
            effects: [
                '+3 To All Skills',
                '+40% Faster Cast Rate',
                '+75% Damage To Demons',
                '+100 To Attack Rating Against Demons',
                'Adds 3-14 Cold Damage, 3 sec. Duration',
                '7% Mana Stolen Per Hit',
                '+10 To Dexterity',
                'Replenish Life +20',
                'Increase Maximum Mana 15%',
                'All Resistances +30-40',
                'Level 4 Oak Sage (25 Charges)',
                'Level 14 Raven (60 Charges)'
            ]
        },
        {
            name: 'Kingslayer',
            level: 53,
            recipe: ['Mal', 'Um', 'Gul', 'Fal'],
            allowedItems: [
                'Swords',
                'Axes'
            ],
            effects: [
                '+30% Increased Attack Speed',
                '+230-270% Enhanced Damage',
                '-25% Target Defense',
                '20% Bonus To Attack Rating',
                '33% Chance of Crushing Blow',
                '50% Chance of Open Wounds',
                '+1 To Vengeance',
                'Prevent Monster Heal',
                '+10 To Strength',
                '40% Extra Gold From Monsters'
            ]
        },
        {
            name: 'Passion',
            level: 43,
            recipe: ['Dol', 'Ort', 'Eld', 'Lem'],
            allowedItems: [
                'Weapons'
            ],
            effects: [
                '+25% Increased Attack Speed',
                '+160-210% Enhanced Damage',
                '50-80% Bonus To Attack Rating',
                '+75% Damage To Undead',
                '+50 To Attack Rating Against Undead',
                'Adds 1-50 Lightning Damage',
                '+1 To Berserk',
                '+1 To Zeal',
                'Hit Blinds Target +10',
                'Hit Causes Monster To Flee 25%',
                '75% Extra Gold From Monsters',
                'Level 3 Heart of Wolverine (12 Charges)'
            ]
        },
        {
            name: 'Prudence',
            level: 49,
            recipe: ['Mal', 'Tir'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+25% Faster Hit Recovery',
                '+140-170% Enhanced Defense',
                'All Resistances +25-35',
                'Damage Reduced by 3',
                'Magic Damage Reduced by 17',
                '+2 To Mana After Each Kill',
                '+1 To Light Radius',
                'Repairs Durability 1 In 4 Seconds'
            ]
        },
        {
            name: 'Sanctuary',
            level: 49,
            recipe: ['Ko', 'Ko', 'Mal'],
            allowedItems: [
                'Shields'
            ],
            effects: [
                '+20% Faster Hit Recovery',
                '+20% Faster Block Rate',
                '20% Increased Chance of Blocking',
                '+130-160% Enhanced Defense',
                '+250 Defense vs. Missile',
                '+20 To Dexterity',
                'All Resistances +50-70',
                'Magic Damage Reduced By 7',
                'Level 12 Slow Missiles (60 Charges)'
            ]
        },
        {
            name: 'Splendor',
            level: 37,
            recipe: ['Eth', 'Lum'],
            allowedItems: [
                'Shields'
            ],
            effects: [
                '+1 To All Skills',
                '+10% Faster Cast Rate',
                '+20% Faster Block Rate',
                '+60-100% Enhanced Defense',
                '+10 To Energy',
                'Regenerate Mana 15%',
                '50% Extra Gold From Monsters',
                '20% Better Chance of Getting Magic Items',
                '+3 To Light Radius'
            ]
        },
        {
            name: 'Stone',
            level: 47,
            recipe: ['Shael', 'Um', 'Pul', 'Lum'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '+60% Faster Hit Recovery',
                '+250-290% Enhanced Defense',
                '+300 Defense Vs. Missile',
                '+16 To Strength',
                '+16 To Vitality',
                '+10 To Energy',
                'All Resistances +15',
                'Level 16 Molten Boulder (80 Charges)',
                'Level 16 Clay Golem (16 Charges)'
            ]
        },
        {
            name: 'Wind',
            level: 61,
            recipe: ['Sur', 'El'],
            allowedItems: [
                'Melee Weapons'
            ],
            effects: [
                '10% Chance To Cast Level 9 Tornado On Striking',
                '+20% Faster Run Walk',
                '+40% Increased Attack Speed',
                '+15% Faster Hit Recovery',
                '+120-160% Enhanced Damage',
                '-50% Target Defense',
                '+50 To Attack Rating',
                'Hit Blinds Target',
                '+1 To Light Radius',
                'Level 13 Twister (127 Charges)'
            ]
        },
        {
            name: 'Brand',
            level: 65,
            recipe: ['Jah', 'Lo', 'Mal', 'Gul'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                '35% Chance To Cast Level 14 Amplify Damage When Struck',
                '100% Chance To Cast Level 18 Bone Spear On Striking',
                '+260-340% Enhanced Damage',
                'Ignore Target\'s Defense',
                '20% Bonus to Attack Rating',
                '+280-330% Damage To Demons',
                '20% Deadly Strike',
                'Prevent Monster Heal',
                'Knockback',
                'Fires Explosive Arrows or Bolts (15)'
            ]
        },
        {
            name: 'Death',
            level: 55,
            recipe: ['Hel', 'El', 'Vex', 'Ort', 'Gul'],
            allowedItems: [
                'Swords',
                'Axes'
            ],
            effects: [
                '100% Chance To Cast Level 44 Chain Lightning When You Die',
                '25% Chance To Cast Level 18 Glacial Spike On Attack',
                'Indestructible',
                '+300-385% Enhanced Damage',
                '20% Bonus To Attack Rating',
                '+50 To Attack Rating',
                'Adds 1-50 Lightning Damage',
                '7% Mana Stolen Per Hit',
                '50% Chance of Crushing Blow',
                '+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)',
                '+1 To Light Radius',
                'Level 22 Blood Golem (15 Charges)',
                'Requirements -20%'
            ]
        },
        {
            name: 'Destruction',
            level: 65,
            recipe: ['Vex', 'Lo', 'Ber', 'Jah', 'Ko'],
            allowedItems: [
                'Polearms',
                'Swords'
            ],
            effects: [
                '23% Chance To Cast Level 12 Volcano On Striking',
                '5% Chance To Cast Level 23 Molten Boulder On Striking',
                '100% Chance To Cast level 45 Meteor When You Die',
                '15% Chance To Cast Level 22 Nova On Attack',
                '+350% Enhanced Damage',
                'Ignore Target\'s Defense',
                'Adds 100-180 Magic Damage',
                '7% Mana Stolen Per Hit',
                '20% Chance Of Crushing Blow',
                '20% Deadly Strike',
                'Prevent Monster Heal',
                '+10 To Dexterity'
            ]
        },
        {
            name: 'Dragon',
            level: 61,
            recipe: ['Sur', 'Lo', 'Sol'],
            allowedItems: [
                'Chest Armor',
                'Shields'
            ],
            effects: [
                '20% Chance to Cast Level 18 Venom When Struck',
                '12% Chance To Cast Level 15 Hydra On Striking',
                'Level 14 Holy Fire Aura When Equipped',
                '+360 Defense',
                '+230 Defense Vs. Missile',
                '+3-5 To All Attributes',
                '+0.375-37.125 To Strength (Based on Character Level)',
                'Increase Maximum Mana 5% (Armor Only)',
                '+50 To Mana (Shields Only)',
                '+5% To Maximum Lightning Resistance',
                'Damage Reduced by 7'
            ]
        },
        {
            name: 'Dream',
            level: 65,
            recipe: ['Io', 'Jah', 'Pul'],
            allowedItems: [
                'Helms',
                'Shields'
            ],
            effects: [
                '10% Chance To Cast Level 15 Confuse When Struck',
                'Level 15 Holy Shock Aura When Equipped',
                '+20-30% Faster Hit Recovery',
                '+30% Enhanced Defense',
                '+150-220 Defense',
                '+10 To Vitality',
                'Increase Maximum Life 5% (Helms Only)',
                '+50 To Life (Shields Only)',
                '+0.625-61.875 To Mana (Based On Character Level)',
                'All Resistances +5-20',
                '12-25% Better Chance of Getting Magic Items'
            ]
        },
        {
            name: 'Edge',
            level: 25,
            recipe: ['Tir', 'Tal', 'Amn'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                'Level 15 Thorns Aura When Equipped',
                '+35% Increased Attack Speed',
                '+320-380% Damage To Demons',
                '+280% Damage To Undead',
                '+75 Poison Damage Over 5 Seconds',
                '7% Life Stolen Per Hit',
                'Prevent Monster Heal',
                '+5-10 To All Attributes',
                '+2 To Mana After Each Kill',
                'Reduces All Vendor Prices 15%!!!'
            ]
        },
        {
            name: 'Faith',
            level: 65,
            recipe: ['Ohm', 'Jah', 'Lem', 'Eld'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                'Level 12-15 Fanaticism Aura When Equipped',
                '+1-2 To All Skills',
                '+330% Enhanced Damage',
                'Ignore Target\'s Defense',
                '300% Bonus To Attack Rating',
                '+75% Damage To Undead',
                '+50 To Attack Rating Against Undead',
                '+120 Fire Damage',
                'All Resistances +15',
                '10% Reanimate As: Returned',
                '75% Extra Gold From Monsters'
            ]
        },
        {
            name: 'Fortitude',
            level: 59,
            recipe: ['El', 'Sol', 'Dol', 'Lo'],
            allowedItems: [
                'Weapons',
                'Chest Armor'
            ],
            effects: {
                weapons: [
                    '20% Chance To Cast Level 15 Chilling Armor when Struck',
                    '+25% Faster Cast Rate',
                    '+300% Enhanced Damage',
                    '+9 To Minimum Damage',
                    '+50 To Attack Rating',
                    '20% Deadly Strike',
                    'Hit Causes Monster To Flee 25%',
                    '+200% Enhanced Defense',
                    '+X To Life (Based on Character Level)',
                    'All Resistances +25-30',
                    '12% Damage Taken Goes To Mana',
                    '+1 To Light Radius'
                ],
                armor: [
                    '20% Chance To Cast Level 15 Chilling Armor when Struck',
                    '+25% Faster Cast Rate',
                    '+300% Enhanced Damage',
                    '+200% Enhanced Defense',
                    '+15 Defense',
                    '+X To Life (Based on Character Level)',
                    'Replenish Life +7',
                    '+5% To Maximum Lightning Resistance',
                    'All Resistances +25-30',
                    'Damage Reduced By 7',
                    '12% Damage Taken Goes To Mana',
                    '+1 To Light Radius'
                ]
            }
        },
        {
            name: 'Grief',
            level: 59,
            recipe: ['Eth', 'Tir', 'Lo', 'Mal', 'Ral'],
            allowedItems: [
                'Swords',
                'Axes'
            ],
            effects: [
                '35% Chance To Cast Level 15 Venom On Striking',
                '+30-40% Increased Attack Speed',
                'Damage +340-400',
                'Ignore Target\'s Defense',
                '-25% Target Defense',
                '+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)',
                'Adds 5-30 Fire Damage',
                '-20-25% To Enemy Poison Resistance',
                '20% Deadly Strike',
                'Prevent Monster Heal',
                '+2 To Mana After Each Kill',
                '+10-15 Life After Each Kill'
            ]
        },
        {
            name: 'Harmony',
            level: 39,
            recipe: ['Tir', 'Ith', 'Sol', 'Ko'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                'Level 10 Vigor Aura When Equipped',
                '+200-275% Enhanced Damage',
                '+9 To Minimum Damage',
                '+9 To Maximum Damage',
                'Adds 55-160 Lightning Damage',
                'Adds 55-160 Fire Damage',
                'Adds 55-160 Cold Damage',
                '+2-6 To Valkyrie',
                '+10 To Dexterity',
                'Regenerate Mana 20%',
                '+2 To Mana After Each Kill',
                '+2 To Light Radius',
                'Level 20 Revive (25 Charges)'
            ]
        },
        {
            name: 'Ice',
            level: 65,
            recipe: ['Amn', 'Shael', 'Jah', 'Lo'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                '100% Chance To Cast Level 40 Blizzard When You Level-up',
                '25% Chance To Cast Level 22 Frost Nova On Striking',
                'Level 18 Holy Freeze Aura When Equipped',
                '+20% Increased Attack Speed',
                '+140-210% Enhanced Damage',
                'Ignore Target\'s Defense',
                '+25-30% To Cold Skill Damage',
                '-20% To Enemy Cold Resistance',
                '7% Life Stolen Per Hit',
                '20% Deadly Strike',
                '3.125-309.375 Extra Gold From Monsters (Based on Character Level)'
            ]
        },
        {
            name: 'Infinity',
            level: 63,
            recipe: ['Ber', 'Mal', 'Ber', 'Ist'],
            allowedItems: [
                'Polearms'
            ],
            effects: [
                '50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy',
                'Level 12 Conviction Aura When Equipped',
                '+35% Faster Run Walk',
                '+255-325% Enhanced Damage',
                '-(45-55)% To Enemy Lightning Resistance',
                '40% Chance of Crushing Blow',
                'Prevent Monster Heal',
                '0.5-49.5 To Vitality (Based on Character Level)',
                '30% Better Chance of Getting Magic Items',
                'Level 21 Cyclone Armor (30 Charges)'
            ]
        },
        {
            name: 'Insight',
            level: 27,
            recipe: ['Ral', 'Tir', 'Tal', 'Sol'],
            allowedItems: [
                'Polearms',
                'Staves'
            ],
            effects: [
                'Level 12-17 Meditation Aura When Equipped',
                '+35% Faster Cast Rate',
                '+200-260% Enhanced Damage',
                '+9 To Minimum Damage',
                '180-250% Bonus to Attack Rating',
                'Adds 5-30 Fire Damage',
                '+75 Poison Damage Over 5 Seconds',
                '+1-6 To Critical Strike',
                '+5 To All Attributes',
                '+2 To Mana After Each Kill',
                '23% Better Chance of Getting Magic Items'
            ]
        },
        {
            name: 'Last Wish',
            level: 65,
            recipe: ['Jah', 'Mal', 'Jah', 'Sur', 'Jah', 'Ber'],
            allowedItems: [
                'Swords',
                'Hammers',
                'Axes'
            ],
            effects: [
                '6% Chance To Cast Level 11 Fade When Struck',
                '10% Chance To Cast Level 18 Life Tap On Striking',
                '20% Chance To Cast Level 20 Charged Bolt On Attack',
                'Level 17 Might Aura When Equipped',
                '+330-375% Enhanced Damage',
                'Ignore Target\'s Defense',
                '60-70% Chance of Crushing Blow',
                'Prevent Monster Heal',
                'Hit Blinds Target',
                '+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)'
            ]
        },
        {
            name: 'Lawbringer',
            level: 43,
            recipe: ['Amn', 'Lem', 'Ko'],
            allowedItems: [
                'Swords',
                'Hammers',
                'Scepters'
            ],
            effects: [
                '20% Chance To Cast Level 15 Decrepify On Striking',
                'Level 16-18 Sanctuary Aura When Equipped',
                '-50% Target Defense',
                'Adds 150-210 Fire Damage',
                'Adds 130-180 Cold Damage',
                '7% Life Stolen Per Hit',
                'Slain Monsters Rest In Peace',
                '+200-250 Defense Vs. Missile',
                '+10 To Dexterity',
                '75% Extra Gold From Monsters'
            ]
        },
        {
            name: 'Oath',
            level: 49,
            recipe: ['Shael', 'Pul', 'Mal', 'Lum'],
            allowedItems: [
                'Swords',
                'Axes',
                'Maces'
            ],
            effects: [
                '30% Chance To Cast Level 20 Bone Spirit On Striking',
                'Indestructible',
                '+50% Increased Attack Speed',
                '+210-340% Enhanced Damage',
                '+75% Damage To Demons',
                '+100 To Attack Rating Against Demons',
                'Prevent Monster Heal',
                '+10 To Energy',
                '+10-15 Magic Absorb',
                'Level 16 Heart Of Wolverine (20 Charges)',
                'Level 17 Iron Golem (14 Charges)'
            ]
        },
        {
            name: 'Obedience',
            level: 41,
            recipe: ['Hel', 'Ko', 'Thul', 'Eth', 'Fal'],
            allowedItems: [
                'Polearms'
            ],
            effects: [
                '30% Chance To Cast Level 21 Enchant When You Kill An Enemy',
                '40% Faster Hit Recovery',
                '+370% Enhanced Damage',
                '-25% Target Defense',
                'Adds 3-14 Cold Damage 3 Second Duration (Normal)',
                '-25% To Enemy Fire Resistance',
                '40% Chance of Crushing Blow',
                '+200-300 Defense',
                '+10 To Strength',
                '+10 To Dexterity',
                'All Resistances +20-30',
                'Requirements -20%'
            ]
        },
        {
            name: 'Phoenix',
            level: 65,
            recipe: ['Vex', 'Vex', 'Lo', 'Jah'],
            allowedItems: [
                'Weapons',
                'Shields'
            ],
            effects: {
                weapons: [
                    '100% Chance To Cast level 40 Blaze When You Level-up',
                    '40% Chance To Cast Level 22 Firestorm On Striking',
                    'Level 10-15 Redemption Aura When Equipped',
                    '+350-400% Enhanced Damage',
                    'Ignores Target\'s Defense',
                    '14% Mana Stolen Per Hit',
                    '-28% To Enemy Fire Resistance',
                    '20% Deadly Strike',
                    '+350-400 Defense Vs. Missile',
                    '+15-21 Fire Absorb'
                ],
                shields: [
                    '100% Chance To Cast level 40 Blaze When You Level-up',
                    '40% Chance To Cast Level 22 Firestorm On Striking',
                    'Level 10-15 Redemption Aura When Equipped',
                    '+350-400 Defense Vs. Missile',
                    '+350-400% Enhanced Damage',
                    '-28% To Enemy Fire Resistance',
                    '+50 To Life',
                    '+5% To Maximum Lightning Resistance',
                    '+10% To Maximum Fire Resistance',
                    '+15-21 Fire Absorb'
                ]
            }
        },
        {
            name: 'Pride',
            level: 67,
            recipe: ['Cham', 'Sur', 'Io', 'Lo'],
            allowedItems: [
                'Polearms'
            ],
            effects: [
                '25% Chance To Cast Level 17 Fire Wall When Struck',
                'Level 16-20 Concentration Aura When Equipped',
                '260-300% Bonus To Attack Rating',
                '+1-99% Damage To Demons (Based on Character Level)',
                'Adds 50-280 Lightning Damage',
                '20% Deadly Strike',
                'Hit Blinds Target',
                'Freezes Target +3',
                '+10 To Vitality',
                'Replenish Life +8',
                '1.875-185.625% Extra Gold From Monsters (Based on Character Level)'
            ]
        },
        {
            name: 'Rift',
            level: 53,
            recipe: ['Hel', 'Ko', 'Lem', 'Gul'],
            allowedItems: [
                'Polearms',
                'Scepters'
            ],
            effects: [
                '20% Chance To Cast Level 16 Tornado On Striking',
                '16% Chance To Cast Level 21 Frozen Orb On Attack',
                '20% Bonus To Attack Rating',
                'Adds 160-250 Magic Damage',
                'Adds 60-180 Fire Damage',
                '+5-10 To All Stats',
                '+10 To Dexterity',
                '38% Damage Taken Goes To Mana',
                '75% Extra Gold From Monsters',
                'Level 15 Iron Maiden (40 Charges)',
                'Requirements -20%'
            ]
        },
        {
            name: 'Spirit',
            level: 25,
            recipe: ['Tal', 'Thul', 'Ort', 'Amn'],
            allowedItems: [
                'Swords',
                'Shields'
            ],
            effects: {
                weapons: [
                    '+2 To All Skills',
                    '+25-35% Faster Cast Rate',
                    '+55% Faster Hit Recovery',
                    'Adds 1-50 Lightning Damage',
                    'Adds 3-14 Cold Damage 3 Second Duration ',
                    '+75 Poison Damage Over 5 Seconds',
                    '7% Life Stolen Per Hit',
                    '+250 Defense Vs. Missile',
                    '+22 To Vitality',
                    '+89-112 To Mana',
                    '+3-8 Magic Absorb'
                ],
                shields: [
                    '+2 To All Skills',
                    '+25-35% Faster Cast Rate',
                    '+55% Faster Hit Recovery',
                    '+250 Defense Vs. Missile',
                    '+22 To Vitality',
                    '+89-112 To Mana',
                    'Cold Resistance +35%',
                    'Lightning Resistance +35%',
                    'Poison Resistance +35%',
                    '+3-8 Magic Absorb',
                    'Attacker Takes Damage of 14'
                ]
            }
        },
        {
            name: 'Voice of Reason',
            level: 43,
            recipe: ['Lem', 'Ko', 'El', 'Eld'],
            allowedItems: [
                'Swords',
                'Maces'
            ],
            effects: [
                '15% Chance To Cast Level 13 Frozen Orb On Striking',
                '18% Chance To Cast Level 20 Ice Blast On Striking',
                '+50 To Attack Rating',
                '+220-350% Damage To Demons',
                '+355-375% Damage To Undead',
                '+50 To Attack Rating Against Undead',
                'Adds 100-220 Cold Damage',
                '-24% To Enemy Cold Resistance',
                '+10 To Dexterity',
                'Cannot Be Frozen',
                '75% Extra Gold From Monsters',
                '+1 To Light Radius'
            ]
        },
        {
            name: 'Wrath',
            level: 63,
            recipe: ['Pul', 'Lum', 'Ber', 'Mal'],
            allowedItems: [
                'Missile Weapons'
            ],
            effects: [
                '30% Chance To Cast Level 1 Decrepify On Striking',
                '5% Chance To Cast Level 10 Life Tap On Striking',
                '+375% Damage To Demons',
                '+100 To Attack Rating Against Demons',
                '+250-300% Damage To Undead',
                'Adds 85-120 Magic Damage',
                'Adds 41-240 Lightning Damage',
                '20% Chance of Crushing Blow',
                'Prevent Monster Heal',
                '+10 To Energy',
                'Cannot Be Frozen'
            ]
        },
        {
            name: 'Bone',
            level: 47,
            recipe: ['Sol', 'Um', 'Um'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '15% Chance To Cast level 10 Bone Armor When Struck',
                '15% Chance To Cast level 10 Bone Spear On Striking',
                '+2 To Necromancer Skill Levels',
                '+100-150 To Mana',
                'All Resistances +30',
                'Damage Reduced By 7'
            ]
        },
        {
            name: 'Enlightenment',
            level: 45,
            recipe: ['Pul', 'Ral', 'Sol'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '5% Chance To Cast Level 15 Blaze When Struck',
                '5% Chance To Cast level 15 Fire Ball On Striking',
                '+2 To Sorceress Skill Levels',
                '+1 To Warmth',
                '+30% Enhanced Defense',
                'Fire Resistance +30%',
                'Damage Reduced By 7'
            ]
        },
        {
            name: 'Myth',
            level: 25,
            recipe: ['Hel', 'Amn', 'Nef'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '3% Chance To Cast Level 1 Howl When Struck',
                '10% Chance To Cast Level 1 Taunt On Striking',
                '+2 To Barbarian Skill Levels',
                '+30 Defense Vs. Missile',
                'Replenish Life +10',
                'Attacker Takes Damage of 14',
                'Requirements -15%'
            ]
        },
        {
            name: 'Peace',
            level: 29,
            recipe: ['Shael', 'Thul', 'Amn'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '4% Chance To Cast Level 5 Slow Missiles When Struck',
                '2% Chance To Cast level 15 Valkyrie On Striking',
                '+2 To Amazon Skill Levels',
                '+20% Faster Hit Recovery',
                '+2 To Critical Strike',
                'Cold Resistance +30%',
                'Attacker Takes Damage of 14'
            ]
        },
        {
            name: 'Principle',
            level: 53,
            recipe: ['Ral', 'Gul', 'Eld'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '100% Chance To Cast Level 5 Holy Bolt On Striking',
                '+2 To Paladin Skill Levels',
                '+50% Damage to Undead',
                '+100-150 To Life',
                '15% Slower Stamina Drain',
                '+5% To Maximum Poison Resistance',
                'Fire Resistance +30%'
            ]
        },
        {
            name: 'Rain',
            level: 49,
            recipe: ['Ort', 'Mal', 'Ith'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '5% Chance To Cast Level 15 Cyclone Armor When Struck',
                '5% Chance To Cast Level 15 Twister On Striking',
                '+2 To Druid Skills',
                '+100-150 To Mana',
                'Lightning Resistance +30%',
                'Magic Damage Reduced By 7',
                '15% Damage Taken Goes to Mana'
            ]
        },
        {
            name: 'Treachery',
            level: 43,
            recipe: ['Shael', 'Thul', 'Lem'],
            allowedItems: [
                'Chest Armor'
            ],
            effects: [
                '5% Chance To Cast Level 15 Fade When Struck',
                '25% Chance To Cast level 15 Venom On Striking',
                '+2 To Assassin Skills',
                '+45% Increased Attack Speed',
                '+20% Faster Hit Recovery',
                'Cold Resistance +30%',
                '50% Extra Gold From Monsters'
            ]
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
    getRunewordList(state) {
        // Returns all runewords
        return state.runewords
    },
    getRuneword: (state) => (name) => {
        // Returns Runeword object with the given name
        return state.runewords.find((rune) => rune.name === name)
    },
    getRunewordRecipe: (state) => (name) => {
        // Returns Runeword Recipe with the given name
        return state.runewords.find((rune) => rune.name === name).recipe
    }
}
