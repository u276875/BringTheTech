const router = require("express").Router();
const apiRoutes = require("./page-items-api");
const htmlRoutes = require("./htmlRoutes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).end();
});

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'It works'
//   });
// });

module.exports = router;
