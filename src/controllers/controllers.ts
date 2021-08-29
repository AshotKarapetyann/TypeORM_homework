import {Products} from "../entity/products";
import {Request, Response} from "express";
import {getRepository} from "typeorm";
import "reflect-metadata";

export const Controllers = {
   async createProduct(req:Request,res:Response){
      const product = new Products();
      product.productName = req.body.productName;
      product.price = req.body.price;
      product.quantity = req.body.quantity;
      getRepository(Products).save(product);
      res.send("Product created successfully!");
   },
   async readAllProducts(req:Request,res:Response){
      const product = await getRepository(Products).find();
      res.send(product);
   },
   async readById(req:Request,res:Response){
      const product = await getRepository(Products).findOne(req.params.id);
      res.send(product);
   },
   async updateProduct(req:Request,res:Response){   
      await getRepository(Products).update({id:req.body.id}, req.body);
      res.send("Product is update!");
   },
   async deleteProduct(req:Request,res:Response){
      await getRepository(Products).delete(req.params.id);
      res.send("Product is delete!");
   }
};
