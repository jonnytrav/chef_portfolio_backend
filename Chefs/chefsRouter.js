const router = require("express").Router();
const DB = require("./chefsModel.js");

// TO FIND A SPECIFIC CHEFS PAGE
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const chef = await DB.findChef(id);
    res.status(200).json(chef);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//TO CREATE A NEW CHEF ACCOUNT
router.post("/", (req, res) => {
  let chefInfo = req.body;

  DB.createChef(chefInfo)
    .then(idArray => {
      res.status(201).json({ chefId: idArray[0] });
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
