import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/guneskremleri').get(pageController.getGunesPage);
router.route('/icerikler').get(pageController.getIcerikPage);
router.route('/nemlendirici').get(pageController.getNemPage);
router.route('/serum').get(pageController.getSerumPage);
router.route('/form').get(pageController.getFormPage);

export default router;