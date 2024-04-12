import React from 'react';
import Hero from './Main/Section1/Hero.jsx';
import Section2 from './Main/Section2/Section2.jsx';
import WhyMuayThai from './Main/Section3/WhyMuayThai.jsx';
import Section4 from './Main/Section4/Section4.jsx';
import TrainingList from './Main/Section5/TrainingList.jsx';
import Schedule from './Main/Section6/Schedule.jsx';
import TrainerList from './Main/Section7/TrainerList.jsx';
import Section8 from './Main/Section8/Section8.jsx';
import Contacts from './Main/Section9/Contacts.jsx';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const Main = () => {

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (<>
            <header>
                <Header scrollToSection={scrollToSection}/>
            </header>
            <main>
                <section>
                    <Hero alt="Hero"/>
                </section>
                <section>
                    <Section2/>
                </section>
                <section id="about">
                    <WhyMuayThai/>
                </section>
                <section id="programs">
                    {/*<Section4/>*/}
                </section>
                <section id="prices">
                    <TrainingList/>
                </section>
                <section id="schedule">
                    <Schedule/>
                </section>
                <section id="coaches">
                    {/*<TrainerList/>*/}
                </section>
                <section>
                    <Section8/>
                </section>
                <section id="contact">
                    {/*<Contacts/>*/}
                </section>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    );
};

export default Main;