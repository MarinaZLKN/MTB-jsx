import React, {useState} from 'react';
import '../../../styles/WhyMuayThai.scss';
import wmt from '@images/whymuaythai.png';
import CustomPrevButton from './CustomPrevButton.jsx';
import CustomNextButton from './CustomNextButton.jsx';


const WhyMuayThai = () => {
    const [showFirstText, setShowFirstText] = useState(true);

    const text1 = (
        <>
            Muay Thai, known as Thai boxing, provides a multitude of <b style={{ textTransform: 'uppercase' }}>physical</b> benefits. It serves as a
            comprehensive full-body workout that extensively engages the arms, legs, and core, ensuring a well-rounded
            exercise regimen.
            <br/><br/>
            The intensity of Muay Thai training significantly enhances cardiovascular conditioning, boosting heart
            health and endurance.
            <br/><br/>
            For those looking to lose weight and tone their muscles, Muay Thai is an effective method, burning calories
            and building muscle simultaneously. It also sharpens coordination and agility, essential for the quick
            movements and reactions required in the sport.
            <br/><br/>
            Beyond physical fitness, Muay Thai teaches effective striking techniques, making it a practical skill for
            self-defense.
        </>
    );

    const text2 = (
        <>
            On the <b style={{ textTransform: 'uppercase' }}>spiritual</b> front, Muay Thai offers significant benefits as well. The rigorous physical activity
            involved is an excellent stress reliever, helping practitioners clear their minds and release tension.
            <br/><br/>
            Muay Thai requires a high level of discipline and focus, which over time, enhances these qualities in its
            practitioners. As skills improve, there’s a noticeable boost in self-confidence, stemming from both physical
            improvement and the acquisition of self-defense skills. The need for concentration during training promotes
            mindfulness and present moment awareness, key components for mental well-being.
            <br/><br/>
            Additionally, being part of a Muay Thai class or gym often leads to community building and social
            interaction, offering a supportive environment for personal growth.
        </>
    );

    const goToNextText = () => {
        setShowFirstText(false);
    };

    const goToPrevText = () => {
        setShowFirstText(true);
    };


    return (
        <div className="container wmt-container">
            <div className="wmt-picture-block">
                <img src={wmt} alt="Why Muay Thai" className="wmt-picture"/>
            </div>
            <div className="wmt-info-block">
                <h2 className="wmy-title">Why Muay Thai</h2>
                <div className="wmt-text">
                    {showFirstText ? text1 : text2}
                </div>
                <div className="arrow-container">
                    <CustomPrevButton onClick={goToPrevText}/>
                    <CustomNextButton onClick={goToNextText}/>
                </div>
                {/*<button onClick={toggleText}>Переключить </button>*/}
            </div>
        </div>
    )
}

export default WhyMuayThai;
