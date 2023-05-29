const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://balaram:balaram@cluster0.mmigakx.mongodb.net/test';
const dbName1 = 'bse_listed_stocks';
const dbName2 = 'nse_listed_stocks';

async function connectToDatabase(dbName) {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToBSEDatabase: () => connectToDatabase(dbName1),
  connectToNSEDatabase: () => connectToDatabase(dbName2)
};
