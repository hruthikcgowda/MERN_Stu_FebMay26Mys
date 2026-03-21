const emojis = ["😀", "😀", "🚀", "🚀", "🎯", "🎯"];
let shuffled = emojis.sort(() => 0.5 - Math.random());

const board = document.getElementById("game-board");

let firstCard = null;
let secondCard = null;

shuffled.forEach((emoji) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = "";

    div.dataset.value = emoji;

    div.addEventListener("click", () => {
        if (div.classList.contains("flipped") || secondCard) return;

        div.textContent = emoji;
        div.classList.add("flipped");

        if (!firstCard) {
            firstCard = div;
        } else {
            secondCard = div;

            if (firstCard.dataset.value === secondCard.dataset.value) {
                firstCard = null;
                secondCard = null;
            } else {
                setTimeout(() => {
                    firstCard.textContent = "";
                    secondCard.textContent = "";

                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");

                    firstCard = null;
                    secondCard = null;
                }, 800);
            }
        }
    });

    board.appendChild(div);
});