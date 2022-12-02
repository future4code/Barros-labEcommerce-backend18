import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function listarCompras(
    req: Request,
    res: Response
){
    const userId = req.params.user_id
    try{

        if(!userId){
            return res.status(422).send("Insira todos o id do usuário")
        }

        let result = await connection.raw(
             `SELECT * FROM Labecommerce_purchases WHERE user_id=${userId}`
         )
         res.status(200).send(result[0])
     }catch(error:any){
         console.log(error.message)
     }
}