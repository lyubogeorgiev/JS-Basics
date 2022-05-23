function evenOrOdd(input){
    let number = input[0];
    let result = "";

    if (number % 2 === 0){
        result = "even";
    } else {
        result = "odd";
    }

    console.log(result);
}

evenOrOdd(["2"]);