const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../config/database");
const { Op } = require("sequelize");

const { Note, User } = require("../../db/models");

// const router = express.Router();

// Read notes
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const notes = await Note.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    res.json(notes);
  })
);

// Create route [ Create Note ]

router.post(
  "/",
  // asyncHandler overcomes try catch
  asyncHandler(async (req, res) => {
    // Req data
    // console.log(req.body);
    const { title, textbody, user_id } = req.body;
    const createNote = await Note.create({ title, textbody, user_id });
    res.json(createNote);
  })
);

// Update Route

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { title, textbody, user_id } = req.body;
    // const updateRecord = await Note.update({title, textbody, user_id},
    const recordNote = await Note.findOne({
      where: {
        // Finding where the ID of the Note === the NoteId. so note id(3) belongs to NoteId (3)
        // Record found
        id: req.params.id,
      },
    });
    recordNote.update({ title, textbody });
    res.json(recordNote);
  })
);

// Delete Route
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const findNoteDestroy = await Note.findOne({
      where: {
        id: req.params.id,
      },
    });
    findNoteDestroy.destroy();
    res.json(findNoteDestroy);
  })
);

// When you make a post request sending Data to server [ ] ->
// Comes back in object which we deconstruct and JSON

// router.put(‘/book/:bookId’, function (req, res, next) {
//  Book.update(
//    {title: req.body.title},
//    {returning: true, where: {id: req.params.bookId} }
//  )

// // Update -
// // userId - Post that belongs to that userId
// router.put("/", asyncHandler(async (req, res) => {
// const { title, textbody } = req.body.data;
// const userId = req.body.data.sessionUser.id;

// }))

// router.post(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { description, pic, rating, beerId } = req.body.data;
//     const userId = req.body.data.sessionUser.id;
//     const beer = await Beer.findByPk(beerId);
//     const breweryId = beer.dataValues.brewery;

//     const checkinData = await checkin.create({
//       userId,
//       breweryId,
//       description,
//       pic,
//       rating: parseInt(rating) || 0,
//       beerId: parseInt(beerId),
//     });
//     const checkedIn = await checkin.findByPk(checkinData.id, {
//       include: [User],
//     });

// Delete

// router.delete

// router.get(
//   "/notes/:id",
//   asyncHandler(async (req, res) => {
//     const specificNote = await Note.findAll({
//       where: { note_id: req.params.id },
//       include: User,
//     });
//     res.json(specificNote);
//   })
// );

// router.get(
//   "/search/:name",
//   asyncHandler(async (req, res) => {
//     // Get all beers that match search terms
//     const someBeers = await Beer.findAll({
//       where: { name: { [Op.iLike]: `%${req.params.name}%` } },
//       include: [Brewery, Type],
//     });

module.exports = router;
