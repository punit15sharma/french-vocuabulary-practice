const vocabulary = {
    "Seat": "Siège", "Chair": "Chaise", "Tram": "Tram", "Bus": "Bus", "Table": "Table",
    "Road": "Route", "Car": "Voiture", "Bread": "Pain", "Eggs": "oeufs", "Vegetables": "Légumes",
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
    "Half": "Moitié", "House": "Maison", "School": "École", "Teacher": "Professeur", "Student": "Étudiant",
    "Morning": "Matin", "Evening": "Soir", "Night": "Nuit", "Work": "Travail", "Office": "Bureau",
    "Market": "Marché", "Park": "Parc", "Hospital": "Hôpital", "Police": "Police", "Doctor": "Docteur",
    "Nurse": "Infirmière", "Breakfast": "Petit déjeuner", "Lunch": "Déjeuner", "Dinner": "Dîner",
    "Friend": "Ami", "Family": "Famille", "Brother": "Frère", "Sister": "Soeur", "Father": "Père",
    "Mother": "Mère", "Child": "Enfant", "Baby": "Bébé", "Window": "Fenêtre", "Kitchen": "Cuisine",
    "Bathroom": "Salle de bain", "Bedroom": "Chambre", "Living Room": "Salon", "Key": "Clé", "Wallet": "Portefeuille",
    "Money": "Argent", "Credit Card": "Carte de crédit", "Food": "Nourriture", "Drink": "Boisson", "Tea": "Thé",
    "Coffee": "Café", "Milk": "Lait", "Sugar": "Sucre", "Salt": "Sel", "Pepper": "Poivre",
    "Restaurant": "Restaurant", "Hotel": "Hôtel", "Airport": "Aéroport", "Train Station": "Gare", "Bus Stop": "Arrêt de bus",
    "Taxi": "Taxi", "Bicycle": "Vélo", "Motorcycle": "Moto", "Boat": "Bateau", "Ship": "Navire",
    "Subway": "Métro", "Library": "Bibliothèque", "Bookstore": "Librairie", "Movie": "Film", "Music": "Musique",
    "Dance": "Danse", "Song": "Chanson", "Singing": "Chanter", "Playing": "Jouer", "Running": "Courir",
    "Walking": "Marcher", "Sleeping": "Dormir", "Eating": "Manger", "Drinking": "Boire", "Cooking": "Cuisiner"
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
    } else if (languageSelect === "frenchToEnglish"){
        correctTranslation = randomWord.toLowerCase();
    }

    if (correctTranslation) {
        if (userGuess.toLowerCase() === correctTranslation.toLowerCase()) {
            if (languageSelect === "frenchToEnglish") {
                message.textContent = `Correct! The translation for "${vocabulary[randomWord]}" is "${correctTranslation}".`;
                message.style.color = "green";
            }
            else{
                message.textContent = `Correct! The translation for "${randomWord}" is "${correctTranslation}".`;
                message.style.color = "green";
            }
            correctCounter++;
            document.getElementById('correctCounter').textContent = correctCounter;
        } else {
            if (languageSelect === "frenchToEnglish") {
                message.innerHTML = `Incorrect. The correct translation for "${vocabulary[randomWord]}" is "${correctTranslation}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
                message.style.color = "red";
            }
            else{
            message.innerHTML = `Incorrect. The correct translation for "${randomWord}" is "${correctTranslation}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
            message.style.color = "red";
            }
        }
    } else {
        message.innerHTML = `Something went wrong from our side!!. The correct translation is "${randomWord}". Checkout <a href="https://github.com/punit15sharma/french-vocuabulary-practice/blob/main/French_English_Vocabulary.pdf"> this</a> `;
        message.style.color = "red";
        console.log('No matching translation found for:', randomWord);
    }

    // Reset the game after 5 seconds
    setTimeout(() => {
        resetGame();
    }, 5000);
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
