function footballKit(input) {

    let tShirtPrice = Number (input[0]);
    let theAmountToWinABall = Number(input[1]);

    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let buttonsPrice = (tShirtPrice + shortsPrice) * 2;

    let totalPrice = tShirtPrice + shortsPrice + socksPrice + buttonsPrice;

    let totalPriceWithDiscount = totalPrice * 0.85;

    if(totalPriceWithDiscount >= theAmountToWinABall){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPriceWithDiscount.toFixed(2)} lv.`);
    } else{
        let neededMoney = theAmountToWinABall - totalPriceWithDiscount;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }

}
footballKit(["25", "100"]);