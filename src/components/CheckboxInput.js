import React from 'react';

const CheckboxInput = ({ id, label, checked, onChange }) => {
    const checkboxClass = `checkbox-input ${id}`;
    return (
        <div className={checkboxClass}>
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CheckboxInput;