function familyTrip(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let priceForNight = Number(input[2]);
    let percentForMoreCosts = Number(input[3]) / 100;

    if (nightsCount > 7) {
        priceForNight *= 0.95;
    }

    let priceAllNights = nightsCount * priceForNight;

    let totalSum = priceAllNights + (budget * percentForMoreCosts);

    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else if (totalSum > budget) {
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }

}
familyTrip(["500", "7", "66", "15"]);