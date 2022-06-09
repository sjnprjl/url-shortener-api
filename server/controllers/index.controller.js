export default (req, res) => {
  res.status(200).send({ redirectUrl: req.redirectUrl });
};
