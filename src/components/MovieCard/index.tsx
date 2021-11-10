import styles from './styles.module.scss'

interface IMovieCardProps {
    poster: string;
    title: string;
    duration: string;
    ratings: string
}

export function MovieCard({poster, title, duration, ratings}: IMovieCardProps) {
    return (
        <div className={styles.movieCardContainer}>
            <img src={poster} alt={title} />

            <div className={styles.movieCardContainer__infos}>
                <h4>{title}</h4>
                <div><span>{ratings}</span>
                <span>{duration}</span></div>
            </div>
        </div>
    )
}