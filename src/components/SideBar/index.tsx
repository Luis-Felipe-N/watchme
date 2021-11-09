import { useContext, useEffect, useState } from 'react'
import { api } from '../../api/api'
import { genreSelectedContext } from '../../context/genreSelectedContext'
import { Button } from '../Button'
import styles from './styles.module.scss'

interface IGenres {
    title: string;
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface ISidebar {
    setGenre: (name: number)=>void;
    genre: number;
}

export function SideBar() {
    const [ genres, setGenres ] = useState<IGenres[]>([])
    const [ genre, setGenre ] = useState(1)

    const { setGenreSelected } = useContext(genreSelectedContext)

    function handleSelectGenres(id: number): void {
        setGenre(id)
    }

    useEffect(() => {
        api.get(`/genres/${ genre }`).then( response => setGenreSelected(response.data))
    },[genre])

    useEffect(() => {
        api.get('/genres').then( response => setGenres(response.data))
    },[])

    return(
        <aside className={styles.sideBarContainer}>
            <h1>Watch<span>Me</span></h1>

            <div className={styles.sideBarContainer__btns}>
                {genres.map( button => {
                    return (
                        <Button 
                            onClick={() => handleSelectGenres(button.id)}
                            title={button.title} 
                            iconName={button.name} 
                            selected={genre == button.id}
                        />
                    )
                })}
            </div>
        </aside>
    )
}