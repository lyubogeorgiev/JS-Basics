function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTimeInSeconds = firstTime + secondTime + thirdTime;

    let totalTimeInMinutes = parseInt((totalTimeInSeconds / 60).toString());
    totalTimeInSeconds = (totalTimeInSeconds % 60).toString().padStart(2, '0');

    console.log(`${totalTimeInMinutes}:${totalTimeInSeconds}`)
}

sumSeconds(["35", "45", "44"]);