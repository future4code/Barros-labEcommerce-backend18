import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function cadastrarProduto(
    req: Request,
    res: Response
){
    try{
        const {name, price, image_url} = req.body
    
        if(!name && !price && !image_url){
            return res.status(422).send("Insira todos os parâmetros necessários!!")
        }
    
        await connection.insert(
            [{
                id:Math.random(),
                name: name,
                price: price,
                image_url: image_url
            }]
        ).into("Labecommerce_products")        
    
        res.status(201).send(`Produto cadastrado com sucesso!`)
        

    }catch(error:any){
        console.log(error)
    }
}