import { useContext, useEffect, useState } from 'react'
import { api } from '../../api/api'
import { genreSelectedContext } from '../../context/genreSelectedContext'
import styles from './styles.module.scss'

interface iMovie {
    Poster: string;
    Ratings: [{
        Source: string,
        Value: string
    }];
    imdbID: string;
    Title: string
}


export function Content() {

    const { genreSelected } = useContext(genreSelectedContext)

    useEffect(() => {
        api.get('/movies').then(response=> console.log(response.data))
    },[])

    return (
        <main className={styles.contentContainer}>
            <div>
                <header>
                    <h1>Categoria: <span>{genreSelected && genreSelected.title}</span></h1> 
                </header>
                <div>
                    {

                    }
                </div>
            </div>
        </main>
    )
}