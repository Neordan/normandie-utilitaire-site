import React from 'react';

const TitlePage = ({ title , image}) => {
    return (
        <div className="title">
            <img src={require(image)} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default TitlePage;