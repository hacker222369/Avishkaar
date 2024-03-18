import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (req: Request,res: Response,next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("room_number").isInt({ min: 1 }).withMessage("Room Number must be a positive integer"),
  body("hostel").isString().notEmpty().withMessage("Hostel must be a string"),
  handleValidationErrors,
];

export const validateMyCanteenRequest = [
  body("canteenName").notEmpty().withMessage("Restaurant name is required"),
  body("cuisines").isArray().withMessage("Cuisines must be an array").not().isEmpty().withMessage("Cuisines array cannot be empty"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
  body("menuItems.*.price").isInt({ min: 0 }).withMessage("Menu item price is required and must be a postive integer"),
  handleValidationErrors,
];
