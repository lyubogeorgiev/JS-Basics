function calculateArea(input){
    let type = input[0];

    let area = 0.0;

    if (type === "square"){
        area = input[1] * input[1];
    } else if (type === "rectangle"){
        area = input[1] * input[2];
    } else if (type === "circle"){
        area = Math.PI * (input[1] * input[1]);
    } else if (type === "triangle"){
        area = input[1] * input[2] / 2;
    }

    console.log(area.toFixed(3));
}

calculateArea(["circle", "6"]);