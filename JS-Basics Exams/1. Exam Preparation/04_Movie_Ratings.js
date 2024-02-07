function movieRatings(input) {

    let moviesCount = Number(input[0]);

    let highestRating = Number.MIN_SAFE_INTEGER;
    let moveiHighestRating = ``;

    let lowestRating = Number.MAX_SAFE_INTEGER;
    let movieLowestRating = ``;

    let averageRating = 0;

    for (let index = 1; index < input.length; index++) {


        let currentMovie = input[index];
        index++;
        let movieRating = Number(input[index]);

        averageRating += movieRating;

        if (movieRating >= highestRating) {
            highestRating = movieRating;
            moveiHighestRating = currentMovie;
        } else if (movieRating < lowestRating) {
            lowestRating = movieRating;
            movieLowestRating = currentMovie;
        }
    }

    console.log(`${moveiHighestRating} is with highest rating: ${highestRating.toFixed(1)}`);

    console.log(`${movieLowestRating} is with lowest rating: ${lowestRating.toFixed(1)}`);

    console.log(`Average rating: ${(averageRating / moviesCount).toFixed(1)}`);

}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);