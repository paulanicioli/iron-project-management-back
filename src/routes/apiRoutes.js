const express = require('express');
const jwt = require('jsonwebtoken');

const projectsRoutes = require('./projects/projects.routes');
const tasksRoutes = require('./tasks/tasks.routes');
const authRoutes = require('./auth/auth.routes');

const protectedRoutesMiddleware = require('../middlewares/protectedRoutes/protectedRoutes.middlewares');

const router = express();

router.use('/auth', authRoutes);

// Middleware de rotas protegidas
router.use(protectedRoutesMiddleware.protect);

router.use('/projects', projectsRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;
