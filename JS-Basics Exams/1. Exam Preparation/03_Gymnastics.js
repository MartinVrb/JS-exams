function gymnastics(input) {

    let country = input[0];
    let discipline = input[1];

    let maxGrade = 20;

    let difficulty = 0;
    let performance = 0;

    if (country === "Russia") {
        switch (discipline) {
            case "ribbon":
                difficulty = 9.100;
                performance = 9.400;
                break;

            case "hoop":
                difficulty = 9.300;
                performance = 9.800;
                break;

            case "roop":
                difficulty = 9.600;
                performance = 9.000;
                break;
        }
    } else if (country === "Bulgaria") {
        switch (discipline) {
            case "ribbon":
                difficulty = 9.600;
                performance = 9.400;
                break;

            case "hoop":
                difficulty = 9.550;
                performance = 9.750;
                break;

            case "roop":
                difficulty = 9.500;
                performance = 9.400;
                break;
        }
    } else if (country === "Italy") {
        switch (discipline) {
            case "ribbon":
                difficulty = 9.200;
                performance = 9.500;
                break;

            case "hoop":
                difficulty = 9.450;
                performance = 9.350;
                break;

            case "roop":
                difficulty = 9.700;
                performance = 9.150;
                break;
        }
    }

    let totalScore = difficulty + performance;

    let countrysGrade = maxGrade - totalScore;
    let countrysGradeInPercent = countrysGrade / maxGrade * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${discipline}.`);
    console.log(`${countrysGradeInPercent.toFixed(2)}%`);

}
gymnastics(["Russia", "roop"]);