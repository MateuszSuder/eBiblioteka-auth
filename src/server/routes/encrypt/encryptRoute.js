import express from "express";
import withAuth from "../../../framework/middlewares/withAuth.js";
import encrypt from "../../../services/encrypt/encrypt.js";

const router = express.Router();

router.post("/", withAuth({role: "ADMIN"}), encrypt);

export default router;