import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';

const LegalNotice = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="mentions légales" image={require('../assets/img/icons/info.png')} alt="Icône information" />
            <div className="legal-notice">
                <p>
                    Le présent site web est édité par <span>NORMANDIE UTILITAIRE</span>, une société enregistrée au [Registre du Commerce et des Sociétés] sous le numéro [numéro d'enregistrement], dont le siège social est situé au <span>31 rue Jacquard, 76300 Sotteville-les-Rouen</span>.
                    Adresse e-mail : <span>[adresse e-mail de contact]</span>
                    Numéro de téléphone : <span>[numéro de téléphone de contact]</span>
                </p>
                <h5>
                    Hébergeur du site :
                </h5>
                <div className="lodging">
                    <p>[Nom de l'hébergeur]</p>
                    <p>[Adresse de l'hébergeur]</p>
                    <p>[Téléphone de l'hébergeur]</p>
                    <p>[E-mail de l'hébergeur]</p>
                </div>
                <h5>
                    Propriété intellectuelle :
                </h5>
                <p>
                    Tous les contenus présents sur ce site, y compris, mais sans s'y limiter, les textes, les graphiques, les logos, les images, les vidéos, les sons, les marques et les icônes, ainsi que leur mise en page, sont la propriété exclusive de Normandie Utilitaire ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle. Toute utilisation, reproduction, modification, distribution ou représentation de ces éléments sans l'autorisation préalable écrite de Normandie Utilitaire est strictement interdite.
                </p>
                <h5>
                    Données personnelles :
                </h5>
                <p>
                    Les données personnelles collectées sur ce site sont traitées conformément à notre politique de confidentialité, disponible à l'adresse suivante : <a href="./PrivacyPolicy">Lien vers notre politique de confidentialité</a>.
                </p>
                <h5>
                    Cookies :
                </h5>
                <p>
                    Ce site utilise des cookies pour améliorer l'expérience de navigation des utilisateurs. Pour en savoir plus sur l'utilisation des cookies et la manière de les gérer, veuillez consulter notre politique en matière de cookies, disponible à l'adresse suivante : [lien vers la politique en matière de cookies].
                </p>
                <h5>
                    Liens externes :
                </h5>
                <p>
                    Ce site peut contenir des liens vers des sites web tiers. Normandie Utilitaire ne peut être tenu responsable du contenu de ces sites web tiers ou des dommages ou pertes pouvant résulter de l'utilisation de ces sites web.
                </p>
                <h5>
                    Limitation de responsabilité :
                </h5>
                <p>
                    Normandie Utilitaire s'efforce de s'assurer que les informations affichées sur ce site sont correctes et à jour. Normandie Utilitaire se réserve le droit de corriger le contenu de ce site à tout moment et sans préavis. Toutefois, Normandie Utilitaire ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. Normandie Utilitaire décline toute responsabilité pour toute imprécision, inexactitude ou omission relative aux informations disponibles sur ce site. Normandie Utilitaire ne peut être tenu responsable des dommages directs ou indirects, quels qu'ils soient, résultant de l'utilisation de ce site.
                </p>
                <h5>
                    Droit applicable :
                </h5>
                <p>
                    Le présent site web est régi par le droit français.
                </p>
                <p>
                    Date de dernière mise à jour des mentions légales : [date de la dernière mise à jour]
                </p>
            </div>
        </div>
    );
};

export default LegalNotice;