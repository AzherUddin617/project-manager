import { Router } from "express";
import { getProjects } from "../controllers/projectController";

const projectRouter = Router();

projectRouter.get("/", getProjects);

export default projectRouter;
