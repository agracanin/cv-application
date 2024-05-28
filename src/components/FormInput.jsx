

export default function FormInput({ label, type, name, value, handleChange }) {
    return (
      <div className="input-group">
        <label htmlFor={name}>{label}:</label>
        <input
          className="single-input"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }