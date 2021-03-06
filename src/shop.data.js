const SHOP_DATA = [
    {
        id: 1,
        title: 'Dry Herbs',
        routeName: 'herbs',
        items: [
            {
                id: 1,
                commonName: "Akuamma",
                scientificName: "Picralima Nitida",
                imgSrc: './assets/dry-herb-photos/akuamma.jpg',
                pricing: [
                    {
                        type: "seed",
                        size: "1 oz",
                        price: 7.35
                    },
                    {
                        type: "powder",
                        size: "1 oz",
                        price: 8.25
                    },
                    {
                        type: "cap",
                        size: "cup",
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
                        type: "",
                        size: "1 oz",
                        price: 10.40
                    },
                    {
                        type: "",
                        size: "1 gram",
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
                        type: "",
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
                        type: "",
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
                        type: "Powder",
                        size: "1 oz",
                        price: 3.35
                    },
                    {
                        type: "Crushed Leaf",
                        size: "1 oz",
                        price: 2.35
                    },
                    {
                        type: "4:1 Extract",
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
                        type: "",
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
                        type: "Extract",
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
                        type: "Leaf",
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
                        type: "",
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
                        type: "Detox Cleanse",
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
                        type: "Powder",
                        size: "1 oz",
                        price: 3.75,
                    }
                ],
                details: "An herbal remedy used for multiple ailments; marshmallow root is the base of the marshmallow plant. Medically, the root may be used for anything from chapped skin to a common cold. Marshmallow root may also be used as a cosmetic ingredient. It can be used to treat bruises, to sooth a stomache ache, to treat gastritis, indigestion, as well as some coughs. The remedy has been used to treat Crohn's disease, asthma, diarrhea, and gastroesophageal reflux disease. This should be taken with at least 8oz of liquid. Consuming this product can expose you to lead, which is known in the state of California to cause birth defects of other reproductive harm."
            },
            {
                id: 13,
                commonName: "Calea Zacatachichi",
                scientificName: "Calea Zacatachichi",
                imgSrc: '',
                pricing: [
                    {
                        type: "",
                        size: "1 oz",
                        price: 15.00,
                    }
                ],
                details: "Medium sized shrub that is known to be a hallucinogen and to increase dreams. Because of this, it is often referred to as the 'dream herb'. It is also called 'bitter grass' because the plant material of calea zactachichi has an intense bitter taste. Calea zactachichi has been used in folk remedies for thousands of years as an appetite stimulant, cleansing agent, calming agent, laxative, and for the treatment of diarrhea, dysentery, fever, skin rashes, swollen scalps, and headaches. Some people use this herb to induce psychic dreams, help remember dreams, and to increase dreaming. This herb has also been studied for mental enchancement and sleep."
            },
            {
                id: 14,
                commonName: "Ilex Guayusa",
                scientificName: "",
                imgSrc: '../assets/dry-herb-photos/ilex.jpeg',
                pricing: [
                    {
                        type: "",
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
                        type: "",
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
                        type: "",
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
                        type: "",
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
                        type: "",
                        size: "1 oz",
                        price: 3.75,
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
                        type: "Capsule",
                        size: "1 capsule",
                        price: 0.25,
                    },
                    {
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
                        type: "",
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
                        type: "Bundle",
                        size: "4 inch",
                        price: 6.99,
                    },
                    {
                        type: "Bundle",
                        size: "8 inch",
                        price: 12.99,
                    }
                ],
                details: "Burning White Sage is a ritual known for smudging. Smudging is a cleansing ceremony used to help people, places, or even objects to get rid of negative energy or even bad spirits."
            }
        ]
    },
    {
        id: 2,
        title: 'Bulk Tea',
        routeName: 'teas',
        items: [
            {
                id: 23,
                name: "Hibiscus Heaven",
                price: 2.60
            },
            {
                id: 24,
                name: "English Breakfast",
                price: 2.75
            },
            {
                id: 25,
                name: "Moringa Mint Tea",
                price: 2.80
            },
            {
                id: 26,
                name: "Black Tea",
                price: 3.00
            },
            {
                id: 27,
                name: "Mad Hatter",
                price: 3.00
            },
            {
                id: 28,
                name: "Moroccan Mint",
                price: 3.00
            },
            {
                id: 29,
                name: "Mulling Spice",
                price: 3.00
            },
            {
                id: 30,
                name: "Stay Well Tea",
                price: 3.00
            },
            {
                id: 31,
                name: "Chai Tea",
                price: 3.00
            },
            {
                id: 32,
                name: "Blackberry Tea",
                price: 3.20
            },
            {
                id: 33,
                name: "Earl Grew",
                price: 3.25
            },
            {
                id: 34,
                name: "Strawberry",
                price: 3.25
            },
            {
                id: 35,
                name: "Yerba Mate",
                price: 3.25
            },
            {
                id: 36,
                name: "Passion Fruit Chai",
                price: 3.25
            },
            {
                id: 37,
                name: "Lazy Daze",
                price: 3.30
            },
            {
                id: 38,
                name: "Regularitea",
                price: 3.50
            },
            {
                id: 39,
                name: "Gunpowder Green Tea",
                price: 3.50
            },
            {
                id: 40,
                name: "Bidens Pilosa",
                price: 3.75
            },
            {
                id: 41,
                name: "Cecropia Palmata",
                price: 3.75
            },
            {
                id: 42,
                name: "Oolong",
                price: 3.75
            },
            {
                id: 43,
                name: "Afternoon Delight",
                price: 3.75
            },
            {
                id: 44,
                name: "Lemon Ginger",
                price: 3.75
            },
            {
                id: 45,
                name: "Pu ehr Tea",
                price: 3.90
            },
            {
                id: 46,
                name: "Matcha Green Tea",
                price: 4.00
            },
            {
                id: 47,
                name: "Jasmine Tea",
                price: 4.20
            },
            {
                id: 48,
                name: "Mango Tea",
                price: 4.25
            },
            {
                id: 49,
                name: "Da Hong Pao Oolong",
                price: 4.50
            },
            {
                id: 50,
                name: "Roasted Yerba Mate",
                price: 4.50
            },
            {
                id: 51,
                name: "Rooibos Chai Tea",
                price: 4.60
            }
        ]
    },
    {
        id: 3,
        title: 'Jewelry',
        routeName: 'jewelry',
        items: [
            { 
                // Spell Jar Earings
                id: 1,
                linkUrl: 'jewelry/spell-jar-earings',
                title: 'Spell Jar Earings',
                items: [
                    {
                        id: 52,
                        name: "Protection",
                        price: 15.00
                    },
                    {
                        id: 53,
                        name: "Anti-anxiety",
                        price: 15.00
                    },
                    {
                        id: 54,
                        name: "Love",
                        price: 15.00
                    },
                    {
                        id: 55,
                        name: "Strength",
                        price: 15.00
                    },
                    {
                        id: 56,
                        name: "Weight Loss",
                        price: 15.00
                    },
                    {
                        id: 57,
                        name: "Psychic Energy & Divination",
                        price: 15.00
                    }
                ]
            },
            {
                //Spell Jar Necklace
                id: 2,
                linkUrl: 'jewelry/spell-jar-necklaces',
                title: 'Spell Jar Necklace',
                items: [
                    {
                        id: 58,
                        name: "Anti-depression",
                        price: 10.00
                    },
                    {
                        id: 59,
                        name: "Banishing",
                        price: 10.00
                    },
                    {
                        id: 60,
                        name: "Fertility",
                        price: 10.00
                    },
                    {
                        id: 61,
                        name: "Good Healt",
                        price: 10.00
                    },
                    {
                        id: 62,
                        name: "Healing",
                        price: 10.00
                    },
                    {
                        id: 63,
                        name: "Money & Success",
                        price: 10.00
                    },
                    {
                        id: 64,
                        name: "Protection",
                        price: 10.00
                    },
                    {
                        id: 65,
                        name: "Pyschic Energy & Divination",
                        price: 10.00
                    },
                    {
                        id: 66,
                        name: "Self Love",
                        price: 10.00
                    },
                    {
                        id: 67,
                        name: "Weight Loss",
                        price: 10.00
                    }
                ]
            },
            { 
                // Crystal Spell Necklace
                id: 3,
                linkUrl: 'jewelry/crystal-spell-necklaces',
                title: 'Crystal Spell Necklace',
                items: [
                    {
                        id: 68,
                        name: "Money & Success",
                        price: 25.00
                    },
                    {
                        id: 69,
                        name: "Luck",
                        price: 25.00
                    }
                ]
            },
            {
                // Spiritual Moonchild Products
                id: 4,
                linkUrl: 'jewelry/spritual-moonchild',
                title: 'Spiritual Moonchild Products',
                items: [
                    {
                        id: 70,
                        name: "Anxiety Banish Necklace",
                        price: 20.00
                    },
                    {
                        id: 71,
                        name: "Depression Banish Necklace",
                        price: 20.00
                    },
                    {
                        id: 72,
                        name: "Fertility Necklace",
                        price: 20.00
                    },
                    {
                        id: 73,
                        name: "Good Luck Necklace",
                        price: 20.00
                    },
                    {
                        id: 74,
                        name: "Grounding Necklace",
                        price: 20.00
                    },
                    {
                        id: 75,
                        name: "Higher Self Necklace",
                        price: 20.00
                    },
                    {
                        id: 76,
                        name: "XL Prosperity Necklace",
                        price: 25.00
                    },
                    {
                        id: 77,
                        name: "Protection Necklace",
                        price: 20.00
                    },
                    {
                        id: 78,
                        name: "Self Love Necklace",
                        price: 20.00
                    },
                    {
                        id: 79,
                        name: "Wealth-Income Necklace",
                        price: 20.00
                    }
                ]
            }           
        ]
    },
    {
        id: 4,
        title: 'Essential Oils',
        routeName: 'oils',
        items: [
             // 10ml Essential Oils
            {
                id: 1,
                linkUrl: 'oils/10ml-oils',
                title: '10ml Essential Oils',
                items: [
                    {
                        id: 80,
                        name: "Geranium",
                        price: 7.99
                    },
                    {
                        id: 81,
                        name: "Bergamot",
                        price: 7.99
                    },
                    {
                        id: 82,
                        name: "Cedarwood",
                        price: 7.99
                    },
                    {
                        id: 83,
                        name: "Clary Sage",
                        price: 7.99
                    },
                    {
                        id: 84,
                        name: "Clove Bud",
                        price: 7.99
                    },
                    {
                        id: 85,
                        name: "Eukalyptus",
                        price: 7.99
                    },
                    {
                        id: 86,
                        name: "Frankincense",
                        price: 7.99
                    },
                    {
                        id: 87,
                        name: "Jasmine (3% Dilution)",
                        price: 7.99
                    },
                    {
                        id: 88,
                        name: "Lavender",
                        price: 7.99
                    },
                    {
                        id: 89,
                        name: "Lemon",
                        price: 7.99
                    },
                    {
                        id: 90,
                        name: "Lemongrass",
                        price: 7.99
                    },
                    {
                        id: 100,
                        name: "Multipurpose Infection Fighting Blend",
                        price: 7.99
                    },
                    {
                        id: 101,
                        name: "Oregano",
                        price: 7.99
                    },
                    {
                        id: 102,
                        name: "Patchouli",
                        price: 7.99
                    },
                    {
                        id: 103,
                        name: "Peppermint",
                        price: 7.99
                    },
                    {
                        id: 104,
                        name: "Rosemary",
                        price: 7.99
                    },
                    {
                        id: 105,
                        name: "Tea Tree",
                        price: 7.99
                    },
                    {
                        id: 106,
                        name: "Thieves",
                        price: 7.99
                    },
                    {
                        id: 107,
                        name: "Topical Cold & Flu",
                        price: 7.99
                    },
                    {
                        id: 108,
                        name: "Vetiver",
                        price: 9.99
                    },
                    {
                        id: 109,
                        name: "Vanilla Spice",
                        price: 7.50
                    },
                    {
                        id: 110,
                        name: "Palo Santo",
                        price: 23.00
                    },
                    {
                        id: 111,
                        name: "Bye bye Summer Flies (diffuser blend)",
                        price: 8.99
                    },
                    {
                        id: 112,
                        name: "Christmas Cookie",
                        price: 8.99
                    }
                ]
            },
            {
                // Essential Oil Roll Ons
                id: 2,
                linkUrl: 'oils/roll-ons',
                title: 'Essential Oil Roll Ons',
                items: [
                    {
                        id: 113,
                        name: "Into the Woods",
                        price: 10.99
                    },
                    {
                        id: 114,
                        name: "He's so Fresh",
                        price: 10.00
                    },
                    {
                        id: 115,
                        name: "Sunshine Kisses",
                        price: 12.99
                    },
                    {
                        id: 116,
                        name: "Vanilla Spice",
                        price: 12.99
                    },
                    {
                        id: 117,
                        name: "Headache Relief",
                        price: 12.99
                    }
                ]
            }           
        ]
    },
    {
    id: 5,
        title: 'Room and Body Sprays',
        routeName: 'sprays',
        items: [
            {
                // Room Sprays
                id: 1,
                linkUrl: 'sprays/room-sprays',
                title: 'Room Sprays',
                items: [
                    {
                        id: 118,
                        name: "Bug Off Spray (30ml)",
                        price: 12.99
                    },
                    {
                        id: 119,
                        name: "Bugg Off Spray (60ml)",
                        price: 19.99
                    },
                    {
                        id: 120,
                        name: "Fresh out of Fucks",
                        price: 22.00
                    },
                    {
                        id: 121,
                        name: "Witch in the Woods",
                        price: 22.00
                    }
                ]
            },
            {
                // Body Sprays
                id: 2,
                linkUrl: 'sprays/body-sprays',
                title: 'Body Sprays',
                items: [
                    {
                        id: 122,
                        name: "Gingerbread",
                        price: 9.99
                    },
                    {
                        id: 123,
                        name: "Harvest Spice",
                        price: 9.99
                    },
                    {
                        id: 124,
                        name: "Vanilla Spice",
                        price: 9.99
                    },
                    {
                        id: 125,
                        name: "Into the Woods",
                        price: 9.99
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Soaps',
        routeName: 'soaps',
        items: [
            {
                id: 1,
                linkUrl: 'soaps/soaps',
                title: 'Soaps',
                items: [
                    {
                        id: 126,
                        name: "Apple Cantaloupe",
                        price: 7.50
                    },
                    {
                        id: 127,
                        name: "Banana Coconut Scrub",
                        price: 7.50
                    },
                    {
                        id: 128,
                        name: "Black Forest",
                        price: 7.50
                    },
                    {
                        id: 129,
                        name: "Black Raspberry Vanilla",
                        price: 7.50
                    },
                    {
                        id: 130,
                        name: "Black Soap",
                        price: 7.50
                    },
                    {
                        id: 131,
                        name: "Cool Fresh Aloe",
                        price: 7.50
                    },
                    {
                        id: 132,
                        name: "Berry Sage",
                        price: 7.50
                    },
                    {
                        id: 133,
                        name: "Lavender",
                        price: 7.50
                    },
                    {
                        id: 134,
                        name: "Petal Dance",
                        price: 7.50
                    },
                    {
                        id: 135,
                        name: "Wild Passion",
                        price: 7.50
                    },
                    {
                        id: 136,
                        name: "Glacier Stream",
                        price: 7.50
                    },
                    {
                        id: 137,
                        name: "Honeysuckle",
                        price: 7.50
                    },
                    {
                        id: 138,
                        name: "Jasmine Lime",
                        price: 7.50
                    },
                    {
                        id: 139,
                        name: "Moonlight & Roses",
                        price: 7.50
                    },
                    {
                        id: 140,
                        name: "Summer Citrus",
                        price: 7.50
                    },
                    {
                        id: 141,
                        name: "Vanilla Oatmeal",
                        price: 7.50
                    },
                    {
                        id: 142,
                        name: "White Tea Ginger",
                        price: 7.50
                    },
                    {
                        id: 143,
                        name: "Ylang Ylang Lavender",
                        price: 7.50
                    },
                ]
            },
            {
                // Petite Goats Milk
                id: 2,
                linkUrl: 'soaps/petite-goats-milk',
                title: 'Petite Goats Milk',
                items: [
                    {
                        id: 144,
                        name: "Lavender and Oatmeal",
                        price: 4.00
                    },
                    {
                        id: 145,
                        name: "Harvest Spice",
                        price: 4.00
                    },
                    {
                        id: 146,
                        name: "Milk & Honey",
                        price: 4.00
                    },
                ]
            },
            {
                // 3oz Goats Milk
                id: 3,
                linkUrl: 'soaps/3oz-goats-milk',
                title: '3oz Goats Milk',
                items: [
                    {
                        id: 147,
                        name: "Hey Pumpkin",
                        price: 6.00
                    }
                ]
            },
            {
                // 4 oz Goats Milk
                id: 4,
                linkUrl: 'soaps/4oz-goats-milk',
                title: '4oz Goats Milk',
                items: [
                    {
                        id: 148,
                        name: "Hey Pumpkin",
                        price: 8.00
                    },
                    {
                        id: 149,
                        name: "Milk & Honey",
                        price: 8.00
                    },
                    {
                        id: 150,
                        name: "Sunnydaze",
                        price: 8.00
                    },
                    {
                        id: 151,
                        name: "Summer Vacation",
                        price: 8.00
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Crystals and Stones',
        routeName: 'crystals-and-stones',
        items: [
            {
                id: 152,
                name: "Blue Goldstone Pendant (India)",
                price: 12.50
            },
            {
                id: 153,
                name: "Brazilian Amethyst Shards",
                price: 2.50
            },
            {
                id: 154,
                name: "Brazilian Citrine Mini Cluster",
                price: 7.00
            },
            {
                id: 155,
                name: "Brazilian Pink Agate Geode",
                price: 15.99
            },
            {
                id: 156,
                name: "Carnelian - tumbled",
                price: 1.11
            },
            {
                id: 157,
                name: "Chalcopyrite - Raw",
                price: 4.50
            },
            {
                id: 158,
                name: "Chert Sedimentary Rock",
                price: 3.00
            },
            {
                id: 159,
                name: "Chrysocolla Pendant (India)",
                price: 19.99
            },
            {
                id: 160,
                name: "Raw Chrysocalla (Mexico)",
                price: 65.00
            },
            {
                id: 161,
                name: "Clear Crystal Quartz Wand",
                price: 90.00
            },
            {
                id: 162,
                name: "Coral",
                price: 6.00 
            },
            {
                id: 163,
                name: "Crystal Geodes (small)",
                price: 2.50
            },
            {
                id: 164,
                name: "Diamond cut Amethyst Pendant",
                price: 27.00
            },
            {
                id: 165,
                name: "Dragons Blood Jasper (medium)",
                price: 3.80
            },
            {
                id: 166,
                name: "Dyed Magnesite",
                price: 4.20
            },
            {
                id: 167,
                name: "Crystal Spoons",
                price: 7.00
            },
            {
                id: 168,
                name: "Tumbled Fluorite",
                price: 6.00
            },
            {
                id: 169,
                name: "Gemstone Pin (Quartz)",
                price: 9.99
            },
            {
                id: 170,
                name: "Gemstone Pin (Labradorite)",
                price: 12.00
            },
            {
                id: 171,
                name: "Gemstone Pin (random stones)",
                price: 8.00
            },
            {
                id: 172,
                name: "Gemstone Magnets",
                price: 10.00
            },
            {
                id: 173,
                name: "Goldstone Scepter",
                price: 30.00
            },
            {
                id: 174,
                name: "Goldstone - tumbled",
                price: 4.00
            },
            {
                id: 175,
                name: "Green Amozonite (Madagascar)",
                price: 4.20
            },
            {
                id: 176,
                name: "Green Aventurine tumbled stone",
                price: 7.50
            },
            {
                id: 177,
                name: "Kambaba Jasper",
                price: 4.20
            },
            {
                id: 178,
                name: "Kyanite Shard",
                price: 2.50
            },
            {
                id: 179,
                name: "African Jade Lental Beads",
                price: 1.50
            },
            {
                id: 180,
                name: "Agate Slice Pendants",
                price: 3.40
            },
            {
                id: 181,
                name: "Amber",
                price: 5.00,
                qty: 2
            },
            {
                id: 182,
                name: "Amber Nugget Necklace",
                price: 40.00
            },
            {
                id: 183,
                name: "Amethyst Drop Pendant",
                price: 7.00
            },
            {
                id: 184,
                name: "Amethyst Pendant",
                price: 5.99
            },
            {
                id: 185,
                name: "Amethyst Pendulum (India)",
                price: 15.00
            },
            {
                id: 186,
                name: "Small Raw Purple Amethyst",
                price: 2.50
            },
            {
                id: 187,
                name: "Medium Raw Purple Amethyst",
                price: 7.00
            },
            {
                id: 188,
                name: "Apache Tear Obsidian (small)",
                price: 1.00
            },
            {
                id: 189,
                name: "Apache Tear Obsidian (large)",
                price: 2.00
            },
            {
                id: 190,
                name: "Aquamarine (India)",
                price: 4.00
            },
            {
                id: 191,
                name: "Arrowhead Stone Pendant (India)",
                price: 12.50
            },
            {
                id: 192,
                name: "Arrowhead (small)",
                price: 5.00
            },
            {
                id: 193,
                name: "Arrowhead (medium)",
                price: 10.00
            },
            {
                id: 194,
                name: "Arrowhead (large)",
                price: 15.00
            },
            {
                id: 195,
                name: "Assorted Mixed Tumbled Stones",
                price: 2.50
            },
            {
                id: 196,
                name: "Aventurine Worrystone (India)",
                price: 8.30
            },
            {
                id: 197,
                name: "Bismuth",
                price: 4.00
            },
            {
                id: 198,
                name: "Black Lip Mother of Pearl Shell",
                price: 7.50
            },
            {
                id: 199,
                name: "Tumbled Black Obsidian (Mexico)",
                price: 5.55
            },
            {
                id: 200,
                name: "Black Tourmaline Raw",
                price: 1.00
            },
            {
                id: 201,
                name: "Tumbled Bloodstone",
                price: 2.00
            },
            {
                id: 202,
                name: "Bloodstone Worrystone",
                price: 20.00
            },
            {
                id: 203,
                name: "Blue Agate Slice",
                price: 5.75
            },
            {
                id: 204,
                name: "Blue Amazonite (Brazil)",
                price: 2.22
            },
            {
                id: 205,
                name: "Rough cut Blue Apatite",
                price: 2.50
            },
            {
                id: 206,
                name: "Tumbled Jasper (India)",
                price: 1.10
            },
            {
                id: 207,
                name: "Tumbled Kyanite",
                price: 16.00
            },
            {
                id: 208,
                name: "Tumbled Lapis Lazuli",
                price: 2.60
            },
            {
                id: 209,
                name: "Tumbled Ocean Jasper",
                price: 1.00
            },
            {
                id: 210,
                name: "Tumbled Prehnite (India)",
                price: 2.00
            },
            {
                id: 211,
                name: "Tumbled Amethyst",
                price: 3.99
            },
            {
                id: 212,
                name: "Tumbled Rainbow Moonstone",
                price: 2.50
            },
            {
                id: 213,
                name: "Tumbled Shungite",
                price: 10.50
            },
            {
                id: 214,
                name: "Tumbled Smokey Quartz",
                price: 2.75
            },
            {
                id: 215,
                name: "Tumbled Sunstone",
                price: 8.40
            },
            {
                id: 216,
                name: "Tumbled Unakite",
                price: 1.03
            },
            {
                id: 217,
                name: "Zodiac Crystal Sets",
                price: 39.99
            },
            {
                id: 218,
                name: "Happiness Stone Kits",
                price: 7.50
            },
            {
                id: 219,
                name: "Travel Protection Crystal Sets",
                price: 12.00
            },
            {
                id: 220,
                name: "Embrace the Holiday Stone Sets",
                price: 12.00
            },
            {
                id: 221,
                name: "Labradorite Rough Cut",
                price: 2.50
            },
            {
                id: 222,
                name: "Labradorite Tumbled Stone",
                price: 12.00
            },
            {
                id: 223,
                name: "Lapis Lazuli Keychain",
                price: 6.99
            },
            {
                id: 224,
                name: "Polished Lapis Lazuli (small)",
                price: 5.00
            },
            {
                id: 225,
                name: "Polished Lapis Lazuli (medium)",
                price: 5.25
            },
            {
                id: 226,
                name: "Polished Lapis Lazuli (large)",
                price: 5.40
            },
            {
                id: 227,
                name: "Large Brazilian Black Tourmaline",
                price: 15.00
            },
            {
                id: 228,
                name: "Large Brazilian Kyanite Shards",
                price: 5.55
            },
            {
                id: 229,
                name: "Large Raw Rose Quartz",
                price: 30.00
            },
            {
                id: 230,
                name: "Moldavite (Czech Republic) 2.55 grams",
                price: 120.00
            },
            {
                id: 231,
                name: "Moldavite (Czech Republic) 4.01 grams",
                price: 140.00
            },
            {
                id: 232,
                name: "Natural Emerald with Biotite & Schist",
                price: 55.00
            },
            {
                id: 233,
                name: "Tumbled Peridot Chips",
                price: 0.05
            },
            {
                id: 234,
                name: "Pink Agate Slices",
                price: 5.75
            },
            {
                id: 235,
                name: "Polished Agate",
                price: 3.15
            },
            {
                id: 236,
                name: "Polished Brazilian Citrine",
                price: 0.60
            },
            {
                id: 237,
                name: "Polished Fluorite",
                price: 0.99
            },
            {
                id: 238,
                name: "Polished Rainbow Fluorite",
                price: 6.00
            },
            {
                id: 239,
                name: "Polished Shiva Lingam",
                price: 2.50
            },
            {
                id: 240,
                name: "Prehnite Cluster (India)",
                price: 11.00
            },
            {
                id: 241,
                name: "Purple Agate Slice",
                price: 5.75
            },
            {
                id: 242,
                name: "Pyrite Cluster",
                price: 3.00
            },
            {
                id: 243,
                name: "Quartz Thumb Oval Worrystone (India)",
                price: 10.40
            },
            {
                id: 244,
                name: "Quartz Points (medium)",
                price: 2.50
            },
            {
                id: 245,
                name: "Raw Amazonite",
                price: 6.30
            },
            {
                id: 246,
                name: "Raw Apophyllite (India)",
                price: 1.75
            },
            {
                id: 247,
                name: "Raw Calcite",
                price: 1.00
            },
            {
                id: 248,
                name: "Raw Chalcopyrite (Mexico)",
                price: 1.10
            },
            {
                id: 249,
                name: "Raw Crystal Quartz Points (Arkansas)",
                price: 3.00
            },
            {
                id: 250,
                name: "Raw Crystal Quartz Points (Madagascar)",
                price: 1.00
            },
            {
                id: 251,
                name: "Raw Opal",
                price: 6.00
            },
            {
                id: 252,
                name: "Raw Peridot (Arizona)",
                price: 10.50
            },
            {
                id: 253,
                name: "Raw Rainbow Moonstone (India)",
                price: 6.00
            },
            {
                id: 254,
                name: "Raw Black Tourmaline (small)",
                price: 4.20
            },
            {
                id: 255,
                name: "Rhodonite",
                price: 3.00
            },
            {
                id: 256,
                name: "Red Jasper Tumbled Stone",
                price: 4.99
            },
            {
                id: 257,
                name: "Selenite Wand (Morocco)",
                price: 5.00
            },
            {
                id: 258,
                name: "Serpentine Lental Bead",
                price: 1.50
            },
            {
                id: 259,
                name: "Smokey Quartz (small)",
                price: 2.50,
                qty: 2 
            },
            {
                id: 260,
                name: "Sodalite (small)",
                price: 0.50
            },
            {
                id: 261,
                name: "Sodalite (medium)",
                price: 0.75
            },
            {
                id: 262,
                name: "Sodalite (large)",
                price: 1.00
            },
            {
                id: 263,
                name: "Tan Agate Slices",
                price: 3.75
            },
            {
                id: 264,
                name: "Tigers Eye Pendants",
                price: 9.00
            },
            {
                id: 265,
                name: "Tumbled Tigers Eye (small)",
                price: 3.00
            },
            {
                id: 266,
                name: "Tumbled Tigers Eye (medium)",
                price: 5.00
            },
            {
                id: 267,
                name: "Tumbled Tigers Eye (large)",
                price: 7.00
            },
            {
                id: 268,
                name: "Tigers Eye Sphere",
                price: 20.99
            },
            {
                id: 269,
                name: "Tumbled Amazonite (Madagascar)",
                price: 1.55
            },
            {
                id: 270,
                name: "Tumbled Blue Apatite",
                price: 1.60
            },
            {
                id: 271,
                name: "Tumbled Blue Aventurine",
                price: 0.90
            },
            {
                id: 272,
                name: "Tumbled Carnelian",
                price: 1.50
            },
            {
                id: 273,
                name: "Tumbled Chrysoprase",
                price: 1.50
            },
            {
                id: 274,
                name: "Tumbled Hematite",
                price: 2.60
            }
        ]
    },
    {
        id: 8,
        title: 'Skateboards and Accessories',
        routeName: 'skateboard-shop',
        items: [
            {
                // Decks
                id: 1,
                linkUrl: 'skate-shop/decks',
                title: 'Decks',
                items: [
                    {
                        id: 275,
                        name: "7.75 Blank Natural",
                        price: 39.99
                    },
                    {
                        id: 276,
                        name: "7.75 DGK - Rainbow Drip Deck",
                        price: 79.99
                    },
                    {
                        id: 277,
                        name: "8.0 Alien Workshop - Visitor Deck",
                        price: 72.00
                    },
                    {
                        id: 278,
                        name: "8.0 Flip Skateboards - Camo Combat Deck",
                        price: 69.99
                    },
                    {
                        id: 279,
                        name: "8.0 Foundation Skateboards - Red Logo Deck",
                        price: 49.50
                    },
                    {
                        id: 280,
                        name: "8.0 SK8MAFIA - Rasta Deck",
                        price: 68.00
                    },
                    {
                        id: 281,
                        name: "8.0 Techne - Black Vulture Deck",
                        price: 72.00
                    },
                    {
                        id: 282,
                        name: "8.0 Anti-Hero Skateboards - Eagle Deck",
                        price: 56.00
                    },
                    {
                        id: 283,
                        name: "8.25 Alien Workshop - Orange Spectrum Deck",
                        price: 72.00
                    },
                    {
                        id: 284,
                        name: "8.25 Powell Peralta - Skull & Sword Deck",
                        price: 59.99
                    },
                    {
                        id: 285,
                        name: "8.25 Techne - Horned Owl Deck",
                        price: 72.00
                    },
                    {
                        id: 286,
                        name: "8.50 Element - Seal Forest Deck",
                        price: 64.99
                    },
                    {
                        id: 287,
                        name: "7.75 / 8.0 / 8.5 Euphoria Skate Shop Deck",
                        price: 64.99,
                    },
                ]
            },
            {
                // Complete Boards
                id: 2,
                linkUrl: 'skate-shop/complete-boards',
                title: 'Complete Boards',
                item: [
                    {
                        id: 288,
                        name: "7.75 Primitive - Burgandy Butterfly Complete",
                        price: 99.99
                    },
                    {
                        id: 289,
                        name: "8.0 Alien Workshop - Navy Spectrum Complete",
                        price: 99.99
                    },
                    {
                        id: 290,
                        name: "8.0 Powell Peralta - Vallely Elephant Complete",
                        price: 99.99
                    },
                    {
                        id: 291,
                        name: "8.0 Santa Cruz - Classic Dot Complete",
                        price: 105.00
                    },
                    {
                        id: 292,
                        name: "8.0 Santa Cruz - Screaming Hand Complete",
                        price: 105.00
                    },
                    {
                        id: 293,
                        name: "8.25 Baker - Brand Logo Complete",
                        price: 120.00
                    },
                    {
                        id: 294,
                        name: "Euphoria Skate Shop Complete",
                        price: 90.00
                    },
                    {
                        id: 295,
                        name: "Mini Complete",
                        price: 74.99
                    },
                    {
                        id: 296,
                        name: "Punked Kicktail Longboard Complete",
                        price: 129.99
                    },
                    {
                        id: 297,
                        name: "Swell 22 inch (pink and gold) Complete",
                        price: 79.99
                    },
                    {
                        id: 298,
                        name: "Houston Skateboard Complete",
                        price: 129.99
                    }
                ]
            },
            {
                // Trucks
                id: 3,
                linkUrl: 'skate-shop/trucks',
                title: 'Trucks',
                items: [
                    {
                        id: 299,
                        name: "5.5/6.0 Grindking Disruptor Raw Trucks",
                        price: 47.99
                    },
                    {
                        id: 300,
                        name: "5.5/6.0 Grindking Sparking Trucks",
                        price: 69.99
                    },
                    {
                        id: 301,
                        name: "5.25 Litezpeed Trucks",
                        price: 29.99
                    },
                    {
                        id: 302,
                        name: "180 mm Luxe Lite Trucks (longboard)(blue/green)",
                        price: 69.99
                    }
                ]
            },
            {
                // Wheels
                id: 4,
                linkUrl: 'skate-shop/wheels',
                title: 'Wheels',
                items: [
                    {
                        id: 303,
                        name: "50 mm White Blank Wheel Set",
                        price: 19.99
                    },
                    {
                        id: 304,
                        name: "51 mm Wheel Set (White & Blue)",
                        price: 19.99
                    },
                    {
                        id: 305,
                        name: "52 mm Black Wheel Set / White Wheel set",
                        price: 19.99
                    },
                    {
                        id: 306,
                        name: "52 mm Wheel Set (Blue / Green / Orange / Pink / Red / Yellow)",
                        price: 24.99
                    },
                    {
                        id: 307,
                        name: "52 mm Checkered Wheel Set",
                        price: 29.99
                    },
                    {
                        id: 308,
                        name: "53 mm Wheel Set ( Black / White )",
                        price: 19.99
                    },
                    {
                        id: 309,
                        name: "54 mm Wheel Set ( Black / White )",
                        price: 19.99
                    },
                    {
                        id: 310,
                        name: "53 mm Gel Wheel Set ( Green / Blue )",
                        price: 29.99
                    },
                    {
                        id: 311,
                        name: "H Formula Wheel Set",
                        price: 35.00
                    },
                    {
                        id: 312,
                        name: "Longboard Wheel Set ( Purple / Lime Green )",
                        price: 34.99
                    }
                ]
            },       
            {
                // Bearings
                id: 5,
                linkUrl: 'skate-shop/bearings',
                title: 'Bearings',
                items: [
                    {
                        id: 313,
                        name: "ABEC 3 bearing set",
                        price: 6.99
                    },
                    {
                        id: 314,
                        name: "ABEC 7 bearing set",
                        price: 8.99
                    },
                    {
                        id: 315,
                        name: "Litezpeed ABEC 3 bearing set ( Black / Blue / Green / Red / White )",
                        price: 9.99
                    },
                    {
                        id: 316,
                        name: "LiteZpeed ABEC 7 bearing set ( Black / Green / Red / White )",
                        price: 12.99
                    },
                    {
                        id: 317,
                        name: "Bones Big Ball Reds bearing set",
                        price: 24.99
                    },
                    {
                        id: 318,
                        name: "Huh bearing set ABEC 7",
                        price: 20.00
                    }
                ]
            },
            {
                // Hardware
                id: 6,
                linkUrl: 'skate-shop/hardware',
                title: 'Hardware',
                items: [
                    {
                        id: 319,
                        name: "Riser Pads",
                        price: 3.99
                    },
                    {
                        id: 320,
                        name: "1.25 inch",
                        price: 3.99
                    },
                    {
                        id: 321,
                        name: "1.5 inch",
                        price: 3.99
                    },
                    {
                        id: 322,
                        name: "1 inch",
                        price: 3.99
                    }
                ]
            }
        ]
    }
];

export default SHOP_DATA;