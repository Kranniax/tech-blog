import { Router } from "express";
import apiRoutes from "./api/index.js";
// import dashboardRoutes from "./dashboard-routes.js";
import homeRoutes from "./home-routes.js";

const router = Router();

router.use("/api", apiRoutes);
// router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

export default router;
