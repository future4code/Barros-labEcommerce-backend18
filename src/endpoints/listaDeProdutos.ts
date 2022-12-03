import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function listarProdutos(
    req: Request,
    res: Response
){
    try{
        let result = await connection.raw(
             `SELECT * FROM Labecommerce_products`
         )
         res.status(200).send(result[0])
     }catch(error:any){
         console.log(error.message)
     }
}