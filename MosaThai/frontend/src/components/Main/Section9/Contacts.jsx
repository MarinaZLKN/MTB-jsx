import React, { useEffect, useState } from 'react';
import axios from 'axios';
import contacts_pic from '@images/contacts-pic.png';
import '../../../styles/Contacts.scss'
import Title from "../../Title";
import InfiniteMarquee from "../Section2/InfiniteMarquee";
import map from '@images/map.png'


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

        if (!formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            setEmailError("Invalid email format");
            return;
        } else {
            setEmailError(null);
        }


        if (!formData.phone_number.match(/^\+?\d+(\s?\d+)*$/))  {
            setPhoneError("Phone number must contain only digits and may start with +");
            return;
        } else {
            setPhoneError(null);
        }


        axios.post('http://127.0.0.1:8000/v1/feedbacks/', formData)
            .then((response) => {
                console.log('Data sent to server', response.data);
                setFormData({ name: '', email: '', phone_number: '', text: '' });
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
                <Title text="Contact us" size="large" color="var(--White)" lineHeight="120px"/>
                <form className="contacts-form" onSubmit={handleFormSubmit}>
                    <label className="contacts-lab">Name</label>
                    <input
                        type="text"
                        className="input-contacts"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <label className={emailError ? 'invalid_contacts-lab': "contacts-lab"}>Email*</label>
                    <input
                        type="text"
                        value={formData.email}
                        className={emailError ? 'invalid-input' : 'input-contacts'}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                     {emailError && <p className="error-message">{emailError}</p>}
                    <label className={phoneError ? 'invalid_contacts-lab': "contacts-lab"}>Phone number*</label>
                    <input
                        type="text"
                        value={formData.phone_number}
                        className={phoneError ? 'invalid-input' : 'input-contacts'}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
                    {phoneError && <p className="error-message">{phoneError}</p>}
                    <label className="contacts-lab">Message</label>
                    <textarea
                        value={formData.text}
                        id="textarea1"
                        className="input-contacts"
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                    <button type="submit">Contact us</button>
                </form>
                {contact && (
                    <div className="contacts-data-container">
                        <div className="contacts-map">
                            <img src={map} className="contacts-map-pic" />
                        </div>
                        <div className="contacts-data">
                            <label className="contacts-title">Contact</label>
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
