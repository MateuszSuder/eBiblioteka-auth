import express from "express";
import register from "../../../services/register/register.js";

const router = express.Router();

router.post("/", register);

export default router;