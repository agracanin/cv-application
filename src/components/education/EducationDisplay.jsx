
export default function EducationDisplay({educationInfo}) {
    console.log(educationInfo)
    return (
        <div className="resume-section-wrapper">
            <div className="resume-section-header">
                <h2 className="resume-section-title">Education</h2>
            </div>

            <div className="resume-section-content">
                <div className="education-info">
                    <h3 className="school-name">{educationInfo[0].school}</h3>
                    <span className="degree">{educationInfo[0].degree}</span>
                    <span className="graduation">{educationInfo[0].graduation}</span>
                    <span className="location">{educationInfo[0].location}</span>
                </div>
            </div>
        </div>
    )
}