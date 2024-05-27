import PersonalDisplay from "./personal-info/PersonalDisplay";

export default function Resume({ personalInfo }) {
    return (
        <div className="resume">
            <PersonalDisplay personalInfo={personalInfo}/>
        </div>
    )
}