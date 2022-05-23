function basketballEquipment(input){
    let yearlySubscription = Number(input);

    let shoes = yearlySubscription * 0.6;
    let clothes = shoes * 0.8;
    let ball = clothes * 0.25;
    let accessories = ball * 0.2;

    let finalPrice = yearlySubscription + shoes + clothes + ball + accessories;

    console.log(finalPrice);
}

basketballEquipment(["365"]);