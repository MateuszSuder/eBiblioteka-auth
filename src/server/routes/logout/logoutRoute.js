import express from "express";
import withAuth from "../../../framework/middlewares/withAuth.js";
import logout from "../../../services/logout/logout.js";

const router = express.Router();

router.post("/", withAuth({role: "USER"}), logout);

export default router;