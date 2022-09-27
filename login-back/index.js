const env = require('dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USER}`,
    pass: `${process.env.PASS}`,
    database: `${process.env.DATABASE}`,
    port: `${process.env.PORT}`,
});

app.use(cors());
app.use(express.json());

db.connect((err) => {
    if (err) {
        console.log(`Erro na conexão do database...${err}`);
        return;
    } else {
        console.log('Conexão estabelecida');
    }
});

app.get('/', (req, res) => {
    let selectQuery = "SELECT * FROM pokemon";
    db.query(selectQuery, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/insert', (res, req) => {
    const { idpokemon } = res.body;
    const { nomepokemon } = res.body;
    const { tipopokemon } = res.body;
    const { imagempokemon } = res.body;
    let insertQuery = "INSERT INTO pokemon (idpokemon, nomepokemon, tipopokemon, imagempokemon) VALUES ( ?, ?, ?, ?)";
    db.query(insertQuery, [idpokemon, nomepokemon, tipopokemon, imagempokemon], (err, result) => {
        console.log(err);
    });
});


app.put('/update', (res, req) => {
    const { idpokemon } = res.body;
    const { nomepokemon } = res.body;
    const { tipopokemon } = res.body;
    const { imagempokemon } = res.body;

    let updateQuery = "UPDATE user SET idpokemon=?, nomepokemon=?, tipopokemon=?, imagempokemon=? WHERE idpokemon=?";
    db.query(updateQuery, [idpokemon, nomepokemon, tipopokemon, imagempokemon], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:idpokemon', (req, res) => {
    const { idpokemon } = req.body;
    let deleteQuery = "DELETE FROM user WHERE idpokemon=?";
    db.query(deleteQuery, [idpokemon], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log(`Rodando servidor na porta: ${3001}`);
})