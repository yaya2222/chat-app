import { Router } from "express";
import userControllers from "../controllers/userControllers";
const router = Router()

router.post("/",userControllers.registerUser)
router.post("/login",userControllers.authUser)

export default router