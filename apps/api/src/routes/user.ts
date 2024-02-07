import { Router } from "express";
import { ApplicationController } from "../controllers/user";

const router = Router();

router.post("/application", ApplicationController.create);
