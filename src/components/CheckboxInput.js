import React from 'react';

const CheckboxInput = ({ idRelation, label, imageSrc, id, alt, checked, onChange }) => {
    return (
        <div>
            <label htmlFor={idRelation}>
                <img src={imageSrc} alt={alt} />
                {label}
            </label>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default CheckboxInput;
