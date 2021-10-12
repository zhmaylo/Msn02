
const { postgresURI } = require('./sequelize.db');

const { Client } = require('pg');

const connectionString = postgresURI;

const client = new Client({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
        sslmode: 'require',
    },
})

client.connect()
const addTsvectorToTasks = async () => {
    try {
        const data = await client.query("ALTER TABLE tasks ADD COLUMN task_index_col tsvector");
        console.log("🚀 ALTER TABLE ", data, " ");
        client.end()
    }
    catch { err => console.err(err) }
}

const updateTasks = async () => {
    try {
        const data = await client.query("UPDATE tasks SET task_index_col = to_tsvector('russian', coalesce(name, '') || ' ' || coalesce(condition, ''))");
        console.log("🚀 ~ file: fts.js ~ line 43 ~ err, res", data);
    }
    catch { err => console.err(err) }
}

const createTriggerToTasks = async () => {
    try {
        const data = await client.query("CREATE TRIGGER task_vector_update BEFORE INSERT OR UPDATE ON tasks FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(task_index_col, 'russian', name, condition)");
        console.log("🚀 CREATE TRIGGER ", data, " ");
    }
    catch { err => console.err(err) }
}

const selectAllFromTasks = async () => {
    try {
        const data = await client.query("SELECT * FROM tasks WHERE task_index_col @@ to_tsquery('russian','которы & час ')")
        console.log("🚀 ~ file: fts.js ~ line 59 ~ err, res", data.err, data.rows, " ");
    }
    catch { err => console.err(err) }
}

const selectTasks = async (searchStr) => {
    let data;
    data = await client.query("SELECT * FROM tasks WHERE task_index_col @@ plainto_tsquery('russian','" + searchStr + "')");
    // console.log("🚀 ~ file: fts.js ~ line 63 ~ data", data.err, " ");
    // console.log("🚀 ~ file: fts.js ~ line 63 ~ data", data, " ");
    return data.rows;
}

const addFTSToTask = async () => {
    // client.connect()
    await addTsvectorToTasks()
    await updateTasks()
    await createTriggerToTasks()
    await selectAllFromTasks()
    // client.end()
}

module.exports = {
    addFTSToTask,
    selectTasks,
}


