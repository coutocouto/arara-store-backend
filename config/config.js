require('dotenv/config');

// console.log('process.env.POSTGRES_USER', process.env.POSTGRES_USER);
// console.log('process.env.POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD);
// console.log('process.env.POSTGRES_DATABASE', process.env.POSTGRES_DATABASE);
// console.log('process.env.POSTGRES_HOST', process.env.POSTGRES_HOST);

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'arara-store',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'arara-store',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {},
    },
  },
};
