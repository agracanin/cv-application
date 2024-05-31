import PersonalDisplay from "./personal-info/PersonalDisplay";
import EducationDisplay from "./education/EducationDisplay";

export default function Resume({ personalInfo, educationInfo}) {
    return (
        <div className="resume">
            <PersonalDisplay personalInfo={personalInfo}/>
            <EducationDisplay educationInfo={educationInfo}/>
        </div>
    )
}