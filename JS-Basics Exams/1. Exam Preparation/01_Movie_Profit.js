function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let ticket = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]) / 100;

    let allTickets = ticket * ticketPrice;
    let forAllDays = allTickets * days;

    let finalPrice = forAllDays - (forAllDays * percentForCinema);

    console.log(`The profit from the movie ${movieName} is ${finalPrice.toFixed(2)} lv.`);

}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);