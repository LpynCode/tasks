import { useForm } from "react-hook-form"
import { Input } from "../Input/Input"
import { ICreateTaskForm } from "../../types/create-task-form.interface";
import { Button } from "../Button/Button";
import styles from './CreateTaskForm.module.css'

interface CreateTaskFormProps {
    create: (data: ICreateTaskForm) => void
}

export const CreateTaskForm = ({ create }: CreateTaskFormProps) => {
    const { handleSubmit, register, formState: {errors}} = useForm<ICreateTaskForm>();

    const onSubmit = (data: ICreateTaskForm) => {
        create(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
 
            <Input autoFocus labelName='Заголовок' error={errors.title} {...register('title', {required: 'Поле обязательно для заполнения'})}/>
            <Input labelName='Описание' error={errors.description} {...register('description', {required: 'Поле обязательно для заполнения'})}/>

            <Button type='submit'>Create</Button>
        </form>
    )
}