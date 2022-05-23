function yardGreening(input){

    let sqMeters = Number(input);

    let fullPrice = sqMeters * 7.61;
    let discount = fullPrice * 0.18;
    let finalPrice = fullPrice - discount;

    // console.log(fullPrice.toFixed(2));

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);