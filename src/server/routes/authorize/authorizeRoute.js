import express from "express";
import authorize from "../../../services/authorize/authorize.js";
import withAuth from "../../../framework/middlewares/withAuth.js";

const router = express.Router();

router.post("/", withAuth({ role: "ADMIN" }), authorize);

export default router;