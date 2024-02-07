function touristShop(input) {

    let budget = Number(input[0]);
    let index = 1;

    let command = input[index]
    let productCount = 0;
    let sumProducts = 0;

    while (command !== "Stop") {

        let productName = input[index];
        productCount++;
        index++;
        let productPrice = Number(input[index]);

        if (productCount % 3 === 0) {
            productPrice /= 2;
        }

        sumProducts += productPrice;
        budget -= productPrice;

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }

        index++;
        command = input[index];

    }

    if (command === "Stop") {
        console.log(`You bought ${productCount} products for ${sumProducts.toFixed(2)} leva.`);
    }

}
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);