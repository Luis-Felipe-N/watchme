import { useContext, useEffect, useState } from 'react'
import { api } from '../../api/api'
import { genreSelectedContext } from '../../context/genreSelectedContext'
import { MovieCard } from '../MovieCard'
import styles from './styles.module.scss'

interface iMovie {
    Poster: string;
    Ratings: [{
        Source: string,
        Value: string
    }];
    imdbID: string;
    Title: string;
    Runtime: string
}


export function Content() {
    const [ movies, setMovies ] = useState<iMovie[]>([])
    const { genreSelected } = useContext(genreSelectedContext)

    useEffect(() => {
        if ( genreSelected ){
            console.log(genreSelected)
            api.get(`/movies/?Genre_id=${genreSelected.id}`).then( response => setMovies(response.data))
        }
    },[genreSelected])

    return (
        <main className={styles.contentContainer}>
            <div>
                <header>
                    <h1>Categoria: <span>{genreSelected && genreSelected.title}</span></h1> 
                </header>
                <div className={styles.containerCards}>
                    {
                        movies && movies.map( movie => <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} duration={movie.Runtime} ratings={movie.Ratings[0].Value}/>)
                    }
                </div>
            </div>
        </main>
    )
}