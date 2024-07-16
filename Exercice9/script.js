/**
 * checkAge - Retourne un message en fonction de la tranche d'âge
 * @arg: age - âge de la personne (int)
 * Return: message indiquant la tranche d'âge
 */
function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age <= 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

// Exemples d'utilisation
console.log(checkAge(15));   // Affiche "15:Vous êtes mineur."
console.log(checkAge(30));   // Affiche "30:Vous êtes majeur."
console.log(checkAge(75));   // Affiche "75:Vous êtes senior."


export default checkAge;
