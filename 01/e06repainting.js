function repainting(input){
    let nylonPrice = (Number(input[0]) + 2) * 1.5;
    let paintPrice = (Number(input[1]) * 1.1) * 14.50;
    let paintThinner = Number(input[2]) * 5.0;
    let laborHours = Number(input[3]);

    let materialPrice = nylonPrice + paintPrice + paintThinner + 0.40;

    let finalPrice = materialPrice + laborHours * (materialPrice * 0.3);

    console.log(finalPrice);
}