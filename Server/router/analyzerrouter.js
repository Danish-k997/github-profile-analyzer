import express from 'express';
import * as analyzer  from '../Controller/analyzercontroller.js';

const router = express.Router();

router.post('/getprofile', analyzer.SingleProfileAnalyze);

export default router;