import React from 'react';

const RepairCard = ({ link, title, cardClass }) => {
  return (
    <a href={link} className={cardClass}>
      <p className="repair-title">{title}</p>
    </a>
  );
};

export default RepairCard;