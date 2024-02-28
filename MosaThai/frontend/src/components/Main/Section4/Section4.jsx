import React, {useState} from 'react';
import '../../../styles/Accordion.scss';
import sec4 from '@images/prg.png';
import acc from '@images/accordion-pic.png';
import Title from '../../Title';
import { motion, AnimatePresence } from "framer-motion";


const Section4 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const accordionData =[
    {
      title: "Basic Course 6-weeks",
      content: "Embark on a transformative journey with our Basic 6-Week Muay Thai Course! Designed for beginners, this program offers comprehensive training in Muay Thai fundamentals. You’ll learn proper stance, footwork, basic punches, kicks, knees, and elbow strikes, ensuring a solid foundation. Each week focuses on different techniques, gradually advancing in complexity. We also incorporate conditioning exercises to improve your strength and endurance. Classes are held in a supportive, group environment, fostering both individual and team growth. This course runs three times a year in January, May, and September. Follow us on social media for the exact dates and to stay updated!"
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
      title: "Personal training",
      content: "Personal Muay Thai training offers a bespoke experience, ideal for individuals with varying needs and goals. It’s especially suitable for beginners who need a strong foundational base, as well as advanced practitioners focusing on skill refinement. This format is also perfect for those who prefer one-on-one attention or have specific objectives they wish to achieve."
    },
    {
      title: "Equipment",
      content: "All equipment for the training is provided, but participants are required to bring their personal hand wraps. Hand wraps can be purchased at any sports store for an average price of €15. \n" +
          "We also highly recommend to have personal equipment  for hygiene and individual comfort."
    }
  ];

    return (
        <div className="container section4-container">
            <div className="section4-title">
                 <Title text="Our programs" size="large" color="var(--White)" lineHeight="120px"/>
            </div>
            <img src={sec4} alt="section4 picture" className="section4-picture"/>
            <div className="section4-accordion-block">
                <div className="section4-accordion-picture">
                    <img src={acc} alt="accordion picture"/>
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