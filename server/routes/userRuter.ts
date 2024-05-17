import { Router } from "express";
import userControllers from "../controllers/userControllers";
import upload from "../config/multer";
const router = Router()

router.post("/",upload.single('file'),userControllers.registerUser)
router.post("/login",userControllers.authUser)

export default router