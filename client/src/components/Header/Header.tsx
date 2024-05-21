import { Button } from "../Button/Button";
import styles from './Header.module.css'

interface HeaderProps {
    openCreatePopup: () => void
    setPage: (page: 'activity' | 'tasks') => void
    currentPage: 'activity' | 'tasks'
    sortType: 'asc' | 'desc'
    setSortType: (type: 'asc' | 'desc') => void
}

export const Header = ({ openCreatePopup, sortType, setSortType, setPage, currentPage }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>TaskTracker</h1>
            <div className={styles.buttons}>
                <span onClick={() => setPage('tasks')} className={styles.button + ' ' + (currentPage === 'tasks' ? styles.active : '')}>Задачи</span>
                <span onClick={() => setPage('activity')} className={styles.button + ' ' + (currentPage === 'activity' ? styles.active : '')}>Активность</span>
            </div>
            <select value={sortType} onChange={e => setSortType(e.target.value as 'asc' | 'desc')}> 
                <option value="asc">Сначала старые</option>
                <option value="desc">Сначала новые</option>
            </select>
            <Button onClick={openCreatePopup}>Добавить задачу</Button>
        </div>
    )
}