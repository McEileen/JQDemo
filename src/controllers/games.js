/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  const g = new Game(req.body);
  g.save(() => {
    res.send(g);
  });
});

router.post('/num', (req, res) => {
  const g = new Game(req.body);
  g.save(() => {
    res.send(g);
  });
});
