import PersonalForm from "./personal-info/PersonalForm"
import EducationForm from "./education/EducationForm"


const Editor = ({ personalInfo, handlePersonalInput, educationInfo, handleEducationInput }) => {
    return (
      <div className="editor">
        <PersonalForm personalInfo={personalInfo} handlePersonalInput={handlePersonalInput} />
        {educationInfo.map((edu, index) => (
          <EducationForm
            key={index}
            educationInfo={edu}
            handleEducationInput={handleEducationInput}
            index={index}
          />
        ))}
      </div>
    );
  };
  
  export default Editor;