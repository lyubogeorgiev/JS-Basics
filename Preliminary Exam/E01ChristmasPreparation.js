function calculateExpenses(input){
    let wrapPaper = Number(input[0]);
    let fabric = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let priceWrapPaper = 5.80;
    let priceFabric = 7.20;
    let priceGlue = 1.20;

    let finalPriceWithoutDiscount = wrapPaper * priceWrapPaper
                        + fabric * priceFabric
                        + glue * priceGlue;

    let finalPriceWithDiscount = finalPriceWithoutDiscount * (1 - (discount / 100));

    console.log(finalPriceWithDiscount.toFixed(3));
}

calculateExpenses(["2",
    "3",
    "2.5",
    "25"]);