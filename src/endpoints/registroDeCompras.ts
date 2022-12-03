import { raw, Request, Response } from "express";
import { connection } from "../data/connection";

export default async function registrarCompras(
    req: Request,
    res: Response
){
    try{
        const {user_id, product_id , quantity} = req.body

        if(!user_id || !product_id || !quantity){
            return res.status(422).send("Insira todos os parâmetros necessários!!")
        }
        
        const precoProduto = await connection.raw( `
            SELECT price from Labecommerce_products WHERE id=${product_id};
        `)
        .then(res => res[0][0].price)
        
        console.log(precoProduto)

        const pedido = await connection.insert(
            [{
                id: Math.random(),
                user_id: user_id,
                product_id: product_id,
                quantity: quantity,
                total_price: quantity * precoProduto
            }]
        ).into("Labecommerce_purchases")
        res.status(201).send("Pedido realizado com sucesso!")
        
    }catch(error:any){
    }
}