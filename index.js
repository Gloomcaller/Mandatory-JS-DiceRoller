function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResoult = document.getElementById("diceResoult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="media/${value}.png" alt="Dice ${value}">`);
    }
    diceResoult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}