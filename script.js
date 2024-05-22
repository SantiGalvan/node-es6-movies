require('dotenv').config();
const media = require('./media');

// Classe Movie
class Movie {
    #title;
    #year
    #genre
    #rating;
    #type;

    constructor(title, year, genre, rating, type) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    // Funzione toString Movie
    toString() {
        return (`${this.#title} è un film di genere ${this.#genre}. E' stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}`);
    }

    // Funzioni Get
    getTitle() {
        return this.#title;
    }
    getYear() {
        return this.#year;
    }
    getGenre() {
        return this.#genre;
    }
    getRating() {
        return this.#rating;
    }
    getType() {
        return this.#type;
    }

    // Funzioni Set
    setTitle(title) {
        return this.#title = title;
    }
    setYear(year) {
        return this.#year = year;
    }
    setGenre(genre) {
        return this.#genre = genre;
    }
    setRating(rating) {
        return this.#rating = rating;
    }
    setType(type) {
        return this.#type = type;
    }
};

// Classe TvSerie
class TvSerie extends Movie {
    #seasons

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    // Funzione toString TvSerie
    toString() {
        return (`${this.getTitle()} è una serie tv di genere ${this.getGenre()}. La prima stagione è stata rilasciato nel ${this.getYear()} ed in totale sono state prodotte ${this.#seasons} stagioni. Ha un voto di ${this.getRating()}`)
    }

    // Funzioni Get
    getSeasons() {
        return this.#seasons;
    }
}

// Map
const classMedia = media.map(({ title, year, genre, rating, type, seasons }) => {
    if (type === 'movie') {
        return new Movie(title, year, genre, rating, type);
    } else {
        return new TvSerie(title, year, genre, rating, type, seasons);
    }
});

// Funzione per la media dei voti
const getAverageRaiting = (list, genre) => {
    const genreMedia = list.filter(l => {
        if (l.getGenre().toLowerCase() === genre.toLowerCase()) return true
    });

    const totRaiting = genreMedia.reduce((sum, m) => {
        return sum = m.getRating() + m.getRating();
    }, 0);

    return genreMedia.length ? totRaiting / genreMedia.length : 'Media non disponibile';
};

console.log(getAverageRaiting(classMedia, 'crime'));

// Funzione per la lista dei gemeri
const getAllGenres = (list) => {

    const allGenres = list.reduce((result, l) => {
        if (!result.includes(l.getGenre())) result.push(l.getGenre());
        return result
    }, [])

    return allGenres;
};

console.log(getAllGenres(classMedia));

// Funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all'interno il risultato della funzione toString() di ogni film.
const getFilteredMedia = (list, genre) => {
    const filteredMedia = list.reduce((result, l) => {
        if (l.getGenre().toLowerCase() === genre.toLowerCase()) result.push(l.toString());
        return result;
    }, []);

    return filteredMedia;
};

console.log(getFilteredMedia(classMedia, 'crime'));

