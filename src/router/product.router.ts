import {Router} from "express";
import {ProductController} from "../controllers/product.controller"
export const productRouter = Router()
productRouter.post("/product" , ProductController.CreateProduct)