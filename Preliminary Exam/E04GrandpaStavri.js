function rakiaMaking(input){
    let days = Number(input[0]);

    let rakiaAmount = 0;
    let totalDegrees = 0;

    for (let i = 1; i <= days * 2 ; i += 2) {
        rakiaAmount += Number(input[i]);
        totalDegrees += Number(input[i + 1]) * Number(input[i]);
    }

    let averageDegree = totalDegrees / rakiaAmount;

    let rakiaQuality = "";

    if (averageDegree < 38){
        rakiaQuality = "Not good, you should baking!"
    } else if (averageDegree <= 42){
        rakiaQuality = "Super!";
    } else {
        rakiaQuality = "Dilution with distilled water!";
    }
    console.log(`Liter: ${rakiaAmount.toFixed(2)}`);
    console.log(`Degrees: ${averageDegree.toFixed(2)}`);
    console.log(rakiaQuality);
}

rakiaMaking(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);