const { Router } = require('express');
const { imageUploadMiddleware } = require('../middleware/upload');
const { uploadPicture } = require('../controllers/upload.controller');

const router = Router();

router.post('/', imageUploadMiddleware, uploadPicture);

module.exports = router;