const express = require('express');

const projectsController = require('../../controller/projects.controller');

const router = express();

router.get('/', projectsController.getMany); // obter lista de todos os projetos
router.get('/:id', projectsController.getOne); // obter detalhe de um projeto a partir do seu ID
router.post('/', projectsController.createOne); // criar um novo projeto
router.put('/:id', projectsController.updateOne); // atualizar um projeto a partir do seu ID
router.delete('/:id', projectsController.deleteOne); // deletar um projeto específico

module.exports = router;
