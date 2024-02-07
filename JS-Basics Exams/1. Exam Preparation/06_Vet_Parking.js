function vetParking(input) {

    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);

    let sumForDay = 0;

    let sumForAllDays = 0;


    for (let day = 1; day <= daysCount; day++) {

        for (let hour = 1; hour <= hoursCount; hour++) {

            if (day % 2 === 0 && hour % 2 !== 0) {
                sumForDay += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                sumForDay += 1.25;
            } else {
                sumForDay += 1;
            }
        }
        sumForAllDays += sumForDay;

        console.log(`Day: ${day} - ${sumForDay.toFixed(2)} leva`);

        sumForDay = 0;
    }

    console.log(`Total: ${sumForAllDays.toFixed(2)} leva`);

}
vetParking(["5", "2"]);