import React from 'react';

const Description = () => {
    return (
        <div className="description">
            <div className="title-container">
                <h1>Découvrez Normandie Utilisataire :</h1>
                <p>
                    votre partenaire incontournable pour des services de qualité et une expérience client exceptionnelle.
                </p>
            </div>
            <h3>
                Chez Normandie Utilisataire, nous sommes à votre écoute.
            </h3>
            <p>
                Nous comprenons vos besoins spécifiques et mettons tout en œuvre pour les dépasser.
            </p>
            <p>
                Notre équipe expérimentée veille à la fiabilité absolue de nos produits et services, afin que vous puissiez vous concentrer sur ce qui compte vraiment.
            </p>
            <img src={require("../assets/img/phothgarage.jpg")} alt="Photo de garage" />
            <h3>
                Faites confiance à nos experts en mécanique pour prendre soin de vos véhicules utilitaires.
            </h3>
            <p>
                Nous vous offrons une tranquillité d'esprit totale.
            </p>
            <h3>
                Ne cherchez plus ailleurs !
            </h3>
            <p>
                Que vous ayez besoin de mécaniciens fiables pour vos véhicules utilitaires ou d'une location sans souci, Normandie Utilisataire est là pour vous.
            </p>
            <p>
                Découvrez une expérience client hors pair, une expertise inégalée et une approche centrée sur votre satisfaction.
            </p>
        </div>
    );
};

export default Description;