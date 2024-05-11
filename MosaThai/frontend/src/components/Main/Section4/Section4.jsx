import React, {useState} from 'react';
import '../../../styles/Accordion.scss';
import sec4 from '@images/prg.png';
import acc from '@images/IMG_7363.jpg';
import Title from '../../Title';
import { motion, AnimatePresence } from "framer-motion";
import TrainingList from "../Section5/TrainingList";


const Section4 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const accordionData =[
    {
      title: "baaskursus",
      content: "Alustage oma muutuste teekonda meie 6-nädalase algkursusega Muay Thai poksist! See kursus on mõeldud algajatele ja pakub põhjalikku väljaõpet Muay Thai põhitõdedes. Siin the õpite õiget seisukohta, liikumist, põhilisi lööke, jalalööke, põlvelööke ja küünarnukilööke, tagades kindla aluse. Iga nädal keskendub erinevatele tehnikatele, järk-järgult keerukust lisades. Lisame ka jõuharjutusi, et parandada teie jõudu ja vastupidavust. Treeningud toimuvad toetavas grupikeskkonnas, soodustades nii individuaalset kui ka meeskondlikku arengut. Kursus toimub kolm korda aastas: jaanuaris, mais ja septembris. Jälgige meid sotsiaalmeedias, et saada täpseid kuupäevi ja olla kursis uudistega!"
    },
    {
      title: "Advanced",
      content: "This session is for experienced fighters, focusing on advanced techniques and strategies. It includes complex combinations, counter-attacks, clinch work, advanced footwork, head movement, and defensive strategies. Intensive sparring is a key component. Conditioning aims to enhance endurance, strength, and agility."
    },
    {
      title: "Beginners",
      content: "Tailored for newcomers, this training covers the fundamentals of Muay Thai, including basic stances, punches, kicks, elbows, knee strikes, and defensive maneuvers. The focus is on coordination, balance, and fitness, with strength and flexibility exercises. Light sparring is introduced gradually."
    },
    {
      title: "Children",
      content: "Designed for young learners, this program emphasizes fun, discipline, and basic Muay Thai techniques. It includes age-appropriate drills focusing on basic strikes and defenses, fostering physical fitness, coordination, and confidence. Safety is prioritized with non-contact or light-contact exercises."
    },
    {
      title: "Personaalne treening",
      content: "Personaalne Muay Thai treening pakub kohandatud kogemust, mis on ideaalne erinevate vajaduste ja eesmärkidega inimestele. See on eriti sobiv algajatele, kes vajavad tugevat alust, samuti edasijõudnutele, kes keskenduvad oskuste lihvimisele. See formaat on samuti täiuslik neile, kes eelistavad individuaalset tähelepanu või kellel on konkreetseid eesmärke, mida nad soovivad saavutada."
    },
    {
      title: "Varustus",
      content: "Kogu treeninguks vajalik varustus on tagatud, kuid osalejad peavad kaasa võtma oma isiklikud käesidemed. Käesidemeid saab osta igast spordipoest keskmise hinnaga 15 eurot. Soovitame tungivalt kasutada ka isiklikku varustust hügieeni ja individuaalse mugavuse tagamiseks."
    }
  ];

    return (
        <div className="container section4-container">
            <div className="section4-title">
                 <Title text="Meie programmid" size="large" color="var(--White)" lineHeight="120px"/>
            </div>
            <img src={sec4} alt="section4 picture" className="section4-picture"/>
            <div className="section4-accordion-block">
                <div className="section4-accordion-picture">
                    <img src={acc} alt="accordion picture" className="acc-pic"/>
                </div>
                <div className="section4-accordion">
                  {accordionData.map((data, index) => (
                     <div className="section4-accordeon-item" key={index}>
                      <div
                        className={`accordion-title ${openIndex === index ? 'active' : ''}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        {data.title}
                      </div>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            key={index}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="accordion-content">{data.content}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
            </div>

        </div>
    )
}

export default Section4;