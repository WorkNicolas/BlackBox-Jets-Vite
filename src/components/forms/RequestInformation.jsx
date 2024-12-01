import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faPhone,
  faEnvelope,
  faLock,
  faBuilding,
  faHouse,
  faGlobe,
  faEnvelopesBulk,
} from '@fortawesome/free-solid-svg-icons';

const RequestInformation = ({ isModalOpen, closeModal }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    closeModal(); // Close modal after submission
  };

  const resetForm = () => {
    setFormData({
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
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={closeModal}>
          ×
        </button>
        <h2 className="form-heading">Get in Touch!</h2>
        <form className="request-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Request Information</legend>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faCircleInfo} />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faCircleInfo} />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faBuilding} />
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FontAwesomeIcon className="icon" icon={faLock} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="reset" className="reset-btn" onClick={resetForm}>
                Reset
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RequestInformation;
