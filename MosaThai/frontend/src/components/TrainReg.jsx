import React, {useState} from 'react';
import './../styles/TrainReg.scss';
import trainreg from '@images/img.png';
import close from '@images/img_1.png';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import axios from 'axios';
import tick from '@images/sucsess.svg';


const TrainReg = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        phone_number: '',
        email: '',
        parent_name: '',
        level: 'beginner'
    });
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [ageError, setAgeError] = useState(null);
    const [parentNameError, setParentNameError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email.match(/^\w+([\.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            setEmailError("Invalid email format");
            return;
        } else {
            setEmailError(null);
        }

        if (!formData.phone_number.match(/^\+?\d+(\s?\d+)*$/)) {
            setPhoneError("Phone number must contain only digits and may start with +");
            return;
        } else {
            setPhoneError(null);
        }

        if (formData.level === 'child') {
            if (formData.age < 4) {
                setAgeError("Age must be at least 4 for child registration");
                return;
            } else {
                setAgeError(null);
            }

            if (formData.parent_name.trim() === '') {
                setParentNameError("Parent name is required for child registration");
                return;
            } else {
                setParentNameError(null);
            }
        }

        axios.post('http://127.0.0.1:8000/v1/registrations/', formData)
            .then((response) => {
                console.log('Data sent to server', response.data);
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    parent_name: '',
                    level: 'beginner',
                    age: 0,
                });
            })
            .catch((error) => {
                console.error('error sending data', error);
            });

        setFormData({
            name: '',
            age: 0,
            phone_number: '',
            email: '',
            parent_name: '',
            level: 'beginner'
        });
    };
    //TODO check the css for invalid messages

    return (
        <>
            <div className="container train_reg-container">
                <div className="train-pic">
                    <img src={trainreg} className="train_reg-img" alt="Train registration"/>
                    <Link to="/">
                        <img src={close} className="train_reg-close" alt="Close"/>
                    </Link>
                </div>
                {!submitted ? (
                    <div className="train-reg-wrapper">
                        <label className="train-reg-title">Start your <label id="train-reg-title-yellow">journey</label></label>
                        <form className="train-reg-form" onSubmit={handleSubmit}>
                            <div>
                                <label className="train-reg-lab">Name</label>
                                <input className="input-train-reg" type="text" name="name" value={formData.name}
                                       onChange={handleChange}
                                       required/>
                            </div>
                            <div>
                                <label className="train-reg-lab">Level</label>
                                <select className="input-train-reg" name="level" value={formData.level}
                                        onChange={handleChange}>
                                    <option value="advanced">Advanced</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="child">Child</option>
                                    <option value="basic-course">Basic Course</option>
                                </select>
                            </div>
                            <div>
                                <label className={phoneError ? 'invalid_contacts-lab' : "train-reg-lab"}>Phone Number*</label>
                                <input className={phoneError ? 'invalid-input' : "input-train-reg"} type="tel" name="phone_number"
                                       value={formData.phone_number}
                                       onChange={handleChange} required/>
                                {phoneError && <p className="error-message">{phoneError}</p>}
                            </div>
                            <div>
                                <label className={emailError ? 'invalid_contacts-lab' : "train-reg-lab"}>Email*</label>
                                <input className={emailError ? 'invalid-input' : "input-train-reg"} type="email" name="email" value={formData.email}
                                       onChange={handleChange} required/>
                                {emailError && <p className="error-message">{emailError}</p>}
                            </div>
                            {formData.level === 'child' && (
                                <>
                                    <div>
                                        <label className={ageError ? 'invalid_contacts-lab' : "train-reg-lab"}>Age</label>
                                        <input className={ageError ? 'invalid-input' : "input-train-reg"} type="number" name="age" value={formData.age}
                                               onChange={handleChange} required/>
                                        {ageError && <p className="error-message">{ageError}</p>}
                                    </div>
                                    <div>
                                        <label className={parentNameError ? 'invalid_contacts-lab' : "train-reg-lab"}>Parent Name</label>
                                        <input className={parentNameError ? 'invalid-input' : "input-train-reg"} type="text" name="parent_name"
                                               value={formData.parent_name}
                                               onChange={handleChange} required/>
                                        {parentNameError && <p className="error-message">{parentNameError}</p>}
                                    </div>
                                </>
                            )}
                            <div className="train-btn">
                                <button id="train-reg_btn" type="submit">Join us</button>
                            </div>

                        </form>
                    </div>) : (
                    <div className="train-reg-wrapper_sent">
                        <label className="train-reg-title">You are scheduled!</label>
                        <div className="train-reg-wrapper_sent-container">
                            <img src={tick} alt="scheduled" className="train-reg-wrapper_sent-svg"/>
                            <div className="train-reg-wrapper_sent-text"> Thanks for your registration! See you at the
                                training! :)
                            </div>
                            <Link to="/">
                                <button> back to page</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default TrainReg;
