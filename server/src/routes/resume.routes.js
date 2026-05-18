const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const resumeController = require('../controllers/resume.controller');

// Upload resumes and job description to analyze
router.post('/analyze', upload.array('resumes', 20), resumeController.analyzeResumes);

module.exports = router;
