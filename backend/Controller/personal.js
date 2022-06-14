import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Personal ( idade INTEGER, telefone TEXT, localnascimento TEXT, localatual TEXT)');
    });
};

export async function selectDados(req, res) {
    openDb().then(db => {
        db.all('SELECT * from Personal')
            .then(dados => res.json(dados))
    });
};

export async function insertDados(req, res) {
    let dados = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Personal (idade, telefone, localnascimento, localatual) VALUES (?, ?, ?, ?)', [dados.idade, dados.telefone, dados.localnascimento, dados.localatual]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function autalizarDados(req, res) {
    let pessoa = req.body;
    openDb().then(db => {
        db.run('UPDATE Pessoa SET telefone=?, idade=? WHERE nome=?', [pessoa.telefone, pessoa.idade, pessoa.nome]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function deletarDados(req, res) {
    let id = req.body.nome;
    openDb().then(db => {
        db.get('DELETE FROM Personal WHERE id=?', [id])
            .then(res=>res)
    });
    res.json({
        "statusCode": 200
    });
};