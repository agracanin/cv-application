import PersonalForm from "./personal-info/PersonalForm"


export default function Editor({ personalInfo, handleInput }) {
    return (
        <div className="editor">
            <PersonalForm personalInfo={personalInfo} handleInput={handleInput} />
        </div>
    )
}