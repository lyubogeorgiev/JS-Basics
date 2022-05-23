function foodDelivery(input){
    let chickenMeals = Number(input[0]) * 10.35;
    let fishMeals = Number(input[1]) * 12.40;
    let vegetarianMeals = Number(input[2]) * 8.15;

    let totalMealPrice = chickenMeals + fishMeals + vegetarianMeals;
    let desertPrice = totalMealPrice * 0.20;
    let deliveryFee = 2.5;

    let finalPrice = totalMealPrice + desertPrice + deliveryFee;

    console.log(finalPrice);
}