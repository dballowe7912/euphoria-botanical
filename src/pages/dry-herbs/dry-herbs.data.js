const dryHerbs = [
    {
        id: 1,
        commonName: "Akuamma",
        scientificName: "Picralima Nitida",
        imgSrc: './assets/dry-herb-photos/akuamma.jpg',
        pricing: [
            {
                id: 1,
                name: 'Akuamma',
                type: "seed",
                size: "1 oz",
                price: 7.35
            },
            {
                id: 2,
                name: 'Akuamma',
                type: "powder",
                size: "1 oz",
                price: 8.35
            },
            {
                id: 3,
                name: 'Akuamma',
                type: "capsule",
                size: "1 ea",
                price: .25
            }
        ],
        details: "A part of the plant with the highest concentration of alkaloids. It gives a sense of well-being in combination with mild sedation. Effects typically last between 3 and 4 hours."
    },
    {
        id: 2,
        commonName: "Blue Lotus",
        scientificName: "Nymphaea Caerulea",
        imgSrc: '../assets/dry-herb-photos/blue-lotus.jpg',
        pricing: [
            {
                id: 4,
                name: "Blue Lotus",
                type: "Dried Flower",
                size: "1 oz",
                price: 10.40
            },
            {
                id: 5,
                name: "Blue Lotus",
                type: "",
                size: "1 g",
                price: .50
            },
        ],
        details: "Blue Lotus is well respected as a holistic substance for centuries, with its ability to enhance mediation and promote relaxation. It also has been found to have pain relieving properties that moderate pain and muscle stress in the body."
    },
    {
        id: 3,
        commonName: "Cats Claw",
        scientificName: "Uncaria tomentosa",
        imgSrc: '../assets/dry-herb-photos/cats-claw.jpeg',
        pricing: [
            {
                id: 6,
                name: "Cats Claw",
                type: "Powder",
                size: "1 oz",
                price: 2.25
            },
        ],
        details: "Cats Claw is derived from a tropical vine. Cats Claw helps support your immune system, possible helping fight infections more effectively."
    },
    {
        id: 4,
        commonName: "Damiana",
        scientificName: "Turnera Diffusa",
        imgSrc: '../assets/dry-herb-photos/damiana.jpeg',
        pricing: [
            {
                id: 7,
                name: "Damiana",
                type: "Shredded Leaf",
                size: "1 oz",
                price: 3.00
            },
        ],
        details: "Damiana is used to treat headaches, bedwetting, depression, nervous stomach, and constipation; for prevention and treatment of sexual problems; boosting and maintaining mental and physical stamina; and as an aphrodisiac."
    },
    {
        id: 5,
        commonName: "Horney Goat Weed",
        scientificName: "Epimedium Grandiflorum",
        imgSrc: '../assets/dry-herb-photos/horney-goat-weed.jpeg',
        pricing: [
            {
                id: 8,
                name: "Horney Goat Weed",
                type: "Powder",
                size: "1 oz",
                price: 3.35
            },
            {
                id: 9,
                name: "Horney Goat Weed",
                type: "Crushed Leaf",
                size: "1 oz",
                price: 2.35
            },
            {
                id: 10,
                name: "Horney Goat Weed",
                type: "4:1 Extract Powder",
                size: "1 oz",
                price: 6.85
            },
        ],
        details: "Horney goat weed is a herb. The leaves are used to make medicine. Horney Goat Weed is commonly used by mouth for sexual performance problems, such as erectile dysfunction (ED) and low sexual desire. It is also for back and knees, joint pain, arthritis, mental and physical fatigue, and memory loss along with many other conditions."
    },
    {
        id: 6,
        commonName: "Kanna Shred",
        scientificName: "Sceletium tortusom",
        imgSrc: '../assets/dry-herb-photos/kanna.jpeg',
        pricing: [
            {
                id: 11,
                name: "Kanna Shred",
                type: "Shredded Leaf",
                size: "1 oz",
                price: 14.58
            }
        ],
        details: "Kanna elevates mood and decreases anxiety, stress and tension, and it has been used as an appetite suppressant. If you want to turn a bad day around, this beneficial tea is as reassuring to your state of mind as it is tasty."
    },
    {
        id: 7,
        commonName: "Kava Extract",
        scientificName: "Piper methysticum",
        imgSrc: '../assets/dry-herb-photos/kava.jpeg',
        pricing: [
            {
                id: 12,
                name: "Kava Extract",
                type: "Powder",
                size: "1 oz",
                price: 21.99
            }
        ],
        details: "Kava contains substances called kavapyrones. They act much like alcohol on your brain, making you feel calm, relaxed, and happy. The plant is also thought to relieve pain, seizures, and relax muscles. You can buy it as an herbal supplement online and in health food stores."
    },
    {
        id: 8,
        commonName: "Wild Dagga Leaf (lions tail)",
        scientificName: "Leonotis Leonurus",
        imgSrc: '../assets/dry-herb-photos/wild-dagga.jpeg',
        pricing: [
            {
                id: 13,
                name: "Wild Dagga Leaf (lions tail)",
                type: "Dried Flower",
                size: "1 oz",
                price: 5.00
            }
        ],
        details: "Wild Dagga mixtures are also consumed to help high blood pressure, jaundice, hemorrhoids, dysentery, fever, headaches, influenza, asthma, and coughs. Wild Dagga is commonly referred to as wild cannabis."
    },
    {
        id: 9,
        commonName: "Wormwood",
        scientificName: "Artemisia",
        imgSrc: '../assets/dry-herb-photos/wormwood.jpeg',
        pricing: [
            {
                id: 14,
                name: "Wormwood",
                type: "Shredded Leaf",
                size: "1 oz",
                price: 2.25
            }
        ],
        details: "Wormwood is an herb that is native to Europe and North America. It is traditionaly used as a bitter tonic, carminative to support healthy appetite levels, and a healthy flora in the digestive tract. Wormwood is also used to treat fever, liver disease, depression, muscle pain, memory loss and worm infections."
    },
    {
        id: 10,
        commonName: "Palo Azule - Detox Cleanse",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/palo.jpeg',
        pricing: [
            {
                id: 15,
                name: "Palo Azule - Detox Cleanse",
                type: "Wood Chips",
                size: "1 oz",
                price: 2.50,
            }
        ],
        details: "The bark of this plant has been used to create a potent cleansing tea for thousands of years. This detox clears toxins in the bladder, kidneys, and even removes traces of drug metabolites from urine, helping you pass a urinalysis."
    },
    {
        id: 11,
        commonName: "White Willow Bark Powder",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/white-willow.jpeg',
        pricing: [
            {
                id: 16,
                name: "White Willow Bark Powder",
                type: "Powder",
                size: "1 oz",
                price: 2.75,
            }
        ],
        details: "The bark of white willow contains salicin, which is a chemical similar to aspirin. In combination with the herb's powerful anti-inflammatory plant compounds, salicin is thought to be responsible for the pain-relieving and anti-inflammatory effects of the herb."
    },
    {
        id: 12,
        commonName: "Marshmallow Root Powder",
        scientificName: "Althaea Officinalis",
        imgSrc: '../assets/dry-herb-photos/marshmallow.jpeg',
        pricing: [
            {
                id: 17,
                name: "Marshmallow Root Powder",
                type: "Powder",
                size: "1 oz",
                price: 3.75,
            }
        ],
        details: "An herbal remedy used for multiple ailments; marshmallow root is the base of the marshmallow plant. Medically, the root may be used for anything from chapped skin to a common cold. Marshmallow root may also be used as a cosmetic ingredient. It can be used to treat bruises, to sooth a stomache ache, to treat gastritis, indigestion, as well as some coughs. The remedy has been used to treat Crohn's disease, asthma, diarrhea, and gastroesophageal reflux disease. This should be taken with at least 8oz of liquid. Consuming this product can expose you to lead, which is known in the state of California to cause birth defects of other reproductive harm."
    },
    {
        id: 13,
        commonName: "Calea Zacatachichi Dream Herb",
        scientificName: "Calea Ternifolia",
        imgSrc: '',
        pricing: [
            {
                id: 18,
                name: "Calea Zacatachichi",
                type: "Crushed Leaf",
                size: "1 oz",
                price: 15.00,
            }
        ],
        details: "Medium sized shrub that is known to be a hallucinogen and to increase dreams. Because of this, it is often referred to as the 'dream herb'. It is also called 'bitter grass' because the plant material of calea zactachichi has an intense bitter taste. Calea zactachichi has been used in folk remedies for thousands of years as an appetite stimulant, cleansing agent, calming agent, laxative, and for the treatment of diarrhea, dysentery, fever, skin rashes, swollen scalps, and headaches. Some people use this herb to induce psychic dreams, help remember dreams, and to increase dreaming. This herb has also been studied for mental enchancement and sleep."
    },
    {
        id: 14,
        commonName: "Ilex Guayusa",
        scientificName: "../assets/dry-herb-photos/ilex.jpeg",
        imgSrc: '',
        pricing: [
            {
                id: 19,
                name: "Ilex Guayusa",
                type: "Powder",
                size: "1 oz",
                price: 3.75,
            }
        ],
        details: "Ilex Guayusa is a species of tree of the holly genus, native to the Amazon Rainforest. One of three known caffeinated holly trees, the leaves of the guayusa tree are dried and brewed like a tea for their stimulative effects. Guayusa leaves contain various beneficial compounds linked to potential health benefits. This Amazonian plant is fich in antioxidants and caffeine that may promote weight loss, blood sugar regulation, and improved mood and alertness. Its tea is safe to drink and serves as an excellent alternative to coffee and energy drinks by providing a healthier energy lift."
    },
    {
        id: 15,
        commonName: "Lavender Petals",
        scientificName: "Lamiaceae Lavendula",
        imgSrc: '../assets/dry-herb-photos/lavender.jpeg',
        pricing: [
            {
                id: 20,
                name: "Lavender Petals",
                type: "Petals",
                size: "1 oz",
                price: 3.00,
            }
        ],
        details: "Lavender oil is believed to have anticeptic and anti-inflammatory properties, which can help to heal minor burns and bug bites. In addition to helping digestive problems, lavender is used to help relieve pain from headaches, sprains, toothaches, and sores. It can also be used to prevent hair loss."
    },
    {
        id: 16,
        commonName: "Maitake Mushroom",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/maitake.jpeg',
        pricing: [
            {
                id: 21,
                name: "Maitake Mushroom",
                type: "Powder",
                size: "1 oz",
                price: 4.90,
            }
        ],
        details: "Maitake Mushroom is used to treat cancer and also to relieve some of the side effects of chemical treatment (chemotherapy) for cancer. It is also used for HIV/AIDS, chronic fatigue syndrome (CFS), hepatitis, hay fever, diabetes, high blood pressure, high cholesterol, weight loss, and infertility due to a condition known as polycystic ovary syndrome."
    },
    {
        id: 17,
        commonName: "Matcha Green Tea",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/matcha.jpeg',
        pricing: [
            {
                id: 22,
                name: "Matcha Green Tea",
                type: "",
                size: "1 oz",
                price: 4.00,
            }
        ],
        details: "Matcha is a type of green tea by taking young tea leaves and grinding them into a bright green powder. Matcha, like other green teas, contains a class of antioxidants called catechins. Matcha is high in catechins called EGCG (epigallocatechin gallate), which is believed to have cancer fighting effects on the body. Studies have linked green tea to a variety of health benefits, like helping prevent heart disease, type 2 diabetes, cancer, and even encouraging weight loss."
    },
    {
        id: 18,
        commonName: "Reishi Mushroom",
        scientificName: "Lingzhi",
        imgSrc: '../assets/dry-herb-photos/reishi.jpeg',
        pricing: [
            {
                id: 23,
                name: "Reishi Mushroom",
                type: "Powder",
                size: "1 oz",
                price: 4.90,
            }
        ],
        details: "Reishi mushroom has been used to help enhance the immune system, reduce stress, improve sleep, and less fatigue. People also take Reishi for health conditions such as high blood pressure and high cholesterol."
    },
    {
        id: 19,
        commonName: "Blue Skull Cap Leaf",
        scientificName: "Scutellaria Laterflora",
        imgSrc: '../assets/dry-herb-photos/skull-cap.jpeg',
        pricing: [
            {
                id: 24,
                name: "Blue Skull Cap Leaf",
                type: "Shredded Leaf",
                size: "1 oz",
                price: 3.75
            },
            {
                id: 25,
                name: "Blue Skull",
                type: "Powder",
                size: "1 oz",
                price: 3.75
            }
        ],
        details: "Blue Skull cap is used for trouble sleeping (insomnia), anxiety, stroke, paralysis caused by stroke, as well as, fever and high cholesterol."
    },
    {
        id: 20,
        commonName: "Tumeric",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/tumeric.jpeg',
        pricing: [
            {
                id: 26,
                name: "Tumeric",
                type: "Capsule",
                size: "1 capsule",
                price: 0.25,
            },
            {
                id: 27,
                name: "Tumeric",
                type: "Powder",
                size: "1 oz",
                price: 1.80,
            },
        ],
        details: "Tumeric is a plant that is related to ginger, it is grown throughout India, parts of Asia, and Central America. It is commonly known as Indian saffron or the golden spice. Cercumin, the active ingredient in tumeric, is known for reducing the number of heart attacks bypass patients have after surgery, controlling knee pain from osteoarthritis, and reducing the skin irritation that often occurs after radiation treatments for breast cancer."
    },
    {
        id: 21,
        commonName: "Valerian",
        scientificName: "Valerian Officinals",
        imgSrc: '../assets/dry-herb-photos/valerian.jpeg',
        pricing: [
            {
                id: 28,
                name: "Valerian",
                type: "Powder",
                size: "1 oz",
                price: 2.25,
            }
        ],
        details: "The root of this flowering plant is dried and used as an herbal remedy. Valerian is most commonly used for sleep disorders such as insomnia. It is used orally for anxiety and psychological stress."
    },
    {
        id: 22,
        commonName: "White Sage",
        scientificName: "",
        imgSrc: '../assets/dry-herb-photos/white-sage.jpeg',
        pricing: [
            {
                id: 29,
                name: "White Sage",
                type: "Bundle",
                size: "4 inch",
                price: 6.99,
            },
            {
                id: 30,
                name: "White Sage",
                type: "Bundle",
                size: "8 inch",
                price: 12.99,
            }
        ],
        details: "Burning White Sage is a ritual known for smudging. Smudging is a cleansing ceremony used to help people, places, or even objects to get rid of negative energy or even bad spirits."
    },
];

export default dryHerbs;