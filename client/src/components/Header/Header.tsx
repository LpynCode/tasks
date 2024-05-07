import { Button } from "../Button/Button";
import styles from './Header.module.css'

interface HeaderProps {
    openCreatePopup: () => void
    setPage: (page: 'activity' | 'tasks') => void
    currentPage: 'activity' | 'tasks'
}

export const Header = ({ openCreatePopup, setPage, currentPage }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>TaskTracker</h1>
            <div className={styles.buttons}>
                <span onClick={() => setPage('tasks')} className={styles.button + ' ' + (currentPage === 'tasks' ? styles.active : '')}>Задачи</span>
                <span onClick={() => setPage('activity')} className={styles.button + ' ' + (currentPage === 'activity' ? styles.active : '')}>Активность</span>
            </div>
            <Button onClick={openCreatePopup}>Добавить задачу</Button>
        </div>
    )
}