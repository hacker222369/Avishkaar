import { Request, Response } from "express";
import Canteen from "../models/canteen";
import cloudinary from "cloudinary";
import mongoose from "mongoose";


const createMyCanteen = async (req: Request, res: Response) => {
  try {
    const existingCanteen = await Canteen.findOne({ user: req.userId });

    if (existingCanteen) {
      return res
        .status(409)
        .json({ message: "Canteen already exists" });
    }

    const image = req.file as Express.Multer.File;
    const base64Image=Buffer.from(image.buffer).toString("base64");
    const dataURI=`data:${image.mimetype};base64,${base64Image}`;
    const uploadResponse=await cloudinary.v2.uploader.upload(dataURI);

    const canteen=new Canteen(req.body);
    canteen.imageUrl=uploadResponse.url;
    canteen.user=new mongoose.Types.ObjectId(req.userId);
    canteen.lastUpdated=new Date();

    await canteen.save();
    res.status(201).send(canteen);
    } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default{
    createMyCanteen,
};


