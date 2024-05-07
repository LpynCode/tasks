import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { ITask } from '../types/task.interface'
import { tasksService } from '../api/tasks.service';
import Popup from '../components/Popup/Popup';
import { CreateTaskForm } from '../components/CreateTaskForm/CreateTaskForm';
import { ICreateTaskForm } from '../types/create-task-form.interface';
import { UpdateTaskForm } from '../components/UpdateTaskForm/UpdateTaskForm';
import { TaskInfo } from '../components/TaskInfo/TaskInfo';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { Header } from '../components/Header/Header';
import { Chart } from '../components/Chart/Chart';

function App() {
  const [page, setPage] = useState<'activity' | 'tasks'>('tasks');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [createPopupIsOpen, setCreatePopupIsOpen] = useState(false);
  const [updatePopup, setUpdatePopup] = useState<ITask | null>(null);
  const [taskInfoOpen, setTaskInfoOpen] = useState<ITask | null>(null);

  useEffect(() => {
      tasksService.getAll().then(setTasks)
  }, []);

  const create = (data: ICreateTaskForm) => {
    tasksService.create(data).then(task => setTasks([...tasks, task]));
    setCreatePopupIsOpen(false);
  }

  const update = (id: number, data: ICreateTaskForm) => {
    tasksService.update(id, data).then(task => setTasks(tasks.map(t => t.id === task.id ? task : t)));
    setUpdatePopup(null);
  }

  const remove = (id: number) => {
    tasksService.remove(id).then(() => setTasks(tasks.filter(t => t.id !== id)));
  }

  return (
    <div className={styles.app}>
      <Header setPage={setPage} currentPage={page} openCreatePopup={() => setCreatePopupIsOpen(true)}/>
      {createPopupIsOpen && <Popup title='Создать задачу' close={() => setCreatePopupIsOpen(false)}> 
            <CreateTaskForm create={create}/>
      </Popup>}
      {updatePopup && <Popup title='Редактировать задачу' close={() => setUpdatePopup(null)}>
        <UpdateTaskForm update={update} task={updatePopup} />
      </Popup>}
      {page === 'activity' && <Chart tasks={tasks} />}
      {page === 'tasks' && 
        <>
        
          {taskInfoOpen && <Popup title='Информация о задаче' close={() => setTaskInfoOpen(null)}> <TaskInfo task={taskInfoOpen} /></Popup>}
          {tasks.map(task => <TaskItem openInfo={(task) => setTaskInfoOpen(task)} remove={remove} openPopupEdit={(task) => setUpdatePopup(task)} key={task.id} task={task} />)}
      </>
    }
    </div>
  )
}

export default App
