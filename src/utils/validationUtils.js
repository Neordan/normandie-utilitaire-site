// Fonction de validation de l'email
// Fonction de validation de l'email
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Fonction de validation du numéro de téléphone
  export function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^0[1-9]\d{8}$/;
    return phoneRegex.test(phoneNumber);
  }
  
  // Exemple d'utilisation
  const email = 'test@example.com';
  const phoneNumber = '0123456789';
  
  if (validateEmail(email)) {
    console.log('Email valide');
  } else {
    console.log('Email invalide');
  }
  
  if (validatePhoneNumber(phoneNumber)) {
    console.log('Numéro de téléphone valide');
  } else {
    console.log('Numéro de téléphone invalide');
  }
  