
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

const addFTSToTask = async () => {
    client.connect()
    await addTsvectorToTasks()
    await updateTasks()
    await createTriggerToTasks()
    await selectAllFromTasks()
    client.end()
}

module.exports = {
    addFTSToTask,
}




// const connectType2 = async () => {

//     await client.connect()

//     // ALTER TABLE pgweb ADD COLUMN textsearchable_index_col tsvector;
//     // UPDATE pgweb SET textsearchable_index_col =
//     //     to_tsvector('english', coalesce(title, '') || ' ' || coalesce(body, ''));


//     client.query("ALTER TABLE tasks ADD COLUMN task_index_col tsvector",
//     (err, res) => {
//         console.log("🚀 ~ file: fts.js ~ line 38 ~ err, res", err, res);
//     })

//     client.query("UPDATE tasks SET task_index_col = to_tsvector('russian', coalesce(name, '') || ' ' || coalesce(condition, ''))",
//         (err, res) => {
//             console.log("🚀 ~ file: fts.js ~ line 43 ~ err, res", err, res);
//         })

//         // CREATE INDEX textsearch_idx ON pgweb USING GIN (textsearchable_index_col);
//         client.query("CREATE INDEX tasks_idx ON tasks USING GIN (task_index_col)",
//         (err, res) => {
//             console.log("🚀 ~ file: fts.js ~ line 49 ~ err, res", err, res);
//         })


//         // SELECT title FROM pgweb
//         // WHERE textsearchable_index_col @@ to_tsquery('create & table')
//         // ORDER BY last_mod_date DESC
//         // LIMIT 10;

//         client.query("SELECT * FROM tasks WHERE task_index_col @@ to_tsquery('russian','которы & час ')",
//         (err, res) => {
//             console.log("🚀 ~ file: fts.js ~ line 59 ~ err, res", err, res.row, " ");
//             client.end()
//         })
//     }

// const connectType1 = async () => {

//     await client.connect()



//     client.query("CREATE INDEX tasks_idx ON tasks USING GIN (to_tsvector('russian', condition))",
//     (err, res) => {
//         console.log(err, res)

//     })

//     // "EXPLAIN ANALYZE SELECT * FROM tasks WHERE to_tsvector(condition) @@ to_tsquery('russian',' который')",

//     client.query("SELECT * FROM tasks WHERE to_tsvector('russian', condition) @@ to_tsquery('russian',' который')",
//     (err, res) => {
//         console.log(err, res.rows)
//         client.end()
//     })

// }
