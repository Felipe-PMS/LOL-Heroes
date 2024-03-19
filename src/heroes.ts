export interface Hero {
    version: string
    id: string
    key: string
    name: string
    title: string
    blurb: string
    info: {
        attack: number
        defense: number
        magic: number
        difficulty: number
    }
    image: {
        full: string
        sprite: string
        group: string
        x: number
        y: number
        w: number
        h: number
    }
    tags: string[]
    partype: string
    stats: {
        hp: number
        hpperlevel: number
        mp: number
        mpperlevel: number
        movespeed: number
        armor: number
        armorperlevel: number
        spellblock: number
        spellblockperlevel: number
        attackrange: number
        hpregen: number
        hpregenperlevel: number
        mpregen: number
        mpregenperlevel: number
        crit: number
        critperlevel: number
        attackdamage: number
        attackdamageperlevel: number
        attackspeedperlevel: number
        attackspeed: number
    }
}

export const heroes = [
    {
        version: "14.5.1",
        id: "Zyra",
        key: "143",
        name: "Zyra",
        title: "Rise of the Thorns",
        blurb:
            "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks...",
        info: {
            attack: 4,
            defense: 3,
            magic: 8,
            difficulty: 7,
        },
        image: {
            full: "Zyra.png",
            sprite: "champion5.png",
            group: "champion",
            x: 288,
            y: 48,
            w: 48,
            h: 48,
        },
        tags: ["Mage", "Support"],
        partype: "Mana",
        stats: {
            hp: 574,
            hpperlevel: 93,
            mp: 418,
            mpperlevel: 25,
            movespeed: 340,
            armor: 29,
            armorperlevel: 4.2,
            spellblock: 30,
            spellblockperlevel: 1.3,
            attackrange: 575,
            hpregen: 5.5,
            hpregenperlevel: 0.5,
            mpregen: 7,
            mpregenperlevel: 0.8,
            crit: 0,
            critperlevel: 0,
            attackdamage: 53,
            attackdamageperlevel: 3.2,
            attackspeedperlevel: 2.11,
            attackspeed: 0.681,
        },
    },

    {
        version: "14.5.1",
        id: "Ahri",
        key: "103",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        blurb:
            "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...",
        info: {
            attack: 3,
            defense: 4,
            magic: 8,
            difficulty: 5,
        },
        image: {
            full: "Ahri.png",
            sprite: "champion0.png",
            group: "champion",
            x: 48,
            y: 0,
            w: 48,
            h: 48,
        },
        tags: ["Mage", "Assassin"],
        partype: "Mana",
        stats: {
            hp: 590,
            hpperlevel: 104,
            mp: 418,
            mpperlevel: 25,
            movespeed: 330,
            armor: 21,
            armorperlevel: 4.7,
            spellblock: 30,
            spellblockperlevel: 1.3,
            attackrange: 550,
            hpregen: 2.5,
            hpregenperlevel: 0.6,
            mpregen: 8,
            mpregenperlevel: 0.8,
            crit: 0,
            critperlevel: 0,
            attackdamage: 53,
            attackdamageperlevel: 3,
            attackspeedperlevel: 2.2,
            attackspeed: 0.668,
        },
    },

    {
        version: "14.5.1",
        id: "Aatrox",
        key: "266",
        name: "Aatrox",
        title: "the Darkin Blade",
        blurb: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
        info: {
            "attack": 8,
            "defense": 4,
            "magic": 3,
            "difficulty": 4
        },
        image: {
            "full": "Aatrox.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
        },
        tags: [
            "Fighter",
            "Tank"
        ],
        partype: "Blood Well",
        stats: {
            "hp": 650,
            "hpperlevel": 114,
            "mp": 0,
            "mpperlevel": 0,
            "movespeed": 345,
            "armor": 38,
            "armorperlevel": 4.45,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 3,
            "hpregenperlevel": 1,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 60,
            "attackdamageperlevel": 5,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.651
        } 
    },
]