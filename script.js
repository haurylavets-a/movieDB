const numberOfFilms = prompt('Сколько фильмов посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотренный фильм?', ''),
    b = prompt('Его оценка?', ''),
    c = prompt('Последний просмотренный фильм?', ''), 
    d = prompt('Его оценка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
    