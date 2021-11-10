import { useContext, useEffect, useState } from 'react'
import { api } from '../../api/api'
import { genreSelectedContext } from '../../context/genreSelectedContext'
import { Button } from '../Button'
import styles from './styles.module.scss'
import { BiMenu } from 'react-icons/bi'

interface IGenres {
    title: string;
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

export function SideBar() {
    const [ genres, setGenres ] = useState<IGenres[]>([])
    const [ genre, setGenre ] = useState(1)
    const [ openMenu, setOpenMenu ] = useState(false)

    const { setGenreSelected } = useContext(genreSelectedContext)

    function handleSelectGenres(id: number): void {
        setGenre(id)
    }

    useEffect(() => {
        api.get(`/genres/${ genre }`).then( response => setGenreSelected(response.data))
    },[genre, setGenreSelected])

    useEffect(() => {
        api.get('/genres').then( response => setGenres(response.data))
    },[])

    return(
        <>
        <aside className={openMenu ? `${styles.sideBarContainer} ${styles.active}` : styles.sideBarContainer}>
            <h1>Watch<span>Me</span></h1>

            <div className={styles.sideBarContainer__btns}>
                {genres.map( button => {
                    return (
                        <Button 
                            key={button.id}
                            onClick={() => handleSelectGenres(button.id)}
                            title={button.title} 
                            iconName={button.name} 
                            selected={genre === button.id}
                        />
                    )
                })}
            </div>
        </aside>

        <button onClick={() => setOpenMenu(!openMenu)} className={styles.btnMenu}><BiMenu /></button>
        </>
    )
}