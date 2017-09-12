const tables = {
    'rod-of-wonder': [
        [
            "d%", "Wondrous Effect"
        ],
        [
            "01—05", "Target affected by slow for 10 rounds (Will DC 15 negates)."
        ],
        [
            "06—10", "Faerie fire surrounds the target."
        ],
        [
            "11—15", "Deludes the wielder for 1 round into believing the rod functions as indicated by" +
                    " a second die roll (no save)."
        ],
        [
            "16—20", "Gust of wind, but at windstorm force (Fortitude DC 14 negates)."
        ],
        [
            "21—25", "Wielder learns the target’s surface thoughts (as with detect thoughts) for 1d4 r" +
                    "ounds (no save)."
        ],
        [
            "26—30", "Stinking cloud appears at 30-foot range (Fortitude DC 15 negates)."
        ],
        [
            "31—33", "Heavy rain falls for 1 round in 60-foot radius centered on the rod wielder."
        ],
        [
            "34—36", "Summons an animal—a rhino (01—25 on d%), elephant (26—50), or mouse (51—100)."
        ],
        [
            "37—46", "Lightning bolt (70 foot long, 5 foot wide), 6d6 points of damage (Reflex DC 15 h" +
                    "alf)."
        ],
        [
            "47—49", "A stream of 600 large butterflies pours forth and flutters around for 2 rounds, " +
                    "blinding everyone within 25 foot (Reflex DC 14 negates)."
        ],
        [
            "50—53", "Target is affected by enlarge person if within 60 feet of rod (Fortitude DC 13 n" +
                    "egates)."
        ],
        [
            "54—58", "Darkness, 30-foot-diameter hemisphere, centered 30 feet away from rod."
        ],
        [
            "59—62", "Grass grows in 160-square-foot area before the rod, or grass existing there grow" +
                    "s to 10 times its normal size."
        ],
        [
            "63—65", "Any nonliving object of up to 1,000 pounds of mass and up to 30 cubic feet in si" +
                    "ze turns ethereal."
        ],
        [
            "66—69", "Reduce wielder two size categories (no save) for 1 day."
        ],
        [
            "70—79", "Fireball at target or 100 feet straight ahead, 6d6 points of damage (Reflex DC 1" +
                    "5 half)."
        ],
        [
            "80—84", "Invisibility covers the rod’s wielder."
        ],
        [
            "85—87", "Leaves grow from the target if within 60 feet of the rod. These last 24 hours."
        ],
        [
            "88—90", "10—40 gems, value 1 gp each, shoot forth in a 30-foot-long stream. Each gem deal" +
                    "s 1 point of damage to any creature in its path: roll 5d4 for the number of hits" +
                    " and divide them among the available targets."
        ],
        [
            "91—95", "Shimmering colors dance and play over a 40-foot-by-30-foot area in front of rod." +
                    " Creatures therein are blinded for 1d6 rounds (Fortitude DC 15 negates)."
        ],
        [
            "96—97", "Wielder (50% chance) or the target (50% chance) turns permanently blue, green, o" +
                    "r purple (no save)."
        ],
        [
            "98—100", "Flesh to stone (or stone to flesh if the target is stone already) if the target " +
                    "is within 60 feet (Fortitude DC 18 negates)."
        ]
    ]
};

const items = {
    'rod-of-wonder': {
        'title': 'Rod of wonder',
        'price': 12000,
        'aura': 'moderate enchantment',
        'cl': 10,
        'weight': 5,
        'description': `A rod of wonder is a strange and unpredictable device that randomly generates
        any number of weird effects each time it is used.Activating the rod is a
        standard action.Typical powers of the rod include the following.`
    }
};


export function EffectTableData(props) {
    return tables[props];
}

export function ItemData(props){
    return items[props];
}