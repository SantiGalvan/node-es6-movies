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
const classMedia = media.map(m => {
    const { title, year, genre, rating, type, seasons } = m;
    if (type === 'movie') {
        m = new Movie(title, year, genre, rating, type);
    } else {
        m = new TvSerie(title, year, genre, rating, type, seasons);
    }
    return m;
});