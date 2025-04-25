import { Router } from "express";
import userRoute from "./user-routes.js";
import postRoute from "./post-routes.js";
import commentRoute from "./comment-routes.js";

const router = Router();

router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/comments", commentRoute);

export default router;
