import React from 'react';

const CheckboxInput = ({ label, imageSrc, alt, checked, onChange }) => {
    return (
        <div>
            <label>
                <img src={imageSrc} alt={alt} />
                {label}
            </label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default CheckboxInput;
