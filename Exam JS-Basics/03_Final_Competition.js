function finalCompetitions(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let moneyPrize = 0;

    if (place === `Bulgaria`) {
        moneyPrize = points * dancers;
    } else if (place === `Abroad`) {
        moneyPrize = (points * dancers) * 1.5;
    }

    let expenses = 0;

    if (place === `Bulgaria` && season === `summer`) {
        expenses = moneyPrize * 0.95;
    } else if(place === `Bulgaria` && season === `winter`){
        expenses = moneyPrize * 0.92;
    } else if(place === `Abroad` && season === `summer`){
        expenses = moneyPrize * 0.90;
    } else if(place === `Abroad` && season === `winter`){
        expenses = moneyPrize * 0.85;
    }

    let moneyForCharity = expenses * 0.75;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);

    let moneyLeft = expenses - moneyForCharity;

    let moneyForDancers = moneyLeft / dancers;
    
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);


}
finalCompetitions(["1", "89.5", "summer", "Abroad"]);