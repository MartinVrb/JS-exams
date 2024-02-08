function excursionSale(input) {

    let seaExcursions = Number(input[0]);
    let mountainExcursions = Number(input[1]);

    let totalSold = 0;
    let profitFromSales = 0;

    for (let index = 2; index < input.length; index++) {
        let currentPlace = input[index];

        if (currentPlace === `sea` && seaExcursions > 0) {
            seaExcursions--;
            totalSold++;
            profitFromSales += 680;
        } else if (currentPlace === `mountain` && mountainExcursions > 0) {
            mountainExcursions--;
            totalSold++;
            profitFromSales += 499;
        }

        if (seaExcursions === 0 && mountainExcursions === 0) {
            break;
        }

    }

    if (totalSold === Number(input[0]) + Number(input[1])) {
        console.log(` Good job! Everything is sold.`);
        console.log(`Profit: ${profitFromSales} leva.`);
    } else {
        console.log(`Profit: ${profitFromSales} leva.`);
    }

}
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);