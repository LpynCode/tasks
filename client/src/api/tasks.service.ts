import $api from "."

const getAll = async () => {
    const {data} = await $api.get('/');
    return data;
}

const create = async (reqData: { title: string, description: string }) => {
    const {data} = await $api.post('/', reqData);
    return data;
}

const update = async (id: number, reqData: { title: string, description: string }) => {
    const {data} = await $api.put(`/${id}`, reqData);
    return data;
}

const remove = async (id: number) => {
    const {data} = await $api.delete(`/${id}`);
    return data;
}

const getActivity = async () => {
    const {data} = await $api.get('/activity');
    return data;
}

export const tasksService = {
    getAll,
    create,
    update,
    remove,
    getActivity
}