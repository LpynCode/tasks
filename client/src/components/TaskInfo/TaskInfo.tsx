import { ITask } from "../../types/task.interface"
import styles from './TaskInfo.module.css'

interface TaskInfoProps {
    task: ITask;
}

export const TaskInfo = ({task}: TaskInfoProps) => {

    return (
        <div className={styles.task}>
            <span className={styles.title}>Название: </span>
            <span className={styles.value}>{task.title}</span>

            <span className={styles.title}>Описание: </span>
            <span className={styles.value}>{task.description}</span>
        </div>
    )
}