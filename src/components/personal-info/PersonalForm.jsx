

export default function PersonalForm({ personalInfo, handleInput }) {
    return (
        <form className="personal-form input-form">
            <h2 className="form-title">Personal Details</h2>

            <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input 
                className="single-input" 
                type="text" 
                id="name" 
                name="name" 
                value={personalInfo.name}
                onChange={handleInput}
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input 
                className="single-input" 
                type="email" 
                id="email" 
                name="email" 
                value={personalInfo.email}
                onChange={handleInput}
                />
            </div>

            <div className="input-group">
                <label htmlFor="phone">Phone:</label>
                <input 
                className="single-input" 
                type="tel" 
                id="phone" 
                name="phone" 
                value={personalInfo.phone}
                onChange={handleInput}
                />
            </div>

            <div className="input-group">
                <label htmlFor="address">Address:</label>
                <input className="single-input" 
                type="text" 
                id="address" 
                name="address" 
                value={personalInfo.address}
                onChange={handleInput}
                />
            </div>
        </form>
    )
}