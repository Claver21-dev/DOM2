
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner les éléments HTML
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Écouter le clic sur le bouton
    changeColorBtn.addEventListener("click", function() {

        // Changer la couleur de la boîte
        colorBox.style.backgroundColor = getRandomColor();

    });

});
