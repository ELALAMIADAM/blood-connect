import express from 'express';
import passport from 'passport';

const router = express.Router();

// Create a new blood request
router.post('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { BloodRequest } = require('../models/bloodRequest.model');
      const bloodRequest = await BloodRequest.create({
        ...req.body,
        userId: (req.user as any).id
      });
      res.status(201).json(bloodRequest);
    } catch (error) {
      res.status(500).json({ message: 'Error creating blood request' });
    }
  }
);

// Get all blood requests
router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { BloodRequest } = require('../models/bloodRequest.model');
      const bloodRequests = await BloodRequest.findAll({
        include: [{ model: require('../models/user.model').User, attributes: ['id', 'name', 'email'] }]
      });
      res.json(bloodRequests);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blood requests' });
    }
  }
);

// Get a specific blood request
router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { BloodRequest } = require('../models/bloodRequest.model');
      const bloodRequest = await BloodRequest.findByPk(req.params.id, {
        include: [{ model: require('../models/user.model').User, attributes: ['id', 'name', 'email'] }]
      });
      if (!bloodRequest) {
        return res.status(404).json({ message: 'Blood request not found' });
      }
      res.json(bloodRequest);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blood request' });
    }
  }
);

// Update a blood request
router.put('/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { BloodRequest } = require('../models/bloodRequest.model');
      const bloodRequest = await BloodRequest.findByPk(req.params.id);
      if (!bloodRequest) {
        return res.status(404).json({ message: 'Blood request not found' });
      }
      if (bloodRequest.userId !== (req.user as any).id) {
        return res.status(403).json({ message: 'Not authorized to update this request' });
      }
      await bloodRequest.update(req.body);
      res.json(bloodRequest);
    } catch (error) {
      res.status(500).json({ message: 'Error updating blood request' });
    }
  }
);

// Delete a blood request
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { BloodRequest } = require('../models/bloodRequest.model');
      const bloodRequest = await BloodRequest.findByPk(req.params.id);
      if (!bloodRequest) {
        return res.status(404).json({ message: 'Blood request not found' });
      }
      if (bloodRequest.userId !== (req.user as any).id) {
        return res.status(403).json({ message: 'Not authorized to delete this request' });
      }
      await bloodRequest.destroy();
      res.json({ message: 'Blood request deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting blood request' });
    }
  }
);

export default router; 