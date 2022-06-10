import { Router } from "express";
import { urlShortenerController } from "../controllers/api.controller.js";
import { validUrl, validShortUrl } from "../middlewares/api.middleware.js";

export const router = Router();

router.post("/shorten", validUrl, urlShortenerController);
router.get("/original/:shortUrl", validShortUrl, (req, res) => {
    res.status(200).send({redirectUrl: req.redirectUrl});
});
