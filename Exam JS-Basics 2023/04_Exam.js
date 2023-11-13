function exam(input) {

    let studentsCount = Number(input[0]);

    let above5 = 0;
    let over4Under5 = 0;
    let over3Under4 = 0;
    let below3 = 0;
    let totalScore = 0;


    for (let i = 1; i <= studentsCount; i++) {
        let grade = Number(input[i]);
        totalScore += grade;

        if (grade >= 5.00) {
            above5++;
        } else if (grade >= 4 && grade <= 4.99) {
            over4Under5++;
        } else if (grade >= 3 && grade <= 3.99) {
            over3Under4++;
        } else if (grade < 3) {
            below3++
        }
    }

    let p1 = (above5 / studentsCount) * 100;
    let p2 = (over4Under5 / studentsCount) * 100;
    let p3 = (over3Under4 / studentsCount) * 100;
    let p4 = (below3 / studentsCount) * 100;

    let averageScore = (totalScore / studentsCount).toFixed(2);


    console.log(`Top students: ${p1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${p2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${p3.toFixed(2)}%`);
    console.log(`Fail: ${p4.toFixed(2)}%`);
    console.log(`Average: ${averageScore}`);

}
exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", " 4.50", "2.44", "5"]);