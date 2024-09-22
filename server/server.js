import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const corsOptions = {
  origin: "https://week4-assignment-guestbook-1.onrender.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Database connection
const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
  ssl: { rejectUnauthorized: false },
});

// const dbConnectionString = process.env.DATABASE_URL;

// export const db = new pg.Pool({
//   connectionString: dbConnectionString,
// });

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});

app.get("/", (req, res) => {
  res.json({ message: "I am... root..oute" });
});

app.use(express.json());

//you need two routes minimum
//you need a route to READ the database data
app.get("/data", async (req, res) => {
  const query = await db.query(`SELECT * FROM reviews`);
  res.json(query.rows);
  console.log(query);
});

//you need a route to CREATE or ADD new data to the databast
app.post("/add-data", async (req, res) => {
  try {
    const { name, date, review, star } = req.body;
    const insertQuery = `
  INSERT INTO reviews (name, date, review, star)
  VALUES ($1, $2, $3, $4)
  returning *`;
    const values = [name, date, review, star];
    const result = await db.query(insertQuery, values);
    res.json({ status: "Message received!" });
  } catch (error) {
    console.error("error adding data", error);
  }
});

//!in your CREATE route the request.body is an object that represents the form data coming from your client
//you need to use SQL queries and parameters in these routes

//your
