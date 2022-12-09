const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const boutiquesRouter = require('./boutiques.js');
const reviewsRouter = require('./reviews.js');
const perfumesRouter = require('./perfumes.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/boutiques', boutiquesRouter);
router.use('/reviews', reviewsRouter);
router.use('/perfumes', perfumesRouter);



router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
