

class TasksRepository {
    constructor(pool) {
        this.pool = pool;
    }

    async getAll() {
        const query = 'SELECT * FROM tasks ORDER BY created_at ASC';
        const { rows } = await this.pool.query(query);
        return rows;
    }

    async create({ title, description }) {
        const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
        const { rows } = await this.pool.query(query, [title, description]);
        return rows[0];
    }

    async update(id, { title, description }) {
        const query = 'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *';
        const { rows } = await this.pool.query(query, [title, description, id]);
        return rows[0];
    }

    async delete(id) {
        const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
        const { rows } = await this.pool.query(query, [id]);
        return rows[0];
    }
}

module.exports = TasksRepository