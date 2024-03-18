import express from "express";
import multer from "multer";
import MyCanteenController from "../controllers/MyCanteenController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyCanteenRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
});


router.post(
  "/",
  upload.single("imageFile"),
  jwtCheck,
  jwtParse,
  validateMyCanteenRequest,
  MyCanteenController.createMyCanteen
);

export default router;

