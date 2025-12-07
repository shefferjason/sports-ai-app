
function runLogic() {
    const output = document.getElementById('output');

    // Placeholder logic – you can replace this with your real model later
    const predictions = [
        "Miami covers the spread 🔥",
        "Heat win by 6+",
        "Achane over 83 yards",
        "James Cook over receptions",
        "Timberwolves under total points",
        "Celtics win outright"
    ];

    const pick = predictions[Math.floor(Math.random() * predictions.length)];

    output.innerHTML = "<b>Prediction:</b> " + pick;
}