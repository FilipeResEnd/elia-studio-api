const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    menssage: "Get from route /post",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Post from route /post ",
  });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  res.status(200).send({
    message: "Get post from /id",
    post: idw,
  });
});

module.exports = router;
