import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
    register,
    login
} from "../controllers/auth.js";
const router = express.Router();
router.post("/register", register),
 router.post("/login", login)

export default router;