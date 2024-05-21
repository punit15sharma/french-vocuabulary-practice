const vocabulary = {
    "Seat": "Siège", "Chair": "Chaise", "Tram": "Tram", "Bus": "Bus", "Table": "Table",
    "Road": "Route", "Car": "Voiture", "Bread": "Pain", "Eggs": "Œufs", "Vegetables": "Légumes",
    "Fruits": "Fruits", "Shopping": "Achats", "Grocery": "Épicerie", "Phone": "Téléphone", "Haircut": "Coupe de cheveux",
    "Men": "Hommes", "Women": "Femmes", "Student": "Étudiant", "Dress": "Robe", "Water": "Eau",
    "Drinks": "Boissons", "Pay": "Payer", "Card": "Carte", "With": "Avec", "Door": "Porte",
    "Left": "Gauche", "Right": "Droite", "Down": "Bas", "Up": "Haut", "Stairs": "Escalier",
    "Lift": "Ascenseur", "Book": "Livre", "Garden": "Jardin", "Day": "Jour", "Week": "Semaine",
    "Hour": "Heure", "Minutes": "Minutes", "Second": "Seconde", "Want": "Vouloir", "Don't": "Ne pas",
    "Standing": "Debout", "Going": "Aller", "Coming": "Venir", "He": "Il", "She": "Elle",
    "I": "Je", "You": "Tu", "Indian": "Indien", "Onions": "Oignons", "Tomatoes": "Tomates",
    "Sunglasses": "Lunettes de soleil", "Bag": "Sac", "Country": "Pays", "Shoes": "Chaussures", "Socks": "Chaussettes",
    "People": "Gens", "Ticket": "Billet", "This": "Ceci", "That": "Cela", "With": "Avec",
    "Without": "Sans", "Sidewalk": "Trottoir", "Spoon": "Cuillère", "Cup": "Tasse", "Plate": "Assiette",
    "Hot": "Chaud", "Cold": "Froid", "Friends": "Amis", "Family": "Famille", "Occupation": "Métier",
    "Recreation": "Loisirs", "Dreams": "Rêves", "Games": "Jeux", "Play": "Jouer", "Cute": "Mignon",
    "Dog": "Chien", "Cat": "Chat", "Nice": "Gentil", "Anyone": "N'importe qui", "Inch": "Pouce",
    "Half": "Moitié"
};

let words = Object.keys(vocabulary);
let randomWord = words[Math.floor(Math.random() * words.length)];
let correctCounter = 0;

document.getElementById('randomWord').textContent = randomWord;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = guessInput.value.trim();
    const languageSelect = document.getElementById('languageSelect').value;

    let correctTranslation;
    if (languageSelect === "englishToFrench") {
        correctTranslation = vocabulary[randomWord];
    } else {
        correctTranslation = Object.keys(vocabulary).find(key => vocabulary[key].toLowerCase() === randomWord.toLowerCase());
    }

    if (userGuess.toLowerCase() === correctTranslation.toLowerCase()) {
        message.textContent = `Correct! The translation for "${randomWord}" is "${correctTranslation}".`;
        message.style.color = "green";
        correctCounter++;
        document.getElementById('correctCounter').textContent = correctCounter;
    } else {
        message.textContent = `Incorrect. The correct translation for "${randomWord}" is "${correctTranslation}".`;
        message.style.color = "red";
    }

    // Reset the game after 2 seconds
    setTimeout(() => {
        resetGame();
    }, 2000);
}

function resetGame() {
    const languageSelect = document.getElementById('languageSelect').value;
    randomWord = words[Math.floor(Math.random() * words.length)];

    if (languageSelect === "englishToFrench") {
        document.getElementById('randomWord').textContent = randomWord;
    } else {
        document.getElementById('randomWord').textContent = vocabulary[randomWord];
    }

    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
}
