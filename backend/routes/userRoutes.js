import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateNewUser, validateUserUpdate } from '../middleware/validateUser.js'; 

const router = express.Router();

router.get('/', getUsers);
router.post('/', validateNewUser, createUser);
router.put('/:id', validateUserUpdate, updateUser);
router.delete('/:id', deleteUser);

export default router;
