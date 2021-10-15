import React, { useEffect } from 'react';
import { dryHerbs } from '../data';

// Images
import akuamma from '../assets/dry-herb-photos/akuamma.jpg';
import blueLotus from '../assets/dry-herb-photos/blue-lotus.jpg';
import catsClaw from '../assets/dry-herb-photos/cats-claw.jpeg';
import damiana from '../assets/dry-herb-photos/damiana.jpeg';
import dreamHerb from '../assets/dry-herb-photos/dream-herb.jpeg';
import horneyGoat from '../assets/dry-herb-photos/horney-goat-weed.jpeg';
import kanna from '../assets/dry-herb-photos/kanna.jpeg';
import kava from '../assets/dry-herb-photos/kava.jpeg';
import dagga from '../assets/dry-herb-photos/wild-dagga.jpeg';
import wormwood from '../assets/dry-herb-photos/wormwood.jpeg';
import palo from '../assets/dry-herb-photos/palo.jpeg';
import whiteWillow from '../assets/dry-herb-photos/white-willow.jpeg';
import marshmallow from '../assets/dry-herb-photos/marshmallow.jpeg';
import ilex from '../assets/dry-herb-photos/ilex.jpeg';
import lavender from '../assets/dry-herb-photos/lavender.jpeg';
import maitake from '../assets/dry-herb-photos/maitake.jpeg';
import matcha from '../assets/dry-herb-photos/matcha.jpeg';
import reishi from '../assets/dry-herb-photos/reishi.jpeg';
import skullCap from '../assets/dry-herb-photos/skull-cap.jpeg';
import tumeric from '../assets/dry-herb-photos/tumeric.jpeg';
import valerian from '../assets/dry-herb-photos/valerian.jpeg';
import whiteSage from '../assets/dry-herb-photos/white-sage.jpeg';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import DryHerbCard from '../components/DryHerbCard/DryHerbCard.js';

