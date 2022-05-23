function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let interest = Number(input[2]);

    let finalAmount = depositAmount + depositTime * ( (depositAmount * (interest / 100)) / 12);

    console.log(finalAmount);

}

depositCalculator(["200", "3", "5.7"]);