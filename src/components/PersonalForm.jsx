
import '../styles/forms.css'

export default function PersonalForm() {
    return (
        <form className="personal form">
            <h2 className="form-heading">Personal Details</h2>
            <div className="input-container">
                <label className="input-title" htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" placeholder="Enter first and last name" /* data-key={fullName} value={""} */ />
            </div>
            <div className="input-container">
                <label className="input-title" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" /* data-key={fullName} value={""} */ />
            </div>
            <div className="input-container">
                <label className="input-title" htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" placeholder="Enter phone number" /* data-key={fullName} value={""} */ />
            </div>
            <div className="input-container">
                <label className="input-title" htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter address" /* data-key={fullName} value={""} */ />
            </div>
        </form>
    )
}