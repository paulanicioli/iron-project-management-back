const express = require('express');

const projectsRoutes = require('./projects/projects.routes');
const tasksRoutes = require('./tasks/tasks.routes');
const authRoutes = require('./auth/auth.routes');

const router = express();

router.use('/projects', projectsRoutes);
router.use('/tasks', tasksRoutes);
router.use('/auth', authRoutes);

module.exports = router;
