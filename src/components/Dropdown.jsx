import React, { useState } from 'react';

export default function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
}