function DryHerbs() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(dryHerbs[0].pricing.map((i) => console.log(i.type, i.size, i.price)))

    return (
    <div className="dry-herbs-page">
        <Navbar/>
        <div className="album bg-light">
            <div className="container">
            <div className="row">
                <h1 className="custom-font text-center page-title">Dry Herbs</h1>
            </div>
                <div className="row" style={{paddingTop: "0"}}>
                    <DryHerbCard 
                        src={akuamma} 
                        herbTitle="Akuamma / Picralima Nitida"
                        details="A part of the plant with the highest concentration of alkaloids. It gives a sense of well-being in combination with mild sedation. Effects typically last between 3 and 4 hours."
                        priceData={dryHerbs[0].pricing}
                    />
                    <DryHerbCard 
                        src={blueLotus} 
                        herbTitle="Blue Lotus / Nymphaea Caerulea"
                        details= "Blue Lotus is well respected as a holistic substance for centuries, with its ability to enhance mediation and promote relaxation. It also has been found to have pain relieving properties that moderate pain and muscle stress in the body."
                        priceData={dryHerbs[1].pricing}
                    />

                    <DryHerbCard 
                        src={catsClaw} 
                        herbTitle="Cats Claw / Uncaria Tomentosa"
                        details= "Cats Claw is derived from a tropical vine. Cats Claw helps support your immune system, possible helping fight infections more effectively."
                        priceData={dryHerbs[2].pricing}
                    />

                </div> 

                <div className="row">

                    <DryHerbCard 
                        src={damiana} 
                        herbTitle="Damiana / Turnera Diffusa"
                        details= "Damiana is used to treat headaches, bedwetting, depression, nervous stomach, and constipation; for prevention and treatment of sexual problems; boosting and maintaining mental and physical stamina; and as an aphrodisiac."
                        priceData={dryHerbs[3].pricing}
                    />

                    <DryHerbCard 
                        src={horneyGoat} 
                        herbTitle="Horney Goat Weed / Epimedium Grandiflorum"
                        details= "Horney goat weed is a herb. The leaves are used to make medicine. Horney Goat Weed is commonly used by mouth for sexual performance problems, such as erectile dysfunction (ED) and low sexual desire. It is also for back and knees, joint pain, arthritis, mental and physical fatigue, and memory loss along with many other conditions."
                        priceData={dryHerbs[4].pricing}
                    />

                    <DryHerbCard 
                        src={kanna} 
                        herbTitle="Kanna Shred / Sceletium Tortusom"
                        details= "Kanna elevates mood and decreases anxiety, stress and tension, and it has been used as an appetite suppressant. If you want to turn a bad day around, this beneficial tea is as reassuring to your state of mind as it is tasty."
                        priceData={dryHerbs[5].pricing}
                    />


                </div>

                <div className="row">

                    <DryHerbCard 
                        src={kava} 
                        herbTitle="Kava Extract / Piper Methysticum"
                        details= "Kava contains substances called kavapyrones. They act much like alcohol on your brain, making you feel calm, relaxed, and happy. The plant is also thought to relieve pain, seizures, and relax muscles. You can buy it as an herbal supplement online and in health food stores."
                        priceData={dryHerbs[6].pricing}
                    />
                    <DryHerbCard 
                        src={dagga} 
                        herbTitle="Wild Dagga (Lions Tail) / Leonotis Leonurus"
                        details= "Wild Dagga mixtures are also consumed to help high blood pressure, jaundice, hemorrhoids, dysentery, fever, headaches, influenza, asthma, and coughs. Wild Dagga is commonly referred to as wild cannabis."
                        priceData={dryHerbs[7].pricing}
                    />
                    <DryHerbCard 
                        src={wormwood} 
                        herbTitle="Wormwood / Artemisia"
                        details= "Wormwood is an herb that is native to Europe and North America. It is traditionaly used as a bitter tonic, carminative to support healthy appetite levels, and a healthy flora in the digestive tract. Wormwood is also used to treat fever, liver disease, depression, muscle pain, memory loss and worm infections."
                        priceData={dryHerbs[8].pricing}
                    />

                </div>

                <div className="row">

                    <DryHerbCard 
                        src={palo} 
                        herbTitle="Palo Azul - Detox Cheese"
                        details= "The bark of this plant has been used to create a potent cleansing tea for thousands of years. This detox clears toxins in the bladder, kidneys, and even removes traces of drug metabolites from urine, helping you pass a urinalysis."
                        priceData={dryHerbs[9].pricing}
                    />
                    <DryHerbCard 
                        src={whiteWillow}
                        herbTitle="White Willow Bark Powder"
                        details= "The bark of white willow contains salicin, which is a chemical similar to aspirin. In combination with the herb's powerful anti-inflammatory plant compounds, salicin is thought to be responsible for the pain-relieving and anti-inflammatory effects of the herb."
                        priceData={dryHerbs[10].pricing}
                    />
                    <DryHerbCard 
                        src={marshmallow} 
                        herbTitle="Marshmallow Root Powder / Althaea Officinalis"
                        details= "An herbal remedy used for multiple ailments; marshmallow root is the base of the marshmallow plant. Medically, the root may be used for anything from chapped skin to a common cold. Marshmallow root may also be used as a cosmetic ingredient. It can be used to treat bruises, to sooth a stomache ache, to treat gastritis, indigestion, as well as some coughs. The remedy has been used to treat Crohn's disease, asthma, diarrhea, and gastroesophageal reflux disease. This should be taken with at least 8oz of liquid. Consuming this product can expose you to lead, which is known in the state of California to cause birth defects of other reproductive harm."
                        priceData={dryHerbs[11].pricing}
                    />

                </div>

                <div className="row">

                    <DryHerbCard 
                        src={dreamHerb} 
                        herbTitle="Calea Zacatachichi / Calea Ternifolia"
                        details= "Medium sized shrub that is known to be a hallucinogen and to increase dreams. Because of this, it is often referred to as the 'dream herb'. It is also called 'bitter grass' because the plant material of calea zactachichi has an intense bitter taste. Calea zactachichi has been used in folk remedies for thousands of years as an appetite stimulant, cleansing agent, calming agent, laxative, and for the treatment of diarrhea, dysentery, fever, skin rashes, swollen scalps, and headaches. Some people use this herb to induce psychic dreams, help remember dreams, and to increase dreaming. This herb has also been studied for mental enchancement and sleep."
                        priceData={dryHerbs[12].pricing}
                    />
                    <DryHerbCard 
                        src={ilex} 
                        herbTitle="Ilex Guayusa"
                        details= "Ilex Guayusa is a species of tree of the holly genus, native to the Amazon Rainforest. One of three known caffeinated holly trees, the leaves of the guayusa tree are dried and brewed like a tea for their stimulative effects. Guayusa leaves contain various beneficial compounds linked to potential health benefits. This Amazonian plant is fich in antioxidants and caffeine that may promote weight loss, blood sugar regulation, and improved mood and alertness. Its tea is safe to drink and serves as an excellent alternative to coffee and energy drinks by providing a healthier energy lift."
                        priceData={dryHerbs[13].pricing}
                    />
                    <DryHerbCard 
                        src={lavender} 
                        herbTitle="Lavendar Petals / Lamianceae Lavendula"
                        details= "Lavender oil is believed to have anticeptic and anti-inflammatory properties, which can help to heal minor burns and bug bites. In addition to helping digestive problems, lavender is used to help relieve pain from headaches, sprains, toothaches, and sores. It can also be used to prevent hair loss."
                        priceData={dryHerbs[14].pricing}
                    />

                </div>

                <div className="row">

                    <DryHerbCard 
                        src={maitake} 
                        herbTitle="Maitake Mushroom"
                        details= "Maitake Mushroom is used to treat cancer and also to relieve some of the side effects of chemical treatment (chemotherapy) for cancer. It is also used for HIV/AIDS, chronic fatigue syndrome (CFS), hepatitis, hay fever, diabetes, high blood pressure, high cholesterol, weight loss, and infertility due to a condition known as polycystic ovary syndrome."
                        priceData={dryHerbs[15].pricing}
                    />
                    <DryHerbCard 
                        src={matcha} 
                        herbTitle="Matcha Green Tea"
                        details= "Matcha is a type of green tea by taking young tea leaves and grinding them into a bright green powder. Matcha, like other green teas, contains a class of antioxidants called catechins. Matcha is high in catechins called EGCG (epigallocatechin gallate), which is believed to have cancer fighting effects on the body. Studies have linked green tea to a variety of health benefits, like helping prevent heart disease, type 2 diabetes, cancer, and even encouraging weight loss."
                        priceData={dryHerbs[16].pricing}
                    />
                    <DryHerbCard 
                        src={reishi} 
                        herbTitle="Reishi Mushroom / Lingzhi"
                        details= "Reishi mushroom has been used to help enhance the immune system, reduce stress, improve sleep, and less fatigue. People also take Reishi for health conditions such as high blood pressure and high cholesterol."
                        priceData={dryHerbs[17].pricing}
                    />

                </div>
                    
                <div className="row">

                    <DryHerbCard 
                        src={skullCap} 
                        herbTitle="Blue Skull Cap Leaf / Scutellaria Laterflora"
                        details= "Blue Skull cap is used for trouble sleeping (insomnia), anxiety, stroke, paralysis caused by stroke, as well as, fever and high cholesterol."
                        priceData={dryHerbs[18].pricing}
                    />
                    <DryHerbCard 
                        src={tumeric} 
                        herbTitle="Tumeric Capsule / Tumeric Powder"
                        details= "Tumeric is a plant that is related to ginger, it is grown throughout India, parts of Asia, and Central America. It is commonly known as Indian saffron or the golden spice. Cercumin, the active ingredient in tumeric, is known for reducing the number of heart attacks bypass patients have after surgery, controlling knee pain from osteoarthritis, and reducing the skin irritation that often occurs after radiation treatments for breast cancer."
                        priceData={dryHerbs[19].pricing}
                    />
                    <DryHerbCard 
                        src={valerian} 
                        herbTitle="Valerian / Valeriana Officinalis"
                        details= "The root of this flowering plant is dried and used as an herbal remedy. Valerian is most commonly used for sleep disorders such as insomnia. It is used orally for anxiety and psychological stress."
                        priceData={dryHerbs[20].pricing}
                    />

                </div>

                <div className='row'>

                    <DryHerbCard 
                        src={whiteSage} 
                        herbTitle="White Sage"
                        details= "Burning White Sage is a ritual known for smudging. Smudging is a cleansing ceremony used to help people, places, or even objects to get rid of negative energy or even bad spirits."
                        priceData={dryHerbs[21].pricing}
                    />
                
                </div>
                 
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default DryHerbs;
