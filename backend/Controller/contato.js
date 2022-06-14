import { openDb } from '../configDB.js';

export async function createTableContato() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Contato ( nome TEXT, email TEXT, telefone INTEGER)');
    });
};

export async function insertDadosContatos(req, res) {
    let dados = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Contato (nome, email, telefone) VALUES (?, ?, ?)', [dados.nome, dados.email, dados.telefone]);
    });
    res.json({
        "statusCode": 200
    });
}