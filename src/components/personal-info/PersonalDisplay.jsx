
export default function PersonalDisplay({ personalInfo }) { 
    return (
        <div className="personal-section resume-section">
            <h3 className="name-display">{personalInfo.name}</h3>
            <div className="contact-info">
                <div className="contact-group">
                    <div className="icon-holder"></div>
                    <span className="contact-text">{personalInfo.email}</span>
                </div>
                <div className="contact-group">
                    <div className="icon-holder"></div>
                    <span className="contact-text">{personalInfo.phone}</span>
                </div>
                <div className="contact-group">
                    <div className="icon-holder"></div>
                    <span className="contact-text">{personalInfo.address}</span>
                </div>
            </div>
        </div>
    )
}