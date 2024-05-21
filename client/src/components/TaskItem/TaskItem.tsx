import { ITask } from "../../types/task.interface"
import { Button } from "../Button/Button"
import styles from './TaskItem.module.css'

interface TaskItemProps {
    task: ITask;
    openPopupEdit: (task: ITask) => void
    remove: (id: number) => void
    openInfo: (task: ITask) => void
}

export const TaskItem = ({ task, openPopupEdit, openInfo, remove }: TaskItemProps): JSX.Element => {
    return (
        <div onClick={() => openInfo(task)} className={styles.task}>
            {task.title}
            <div className={styles.buttons}>
                <span className={styles.date}>{new Date(task.created_at).toLocaleDateString()}</span>
                <Button onClick={(e) => {openPopupEdit(task); e.stopPropagation() }}>Редактировать</Button>
                <Button onClick={(e) => {remove(task.id); e.stopPropagation()}}>Удалить</Button>
            </div>
        </div>
    )
}