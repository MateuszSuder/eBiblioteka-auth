import express from "express";
import authorize from "../../../services/authorize/authorize.js";

const router = express.Router();

router.post("/", authorize);

export default router;