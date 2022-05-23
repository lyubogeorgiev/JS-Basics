function greaterNumber(input){
    let firstNumber = input[0];
    let secondNumber = input[1];

    let greaterNumber;

    if (firstNumber > secondNumber){
        greaterNumber = firstNumber;
    } else {
        greaterNumber = secondNumber;
    }

    console.log(greaterNumber);
}

greaterNumber(["3", "5"]);