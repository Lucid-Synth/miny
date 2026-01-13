import express from 'express'
import { Middleware } from '../middleware/middleware.js';
import { getUrl, postUrl }from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', Middleware, postUrl);
router.get('/:shortcode',getUrl)

export default router;