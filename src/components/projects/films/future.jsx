import React, { useEffect, useState } from "react"
import "./films.css"
import Youtube from "./youtube"

import SnowmanReturns from "../../../images/snowmanreturns.jpg"
import Keratza from "../../../images/keraca-visuleva.webp"
import Rice from "../../../images/R_M_Stilettos.jpg"

const Future = ( { mobile, visible } ) => {

    useEffect(() => window.scroll(0,0))
  
    return (
        <div className='film-outer-div'>
            <div className="future-film-inner-div">
               <div className="future-film-wrapper">
                   <div className="future-film-info-div">
                        <div className="film-title">
                            <h1>Borders in Heaven</h1>
                        </div>
                        <div className="future-film-about-div">
                            <p className="future-film-about">
                                Borders in Heaven is a fish-out-of-water romantic comedy that takes place in a small village in Macedonia called Heaven. The main protagonist, Donna Lee, is a native New Yorker who is sent there to investigate an insurance scheme perpetrated by the locals.
                                <br/>
                                <br/>
                                The tranquil Macedonian countryside is a dramatic change from Donna Lee's fast-paced life in New York. The medieval village is a perfect setting for a clash of two very different ways of life, and an ideal stage for surprises, obstacles and emotional outbursts. Emotional borders and even physical ones are shattered with the help of a village patriarch, a loose-lipped mailman and a deaf and hard of hearing goat herder. A US-educated village doctor is the link between the two worlds and a catalyst for the ripples in Donna Lee's heartbeat. Magical realism through a few other local characters adds a Don Quixotesque atmosphere to the film. The more realistic aspects of the story are reminiscent of notable classics like Cinema Paradiso, Local Hero and Il Postino.
                                <br/>
                                <br/>
                                Slated for spring 2022
                                <br/>
                                <br/>
                            </p>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                             <Youtube 
                                mobile={mobile} 
                                id={"1HGMugATEMw"}
                                name={"film-video"}
                            />
                        </div>
                   </div>
               </div>
               <div className="future-film-wrapper">
                   <div className="future-film-info-div">
                        <div className="film-title">
                            <h1>The Magic Snowman Returns</h1>
                        </div>
                        <div className="future-film-about-div">
                            <p className="future-film-about">
                               In a snow covered field somewhere in the world, Lumiukko, the magic snowman, is witnessing spring. All around him are the sounds and signs of the approaching season. His friend Gustella, the Winter Wind, arrives to wake him. "He is cutting it close," says Gustella, "he cannot be here when Siroc, the Summer Wind, arrives." Away the two friends fly... looking for another part of the world where winter is in the air.
                                <br/>
                                <br/>
                                A continent away in the quaint little town of Jensenville, New England is the home of three inseparable friends: Steven Fried and Kim and Tommy Wilson. In this part of the country, Jensenville is famous for the annual Winter Festival and a big ski jumping contest held at the start of the school winter break. Unfortunately, this year the town folks are having a hard time focusing on the Winter Festival, preoccupied by the tricks of the recently arrived Serena Queen who is soon to be married to Steven's father, a local owner of a music store.
                                <br/>
                                <br/>
                            </p>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <img src={SnowmanReturns} className="snow-img"/>
                        </div>
                   </div>
               </div>
               <div className="future-film-wrapper">
                   <div className="future-film-info-div">
                        <div className="film-title">
                            <h1>Keratza</h1>
                        </div>
                        <div className="future-film-about-div">
                            <p className="future-film-about">
                               ...It is 1995 and a truck filled with her paintings stops at the Bulgarian-Macedonian Border. It is 2 am on a cold October night...
                                <br/>
                                <br/>
                                Often referred as the Frieda Kahlo of the Balkans, Keratza Visulcheva was born in 1910 in a village called Nesram, in the Aegean part of Macedonia, today part of Greece.
                                <br/>
                                <br/>
                                Her story begins as a three-year old when she flees the terror of the Ottoman Turks and with her parents settles in nearby Bulgaria where she will spend most of her adult life.
                                <br/>
                                <br/>
                                But while her travels take her all over Europe and her work is recognized by the European artistic community, she will never rest trying to keep the connection with her homeland open. Through her paintings, during happy times, and when in the midst of a depression.
                                <br/>
                                <br/>
                                “The depression threatened to destroy me.  I simply didn't want to paint any more. I started cutting my paintings. Fortunately, on one occasion, a doctor who was also an amateur painter saw my paintings and he encouraged me. I resumed my work.  I swore that I will never again reach for the paintings and that I would continue."
                                <br/>
                                <br/>
                                At the age of 85, Keratza Visulcheva bequeathed her entire artistic opus to Macedonia.
                                <br/>
                                <br/>
                            </p>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <img className="keratza-img" src={Keratza} />
                        </div>
                   </div>
               </div>
                <div className="future-film-wrapper">
                   <div className="future-film-info-div">
                        <div className="film-title">
                            <h1>Rice, Milk and Stiletos</h1>
                        </div>
                        <div className="future-film-about-div">
                            <p className="future-film-about">
                               RICE...This short film explores the traumatic effects of the Cultural Revolution on Lee Chen, who in 1951 unknowingly participated in mass murder. Chairman Mao's decrees to kill off the birds in order to increase crop yield is at first amusing to a little seven-year old girl who uses pots and pans to scare off the birds to the point that they wall dead to the ground, from the aimless exhausting flutter in the air. In 1951 there were no sparrows left in China, only mosquitoes that brought malaria and death to millions of people. The film is both a period and contemporary tale that shows the degrading nature of fascism on the human spirit.
                                <br/>
                                <br/>
                                MILK...It is the time of the goats when Marshal Tito creates Yugoslavia, on the onset of World War II. It is a country of a handful of intellectuals enamored with communism, and millions of peasants whose meager existence depends on the few farm animals they own, the most popular of them, the goat. But the communist leaders of the Eastern block, namely Stalin and Tito, need workers in the newly formed cooperatives that can be indoctrinated to become the new class.  In 1949 a law is passed that calls for the annihilation of the goats under the pretext that the animals are destroying the forests. Those who don’t kill the animals will serve jail time…
                                <br/>
                                <br/>
                                STILETOS...The Taliban prohibits women from wearing high-heeled shoes because “they attract a man’s attention” which is shameful, and a woman is stoned to death. Her nine-year old daughter watches the men, including her own father, kill her mother. Soon after, an international lawyer rescues her from Afghanistan and helps her get political asylum in the USA…
                                <br/>
                                <br/>
                            </p>
                        </div>
                   </div>
                   <div className="film-video-div">
                        <div className="film-video-wrapper">
                            <img className="rice-img" src={Rice} />
                        </div>
                   </div>
               </div>
            </div> 
        </div>    
    )

}

export default Future