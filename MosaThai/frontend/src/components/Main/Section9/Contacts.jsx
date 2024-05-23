import React, {useEffect, useState} from 'react';
import axios from 'axios';
import contacts_pic from '@images/contacts-pic.png';
import '../../../styles/Contacts.scss'
import Title from "../../Title";
import InfiniteMarquee from "../Section2/InfiniteMarquee";
import map from '@images/map.png';
import tick from '@images/sucsess.svg';


const Contacts = () => {
    const [contact, setContact] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        text: '',
    });
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/v1/contacts/')
            .then((response) => {
                const data = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    setContact(data[0]);
                }
            })
            .catch((error) => console.error('Error fetching data', error));
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!formData.email.match(/^\w+([\.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
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

        axios.post('http://127.0.0.1:8000/v1/feedbacks/', formData)
            .then((response) => {
                setFormData({ name: '', email: '', phone_number: '', text: '' });
                setSubmitted(true);
            })
            .catch((error) => {
                console.error('error sending data', error);
            });
    };

    return (
        <div className="container contacts-container">
            <img src={contacts_pic} className="contacts-picture"/>
            <div className="contacts-row">
                <InfiniteMarquee/>
            </div>
            <div className="contacts-wrapper">
                <Title text="Kirjuta meile" size="large" color="var(--White)" lineHeight="120px"/>
                {!submitted ? (
                    <form className="contacts-form" onSubmit={handleFormSubmit}>
                        <label className="contacts-lab" htmlFor="name-input">Nimi</label>
                        <input
                            type="text"
                            id="name-input"
                            className="input-contacts"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <label className={emailError ? 'invalid_contacts-lab': "contacts-lab"} htmlFor="email-input">Email*</label>
                        <input
                            type="text"
                            id="email-input"
                            value={formData.email}
                            className={emailError ? 'invalid-input' : 'input-contacts'}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                        <label className={phoneError ? 'invalid_contacts-lab': "contacts-lab"} htmlFor="phone-input">Telefoni number*</label>
                        <input
                            type="text"
                            id="phone-input"
                            value={formData.phone_number}
                            className={phoneError ? 'invalid-input' : 'input-contacts'}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        />
                        {phoneError && <p className="error-message">{phoneError}</p>}
                        <label className="contacts-lab" htmlFor="textarea1">Message</label>
                        <textarea
                            value={formData.text}
                            id="textarea1"
                            className="input-contacts"
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        />
                        <button type="submit">Contact us</button>
                    </form>
                ) : (
                    <div className="contacts-submitted-form">
                        <div className="contacts-submitted-form-title">Täname tagasiside eest!</div>
                        <div className="contacts-submitted-form-img">
                            <img src={tick} alt="Success tick" className="submitted-form-img"/>
                        </div>
                    </div>
                )}
                {contact && (
                    <div className="contacts-data-container">
                        <div className="contacts-map">
                            <img src={map} className="contacts-map-pic" />
                        </div>
                        <div className="contacts-data">
                            <label className="contacts-title">Kontaktid</label>
                            <p className="contacts-p">{contact.company_name}</p>
                            <p className="contacts-p">{contact.account_number}</p>
                            <p className="contacts-p">{contact.address}</p>
                            <p className="contacts-p" id="phone_number"><a href={`tel:${contact.phone_number1}`}>{contact.phone_number1}</a></p>
                            <p className="contacts-p" id="phone_number"><a href={`tel:${contact.phone_number2}`}>{contact.phone_number2}</a></p>
                            <p className="contacts-p"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                            <p className="contacts-p">{contact.registration_number}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contacts;