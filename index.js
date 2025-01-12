function rollDice() {
    const numOfDiceInput = document.getElementById("numOfDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const numOfDice = Math.min(numOfDiceInput.value || 1, 36);

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="media/dice-six-faces-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

    document.getElementById("numOfDice").addEventListener("blur", function () {
        if (this.value > 36) {
            alert("The maximum number of dice is 36.");
            this.value = 36;
        }
        if (this.value < 1) {
            alert("The minimum number of dice is 1.");
            this.value = 1;
        }
    });

}

function clearDice() {
    document.getElementById("diceResult").textContent = "";
    document.getElementById("diceImages").innerHTML = "";
    document.getElementById("numOfDice").value = 6;
}