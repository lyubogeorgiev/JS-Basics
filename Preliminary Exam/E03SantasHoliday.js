function calculateVacationPrice(input){
    let days = Number(input[0]) - 1;
    let roomType = input[1];
    let rating = input[2];

    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let totalVacationPrice = 0;

    if (roomType === "room for one person"){

        totalVacationPrice = days * roomForOnePersonPrice;

    } else if (roomType === "apartment"){
        let apartmentDiscount = 0;

        if (days < 10){
            apartmentDiscount = 0.3;
        } else if (days <= 15){
            apartmentDiscount = 0.35;
        } else {
            apartmentDiscount = 0.5;
        }

        totalVacationPrice = (days * apartmentPrice);
        totalVacationPrice = totalVacationPrice - (totalVacationPrice * apartmentDiscount);

    } else {
        //president apartment

        let presidentApartmentDiscount = 0;

        if (days < 10){
            presidentApartmentDiscount = 0.1;
        } else if (days <= 15){
            presidentApartmentDiscount = 0.15;
        } else {
            presidentApartmentDiscount = 0.2;
        }

        totalVacationPrice = (days * presidentApartmentPrice) * (1 - presidentApartmentDiscount);
    }

    if (rating === "positive"){
        totalVacationPrice = totalVacationPrice * (1.25);
    } else {
        totalVacationPrice = totalVacationPrice * (0.9);
    }

    console.log(totalVacationPrice.toFixed(2));
}

calculateVacationPrice(["30",
    "president apartment",
    "negative"]);