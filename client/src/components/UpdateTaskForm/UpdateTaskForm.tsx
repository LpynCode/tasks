import { useForm } from "react-hook-form";
import { ITask } from "../../types/task.interface"
import { ICreateTaskForm } from "../../types/create-task-form.interface";
import styles from './UpdateTaskForm.module.css'
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface UpdateTaskFormProps {
    task: ITask;
    update: (id: number, reqData: ICreateTaskForm) => void
}

export const UpdateTaskForm = ({ task, update }: UpdateTaskFormProps) => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICreateTaskForm>();

    const onSubmit = (data: ICreateTaskForm) => {
        update(task.id, data);
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input autoFocus defaultValue={task.title} labelName='Загаловок' error={errors.title} {...register('title', {required: 'Поле обязательно для заполнения'})}/>
            <Input defaultValue={task.description} labelName='Описание' error={errors.description} {...register('description', {required: 'Поле обязательно для заполнения'})}/>
            <Button type='submit'>Обновить</Button>
        </form>
    )
}