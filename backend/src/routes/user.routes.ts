import express from 'express';
import passport from 'passport';

const router = express.Router();

// Get user profile
router.get('/profile', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      res.json(req.user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user profile' });
    }
  }
);

// Update user profile
router.put('/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const user = req.user as any;
      await user.update(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user profile' });
    }
  }
);

// Get all users (admin only)
router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { User } = require('../models/user.model');
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }
);

export default router; 