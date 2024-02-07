import { Router } from "express";
import loginController from "../controllers/auth/login";
import registerController from "../controllers/auth/register";
import { isGuest } from "../middleware";

const router = Router();

router.use(isGuest);

router.post("/login", loginController);

router.post("/register", registerController);

export default router;
