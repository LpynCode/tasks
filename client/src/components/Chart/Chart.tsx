import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import styles from './Chart.module.css'
import { useEffect, useState } from "react";
import { tasksService } from "../../api/tasks.service";
import { IActivity } from "../../types/activity.interface";
import { ITask } from "../../types/task.interface";

export const Chart = ({tasks}: {tasks: ITask[]}) => {
    const [data, setData] = useState<IActivity[]>();

    useEffect(() => {
        tasksService.getActivity().then((data) => {
            const prepaired = data.map((item: IActivity) => ({
                ...item, date: new Date(item.date).toLocaleDateString() 
            }))
            setData(prepaired);
        });
    }, [tasks]);

    return <LineChart
            width={800}
            height={500}
            data={data}
            className={styles.chart}
        >
            <Line  type="monotone" dataKey="count" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis/>
        </LineChart>
}