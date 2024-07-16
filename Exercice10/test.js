import printNumbers from './script.js';

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
    const numberInput = document.getElementById('numberInput').value;
    const outputDiv = document.getElementById('output');
    const result = printNumbers(parseInt(numberInput)); // Convertit l'entrée en entier et appelle printNumbers
    outputDiv.textContent = result;
});
