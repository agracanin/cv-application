import FormInput from "../FormInput";
import { useState } from "react";

const EducationForm = ({ educationInfo, handleEducationInput, index }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

  return (

    <div className="form-wrapper">
    <div className="form-header" onClick={toggleCollapse}>
      <h2 className="form-title">Education</h2>
      <span className="dropdown-arrow">{isCollapsed ? '▼' : '▲'}</span>
    </div>

    {!isCollapsed && (
    <form className="education-form input-form">
    <FormInput
      label="School Name"
      type="text"
      name="school"
      value={educationInfo.school}
      handleChange={(e) => handleEducationInput(e, index)}
    />
    <FormInput
      label="Degree"
      type="text"
      name="degree"
      value={educationInfo.degree}
      handleChange={(e) => handleEducationInput(e, index)}
    />
    <FormInput
      label="Start Date"
      type="text"
      name="start"
      value={educationInfo.start}
      handleChange={(e) => handleEducationInput(e, index)}
    />
    <FormInput
      label="Graduation Date"
      type="text"
      name="graduation"
      value={educationInfo.graduation}
      handleChange={(e) => handleEducationInput(e, index)}
    />
    <FormInput
      label="Location"
      type="text"
      name="location"
      value={educationInfo.location}
      handleChange={(e) => handleEducationInput(e, index)}
    />
        </form>
      )}
    </div>
  );
};

export default EducationForm;