import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function criarUsuario(
    req: Request,
    res: Response
){
    try{
        const {name, email, password} = req.body
    
        if(!name && !email && !password){
            return res.status(422).send("Insira todos os parâmetros necessários!!")
        }
    
        await connection.insert(
            [{
                id:Math.random(),
                name: name,
                email: email,
                password: password
            }]
        ).into("Labecommerce_users")        
    
        res.status(201).send(`Sua conta foi criada com sucesso!`)
        

    }catch(error:any){
        console.log(error)
    }
}