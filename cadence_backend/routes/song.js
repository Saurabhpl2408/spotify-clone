const express = require("express");
const passport = require("passport");
const router = express.Router();
const Song = require("./../models/song");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res.status(301).json({ err: "Insufficient details of the song" });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    try {
      console.log(songDetails);
      const createdSong = await Song.create(songDetails);
      console.log(createdSong);
      return res.status(200).json({ createdSong });
    } catch (error) {
        console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const currentUser = req.user;
      console.log(req.user._id);
      const songs = await Song.findOne({ artist: req.user._id }).lean();
      return res.status(200).json({ data: songs });
    } catch (error) {
        console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);
module.exports = router;
