
import { body, validationResult } from "express-validator";
import {Request, Response, NextFunction} from "express";
const handleValidationErrors= async (req: Request, res: Response, next: NextFunction)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
 };

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("email").isString().notEmpty().withMessage("Email must be a string"),
    body("hostel").isString().notEmpty().withMessage("Hostel must be a string"),
    body("room_number").notEmpty().withMessage("Room Number must be a number"),
    handleValidationErrors,
];