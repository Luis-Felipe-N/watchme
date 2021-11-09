import { Icon } from '../Icon'
import styles from './styles.module.scss'

interface IButtonProps {
    title: string;
    iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    selected: boolean;
    onClick: ()=>void;
}

export function Button({title, iconName, selected , ...props}: IButtonProps) {
    return (
        <button className={selected ? `${styles.buttonContainer} ${styles.active}` : styles.buttonContainer} {...props}>
            <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
            {title}
        </button>
    )
}