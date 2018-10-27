const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/api/articles")
  .get(articleController.findAll)
  .post()

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router.route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;