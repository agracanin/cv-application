import FormInput from "../FormInput";
import { useState } from "react";

const EducationForm = ({ educationInfo, handleEducation }) => {
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
    />
    <FormInput
      label="Degree"
      type="text"
      name="degree"
      value={educationInfo.degree}
    />
    <FormInput
      label="Start Date"
      type="text"
      name="start"
      value={educationInfo.start}
    />
    <FormInput
      label="Graduation Date"
      type="text"
      name="graduation"
      value={educationInfo.graduation}
    />
    <FormInput
      label="Location"
      type="text"
      name="location"
      value={educationInfo.location}
    />

    <button className="add-btn" onClick={handleEducation}>Add</button>
        </form>
      )}
    </div>
  );
};

export default EducationForm;