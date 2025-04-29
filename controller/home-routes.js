import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("homepage", { message: "Testing the post" });
});

export default router;
