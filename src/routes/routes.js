import { Router } from 'express';

import testRoutes from './test';

import config from '../config';

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    name: config.app.name,
    version: config.app.version
  });
});

router.use('/test', testRoutes);

export default router;
