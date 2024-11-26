import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed: npm install axios

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPhone, faEnvelope, faLock, faBuilding, faHouse, faGlobe, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

const RequestInformation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        residence: '',
        country: 'Canada',
        zip: '',
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
            // Send the form data to the backend
            const response = await axios.post('http://localhost:3000/api/request-info', formData);
            console.log("Backend response:", response.data);
            alert("Form submitted successfully!");
            navigate('/'); // Redirect to home page after successful submission
        } catch (error) {
            console.error("Failed to submit form:", error);
            alert("Failed to submit the form. Please try again.");
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Request Information</legend>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faBuilding} />
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company (Optional)"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faHouse} />
                        <label htmlFor="residence">Primary Residence</label>
                        <input
                            type="text"
                            id="residence"
                            name="residence"
                            placeholder="Primary Residence"
                            value={formData.residence}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            {/* Use the first few options for illustration; you can add all countries here */}
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faEnvelopesBulk} />
                        <label htmlFor="zip">ZIP</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="ZIP"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon className="icon" icon={faLock} />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" onClick={() => setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    password: '',
                    company: '',
                    residence: '',
                    country: 'Canada',
                    zip: '',
                })} />
            </form>
        </div>
    );
};

export default RequestInformation;
