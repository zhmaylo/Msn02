
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
    console.log("🚀 ALTER TABLE - prepare  ");
    try {
        const data = await client.query("ALTER TABLE tasks ADD COLUMN task_index_col tsvector");
        console.log("🚀 ALTER TABLE ", {...data}, " ");
      }
    catch { err => console.error(err) }
}

const updateTasks = async () => {
    try {
        const data = await client.query("UPDATE tasks SET task_index_col = to_tsvector('russian', coalesce(name, '') || ' ' || coalesce(condition, ''))");
        console.log("🚀 UPDATE tasks ", data);
    }
    catch { err => console.error(err) }
}

const createIndex = async () => {
    try {
   
        const data = await client.query("CREATE INDEX task_index ON tasks USING GIN (task_index_col) ");
        console.log("🚀 CREATE INDEX ", data);
    }
    catch { err => console.error(err) }
}

const createTriggerToTasks = async () => {
    try {
        const data = await client.query("CREATE TRIGGER task_vector_update BEFORE INSERT OR UPDATE ON tasks FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(task_index_col, 'russian', name, condition)");
        console.log("🚀 CREATE TRIGGER ", data, " ");
    }
    catch { err => console.error(err) }
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
    data = await client.query("SELECT * FROM tasks WHERE task_index_col @@ plainto_tsquery('russian','" + searchStr + "')") //,(err, res) => { console.log("🚀 ~ file: fts.js ~ line 68 ~ err, res", err, res)});
    return data.rows;
}

const addFTSToTask = async () => {
    // client.connect()
    await addTsvectorToTasks()
    await updateTasks()
    await createTriggerToTasks()    
    await createIndex()
    // client.end()
}

module.exports = {
    addFTSToTask,
    selectTasks,
}

