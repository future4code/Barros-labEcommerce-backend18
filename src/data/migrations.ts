import { connection } from "./connection"

const erroMensagem = (error:any) => {console.log(error.message || error.sqlMessage)}

const criarTabelas = () => connection
    .raw( 
        `
        CREATE TABLE Labecommerce_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE Labecommerce_products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );

        CREATE TABLE Labecommerce_purchases(
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price DECIMAL NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Labecommerce_users(id),
            FOREIGN KEY (product_id) REFERENCES Labecommerce_products(id)
        );
        `
    )
    .then(() => {console.log("Tabela criada com sucesso")})
    .catch(erroMensagem)

    criarTabelas()
