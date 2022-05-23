function suppliesForSchool(input){
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let chemical = Number(input[2]) * 1.20;
    let percentDiscount = Number(input[3]);

    let price = (pens + markers + chemical)*((100 - percentDiscount) / 100);

    console.log(price);
}