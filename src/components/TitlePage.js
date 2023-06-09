import React from 'react';

const TitlePage = ({ title , image, alt}) => {
    return (
        <div className="title">
            <img src={(image)} alt={alt} />
            <h2>{title}</h2>
            <img src={(image)} alt={alt} />
        </div>
    );
};

export default TitlePage;