import redisClient from '../utils/redis';
import dbClient from '../utils/db';

// Define the AppController class
class AppController {
  // Get status of Redis and database client and send response
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  // Get number of users and files from database client
  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers();
    const filesNum = await dbClient.nbFiles();
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController;
