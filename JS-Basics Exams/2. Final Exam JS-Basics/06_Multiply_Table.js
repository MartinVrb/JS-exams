function multiplyTable(input) {
    let number = Number(input[0]);

    let thirdDigit = Math.floor(number / 100);
    let secondDigit = Math.floor((number / 10) % 10)
    let firstDigit = number % 10;

    if (firstDigit !== 0 && secondDigit !== 0 && thirdDigit !== 0) {
        for (let i = 1; i <= firstDigit; i++) {
            for (let j = 1; j <= secondDigit; j++) {
                for (let k = 1; k <= thirdDigit; k++) {
                    let result = i * j * k;
                    console.log(`${i} * ${j} * ${k} = ${result};`);
                }
            }
        }
    }
}
multiplyTable(["324"]);