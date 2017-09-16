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

const resume = {
    'contact': {
        'name': 'Yong Su',
        'addr': 'Fremont, CA 94539',
        'phone': '(510) 509-8060',
        'email': 'wynnsu@gmail.com',
        'github': 'https://github.com/wynnsu'
    },
    'education': [
        {
            'school': 'Northwestern Polytechnic University',
            'city': 'Fremont',
            'state': 'California',
            'country': 'United States',
            'degree': 'M.S. Computer Science',
            'gpa': '4.0',
            'start': 'May 2015',
            'end': 'April 2017',
            'honors': '2017 Spring Capstone Competition Winner'
        }, {
            'school': 'Beihang University',
            'city': 'Beijing',
            'state': '',
            'country': 'China',
            'degree': 'B.Eng. Aircraft Manufacturing Engineering',
            'gpa': '',
            'start': 'September 2006',
            'end': 'June 2010',
            'honors': 'Outstanding Graduates'
        }
    ],
    'project': [
        {
            'name': 'Rod of wonder',
            'start': 'November 2016',
            'end': '',
            'school': '',
            'content': [
                'Designed and implemented REST services for Pathfinder roleplaying game and proto' +
                        'typed with MySQL, Spring MVC (JAX-RS and Hibernate)',
                'Created frontend client with Express.js',
                'Migrating to GraphQL and React'
            ]
        }, {
            'name': 'Vialo Imaging',
            'start': 'April 2017',
            'end': 'June 2017',
            'school': '',
            'content': [
                'Improved accuracy and efficiency of image classification with ConvNet implementa' +
                        'tion from Microsoft Cognitive Toolkit (CNTK)',
                'Provided functional application for data labeling',
                'Designed fluent interface for accessibility'
            ]
        }, {
            'name': 'NPU Mobile',
            'start': 'January 2017',
            'end': 'April 2017',
            'school': 'Northwestern Polytechnic University, Fremont, California',
            'content': [
                'Proposed project, set up team, attained project scope and schedule with scrum me' +
                        'thodology',
                'Developed Android application from scratch, worked on server, client and UI/UX d' +
                        'esign and development',
                'Maintained code version and work progress online, performed weekly report presen' +
                        'tation',
                'Proceeded project development, delivered project on schedule, and won Capstone C' +
                        'ompetition on my own after team member’s dropout'
            ]
        }
    ],
    'experience': [
        {
            'title': 'Lab Instructor',
            'start': 'January 2016',
            'end': 'April 2016',
            'company': 'Northwestern Polytechnic University, Fremont, California',
            'content': ['Guided students to build their hands-on coding skills', 'Clarified complicated concepts with progressive demonstrations']
        }, {
            'title': 'Software Engineer',
            'start': 'July 2010',
            'end': 'October 2011',
            'company': 'Chinasoft International, Beijing, China',
            'content': ['Improved user interface and localization', 'Collaborated with team, provided feasible solution to client']
        }
    ],
    'skills': [
        {
            'category': 'Programming',
            'content': [
                [
                    'Proficient in JavaScript, Java; skilled in C#, C++, Python, HTML/CSS; Solid fundamental in object-oriented programming, algorithms, data structure and' +
                            ' design patterns'
                ],
                ['Demonstrated experience with software development process'],
                ['Familiar with Windows and UNIX environment']
            ]
        }, {
            'category': 'Technology',
            'content': [
                [
                    'Frontend', 'Node, Bootstrap, Angular, React, styled-component'
                ],
                [
                    'Backend', 'Spring MVC, Hibernate, Express.js, MongoDB, MySQL, GraphQL'
                ],
                [
                    'Utility', 'Git, Illustrator, Experience Design, Visual Studio Code, Visual Studio, Eclipse,' +
                            ' Maven, Gradle'
                ]
            ]
        }, {
            'category': 'Traits',
            'content': [
                ['Passionate about new technologies and user interface design, lifetime learner, g' +
                        'reat presenter']
            ]
        }, {
            'category': 'Language',
            'content': [
                ['Native speaker of Mandarin Chinese']
            ]
        }
    ]
};

export function EffectTableData(props) {
    return tables[props];
}

export function ItemData(props) {
    return items[props];
}

export function ResumeData(props) {
    return resume;
}