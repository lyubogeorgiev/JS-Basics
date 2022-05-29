function hairSalonTarget(input){
    let dailyTarget = Number(input[0]);
    let dailySales = 0;

    let i = 1;
    let targetReached = false;
    while (input[i] !== "closed" && targetReached === false){
        let option = input[i];
        let type = input[i + 1];

        if (option === "haircut"){
            switch (type){
                case "mens":
                    dailySales += 15;
                    break;
                case "ladies":
                    dailySales += 20;
                    break;
                case "kids":
                    dailySales += 10;
                    break;
            }
        } else if (option === "color"){
            switch (type){
                case "touch up":
                    dailySales += 20;
                    break;
                case "full color":
                    dailySales += 30;
                    break;
            }
        }

        i += 2;

        if (dailyTarget <= dailySales){
            targetReached = true;
        }
    }

    if (dailyTarget <= dailySales){
        console.log("You have reached your target for the day!")
    } else {
        console.log(`Target not reached! You need ${(dailyTarget - dailySales)}lv. more.`)
    }

    console.log(`Earned money: ${dailySales}lv.`)
}

hairSalonTarget(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"]);