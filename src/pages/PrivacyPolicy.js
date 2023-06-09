import React from 'react';
import Logo from '../components/Logo';
import TitlePage from '../components/TitlePage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="politique de confidentialité" image={require('../assets/img/icons/politique-de-confidentialite.png')} alt="Icône d'un contrat" />
            <div className="privacy-policy">
                <p>
                    Dernière mise à jour : [date de la dernière mise à jour]
                </p>
                <p>
                    Nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre site web [URL du site] (ci-après dénommé "le site") et les services associés.
                </p>
                <h5>
                    Collecte d'informations personnelles :
                </h5>
                <p>
                    Nous pouvons collecter les informations personnelles que vous nous fournissez volontairement lorsque vous utilisez notre site ou lorsque vous communiquez avec nous par e-mail ou par d'autres moyens de communication. Les informations personnelles que nous collectons peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse postale, ainsi que d'autres informations nécessaires pour vous fournir les services demandés.
                </p>
                <h5>
                    Utilisation des informations collectées :
                </h5>
                <p>
                    Nous utilisons les informations collectées pour vous fournir les services demandés, pour gérer et améliorer notre site, pour répondre à vos demandes, pour communiquer avec vous, pour personnaliser votre expérience utilisateur, pour vous envoyer des informations promotionnelles ou des newsletters si vous avez consenti à les recevoir, et pour d'autres finalités légitimes liées à notre activité.
                </p>
                <h5>
                    Divulgation des informations collectées :
                </h5>
                <p>
                    Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants :
                    <ul>
                        <li>Si vous avez donné votre consentement exprès pour le partage de vos informations ;</li>
                        <li>Si cela est nécessaire pour fournir les services demandés ;</li>
                        <li>Si nous sommes tenus de le faire par la loi, une autorité gouvernementale ou une décision de justice ;</li>
                        <li>Si cela est nécessaire pour protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs ou du public ;</li>
                        <li>Si cela est nécessaire dans le cadre d'une transaction commerciale, telle qu'une fusion, une acquisition ou une vente d'actifs.</li>
                    </ul>
                </p>
                <h5>
                    Protection des informations :
                </h5>
                <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction. Cependant, veuillez noter qu'aucune méthode de transmission ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir la sécurité absolue de vos informations.
                </p>
                <h5>
                    Vos droits :
                </h5>
                <p>
                    Vous avez le droit d'accéder à vos informations personnelles, de les corriger, de les supprimer ou de limiter leur traitement. Vous avez également le droit de vous opposer au traitement de vos informations personnelles pour des motifs légitimes. Pour exercer vos droits ou pour toute question concernant notre politique de confidentialité, veuillez nous contacter aux coordonnées fournies ci-dessous.
                </p>
                <h5>
                    Cookies :
                </h5>
                <p>
                    Notre site peut utiliser des cookies et des technologies similaires pour améliorer votre expérience de navigation. Pour plus d'informations sur l'utilisation des cookies et sur la manière de les gérer, veuillez consulter notre politique en matière de cookies.
                </p>
                <h5>
                    Liens vers des sites tiers :
                </h5>
                <p>
                    Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites. Veuillez lire les politiques de confidentialité de ces sites avant de soumettre vos informations personnelles.
                </p>
                <h5>
                    Modifications de la politique de confidentialité :
                </h5>
                <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera affichée sur cette page avec la date de la dernière mise à jour. Nous vous encourageons à consulter régulièrement cette politique pour prendre connaissance des éventuelles modifications.
                </p>
                <h5>
                    Coordonnées :
                </h5>
                <p>
                    Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de confidentialité, veuillez nous contacter aux coordonnées suivantes :
                    Normandie Utilitaire, 31 rue Jacquard, 76300 Sooteville-les-Rouen [Adresse e-mail de contact] [Numéro de téléphone de contact]
                    Nous nous efforcerons de répondre à vos demandes dans les meilleurs délais et de résoudre toute préoccupation liée à la confidentialité de vos informations.
                    En utilisant notre site ou en nous fournissant vos informations personnelles, vous consentez à la collecte, à l'utilisation et à la divulgation de vos informations conformément à cette politique de confidentialité.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;