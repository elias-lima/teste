const Poll = require('pg').Pool;

const pool = new Poll({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "perntodo"  
});

module.exports = pool;