const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "sonu") {
    req.user = { name: "sonu", id: 4 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }

  if (req.query) console.log("authorize");
  next();
};

module.exports = authorize;
