import express from 'express';
import router from './routes/index';

// Set port based on environment variable 'PORT' or default to 5000
const port = parseInt(process.env.PORT, 10) || 5000;

const app = express(); // Create an Express app

app.use(express.json()); // Parse incoming requests with JSON payloads
app.use('/', router); // Mount the router middleware at the root path '/'

// Start server and listen for incoming connections on specified port
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
