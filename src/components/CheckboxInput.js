import React, { useState } from 'react';

const CheckboxInput = ({ id, label, checked: initialChecked, onChange }) => {
    const [checked, setChecked] = useState(initialChecked);

    const handleInputChange = (event) => {
        const { checked } = event.target;
        setChecked(checked);
        onChange(id, checked);
    };

    return (
        <div className={`checkbox-input ${id}`}>
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={handleInputChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CheckboxInput;
