import { Router } from 'express';
import * as testController from '../controller/test';

const router = Router();

router.get('/', testController.fetchAll);

export default router;
