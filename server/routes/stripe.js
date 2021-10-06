const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51Jhc4YSHWH5bR8RUhQopVBViXHkOoJNEP0v2sHyKj0PtnhcQ7Su46fEGpGaTVIdIXd2tqGg6UwPljCnzuvi1BIpK00Q8PeIly5"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      description: req.body.description,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
