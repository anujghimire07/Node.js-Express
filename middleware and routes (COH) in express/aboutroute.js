const express = require("express")
const router = express.Router()


//router level middleware
router.use((req, res, next) => {
  console.log('Router specific middleware');
  next();
});

router.get("/", (req, res) => {
    return res.send("this is about page")
})

router.get("/:id", (req, res) => {
    res.send("this is dymanic parameter (about page)")
})

module.exports = router