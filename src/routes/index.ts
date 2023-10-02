import { Router } from 'express';
import pages404 from './pages/404';
import pageRoot from './pages/root';
import v1 from './v1';

const router = Router();

router.use('/', pageRoot);
router.use('/v1', v1);
router.use('*', pages404);

export default router;
