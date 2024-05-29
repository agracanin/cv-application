import PersonalForm from "./personal-info/PersonalForm"
import EducationForm from "./education/EducationForm"


const Editor = ({ personalInfo, handlePersonalInput, educationInfo, addEducation }) => {
    return (
      <div className="editor">
        <PersonalForm personalInfo={personalInfo} handlePersonalInput={handlePersonalInput} />
          <EducationForm
            educationInfo={educationInfo}
            handleEducation={addEducation}
          />
      </div>
    );
  };
  
  export default Editor;