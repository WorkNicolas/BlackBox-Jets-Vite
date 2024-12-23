//React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../apiClient';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        try {
            // Send data to the backend
            const response = await apiClient.post('/register', formData);
            console.log('Backend response:', response.data);
    
            // Navigate to the homepage or another page on success
            navigate('/'); // Adjust route as needed
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Registration Form</legend>
                    <div class="block">
                        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                        <label for="name"></label>
                        <input type="text" id="name" name="name" placeholder="Name" />
                    </div>
                    <div class="block">
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                        <label for="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" />
                    </div>
                    <div class="block">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        <label for="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faLock} />
                        <label for="password"></label>
                        <input type="text" id="password" name="password" placeholder="Password" />
                    </div>
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default Register;