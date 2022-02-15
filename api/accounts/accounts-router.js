const router = require("express").Router();
const Account = require("./accounts-model");

const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require("../accounts/accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const account = await Account.getAll();
    res.status(200).json(account);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, async (req, res) => {
    res.status(200).json(req.account);
});

router.post("/", 
  checkAccountPayload, 
  checkAccountNameUnique, (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  }
);

router.put("/:id", 
  checkAccountId, 
  checkAccountNameUnique, 
  checkAccountPayload, (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", checkAccountId, (req, res, next) => {
  try {
    
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    custom: "something went wrong with the accounts router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
