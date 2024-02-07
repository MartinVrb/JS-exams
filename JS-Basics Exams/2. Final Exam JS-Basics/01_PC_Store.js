function pcStore(input) {

    let processorDollarPrice = Number(input[0]);
    let videoCardDollarPrice = Number(input[1]);
    let oneRAMMemoryDollarPrice = Number(input[2]);
    let ramMemoriesNumber = Number(input[3]);
    let discountPercentage = Number(input[4]);

    let processorLeva = processorDollarPrice * 1.57;
    let videoCardLeva = videoCardDollarPrice * 1.57;
    let oneRAMMemoryLeva = oneRAMMemoryDollarPrice * 1.57;
    let allRamMemorys = oneRAMMemoryLeva * ramMemoriesNumber;


    let processorPriceWithDiscount = processorLeva - (processorLeva * discountPercentage);
    let videoCardPriceWithDiscount = videoCardLeva - (videoCardLeva * discountPercentage);

    let totalCostForParts = processorPriceWithDiscount + videoCardPriceWithDiscount + allRamMemorys;

    console.log(`Money needed - ${totalCostForParts.toFixed(2)} leva.`);

}
pcStore(["1200", "850", "120", "4", "0.1"]);