import { Button } from "../Button/Button";
import styles from './Header.module.css'

interface HeaderProps {
    openCreatePopup: () => void
}

export const Header = ({ openCreatePopup }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>TaskTracker</h1>
            <Button onClick={openCreatePopup}>Добавить задачу</Button>
        </div>
    )
}