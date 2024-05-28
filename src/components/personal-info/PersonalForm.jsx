import React, { useState } from 'react';
import FormInput from '../FormInput';

const PersonalForm = ({ personalInfo, handlePersonalInput }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-wrapper">
      <div className="form-header" onClick={toggleCollapse}>
        <h2 className="form-title">Personal Details</h2>
        <span className="dropdown-arrow">{isCollapsed ? '▼' : '▲'}</span>
      </div>
      {!isCollapsed && (
        <form className="personal-form input-form">
          <FormInput
            label="Name"
            type="text"
            name="name"
            value={personalInfo.name}
            handleChange={handlePersonalInput}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={personalInfo.email}
            handleChange={handlePersonalInput}
          />
          <FormInput
            label="Phone"
            type="tel"
            name="phone"
            value={personalInfo.phone}
            handleChange={handlePersonalInput}
          />
          <FormInput
            label="Address"
            type="text"
            name="address"
            value={personalInfo.address}
            handleChange={handlePersonalInput}
          />
        </form>
      )}
    </div>
  );
};

export default PersonalForm;