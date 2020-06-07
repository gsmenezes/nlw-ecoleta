const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {

    //     //Criar tabela
    //     db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         email TEXT,
    //         telephone NUMBER,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    //     `)

    //     // Inserir dados
    //     const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         email,
    //         telephone,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?,?);
    //     `

    //     const values = [
    //         "Papersider",
    //         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //         "Guilherme Gemballa, Jardim América",
    //         "Número 260",
    //         "teste@teste.com.br",
    //         "(15)99999999",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Papéis e Papelão"
    //     ]

    //     function afterInsertData(err) {
    //         if (err) {
    //             return console.log(err)
    //         }
    //         console.log("Cadastrado com sucesso!")
    //         console.log(this)
    //     }

    //     db.run(query, values, afterInsertData)

    //     // Consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão os seus registros:");
    //     console.log(rows);
    // })

    // Deletar dados - descomentar quando
    // for necessário
    // db.run(`DELETE FROM places WHERE id = ?`, [5], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro apagado com sucesso!");
    // })

})