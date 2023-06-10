import React from 'react';

const RepairCard = ({link, title}) => {
    return (
        <a href={link} className="repair-card">
            <p className="repair-title">
                {title}
            </p>
        </a>
    );
};

export default RepairCard;