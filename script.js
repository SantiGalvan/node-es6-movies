require('dotenv').config();
const media = require('./media');

// Classe Movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Funzione toString Movie
    toString() {
        return (`${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`);
    }
};

// Classe TvSerie
class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.season = seasons;
    }

    // Funzione toString TvSerie
    toString() {
        return (`${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.season} stagioni. Ha un voto di ${this.rating}`)
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
        if (l.genre.toLowerCase() === genre.toLowerCase()) return true
    });

    const totRaiting = genreMedia.reduce((sum, { rating }) => {
        return sum = rating++;
    }, 0);

    return genreMedia.length ? totRaiting / genreMedia.length : 'Media non disponibile';
};

console.log(getAverageRaiting(classMedia, 'fantasia'));

// Funzione per la lista dei gemeri
const getAllGenres = (list) => {

    const allGenres = list.reduce((result, l) => {
        if (!result.includes(l.genre)) result.push(l.genre);
        return result
    }, [])

    return allGenres;
};

console.log(getAllGenres(classMedia));


// Funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all'interno il risultato della funzione toString() di ogni film.
const getFilteredMedia = (list, genre) => {
    const filteredMedia = list.reduce((result, l) => {
        if (l.genre.toLowerCase() === genre.toLowerCase()) result.push(l.toString());
        return result;
    }, []);

    return filteredMedia;
};

console.log(getFilteredMedia(classMedia, 'crime'));

