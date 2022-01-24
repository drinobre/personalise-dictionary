import express from "express";
const router = express.Router();

import {
  getAllWords,
  getContentByWord,
  createNewWordDefinition,
} from "../modules/index.js";

/* GET home page. */
router.get("/", async function (req, res, next) {
  let result;
  result = await getAllWords();

  res.json({ success: true, payload: result });
});

/* GET users by Word */
router.get("/:word", async function (req, res, next) {
  let result;

  const { word } = req.params;
  result = await getContentByWord(word);

  res.json({
    success: true,
    payload: result,
  });
});

router.post("/", async function (req, res) {
  let result;
  const { word, example, definition } = req.body;

  result = await createNewWordDefinition(word, example, definition);

  res.json({
    success: true,
    payload: result,
  });
});

export default router;
