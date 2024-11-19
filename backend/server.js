const express = require('express');
const oracledb = require('oracledb');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Database connection setup
async function initOracleConnection() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
    console.log("Oracle DB connection pool created!");
  } catch (err) {
    console.error("Error creating Oracle DB connection pool: ", err);
  }
}

app.get('/api/data', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM your_table WHERE rownum <= 10`
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query: ", err);
    res.status(500).send("Error retrieving data");
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection: ", err);
      }
    }
  }
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await initOracleConnection();
});
