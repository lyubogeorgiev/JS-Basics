function calculateBraceletMoney(input){
    let dayMoney = Number(input[0]);
    let dayProfit = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let days = 5;

    let availableMoney = dayMoney * days + dayProfit * days - expenses;

    if (availableMoney >= giftPrice){
        console.log(`Profit: ${availableMoney.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        let insufficientMoney = giftPrice - availableMoney;
        console.log(`Insufficient money: ${insufficientMoney.toFixed(2)} BGN.`)
    }
}

calculateBraceletMoney(["5.12",
    "32.05",
    "15",
    "150"]);