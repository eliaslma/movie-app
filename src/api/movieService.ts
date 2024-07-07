import axios from "axios";

const genres: { [key: number]: string } = {
    12: 'Aventura',
    14: 'Fantasia',
    16: 'Animação',
    18: 'Drama',
    27: 'Terror',
    28: 'Ação',
    35: 'Comédia',
    36: 'História',
    37: 'Faroeste',
    53: 'Suspense',
    80: 'Crime',
    99: 'Documentário',
    878: 'Ficção Científica',
    9648: 'Mistério',
    10402: 'Música',
    10749: 'Romance',
    10751: 'Família',
    10752: 'Guerra',
    10770: 'Filme para TV',
};

export const API_KEY = process.env.EXPO_PUBLIC_MOVIE_API_KEY;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`;

const getImagePath = (path: string) => `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string) => `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: any;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const getMovies = async () => {

    const response = await axios.get(API_URL);

    if (response.data.results) {

        const movies: MovieType[] = response.data.results;

        movies.forEach(movie => {
            movie.poster_path = getImagePath(movie.poster_path)
            movie.genre_ids = movie.genre_ids.map((genre: any) => genres[genre])
            movie.backdrop_path = getBackdropPath(movie.backdrop_path)
        });

        return movies;
    }

};