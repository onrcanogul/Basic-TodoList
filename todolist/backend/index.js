/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import env from "dotenv"


const app = express();
const PORT = 3000;
env.config();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


const db = new pg.Client({  
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_HOST),
  });
    db.connect();





app.get("/api/tasks" , async (req, res) => {
    const result = await db.query("SELECT * FROM taskmanagement");
    console.log(result.rows)
    res.json(result.rows)
})

app.post("/api/tasks" , async (req, res) => {
    console.log("POST");
    const {title , description} = req.body.task;
    const result = await db.query(`INSERT INTO taskmanagement(title , description) VALUES ('${title}' , '${description}')`)
    console.log(result)
    res.json({title , description})
})

app.delete("/api/tasks/:name", async (req, res) => {
    const name = req.params.name;
    console.log(name);
    await db.query(`DELETE FROM taskmanagement WHERE title='${name}'`);
    res.json({message : "Post deleted"})
})


app.listen(PORT , () => {
    console.log(`Server is running at port : ${PORT}` );
})
