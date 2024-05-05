// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const arrayDirectors = moviesArray.map((Element) => Element.director);
  return arrayDirectors.filter(
    (Element) =>
      arrayDirectors.lastIndexOf(Element) === arrayDirectors.indexOf(Element)
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } 
  const filteredMovies = moviesArray.filter(movie=>
movie.director=== "Steven Spielberg" && movie.genre.includes("Drama")
);
return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce(
    (acc, movie) => acc + (movie.score || 0),
    0
  );
  const averageScore = totalScore / moviesArray.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) => movie.genre && movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  const averageScore = totalScore / dramaMovies.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const OrderMoviesByYear = [...moviesArray];
  OrderMoviesByYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return OrderMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderAlphabeticArray = [...moviesArray];
  orderAlphabeticArray.sort((a, b) => a.title.localeCompare(b.title));
  const titles = orderAlphabeticArray.map((movie) => movie.title);
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => {
    const newMovie = { ...movie };

    let duration = newMovie.duration;
    let minutes = 0;
    const hoursMatch = duration.match(/(\d+)h/);
    const minutesMatch = duration.match(/(\d+)min/);

    if (hoursMatch) {
      minutes += parseInt(hoursMatch[1], 10) * 60;
    }
    if (minutesMatch) {
      minutes += parseInt(minutesMatch[1], 10);
    }

    newMovie.duration = minutes;

    return newMovie;
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
