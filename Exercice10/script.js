/**
 * printNumbers - Retourne une chaîne de caractères avec tous les nombres de 1 jusqu'à n
 * @arg: n - nombre entier jusqu'auquel compter (int)
 * Return: chaîne de caractères avec les nombres de 1 à n
 */
function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i;
        if (i < n) {
            result += " ";
        }
    }
    return result;
}

export default printNumbers;

// Exemples d'utilisation
// console.log(printNumbers(5));   // Affiche "1 2 3 4 5"
// console.log(printNumbers(3));   // Affiche "1 2 3"
// console.log(printNumbers(1));   // Affiche "1"

