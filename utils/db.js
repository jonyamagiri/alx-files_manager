import { MongoClient } from 'mongodb';

// Set db connection parameters based on environment variables / default values
const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';

// Create MongoDB connection URL using the host and port
const url = `mongodb://${HOST}:${PORT}`;

// Define DBClient class
class DBClient {
  constructor() {
  // Create a new instance of MongoClient with connection URL and options
    this.client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
    this.client.connect().then(() => {
      this.db = this.client.db(`${DATABASE}`);
    }).catch((err) => {
      console.log(err);
    });
  }

  // Check if the database client is connected
  isAlive() {
    return this.client.isConnected();
  }

  // Retrieve the number of users from the 'users' collection
  async nbUsers() {
    const users = this.db.collection('users');
    const usersNum = await users.countDocuments();
    return usersNum;
  }

  // Retrieve the number of files from the 'files' collection
  async nbFiles() {
    const files = this.db.collection('files');
    const filesNum = await files.countDocuments();
    return filesNum;
  }
}

// Create an instance of DBClient and export it
const dbClient = new DBClient();
module.exports = dbClient;
