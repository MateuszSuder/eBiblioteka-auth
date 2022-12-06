import express from "express";
import login from "../../../services/login/login.js";

const router = express.Router();

router.post("/", login);

export default router;