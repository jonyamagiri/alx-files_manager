import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router(); // Create a new router instance

// Define routes and their corresponding controller methods
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

module.exports = router;
