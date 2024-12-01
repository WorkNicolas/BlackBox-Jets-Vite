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
      `SELECT * FROM ClientCust WHERE rownum <= 10`
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


app.post('/api/execute', async (req, res) => {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        `SELECT * FROM ClientCust WHERE rownum <= 10`
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


 // Endpoint to handle registration information
app.post('/api/request-info', async (req, res) => {
    // Extract the fields from the request body
    const {
        firstName,
        lastName,
        company,
        phone,
        residence,  // frontend's field for address
        country,
        zip,
        email,
        password
    } = req.body;

    let connection; // Declare connection in the outer scope

    try {
        // Get a connection from the Oracle connection pool
        connection = await oracledb.getConnection();

        // SQL statement to insert the data into your Oracle table
        await connection.execute(
            `INSERT INTO registercolduser00 (fname, lname, company, phonenumber, billingaddress, country, zip, email, password) 
             VALUES (:fname, :lname, :company, :phonenumber, :billingaddress, :country, :zip, :email, :password)`,
            {
                fname: firstName,
                lname: lastName,
                company: company,
                phonenumber: phone,
                billingaddress: residence,
                country: country,
                zip: zip,
                email: email,
                password: password,
            },
            { autoCommit: true }
        );

        // Respond back with a success message
        res.status(200).json({ message: 'Information submitted successfully' });
    } catch (err) {
        console.error('Error handling request information:', err);
        res.status(500).json({ error: 'Error handling request information', details: err.message });
    } finally {
        // Connection is accessible here as it was declared in the outer scope
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
});






// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await initOracleConnection();
});
