const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Rutas relacionadas con las salas
router.get('/rooms', roomController.getAllRooms);
router.post('/rooms', roomController.createRoom);
router.get('/rooms/:id', roomController.getRoomById);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
