import { Router } from "express";
import { urlShortenerController } from "../controllers/api.controller.js";
import { validUrl, validShortUrl } from "../middlewares/api.middleware.js";

export const router = Router();

router.post("/url-short", validUrl, urlShortenerController);
router.post("/original-url", validShortUrl, (req, res) => {
    res.status(200).send({redirectUrl: req.redirectUrl});
});
