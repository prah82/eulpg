import express from "express";
import { sendMailController } from "../controllers/form.Controller.js";

const router = express.Router();

router.post("/sendmail", sendMailController);

export default router;
